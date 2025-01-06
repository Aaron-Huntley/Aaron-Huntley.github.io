<style>
.md-content {
    max-width: 80em;
}
</style>
#1.3. Functors


Definitions and examples in this section come from various references including Leinster \cite{Leinster}, Adámek - Herrlick - Strecker \cite{ACC} can define a notion of morphisms between categories as follows.

<span style="display:block" class="definition">

Let $\mathscr{C}$ and $\mathscr{D}$ be categories. A *functor* is a pair
$F=(F^{ob},F^{hom})\colon \mathscr{C}\rightarrow\mathscr{D}$ where:
\begin{enumerate}
\item $F^{ob}$ is a function,

$$F^{ob}\colon \ob{\mathscr{C}}\rightarrow\ob{\mathscr{D}};$$

\item For each $A,A^{\prime}\in\ob{\mathscr{C}}$, $F^{hom}$ is a function,

\begin{align*}
F^{hom}\colon \ho[\cat{C}]{A}{A^{\prime}} &\rightarrow\ho[\cat{D}]{F^{ob}(A)}{F^{ob}(A^{\prime})},\\
f&\mapsto F^{hom}(f);
\end{align*}

\end{enumerate}
The following axioms are satisfied:
\begin{enumerate}
\item For all $f\in\ho{A}{A^{\prime}}$ and $f^{\prime}\in\ho{A^{\prime}}{A^{\prime\prime}}$, 

\begin{align*}
F^{hom}(f^{\prime}\circ^{\mathscr{C}} f) = F^{hom}(f^{\prime})\circ^{\mathscr{D}} F^{hom}(f)
\end{align*}
 
where $\circ^{\mathscr{C}}$ and $\circ^{\mathscr{D}}$ are the compositions for $\mathscr{C}, \mathscr{D}$ respectively;
\item For all $A\in\ob{\mathscr{C}}$, 

$$F^{hom}(id_{A}) = id_{F^{ob}(A)}.$$

\end{enumerate}
</span>

<span style="display:block" class="remark">

We will just write $F$ for both $F^{ob}$ and $F^{hom}$ and know which one is being used by what object it is acting on.
</span>

<span style="display:block" class="definition">

Given a category $\mathscr{C}$ let $F\colon\mathscr{C}\rightarrow\mathscr{C}$ be a functor from $\mathscr{C}$ to $\mathscr{C}$, then we call $F$ an *endofunctor*.
</span>

\subsection{Examples}



\subsubsection{Forgetful functor for monoids}


One of the easiest examples of a functor is the forgetful functor which, informally, takes any category where the objects are sets with added structure and 'forgets' any extra structure. These types of functors play an important role in the theory later in Section \ref{s:uniarrow} and Section \ref{s:monads}. We will see the case for monoids.

<span style="display:block" class="definition">[Forgetful functor for monoids]

Let $\mathbf{Mon}$ be the category of monoids as defined in Lemma \ref{lem:catofmon}. We define $U\colon \mathbf{Mon}\rightarrow\mathbf{Set}$ as:
\begin{enumerate}
\item 
\begin{align*}
U^0\colon \ob{\mathbf{Mon}}&\rightarrow\ob{\mathbf{Set}}\\
(G,*,e_{G})&\mapsto G;
\end{align*}

\item 
\begin{align*}
U^1\colon \ho[\mathbf{Set}]{G}{H}&\rightarrow\ho[\mathbf{Mon}]{U(G)}{U(H)}\\
f &\mapsto f.
\end{align*}

\end{enumerate}
</span>

<span style="display:block" class="lemma">
The $U\colon \mathbf{Mon}\rightarrow\mathbf{Set}$ defined above in Definition \ref{def:forgetfulfunctormon} is a functor.
</span>
\begin{proof}
Let $U$ be the forgetful functor for monoids, then:
\begin{enumerate}
\item For all $f\in\ho{G}{H}$ and $g\in\ho{H}{J}$,

\begin{align*}
U(h\circ^{Mon} g) = U(h) \circ^{Set} U(g)
\end{align*}

since $U(g) = g$, $U(h) = h$ and $\circ^{Mon}$ is the same as $\circ^{Set}$;
\item For all $G\in\ob{\mathbf{Mon}}$, 

$$U(id_{G}) = id_{G} = id_{U(G)}.$$

\end{enumerate}
Hence $U$ is a functor.
\end{proof}

\subsubsection{Free monoid functor}


Informally, free functors take a set and aim to add structure to form a different algebraic object. For example we will give the free functor for monoids, adapted from nCatLab \cite{nLab}. Free functors seem to be doing the opposite of forgetful functors, we will later make this notion rigorous in Section \ref{s:uniarrow} where these functors are 'adjoint'.

<span style="display:block" class="definition">

Let $X$ be a set. The *free monoid on $X$* is the triple $(\gamma(X),*,\varnothing)$ where: 
$$\gamma(X)=\{(x_{1},x_{2},\dots,x_{n})|n\in\mathbb{Z}^{+}, x_{1},x_{2},\dots,x_{n}\in X\}\cup\{\varnothing\}.$$
 The elements of $\gamma(X)$ are called *lists* in $X$.\\
