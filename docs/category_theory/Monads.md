<style>
.md-content {
    max-width: 80em;
}
</style>
#1.7. Monads
 

Monads on a category $\cat{C}$ are endofunctors of $\cat{C}$ with some extra structure. We can look at monads to study adjunctions since for adjoint functors $F$ and $G$ we will show $FG$ is a monad. Conversely, we will find that given a monad there are suitable adjoint functors which define the monad, these however are not unique.


<span style="display:block" class="definition">

Let $\cat{C}$ be a category. A *monad on $\cat{C*$} is a triple $(T,\eta,\mu)$ where $\func{T}{\cat{C}}{\cat{C}}$ is endofunctor, $\nattran{\eta}{id_{\cat{C}}}{T}$ and $\nattran{\mu}{T^2}{T}$ are natural transformations for which the following conditions hold:

\begin{align*}
\mu\circ T\mu &= \mu \circ \mu T;\\
\mu\circ T\eta &= \mu \circ \eta T = id_{T}
\end{align*}

where $id_{T}$ is the identity natural transformation on $T$ as defined in Definition \ref{def:identnattran}. $\circ$ is vertical composition of natural transformations as in Definition \ref{def:vertcomp}. These conditions are equivalent to saying the diagrams,

<img src="../../../png/Python/chapter_1/tikz_code_7_0.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
commute.
That is, for each object, $X\in\ob{\cat{C}}$, the diagram,
\begin{equation}


<img src="../../../png/Python/chapter_1/tikz_code_7_2.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
\\
\end{equation}
and,
\begin{equation}


<img src="../../../png/Python/chapter_1/tikz_code_7_3.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
\\
\end{equation}
commutes.
</span>
The following example is stated in Adámek - Herrlick - Strecker \cite{ACC} \cite{ACC} (Page 318, Examples 20.2 (3)), here we add the proof.

<span style="display:block" class="example">

Let $\func{P}{\mathbf{Set}}{\mathbf{Set}}$ be the power set functor defined in Example \ref{exe:functorpowerset}. Let $\nattran{\eta}{id_{\mathbf{Set}}}{P}$ be defined as in Example \ref{exe:naturalidentpowerset} and $\nattran{\mu}{P^2}{P}$ be the natural transformation as defined in Example \ref{exe:naturalmultipowerset}. Then $\mathbf{P} = (P,\eta,\mu)$ is a monad.
</span>
\begin{proof}
We need to show that the diagrams 

<img src="../../../png/Python/chapter_1/tikz_code_7_1.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
commute. 
For each $X\in\ob{\mathbf{Set}}$ and each element $A\in P^3(X)$ we have,

\begin{align*}
(\mu \circ P\mu)_{X}(A) &= \mu_{X} \circ P(\mu_{X})(A) \\
&=  \mu_{X}(\mu_{X}[A])\\
&= \mu_{X}(\{\mu_{X}(a)|a\in A\}) \\
&= \bigcup_{a\in A}\mu_{X}(a)\\
&= \bigcup_{a\in A}\bigcup_{a^\prime\in a}a^\prime \\
&= \bigcup_{a^\prime\in\bigcup_{a\in A}a}a^\prime\\
&= \mu_{X}(\bigcup_{a\in A}a)\\
&= \mu_{X}(\mu_{P(X)}(A))\\
&= (\mu \circ \mu P)_{X}(A).
\end{align*}

Also for each $B\in P(X)$,

\begin{align*}
(\mu \circ P\eta)_{X}(B) &= \mu_{X} \circ P(\eta_{X}(B)) \\
&= \mu_{X}(\eta_{X}[B])\\
&= \mu_{X}(\{\eta_{X}(b)|b\in B\})\\
&= \bigcup_{b\in B}\eta_{X}(b)\\
&= \bigcup_{b\in B}\{B\}\\
&= B\\
&= id_{P(X)}(B)\\
&= \bigcup_{b^\prime\in\{B\}}\\
&= \mu_{X}(\{B\})\\
&= \mu_{X}(\eta_{P(X)}(B))\\
&= (\mu \circ \eta P)_{X}(B).
\end{align*}

Therefore $\mathbf{P}$ is a monad.
\end{proof}
The following example was briefly stated in the Wikipedia articles on monads \cite{wiki:monad}, here we will go into more detail.

<span style="display:block" class="example">

Let $\cat{C}$ be a category, the identity functor $\func{id_{\cat{C}}}{\cat{C}}{\cat{C}}$ as defined in Definition \ref{def:identityfunctor} forms a monad with $\nattran{\eta}{id_{\cat{C}}}{id_{\cat{C}}}$ defined for each $X\in\ob{\cat{C}}$,

$$\eta_{X} = id_{X}\in\ho[\cat{C}]{X}{X}$$

and, $\nattran{\mu}{id_{\cat{C}}}{id_{\cat{C}}}$ defined for each $X\in\ob{\cat{C}}$,

$$\mu_{X} = id_{X}\in\ho[\cat{C}]{X}{X}.$$

</span> 
\begin{proof}
We have for each $X\in\ob{\cat{C}}$,

