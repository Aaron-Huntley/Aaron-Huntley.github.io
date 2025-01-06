<style>
.md-content {
    max-width: 80em;
}
</style>
#1.4. Natural transformations
 


<span style="display:block" class="definition">

Let $\mathscr{C},\mathscr{D}$ be categories. Let $F\colon\mathscr{C}\rightarrow \mathscr{D}$, and $G\colon\mathscr{C}\rightarrow \mathscr{D}$ be functors. A *natural transformation*, $\eta\colon F\Rightarrow G$ between $F$ and $G$ is an assignment which sends each $\mathscr{C}-Object$, $A$, to a map $\eta_{A}\in\ho{F(A)}{G(A)}$, where the *naturality condition* holds: 

\begin{quotation}
Given $A,A^{\prime}\in\ob{\cat{C}}$, then for each map $f\in\ho{A}{A^{\prime}}$,

\begin{align}

\eta_{A^{\prime}} \circ F(f) = G(f) \circ \eta_{A}.
\end{align}

Equation \ref{eqn:natualitycondition} is equivalent to saying the diagram,\\

<img src="../../../png/Python/chapter_1/tikz_code_4_0.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
commutes.
\end{quotation}
We call $\eta_{A}$ *the component of $\eta$ at $A$*.
</span>
We see some examples below.

\subsection{Examples}



<span style="display:block" class="example">

Let $P$ be the power set functor as in \ref{exe:functorpowerset} and $id_{\mathbf{Set}}$ be the identity functor on $\mathbf{Set}$ as in \ref{def:identityfunctor}. We have natural transformation, $\nattran{\eta}{id_{\mathbf{Set}}}{P}$. such that,  for  each $X\in\ob{\mathbf{Set}}$, 

\begin{align*}
\eta_{X}\colon id_{\mathbf{Set}}(X)&\rightarrow P(X),\\
x&\mapsto \{x\}.
\end{align*}

We need to show the naturality condition holds. Let
$X,Y\in\ob{\mathbf{Set}}$ and $f\in\ho{X}{Y}$. For each $x\in id_{\mathbf{Set}}(X)$,

\begin{align*}
(\eta_{Y}\circ id_{\mathbf{Set}}(f))(x) &= \eta_{Y}(f(x))\\
&= \{f(x)\}\\
&= P(f)(\{x\})\\
&= (P(f)\circ \eta_{X})(x).
\end{align*}

Therefore the naturality condition holds and $\eta$ is a natural transformation.
</span>
Another example of a natural transformation is given below.

<span style="display:block" class="example">

Let $P\colon\mathbf{Set}\rightarrow\mathbf{Set}$ be the power set functor as defined in \ref{exe:functorpowerset} and $P^2:\mathbf{Set}\rightarrow\mathbf{Set}$ be the composition of $P$ with its self as defined in \ref{def:functcomp}. Then we can define $\mu\colon P^2 \Rightarrow P$ where, for each $X\in\ob{\mathbf{Set}}$, we have,

\begin{align*}
\mu_{X}\colon P^2(X)&\rightarrow P(X),\\
A &\mapsto \bigcup_{I \in A} I. 
\end{align*}

We need to show the naturality condition holds. Since $A$ is a set of subsets of $X$ then $\bigcup_{I\in A}I$ will be a subset of $X$. Furthermore for a set $A$, $\bigcup_{I\in\mathcal P(A)}I=A$. Then given $X,Y\in\ob{\mathbf{Set}}$ and $f\in\ho{X}{Y}$. For each $A\in P^2(X)$,

\begin{align*}
(\mu_{Y}\circ P^2(f))(A) &= \mu_{Y}(f[A])\\
&= \bigcup_{I\in f[A]} I\\
&= P^2(f)(\bigcup_{I\in A}I)\\
&= P^2(f)\circ \mu_{X}(A).
\end{align*}

Where the third equality is true since the union of an image of a set is equal to the image of the union. Therefore we have defined a natural transformation.
</span>
These two natural transformations have some importance we discuss later. Here is another example of a natural transformation.

<span style="display:block" class="example">

