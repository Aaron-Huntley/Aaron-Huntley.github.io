<style>
.md-content {
    max-width: 80em;
}
</style>
#1.6. Initial and terminal objects
 

In this section we use notation and definitions from Leinster \cite{Leinster}.


<span style="display:block" class="definition">

Let $\cat{C}$ be a category. We call an $\objs{\cat{C}}$, $I\in\ob{\cat{C}}$ *initial* if for any object $C\in\ob{\cat{C}}$, there is exactly one morphism $f\in\ho[\cat{C}]{I}{C}$.  We call an $\objs{\cat{C}}$, $T\in\ob{\cat{C}}$ *terminal* if for any object $C\in\ob{\cat{C}}$, there is exactly one morphism $f\in\ho[\cat{C}]{C}{T}$.
</span>
The following Lemma \ref{lem:initialiso} and proof is adapted from Leinster \cite{Leinster} (page 49 Lemma 2.1.8)

<span style="display:block" class="lemma">

Let $\cat{C}$ be a category and $I,I^\prime\in\ob{\cat{C}}$ initial objects in $\cat{C}$. There exists a unique isomorphism $f\in\ho[\cat{C}]{I}{I^\prime}$. Let $T,T^\prime\in\ob{\cat{C}}$ be terminal objects in $\cat{C}$ then there exists a unique isomorphism $g\in\ho[\cat{C}]{T}{T^\prime}$.
</span>
\begin{proof}
Since $I$ is initial there exists a unique morphism $f\in\ho[\cat{C}]{I}{I^\prime}$. 

It remains to show $f$ is an isomorphism. Since $I^\prime$ is initial then there exists a unique morphism $f^\prime\in\ho[\cat{C}]{I^\prime}{I}$. Therefore $f^\prime\circ f\in\ho[\cat{C}]{I}{I}$ but since $I$ is initial $f^\prime\circ f$ is the unique morphism in $\ho[\cat{C}]{I}{I}$. Since $\cat{C}$ is a category we have $id_{I}\in\ho[\cat{C}]{I}{I}$, hence $id_{I}$ is the unique morphism in $\ho[\cat{C}]{I}{I}$ therefore,

$$f\circ f^\prime = id_{I}$$

similarly,

$$f^\prime\circ f = id_{I^\prime}$$

since $f\circ f^\prime\in\ho[\cat{C}]{I^\prime}{I^\prime}$ is unique. Therefore $f$ is an isomorphism.

Since $T$ is terminal there exists a unique morphism $g\in\ho[\cat{C}]{T^\prime}{T}$, also since $T^\prime$ is terminal there exists a unique morphism $g^\prime\ho[\cat{C}]{T}{T^\prime}$. Then we have,

$$g\circ g^\prime = id_{T^\prime}$$

since $g\circ g^\prime\in\ho[\cat{C}]{T^\prime}{T^\prime}$ is unique. Similarly, 
$$g^\prime\circ g = id_{T}$$
 since $g^\prime\circ g\ho[\cat{C}]{T}{T}$ is unique.
\end{proof}

<span style="display:block" class="remark">
Given a category there may or may not exist an initial or terminal objects but the above Lemma \ref{lem:initialiso} states that if there are initial objects they are all isomorphic and if there are terminal objects they are all isomorphic.
</span>


\subsection{Examples}



The following example can be found on nCatLab\cite{nLab}.

<span style="display:block" class="example">
Let $\mathbf{Set}$ be the category of sets. The empty set $\varnothing\in\ob{\mathbf{Set}}$ is initial. Any singleton set $\{x\}\in\ob{\mathbf{Set}}$ is terminal.
For any set $Y\in\ob{\mathbf{Set}}$ we have the unique map

\begin{align*}
f\colon Y &\to \{x\},\\
y &\mapsto x.
\end{align*}

hence $\{x\}$ is terminal.
There also exists a unique function $\emptyset\colon \varnothing\to Y$ which is the empty function, hence $\varnothing$ is initial.
</span>