\begin{align*}
(\mu \cdot F\mu)_X &= \mu_X \circ F(\mu_{X}) \\
&= id_X \\
&= \mu_X \circ \mu_{F(X)} \\
&= (\mu \cdot \mu F)_X
\end{align*}

and,

\begin{align*}
(\mu \cdot F\eta)_X &= \mu_X \circ F(\eta_{X}) \\
&= id_X\\
&= \mu_{X} \circ \eta_{F(X)} \\ 
&= (\mu \cdot \eta F)_X.
\end{align*}

Therefore we have a monad.
\end{proof}
The following example \ref{exe:monadmonoid1} follows the example given in The Catsters video series on monads \cite{catsters:mon}.

<span style="display:block" class="example">

Let $\mathbf{Set}$ be the category of sets, defined in Example \ref{exe:catofsets}. Let $\mathrm{F}\colon\mathbf{Set}\to\mathbf{Mon}$ be the free monoid functor defined in Definition \ref{def:freefunctmon} and $\mathrm{U}\colon\mathbf{Mon}\to\mathbf{Set}$ be the forgetful monoid functor as defined in Definition \ref{def:forgetfulfunctormon}. We define the triple $\mathbf{M} = (T,\eta,\mu)$ where $\func{T=UF}{\mathbf{Set}}{\mathbf{Set}}$ for each set $X\in\ob{\mathbf{Set}}$,

\begin{align*}
\eta_{X}\colon X &\to \gamma(X),\\
x&\mapsto (x).
\end{align*}

Where $\gamma(X)$ is the set of words of $X$, and

$$\mu_{X}\colon \gamma(\gamma(X)) \to \gamma(X)$$
 be such that,

\begin{align*}
\big ((x_1,x_2,\dots, x_n),(y_1,y_2,\dots,y_m),\dots\dots,(z_1,z_2,\dots,z_r)\big) \\ \mapsto \big(x_1,x_2,\dots,x_n,y_1,y_2,\dots,y_m,\dots\dots,z_1,z_2,\dots,z_r\big).
\end{align*}

(Note that $\gamma(\gamma(X))$ is the set of words of words of $X$).
We claim that $\mathbf{M}$ is a monad. 

$T$ is a functor since it is a composition of two functors. 
We first show $\eta$ and $\mu$ are natural transformations.

First we prove the naturality of $\eta$: Let $f\in\ho[\mathbf{Set}]{X}{X^\prime}$
then we have,

\begin{align*}
(\eta_{X^\prime} \circ f)(x) &= (f(x)) \\
&= T(f)((x)) \\
&= (T(f)\circ \eta_{X})(x).
\end{align*}

Therefore the naturality condition holds and $\eta$ is a natural transformation.

Now let us prove the naturality of $\mu$:
Let $f\in\ho[\mathbf{Set}]{X}{X^\prime}$ then we have,

\begin{align*}
&(\mu_{X^\prime} \circ T(T(f)))(\big((x_1,x_2,\dots, x_n)(y_1,y_2,\dots,y_m),\dots\dots,(z_1,z_2,\dots,z_r)\big)) \\
&= \mu_{X^\prime} (\big((f(x_1),f(x_2),\dots, f(x_n))(f(y_1),f(y_2),\dots,f(y_m)),\dots\dots,(f(z_1),f(z_2),\dots,f(z_r))\big)) \\
&= \big(f(x_1),f(x_2),\dots, f(x_n),f(y_1),f(y_2),\dots,f(y_m),\dots\dots,f(z_1),f(z_2),\dots,f(z_r)\big) \\
&= T(f)(\big(x_1,x_2,\dots,x_n,y_1,y_2,\dots,y_m,\dots\dots,z_1,z_2,\dots,z_r\big))\\
&= (T(f)\circ\mu_{X})(\big((x_1,x_2,\dots, x_n),(y_1,y_2,\dots,y_m),\dots\dots,(z_1,z_2,\dots,z_r)\big)).
\end{align*}

Therefore the naturality condition holds and $\mu$ is a natural transformation.

We now prove that the diagram \eqref{dia:monassoc} commutes.
Let 

$$\begin{pmatrix}
((a,\dots, a_n),(b,\dots ,b_m),\dots,(c,\dots, c_r)), \\
((a^\prime,\dots, a^\prime_{n^\prime}),(b^\prime,\dots, b^\prime_{m^\prime}),\dots,(c^\prime,\dots, c^\prime_{r^\prime})), \\
\dots, \\
((a^{\prime\prime},\dots, a^{\prime\prime}_{n^{\prime\prime}}),(b^{\prime\prime},\dots ,b^{\prime\prime}_{m^{\prime\prime}}),\dots,(c^{\prime\prime},\dots, c^{\prime\prime}_{r^{\prime\prime}}))
\end{pmatrix}\in \gamma(\gamma(\gamma(X)))$$


be a general word of a word of a word of $X$. Here we have extended the notation in to multi line, where each row is a word of a word of $X$.

We have,