For any two lists $x=(x_{1},x_{2},\dots,x_{n}),y=(y_{1},y_{2},\dots,y_{m})\in\gamma(X)$, 
$$x*y = (x_{1},x_{2},\dots,x_{n},y_{1},y_{2},\dots,y_{m})$$
 and $*$ is called *concatenation*.

$\varnothing=()$ is defined as the list with no elements.
</span>


<span style="display:block" class="lemma">
For any set $X$ the free monoid on $X$ is a monoid.
</span>
\begin{proof}
Let $X$ be a set and $(\gamma(X),*,\varnothing)$ the free monoid on $X$ then for any three lists $x,y,z\in\gamma(X)$ we have,

\begin{align*}
x*(y*z) &= (x_{1},x_{2},\dots,x_{n})*((y_{1},y_{2},\dots,y_{m})*(z_{1},z_{2},\dots,z_{k}))\\
&= (x_{1},x_{2},\dots,x_{n}) * (y_{1},y_{2},\dots,y_{m},z_{1},z_{2},\dots,z_{k})\\
&= (x_{1},x_{2},\dots,x_{n},y_{1},y_{2},\dots,y_{m},z_{1},z_{2},\dots,z_{k})\\
&= (x_{1},x_{2},\dots,x_{n},y_{1},y_{2},\dots,y_{m})*(z_{1},z_{2},\dots,z_{k})\\
&= ((x_{1},x_{2},\dots,x_{n})*(y_{1},y_{2},\dots,y_{m}))*(z_{1},z_{2},\dots,z_{k})\\
&= (x*y)*z
\end{align*}

and,

\begin{align*}
x*\varnothing &= (x_{1},x_{2},\dots,x_{n})*\varnothing\\
&=(x_{1},x_{2},\dots,x_{n})\\
&=x\\
&=\varnothing*(x_{1},x_{2},\dots,x_{n})\\
&=\varnothing*x.
\end{align*}

Hence concatenation is associative with identity $\varnothing$. 

Therefore $(\gamma(X),*,\varnothing)$ is a monoid.
\end{proof}


<span style="display:block" class="lemma">
Given two sets $X,Y$ and a function $f:X\rightarrow Y$. There is an induced monoid homomorphism, 

$$f_{\gamma}:(\gamma(X),*,\varnothing)\rightarrow(\gamma(Y),*,\varnothing)$$

where for each $(x_{1},x_{2},\dots,x_{n}) \in\gamma(X)$

$$ (x_{1},x_{2},\dots,x_{n})  \mapsto (f(x_{1}),f(x_{2}),\dots,f(x_{n})),$$

and, 
$$\varnothing \mapsto \varnothing.$$

</span>
\begin{proof}
Let $f_{\gamma}$ be defined as above then given any $x,y\in (\gamma(X),*,\varnothing)$,

\begin{align*}
f_{\gamma}(x*y) &= f_{\gamma}((x_{1},x_{2},\dots,x_{n})*(y_{1},y_{2},\dots,y_{m})) \\
&= f_{\gamma}((x_{1},x_{2},\dots,x_{n},y_{1},y_{2},\dots,y_{m}))\\
&= (f(x_{1}),f(x_{2}),\dots,f(x_{n}),f(y_{1}),f(y_{2}),\dots,f(y_{m}))\\
&= (f(x_{1}),f(x_{2}),\dots,f(x_{n}))*(f(y_{1}),f(y_{2}),\dots,f(y_{m}))\\
&= f_{\gamma}((x_{1},x_{2},\dots,x_{n}))*f_{\gamma}((y_{1},y_{2},\dots,y_{m}))\\
&= f_{\gamma}(x)*f_{\gamma}(y)
\end{align*}

and,

\begin{align*}
f_{\gamma}(\varnothing) &= \varnothing.
\end{align*}

Hence $f_{\gamma}$ is a monoid homomorphism.
\end{proof}


<span style="display:block" class="definition">

Define the *free monoid functor* $F\colon \mathbf{Set}\rightarrow\mathbf{Mon}$ as:
\begin{enumerate}
\item For each $X\in\ob{\mathbf{Set}}$,

\begin{align*}
F\colon\ob{\mathbf{Set}}&\rightarrow\ob{\mathbf{Mon}},\\
X&\mapsto(\gamma(X),*,\varnothing);
\end{align*}

\item For any $X,Y\in\ob{\mathbf{Set}}$,

\begin{align*}
F\colon \ho[\mathbf{Set}]{X}{Y}&\rightarrow\ho[\mathbf{Mon}]{F(X)}{F(Y)},\\
f&\mapsto f_{\gamma}.
\end{align*}

\end{enumerate}
</span>

<span style="display:block" class="lemma">
$F\colon \mathbf{Set}\rightarrow\mathbf{Mon}$ defined above in Definition \ref{def:freefunctmon} is a functor.
</span>
\begin{proof}
For any $X,Y,Z\in\ob{\mathbf{Set}}$, let $f\in\ho{X}{Y}$ and $g\in\ho{Y}{Z}$. Then for any list $(x_{1},x_{2},\dots,x_{n})\in\gamma(X)$ we have,