Recall the functors $\func{\GL}{\mathbf{Crng}}{\mathbf{Grp}}$ and $\func{\Units}{\mathbf{Crng}}{\mathbf{Grp}}$ defined in Example \ref{exe:matrixringfunc} and Example \ref{exe:ringdet} respectively, 

Let $\nattran{\det}{\GL}{\Units}$ be defined for each $R\in\mathbf{Crng}$ as,

\begin{align*}
\det_R\colon \GL(R) &\to R^*\\
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}&\mapsto a\times_{R}d+_{R}-b\times_{R}c.
\end{align*}

Here $-b$ is the additive inverse of $b$. 

$a\times_{R}d+_{R}-b\times_{R}c \in R^*$ since it is invertable in $R$.

We first show for each $R\in\mathbf{Crng}$ that $\det_R$ is a group homomorphism.
Given $M,N\in\GL(R)$, we know $\det(MN)= \det(M)\det(N)$.


We need to show the naturality condition holds.
Given $R,S\in\mathbf{CRng}$ and any $f\in\ho{R}{S}$ then for each $\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}\in \GL(R)$ we have,

\begin{align*}
(\Units(f)\circ \det_R)\left(\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}\right) &= \Units(f)(a\times_{R}d+_{R}-b\times_{R}c)\\
&=f(a\times_{R}d+_{R}-b\times_{R}c)\\
&=f(a)\times_{S}f(d)+_{S}-f(b)\times_{S}f(c)\\ 
&=\det_S\left(\begin{bmatrix}
f(a)&f(b)\\
f(c)&f(d)
\end{bmatrix}\right)\\
&= (\det_S \circ \GL(f))(\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}).
\end{align*}

The third equality is true since additive inverses are preserved under ring homomorphisms.
Hence the naturality condition holds, therefore $\det$ is a natural transformation.
</span>
The following example comes from Leinster \cite{Leinster} (Page 29 Example 1.3.4).

<span style="display:block" class="example">

Let $X,Y\in\ob{\mathbf{Set}}$ be sets then recall from Example \ref{exe:leftactionfunc} we have functors $L_{X}$ and $L_{Y}$ representing left actions of the monoid $\cat{M}$ on the sets $X$ and $Y$ respectively. There is a natural transformation 

$$\nattran{\alpha}{L_{X}}{L_{Y}}$$

where for the single object $m\in\ob{\cat{M}}$ we have a map $\alpha_{m}\in\ho[\mathbf{Set}]{X}{Y}$ where the naturality condition implies for each $g\in\ho[\cat{M}]{M}{M}$,

\begin{align*}
\alpha_{M} \circ L_{X}(g) = L_{Y}(g)\circ \alpha_{M}
\end{align*}

so for an element $x\in X$,

$$\alpha_{M}(L_{g}(x)) = L_{Y}(g)(\alpha_{M}(x)),$$

that is,

$$\alpha_M(gx) = g\alpha_{M}(x),$$

So the natural transformation $\alpha$ represents a map of the sets $X$, $Y$ preserving left action from $\cat{M}$.
</span>

\subsection{Composition of natural transformations}
 

There are different ways to compose natural transformations; we can take natural transformations with the same domain and co-domain (vertical composition) or we can compose a natural transformation with a functor which leads to an alternative definition of composition (Horizontal composition). 

\subsubsection{Vertical composition of natural transformations}
 

First we compose two natural transformations whose functors they act on have the same domain and co-domain as demonstrated in the pasting diagram below. Ideas from this section are thanks to Riehl \cite{Riehl} and Leinster \cite{Leinster}.

<img src="../../../png/Python/chapter_1/tikz_code_4_1.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>

<span style="display:block" class="definition">[Vertical composition]

Let $\cat{C},\cat{D}$ be categories, $\func{F,F^\prime,F^{\prime\prime}}{C}{D}$ be functors and $\nattran{\eta}{F}{F^\prime}$ and $\nattran{\mu}{F^\prime}{F^{\prime\prime}}$ natural transformations. We then define 

$$\nattran{\mu\cdot\eta}{F}{F^{\prime\prime}}$$

where for each $X\in\cat{C}$,

