<style>
.md-content {
    max-width: 80em;
}
</style>
#1.5. Universal morphisms and adjoint functors
 

In this section we see how the free and forgetful functors defined in Definition \ref{def:forgetfulfunctormon} and Definition \ref{def:freemonoid} are related by looking at universal morphism and adjoint functors. Definitions and notation from this section are from Clementino \cite{Maria} and Adámek - Herrlick - Strecker \cite{ACC}. 

<span style="display:block" class="definition">[Universal morphism]

Let $\cat{C}$ and $\cat{D}$ be categories and $\func{G}{C}{D}$ be a functors and $X\in\ob{\cat{D}}$.\\
A *universal morphism from $X$ to $G$* is a pair $(\eta_{X},C_{X})$ where $\eta_{X}\in\ho{X}{G(C_{X})}$ is a morphism and $C_{X}\in\ob{\mathscr{C}}$ such that for each $C\in\ob{\mathscr{C}}$ and each morphism $f\in\ho{X}{G(C)}$ there exists a unique morphism $\hat{f}\in\ho{C_{X}}{C}$ for which the diagram on the left
\begin{equation}

<img src="../../../png/Python/chapter_1/tikz_code_5_9.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
\\
\end{equation}
commutes.\\
A *universal morphism from $G$ to $X$* is a pair $(\varepsilon_{X},C_{X})$ where $\varepsilon_{X}\in\ho{G(C_{X})}{X}$ is a morphism and $C_{X}\in\ob{\cat{C}}$ such that for each $C\in\ob{\cat{C}}$ and each morphism $g\in\ho{G(C)}{X}$ there exists a unique morphism $\hat{g}\in\ho{C}{C_{X}}$ for which the diagram on the left

<img src="../../../png/Python/chapter_1/tikz_code_5_0.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
commutes.
</span>

<span style="display:block" class="definition">[Adjoint]

Let $\cat{C}$ and $\cat{D}$ be categories and $\func{G}{\cat{C}}{\cat{D}}$ a functor. We say $G$ is *right adjoint* if for each object $X\in\ob{\cat{D}}$ there exists a universal morphism, $(\eta_{X},C_{X})$ from $X$ to $G$.
We say $G$ is *left adjoint* if for each object $X\in\ob{\cat{D}}$ there exists a universal morphism, $(\epsilon_{X},C_{X})$ from $G$ to $X$.
We say $G$ is *adjoint* if $G$ is either right adjoint or left adjoint.
</span>

\subsection{Example: Free/forgetful adjunction for monoids}
 


<span style="display:block" class="lemma">

Let $\mathrm{F}\colon\mathbf{Set}\to\mathbf{Mon}$ be the free monoid functor defined in Definition \ref{def:freefunctmon} and $\mathrm{U}\colon\mathbf{Mon}\to\mathbf{Set}$ be the forgetful monoid functor as defined in Definition \ref{def:forgetfulfunctormon}. Then $\mathrm{F}$ is left adjoint.
</span>
\begin{proof}
For each $X\in\ob{\mathbf{Set}}$ let 
\begin{align*}
\eta\colon id_{\mathbf{Set}}&\to UF,\\
\eta_{X}\colon X&\to U((\gamma(X),*,\varnothing)),\\
x&\mapsto (x).
\end{align*}

Then given $(A,\circ,e_{A})\in\mathbf{Mon}$ and $f\in\ho[\mathbf{Set}]{X}{U((A,\circ,e_{A}))}$ let 
\begin{align*}
\hat{f}\colon(\gamma(X),*,\varnothing)&\to(A,\circ,e_{A}),\\
\hat{f}((x_{1},x_{2},\dots,x_{n}))&\mapsto f(x_{1})\circ f(x_{2})\circ\dots\circ f(x_{n}),\\
\hat{f}(\varnothing)&\mapsto e_{A}.
\end{align*}

We first show $\hat{f}$ is a monoid homomorphism. We ,have that

\begin{align*}
\hat{f}(\varnothing) = e_{A}
\end{align*}

and,

\begin{align*}
\hat{f}((x_{1},x_{2},\dots,x_{n},y_{1},y_{2},\dots,y_{n})) &= f(x_{1})\circ f(x_{2})\circ \dots\circ f(x_{n})\circ f(y_{1})\circ f(y_{2})\circ\dots\circ f(y_{n}))\\
&= \hat{f}((x_{1},x_{2},\dots,x_{n}))\circ\hat{f}((y_{1},y_{2},\dots,y_{n})).
\end{align*}

Hence $\hat{f}$ is a monoid homomorphism.
The diagram,

<img src="../../../png/Python/chapter_1/tikz_code_5_1.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
Commutes. So we need to show $\hat{f}$ is unique. Assume there exists monoid homomorphism $\hat{g}$ such that the diagram commutes. Then for each $x\in X$,

\begin{align*}
f(x) &= \hat{g}(\eta_{x}(x))\\
&= \hat{g}((x))\\
\end{align*}

Since $\hat{g}$ is a monoid homomorphism,