<span style="display:block" class="example">
Let $\mathbf{Grp}$ be the category of groups. The trivial group $\{id\}$ is initial and terminal. Given any group $(G,\circ)$ There exists a group homomorphism,

\begin{align*}
f\colon \{id\}&\to (G,\circ),\\
id&\mapsto id_{G},
\end{align*}

and also a group homomorphism,

\begin{align*}
f\colon (G,\circ)&\to \{id\},\\
x&\mapsto id.
\end{align*}

Both of these functions are unique since group homomorphisms must preserve identities.
</span>


\subsection{Initial and terminal objects as adjoint functors}




<span style="display:block" class="definition">

We call the category $\mathbf{1}$ with one object $1\in\ob{\mathbf{1}}$ and one morphism $id_{1}\in\ho[\mathbf{1}]{1}{1}$ the *identity category*.
</span>

The following Lemma \ref{lem:initermadj} is adapted from Leinster \cite{Leinster} (Page 49 Example 2.1.9)


<span style="display:block" class="lemma">

Let $\cat{C}$ be a category. Given $C\in\ob{\cat{C}}$, there exists a functor $\func{I_{C}}{\cat{C}}{\mathbf{1}}$ which maps 
$$1\mapsto C$$
 and, 
$$id_{1}\mapsto id_{C}.$$
 Further, there exists a functor $\func{T}{\mathbf{1}}{\cat{C}}$ where for $C\in\ob{\cat{C}}$, 
$$C\mapsto 1$$
 and for $f\in\ho[\cat{C}]{A}{B}$, 
$$f\mapsto id_{1}.$$

</span>
\begin{proof}
$I_{C}$ is a functor since,

\begin{align*}
I_{C}(id_{1}) &= id_{C} \\
&= id_{I_{C}(1)}
\end{align*}
 and,

\begin{align*}
I_{C}(id_{1}\circ id_{1}) &= I_{C}(id_{1}) \\ 
&= id_{C} \\
&= id_{C}\circ id_{C} \\
&= I_{C}(id_{1})\circ I_{C}(id_{1}).
\end{align*}


$T$ is a functor since for all $C\in\ob{\cat{C}}$, 
$$T(id_{C})=id_{1} = id_{T(1)}$$
 and for any $f\in\ho[\cat{C}]{A}{B}$ and $g\in\ho[\cat{C}]{B}{C}$,

\begin{align*}
T(g\circ f) &= id_{1} \\
&= id_{1}\circ id_{1} \\
&= T(g)\circ T(f).
\end{align*}

\end{proof}


<span style="display:block" class="lemma">

Given a category $\cat{C}$ let $I$ be the set of all functors of the form $I_{C}$ as in Lemma \ref{lem:funcadj}, there exists a bijection

\begin{align*}
\psi\colon\ob{\cat{C}}&\to I,\\
C&\mapsto I_{C}.
\end{align*}

</span>
\begin{proof}
Given $I_{C}\in I$ there exists $C\in\ob{\cat{C}}$ such that $C\mapsto I_{C}$ by Lemma \ref{lem:funcadj}, hence $\psi$ is surjective.

Given $I_{C}=I_{C^\prime}$ then $C=C^\prime$ by Lemma \ref{lem:funcadj} hence $\psi$ is injective. 

Therefore $\psi$ is a bijection.
\end{proof}


<span style="display:block" class="lemma">

Let $\cat{C}$ be a category and $C\in\cat{C}$ then: \begin{enumerate}
\item $\func{I_{C}}{\mathbf{1}}{\cat{C}}$ is left adjoint if and only if $C$ is an initial object of $\cat{C}$;
\item $\func{I_{C}}{\mathbf{1}}{\cat{C}}$ is right adjoint if and only if $C$ is a terminal object of $\cat{C}$.
\end{enumerate}
</span>
\begin{proof}
(1):
Let $I_{C}$ be a left adjoint. Then there exists an adjoint situation defined in Theorem \ref{thm:adjsituation}. Hence there is a unique functor $\func{T^*}{\cat{C}}{\mathbf{1}}$ but since the only functor from $\cat{C}$ to $\mathbf{1}$ is the one defined in Lemma \ref{lem:funcadj} we have $T^* = T$. Therefore, for each $C^\prime\in\ob{\cat{C}}$, 