\begin{align*}
&(\mu \circ T\mu)_X(\begin{pmatrix}
((a,\dots, a_n),(b,\dots ,b_m),\dots,(c,\dots, c_r)), \\
((a^\prime,\dots, a^\prime_{n^\prime}),(b^\prime,\dots, b^\prime_{m^\prime}),\dots,(c^\prime,\dots, c^\prime_{r^\prime})), \\
\dots, \\
((a^{\prime\prime},\dots, a^{\prime\prime}_{n^{\prime\prime}}),(b^{\prime\prime},\dots ,b^{\prime\prime}_{m^{\prime\prime}}),\dots,(c^{\prime\prime},\dots, c^{\prime\prime}_{r^{\prime\prime}}))
\end{pmatrix}) \\
&= (\mu_{X} \circ T(\mu_{X}))(\begin{pmatrix}
((a,\dots, a_n),(b,\dots ,b_m),\dots,(c,\dots, c_r)), \\
((a^\prime,\dots, a^\prime_{n^\prime}),(b^\prime,\dots, b^\prime_{m^\prime}),\dots,(c^\prime,\dots, c^\prime_{r^\prime})), \\
\dots, \\
((a^{\prime\prime},\dots, a^{\prime\prime}_{n^{\prime\prime}}),(b^{\prime\prime},\dots ,b^{\prime\prime}_{m^{\prime\prime}}),\dots,(c^{\prime\prime},\dots, c^{\prime\prime}_{r^{\prime\prime}}))
\end{pmatrix})\\
&= \mu_{X}(\begin{pmatrix}
(a,\dots, a_n,b,\dots ,b_m,\dots,c,\dots, c_r), \\
(a^\prime,\dots, a^\prime_{n^\prime},b^\prime,\dots, b^\prime_{m^\prime},\dots,c^\prime,\dots, c^\prime_{r^\prime}), \\
\dots, \\
(a^{\prime\prime},\dots, a^{\prime\prime}_{n^{\prime\prime}},b^{\prime\prime},\dots ,b^{\prime\prime}_{m^{\prime\prime}},\dots,c^{\prime\prime},\dots, c^{\prime\prime}_{r^{\prime\prime}})
\end{pmatrix})\\
&= \begin{pmatrix}
a,\dots, a_n,b,\dots ,b_m,\dots,c,\dots, c_r, \\
a^\prime,\dots, a^\prime_{n^\prime},b^\prime,\dots, b^\prime_{m^\prime},\dots,c^\prime,\dots, c^\prime_{r^\prime}, \\
\dots, \\
a^{\prime\prime},\dots, a^{\prime\prime}_{n^{\prime\prime}},b^{\prime\prime},\dots ,b^{\prime\prime}_{m^{\prime\prime}},\dots,c^{\prime\prime},\dots, c^{\prime\prime}_{r^{\prime\prime}}
\end{pmatrix} \\
&= \mu_X(\begin{pmatrix}
(a,\dots, a_n),(b,\dots ,b_m),\dots,(c,\dots, c_r), \\
(a^\prime,\dots, a^\prime_{n^\prime}),(b^\prime,\dots, b^\prime_{m^\prime}),\dots,(c^\prime,\dots, c^\prime_{r^\prime}), \\
\dots, \\
(a^{\prime\prime},\dots, a^{\prime\prime}_{n^{\prime\prime}}),(b^{\prime\prime},\dots ,b^{\prime\prime}_{m^{\prime\prime}}),\dots,(c^{\prime\prime},\dots, c^{\prime\prime}_{r^{\prime\prime}})
\end{pmatrix})\\
&= (\mu_X \circ \mu_{T(X)})(\begin{pmatrix}
((a,\dots, a_n),(b,\dots ,b_m),\dots,(c,\dots, c_r)), \\
((a^\prime,\dots, a^\prime_{n^\prime}),(b^\prime,\dots, b^\prime_{m^\prime}),\dots,(c^\prime,\dots, c^\prime_{r^\prime})), \\
\dots, \\
((a^{\prime\prime},\dots, a^{\prime\prime}_{n^{\prime\prime}}),(b^{\prime\prime},\dots ,b^{\prime\prime}_{m^{\prime\prime}}),\dots,(c^{\prime\prime},\dots, c^{\prime\prime}_{r^{\prime\prime}}))
\end{pmatrix})\\
&= (\mu \circ \mu T)_{X}(\begin{pmatrix}
((a,\dots, a_n),(b,\dots ,b_m),\dots,(c,\dots, c_r)), \\
((a^\prime,\dots, a^\prime_{n^\prime}),(b^\prime,\dots, b^\prime_{m^\prime}),\dots,(c^\prime,\dots, c^\prime_{r^\prime})), \\
\dots, \\
((a^{\prime\prime},\dots, a^{\prime\prime}_{n^{\prime\prime}}),(b^{\prime\prime},\dots ,b^{\prime\prime}_{m^{\prime\prime}}),\dots,(c^{\prime\prime},\dots, c^{\prime\prime}_{r^{\prime\prime}}))
\end{pmatrix})
\end{align*}


To show the diagram \eqref{dia:monident} commutes.
Let $(x_1,x_2,\dots,x_n)\in\gamma(X)$ then we have,