\begin{align*}
\hat{g}((x_{1},x_{2},\dots,x_{n}))&=\hat{g}((x_{1}))\circ\hat{g}((x_{2}))\dots\circ\hat{g}((x_{n}))\\
&= f(x_{1})\circ f(x_{2})\circ\dots\circ f(x_{n})\\
&= \hat{f}.
\end{align*}

Therefore, since there is a unique $\hat{f}$ such that the diagram commutes for all $X\in\mathbf{Set}$. $F$ is left adjoint.
\end{proof}

<span style="display:block" class="remark">
We will see later that Lemma \ref{lem:freeadj} implies $U$ is right adjoint.
</span>

\subsubsection{Equivalent definitions of adjoint functors}
 


The following Lemma \ref{lem:hombijection} followed from discussion with the supervisor and from the Wikipedia article on adjoint functors \cite{wiki:adjoint}. Here we add the proof.

<span style="display:block" class="lemma">

Let $\cat{C}$ and $\cat{D}$ be categories, $\func{G}{\cat{C}}{\cat{D}}$ be a functor and for each $X\in\ob{\cat{D}}$ we have $(\eta_{X},C_{X})$ is a universal morphism from $X$ to $G$. Then given $C\in\cat{C}$ there exists a bijective function, defined as

\begin{align*}
\phi_{X,C}\colon\ho[\cat{D}]{X}{G(C)}&\to\ho[\cat{C}]{C_{X}}{C},\\
f&\mapsto \hat{f},
\end{align*}

where $\hat{f}$ is defined from the universal property in Diagram \eqref{eqn:uniarrowXG}.
Further given $C^\prime\in\ob{\cat{C}}$ and $g\in\ho{C}{C^\prime}$ the following diagram commutes,
\begin{equation}


<img src="../../../png/Python/chapter_1/tikz_code_5_10.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
\\
\end{equation}
where $\mathrm{h}_{C_X}$ is the functor defined in Lemma \ref{lem:homsetfunctor}. 
In particular the $\phi_{X,C}$, where $C\in \ob{\cat{C}}$, combine to give a natural isomorphism  $\nattran{\phi_{X}}{\mathrm{h}_{X}\circ G}{\mathrm{h}_{C_{X}}}$.
</span>
\begin{proof}
First we show that for $C\in\ob{\cat{C}}$, $\phi_{X,C}$ is a bijection by showing it is surjective and injective. Given $f,f^\prime\in\ho[\cat{D}]{X}{G(C)}$ suppose $\hat{f}=\hat{f^\prime}$,  then we have,

\begin{align*}
f &= G(\hat{f})\circ \eta_{X}\\
&= G(\hat{f^\prime})\circ\eta_{X}\\
&= f^{\prime}.
\end{align*}

Hence $\phi_{X,C}$ is injective. Given $g \in\ho[\cat{C}]{C_{X}}{C}$ we have $G(g)\in\ho[\cat{D}]{G(C_{X})}{G(C)}$ since $G$ is a functor. We can then construct $f=G(g)\circ\eta_{X}$ since $\eta_{X}\in\ho[\cat{D}]{X}{G(C_{X})}$ and $\cat{D}$ is a category, hence $g=\hat{f}$. Therefore $\phi_{X,C}$ is surjective and hence a bijection. We will now show the diagram \eqref{cd:homisomorph} commutes. Given $f\in\ho[\cat{D}]{X}{G(C)}$ we need to show

$$g\circ\phi_{X,C}(f) = \phi_{X,C^\prime}(G(g)\circ f).$$

We have,

\begin{align*}
g\circ\phi_{X,C}(f) &= g\circ \hat{f}\\
&= \phi_{X,C^\prime}(\phi_{X,C^\prime}^{-1}(g\circ \hat{f}))\\
&= \phi_{X,C^\prime}(G(g\circ \hat{f})\circ\eta_{X})\\
&= \phi_{X,C^\prime}(G(g)\circ G(\hat{f})\circ\eta_{X})\\
&= \phi_{X,C^\prime}(G(g)\circ f).
\end{align*}

\end{proof}



The following theorem is adapted from Adámek - Herrlick - Strecker \cite{ACC} (page 306 Theorem 19.1) where here we add the complete proof which was left as an exercise.

<span style="display:block" class="theorem">

Let $\func{G}{\cat{C}}{\cat{D}}$ be a right adjoint functor and suppose that for each object $X\in\ob{\cat{C}}$ we are given a universal morphism $(\eta_{X},C_{X})$, from $X$ to $G$. 
\begin{enumerate}

\item  There exists a unique functor $\func{F}{\cat{D}}{\cat{C}}$ such that the following two conditions hold:
\begin{enumerate}
\item $F(X) = C_{X}$;
\item We have a natural transformation, 
\begin{align*}
\nattran{\eta}{id_{\cat{D}}&}{GF}

\end{align*}


whose components are given by:

$$\eta_X\colon X \to G(C_X);$$


\end{enumerate}
\item  Further, we have a natural transformation $\nattran{\varepsilon}{FG}{id_{\cat{C}}}$ where for each $C\in\cat{C}$, $\varepsilon_{C}$ is the unique morphism for which,
\begin{equation}