\begin{align*}
F(g\circ f)(x_{1},x_{2},\dots,x_{n}) &= (g\circ f(x_{1}),g\circ f(x_{2}),\dots,g\circ f(x_{n}))\\
&= F(g)(f(x_{1}),f(x_{2}),\dots,f(x_{n}))\\
&= (F(g)\circ F(f))(x_{1},x_{2},\dots,x_{n}).
\end{align*}

For any $X\in\ob{\mathbf{Set}}$, $id_{X}$ is the identity with respect to function composition. 

\begin{align*}
F(id_{X})(x_{1},x_{2},\dots,x_{n}) &= (id_{X}(x_{1}),id_{X}(x_{2}),\dots,id_{X}(x_{n}))\\
&= (x_{1},x_{2},\dots,x_{n})\\
&= id_{F(X)}(x_{1},x_{2},\dots,x_{n}).
\end{align*}

Therefore, $F$ is a functor.
\end{proof}


\subsubsection{The Yoneda Embeddings $h_A$ and $h^B$}



An important functor we will use later in Section \ref{s:uniarrow} is the $\hom$ functor. This definition is adapted from the Wikipedia article \cite{wiki:homfunc}. The following definition is similar to the definition of functors in Definition \ref{def:functor} however the morphisms and composition are reversed. See Wiki \cite{wiki:functors} for more details.

<span style="display:block" class="definition">

Let $\mathscr{C}$ and $\mathscr{D}$ be categories. A *contravariant functor* is a pair
$F=(F^{ob},F^{hom})\colon \mathscr{C}\rightarrow\mathscr{D}$ where:
\begin{enumerate}
\item $F^{ob}$ is a function,

$$F^{ob}\colon \ob{\mathscr{C}}\rightarrow\ob{\mathscr{D}};$$

\item For each $A,A^{\prime}\in\ob{\mathscr{C}}$, $F^{hom}$ is a function,

\begin{align*}
F^{hom}\colon \ho[\cat{C}]{A}{A^{\prime}} &\rightarrow\ho[\cat{D}]{F^{ob}(A^{\prime})}{F^{ob}(A)},\\
f&\mapsto F^{hom}(f);
\end{align*}

\end{enumerate}
The following axioms are satisfied:
\begin{enumerate}
\item For all $f\in\ho{A}{A^{\prime}}$ and $f^{\prime}\in\ho{A^{\prime}}{A^{\prime\prime}}$, 

\begin{align*}
F^{hom}(f^{\prime}\circ^{\mathscr{C}} f) = F^{hom}(f^{\prime})\circ^{\mathscr{D}} F^{hom}(f)
\end{align*}
 
where $\circ^{\mathscr{C}}$ and $\circ^{\mathscr{D}}$ are the compositions for $\mathscr{C}, \mathscr{D}$ respectively;
\item For all $A\in\ob{\mathscr{C}}$, 

$$F^{hom}(id_{A}) = id_{F^{ob}(A)}.$$

\end{enumerate}
</span>


<span style="display:block" class="lemma">

Let $\cat{C}$ be a category and $\mathbf{Set}$ be the category of sets as in Example \ref{exe:catofsets}. 
\begin{enumerate}
\item For all $A\in\ob{\cat{C}}$ we define the functor

$$\func{h_{A}}{\cat{C}}{\mathbf{Set}}$$
 
where for each $C\in\ob{\cat{C}},$

$$C \mapsto \ho[\cat{C}]{A}{C}$$

and for each $f\in\ho[\cat{C}]{X}{Y}$,

$$f\mapsto \ho{A}{f}$$

where,

\begin{align*}
\ho[\cat{C}]{A}{f}\colon\ho[\cat{C}]{A}{X}&\to\ho[\cat{C}]{A}{Y},\\
g&\mapsto f\circ g;
\end{align*}

\item For all $B\in\ob{\cat{C}}$ we define the *contravariant* functor

$$\func{h^{B}}{\cat{C}^{op}}{\mathbf{Set}}$$
 
where for each $C\in\ob{\cat{C}},$

$$C \mapsto \ho[\cat{C}]{C}{B}$$

and for each $h\in\ho[\cat{C}^{op}]{X}{Y}$,

$$h\mapsto \ho{h}{B},$$

where,

\begin{align*}
\ho{h}{B}\colon\ho[\cat{C}]{Y}{B}&\to\ho[\cat{C}]{X}{B},\\
g&\mapsto g\circ h.
\end{align*}

\end{enumerate}
</span>
\begin{proof}
First we prove $\mathrm{h}_{A}$ is a functor.

Let $C\in\ob{\cat{C}}$ then given $f\in\ho[\cat{C}]{A}{C}$,

\begin{align*}
\mathrm{h}_{A}(id_{C})(f) &= \ho[\cat{C}]{A}{id_{C}}(f)\\
&= f \\
&= id_{\ho[\cat{C}]{A}{C}}(f).
\end{align*}

