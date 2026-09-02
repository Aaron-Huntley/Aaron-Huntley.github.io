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

The category $\mathbf{Set}$ of sets and functions is the free coproduct completion of the terminal category, $*$.
This is apparently folklore; the earliest appearance in print we know of is \cite{BenaBou1985Fibered}. 
We define a free coproduct completion for a category $\mathsf{C}$ via the family construction, $\mathsf{Fam} \colon \mathbf{Cat}\to \mathbf{Cat}$. An object of $\mathsf{Fam}(\mathsf{C})$, $(I,x)$, is a set $I$ with $I$-indexed objects of $\mathsf{C}$, $x_i$. A morphism, $(f_0,f)\colon (I,x)\to (J,y)$, is a function $f_0\colon I\to J$ with $I$-indexed morphisms of $\mathsf{C}$, $f_i\colon x_i\to y_{f_0(i)}$.
There is an inclusion $\Delta\colon \mathsf{C}\to \mathsf{Fam}(\mathsf{C})$ given by sending objects and morphisms to the objects and morphisms indexed by the singleton set $*$.
We then obtain the universal property: for any functor $F\colon \mathsf{C}\to \mathsf{D}$ where $\mathsf{D}$ has small coproducts, there exists an essentially unique coproduct preserving functor $\hat{F}\colon \mathsf{Fam}(\mathsf{C})\to \mathsf{D}$ such that the following diagram commutes,