$$(\mu\cdot\eta)_{X}= \mu_{X}\circ\eta_{X}.$$

</span>

<span style="display:block" class="remark">
We may also use the notation $(\mu\circ\eta)_{X}$ to mean $(\mu\cdot\eta)_{X}$
</span>

<span style="display:block" class="lemma">
The vertical composition of two natural transformations as defined above in Definition \ref{def:vertcomp} is a natural transformation.
</span>
\begin{proof}
We need to prove that for $\mu\cdot\eta$ the naturality condition holds. Given $X,Y\in\ob{\mathscr{C}}$ and a map $f\in\ho{X}{Y}$ we have,

\begin{align*}
(\mu\cdot\eta)_{Y}\circ F(f) &= \mu_{Y}\circ(\eta_{Y}\circ F(f))\\
&= \mu_{Y}\circ (F^{\prime}(f) \circ\eta_{X}) &\text{since $\eta$ is a natural transformation,}\\
&= (F^{\prime\prime}(f)\circ\mu_{X})\circ\eta_{X}&\text{since $\mu$ is a natural transformation,}\\
&= F^{\prime\prime}(f)\circ(\mu\cdot\eta)_{X}.
\end{align*}

There for the naturality condition holds and therefore the composition of two natural transformations is a natural transformation.
\end{proof}

\subsubsection{Horizontal composition of natural transformations}
 

First we see how natural transformations can compose with functors. The diagram below illustrates how this should work.

<img src="../../../png/Python/chapter_1/tikz_code_4_2.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>

<span style="display:block" class="definition">

Let $\cat{B,C,D,E}$ be categories, $\func{F}{\cat{B}}{\cat{C}}$, $\func{G,G^{\prime}}{\cat{C}}{\cat{D}}$ and $\func{F^\prime}{\cat{D}}{\cat{E}}$ be functors and $\nattran{\eta}{G}{G^\prime}$ a natural transformation. Given $B\in\cat{B}$, we define the natural transformation $\nattran{\eta F}{GF}{G^\prime F}$ where for each $B\in\ob{\cat{B}}$,

$$(\eta F)_B = \eta_{F(B)}.$$

Given $C\in\cat{C}$ we also define the natural transformation $\nattran{F^{\prime}\eta}{F^\prime G}{F^\prime G^\prime}$ where for each $C\in\ob{\cat{C}}$,

$$(F^{\prime}\eta)_{C} = F^\prime(\eta_{C}).$$

</span>

<span style="display:block" class="lemma">

$\eta F$ and $F^{\prime}\eta$ as defined above in Definition \ref{def:natcompfunc} are natural transformations.
</span>
\begin{proof}
We need to show that the naturality condition holds. First for $\eta F$. Given $B,B^\prime\in\cat{B}$ and $f\in\ho{B}{B^\prime}$ we have,

\begin{align*}
(\eta F)_{B^\prime}\circ GF(f) &= \eta_{F(B^\prime)}\circ GF(f)\\
&= \eta_{F(B^\prime)}\circ G(F(f))\\
&= G^\prime(F(f))\circ\eta_{F(B)}, &\text{ by the naturality of $\eta$}\\
&= G^\prime F(f)\circ\eta_{F(B)}.
\end{align*}

Now we prove $F^\prime\eta$ is natural. Given $C,C^\prime\in\cat{C}$ and $g\in\ho{C}{C^\prime}$ we have,

\begin{align*}
(F^\prime \eta)_{C^\prime}\circ F^\prime G(g) &= F^\prime(\eta_{C^\prime})\circ F^\prime G(g)\\
&= F^\prime (\eta_{C^\prime}\circ G(g))\\
&= F^\prime(G^\prime(g)\circ\eta_{C}), &\text{ by the naturality of $\eta$}\\
&= F^\prime G^\prime(g)\circ F^\prime(\eta_{C})\\
&= F^\prime G^\prime(g)\circ(F^{\prime}\eta)_{C}.
\end{align*}

\end{proof}
Now we can define horizontal composition of natural transformations, the diagram below illustrates this,

<img src="../../../png/Python/chapter_1/tikz_code_4_3.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>