Hence identities are preserved. 
We also have for any $f\in\ho[\cat{C}]{X}{Y}$ and $g\in\ho[\cat{C}]{Y}{Z}$ then given $h\in\ho[\cat{C}]{A}{X}$,

\begin{align*}
\mathrm{h}_{A}(g\circ f)(h) &= \ho[\cat{C}]{A}{g\circ f}(h)\\
&= g\circ f \circ h\\
&= \ho[\cat{C}]{A}{g} \circ \ho[\cat{C}]{A}{f}(h)\\
&= (\mathrm{h}_{A}(g)\circ \mathrm{h}_{A}(f))(h).
\end{align*}

Hence composition is preserved. Therefore $\mathrm{h}_{A}$ is a functor.

Now we show $\mathrm{h}^{B}$ is a contravariant functor.
Let $C\in\ob{\cat{C}}$ then given $f\in\ho[\cat{C}]{C}{B}$:

\begin{align*}
\mathrm{h}^{B}(id_{C})(f) &= \ho[\cat{C}]{id_{C}}{B}(f)\\
&= f \\
&= id_{\ho[\cat{C}]{C}{B}}(f).
\end{align*}

Hence identities are preserved. We also have for any $f\in\ho[\cat{C}]{X}{Y}$ and $g\in\ho[\cat{C}]{Y}{Z}$ then given $h\in\ho[\cat{C}^{op}]{Z}{B}$,

\begin{align*}
\mathrm{h}^{B}(g\circ f)(h) &= \ho[\cat{C}]{g\circ f}{B}(h)\\
&= h\circ g\circ f\\
&= \ho[\cat{C}]{f}{B} \circ \ho[\cat{C}]{g}{B}(h)\\
&= (\mathrm{h}^{B}(f) \circ \mathrm{h}^{B}(g))(h).
\end{align*}

Hence composition is preserved. Therefore $\mathrm{h}^{B}$ is a contravariant functor.
\end{proof}

<span style="display:block" class="definition">

Let $\cat{C}$ be a category then $\cat{C}^{op}\times\cat{C}$ is a category by Definition \ref{def:dualcategory} and Example \ref{exe:prodcat}. We define the *hom functor*, $\func{h}{\cat{C}^{op}\times\cat{C}}{\mathbf{Set}}$, as follows:
Given $(C_{1},C_{2})\in\ob{\cat{C}^{op}\times\cat{C}}$,

$$(C_{1},C_{2})\mapsto\ho[\cat{C}]{C_{1}}{C_{2}}.$$

For each $f^{op}\in\ho[\cat{C}]{C_{1}}{C_{2}}$ and $g\in\ho[\cat{C}]{C_{1}^\prime}{C_{2}^\prime}$,

$$(f^{op},g)\mapsto\ho[\cat{C}]{f}{g},$$

where,

\begin{align*}
\ho[\cat{C}]{f}{g}\colon\ho[\cat{C}]{C_{1}}{C_{1}^\prime}&\to\ho[\cat{C}]{C_{2}}{C_{2}^\prime},\\
h\mapsto g\circ h\circ f.
\end{align*}

</span>

<span style="display:block" class="lemma">

$\mathrm{h}$ as defined in Definition \ref{def:covarianthomfunc} is a functor.
</span>
\begin{proof}
Let $(f^{op}_1,g_1)\in\ho[\cat{C}^{op}\times\cat{C}]{(C_1,C_2)}{(C_1^\prime,C_2^\prime)}$, and $(f^{op}_2,g_2)\in\ho[\cat{C}^{op}\times\cat{C}]{(C_1^\prime,C_2^\prime)}{(C_1^{\prime\prime},C_2^{\prime\prime})}$, we then have,

\begin{align*}
\mathrm{h}((f^{op}_1,g_1)\circ(f^{op}_2,g_2)) &= \mathrm{h}((f^{op}_1\circ f^{op}_2,g_1\circ g_2)), \\
&= \ho[\cat{C}]{f^{op}_1\circ^{op} f^{op}_2}{g_1\circ g_2},
\end{align*}

where $\ho[\cat{C}]{f_2\circ f_1}{g_1\circ g_2}$ is the function which takes $h\in\ho[\cat{C}]{C_1}{C_1^\prime}$,

$$h\mapsto g_1\circ g_2 \circ f_2\circ f_1.$$

Hence is the same as the function,

$$\ho[\cat{C}]{f_1}{g_1} \circ \ho[\cat{C}]{f_2}{g_2} = \mathrm{h}((f^{op}_1,g_1))\circ \mathrm{h}((f^{op}_2,g_2)).$$

Given $(id_{C_1},id_{C_2})\in\ho[\cat{C}^{op}\times\cat{C}]{(C_1,C_2)}{(C_1,C_2)}$ we have,

\begin{align*}
\mathrm{h}((id_{C_1},id_{C_2})) &= \ho[\cat{C}]{id_{C_1}}{id_{C_2}},
\end{align*}

which is the function which sends $h\in\ho[\cat{C}]{C_1}{C_1^\prime}$

$$h\mapsto id_{C_1} \circ h \circ id_{C_2} = h.$$

