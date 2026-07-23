---
date:
  created: 2026-07-14
---

# The egg box problem

One weeknight mid semester in a sunny Cleveland, I was settling into a new place with a good friend and roommate, Shiv.
During this time I was baking some kind of [*lemon drizzle*](https://www.bbcgoodfood.com/recipes/lemon-drizzle-cake) each evening, and hence required many eggs.
While lifting a half empty egg box, with one hand, it felt slightly unbalanced and it had occurred to me there was a non-zero chance I could have dropped the box.
In this thought, I asked Shiv if there is a different way we can store the eggs to minimize the risk of dropping the box?
The conversation and resulting outcome is what follows.

<!-- more -->

<figure style="float: right; width: 30%;">
  <img src="images/eggbox.jpeg" alt="The eggbox." style="width: 100%;">
  <figcaption>The eggbox.</figcaption>
</figure>

Explanation to come but if you can try the program below.

## Try the egg box tracker

Click **LOAD**, then the run arrow in the lower-right corner of the editor.
The three values at the top are deliberately easy to change: choose the number
of columns and rows, list occupied positions as `(column, row)` pairs, and
choose how many eggs to use in the all-combinations calculation. The program
runs entirely in your browser.

```py
--8<-- "blog/posts/eggbox/egg_box_tracker.py"
```