\begin{align*}
(\mu \circ T\eta)_X((x_1,x_2,\dots,x_n)) &= \mu_X (T(\eta_{X})((x_1,x_2,\dots,x_n))) \\
&= \mu_{X}(((x_1),(x_2),\dots,(x_n))) \\
&= (x_1,x_2,\dots,x_n) \\
&= \mu_{X}(((x_1,x_2,\dots,x_n))) \\
&= \mu_{X}(\eta_{T(X)}((x_1,x_2,\dots,x_n)))\\
&= (\mu \circ \eta T)_{X}((x_1,x_2,\dots,x_n)).
\end{align*}

Therefore, $\mathbf{M}$ is a monad.
</span>


\subsection{Algebras of monads}
 


The following definition is adapted from Adámek - Herrlick - Strecker \cite{ACC} (Page 318, Definition 20.4) and the Casters video series on Monads \cite{catsters:mon}

<span style="display:block" class="definition">

Let $\cat{C}$ be a category and $\mathbf{T} = (T,\eta,\mu)$ be a monad on $\cat{C}$. An *algebra of $\mathbf{T*$} is a pair, $(X,\theta)$, where $X\in\ob{\cat{C}}$ and $\theta\in\ho[\cat{C}]{T(X)}{X}$, such that the following axioms hold:
\begin{enumerate}
\item $\theta \circ \eta_{X} = id_{X}$;
\item $\theta \circ T\theta = \theta \circ \mu_{X}$.
\end{enumerate}
That is the diagrams,
\begin{equation}


<img src="../../../png/Python/chapter_1/tikz_code_7_4.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>

\end{equation}
and,
\begin{equation}


<img src="../../../png/Python/chapter_1/tikz_code_7_5.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>

\end{equation}
commute.
</span>


<span style="display:block" class="definition">

Let $\cat{C}$ be a category, $\mathbf{T}=(T,\eta,\mu)$ be a monad on $\cat{C}$ and, $(A,\theta)$ and $(B,\phi)$ algebras of $\mathbf{T}$. A *morphism of algebras of $\mathbf{T*$} is a morphism $f\in\ho[\cat{C}]{A}{B}$ such that

$$\phi\circ T(f) = f\circ\theta$$

that is the following diagram,
\begin{equation*}

<img src="../../../png/Python/chapter_1/tikz_code_7_6.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>

\end{equation*}
commutes.
</span>

<span style="display:block" class="remark">
The collection of morphisms of algebras, between the same pair of algebras, is  a set if we assume the definition of a category in Definition \ref{def:category} since each $\hom$ set of $\cat{C}$ is a set.
</span>

<span style="display:block" class="lemma">

Let $\mathbf{T} = (T,\eta,\mu)$ be a monad of a category $\cat{C}$. Then for each $X\in\ob{\cat{C}}$, $(T(X), \mu_{X})$ is an algebra.
</span>
\begin{proof}
First note that $\eta_X\in\ho[\cat{C}]{T(T(X))}{T(X)}$ and therefore is a morphism $\eta_{X}\in\ho[\cat{C}]{T(Y)}{Y}$ where $Y=T(X)\in\ob{\cat{C}}$ so we check the axioms in Definition \ref{def:algofmon}.

\begin{align*}
\mu_{X} \circ \eta_{Y} &= \mu_{X}\circ \eta_{T(X)} \\
&= \mu_{X} \circ (\eta T)_{X} \\
&= id_{T(X)}, & \text{By Definition \ref{def:monad}} \\
&= id_{Y}
\end{align*}

and,

\begin{align*}
\mu_{X} \circ T(\mu_{X}) &= \mu_{X} \circ T(\mu_{X}) \\
&= \mu_{X} \circ \mu_{T(X)}, & \text{By Definition \ref{def:monad}} \\
&= \mu_{X} \circ \mu_{Y}.
\end{align*}

Therefore, $(X,\mu_X)$ is an algebra on $\mathbf{T}$.
\end{proof}


<span style="display:block" class="definition">

For a monad $\mathbf{T} = (T,\eta,\mu)$ we call $(T(X), \mu_{X})$ the *free $\mathbf{T*$-algebra on $X$.} 
</span>

The following Lemma \ref{lem:monalgcat} is stated in Adámek - Herrlick - Strecker \cite{ACC} (Page 318, Definition 20.4) but not proven.

<span style="display:block" class="lemma">

Let $\cat{C}$ be a category and $\mathbf{T}= (T,\eta,\mu)$ a monad over $\cat{C}$. The collection of all algebras, written $\alg{T}$, forms a category with morphisms of algebras, called the *Eilenberg-Moore category*. Composition is given by the composition of the category and for each $(A,\theta)\in\ob{\alg{T}}$ the identity is the $id_{A}$.
</span>
\begin{proof}
We first show composition of two morphisms for algebras is a morphism for algebras. Let $(A,\theta),(B,\phi),(C,\psi))\in\ob{\alg{T}}$, $f\in\ho[\cat{C}]{A}{B}$ and $g\in\ho[\cat{C}]{B}{C}$ be morphism for algebras then $g\circ f\in\ho[\cat{C}]{A}{C}$ and we have,