<span style="display:block" class="definition">

Let $\cat{C},\cat{D},\cat{E}$ be categories, $\func{F,F^{\prime}}{\cat{C}}{\cat{D}},\func{G,G^{\prime}}{\cat{D}}{\cat{E}}$ functors and $\nattran{\mu}{F}{F^{\prime}},\nattran{\eta}{G}{G^{\prime}}$ natural transformation. We then define,

$$\eta*\mu\colon GF\Rightarrow G^{\prime}F^{\prime}$$

where for each $X\in\cat{C}$,

\begin{align*}
(\eta*\mu)_{X}&=G^\prime(\mu_{X})\circ\eta_{F(X)}\\
&=\eta_{F^{\prime}(X)}\circ G(\mu_{X}).
\end{align*}

The last equality is true by the naturality condition of $\eta$ on the morphism $\mu_{X}$ in $\cat{B}$. This definition is equivalent to the composition of the following commutative diagram.

<img src="../../../png/Python/chapter_1/tikz_code_4_4.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
</span>

<span style="display:block" class="lemma">
$\eta*\mu$ as defined above is a natural transformation.
</span>
\begin{proof}
Again we need to show the naturality condition holds for $\eta*\mu$. Given $X,Y\in\ob{\cat{C}}$ and $f\in\ho{X}{Y}$ we have,

\begin{align*}
(\eta*\mu)_{Y} \circ GF(f) &= \eta_{F^{\prime}(Y)}\circ G^\prime(\mu_{Y}) \circ GF(f)\\
&=\eta_{F^{\prime}(Y)}\circ GF^{\prime}(f)\circ G^{\prime}(\mu_{X})\\
&= G^{\prime}F^{\prime}(f)\circ \eta_{F^{\prime}(X)}\circ G^{\prime}(\mu_{X})\\
&= G^{\prime}F^{\prime}(f) \circ (\eta*\mu)_{X}.
\end{align*}

The third equality is true by the naturality of $\eta$ and the second is true by the naturality of $\mu$ and that functors preserve commutativity (This is not proved here but can be found in Riehl \cite{Riehl}).
This proof is equivalent to saying the diagram,

<img src="../../../png/Python/chapter_1/tikz_code_4_5.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
commutes.
\end{proof}


\subsubsection{Composition interchange}
 

This section is adapted from Leinster \cite{Leinster} (Page 38). If we have the categories, functors and natural transformations as in the diagram below we can compose vertically and then horizontally or horizontally then vertically. We find this to be equivalent.

<img src="../../../png/Python/chapter_1/tikz_code_4_6.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>

<span style="display:block" class="theorem">[Composition interchange]

Let $\cat{C,D,E}$ be categories, $\func{F,F^\prime,F^{\prime\prime}}{C}{D}$ and $\func{G,G^\prime,G^{\prime\prime}}{D}{E}$ functors and 
$$\nattran{\mu}{F}{F^\prime}, \nattran{\eta}{F^\prime}{F^{\prime\prime}}, \nattran{\alpha}{G}{G^\prime}, \nattran{\beta}{G^\prime}{G^{\prime\prime}}$$
 natural transformations. Then,
\begin{equation}

(\beta\cdot\alpha)*(\eta\cdot\mu)=(\beta*\eta)\cdot(\alpha*\mu).
\end{equation}
</span>
\begin{proof}
For each $X\in\ob{\cat{C}}$ we have,

\begin{align*}
((\beta\cdot\alpha)*(\eta\cdot\mu))_{X} &= G^{\prime\prime}((\eta\cdot\mu)_{X})\circ(\beta\cdot\alpha)_{F(X)}\\
&= G^{\prime\prime}(\eta_{X}\circ\mu_{X})\circ\beta_{F(X)}\circ\alpha_{F(X)}\\
&= G^{\prime\prime}(\eta_{X})\circ G^{\prime\prime}(\mu_{X})\circ\beta_{F(X)}\circ\alpha_{F(X)}\\
&= G^{\prime\prime}(\eta_{X})\circ (\beta_{F^{\prime}(X)}\circ G^\prime(\mu_{X}))\circ\alpha_{F(X)}\\
&= (G^{\prime\prime}(\eta_{X})\circ \beta_{F^{\prime}(X)})\circ (G^{\prime}(\mu_{X})\circ\alpha_{F(X)})\\
&=(\beta*\eta)_{X}\circ(\alpha*\mu)_{X}\\
&= ((\beta*\eta)\cdot(\alpha*\mu))_{X}.
\end{align*}