Therefore, $\mathrm{h}$ is a functor.
\end{proof}


\subsubsection{The Identity functor}



For every category there exists a functor from that category to itself called the identity functor we will now define.

<span style="display:block" class="definition">

For any category $\mathscr{C}$ let $id_{\mathscr{C}}\colon \mathscr{C}\rightarrow\mathscr{C}$ be the identity functor on $\mathscr{C}$ defined:
\begin{enumerate}
\item For each $X\in\ob{\mathscr{C}}$,

$$id_{\mathscr{C}}(X)=X.$$

\item Given two \objs{$\mathscr{C}$}, $X,Y\in\ob{\mathscr{C}}$, for each $f\in\ho{X}{Y}$,

\begin{align*}
id_{\mathscr{C}}(f) = f.
\end{align*}

\end{enumerate}
</span>

<span style="display:block" class="lemma">
$id_{\mathscr{C}}$ as defined above in Definition \ref{def:identityfunctor} is a functor.
</span>
\begin{proof}
Given any $X,Y,Z\in\mathscr{C}$, let $f\in\ho{X}{Y}$ and $g\in\ho{Y}{Z}$ be maps. Then,

\begin{align*}
id_{\mathscr{C}}(f\circ g) &= f\circ g\\
&= id_{\mathscr{C}}(f)\circ id_{\mathscr{C}}(g).
\end{align*}

Hence composition is preserved.

For all $X\in\ob{\mathscr{C}}$

\begin{align*}
id_{\mathscr{C}}(id_{X})=id_{X}.
\end{align*}

Hence identities are preserved.
Therefore $id_{\mathscr{C}}$ is a functor.
\end{proof}


\subsubsection{More examples of functors}



Here are some more examples of functors.

The following example followed from a meeting with the supervisor.

<span style="display:block" class="example">

Let the power set functor $P:\mathbf{Set}\rightarrow\mathbf{Set}$ be defined:
\begin{enumerate}
\item For each $X\in\ob{\mathbf{Set}}$,

$$X\mapsto\mathcal{P}(X)$$

where $\mathcal{P}(X)$ is the power set of $X$,

$$\mathcal{P}(X)=\{A\mid A\subseteq X\};$$

\item Given two \objs{$\mathbf{Set}$} $X,Y\in\ob{\mathbf{Set}}$ then for each $f\in\ho{X}{Y}$,

\begin{align*}
P(f):P(X)&\rightarrow P(Y),\\
A&\mapsto f[A]
\end{align*}

where $f[A]$ is the image of $A$ under $f$,

$$f[A]=\{f(a)\mid a\in A\}.$$

Clearly,  $P(f)$ is a function $P(X)\to P(Y)$, so it is in $\ho{P(X)}{P(Y)}$.
\end{enumerate}
Given any $X,Y,Z\in\mathbf{Set}$, let $f\in\ho{X}{Y}$ and $g\in\ho{Y}{Z}$ be functions. Then for all $A\in P(X)$,

\begin{align*}
P(g\circ f)(A) &= (g\circ f)[A])\\
&=g[f[A]]\\
&= P(g)\circ P(f)(A).
\end{align*}

For each $X\in\mathbf{X}$, $id_{X}$ is the identity function with respect to function composition. For all $A\in P(X)$,

\begin{align*}
P(id_{X})(A) &= id_{X}[A]\\
&= A \\
&= id_{P(X)}(A)
\end{align*}

Therefore P is a functor.
</span>
The following Example \ref{exe:matrixringfunc} uses ideas from the Wikipedia article \cite{wiki:invmatrix}.

<span style="display:block" class="example">

Let $\GL\colon\mathbf{CRng}\rightarrow\mathbf{Grp}$ be defined:
\begin{enumerate}
\item For each $\mathbf{CRng}$-Object $R\in\ob{\mathbf{CRng}}$,

$$\GL(R)=\left\{\begin{bmatrix}
a&b\\
c&d
\end{bmatrix} | a,b,c,d\in R, ab-cd \text{ is invertable in }R\right\}
$$

$\GL(R)\in\mathbf{Grp}$ since each matrix is invertable, the matrix:
$$\begin{bmatrix}1_{R}&0_{R}\\0_{R}&1_{R}\end{bmatrix}$$
 acts as an identity under matrix multiplication and matrix multiplication is associative.
\item Given $R,S\in\ob{\mathbf{CRng}}$ then for each $f\in\ho{R}{S}$,

\begin{align*}
\GL(f)\colon \GL(R)&\rightarrow \GL(S),\\
\begin{bmatrix} 
a & b\\
c&d
\end{bmatrix}&\mapsto \begin{bmatrix} 
f(a) & f(b)\\
f(c) & f(d)
\end{bmatrix}.
\end{align*}

\end{enumerate}
Then for $M,N\in \GL(R)$ we have,