\begin{align*}
\psi \circ T(g\circ f) &= \psi \circ T(g) \circ T(f)\\
&= g \circ \phi \circ T(f)\\
&= g\circ  f \circ \theta.
\end{align*}

Therefore, $g\circ f$ is a morphism of algebras. 

Composition of these algebras is associative since composition in $\cat{C}$ is associative. 

For an algebra $(A,\theta)$ and $id_{A}\in\ho[\cat{C}]{A}{A}$ we have,

$$\theta \circ id_{A} = \theta = id_{A} \circ \theta$$

Hence, $id_{A}$ is a morphism for algebras. For a morphism of algebras $f\in\ho[\alg{T}]{(A,\theta_A)}{(B,\theta_B)}$ we have,

$$f\circ id_{A} = f = id_{B} \circ f.$$

Hence for each $(A,\theta_A)\in\ob{\alg{T}}$, $id_{A}$ is an identity morphism. Therefore we have a category.
\end{proof}




\subsubsection{Examples}


The following example is stated in Adámek - Herrlick - Strecker \cite{ACC} (Page 318, Example 20.5 (1)).

<span style="display:block" class="example">
Let $\mathbf{id_{\cat{C}}} = (id_{\cat{C}},\eta,\mu)$ be the identity monad as defined in Example \ref{exe:identitymonad}. Then an algebra on $\mathbf{id_{\cat{C}}}$ is an object $X\in\ob{\cat{C}}$ and a morphism $f\in\ho[\cat{C}]{X}{X}$ such that the diagrams \eqref{dia:monalgident} and \eqref{dia:monalgasso} commute. 

We have,

$$f\circ \eta_X = f\circ id_{X}= id_{X}$$

therefore, $f = id_{X}$ and,

\begin{align*}
f\circ T(f) &= id_{X} \circ id_{X} \\
&= f\circ \mu_{X}.
\end{align*}

Hence, algebras are of the form $(X,id_{X})$ for all $X\in\ob{\cat{C}}$. 

A morphism of algebras for two algebras $(X,id_{X})$ and $(Y,id_{Y})$ is a morphism, $f\in\ho[\cat{C}]{X}{Y}$ such that 
$$id_{Y}\circ f = f\circ id_{X}.$$
 Therefore $f$ is any morphism in $\cat{C}$. So the category $\alg{id_{\cat{C}}}) \cong \cat{C}$ 
</span>

The following Example \ref{exe:monoidalgebras} is stated in Adámek - Herrlick - Strecker \cite{ACC} (Page 318, Example 20.5 (2)).

<span style="display:block" class="example">

Let $\mathbf{M} = (T,\eta,\mu)$ be the monad defined in Example \ref{exe:monadmonoid1}. An algebra of $\mathbf{M}$, $(X,\theta)$ is a set $X\in\ob{\mathbf{Set}}$ and a morphism $\theta\in\ho[\mathbf{Set}]{\gamma(X)}{X}$ such that the diagrams \eqref{dia:monalgasso} and \eqref{dia:monalgident} commute. Hence we have for $x\in X$,

\begin{align*}
(\theta\circ \eta_{X})(x) &= \theta((x)) \\
&= id_{X}(x)
\end{align*}

therefore, $x = \theta((x))$.

For a general word of a word of $X$,

$$\gamma(\gamma(x)) = ((x_1,x_2,\dots, x_n),(y_1,y_2,\dots,y_m),\dots\dots,(z_1,z_2,\dots,z_r))$$

we have,

\begin{align*}
(\theta\circ T\theta)(\gamma(\gamma(x))) &= \theta(\theta((x_1,\dots,x_n)),\theta((y_1,\dots,y_m)),\dots,\theta((z_1,\dots,z_r))))\\
&= \theta((x_1,\dots,z_r))\\
&= (\theta\circ\mu_X)(\gamma(\gamma(x))).
\end{align*}

Therefore, an algebra of $\mathbf{M}$ $(X,\theta)$ defines a monoid $(X,(- \cdot -),e)$ where $e = ()$ is the empty word and composition is defined,

\begin{align*}
(- \cdot -) \colon X\times X &\to X,\\
x\cdot y &\mapsto \theta((x,y)).
\end{align*}

$e = ()$ is an identity since for any $x\in X$,

$$x\cdot e = \theta((x)) = x$$

and $(- \cdot -)$ is associative since given $x,y,z\in X$,

\begin{align*}
(x\cdot y)\cdot z &= \theta((x,y))\cdot z \\
&= \theta((\theta((x,y)),z))\\
&= \theta(x,y,z)
\end{align*}

by the commutativity of diagram \eqref{dia:monalgasso} and,

\begin{align*}
x\cdot(y\cdot z) &= x\cdot\theta((x,y)) \\
&= \theta((x,\theta(x,y))) \\
&= \theta((x,y,z))
\end{align*}

by the commutativity of diagram \eqref{dia:monalgasso}. Hence 