\begin{equation*}
\begin{tikzcd}
	& {\mathsf{Fam}(\mathsf{C})} \\
	{\mathsf{C}} & {\mathsf{D}}
	\arrow["{\hat{F}}", dashed, from=1-2, to=2-2]
	\arrow["\Delta", from=2-1, to=1-2]
	\arrow["F"', from=2-1, to=2-2]
\end{tikzcd}.
\end{equation*}

Can we trace the universal property in reverse, that is, if you know the family construction on a category how do you recover the coproduct?
If $\mathsf{C}$ has coproducts then we can define $\Sigma:= \widehat{\mathsf{id}_{\mathsf{C}}} \colon \mathsf{Fam}(\mathsf{C})\to \mathsf{C}$.
It is a fun exercise to show that a category $\mathsf{C}$ has coproducts if and only if the inclusion $\Delta\colon \mathsf{C}\to \mathsf{Fam}(\mathsf{C})$ admits a left adjoint, $\Sigma\dashv \Delta$. 
So, we can characterise a coproduct starting with the family construction by the existence of a left adjoint.

When we start looking at higher dimensional category theory, in particular in double categories, it is not uncommon for equivalent definitions of a concept to diverge. 
In this case, you may want to define a coproduct as an initial cocone over a discrete diagram $F\colon I\to \mathsf{C}$ or as a left adjoint to the inclusion $\Delta\colon \mathsf{C}\to \mathsf{Fam}(\mathsf{C})$ depending on which is convenient.
Grandis and Paré in their seminal paper \cite{GPlimindblcats} extended the former definition to the setting of double categories.
They defined what it means for a double functor from a small double category, $F\colon \mathbb{I} \to \mathbb{D}$, to have a (co)limit.
In particular when $\mathbb{I}$ is discrete we obtain a definition for a double (co)product.
If we then ask what we get when we take the terminal double category, $*$, and freely add double coproducts we obtain the double category of sets, functions, trivial vertical arrows and cells, $\mathbb{S}\mathsf{et}_{\mathsf{id}}$. 
It's reasonable to find this unsatisfying, since we're losing the 2-dimensional information about a double category which differentiates it from that of an ordinary (1-)category.
If you know some double category theory you may expect what we were hoping for was actually the double category $\mathbb{S}\mathsf{pan}$ of sets, functions, spans and span homomorphisms. $\mathbb{S}\mathsf{pan}$ plays a crucial role in double category theory as exhibited, for example, by Paré in \cite{pareYoneda}, where the double Yoneda embedding lands in $\mathbb{S}\mathsf{pan}$-valued double functors.

Remedying this problem was the goal of Evan Patterson's paper \cite{evan:prod_in_dbl}. 
Evan defined a double family construction $\mathbb{F}\mathsf{am}(\mathbb{D})$, the key difference being we index the proarrows in $\mathbb{D}$ by arbitrary spans of sets $I\leftarrow A\rightarrow J$, and redefined a double coproduct as a lax left adjoint to the inclusion $\Delta \colon\mathbb{D}\to \mathbb{F}\mathsf{am}(\mathbb{D})$, mirroring the $1$-categorical case.
Interestingly, indexing proarrows by an identity span specialises to the Grandis and Paré definition.
Furthermore, completing with respect to the new coproduct gives us the desired result, $\mathbb{F}\mathsf{am}(*)\cong\mathbb{S}\mathsf{pan}$.

This summer Evan and I unfolded a more nuanced story where we both generalised and refined the original result.
First, we extended the family construction to the setting of (co)virtual double categories.
This allows us to define a notion of product in a virtual double category and coproduct in a covirtual double category (sometimes called oplax virtual double category).
One benefit is that we can now capture examples such as coproducts in the covirtual double category $\mathbb{S}\mathsf{pan}(\mathsf{C})$, which, we will see later, can be defined even when $\mathsf{C}$ does not have pullbacks.
Second, we noticed that particular classes of spans whose left leg is in $L$ and right leg is in $R$, called $(L,R)$-spans, are closed under certain coproduct and pullback operations.
So, we can specify further the family construction with respect to $(L,R)$, $\mathbb{F}\mathsf{am}_{(L,R)}$ and give definitions of $(L,R)$-(co)products.
The non-trivial complexity of what it means to be a (co)product in a double category can be seen when we try to present a "biased" view of a double product.
That is, a category $\mathsf{C}$ has all finite products if and only if it has binary products and a terminal object. In a double category, we need more than just binary double products and terminal objects to generate all double products, and finding generating sets is even more catastrophic in a virtual double category.

Finally, as an application of the new theory we can exhibit the double categories $\mathbb{P}\mathsf{ar}$ and $\mathbb{M}\mathsf{ult}$, of partial functions and multivalued functions, as free $(L,R)$-coproduct completions of the terminal double category $*$ where $R$ is all functions and $L$ is the injections or surjections, respectively. 

# Virtual Double Categories

We are assuming the reader is familiar with some category theory but may not have come across virtual double categories (VDCs).
It is worth spending some time to get used to VDCs since they are becoming increasingly useful in the study of formal category theory.
The idea was first introduced by Burroni in \cite{BTcats} as the case $\mathrm{T}=\mathrm{fc}$ of his "$\mathrm{T}$-categories" where $\mathrm{fc}$ is the free category monad. Virtual double categories were then developed by Leinster in \cite{Leinster2004Higher} named "$\mathrm{fc}$-multicategories". We will use the name and notation from Cruttwell and Shulman in \cite{cruttwellshulman_gen_multicat}.

Before seeing a virtual double category, it is worth remembering what a double category is.
A double category is a category object internal to $\mathbf{Cat}$.
We will denote the underlying category of objects and arrows as $\mathbb{D}_0$ and of proarrows and cells as $\mathbb{D}_1$.
Double categories have proven useful since they can package together two kinds of arrows in the same structure.
For example, sets typically have functions as maps between them, and functions are very well studied. However, there are other kinds of mappings between sets such as relations, partial functions and spans. 
We can define the double categories $\mathbb{P}\mathsf{ar}$ or $\mathbb{S}\mathsf{pan}$ with functions as arrows and partial functions or spans as the proarrows.
This allows us to study partial functions or spans through their relationship with functions.

The step from double categories to virtual double categories is a small one. We forget about the composition of proarrows, and to compensate we need that the cells have an arbitrary string of "composable" proarrows as a source.

\begin{definition}[Virtual double category, (VDC)]
ADD
\end{definition}

To recover the relation to double categories, we can define notions of virtual double functors and transformations as the maps preserving the relevant structure.
Then there is a inclusion (fully faithful on $1$-cells and $2$-cells) of the $2$-category of double categories, lax functors and transformations, into the $2$-category of virtual double categories, virtual functors and transformations.
\[\mathbf{Dbl}_{\mathrm{lax}} \hookrightarrow \mathbf{vDbl}\]

Let us tie up the loose end that was in the intro, how to define $\mathbb{S}\mathsf{pan}(\mathsf{C})$ even when $\mathsf{C}$ doesn't have pullbacks. 
First, let's dualise our definition of a VDC to get what's called a covirtual double category (coVDC).
Notice how simply reversing the arrows in a VDC will not give us back a VDC, due to the asymmetry of the multi-source and single-target of the cells.
So define a coVDC to consist of objects, arrows, proarrows and cells of the shape,
ADD CELL DIAG

Now we can give a use for this abstraction hinted in the intro. 
\begin{example}
For \emph{any} category $\mathsf{C}$ define the covirtual double category $\mathbb{S}\mathsf{pan}(\mathsf{C})$:
\begin{itemize}
  \item on objects and arrows, the objects and arrows of $\mathsf{C}$;
  \item on proarrows, spans of arrows of $\mathsf{C}$, $X\leftarrow A\rightarrow Y$
  \item on cells,
  ADD GENERAL CELL DIAG
  a collection of arrows of $\mathsf{C}$, $f_i\colon A \to B_i$ such that the diagram
  ADD SPAN DIAG
  commutes.
\end{itemize}
\end{example}
Since we didn't need to compose spans, we never needed pullback. 
If $\mathsf{C}$ had pullbacks then by the universal property the maps into the apexes give a unique map into the pullback, hence our definition and one defined by maps into the pullback coincide.

# The family construction for virtual double categories

Now that we have "\emph{familiarised}" ourselves with virtual double categories and the family construction, we will put them together to get the family construction on VDCs.
Giving the definition will seem a little intimidating so first let's figure out how we get there.
To come up with the definition, there's one thing we know already we want the construction to be the same on objects and arrows as for the family construction on categories.
This leaves us to decide what happens on proarrows and cells. 
Evan's observation was to index the proarrows by a \emph{span} of sets $I\leftarrow A \rightarrow J$.
To see why this makes sense recall for a double category $\mathbb{D}$, there are underlying categories $\mathbb{D}_0$ and $\mathbb{D}_1$ with source and target functors $s,t\colon\mathbb{D}_1\rightrightarrows \mathbb{D}_0$, since a double category is a category object internal to $\mathbf{Cat}$.
We want to index both of these underlying categories with a discrete category, that is, a set viewed as a category.
We could choose the same set $I$ indexing both categories giving us a diagram,

ADD PARALLEL PROD DIAGRAM

However, it makes just as much sense to index the categories by different underlying sets with functors (functions since the categories are sets) that commute with the source and target functors,

ADD SPAN INDEXING DIAGRAM

This is what we mean when we say we are indexing by a span.
Coming up with this generalised indexing forces what makes sense on the cells, and even though we don't have diagrams like this in virtual double categories we can still perform the same construction.

\begin{definition}[Family construction on VDCs]
ADD
\end{definition}

\begin{remark}[Covariant vs Contravariant]
  You may have noticed the arrows in the construction here are going in the reverse direction that you might expect. 
  This is because we are stating the contravariant family construction, and the reason for it is so we can define products in VDCs instead of coproducts. Interestingly, to define coproducts in a double category we need to consider the covariant family construction which lives on covirtual double categories.
  To avoid getting in to the weeds we will only present the contravariant version. 
  To signify the difference we include a $*$ on the contravariant versions. 
\end{remark}

We learn from the $1$-categorical case that the family construction encodes coproducts.
In fact we can say this statement much more precisely; the family construction is the free coproduct completion monad.
That is, taking families is an algebraic construction and the algebras over the monad give categories with coproducts. 
The unit of the monad is the inclusion of a category into the category of families and the multiplication is taking coproducts in the category of families.
If $\mathsf{C}$ is an algebra, then the algebra laws force the algebra action, $\Sigma$, to be isomorphic to taking coproducts in $\mathsf{C}$. In fact $\mathsf{Fam}(-)$ is what's called a lax-idempotent monad on $\mathbf{Cat}$ which tells us the algebra structure, if it exists, is unique up to isomorphism \cite{KLPropertylikestructues}. 

## Span indexing pairs

Indexing proarrows by a span gives us a lot more freedom on what we're indexing by. 
It is no longer just the indexing set that can vary, but also the functions in the legs of the span.
We can notice certain classes of these functions, for example injections, are closed under the operations which encode the family monad.
So there is not just one family monad but many depending on which class of functions we choose for the legs of the span.
In particular we have the following,

\begin{definition}[Span indexing pair]
A \emph{span indexing pair}, $(L,R)$, is a pair of classes of functions satisfying:
\begin{enumerate}
  \item pullback closure
  \item coproduct closure
  \item unit
\end{enumerate}
\end{definition}

ADD POSET OF SPAN INDEXING PAIRS

The definition reflects exactly the conditions we need for the family construction to assemble into a monad.
More precisely, we can now define a refined family construction $\mathbb{F}\mathsf{am}_{(L,R)}(\mathbb{D})$ by instead now only indexing by spans with the left leg in $L$ and right leg in $R$.

\begin{theorem}[Generalised family monads]
  For a span indexing pair $(L,R)$ there is a colax idempotent pseudomonad
  \[\mathbb{F}\mathsf{am}^*(-)\colon \mathbf{vDbl}\to \mathbf{vDbl}\]
  given by the family construction.
  The unit of the monad, $\Delta$, is the inclusion at the singleton set and the multiplication, $\Sigma$, is taking the coproduct over the indexing sets.
\end{theorem}

# Double products 
Everything about double products can be understood through the monad presentation here. 
However, it is valuable to unpack whats going on into other descriptions we might be more familiar with.
In particular, we want to recover the definition of a double product as an adjoint to the inclusion.
On one hand we can say a virtual double category with $(L,R)$-products is an algebra of $\mathbb{F}\mathsf{am}^*(-)$.
However, this doesn't give us much intuition of what these products "look like".
Instead, if you rephrase the definition of adjoint functors by a "universal arrow" definition it is easier to get your hands on the double products.
To find the details of what we mean, you'll have to wait for the paper.
Instead here we hope to give an intuition of what double products "look like".

As stated, we define a \emph{virtual double category with $(L,R)$-products}, $\mathbb{D}$, as a virtual double category such that $\Delta\colon \mathbb{D}\to \mathbb{F}\mathsf{am}^{*}(\mathbb{D})$ has a right adjoint, $\Pi$.

Then 


## Generation theorems


Bibtex citations:

@article{BenaBou1985Fibered,
  title={Fibered categories and the foundations of naive category theory},
  author={B{\'e}nabou, Jean},
  journal={The Journal of Symbolic Logic},
  volume={50},
  number={1},
  pages={10--37},
  year={1985},
  publisher={Cambridge University Press},
  doi={10.2307/2273784}
}

@article{evan:prod_in_dbl,
 author = {Patterson, Evan},
 title = {Products in double categories, revisited},
 fjournal = {Theory and Applications of Categories},
 journal = {Theory Appl. Categ.},
 issn = {1201-561X},
 volume = {45},
 pages = {537--601},
 year = {2026},
 language = {English},
 keywords = {18N10,18A30,18D70},
 url = {www.tac.mta.ca/tac/volumes/45/16/45-16abs.html},
 zbMATH = {8192165}
}

@article{GPlimindblcats,
 author = {Grandis, Marco and Par{\'e}, Robert},
 title = {Limits in double categories},
 fjournal = {Cahiers de Topologie et G{\'e}om{\'e}trie Diff{\'e}rentielle Cat{\'e}goriques},
 journal = {Cah. Topologie G{\'e}om. Diff{\'e}r. Cat{\'e}goriques},
 issn = {0008-0004},
 volume = {40},
 number = {3},
 pages = {162--220},
 year = {1999},
 language = {English},
 keywords = {18D05,18A30,18A25},
 url = {https://eudml.org/doc/91618},
 zbMATH = {1389226},
 Zbl = {0939.18007}
}

@article{pareYoneda,
 author = {Par{\'e}, Robert},
 title = {Yoneda theory for double categories},
 fjournal = {Theory and Applications of Categories},
 journal = {Theory Appl. Categ.},
 issn = {1201-561X},
 volume = {25},
 pages = {436--489},
 year = {2011},
 language = {English},
 keywords = {18D05,18A23,18A25,18A30,18A40,18B15},
 zbMATH = {6039011},
 Zbl = {1251.18004}
}

Burroni, Albert. $T$-catégories (catégories dans un triple). Cahiers de topologie et géométrie différentielle, Volume 12 (1971) no. 3, pp. 215-321. https://www.numdam.org/item/CTGDC_1971__12_3_215_0/

@book{Leinster2004Higher,
  author    = {Leinster, Tom},
  title     = {Higher Operads, Higher Categories},
  series    = {London Mathematical Society Lecture Note Series},
  volume    = {298},
  publisher = {Cambridge University Press},
  address   = {Cambridge},
  year      = {2004},
  pages     = {xiv+433},
  isbn      = {0-521-53215-9},
  doi       = {10.1017/CBO9780511525896},
  url       = {http://dx.doi.org/10.1017/CBO9780511525896}
}

@misc{cruttwellshulman_gen_multicat,
      title={A unified framework for generalized multicategories}, 
      author={G. S. H. Cruttwell and Michael A. Shulman},
      year={2010},
      eprint={0907.2460},
      archivePrefix={arXiv},
      primaryClass={math.CT},
      url={https://arxiv.org/abs/0907.2460}, 
}