\begin{align*}
\GL(f)(M \times_{\GL(R)} N) &= \GL(f)\left(\begin{bmatrix} 
a_{M} \times_{R}a_{N}+_{R}b_{M}\times_{R}c_{N}& a_{N}\times_{R}b_{M}+_{R}b_{N}\times_{R}d_{N}\\
c_{M}\times_{R}a_{N}+_{R}d_{M}\times_{R}c_{N}& c_{M}\times_{R}b_{N}+_{R}d_{M}\times d_{N}
\end{bmatrix}\right)\\
&= \begin{bmatrix} 
f(a_{M} \times_{R}a_{N}+_{R}b_{M}\times_{R}c_{N})& f(a_{N}\times_{R}b_{M}+_{R}b_{N}\times_{R}d_{N})\\
f(c_{M}\times_{R}a_{N}+_{R}d_{M}\times_{R}c_{N})& f(c_{M}\times_{R}b_{N}+_{R}d_{M}\times_{R} d_{N})
\end{bmatrix}\\
&= \begin{bmatrix} 
f(a_{M}) \times_{S}f(a_{N})+_{S}f(b_{M})\times_{S}f(c_{N})& f(a_{N})\times_{S}f(b_{M})+_{S}f(b_{N})\times_{S}f(d_{N})\\
f(c_{M})\times_{S}f(a_{N})+_{S}f(d_{M})\times_{S}f(c_{N})& f(c_{M})\times_{S}f(b_{N})+_{S}f(d_{M})\times_{S} f(d_{N})
\end{bmatrix}\\
&= \GL(f)(M) \times_{\GL(S)} \GL(f)(N)
\end{align*}

and,

\begin{align*}
\GL(f)(1_{\GL(R)}) &= \GL(f)\left( \begin{bmatrix}
1_{R}&0_{R}\\
0_{R}&1_{R}
\end{bmatrix}\right)\\
&= \begin{bmatrix}
f(1_{R})&f(0_{R})\\
f(0_{R})&f(1_{R})
\end{bmatrix}\\
&= \begin{bmatrix}
1_{S}&0_{S}\\
0_{S}&1_{S}
\end{bmatrix}, &\text{since f is a ring homomorphism}\\
&= 1_{\GL(S)}.
\end{align*}

Therefore $\GL(f)$ is defined as a group homomorphism.\\
We now show $\GL$ is a functor by proving the axioms hold. Given any $R,S,T\in\ob{\mathbf{CRng}}$, let $f\in\ho{R}{S}$ and $g\in\ho{S}{T}$ be ring homomorphisms. Then for all 
$$M=\begin{bmatrix} 
a & b\\
c&d
\end{bmatrix}\in \GL(R)$$

we have,

\begin{align*}
\GL(g\circ f)(M)&=\begin{bmatrix} 
(g\circ f)(a) & (g\circ f)(b)\\
(g\circ f)(c)&(g\circ f)(d)
\end{bmatrix}\\
&= \begin{bmatrix} 
g(f(a))& g(f(b))\\
g(f(c))&g(f(d))
\end{bmatrix}\\
&= \GL(g)\left (\begin{bmatrix} 
f(a) & f(b)\\
f(c)&f(d)
\end{bmatrix}\right)\\
&= (\GL(g)\circ \GL(f))(M)
\end{align*}

and,

\begin{align*}
\GL(id_{R})(M) &= \begin{bmatrix} 
id_{R}(a) & id_{R}(b)\\
id_{R}(c)&id_{R}(d)
\end{bmatrix}\\
&= \begin{bmatrix} 
a & b\\
c&d
\end{bmatrix}\\
&=M\\
&= id_{\GL(R)}(M).
\end{align*}

Therefore $\GL$ is a functor.
</span>


<span style="display:block" class="remark">
Example \ref{exe:matrixringfunc} can be extended to $\mathrm{GL}_{n}$ with $n\times n$ matrices.
</span>


<span style="display:block" class="lemma">

Let $R$ be a ring with 1. Let $R^*$ be the set of all $r\in R$ such that, 
$$rr^\prime=r^\prime r=1_{R}$$
 for some $r^\prime \in R$. Then $(R^*,\times_{R})$ forms a group called the *group of units of $R$*.
</span>
\begin{proof}
We have an identity $1_{R}$ since for each $r\in R^*$,

\begin{align*}
r1_{R} = r = 1_{R}r
\end{align*}

since R is a ring. 

Given $r\in R^*$ there exists $r^\prime\in R^*$ such that,

\begin{align*}
rr^\prime = r^\prime r = 1_{R}.
\end{align*}

Hence each $r$ has inverse $r^\prime$.

We know $\times_{S}$ is associative since $R$ is a ring. 

Finally given $r,s\in R^*$,

\begin{align*}
rss^\prime r^\prime &= r1_{R}r^\prime\\
&= rr^\prime\\
&= 1_{R}\\
&=s^{\prime}s\\
&= s^{\prime}1_{R}s\\
&= s^\prime r^{\prime}rs.
\end{align*}

Hence $rs\in R^*$ and therefore $R^*$ is a group.
\end{proof}


<span style="display:block" class="example">

Let $\func{\Units}{\mathbf{Crng}}{\mathbf{Grp}}$ be defined:
\begin{enumerate}
\item For each $R\in\mathbf{Crng}$,