$$(x\cdot y)\cdot z = x\cdot(y\cdot z).$$

Therefore each algebra of $\mathbf{M}$ forms a monoid hence $\alg{M}$ is a subcategory of $\mathbf{Mon}$.

To show that $\alg{M} \cong \mathbf{Mon}$ we show every monoid can be defined by an algebra of $\mathbf{M}$.
Let $(X,\cdot,e)$ be a monoid then we can define the function $\theta$ as,

\begin{align*}
\theta\colon \gamma(X)&\to X\\
(x_1,x_2,\dots,x_n)&\mapsto x_1 \cdot x_2 \cdot \dots \cdot x_n.
\end{align*}

Then we check $(X,\theta)$ is an algebra of $\mathbf{M}$. For an element $x\in X$

\begin{align*}
(\theta \circ \eta_{X}) (x) &= \theta((x)) \\
&= x
\end{align*}

Therefore, diagram \eqref{dia:monalgident} commutes. For a general word of a word of $X$, $\gamma(\gamma(x))$,

\begin{align*}
(\theta \circ T\theta)(\gamma(\gamma(x))) &= \theta(((x_1\cdot x_2\cdot\dots \cdot x_{n}),(y_1\cdot\dots\cdot y_m),\dots,(z_1\cdot\dots\cdot z_r))) \\
&= x_1\cdot\dots\cdot z_r\\
&= \theta((x_1,\dots, z_r))\\
&= \theta(\mu_{x}(\gamma(\gamma(x))))\\
&= (\theta\circ \mu_{X}) (\gamma(\gamma(x))).
\end{align*}

Therefore, the diagram \eqref{dia:monalgasso} commutes and hence $(X,\theta)$ is an algebra of $\mathbf{M}$.

This means $(X,\theta)$ an algebra of $\mathbf{M}$ if and only if $(X,\cdot,e)$ is a monoid. Hence there is a one to one correspondence between monoids and algebras of $\mathbf{M}$.
</span>



\subsection{Adjoint Functors as monads}



The following lemma can be found in Adámek - Herrlick - Strecker \cite{ACC} (Page 318, Proposition 20.3). Where here we add the completed proof which was left as an exercise.

<span style="display:block" class="lemma">

Let $\func{F}{\cat{D}}{\cat{C}}$ and $\func{G}{\cat{C}}{\cat{D}} $ be functors and $(F,G,\eta,\varepsilon)$ be an adjoint situation. We have an endofunctor, $\func{T =GF}{\cat{D}}{\cat{D}}$ and natural transformation $\nattran{G\varepsilon F}{T^{2}}{T}$. Then $(GF, \eta, G\varepsilon F)$ is a monad on $\cat{D}$.
</span>
\begin{proof}
Since $\nattran{\varepsilon}{FU}{id_{\mathbf{Mon}}}$ is a natural transformation for each $M\in\ob{\mathbf{Mon}}$ we have,

\begin{align*}
(\varepsilon \circ FG\varepsilon)_M&= \varepsilon_M \circ F(G(\varepsilon_M)), \\
&= \varepsilon_{FG(M)} \circ \varepsilon_M,\\
&= (\varepsilon \circ \varepsilon FG).
\end{align*}

Therefore, for each $X\in\cat{D}$,

\begin{align*}
(\mu \circ T\mu)_X &= (G\varepsilon F \circ GF G\varepsilon F)_X\\
&= (G(\varepsilon \circ FG\varepsilon) F)_X \\
&= (G(\varepsilon \circ \varepsilon FG)F)_X \\
&= (G\varepsilon F\circ G\varepsilon FGF)_X \\
&= (\mu \circ T\mu)_X.
\end{align*}

Also we have,

\begin{align*} 
(\mu \circ T\eta)_X &= (G\varepsilon F \circ GF\eta)_X\\
&= G(\varepsilon F \circ F\eta)_X \\
&= G(id_{F})_X, & \text{ by definition \ref{def:adjsituations}}\\
&= G(id_{F_{X}})\\
&= G(F(X))\\
&= id_{GF_{X}} \\
&= id_{T_{X}}
\end{align*}

and,

\begin{align*}
(\mu \circ \eta T)_X &= (G\varepsilon F \circ \eta GF)_X \\
&= ((G\varepsilon\circ \eta G)F)_X \\
&= ((id_{G})F)_X, &\text{by Definition \ref{def:adjsituations}} \\
&= (id_{G_{F(X)}}) \\
&= id_{GF_{X}} \\
&= id_{T_{X}}.
\end{align*}

\end{proof}

<span style="display:block" class="remark">
The above shows that every adjoint situation gives rise to a monad, the following discussion shows that every monad has at least one adjoint situation which gives rise to it. 
</span>
The following Lemma \ref{lem:mongivesadjsitu} is stated in Adámek - Herrlick - Strecker \cite{ACC} (Page 319, Proposition 20.7) but not proven.

<span style="display:block" class="lemma">

