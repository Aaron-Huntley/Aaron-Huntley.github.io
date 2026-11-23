#!/usr/bin/env bash
# Render Quarto blog posts into the MkDocs docs folder.
#
#   quarto/<post>/index.qmd  ->  docs/blog/posts/<post>/index.md (+ _svgs/)
#
# Run this after editing a .qmd, then commit the generated files.
# Usage: ./render.sh            (all posts)
#        ./render.sh vdc-fam    (one post)
set -euo pipefail

cd "$(dirname "$0")"
export PATH="$HOME/Applications/quarto/bin:$PATH"

posts=("$@")
if [ ${#posts[@]} -eq 0 ]; then
  for d in quarto/*/; do
    [ -f "$d/index.qmd" ] && posts+=("$(basename "$d")")
  done
fi

for post in "${posts[@]}"; do
  src="quarto/$post"
  out="docs/blog/posts/$post"
  echo "==> Rendering $src/index.qmd"
  quarto render "$src/index.qmd" --to=markdown
  mkdir -p "$out"
  mv "$src/index.md" "$out/index.md"
  # Copy only the diagrams the post references (the cache may hold old ones).
  rm -rf "$out/_svgs"
  for svg in $(grep -o '_svgs/[0-9a-f]*\.svg' "$out/index.md" | sort -u); do
    mkdir -p "$out/_svgs"
    cp "$src/$svg" "$out/$svg"
  done
  echo "    -> $out/index.md"
done