Where the fourth equality is from the naturality of $\beta$.
\end{proof}

<span style="display:block" class="remark">
Equation \eqref{eqn:interchange} defines a natural transformation from $GF$ to $G^{\prime\prime}F^{\prime\prime}$.
</span>

\subsection{Functor categories}
 

We can consider functors as objects and natural transformations as morphisms between them. Since we have a notion of composing natural transformations we just need to show there exists an identity transformation for each functor and that composition is associative and we will have a category.


<span style="display:block" class="definition">

Let $\cat{C}$ and $\cat{D}$ be categories and $\func{F}{C}{D}$ be a functor. Then define,

\begin{align*}
\nattran{id_{F}}{F&}{F},\\
id_{F_{X}}&\mapsto id_{F(X)}.
\end{align*}

</span>

<span style="display:block" class="lemma">

$id_{F}$ as defined above is a natural transformation.
</span>
\begin{proof}
We need to show the naturality condition holds. Given $X,Y\in\ob{\cat{C}}$ and $f\in\ho{X}{Y}$ we have,

\begin{align*}
id_{F_{Y}}\circ F(f) &= id_{F(Y)} \circ F(f)\\
&= F(f)\\
&= F(f)\circ id_{F(X)}\\
&= F(f)\circ id_{F_X}.
\end{align*}

\end{proof}

<span style="display:block" class="definition">

Let $\cat{C}$,$\cat{D}$ be categories, $\func{F,G}{\cat{C}}{\cat{D}}$ be functors. We call a natural transformation $\nattran{\eta}{F}{G}$ a *natural isomorphism* if there exists a natural transformation $\nattran{\eta^{-1}}{G}{F}$ such that,

$$\eta\cdot\eta^{-1} = id_{G}$$

and,

$$\eta^{-1}\cdot\eta = id_{F}.$$

</span>

<span style="display:block" class="lemma">
Let $\cat{C}$ and $\cat{D}$ be categories then for each functor $\func{F}{C}{D}$ The natural transformation $id_{F}$ acts as an identity with respect to vertical composition.
</span>
\begin{proof}
Given any functors from $\cat{C}$ to $\cat{D}$, $\func{G}{C}{D}$ and $\func{G^{\prime}}{C}{D}$ and any two natural transformations $\nattran{\eta}{F}{G}$ and $\nattran{\mu}{G^{\prime}}{F}$. Then for each $X\in\ob{\cat{C}}$,

\begin{align*}
(id_{F}\cdot\mu)_{X}&=id_{F_X} \circ \mu_{X}\\
&= id_{F(X)}\circ \mu_{X}\\
&=\mu_{X}
\end{align*}

and,

\begin{align*}
(\eta\cdot id_{F})_{X}&=\eta_{X} \circ id_{F_X}\\
&= \eta_{X} \circ id_{F(X)}\\
&= \eta_{X}.
\end{align*}

\end{proof}

<span style="display:block" class="lemma">

Vertical composition as defined in Definition \ref{def:vertcomp} is associative.
</span>
\begin{proof}
Let $\func{F}{C}{D}$, $\func{F^{\prime}}{C}{D}$, $\func{G^{\prime}}{C}{D}$ and $\func{G}{C}{D}$ be functors. Let $\nattran{\eta}{F}{F^{\prime}}$, $\nattran{\mu}{F^{\prime}}{G}$ and $\nattran{\gamma}{G}{G^{\prime}}$ be natural transformations. Then for each $X\in\ob{C}$,

\begin{align*}
(\mu\cdot(\eta\cdot\gamma))_{X}&= \mu_{X}\circ(\eta_{X}\circ\gamma_{X})\\
&= (\mu_{X}\circ\eta_{X})\circ\gamma_{X}\\
&= ((\mu\cdot\eta)\cdot\gamma)_{X}
\end{align*}