Let $\cat{D}$ be a category and $\mathbf{T}= (T,\eta,\mu)$ be a monad over $\cat{D}$. Then $(F^{\mathbf{T}},G^{\mathbf{T}},\eta^{\mathbf{T}},\varepsilon^{\mathbf{T}})$ is an adjoint situation where:
\begin{enumerate}
\item 

$$\func{G^{\mathbf{T}}}{\alg{T}}{\cat{D}}$$
 is the *forgetful functor* which sends $(X,\theta_1)\in\ob{\alg{T}},$

$$(X,\theta_1)\mapsto X$$

and $f\in\ho[\alg{T}]{(X,\theta_1)}{(Y,\theta_2)}$,

$$f\mapsto f$$

since $f\in\ho[\cat{C}]{X}{Y}$;
\item

$$\func{F^{\mathbf{T}}}{\cat{D}}{\alg{T}}$$

sends objects $X\in\ob{\cat{D}}$,

$$X\mapsto (T(X),\mu_X)$$

and morphisms $f\in\ho[\cat{D}]{X}{Y}$,

$$f\mapsto T(f)$$

where $T(f)\in\ho[\alg{T}]{(T(X),\mu_X)}{(T(Y),\mu_Y)}$;
\item 
$$\nattran{\varepsilon^{\mathbf{T}}}{F^{\mathbf{T}}G^{\mathbf{T}}}{id_{\alg{T}}},$$

is defined for each $(X,\theta)\in\ob{\alg{T}}$ as,

$$\varepsilon^{\mathbf{T}}{(X,\theta)} = \theta;$$

\item $\eta^{\mathbf{T}}=\eta$,.
\end{enumerate}
</span>
\begin{proof}
For each $X\in\ob{\cat{D}}$ we have $(X,\mu_X)\in\ob{\alg{T}}$ by Lemma \ref{lem:muisalg}. Then we check $G^{\mathbf{T}}$ and $F^{\mathbf{T}}$ are indeed functors by checking the axioms in Definition \ref{def:functor}. For any two morphisms, $f\in\ho[\alg{T}]{(X,\theta_1)}{(Y,\theta_2)}$ and $g\in\ho[\alg{T}]{(Y,\theta_2)}{(Z,\theta_3)}$ we have,

\begin{align*}
G^{\mathbf{T}}(g\circ f) &= g\circ f \\
&=G^{\mathbf{T}}(g)\circ G^{\mathbf{T}}(f).
\end{align*}

Given $id_{X}\in\ho[\alg{T}]{(X,\theta_1)}{(X,\theta_1)}$ we have,

\begin{align*}
G^{\mathbf{T}}(id_X) &= id_{X}.
\end{align*}

Therefore $G^{\mathbf{T}}$ is a functor. 

Given $f\in\ho[\cat{D}]{X}{Y}$ and $g\in\ho[\cat{D}]{Y}{Z}$ we have,

\begin{align*}
F^{\mathbf{T}}(g\circ f) &= T(g\circ f)\\
&= T(g) \circ T(f) \\
&= F^{\mathbf{T}}(g) \circ F^{\mathbf{T}}(f).
\end{align*}

Given $id_{X}\in\ho[\cat{D}]{X}{X}$ we have,

\begin{align*}
F^{\mathbf{T}}(id_{X}) &= T(id_{X}) \\
&= id_{X} & \text{since $T$ is an endofunctor.}
\end{align*}

Therefore $F^{\mathbf{T}}$ is a functor.

$\eta$ is defined as a natural transformation so we just check the naturality condition on $\varepsilon$. Given $(X,\theta_1),(Y,\theta_2)\in\ob{\alg{T}}$ and $f\in\ho[\alg{T}]{(X,\theta_1)}{(Y,\theta_2)}$we have,

\begin{align*}
\varepsilon_{(Y,\theta_2)} \circ F^{\mathbf{T}}(G^{\mathbf{T}}(f)) &= \theta_2 \circ F^{\mathbf{T}}(f) \\
&= \theta_{2} \circ T(f) \\
&= f\circ \theta_1, & \text{By Definition \ref{def:monalgmorph}}\\
&= f \circ \varepsilon_{(X,\theta_1)}.
\end{align*}

Therefore $\varepsilon$ is a natural transformation.

To prove the above defines an adjoint situation we check the axioms in Definition \ref{def:adjsituations}. For each $X\in\ob{\cat{D}}$ we have,

\begin{align*}
(\varepsilon F^{\mathbf{T}}\circ F^{\mathbf{T}}\eta)_X &= \varepsilon_{F^{\mathbf{T}}(X)} \circ F^{\mathbf{T}}(\eta_{X}) \\
&= \varepsilon_{(T(X),\mu_{X})} \circ F^{\mathbf{T}}(\eta_{X}) \\
&= \mu_{X} \circ F^{\mathbf{T}}(\eta_{X}) \\
&= (\mu \circ F^{\mathbf{T}}\eta)_{X}\\
&= id_{F^{\mathbf{T}}}
\end{align*}

since $\mathbf{T}$ is a monad and $F^{\mathbf{T}}$ and there is a one to one correspondence between $F^{\mathbf{T}}(X)$ and $T(X)$.
For each $(X,\theta)\in\ob{\alg{T}}$ we have,