$$\Units(R)=R^*$$

as in Lemma \ref{lem:groupofunits};
\item Given $R,S\in\ob{\mathbf{Crng}}$, for each $f\in\ho{R}{S}$,

\begin{align*}
\Units(f)\colon R^*&\to S^*,\\
r&\mapsto f(r)
\end{align*}

and $f(r)\in S^*$ since,

\begin{align*}
1_{S} &= f(1_{R})\\
&= f(rr^\prime) \\
&= f(r)f(r^\prime), & \text{since $f$ is a ring homomorphism.}
\end{align*}

We also have $\Units(f)$ is a group homomorphism since $f$ is a ring homomorphism.
\end{enumerate}
We will now show that $\Units$ is indeed a functor. 

Given any $R,S,T\in\ob{\mathbf{Crng}}$, let $f\in\ho{R}{S}$ and $g\in\ho{S}{T}$. Then for all $r\in R$,

\begin{align*}
\Units(g\circ f)(r) &= g\circ f(r)\\
&= \Units(g)\circ \Units(f)(r).
\end{align*}

Hence composition is preserved.
We also have,

\begin{align*}
\Units(id_{R})(r)&= id_{R}(r)\\
&= r\\
&= id_{R^*}(r).
\end{align*}

Hence identities are preserved.
Therefore $\Units$ is a functor.
</span>
The following example followed from a lecture on Topology given by Dr Daniel Graves at the University of Leeds.

<span style="display:block" class="example">
Let $\mathbf{Top}^*$ be the category of based topological spaces as defined in Example \ref{exe:catbasedtop} and $\mathbf{Grp}$ be the category of groups as defined in Example \ref{exe:catoggroups}. 

The fundamental group functor $\func{\pi_{1}}{\mathbf{Top}^{*}}{\mathbf{Grp}}$ be defined:
\begin{enumerate}
\item For each $((X,\tau_X),x_{0})\in\ob{\mathbf{Top}^*}$,

$$((X,\tau_X),x_{0})\mapsto\pi_1(((X,\tau_X),x_{0}))$$

where $\pi_1(((X,\tau_X),x_{0}))$ is the fundamental group of $X$ based at $x_{0}$. The group operation $*$ is defined by join of paths;

\item For a given continuous map $f\in\ho[\mathbf{Top}^*]{((X,\tau_X),x_{0})}{((Y,\tau_Y),y_{0})}$ we define the induced group homomorphism:

$$f\mapsto f^*\colon\pi_1(((X,\tau_X),x_{0}))\to\pi_1(((Y,\tau_Y),y_{0}))$$

where for each $[\gamma]\in \pi_1(((X,\tau_X),x_{0}))$,

$$ [\gamma] \mapsto [f\circ \gamma].$$

Here $[\gamma]$ is the equivalence class of a loop $\gamma$ based at $x_{0}$.

$f^*$ is well defined since for any two loops $\gamma_1$ and $\gamma_2$ based at $x_0$ where $[\gamma_1] = [\gamma_2]$ we have a path homotopy, 

$$H\colon [0,1] \times [0,1] \to X$$

and therefore,

$$f\circ H \colon [0,1]\times [0,1]\to Y,$$

is a path homotopy between $f\circ \gamma_1$ and $f\circ\gamma_2$ hence $f^*$ is well defined.

The group identity for $\pi_1(((X,\tau_X),x_{0}))$ is the equivalence class $[\gamma_{x_{0}}]$ where $\gamma_{x_{0}}$ is the constant path at $x_{0}$ so,

$$[f\circ\gamma_{x_{0}}] = [\gamma_{f(x)}] = [\gamma_{y_{0}}]$$
 
where $\gamma_{y_{0}}$ is the constant path at $f(x_{0})$. Therefore $f^*$ preserves group identities. 

We also have for any two $[\gamma_1],[\gamma_2]\in\pi_1(((X,\tau_X),x_{0}))$ 

\begin{align*}
f^*([\gamma_1]*[\gamma_2])&=f^*([\gamma_1*\gamma_2])\\
&=[f\circ\gamma_1*\gamma_2] \\
&= [f\circ\gamma_1*f\circ\gamma_2] \\
&= [f\circ\gamma_1]*[f\circ\gamma_2]\\
&= f^*([\gamma_1])*f^*([\gamma_2]).
\end{align*}

Therefore $f^*$ is a group homomorphism.
\end{enumerate}
To check $\pi_1$ is a functor we check it preserves identities $id_{X}\in\ho[\mathbf{Top}^*]{X}{X}$, given a path equivalence class $[\gamma]\in\pi_1(((X,\tau_X),x_{0}))$.

\begin{align*} 
\pi_{1}(id_{X})([\gamma]) &= [id_{X}\circ\gamma] \\
&= [\gamma] \\
&= id_{\pi_1(((X,\tau_X),x_{0}))}([\gamma]).
\end{align*}

Also given $f\in\ho[\mathbf{Top}^*]{((X,\tau_X),x_{0})}{((Y,\tau_Y),y_{0})}$ and $g\in\ho[\mathbf{Top}^*]{((Y,\tau_Y),y_{0})}{((Z,\tau_Z),z_{0})}$ we have,