<img src="../../../png/Python/chapter_1/tikz_code_5_11.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>

\end{equation}
commutes;

\item We also have that the following identities are satisfied:
\begin{enumerate}
\item $\eta G \circ G\varepsilon = id_{G}$;
\item $F\eta \circ \varepsilon F = id_{F}$.
\end{enumerate}
\end{enumerate}
</span>
\begin{proof}
Let $\func{F}{\cat{D}}{\cat{C}}$ be defined:

\begin{align*}
F\colon\ob{\cat{D}}&\to\ob{\cat{C}},\\
X&\mapsto C_{X}
\end{align*}

and,

\begin{align*}
F\colon\ho[\cat{D}]{X}{Y}&\to\ho[\cat{C}]{F(X)}{F(Y)},\\
f&\mapsto \widehat{\eta_{Y}\circ f}.
\end{align*}

This definition comes from the diagram,

<img src="../../../png/Python/chapter_1/tikz_code_5_2.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
which commutes since $\eta_{X}$ is a universal morphism.
If this is a functor then it is unique since it is unique on objects and for $f\in\ho[\cat{D}]{X}{Y}$ we have $\eta_{Y}\circ f\in\ho[\cat{D}]{X}{G(C_{Y})}$ and by Lemma \ref{lem:hombijection} there is a bijection between $\ho[\cat{D}]{X}{G(C_{Y})}$ and $\ho[\cat{C}]{C_{X}}{C_{Y}}$ hence $F$ is unique on morphisms.

We show $F$ is a functor. Given $X\in\ob{\cat{D}}$,

\begin{align*}
F(id_{X}) &= \widehat{\eta_{X} \circ id_{X}}\\
&= \hat{\eta_{X}}\\
&= id_{C_{X}}\\
&= id_{F(X)}.
\end{align*}

Equivalently the diagram,

<img src="../../../png/Python/chapter_1/tikz_code_5_3.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
commutes since $\eta_{X}$ is a universal morphism.
We also have for $f\in\ho[\cat{D}]{X}{Y}$ and $g\in\ho[\cat{D}]{Y}{Z}$, the diagram,

<img src="../../../png/Python/chapter_1/tikz_code_5_4.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
commutes since $\eta_{X}$ and $\eta_{Y}$ are universal morphisms and we also have,

<img src="../../../png/Python/chapter_1/tikz_code_5_5.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
commutes since $\eta_{X}$ is a universal morphism, in particular,