\begin{align*}
(G^{\mathbf{T}}\varepsilon \circ \eta G^{\mathbf{T}})_{(X,\theta)} &= G^{\mathbf{T}}(\varepsilon_{(X,\theta)}) \circ \eta_{G^{\mathbf{T}}((X,\theta))} \\
&= G^{\mathbf{T}}(\theta) \circ \eta_{X} \\
&=\theta \circ \eta_{X} \\
&= id_{X}, & \text{since $(X,\theta)$ is an algebra of $\mathbf{T}$} \\
&= id_{G^{\mathbf{T}}((X,\theta))}.
\end{align*}

Therefore $(F^{\mathbf{T}},G^{\mathbf{T}},\eta,\varepsilon)$ is an adjoint situation.
\end{proof}


<span style="display:block" class="remark">
The above Lemma \ref{lem:mongivesadjsitu} gives only existence of an adjoint situation given a monad and not uniqueness. In general a monad will *not* give rise to a unique adjoint situation.
</span>

We now define an important subcategory of the Eilenberg-Moore category of a monad, $\mathbf{T}$, the Kleisli category, and see how an adjoint situation from this category also gives rise to the monad $\mathbf{T}$. See Wiki \cite{wiki:kleisli} for more details on the Kleisli category.


<span style="display:block" class="definition">

Let $\cat{C}$ be a category and $\mathbf{T} = (T,\eta,\mu)$ be a monad over $\cat{C}$ then we define the *Kleisli category*, $K_{\mathbf{T}}$ as the full subcategory of $\alg{T}$ whose objects are the *free objects*, $(T(X),\eta_{X})$ for each $X\in\ob{\cat{C}}$.
</span>
The following lemma is adapted from MacLane \cite{MacLane} (Page 148, Theorem 3)

<span style="display:block" class="definition">

Let $\cat{C}$ be a category and $\mathbf{T}= (T,\eta,\mu)$ be a monad over $\cat{C}$. We define *the category of adjoint situations for the monad $\mathbf{T*$}, $adj_{\mathbf{T}}$ as:
\begin{enumerate}
\item The objects, $(\func{F}{\cat{C}}{\cat{X}},\func{G}{\cat{X}}{\cat{C}},\eta,\varepsilon)\in\ob{adj_{\mathbf{T}}}$, are adjoint situations which give rise to the monad $\mathbf{T}$, that is $(GF,\eta,G\varepsilon F)=(T,\eta,\mu)$;
\item The morphisms, $(K,id_{\cat{X}})$ are morphisms of adjoint situations defined in Definition \ref{def:morphadjsitu} such that $id_{\cat{X}}$ is the identity on $\cat{X}$;
\item Composition is composition of morphisms of adjoint situations as defined in Definition \ref{lem:compmorphadjsit};
\item The identities are defined in Example \ref{exe:identityadjsitumorph}.
\end{enumerate}
</span>

<span style="display:block" class="lemma">
$adj_{\mathbf{T}}$ as defined above in Definition \ref{def:catofadjsituofmon} is a category.
</span>
\begin{proof}
The composition is associative since the composition of functors is associative. Hence we have a category structure.
\end{proof}
The following Lemma \ref{lem:termobajdcatiskli} can be found in MacLane \cite{MacLane} with no proof, here we omit the proof.

<span style="display:block" class="lemma">

Let $\mathbf{T}=(T,\eta,\mu)$ be a monad and $adj_{\mathbf{T}}$ be the corresponding category of adjoint situations. Then the terminal object in $adj_{\mathbf{T}}$ is the adjoint situation, $(\func{F^{\mathbf{T}}}{\cat{D}}{\alg{T}},\func{G^{\mathbf{T}}}{\alg{T}}{\cat{D}},\eta,\varepsilon)$, defined in Lemma \ref{lem:mongivesadjsitu}.
</span>
\comment{
\begin{proof}
We need to show given an adjoint situation giving rise to the monad $\mathbf{T}$, $(F,G,\eta,\varepsilon)$, there exists a unique morphism $(K,id_{\cat{D}})$ to the adjoint situation, $(F^{\mathbf{T}},G^{\mathbf{T}},\eta^{\mathbf{T}},\varepsilon^{\mathbf{T}})$, in Lemma \ref{lem:mongivesadjsitu}. For $(K,id_{\cat{D}})$ to be a morphism of adjoint situations as defined in Definition \ref{def:morphadjsitu} $\func{K}{\cat{C}}{\alg{T}}$ is a functor satisfying the diagram \eqref{dia:morphadjsitufunc} and identities in Definition \ref{def:morphadjsitu} (2).
\end{proof}
}
This result ties together different parts of this project. Had this project been longer we would have discussed the proof and consequences. We also could have looked into monoidal categories and how monoids generalise in other categories, this leads to the exploration of the quote by James Iry \cite{jamesiry}: "a monad is a monoid in the category of endofunctors, what's the problem?".




\pagebreak




\bibliographystyle{plainurl}
\bibliography{5004M.bib}



<script src="../../mathjax_helper.js"></script>