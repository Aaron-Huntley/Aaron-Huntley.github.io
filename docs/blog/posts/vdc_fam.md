---
date:
  created: 2026-05-20
draft: true
---

# Generalised family monads on virtual double categories

This is a cross post with [*topos institute*](https://topos.institute) where I spent the summer as an RA. 
 
Discovering how to describe the double category of sets, functions and partial functions as a free construction while on the way building a useful definition of a generalised product and coproduct in virtual double categories. 
The post accompanies a [*talk*]() and a soon to be released paper for a complete exposition. 

<!-- more -->

<!-- audience:  layman, 

# Intro

The story contains some characters, some of you will have read other stories with the same characters, if so please enjoy the plot, others may not know any of the characters, if thats you heres a brief introduction to them, highlighting features I think are relevant to the plot.

In other words, the title may seem intimidating to those who have never seen any of the words, however I want to make the story accessible to everyone, so here's my best crack at giving a flavour of those words. 

A monad, among other things, is a way of encoding *rules* (algebraic structure) without having to fix a choice of the object which the rules apply to. 
For example, the "free group monad" prescribes a notion of multiplication, units and inverses with out relying on saying which object the group structure acts on. 
A monadic view allows us to ask, and answer, questions which we should be able to ask for any well behaved set of rules (sufficiently algebraic structure). 
For example: What are the "special" algebras (free algebras)? Is an algebraic structure on an object unique (idempotence)? Is the algebraic structure compatible with other algebraic structures (distributivity laws)?

A family is an set ($I$) of humans ($H$) which share a common trait, typically genetics. 
So a family of "things in" $H$ is a set of "things in" $H$ remembering that those "things" are, for example, humans so you can't cut them in half and call that a "thing" in $H$.
One way to describe this is by saying for each element of $I$, I give you a "thing" in $H$, call that an $I$-indexed collection of ("things in") $H$. 
A better way to describe a family with out saying "thing" is a map $I\to H$ (the trick is to define the map you need to say what a "thing" is). 
So a family monad is a way of encoding the algebra of coherently indexing "things".
For us the $H$ will be a virtual double category, and the algebra which the family monad encodes will be taking products or coproducts of a virtual double category.

A virtual double category is a structure of objects and how they're related in two different ways; a strict way and a loose way. For example, a person may be related to their coworker since they work at the same place. 
This relationship is, in some sense, strict since (barring obtuse examples) if I work at the same place as you and you work at the same place as Kevin then I work at the same place as Kevin. 
A person may also be related to their friend since they share a love for football. 
However, you might consider this relationship loose since if I am friends with you and you are friends with Kevin, I may not necessarily be friends with Kevin.
So the words strict and loose describe the ways in which we can *compose* relationships.

Generalised in this context means, we have more structure to work with when we know $H$ is a virtual double category and so we can index by more than just a set $I$.

Before I get into the mathematics, I want to thank everyone at Topos Institute for making my time here so amazing.
Being a summer RA at Topos was a wholly wonderful experience; the research, the experiences and the friends I made make for unforgettable memories. 


# Motivation

There are multiple motivations you can consider to lead you down the path of this story. 
Here I will tell you the one which I have found the most compelling.

A set is perhaps the most fundamental concept to mathematics.
It is also something easily described to a non mathematician, as a "collection of things", its one layer of abstraction which takes reality into the abstract world of thought. 
In mathematics we are often interested if something is like a set.
If that thing has elements we can play around with and use those elements to define functions.
Category theory has many ways of convincing to us why sets are fundamental and important, despite its effort to escape them. 
For example the category of sets and functions is very well behaved. 
In fact it is the free coproduct completion of the the terminal category (we will see why shortly).
However, despite how intuitive sets feel I might be unsatisfying to know of the many different morphisms between sets.
Although functions are the ones we like the most, they are neither the most general nor the most precise.

Partial functions are like functions only you do not have to define them on every input. 
In fact, in every calculus course it is convenient to define as functions from the set of real numbers to the set of real numbers and say where the function is undefined, so we are actually defining a partial functions.
On the other hand multivalued functions are like a function but can map to many different outputs.
The square root is a prototypical multivalued function.
Perhaps the worst offender is $\ln(x)$ where it is both undefined at $0$ and has many values in $\mathbb{C}$, hence is a multivalued partial function.
So all of these maps are natural to consider but we have always tried to fit them as functions.

**Image of func multi func and partial func and multivalued partial func**

So we have categories $\mathbf{Par}$ and $\mathbf{Mult}$ and they're also somewhat well behaved. 
Similarly to how $\mathbf{Set}$ is the free coproduct completion of $*$ are $\mathbf{Par}$ and $\mathbf{Mult}$ some kind of free construction?

-->

<!-- audience:  category theorist -->

# Introduction



# Motivation

# Background

## Virtual double categories

Motivate VDCs?

Familiarity with category theory

Double categories and VDCs

double category of spans

# Family construction in set

# Double families 

# Double products 

# Generation theorems

# Cat of partial functions and multivalued functions

# Synthetic categories of sets

# Synthetic categories of partial functions.