where $\circ$ is associative since $\cat{C}$ is a category.
\end{proof}

Using Definition \ref{def:category} we cannot state that for all categories $\cat{C}$ and $\cat{D}$ there exists a functor category with functors as the objects and natural transformations as the morphisms since it is possible to have class of natural transformations between two functors rather than a set we need to put a restriction on the size of the categories to guarantee the natural transformations between any two functors form a set. A similar theorem and proof of Theorem \ref{thm:functorcat} is given in  Riehl \cite{Riehl} (page 44 corollary 1.7.2) where here we specify small categories since Riehl uses a slightly different definition of a category.


<span style="display:block" class="definition">

A category $\cat{C}$ is called *small* if the collection of all morphisms in $\cat{C}$ form a set.
</span>


<span style="display:block" class="remark">
Definition \ref{def:smallcat} implies that the collection of all objects also forms a set since the objects are in a bijective correspondence with the set off all identity morphisms and these form a subset of the set of all morphisms in a category.
</span>


<span style="display:block" class="definition">

Let $\cat{C}$ and $\cat{D}$ be small categories. We define $\cat{D}^{\cat{C}}=(\ob{\cat{D}^{\cat{C}}},\hom,\circ,id)$ as:
\begin{enumerate}
\item $\ob{\cat{D}^{\cat{C}}}$ is the collection of all functors between $\cat{C}$ and $\cat{D}$;
\item For each $F,G\in\ob{\cat{D}^{\cat{C}}}$, $\ho[\cat{D}^{\cat{C}}]{F}{G}$ is the collection of natural transformations between $F$ and $G$;
\item $\circ$ is vertical composition of natural transformations as in Definition \ref{def:vertcomp};
\item For each $F\in\ob{\cat{D}^{\cat{C}}}$ we have the identity $id_{F}$ defined in Definition \ref{def:identnattran}.
\end{enumerate}
</span>


<span style="display:block" class="theorem">

$\cat{D}^{\cat{C}}$ defined above in Definition \ref{def:functorcat} is a small category.
</span>
\begin{proof}
First note that the collection of all functors between $\cat{C}$ and $\cat{D}$ is indeed a set since the collection of all functions between two sets forms a set. Similarly, the collection of all natural transformations between two functors is a set. Composition is defined in Definition \ref{def:vertcomp} which is associative by Lemma \ref{lem:vertcomassociative}. Identities exist and are defined by Definition \ref{def:identnattran}.
\end{proof}

The following example was stated on Wiki \cite{wiki:functorcat} where here we go in to more detail.

<span style="display:block" class="example">

Recall the category of sets, $\mathbf{Set}$ as defined in Example \ref{exe:catofsets} and consider a monoid $\cat{M}$ defined as a one object category as in Subsection \ref{sss:monascat}. The functor category $\mathbf{Set}^{\cat{M}}$ is the category whose objects are the left action functors, $L_{X}$, as defined in Example \ref{exe:leftactionfunc} and morphisms are the natural transformations defined in Example \ref{exe:nattranleftaction}. This category represents the category of sets acted on by left action of the monoid $\cat{M}$. The category $\mathbf{Set}^{\cat{M}}$ is isomorphic to a wide subcategory of the category $\mathbf{Set}$. Let the functor $\func{\sigma}{\mathbf{Set}^{\cat{M}}}{\mathbf{Set}}$ be defined on objects,

$$L_{X} \mapsto X$$

and for a morphism $\alpha\in\ho[\mathbf{Set}^{\cat{M}}]{L_{X}}{L_{Y}}$,

$$\alpha \mapsto \alpha_{m}$$


as in defined in Example \ref{exe:nattranleftaction}. Then $\sigma$ is an isomorphism from $\mathbf{Set}^{\cat{M}}$ to the subcategory of $\mathbf{Set}$ which has for morphisms only the functions of the form $\alpha_M$. 
</span>

\pagebreak


<script src="../../mathjax_helper.js"></script>