\begin{align*}
\ho[\cat{C}]{I_{C}(1)}{C^\prime}&\cong \ho[\mathbf{1}]{1}{T(C^\prime)}\\
\implies \ho[\cat{C}]{C}{C^\prime}&\cong \ho[\mathbf{1}]{1}{1}\\
\implies \ho[\cat{C}]{C}{C^\prime}&\cong \{id_{1}\}.
\end{align*}

Therefore $C$ is an initial object.

Let $C\in\ob{\cat{C}}$ be an initial object, therefore we have for any $C^\prime \in\ob{\cat{C}}$
$$\ho[\cat{C}]{C}{C^\prime}.$$
 has one element. Then we have,

\begin{align*}
&\ho{C}{C^\prime}\cong \{id_{1}\}\\
\implies& \ho{C}{C^\prime}\cong \ho[\mathbf{1}]{1}{1}\\
\implies &\ho[\cat{C}]{I_{C}(1)}{C^\prime}\cong \ho[\mathbf{1}]{1}{T(C^\prime)}.
\end{align*}

Therefore by \ref{thm:adjsituation} $I_{C}$ is a left adjoint.

(2):
Let $I_{C}$ be a right adjoint. Then there exists an adjoint situation defined in Theorem \ref{thm:adjsituation}. Hence there is a unique functor $\func{T^*}{\cat{C}}{\mathbf{1}}$ but since the only functor from $\cat{C}$ to $\mathbf{1}$ is the one defined in Lemma \ref{lem:funcadj} we have $T^* = T$. Therefore, for each $C^\prime\in\ob{\cat{C}}$, 

\begin{align*}
&\ho[\mathbf{1}]{T(C^\prime)}{1}\cong \ho[\cat{C}]{C^\prime}{I_{C}(1)},\\
\implies &\ho[\mathbf{1}]{1}{1}\cong \ho[\cat{C}]{C^\prime}{C},\\
\implies & \{id_{1}\} \cong \ho[\cat{C}]{C^\prime}{C}.
\end{align*}

Therefore $C$ is a terminal object.
Let $C\in\ob{\cat{C}}$ be a terminal object, therefore we have for any $C^\prime \in\ob{\cat{C}}$
$$\ho[\cat{C}]{C^\prime}{C}.$$
 has one element. Then we have,

\begin{align*}
&\{id_{1}\} \cong \ho[\cat{C}]{C^\prime}{C}\\
\implies& \ho[\mathbf{1}]{1}{1}\cong \ho[\cat{C}]{C^\prime}{C}\\
\implies& \ho[\mathbf{1}]{T(C^\prime)}{1}\cong \ho[\cat{C}]{C^\prime}{I_{C}(1)}.
\end{align*}

Therefore by \ref{thm:adjsituation} $I_{C}$ is a right adjoint.
\end{proof}

<span style="display:block" class="example">
Let $\mathbf{Set}$ be the category of sets. We have the functor,

\begin{align*}
\func{I_{\varnothing}}{\mathbf{1}&}{\mathbf{Set}}, \\
1&\mapsto \varnothing.
\end{align*}

Then for $X\in\ob{\mathbf{Set}}$, we have a universal morphism $(\eta_{X},C_{X})$, where $C_{X}=1$ and $\eta_{X}=\emptyset$, the empty function:

\begin{align*}
\eta_{X}\colon X \mapsto \varnothing
\end{align*}

\begin{equation*}

<img src="../../../png/Python/chapter_1/tikz_code_6_0.png" width="99%" style="display: block; margin-left: auto; margin-right: auto;"/>
.\\
\end{equation*}
Therefore, $I_{\varnothing}$ is right adjoint.
</span>



\pagebreak


<script src="../../mathjax_helper.js"></script>