$$G(\widehat{\eta_{Z}\circ(g\circ f)} = G(\widehat{\eta_{Z}\circ g}) \circ G(\widehat{\eta_{Y}\circ f}),$$

therefore, since $G$ is a functor,

\begin{align*}
F(g\circ f) &= \widehat{\eta_{Z} \circ g\circ f} \\
&= \widehat{\eta_{Z}\circ g} \circ \widehat{\eta_{Y}\circ f}\\
&= F(g)\circ F(f).
\end{align*}

Hence $F$ is a functor.

Define $\nattran{\eta}{id_{\cat{D}}}{FG}$ for each $X\in\ob{\cat{D}}$, $\eta_{X}$ is the universal morphism given. Then clearly $\eta_{X}\in\ho[\cat{D}]{X}{GF(X)}$ since $F(X) = C_{X}$. 

We show the naturality condition holds. Given $X,Y\in\ob{\cat{D}}$ and $f\in\ho[\cat{D}]{X}{Y}$,

<img src="../../../png/Python/chapter_1/tikz_code_5_6.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
commutes since $\eta_{X}$ is a universal morphism. Hence the naturality condition holds and $\eta$ is a natural transformation. $\nattran{\varepsilon}{FG}{id_{\cat{C}}}$ exists since $\eta_{G(C)}$ is a universal morphism we show the naturality condition holds. Given $C,C^\prime\in\ob{C}$ and $f\in\ho[\cat{C}]{C}{C^\prime}$ we have,

\begin{align*}
G(f\circ \varepsilon_{C})\circ \eta_{G(C)} &= G(f)\circ G(\varepsilon_{C}) \circ \eta_{G(C)}\\
&= G(f) \circ id_{G(C)} \\
&= G(f) \\
&= G(\varepsilon_{C^\prime}) \circ \eta_{G(C^\prime)} G(f) \\
&= G(\varepsilon_{C^\prime}) \circ GFG(f)\circ \eta_{G(C)}, &\text{ by the naturality of $\eta$,}\\
&= G(\varepsilon_{C^\prime}\circ FG(f)) \circ \eta_{G(C)}.
\end{align*}

Therefore, 
$$f\circ \varepsilon_{C} = \varepsilon_{C^\prime}\circ FG(f).$$

The identity (a) is satisfied by the definition of $\varepsilon$ Diagram \eqref{eqn:counitdef}.
To show identity (b) first note since $\eta$ is a natural transformation from $id_{\cat{D}}$ to $GF$ we have for each $D\in\ob{\cat{D}}$,

\begin{align*}
(\eta GF \circ \eta)_D &= \eta_{G(F(D))} \circ \eta_D \\
&= G(F(\eta_D)) \circ \eta_{D}\\
&=(GF\eta \circ \eta)_D.
\end{align*}
 
Therefore by using identity (a) we have:

\begin{align*}
G(id_{F})\circ \eta &= id_{G}F \circ \eta \\
&= G\varepsilon F \circ \eta GF \circ \eta \\
&= G\varepsilon F \circ GF \eta \circ \eta \\
&= G(\varepsilon F \circ F\eta)\circ \eta.
\end{align*}

Hence,

$$id_{F} = \varepsilon F \circ F\eta.$$


\end{proof}


\subsection{Adjoint situations}



Definition \ref{def:adjsituations} if adapted from Adámek - Herrlick - Strecker \cite{ACC} page 307.

<span style="display:block" class="definition">

An *adjoint situation* $(F,G,\eta,\varepsilon)$ is a pair of functors $\func{F}{\cat{D}}{\cat{C}}$ and $\func{G}{\cat{C}}{\cat{D}}$ and a pair of natural transformations $\nattran{\eta}{id_{\cat{D}}}{GF}$ and $\nattran{\varepsilon}{FG}{id_{\cat{C}}}$. 
Satisfying the *triangle identities*:
\begin{enumerate}
\item $\varepsilon F \circ F\eta = id_{F}$;
\item $G\varepsilon \circ \eta G = id_{G}$.
\end{enumerate}
We call $\eta$ the *unit* and $\varepsilon$ the *co-unit*.
</span>

<span style="display:block" class="remark">
Given a right adjoint functor $\func{G}{\cat{C}}{\cat{D}}$, Theorem \ref{thm:adjsituation} tells us that there exists at least one adjoint situation $(F,G,\eta,\varepsilon)$.
</span>
The following Corollary \ref{cor:homdefadj} followed from discussions with the supervisor and here we provide a proof.
\begin{cor}

Let $\cat{C}$ and $\cat{D}$ be categories, $\func{G}{\cat{C}}{\cat{D}}$ be a functor. 
The following are equivalent:
\begin{enumerate}
\item For each $D\in\ob{\cat{D}}$, $(\eta_{D},F(D))$is a universal morphism from $D$ to $G$;
\item $(F,G,\eta,\varepsilon)$ is an adjoint situation;
\item The family of functions: 

$$\phi_{D,C}\colon \ho[\cat{C}]{F(D)}{C}\to \ho[\cat{D}]{D}{G(C)},$$
 are bijections. That is for all $D\in\ob{\cat{D}}$, there exists a natural isomorphism $\nattran{\phi_{D}}{\mathrm{h}_{D}\circ G}{\mathrm{h}_{G(C)}}$.
\end{enumerate}
\end{cor}
\begin{proof}
(1) $\implies$ (2) by Theorem \ref{thm:adjsituation} and (1) $\implies$ (3) by Lemma \ref{lem:hombijection}. Suppose that for each object $D\in\ob{\cat{D}}$ we have a natural isomorphism $\nattran{\phi_{D}}{\mathrm{h}_{D}\circ G}{\mathrm{h}_{G(C)}}$. Then for each object $D\in\ob{\cat{D}}$ and each $C\in\ob{\cat{C}}$, $f\in\ho[\cat{D}]{D}{G(C)}$ there is a unique morphism $\phi_{D}(f)\in\ho[\cat{C}]{F(D)}{C}$, therefore $(\eta_{D},F(D))$ where $\eta_{D}$ is the unique morphism for which the diagram,
\begin{equation*}

<img src="../../../png/Python/chapter_1/tikz_code_5_12.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>

\end{equation*}
commutes. Therefore (3) $\implies$ (1).
Suppose we have an adjoint situation $(F,G,\eta,\varepsilon)$ then for $C\in\ob{\cat{C}}$, $D\in\ob{\cat{D}}$ and $f\in\ho[\cat{D}]{D}{G(C)}$ the diagram on the left,
\begin{equation*}

<img src="../../../png/Python/chapter_1/tikz_code_5_13.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>

\end{equation*}
commutes. Therefore for a morphism $f$ there exists a morphism $\hat{f}=\varepsilon_{C}\circ F(f)$ for which the diagram commutes. To show uniqueness if  $\hat{f}\in\ho[\cat{C}]{F(D)}{C}$ where $f= G(\hat{f})\circ \eta_D$ we have the diagram,
\begin{equation*}

<img src="../../../png/Python/chapter_1/tikz_code_5_14.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>

\end{equation*}
commutes, and therefore $\hat{f} = \varepsilon_{C}\circ F(f)$ is the unique morphism for which $f= G(\hat{f})\circ \eta_D$, hence $(\eta_{D},F(D))$ is a universal morphism from $D$ to $G$ for all $D\in\ob{\cat{D}}$.
Therefore (2) $\implies$ (1).
\end{proof}

The following Lemma \ref{lem:dualityofadjoints} is adapted from Adámek - Herrlick - Strecker \cite{ACC} (Page 308 Proposition 19.7)

<span style="display:block" class="lemma">

Given an adjoint situation $(F,G,\eta,\varepsilon)$ we have:
\begin{enumerate}
\item $G$ is a right adjoint functor.
\item For each $D\in\ob{\cat{D}}$, $(\eta_{D},F(D))$ is a universal morphism from $D$ to $G$.
\item $F$ is a left adjoint functor.
\item For each $C\in\ob{\cat{C}}$, $(\varepsilon_{C},G(C))$ is a universal morphism from $F$ to $C$
\end{enumerate}
</span>
\begin{proof}
By Corollary \ref{cor:homdefadj} if we have an adjoint situation, $(F,G,\eta,\varepsilon)$ then $(\eta_{D},F(D))$ are universal morphisms hence $G$ is right adjoint. The proof for (4) and thus (3) follows similarly to the proof of \ref{cor:homdefadj}. Suppose we have the adjoint situation $(F,G,\eta,\varepsilon)$, then for $D\in\ob{\cat{D}}$, $C\in\ob{\cat{C}}$ and $f\in\ho[\cat{C}]{F(D)}{C}$ the diagram on the left,
\begin{equation*}

<img src="../../../png/Python/chapter_1/tikz_code_5_15.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
,
\end{equation*}
commutes. Therefore for a morphism $f$ there exists a morphism $\hat{f}= G(f)\circ\eta_{D}$ for which the diagram commutes. To show uniqueness suppose we have $\hat{f}\in\ho[\cat{D}]{G(C)}{D}$ where $f = \varepsilon_{C}\circ F(\hat{f})$, then we have the diagram,

\begin{equation*}

<img src="../../../png/Python/chapter_1/tikz_code_5_16.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
,
\end{equation*}

commutes, and therefore $\hat{f}= G(f)\circ\eta_{D}$ is the unique morphism for which $f = \varepsilon_{C}\circ F(\hat{f})$, hence $(\varepsilon_{C},G(C))$ is a universal morphism from $F$ to $C$ for all $C\in\ob{\cat{D}}$ and therefore $F$ is a left adjoint functor.
\end{proof}
The following Lemma \ref{lem:adjsituniiso} is adapted from Adámek - Herrlick - Strecker \cite{ACC} (Page 309 Proposition 19.9) however here we give the proof from the perspective of the left adjoint functor $F$.

<span style="display:block" class="lemma">

Let $\func{F}{\cat{D}}{\cat{C}}$ be a left adjoint functor and $(F,G,\eta,\varepsilon)$ be an adjoint situation. 
\begin{enumerate}
\item If there is an adjoint situation $(F,G^\prime,\eta^\prime,\varepsilon^\prime)$ then there exists a natural isomorphism $\nattran{\tau}{G}{G^\prime}$ where $\varepsilon^\prime = F\tau \circ \varepsilon$ and $\eta^\prime = \eta\circ\tau^{-1}F$;
\item If we have a functor $G^\prime$ and a natural isomorphism $\nattran{\tau}{G}{G^\prime}$ then $(F,G^\prime,\eta\circ\tau^{-1}F,F\tau\circ\varepsilon)$ is an adjoint situation.
\end{enumerate}
</span>
\begin{proof}
(1): By Lemma \ref{lem:dualityofadjoints} we have for each $C\in\ob{\cat{C}}$,  $(\varepsilon_{C},G(C))$ and $(\varepsilon^\prime_{C},G^\prime(C))$ are universal morphisms from $F$ to $G$.
Therefore there is an isomorphism $\tau_{C}$ with $\varepsilon_{C}^\prime=F\tau_{C} \circ\varepsilon_{C}$ by Definition \ref{def:uniarrow} and hence $\nattran{\tau}{G}{G^\prime}$ is a natural isomorphism with $\varepsilon^\prime=F\tau \circ\varepsilon$. For each $D\in\ob{\cat{D}}$ we have:

\begin{align*}
\varepsilon_{F(D)} \circ F(\eta_{D}) &= id_{F(D)}\\
&= \varepsilon^\prime_{F(D)} \circ F(\eta^\prime_{D})\\
&= F\tau_{F(D)}\circ\varepsilon_{F(D)} \circ F(\eta^\prime_{D})\\
&= \varepsilon_{F(D)} \circ F(\tau_{F(D)}\circ \eta^\prime_{D}).
\end{align*}

Therefore $\eta_{D} = \tau_{F(D)} \circ \eta^\prime_{D}$, and hence $\eta^\prime=\eta\circ\tau^{-1}F$.

(2): We have for each $D\in\ob{\cat{D}}$,

\begin{align*}
(F(\eta\circ\tau^{-1}F)\circ (F\tau\circ\varepsilon)F) (D) &= F(\eta_{D})\circ F(\tau^{-1}_{F(D)})\circ F(\tau_{F(D)})\circ\varepsilon_{F(D)} \\
&= F(\eta_{D})\circ F(\tau^{-1}_{F(D)}\circ \tau_{F(D)})\circ\varepsilon_{F(D)} \\
&= F(\eta_{D})\circ\varepsilon_{F(D)}\\
&= id_{F} (D)
\end{align*}

and for $C\in\ob{\cat{C}}$ we have,

\begin{align*}
(\eta\circ\tau^{-1}F)G^\prime \circ G^\prime(F\tau\circ\varepsilon)(C) &= \eta_{G^\prime(C)}\circ\tau^{-1}_{F(G^\prime(C))} \circ G^\prime(F(\tau_{C})\circ\varepsilon_{C}) \\
&= \eta_{G^\prime(C)}\circ\tau^{-1}_{F(G^\prime(C))} \circ G^\prime(F(\tau_{C}))\circ G^\prime(\varepsilon_{C})\\
&= \eta_{G^\prime(C)}\circ G^\prime(\varepsilon_{C}) \\
&=id_{G^\prime}(C).
\end{align*}

Therefore $(F,G^\prime,\eta\circ\tau^{-1}F,F\tau\circ\varepsilon)$ is an adjoint situation by Definition \ref{def:adjsituations}.
\end{proof}


\subsubsection{Category of adjoint situations}
 

This section uses ideas from MacLane \cite{MacLane}, specifically chapter IV. To define a category of adjoint situations we need to define morphisms between adjoint situations. The following Definition \ref{def:morphadjsitu} is adapted from MacLane \cite{MacLane} (Page 99).


<span style="display:block" class="definition">

Let $(\func{F}{\cat{D}}{\cat{C}},\func{G}{\cat{C}}{\cat{D}},\eta,\varepsilon)$ and $(\func{F^\prime}{\cat{D^\prime}}{\cat{C^\prime}},\func{G^\prime}{\cat{C^\prime}}{\cat{D^\prime}},\eta^\prime,\varepsilon^\prime)$ be adjoint situations. A *morphism between adjoint situations* from $(F,G,\eta,\varepsilon)$ to $(F^\prime,G^\prime,\eta^\prime,\varepsilon^\prime)$ is a pair of functors $(\func{K}{\cat{D}}{\cat{D^\prime}},\func{L}{\cat{C}}{\cat{C^\prime}})$ such that:
\begin{enumerate}
\item 
For each object $C\in\ob{\cat{C}}$,

$$(K\circ F\circ G)(C) = (F^\prime\circ G^\prime\circ K)(C) = (F^\prime\circ L\circ G)(C)$$

and each morphism $f\in\ho[\cat{C}]{C}{C^\prime}$

$$(K\circ F\circ G)(f) = (F^\prime\circ G^\prime\circ K)(f) = (F^\prime\circ L\circ G)(f).$$

That is the diagram,
\begin{equation}


<img src="../../../png/Python/chapter_1/tikz_code_5_17.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>

\end{equation}
commutes;
\item For each object $C\in\ob{\cat{C}}$ we have,

$$\varepsilon^\prime _{K(C)} = K(\varepsilon_C),$$

and for each object $D\in\ob{\cat{D}}$ we have,

$$L(\eta_D) = \eta^\prime_{L(D)}.$$

\end{enumerate}
</span>


<span style="display:block" class="lemma">

Let $(\func{F}{\cat{D}}{\cat{C}},\func{G}{\cat{C}}{\cat{D}},\eta,\varepsilon)$, $(\func{F^\prime}{\cat{D^\prime}}{\cat{C^\prime}},\func{G^\prime}{\cat{C^\prime}}{\cat{D^\prime}},\eta^\prime,\varepsilon^\prime)$ and $(\func{F^{\prime\prime}}{\cat{D^{\prime\prime}}}{\cat{C^{\prime\prime}}},\func{G^{\prime\prime}}{\cat{C^{\prime\prime}}}{\cat{D^{\prime\prime}}},\eta^{\prime\prime},\varepsilon^{\prime\prime})$ be adjoint situations and let $(\func{K}{\cat{D}}{\cat{D^\prime}},\func{L}{\cat{C}}{\cat{C^\prime}})$ and $(\func{K^\prime}{\cat{D^\prime}}{\cat{D^{\prime\prime}}},\func{L^\prime}{\cat{C^\prime}}{\cat{C^{\prime\prime}}})$ be morphisms of adjoint situations. Then $(K^\prime \circ K,L^\prime\circ L)$ is a morphism of adjoint situations.
</span>
\begin{proof}
First note $\func{K^\prime \circ K}{\cat{D}}{\cat{D^\prime}}$ and $\func{L^\prime\circ L}{\cat{C}}{\cat{C^\prime}}$ are functors since they are the composition of functors. We have the diagram,
\begin{equation*}

<img src="../../../png/Python/chapter_1/tikz_code_5_18.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>

\end{equation*}
commutes since all parts of the diagram commute.
Then for each $C\in\ob{\cat{C}}$ we have the following,

\begin{align*}
\varepsilon^{\prime\prime}_{K^\prime(K(C))} &= K^\prime(\varepsilon^\prime_{K(C)}) \\
&= K^\prime(K(\varepsilon_{C}))
\end{align*}

and for each $D\in\ob{\cat{D}}$ we have,

\begin{align*}
L^\prime(L(\eta_{D})) &= L^\prime(\eta_{L(D)}) \\
&= \eta_{L^\prime(L(D))}.
\end{align*}

Therefore $(K^\prime \circ K, L^\prime \circ L)$ is a morphism of adjoint situations.
\end{proof}

<span style="display:block" class="definition">

We define the composition of two morphisms of adjoint situations, $(L,K)$ and $(L^\prime,L^\prime)$ as 
$$(L^\prime,K^\prime)\circ(L,K) = (K^\prime \circ K, L^\prime \circ L)$$

</span>

<span style="display:block" class="example">

Let $(\func{F}{\cat{D}}{\cat{C}},\func{G}{\cat{C}}{\cat{D}},\eta,\varepsilon)$ be an adjoint situation. Then $(id_{\cat{C}},id_{\cat{D}})$ a morphism of adjoint situations from $(F,G,\eta,\varepsilon)$ to $(F,G,\eta,\varepsilon)$. In fact we have that this morphism acts as an identity with respect to morphisms of adjoint situations and the composition defined above in Definition \ref{def:compadjsit}.
</span>
\begin{proof}
We need to show Diagram \ref{dia:morphadjsitufunc} commutes, so we have,

\begin{align*}
id_{\cat{C}}\circ F\circ G &= F\circ G \\
&= F\circ G\circ id_{\cat{C}} \\
&= F\circ G \\
&= F\circ id_{\cat{D}} \circ G.
\end{align*}

We also have for each $C\in\ob{\cat{C}}$,

\begin{align*}
\varepsilon_{id_{C}(C)} &= \varepsilon_{C} \\
&= id_{\cat{C}}(\varepsilon_C)
\end{align*}

and each $D\in\ob{\cat{D}}$,

\begin{align*}
id_{\cat{D}}(\eta_{D}) &= \eta_{D} \\
&= \eta_{id_{\cat{C}}(D)}.
\end{align*}

$(id_{\cat{C}},id_{\cat{D}})$ clearly acts as an identity since for any morphism $(L,K)$ from any adjoint situation to $(F,G,\eta,\varepsilon)$ and $(L^\prime,K^\prime)$ from $(F,G,\eta,\varepsilon)$ to any adjoint situation,

\begin{align*}
(L,K)\circ(id_{\cat{C}},id_{\cat{D}}) &= (L\circ id_{\cat{C}},K\circ id_{\cat{D}})\\
&= (L,K)
\end{align*}

and,

\begin{align*}
(id_{\cat{C}},id_{\cat{D}})\circ(K^\prime,L^\prime) &= (id_{\cat{C}}\circ K^\prime,id_{\cat{D}}\circ L^\prime)\\
&= (L^\prime,K^\prime).
\end{align*}

\end{proof}


\subsection{Composition of adjoint functors}



The next Definition \ref{def:FadjointtoG} is adapted from \cite{ACC} (Page 309, Definition 19.10).


<span style="display:block" class="definition">

Let $\func{G}{\cat{C}}{\cat{D}}$ and $\func{F}{\cat{D}}{\cat{C}}$ be functors. $F$ is *left adjoint to* $G$ and $G$ is *right adjoint to* $F$, written $F\dashv G$ if there exists an adjoint situation $(F,G,\eta,\varepsilon)$.
</span>

The following Lemma \ref{lem:comadjoint} is adapted from Leinster \cite{Leinster} (Page 49, Remark 2.1.11) here we add a proof. 

<span style="display:block" class="lemma">

Let $\cat{C}$, $\cat{D}$ and $\cat{E}$ be categories, $\func{G}{\cat{C}}{\cat{D}}$ be right adjoint to $\func{F}{\cat{D}}{\cat{C}}$ and $\func{G^\prime}{\cat{D}}{\cat{E}}$ be right adjoint to $\func{F^\prime}{\cat{E}}{\cat{D}}$. Then $\func{G^\prime \circ G}{\cat{C}}{\cat{E}}$ is right adjoint to $\func{F \circ F^\prime}{\cat{E}}{\cat{D}}$ and given $C\in\ob{\cat{C}}$ and $E\in\ob{\cat{E}}$ we have,

$$\ho[\cat{C}]{F(F^\prime(E))}{C}\cong \ho[\cat{D}]{F^\prime(E)}{G(C)}\cong\ho[\cat{E}]{E}{G^{\prime}(G(C))}.$$

</span>
\begin{proof}
We have for any $E\in\ob{\cat{E}}$, $F^\prime(E) \in \ob{\cat{D}}$ hence since there is an adjoint situation $F$,$G$ 
$$\ho[\cat{C}]{F(F^\prime(E))}{C}\cong \ho[\cat{D}]{F^\prime(E)}{G(C)}.$$
 Similarly, for any $C\in\ob{\cat{C}}$, $G(C)\in\ob{\cat{D}}$ hence since there is an adjoint situation $G^\prime$, $F^\prime$ we have,

$$\ho[\cat{D}]{F^\prime(E)}{G(C)}\cong\ho[\cat{E}]{E}{G^{\prime}(G(C))}.$$

\end{proof}

<span style="display:block" class="remark">
Lemma \ref{lem:comadjoint} shows that if we compose two adjoint functors then we get an adjoint functor. 
</span>




\subsection{Examples}




The following Example \ref{exe:yonedaadj} came from a discussion with the supervisor and can be found in Leinster \cite{Leinster} (Page 47, Example 2.16). Example \ref{exe:yonedaadj} can also be found in Adámek - Herrlick - Strecker \cite{ACC} (Page 307, Example 19.4 (3)).

<span style="display:block" class="example">

Let $M\in\ob{\mathbf{Set}}$ be a set then we have a functor

$$(-)\times M \colon \mathbf{Set} \to\mathbf{Set} $$

defined for each object $X\in\ob{\mathbf{Set}}$ as,

$$X\mapsto X\times M,$$

the usual direct product of sets,
and for each $f\in\ho[\mathbf{Set}]{X}{Y}$,

$$f\mapsto f\times M$$

where,

\begin{align*}
f\times M \colon X\times M &\to Y\times M,\\
(x,m)&\mapsto (f(x),m).
\end{align*}

Recall we also have the functor $h_{M}$ defined in Lemma \ref{lem:homsetfunctor}.

We can define the natural transformation $\nattran{\eta}{id_{\mathbf{Set}}}{{h_{M}((-)\times M)}}$ where for each $X\in\ob{\mathbf{Set}}$,

\begin{align*}
\eta_{X}\colon X &\to h_{M}(X\times M),\\
x&\mapsto \eta_{X}^{(x)}
\end{align*}

where,

\begin{align*}
\eta_{X}^{(x)}\colon M&\to X\times M,\\
m&\mapsto (x,m).
\end{align*}

Then we have a unique function defined

\begin{align*}
\hat{f}\colon X\times M&\to Z,\\
(x,m)&\mapsto f_{x}(m)
\end{align*}

where,

\begin{align*}
f_{x}\colon M&\to Z,\\
m &\mapsto (f(x))(m)
\end{align*}

for which the diagram on the left,

<img src="../../../png/Python/chapter_1/tikz_code_5_7.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
commutes.

The co-unit $\nattran{\varepsilon}{(h_{M}(-))\times M}{id_{\mathbf{Set}}}$ is defined for each $S\in\ob{\mathbf{Set}}$ as the unique morphism which,
\begin{equation*}

<img src="../../../png/Python/chapter_1/tikz_code_5_19.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>

\end{equation*}
commutes.
Therefore define,

\begin{align*}
\varepsilon_{S}\colon (h_{M}(S))\times M &\to S,\\
(g_{t},m)&\mapsto g_{t}(m)
\end{align*}

then for each $g\in\ho[\mathbf{Set}]{S}{T\times M}$ there is a unique function given,

\begin{align*}
\hat{g}\colon T &\to h_{M}(S)\\
t&\mapsto g_{t}
\end{align*}

where,

\begin{align*}
g_{t}\colon M&\to S,\\
g_{t}(m)&\mapsto g(t,m) 
\end{align*}

for which the diagram on the left,

<img src="../../../png/Python/chapter_1/tikz_code_5_8.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
commutes.

Now we can classify all other adjoint situations by looking at bijections;
Let $M^\prime$ be a set such that there exists a bijection $\tau\colon M\to M^\prime$. $\tau$ can be realised as a natural transformation 

$$\nattran{\tau}{(-)\times M}{(-)\times M^\prime}$$
 
where for each $X\in\ob{\mathbf{Set}}$ we have,

\begin{align*}
\tau_{X}\colon X\times M&\to X\times M^\prime,\\
(x,m)&\mapsto (x,\tau(m)).
\end{align*}

We show the naturality condition holds. Let $X,Y\in\ob{\mathbf{Set}}$ and $f\in\ho[\mathbf{Set}]{X}{Y}$ then for $(x,m)\in X\times M$,

\begin{align*}
(\tau_{Y}\circ f\times M )((x,m))&= (\tau_Y((f(x),m))) \\
&= (f(x),\tau(m))\\
&= f\times M((x,\tau(m))) \\
&= f\times M \circ \tau_{X}((x,m))
\end{align*}

Therefore the naturality condition holds.
$\tau$ has a natural inverse

$$\nattran{\tau^{-1}}{(-)\times M^{\prime}}{(-)\times M}$$

where for each $X\in\ob{\mathbf{Set}}$ we have,

\begin{align*}
\tau_{X}^{-1}\colon X\times M&\to X\times M^\prime,\\
(x,m^\prime)&\mapsto (x,\tau^{-1}(m^\prime)).
\end{align*}

since $\tau$ is a bijection. Hence $\tau$ is a natural isomorphism. 

So for the functor $h_{M}$ we have adjoint situations $(\tau((-)\times M),h_{M},h_{M}\tau \circ \eta,\varepsilon\circ\tau^{-1}h_{M})$.
</span>

\pagebreak


<script src="../../mathjax_helper.js"></script>