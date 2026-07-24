(() => {
  const grid = document.querySelector("#p3-love-grid");

  if (!grid) return;

  const gridSize = 100;
  const cellCount = gridSize ** 2;
  const cellsByIndex = [];
  const foods = new Set();

  // How eagerly the two colonies cross through each other's territory
  // instead of bouncing off it. Higher = more braided/tangled growth.
  const CROSS_CHANCE = 0.6;

  const style = document.createElement("style");
  style.textContent = `
    #p3-love-layout {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 1.25rem;
    }

    .p3-love-cloud {
      flex: 0 1 12rem;
      width: 100%;
      max-width: 12rem;
      min-width: 8rem;
      height: 7.2rem;
      border-radius: 50%;
      overflow: hidden;
      background: var(--md-default-fg-color--lightest, #00000012);
    }

    .p3-love-cloud canvas {
      display: block;
      width: 100%;
      height: 100%;
    }

    #p3-love-grid {
      flex: 1 1 260px;
      width: 100%;
      max-width: 28rem;
      min-width: 0;
      --p3-love-orange: #aeea00;
      --p3-love-magenta: #e91e63;
      --p3-love-lime: var(--md-primary-fg-color, #ff7043);
      --p3-love-magenta-bright: color-mix(in srgb, var(--p3-love-magenta), white 65%);
      --p3-love-lime-bright: color-mix(in srgb, var(--p3-love-lime), white 65%);
      display: grid;
      grid-template-columns: repeat(100, minmax(0, 1fr));
      gap: 1px;
      aspect-ratio: 1;
      padding: 1px;
      background: var(--md-default-fg-color--lightest, #00000012);
      touch-action: manipulation;
      user-select: none;
    }

    .p3-love-cell {
      min-width: 0;
      min-height: 0;
      background: var(--md-default-bg-color, #fff);
      cursor: pointer;
      position: relative;
      transition: background-color 100ms ease;
    }

    .p3-love-cell--magenta {
      background: var(--p3-love-magenta);
    }

    .p3-love-cell--lime {
      background: var(--p3-love-lime);
    }

    /* Where the two colonies grow into (and through) one another. */
    .p3-love-cell--magenta.p3-love-cell--lime {
      background: repeating-linear-gradient(
        45deg,
        var(--p3-love-magenta) 0 3px,
        var(--p3-love-lime) 3px 6px
      );
    }

    .p3-love-cell--food {
      background: var(--p3-love-orange);
    }

    /* Marks the birthplace(s) each colony radiates from. */
    .p3-love-cell--origin::after {
      content: "";
      position: absolute;
      inset: 0;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.85);
      pointer-events: none;
    }

    /* Traveling flash used for the "wave of light" pulse effect: each
       colony's own colour, just lit up brighter, rather than a plain
       white flash. */
    .p3-love-cell--pulse-magenta,
    .p3-love-cell--pulse-lime {
      transition: none;
    }

    .p3-love-cell--pulse-magenta {
      background: var(--p3-love-magenta-bright) !important;
      box-shadow: 0 0 10px 4px var(--p3-love-magenta-bright);
    }

    .p3-love-cell--pulse-lime {
      background: var(--p3-love-lime-bright) !important;
      box-shadow: 0 0 10px 4px var(--p3-love-lime-bright);
    }
  `;
  document.head.append(style);

  const cells = document.createDocumentFragment();
  for (let index = 0; index < cellCount; index += 1) {
    const cell = document.createElement("div");
    cell.className = "p3-love-cell";
    cell.dataset.cell = index;
    cellsByIndex.push(cell);
    cells.append(cell);
  }
  grid.append(cells);

  // A layout row placed around the grid (in its existing spot in the page)
  // so a cloud panel can sit to its right.
  const layout = document.createElement("div");
  layout.id = "p3-love-layout";
  grid.replaceWith(layout);
  layout.append(grid);

  const cloudWrap = document.createElement("div");
  cloudWrap.className = "p3-love-cloud";
  const cloudCanvas = document.createElement("canvas");
  cloudCanvas.width = 260;
  cloudCanvas.height = 160;
  cloudWrap.append(cloudCanvas);
  layout.append(cloudWrap);

  const toIndex = (row, column) => row * gridSize + column;
  const toPosition = (index) => [
    Math.floor(index / gridSize),
    index % gridSize,
  ];

  const inBounds = (row, column) => (
    row >= 0 && row < gridSize && column >= 0 && column < gridSize
  );

  // Orthogonal neighbours: used for the slow, organic frontier growth.
  const neighbours4 = (index) => {
    const [row, column] = toPosition(index);
    return [
      [row - 1, column],
      [row + 1, column],
      [row, column - 1],
      [row, column + 1],
    ]
      .filter(([nextRow, nextColumn]) => inBounds(nextRow, nextColumn))
      .map(([nextRow, nextColumn]) => toIndex(nextRow, nextColumn));
  };

  const directions8 = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1],
  ];

  // 8-directional neighbours: shoots travel diagonally, so this is what
  // we use to trace connectivity through a colony's own cells.
  const neighbours8 = (index) => {
    const [row, column] = toPosition(index);
    return directions8
      .map(([rowStep, columnStep]) => [row + rowStep, column + columnStep])
      .filter(([nextRow, nextColumn]) => inBounds(nextRow, nextColumn))
      .map(([nextRow, nextColumn]) => toIndex(nextRow, nextColumn));
  };

  const createColony = (className, start) => ({
    className,
    cells: new Set(),
    frontier: new Set(),
    origins: [start],
    queue: [],
  });

  const grow = (colony, index) => {
    colony.cells.add(index);
    colony.frontier.add(index);
    cellsByIndex[index].classList.add(colony.className);
  };

  const markOrigin = (index) => {
    cellsByIndex[index].classList.add("p3-love-cell--origin");
  };

  const magentaStart = toIndex(
    Math.floor(Math.random() * 20),
    Math.floor(Math.random() * 20),
  );
  const limeStart = toIndex(99, 99);

  const magenta = createColony("p3-love-cell--magenta", magentaStart);
  const lime = createColony("p3-love-cell--lime", limeStart);
  grow(magenta, magentaStart);
  grow(lime, limeStart);
  markOrigin(magentaStart);
  markOrigin(limeStart);

  // "r, g, b" for a colony, read from an already-coloured cell rather than
  // its CSS custom property, since custom properties that reference other
  // vars (like --p3-love-lime) don't reliably resolve through getComputedStyle.
  const rgbComponentsOf = (index) => {
    const value = getComputedStyle(cellsByIndex[index]).backgroundColor;
    const numbers = value.match(/\d+(\.\d+)?/g);
    return numbers ? numbers.slice(0, 3).join(", ") : "255, 255, 255";
  };

  // Two drifting particle clouds sharing one space -- magenta on the left,
  // lime (orange) on the right -- each growing and flashing brighter every
  // time its colony's fungus pulses. Whenever the colonies interact, a
  // half-magenta half-lime particle spawns and drifts around the midpoint,
  // so the more they interact the more the middle fills in and the two
  // clouds visually become one.
  const createLoveCloud = (canvas, magentaRgb, limeRgb) => {
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const centerY = height / 2;

    const makeParticle = () => ({
      angle: Math.random() * Math.PI * 2,
      angularSpeed: (Math.random() - 0.5) * 0.5,
      baseRadius: 6 + Math.random() * 8,
      wobbleAmp: 4 + Math.random() * 6,
      wobbleFreq: 0.3 + Math.random() * 0.7,
      wobblePhase: Math.random() * Math.PI * 2,
      jitterPhaseX: Math.random() * Math.PI * 2,
      jitterPhaseY: Math.random() * Math.PI * 2,
      radius: 1.5 + Math.random() * 2.5,
    });

    const createGroup = (centerX, maxSpread, maxParticles, initialCount) => {
      const group = {
        centerX, maxSpread, maxParticles, spread: 18, pulseIntensity: 0, particles: [],
      };
      for (let i = 0; i < initialCount; i += 1) group.particles.push(makeParticle());
      return group;
    };

    const magentaGroup = createGroup(width * 0.28, width * 0.26, 80, 22);
    const limeGroup = createGroup(width * 0.72, width * 0.26, 80, 22);
    const hybridGroup = createGroup(width * 0.5, width * 0.16, 60, 0);

    const growGroup = (group) => {
      group.spread = Math.min(group.maxSpread, group.spread + 2);
      if (group.particles.length < group.maxParticles) {
        group.particles.push(makeParticle());
        if (Math.random() < 0.6) group.particles.push(makeParticle());
      }
      group.pulseIntensity = 1;
    };

    let lastTimestamp = null;
    const render = (timestamp) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const elapsed = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;
      const t = timestamp / 1000;

      ctx.clearRect(0, 0, width, height);

      // Advances and positions every particle in `group`, handing each one
      // to `draw` so the caller decides how it's actually painted.
      const drawGroup = (group, draw) => {
        group.pulseIntensity = Math.max(0, group.pulseIntensity - elapsed * 1.4);
        for (const particle of group.particles) {
          particle.angle += particle.angularSpeed * elapsed * 0.3;

          const radius = particle.baseRadius + group.spread * 0.7
            + particle.wobbleAmp * Math.sin(t * particle.wobbleFreq + particle.wobblePhase);
          const jitterX = Math.sin(t * 0.9 + particle.jitterPhaseX) * 3;
          const jitterY = Math.cos(t * 0.7 + particle.jitterPhaseY) * 3;

          const x = group.centerX + Math.cos(particle.angle) * radius + jitterX;
          const y = centerY + Math.sin(particle.angle) * radius * 0.75 + jitterY;
          const drawRadius = particle.radius * (1 + group.pulseIntensity * 0.8);
          draw(x, y, drawRadius, group.pulseIntensity);
        }
      };

      const drawDot = (rgb) => (x, y, radius, pulse) => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${rgb}, ${0.55 + pulse * 0.45})`;
        ctx.shadowColor = `rgba(${rgb}, ${0.6 + pulse * 0.4})`;
        ctx.shadowBlur = 6 + pulse * 10;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      };

      drawGroup(magentaGroup, drawDot(magentaRgb));
      drawGroup(limeGroup, drawDot(limeRgb));

      // Half-magenta, half-lime: a fused particle for a fused moment.
      drawGroup(hybridGroup, (x, y, radius, pulse) => {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.arc(x, y, radius, Math.PI / 2, -Math.PI / 2);
        ctx.closePath();
        ctx.fillStyle = `rgba(${magentaRgb}, ${0.6 + pulse * 0.4})`;
        ctx.shadowColor = `rgba(${magentaRgb}, ${0.6 + pulse * 0.4})`;
        ctx.shadowBlur = 5 + pulse * 8;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.arc(x, y, radius, -Math.PI / 2, Math.PI / 2);
        ctx.closePath();
        ctx.fillStyle = `rgba(${limeRgb}, ${0.6 + pulse * 0.4})`;
        ctx.shadowColor = `rgba(${limeRgb}, ${0.6 + pulse * 0.4})`;
        ctx.shadowBlur = 5 + pulse * 8;
        ctx.fill();
      });

      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    return {
      grow: (colony) => growGroup(colony === magenta ? magentaGroup : limeGroup),
      interact: () => growGroup(hybridGroup),
    };
  };

  const loveCloud = createLoveCloud(cloudCanvas, rgbComponentsOf(magentaStart), rgbComponentsOf(limeStart));

  const otherColonyOf = (colony) => (colony === magenta ? lime : magenta);

  // Distance to the nearest active food, so growth can be biased toward
  // whichever placed food is closest.
  const distanceToFood = (index) => {
    const [row, column] = toPosition(index);
    let best = Infinity;
    for (const food of foods) {
      const [foodRow, foodColumn] = toPosition(food);
      const distance = Math.abs(row - foodRow) + Math.abs(column - foodColumn);
      if (distance < best) best = distance;
    }
    return best;
  };

  // Groups every cell reachable from `start` (through cells either colony
  // has claimed, i.e. including the shared membrane) into concentric BFS
  // rings, so a pulse can wash outward through every branch of the fungus
  // at once instead of tracing a single path.
  const waveRings = (colony, start) => {
    const other = otherColonyOf(colony);
    const visited = new Set([start]);
    let ring = [start];
    const rings = [ring];

    while (ring.length) {
      const nextRing = [];
      for (const current of ring) {
        for (const next of neighbours8(current)) {
          if (visited.has(next)) continue;
          if (!colony.cells.has(next) && !other.cells.has(next)) continue;
          visited.add(next);
          nextRing.push(next);
        }
      }
      if (nextRing.length === 0) break;
      rings.push(nextRing);
      ring = nextRing;
    }

    return rings;
  };

  // Fires a wave of light in `colony`'s colour, rippling outward from
  // `start` through the whole connected structure ring by ring. Its cloud
  // grows and pulses in lockstep with every wave.
  const fireWave = (colony, start) => {
    loveCloud.grow(colony);
    const pulseClass = colony.className.replace("cell--", "cell--pulse-");
    waveRings(colony, start).forEach((ring, ringIndex) => {
      setTimeout(() => {
        for (const index of ring) {
          const cell = cellsByIndex[index];
          cell.classList.add(pulseClass);
          setTimeout(() => cell.classList.remove(pulseClass), 260);
        }
      }, ringIndex * 14);
    });
  };

  const collisionsFired = new Set();

  const handleFoodReached = (colony, index) => {
    // Already eaten (possibly by the other colony a moment earlier).
    if (!foods.has(index)) return;
    foods.delete(index);
    cellsByIndex[index].classList.remove("p3-love-cell--food");

    fireWave(colony, index);

    // The food becomes a brand-new hub the colony radiates from.
    colony.origins.push(index);
    markOrigin(index);
  };

  // Forces a cell into a colony, bypassing the usual bounce chance: used
  // only for the deliberate first-contact growth burst below.
  const explosionGrow = (colony, index) => {
    if (colony.cells.has(index)) return;
    const other = otherColonyOf(colony);
    const collided = other.cells.has(index);
    grow(colony, index);
    if (collided) handleCollision(colony, other, index);
    if (foods.has(index)) handleFoodReached(colony, index);
  };

  let firstContactFired = false;

  // The instant the two colonies first touch: a burst of tangled growth
  // wrapping the two colours around each other at the contact point, plus
  // a flurry of waves rippling out in both colours.
  const triggerFirstContact = (index) => {
    if (firstContactFired) return;
    firstContactFired = true;

    const [centerRow, centerColumn] = toPosition(index);
    const radius = 6;
    for (let rowOffset = -radius; rowOffset <= radius; rowOffset += 1) {
      for (let columnOffset = -radius; columnOffset <= radius; columnOffset += 1) {
        if (Math.hypot(rowOffset, columnOffset) > radius) continue;

        const row = centerRow + rowOffset;
        const column = centerColumn + columnOffset;
        if (!inBounds(row, column)) continue;
        if (Math.random() > 0.65) continue;

        explosionGrow(Math.random() < 0.5 ? magenta : lime, toIndex(row, column));
      }
    }

    for (let wave = 0; wave < 4; wave += 1) {
      setTimeout(() => {
        fireWave(magenta, index);
        fireWave(lime, index);
      }, wave * 240);
    }
  };

  const handleCollision = (colonyA, colonyB, index) => {
    if (collisionsFired.has(index)) return;
    collisionsFired.add(index);

    loveCloud.interact();
    fireWave(colonyA, index);
    fireWave(colonyB, index);
    triggerFirstContact(index);
  };

  // Attempts to grow `colony` into `index`, one cell at a time. Handles
  // running into the other colony (sometimes crossing over it, sometimes
  // bouncing off) and reaching any food placed on the grid.
  const tryGrow = (colony, index) => {
    if (colony.cells.has(index)) return true;

    const other = otherColonyOf(colony);
    if (other.cells.has(index)) {
      if (Math.random() >= CROSS_CHANCE) return false;
      grow(colony, index);
      handleCollision(colony, other, index);
      if (foods.has(index)) handleFoodReached(colony, index);
      return true;
    }

    grow(colony, index);
    if (foods.has(index)) handleFoodReached(colony, index);
    return true;
  };

  // Clockwise compass order (unlike directions8's grid-scan order), so
  // adjacent indices are 45 degrees apart and can be stepped through to
  // gently steer a line as it's traced.
  const compassDirections = [
    [-1, 0], [-1, 1], [0, 1], [1, 1],
    [1, 0], [1, -1], [0, -1], [-1, -1],
  ];

  // Traces a wobbly path starting one step beyond (row, column) in the
  // given compass direction, veering by 45 degrees at random so growth
  // reads as an organic, jagged line rather than a rigid straight one.
  const traceWobblyPath = (colony, row, column, dirIndex, length) => {
    const path = [];
    let currentRow = row;
    let currentColumn = column;
    let currentDir = dirIndex;

    for (let step = 0; step < length; step += 1) {
      if (Math.random() < 0.3) {
        const turn = Math.random() < 0.5 ? 1 : -1;
        currentDir = (currentDir + turn + compassDirections.length) % compassDirections.length;
      }

      const [rowStep, columnStep] = compassDirections[currentDir];
      currentRow += rowStep;
      currentColumn += columnStep;
      if (!inBounds(currentRow, currentColumn)) break;

      const next = toIndex(currentRow, currentColumn);
      if (colony.cells.has(next)) break;
      path.push(next);
    }

    return path;
  };

  const queueShoot = (colony, targetingFood) => {
    const tips = [...colony.frontier];
    if (tips.length === 0) return;

    const [row, column] = toPosition(tips[Math.floor(Math.random() * tips.length)]);
    const dirIndex = Math.floor(Math.random() * compassDirections.length);
    const length = targetingFood
      ? 4 + Math.floor(Math.random() * 12)
      : 2 + Math.floor(Math.random() * 4);

    // Queued rather than grown immediately, so the shoot is revealed
    // cell by cell on later ticks instead of appearing all at once.
    colony.queue.push(...traceWobblyPath(colony, row, column, dirIndex, length));
  };

  const growFrontier = (colony) => {
    // Finish drawing an in-flight shoot/line one cell per tick.
    if (colony.queue.length) {
      const next = colony.queue.shift();
      if (!tryGrow(colony, next)) colony.queue.length = 0;
      return;
    }

    const targetingFood = foods.size > 0;

    // No food to chase (or none left): grow slowly and aimlessly instead
    // of racing toward a target.
    if (!targetingFood && Math.random() < 0.65) return;

    const shootChance = targetingFood ? 0.22 : 0.06;
    if (Math.random() < shootChance) {
      queueShoot(colony, targetingFood);
      return;
    }

    const edges = [];
    for (const tip of colony.frontier) {
      const openNeighbours = neighbours4(tip).filter((index) => !colony.cells.has(index));
      if (openNeighbours.length === 0) {
        colony.frontier.delete(tip);
        continue;
      }

      for (const next of openNeighbours) {
        const score = targetingFood
          ? distanceToFood(next) + Math.random() * 12
          : Math.random() * 20;
        edges.push({ tip, next, score });
      }
    }

    if (edges.length === 0) return;

    edges.sort((first, second) => first.score - second.score);
    const choices = edges.slice(0, Math.min(12, edges.length));
    const { tip, next } = choices[Math.floor(Math.random() * choices.length)];

    // Even ordinary (non-shoot) growth advances as a short wobbly line
    // rather than a single node, so it reads consistently with shoots.
    const [tipRow, tipColumn] = toPosition(tip);
    const [nextRow, nextColumn] = toPosition(next);
    const dirIndex = compassDirections.findIndex(
      ([rowStep, columnStep]) => rowStep === nextRow - tipRow && columnStep === nextColumn - tipColumn,
    );
    const length = 3 + Math.floor(Math.random() * 4);
    const path = traceWobblyPath(colony, tipRow, tipColumn, dirIndex, length);
    if (path.length === 0) return;
    colony.queue.push(...path);
  };

  setInterval(() => {
    growFrontier(magenta);
    growFrontier(lime);
  }, 45);

  grid.addEventListener("click", (event) => {
    const cell = event.target.closest("[data-cell]");
    if (!cell || !grid.contains(cell)) return;

    const index = Number(cell.dataset.cell);

    // Clicking an existing food removes it; otherwise place a new one.
    // Any number of foods can be active on the grid at once.
    if (foods.has(index)) {
      foods.delete(index);
      cell.classList.remove("p3-love-cell--food");
      return;
    }

    foods.add(index);
    cell.classList.add("p3-love-cell--food");

    // If a colony already occupies the newly-placed food, it should react
    // immediately rather than waiting to "grow into" a cell it already has.
    for (const colony of [magenta, lime]) {
      if (colony.cells.has(index)) handleFoodReached(colony, index);
    }
  });
})();
