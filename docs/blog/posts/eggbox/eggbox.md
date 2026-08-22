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
  <img src="../../../../../images/eggbox.jpeg" alt="The eggbox." style="width: 100%;">
  <figcaption>The eggbox.</figcaption>
</figure>

The full discussion of the problem is pending to be written up by Shiv and I but here I include the AI generated code solution to the problem.

<!-- Ideas for the write up: include how I am not an applied mathematician and theres prob some pure solution -->

On the night of the eggbox problem we cobbled together some poorly written python code which could compute all combinations for an $n\times m$ egg box with $k$ eggs. 
After finding a satisfying solution (so we could safely store our eggs in the future) we discussed extensions and variants of the problem. 
Since then, I have no interest in writing any more python code.
Luckily, I don't really have to since claude can do it for me. 
On a separate note im blown away at how easy it is for AI to write code now.
Currently we have the standard variation of the problem but I intend to add the future variants and hopefully something more complicated may arise.


## Try the egg box tracker

Click **LOAD**, then the run arrow in the lower-right corner of the editor.
The three values at the top are deliberately easy to change: choose the number
of columns and rows, list occupied positions as `(column, row)` pairs, and
choose how many eggs to use in the all-combinations calculation. The program
runs entirely in your browser.

```py
--8<-- "blog/posts/eggbox/egg_box_tracker.py"
```