\begin{align*}
(g\circ f)^*([\gamma]) &= [g\circ f\circ\gamma]\\
&= g^*([f\circ\gamma])\\
&= g^*(f^*([\gamma]))\\
&= g^*\circ f^*([\gamma]).
\end{align*}

Therefore $\pi_{1}$ is a functor.
</span>
The following example can be found in Leinster \cite{Leinster}.

<span style="display:block" class="example">

Recall for each monoid $\cat{M}$ we have a one object category defined in subsection \ref{sss:monascat}, also recall the category $\mathbf{Set}$ in Example \ref{exe:catofsets}. 

Given a set $X$, we define a functor

$$\func{L_{X}}{\cat{M}}{\mathbf{Set}}$$

where for the unique object $M\in\cat{M}$,

$$M\mapsto X,$$

and for each morphism $g\in\ho[\cat{M}]{M}{M}$,

$$g\mapsto L_{X}(g)$$

where,

\begin{align*}
L_{X}(g) \colon X &\to X,\\
x &\mapsto gx.
\end{align*}

The function $L_{X}(g)$ is the left action of $g$ on $X$.

We see for each $x\in X$,

\begin{align*}
L_{X}(id_{M})(x) &= id_{M}x \\
&= x \\
&= id_{L_{X}(M)}
\end{align*}

and for $g,g^\prime\in\ho[\cat{M}]{M}{M}$ and each $x\in X$,

\begin{align*}
L_{X}(g^\prime\circ g)(x) &= g^\prime\circ g x \\
&= g^\prime gx \\
&= L_{X}(g^\prime)\circ L_{X}(g)(x).
\end{align*}

Therefore $L_{X}$ is a functor. For each set $X\in\ob{\mathbf{Set}}$ the functor $L_{X}$ represents the left action of $\cat{M}$ on that set.
</span>

\subsection{Functor composition}
 

Ideas from this section are adapted from Leinster \cite{Leinster} and Adámek - Herrlick - Strecker \cite{ACC}.

<span style="display:block" class="definition">

Let $\mathscr{C}$, $\mathscr{D}$ and $\mathscr{E}$ be categories and $F_{1}\colon\mathscr{C}\rightarrow\mathscr{D}$, $F_{2}\colon\mathscr{D}\rightarrow\mathscr{E}$ functors. Then we define $F_{1}\circ F_{2}\colon\mathscr{C}\rightarrow\mathscr{E}$:
\begin{enumerate}
\item 
\begin{align*}
(F_{1}\circ F_{2})^{ob}\colon\ob{\mathscr{C}}&\rightarrow\ob{\mathscr{E}},\\
A&\mapsto F_{2}(F_{1}(A));
\end{align*}

\item 
\begin{align*}
(F_{1}\circ F_{2})^{hom}\colon\ho[\mathscr{C}]{A}{A^{\prime}}&\rightarrow\ho[\mathscr{E}]{(F_{1}\circ F_{2})^{ob}(A)}{(F_{1}\circ F_{2})^{ob}(A^{\prime}},\\
f&\mapsto F_{2}(F_{1}(f)).
\end{align*}

\end{enumerate}
</span>

<span style="display:block" class="remark">
Again we will drop notation as in Remark \ref{rmk:functnotation} for simplicity.
</span>

<span style="display:block" class="lemma">
$F_{1}\circ F_{2}\colon\mathscr{C}\rightarrow\mathscr{E}$ as defined above is a functor.
</span>
\begin{proof}
Let $f\in\ho[\cat{C}]{A}{A^{\prime}}$ and $g\in\ho[\cat{C}]{A^{\prime}}{A^{\prime\prime}}$ then,

\begin{align*}
F_{1}\circ F_{2}(f\circ^{\mathscr{C}} g) &= F_{2}(F_{1}(f\circ^{\mathscr{C}}g))\\
&= F_{2}(F_{1}(f)\circ^{\mathscr{D}}F_{1}(g)), &\text{since $F_{1}$ is a functor}\\
&= F_{2}(F_{1}(f))\circ^{\mathscr{E}}F_{2}(F_{1}(g)), &\text{since $F_{2}$ is a functor}\\
&= F_{1}\circ F_{2}(f) \circ^{\mathscr{E}}F_{1}\circ F_{2}(g).
\end{align*}

Given $A\in\ob{\mathscr{C}}$

\begin{align*}
F_{1}\circ F_{2}(id_{A}) &= F_{2}(F_{1}(id_{A}))\\
&= F_{2}(id_{F_{1}(A)})\\
&= id_{F_{2}(F_{1}(A))}\\
&= id_{F_{1}\circ F_{2}(id_{A})}.
\end{align*}

Therefore $F_{1}\circ F_{2}$ is a functor.
\end{proof}


<span style="display:block" class="remark">
For functors $F, G$ we will write $FG=F\circ G$ and If $F$ is an endofunctor, then we can write $F^{2}=F\circ F$.
</span>


\pagebreak


<script src="../../mathjax_helper.js"></script>