<style>
.md-content {
    max-width: 80em;
}
</style>
#1.2. Categories
 

This section of notes adapted mainly from \cite{Leinster}.

<span style="display:block" class="definition">

A *category* is a quadruple 
$$\mathscr{C} = (\ob{\mathscr{C}}, \ho[\cat{C}]{-}{-}, \circ_{(-,-,-)}, id_{-})$$
 where:
\begin{enumerate}
\item $\ob{\mathscr{C}}$ is a *class*. We call the elements of $\ob{\mathscr{C}}$ *\objs{$\mathscr{C*$}};
\item $\ho[\cat{C}]{-}{-}$ is a *function*,

\begin{align*}
\ho[\cat{C}]{-}{-} \colon  \ob{\mathscr{C}}\times\ob{\mathscr{C}}&\rightarrow \mathbf{set},\\
(A,B) &\mapsto \ho[\cat{C}]{A}{B}
\end{align*}

where $\mathbf{set}$ is the class of all sets. The  elements of $\ho[\cat{C}]{A}{B}$ we call maps from $A$ to $B$;
\item Given $A,B,C \in\ob{\mathscr{C}}, \circ_{(A,B,C)}$ is a function,

\begin{align*}
\circ_{(A,B,C)}\colon\ho[\cat{C}]{B}{C}\times\ho[\cat{C}]{A}{B}&\rightarrow \ho[\cat{C}]{A}{C},\\
(g,f)&\mapsto g\circ_{(A,B,C)} f.
\end{align*}

We call each $\circ_{(A,B,C)}$ *composition*;
\item For each $A\in\ob{\mathscr{C}}$, $id_{A}$ is an element of $\ho[\cat{C}]{A}{A}$.
\end{enumerate}
The following axioms are satisfied:
\begin{enumerate}
\item $\circ$ satisfies *associativity*:
Given $A,B,C,D \in \ob{\mathscr{C}}$, for each $f\in\ho[\cat{C}]{A}{B}$, $g\in\ho[\cat{C}]{B}{C}$ and $h\in\ho[\cat{C}]{C}{D}$ we have, 
$$(h\circ_{(B,C,D)} g)\circ_{(A,B,D)} f = h\circ_{(A,C,D)} (g\circ_{(A,B,C)} f);$$

\item For each $A\in\ob{\mathscr{C}}$, the morphism $id_{A}$ acts as an identity with respect to $\circ$. That is, given any two \objs{$\mathscr{C}$}, $B,C\in\ob{\mathscr{C}}$ for all $f\in\ho[\cat{C}]{A}{B}$ and $g\in\ho[\cat{C}]{C}{A}$ we have: 
$$f\circ_{(A,B,B)} id_{A} = f$$
and, 
$$id_{A}\circ_{(B,A,A)} g = g.$$

\end{enumerate}
</span>

<span style="display:block" class="remark">

The elements of each set $\ho[\cat{C}]{A}{B}$ where $A,B\in\ob{\mathscr{C}}$  are also called functions, arrows or morphisms, from $A$ to $B$.

For simplicity we write $\circ$ for any $\circ_{(A,B,C)}$. We will also write $\hom$ if the category we are working with is clear.
</span>

<span style="display:block" class="remark">
In Definition \ref{def:category} we have that each $\ho[\cat{C}]{A}{B}$ is a set, this definition can be changed so that these are not sets but classes, however in this report we will only use sets. In the literature categories defined as in Definition \ref{def:category} may be refered to as *locally small categories*, see nCatLab \cite{nLab} for more details.
</span>

\subsection{Examples}


We can now see how some of the structures we already know fit into the framework of a category.

<span style="display:block" class="example">

Let $\mathbf{Set} = (\ob{\mathbf{Set}}, \hom, \circ, id)$, where:
\begin{enumerate}
\item $\ob{\mathbf{Set}}$ is the class of all sets;
\item Given any two \objs{$\mathbf{Set}$}, $(X,Y)$, $\ho{X}{Y}$ is the set of all functions between $X$ and $Y$;
\item Given three sets $X,Y,Z$,

\begin{align*}
\circ\colon\ho{Y}{Z}\times\ho{X}{Y}&\rightarrow\ho{X}{Z},\\
(f,g)&\mapsto g\centerdot f
\end{align*}

where $\centerdot$ is regular function composition;
\item For each $X\in\ob{\mathbf{Set}}$,

\begin{align*}
id_{X}\colon X&\rightarrow X,\\
x&\mapsto x.
\end{align*}

\end{enumerate}
Then $\circ$ is associative since function composition is associative and given any $X,Y\in\ob{\mathbf{Set}}$ then for all $f\in\ho{X,Y}$ and $h\in\ho{Y}{X}$: 
$$f\circ id_{X} = f$$
 and, 
$$id_{X}\circ h = h.$$

Therefore $\mathbf{Set}$ is a category.
</span>

<span style="display:block" class="example">

Let $\mathbf{Grp}$ be defined:
\begin{enumerate}
\item $\ob{\mathbf{Grp}}$ is the class of all groups;
\item Given any two $(G,\bullet),(H,*)\in\ob{\mathbf{Grp}}$, $\ho{(G,\bullet)}{(H,*)}$ is the set of all group homomorphisms between $(G,\bullet)$ and $(H,*)$;
\item Given three groups $(G,\bullet),(H,*),(N,\square)$,

\begin{align*}
\circ\colon\ho{(G,\bullet)}{(H,*)}\times\ho{(H,*)}{(N,\square)}&\rightarrow\ho{(G,\bullet)}{(N,\square)},\\
(f,g)&\mapsto g\centerdot f
\end{align*}

where $\centerdot$ is regular function composition. 
This is well defined meaning $g\centerdot f$ is a group homomorphism;
\item For each $(G,\bullet)\in\ob{\mathbf{Grp}}$, $id_{(G,\bullet)}$ is the group homomorphism

\begin{align*}
id_{(G,\bullet)}\colon G &\rightarrow G,\\
g &\mapsto g.
\end{align*}

\end{enumerate}
Then $\circ$ is associative since function composition is associative and given any \objs{$\mathbf{Grp}$} $(G,\bullet),(H,*)\in\ob{\mathbf{Grp}}$ then for all $f\in\ho{(G,\bullet)}{(H,*)}$ and $h\in\ho{(H,*)}{(G,\bullet)}$; 
$$f\circ id_{(G,\bullet)} = f$$
 and, 
$$id_{(G,\bullet)}\circ h = h.$$

Therefore $\mathbf{Grp}$ is a category.
</span>

<span style="display:block" class="example">
Let $K$ be a field then define $\mathbf{Vect_{*K*}}$ as:
\begin{enumerate}
\item $\ob{\mathbf{Vect_{*K*}}}$ is the class of all *K*-vector spaces where *K* is a field;
\item For any two vector spaces $V$ and $W$, $\ho{V}{W}$ is the set of all *K*-linear maps between $V$ and $W$;
\item $\circ$ is regular function composition;
\item For each $V\in\ob{\mathbf{Vect_{*K*}}}$, $id_{V}$ is the *K*-linear map:

\begin{align*}
id_{V}\colon V &\rightarrow V,\\
v &\mapsto v.
\end{align*}

\end{enumerate}
Then $\mathbf{Vect_{*K*}}$ is a category since $\circ$ is associative and for any $f\in\ho{V}{W}$ and $g\in\ho{W}{V}$ $f\circ id_{V} = f$ and $id_{V}\circ g= g$.
</span>
The following example came from a lecture given by Dr Daniel Graves at the University of Leeds.

<span style="display:block" class="example">

Let $\mathbf{Top}^{*} = (\ob{\mathbf{Top}^{*}},\hom,\circ,id)$ where:
\begin{enumerate}
\item $\ob{\mathbf{Top}^{*}}$ Is the class of all based topological spaces, $((X,\tau_X),x_{0})$;
\item Given two based topological spaces, $((X,\tau_X),x_{0})$ and $((Y,\tau_Y),y_{0})$, each 


$$\ho[\mathbf{Top}^*]{((X,\tau_X),x_{0})}{((Y,\tau_Y),y_{0})}$$

is the set of continuous maps which sends $x_0\mapsto y_{0}$ between these spaces;
\item $\circ$ is regular function composition. Given two base point preserving continuous maps, $f,g$, then $f\circ g$ is a base point preserving continuous map;
\item Given a based topological space $((X,\tau_X),x_{0})$, $id_{X}$ is the identity continuous map which sends each point $x\in X$ to itself.
\end{enumerate}
$\mathbf{Top}^*$ is a category since $\circ$ is associative and each $id_{X}$ acts as an identity.
</span>

\subsubsection{Example: Category of monoids}



<span style="display:block" class="definition">

A *monoid* is a triple $M=(M_{s},*,e_M)$ where:
\begin{enumerate}
\item $M_{s}$ is a set, we call the *underlying set of M*;
\item For any two elements $a,b\in M_{s}, *$ is a closed binary operation:

\begin{align*}
*\colon M_{s}\times M_{s} &\rightarrow M_{s},\\
(a,b) &\mapsto a*b;
\end{align*}

\item $e_{M}$ is an element in $M_{s}$ such that for all $a\in M_{s},$,

\begin{align*}
e_{M}*a = a*e_{M} = a;
\end{align*}

\item $*$ is associative; Given any two $a,b,c\in M_{s}$ 

$$(a*b)*c = a*(b*c).$$

\end{enumerate}
</span>

<span style="display:block" class="remark">
We will write $a\in M$ to mean $a\in M_{s}$.
</span>

<span style="display:block" class="definition">

Let $M=(M_{s},*_{M},e_{M})$ and $N=(N_{s},*_{N},e_{N})$ be monoids. A *monoid homomorphism* between $M$ and $N$ is a function, $f: M \rightarrow N$,
which satisfies the following axioms:
\begin{enumerate}
\item For any $m_{1},m_{2}\in M$, $f(m_{1}*_{N}m_{2}) = f(m_{1})*_{N}f(m_{2})$;
\item $f(e_{M})= e_{M}$.
\end{enumerate}
</span>
With monoids and their morphisms defined, we can define the category of monoids.

<span style="display:block" class="lemma">

Let $\mathbf{Mon}$ be defined:
\begin{enumerate}
\item $\ob{\mathbf{Mon}}$ is the class of all monoids as defined in Definition \ref{def:monoid1};
\item For each $M,N\in\ob{\mathbf{Mon}}$, $\ho{M}{N}$ is the set of all monoid homomorphisms between $M$ and $N$;
\item Given $M,N,H\in\ob{\mathbf{Mon}}$ $\circ$ is the function:

\begin{align*}
\circ\colon \ho{M}{N}\times\ho{N}{H}&\rightarrow\ho{M}{H},\\
(f,g)&\mapsto g \centerdot f,
\end{align*}

where $\centerdot$ is regular function composition. 

This is well defined since given any two monoid homomorphisms $f\in\ho{M}{N}$ and $g\in\ho{M}{H}$ and for each $x,y\in M$ we have,

\begin{align*}
g\centerdot f(x*_{M}y) &= g(f(x*^{M}y))\\
&= g(f(x)*^{N}f(y))\\
&= g(f(x))*^{H}g(f(y))\\
&= g\centerdot f(x) *^{H} g\centerdot f(y)
\end{align*}

and,

\begin{align*}
g\centerdot f(e_{M}) &= g(f(e_{M}))\\
&= g(e_{N})\\
&= e_{H}.
\end{align*}

Since $f$ and $g$ are monoid homomorphisms. Hence $g\centerdot h$ is a monoid homomorphism;
\item For each $M\in\ob{\mathbf{Mon}}$;

\begin{align*}
id_{M}\colon M_{s} &\rightarrow M_{s},\\
m&\mapsto m.
\end{align*}

\end{enumerate}
Then $\mathbf{Mon}$ is a category.
</span>
\begin{proof}
Firstly $\circ$ is associative since it defined as function composition. 

To show the condition on identities,given any $f\in\ho{M}{N}$ and $g\in\ho{N}{M}$ we have for each $m\in M$ and $n\in N$;

\begin{align*}
f\circ id_{M}(m) &= f(id_{M}(m))\\
&=f(m)\\
\end{align*}

and,

\begin{align*}
id_{M} \circ g(n) &= id_{M}(g(n))\\
&= g(n).
\end{align*}

Hence $id_{M}$ acts as an identity with respect to function composition and $\mathbf{Mon}$ is a category.
\end{proof}
The following Example \ref{exe:prodcat} is adapted from \cite{wiki:prodcat}.

<span style="display:block" class="example">[Product Category]

Let $\cat{C}$ and $\cat{D}$ be categories. 

We can define the *Product category* $\cat{C}\times\cat{D}$ as follows:
\begin{enumerate}
\item The $\objs{\cat{C}\times\cat{D}}$ are pairs $(C,D)$ where $C\in\ob{\cat{C}}$ and $D\in\ob{\cat{C}}$;
\item For each $(C_{1},D_{1}),(C_{2},D_{2})\in\ob{\cat{C}\times\cat{D}}$ the elements of $\ho[\cat{C}\times\cat{D}]{(C_{1},D_{1})}{(C_{2},D_{2})}$ are the pairs $(f,g)$ where $f\in\ho[\cat{C}]{C_{1}}{C_{2}}$ and $g\in\ho[\cat{D}]{D_{1}}{D_{2}}$;
\item Composition is defined,

\begin{align*}
\circ_{\cat{C}\times\cat{D}}\colon\ho[\cat{C}\times\cat{D}]{(C_{2},D_{2})}{(C_{3},D_{3})}&\to\ho[\cat{C}\times\cat{D}]{(C_{1},D_{1})}{(C_{2},D_{2})},\\
((f_{2},g_{2}),(f_{1},g_{1}))&\mapsto (f_{2}\circ_{\cat{C}} f_{1},g_{2}\circ_{\cat{D}}g_{1});
\end{align*}

\item Identities are defined for each $(C,D)\in\ob{\cat{C}\times\cat{D}}$: 
$$id_{(C,D)} = (id_{C},id_{D}).$$

\end{enumerate}
First we show composition is associative:
Given $(f_{1},g_{1})\in\ho[\cat{C}\times\cat{D}]{(C_{1},D_{1})}{(C_{2},D_{2})}$, $(f_{2},g_{2})\in\ho[\cat{C}\times\cat{D}]{(C_{2},D_{2})}{(C_{3},D_{3})}$ and $(f_{3},g_{3})\in\ho[\cat{C}\times\cat{D}]{(C_{3},D_{3})}{(C_{4},D_{4})}$ we have,

\begin{align*}
((f_{3},g_{3})\circ_{\cat{C}\times\cat{D}}\cat{C}\times\cat{D}(f_{2},g_{2}))\circ_{\cat{C}\times\cat{D}}(f_{1},g_{1})&= (f_{3}\circ_{\cat{C}} f_{2},g_{3}\circ_{\cat{D}} g_{2})\circ_{\cat{C}\times\cat{D}}(f_{1},g_{1}),\\
&= (f_{3}\circ_{\cat{C}}f_{2}\circ_{\cat{C}}f_{1},g_{3}\circ_{\cat{D}}g_{2}\circ_{\cat{D}}g_{1}),\\
&= (f_{3},g_{3})\circ_{\cat{C}\times\cat{D}}(f_{2}\circ_{\cat{C}}f_{1},g_{2}\circ_{\cat{D}}g_{1}),\\
&= (f_{3},g_{3})\circ_{\cat{\cat{C}\times\cat{D}}}((f_{2},g_{2})\circ_{\cat{C}\times\cat{D}}(f_{1},g_{1})).
\end{align*}

Hence $\circ_{\cat{C}\times\cat{D}}$ is associative. 

We now show the identities indeed act as identities:
Given $(C,D)\in\ob{\cat{C}\times\cat{D}}$, and $(f_{1},g_{1})\in\ho[\cat{C}\times\cat{D}]{(C_{1},D_{1})}{(C,D)}$, and $(f_{2},g_{2})\in\ho[\cat{C}\times\cat{D}]{(C,D)}{C_{2},D_{2}}$ we have;

\begin{align*}
id_{(C,D)}\circ_{\cat{C}\times\cat{D}}(f_{1},g_{1})&= (id_{C},id_{D})\circ_{\cat{C}\times\cat{D}}(f_{1},g_{1})\\
&= (id_{C}\circ_{\cat{C}}f_{1},id_{D}\circ_{\cat{D}}g_{1})\\
&= (f_{1},g_{1})
\end{align*}

and,

\begin{align*}
(f_{2},g_{2})\circ_{\cat{C}\times\cat{D}}id_{(C,D)}&= (f_{2},g_{2})\circ_{\cat{C}\times\cat{D}}(id_{C},id_{D})\\
&= (f_{2}\circ_{\cat{C}}id_{C},g_{2}\circ_{\cat{D}}id_{D})\\
&= (f_{2},g_{2}).
\end{align*}

Therefore $id_{(C,D)}$ acts as an identity with respect to composition. Hence $\cat{C}\times\cat{D}$ is a category.
</span>
The following Definition \ref{def:dualcategory} and Lemma \ref{lem:dualcatiscat} are adapted from Bartosz Milewsik video lectures \cite{Bartosz} and the book by Adámek - Herrlick - Strecker \cite{ACC} page 22 onward.

<span style="display:block" class="definition">

Given a category $\cat{C}$ we define $\cat{C}^{op} = (\ob{\cat{C}},\hom_{op}, \circ^{op},id)$: 
\begin{enumerate}
\item The objects of $\cat{C}^{op}$ are the objects of $\cat{C}$;
\item Given $A,B\in\ob{\cat{C}}$ for each $f\in\ho{A}{B}$ we have a $f^{op}\in\ho[\cat{C}^{op}]{B}{A}$;
\item Given $f^{op}\in\hom^{op}(A,B)$ and $g^{op}\in\hom^{op}(B,C)$,

$$g^{op}\circ^{op}_{(A,B,C)}f^{op} = (f\circ_{(C,B,A)} g)^{op}.$$

\end{enumerate}
</span>

<span style="display:block" class="lemma">

$\cat{C}^{op}$ defined in Definition \ref{def:dualcategory} is a category.
</span>
\begin{proof}
We first prove associativity of the composition for $\cat{C}^{op}$; given morphisms $f^{op}\in\hom^{op}(A,B)$, $g^{op}\in\hom^{op}(B,C)$ and $h^{op}\in\hom^{op}(C,D)$ we have,

\begin{align*}
h^{op} \circ^{op} (g^{op}\circ^{op} f^{op}) &= h^{op} \circ^{op} (f\circ g)^{op}\\
&= f\circ g \circ h\\
&= f\circ (g\circ h)\\
&= (g\circ h)^{op} \circ^{op} f^{op}\\
&= (h^{op}\circ^{op} g^{op})\circ^{op} f^{op}.
\end{align*}
 
Hence $\circ^{op}$ is associative.

Now we show the identities hold;
given morphisms  $f^{op}\in\hom^{op}(A,B)$ and $g^{op}\in\hom^{op}(B,C)$ we have,

$$f^{op} \circ^{op} id_{A} = (id_{A} \circ f)^{op} = f^{op}$$

and,

$$id_{C}\circ^{op}g^{op} = (g\circ id_{C})^{op} = g^{op}.$$

Hence each $id_{C}$ acts as an identity. Therefore, $\cat{C}^{op}$ is a category.
\end{proof}

<span style="display:block" class="remark">
Since we can construct a dual category for any category, $\cat{C}$ every result we prove about a general category gives us a dual result by looking from the perspective of the dual category.
</span>

\subsubsection{Example: Monoid as a category}


This section follows ideas from the video lectures of Bartosz Milewski \cite{Bartosz}.
We can define a monoid in terms of the category structure as follows.

<span style="display:block" class="definition">[Monoid as a category]

A *cat monoid* is a category $\cat{M}$ with one object, $m\in\ob{\cat{M}}$.
</span>
We will show that each cat monoid is a monoid and each monoid is a cat monoid and so the definitions are equivalent.

<span style="display:block" class="lemma">

Let $\cat{M}$ be a cat monoid with object $m\in\ob{\cat{M}}$. Then $(\ho{m}{m},\circ,id_{m})$ is a monoid.
</span>
\begin{proof}
$\ho{m}{m}$ is a set by Definition \ref{def:category}. 

For any $g,f\in\ho{m}{m}$ we have $g\circ f\in\ho{m}{m}$ and so $\circ$ is a closed binary operation. 

For each $g\in\ho{m}{m}$ we have, 
$$id_{m}\circ g = g$$
 and, 
$$g\circ id_{m} = g.$$
 $\circ$ is associative since $\cat{M}$ is a category. 

Hence, $(\ho{m}{m},\circ,id_{m})$ is a monoid.
\end{proof}

<span style="display:block" class="definition">

Let $M = (M_{s},*,e_{M})$ be a monoid. We define the category $\cat{M}$ as:
\begin{enumerate}
\item $\ob{\cat{M}}$ has one object $m$;
\item $M_{s}=\ho[\cat{M}]{m}{m}$;
\item $\circ_{m,m,m} = *$;
\item $id_{m} = e_{M}$.
\end{enumerate}
</span>

<span style="display:block" class="lemma">

$\cat{M}$ as defined above in Definition \ref{def:monascatmon} is a cat monoid.
</span>
\begin{proof}
Firstly, $\circ$ is associative since $*$ is associative as $M$ is a monoid. 

We also have for each $f,g\in\ho{m}{m}$, 
$$f\circ id_{m} = f*e_{M} = f$$
 and 
$$id_{m}\circ g = e_{M}*g = g.$$
 

Therefore $\cat{M}$ is a one object category, hence a cat monoid.
\end{proof}

<span style="display:block" class="remark">
Any group can also be seen as a one object category since a group is a special case of  a monoid as follows:

Suppose $\cat{G}$ is a group as a one object category then we have for each $f\in\ho[\cat{G}]{g}{g}$ a morphism $g\in\ho[\cat{G}]{g}{g}$ such that,

$$f\circ g = id_{g}$$

and,

$$g\circ f = id_{g}.$$

</span>

\subsubsection{Example: Category of rings}


Here we define what a ring is and how it fits into the framework of a category.

<span style="display:block" class="definition">

A *ring with 1* is a triple $R=(R_{s},+,\times)$ where $R_{s}$ is a set called the *underlying set of R*, and $+,\times$ are closed binary operations on $R_{s}$ called *addition* and *multiplication* respectively. 

We also have that the following conditions are satisfied:
\begin{enumerate}
\item $(R,+)$ forms an abelian group with identity denoted $0_{R}$;
\item $(R,\times,1_{R})$ forms a monoid with identity $1_{R}\neq0_{R}$;
\item Multiplication is distributive across addition. Given $,y,z\in R_{s}$,

$$x\times(y+z)=x\times y +x\times z$$

and,

$$(y+z)\times x=y\times x +z\times x.$$

\end{enumerate}
</span>

<span style="display:block" class="definition">
An *abelian group* $(G,+)$ is a group with the *commutativity property* that is: 

Given $x,y\in G$,
$$x+y=y+x.$$

</span>

<span style="display:block" class="definition">

A *commutative ring with 1* is a ring with 1 $R=(R_{s},+,\times)$ where multiplication is commutative, that is:

Given $x,y\in R_{s}$,

$$x\times y = y\times x.$$

</span>

<span style="display:block" class="definition">

Given two rings with 1, $R=(R_{s},+_{R},\times_{R})$ and $S=(S_{S},+_{S},\times_{S})$ a function $f\colon R_{S}\rightarrow S_{S}$ is called a *ring homomorphism* if given $x,y\in R_{s}$ the following axioms hold:
\begin{enumerate}
\item $f(x+_{R}y)=f(x)+_{S}f(y)$;
\item $f(x\times_{R}y)=f(x)\times_{S}f(y)$;
\item $f(1_{R})=1_{S}$.
\end{enumerate}
</span>
\begin{cor}

Let $R$ and $S$ be a rings with 1 and $f\colon R_{S}\to S_{S}$ be a ring homomorphism then:

$$f(0_{R})=0_{S}.$$

\end{cor}
\begin{proof}

\begin{align*}
f(1_{R}) &= f(1_{R}+_{R}0_{R}) \\
&= f(1_{R})+_{S}f(0_{R}) \\
&= 1_{S}+_{S}f(0_{R}) \\
&= 1_{S},
\end{align*}

hence, $f(0_{R})=0_{S}$.
\end{proof}

<span style="display:block" class="remark">
A commutative ring homomorphism is a ring homomorphism between commutative rings with 1. 
</span>

<span style="display:block" class="definition">

Define the quadruple $\mathbf{Rng}=(\ob{\mathbf{Rng}},\hom_{\mathbf{Rng}},\circ,id)$ where:
\begin{enumerate}
\item $\ob{\mathbf{Rng}}$ is the class of all rings with 1;
\item Given $R,S\in \ob{\mathbf{Rng}}$, $\ho[\mathbf{Rng}]{R}{S}$ is the set of all ring homomorphisms between $R$ and $S$;
\item $\circ$ is regular function composition;
\item Given $R\in \ob{\mathbf{Rng}}$, $id_{R}$ is the identity with respect to function composition. $id_{R}$ is a ring homomorphism since for each $x,y\in R$,
$$id_{R}(x+_{R}y)=x+_{R}y=id_{R}(x)+_{R}id_{R}(y)$$
 and, 
$$id_{R}(x\times_{R}y)=x\times_{R}y=id_{R}(x)\times_{R}id_{R}(y)$$
 and,

$$id_{R}(1_{R})=1_{R}.$$

\end{enumerate}
</span>

<span style="display:block" class="definition">

Define the quadruple $\mathbf{CRng}=(\ob{\mathbf{Rng}},\hom_{\mathbf{CRng}},\circ,id)$ where:
\begin{enumerate}
\item $\ob{\mathbf{CRng}}$ is the class of all rings with 1;
\item Given $R,S\in \ob{\mathbf{CRng}}$, $\ho[\mathbf{CRng}]{R}{S}$ is the set of all ring homomorphisms between $R$ and $S$;
\item $\circ$ is regular function composition;
\item Given $R\in \ob{\mathbf{CRng}}$, $id_{R}$ is the identity with respect to function composition. 

$id_{R}$ is a commutative ring homomorphism since for each $x,y\in R$,
$$id_{R}(x+_{R}y)=x+_{R}y=id_{R}(x)+_{R}id_{R}(y)$$
 and, 
$$id_{R}(x\times_{R}y)=x\times_{R}y=id_{R}(x)\times_{R}id_{R}(y)$$
 and,

$$id_{R}(1_{R})=1_{R}.$$

\end{enumerate}
</span>

<span style="display:block" class="lemma">
Both $\mathbf{Rng}$ and $\mathbf{Crng}$ as defined in Definition \ref{def:catofrings} and Definition \ref{def:catofcrings} are categories.
</span>
\begin{proof}
We prove the category $\mathbf{Rng}$, the proof for $\mathbf{Crng}$ follows trivially.

Firstly, $\circ$ is associative since regular function composition is associative. 

Given each $R\in\ob{\mathbf{Rng}}$, $id_{R}$ acts as an identity;
Given $f\in\ho[\mathbf{Rng}]{R}{S}$ and $g\in\ho[\mathbf{CRng}]{S}{R}$

$$f\circ id_{R} = f$$

and,

$$id_{S}\circ g = g.$$

\end{proof}

Some other well know categories can be found in Adámek - Herrlick - Strecker \cite{ACC} and include: $\mathbf{Top}_{C}$; objects are topological spaces and morphisms are continuous maps or $\mathbf{Top}_{H}$; objects are topological spaces and morphisms are homeomorphisms of topological spaces and $\mathbf{Met}$; objects are  metric spaces with morphisms continuous maps between metric spaces.

We can now translate some familiar concepts from the theories we are used to and translate them to the language of category theory. First we look at an isomorphism. 

<span style="display:block" class="definition">

For a category $\mathscr{C}$ a morphism $f\in\ho{A}{B}$ is called an isomorphism if there exists a $g\in\ho{B}{A}$ such that $f\circ g = id_{B}$ and $g\circ f = id_{A}.$
</span>

<span style="display:block" class="theorem">
Let $X,Y\in\ob{\mathbf{Set}}$ and $f\in\ho{X}{Y}$ then $f$ is an isomorphism if and only if $f$ is a bijection.
</span>
\begin{proof}
For any two objects $X,Y\in\ob{\mathbf{Set}}$ suppose a map $f\in\ho{X}{Y}$ is a bijection therefore $f$ has an inverse $f^{-1}\in\ho{X}{Y}$ where, $f\circ f^{-1} = id_{X}$ and $f^{-1}\circ f = id_{Y}$. Hence, every bijection is a category isomorphism. 

Suppose $f\in\ho{G}{H}$ is a isomorphism then there exists a $g\in\ho{H}{G}$ such that $f\circ g = id_{H}$ then $f$ is a bijection with inverse $f^{-1} = g$. Therefore the set of category isomorphisms is exactly the set of group isomorphisms in $\mathbf{Set}$.
\end{proof}


<span style="display:block" class="theorem">
Let $G,H\in\ob{\mathbf{Grp}}$ and $f\in\ho{G}{H}$ then $f$ is an isomorphism if and only if $f$ is a group isomorphism.
</span>
\begin{proof}
For any two objects $G,H\in\ob{\mathbf{Grp}}$ suppose a morphism $f\in\ho{G}{H}$ is a group isomorphism then $f$ is a bijection so has an inverse $f^{-1}\in\ho{H}{G}$ where, $f\circ f^{-1} = id_{H}$ and $f^{-1}\circ f = id_{G}$. Hence, every group isomorphism is a category isomorphism. Suppose $f\in\ho{G}{H}$ is a category isomorphism then there exists a $g\in\ho{H}{G}$ such that $f\circ g = id_{H}$ then $f$ is a bijection with inverse $f^{-1} = g$ hence a group isomorphism. Therefore the set of category isomorphisms is exactly the set of group isomorphisms in $\mathbf{Grp}$.
\end{proof}


\subsection{Subcategories}




The following definitions come from nCatLab \cite{nLab}.

<span style="display:block" class="definition">

Let $\cat{C}$ be a category. Then a *subcategory*, $\cat{D}= (\ob{\cat{D}},\hom,\circ,id)$ is defined:
\begin{enumerate}
\item $\ob{\cat{D}}$ is a subclass of $\ob{\cat{C}}$;
\item For each $X,Y\in\ob{C}$, $\ho[\cat{D}]{X}{Y}$ is a subset of $\ho[\cat{C}]{X}{Y}$;
\item If $f\in\ho[\cat{D}]{X}{Y}$ then $X,Y\in\cat{D}$;
\item If $f\in\ho[\cat{D}]{X}{Y}$ and $g\in\ho[\cat{D}]{Y}{Z}$ then $g\circ f\in\ho[\cat{D}]{X}{Z}$;
\item For all $X\in\ob{\cat{D}}$, $id_{X}\in\ho[\cat{D}]{X}{X}$.
\end{enumerate}
</span>

<span style="display:block" class="remark">
Every subcategory $D$ of $C$ is a category since the composition is associative and we have identities.
</span>

<span style="display:block" class="definition">

Let $\cat{C}$ be a category and $\cat{D}$ be a sub category of $\cat{C}$.

We say $\cat{D}$ is:
\begin{enumerate}
\item A *full* subcategory if for all $X,Y\in\ob{\cat{D}}$, if $f\in\ho[\cat{C}]{X}{Y}$ then $f\in\ho[\cat{D}]{X}{Y}$;
\item A *wide* subcategory if for all $X\in\ob{\cat{C}}$, $X\in\ob{\cat{D}}$.
\end{enumerate}
</span>

The following example followed from a discussion with the supervisor.

<span style="display:block" class="example">
Let $\mathbf{Met_{C}}$ be the category whose objects are metric spaces and morphisms are continuous maps between spaces. Let $\mathbf{Met_{I}}$ be the category whose objects are metric spaces and morphism are isometries; given two metric spaces $X,Y\in\ob{\mathbf{Met_{I}}}$, $f\in\ho[\mathbf{Met_{I}}]{X}{Y}$ if for $x,y\in X$,

$$d_{X}(x,y)=d_{Y}(f(x),f(y)).$$

Then $\mathbf{Met_{I}}$ is a wide, not full, subcategory of $\mathbf{Met_{C}}$, since every isometry is a continuous map but not every continuous map is an isometry.
</span>


<span style="display:block" class="example">
Recall the categories $\mathbf{CRng}$ and $\mathbf{Rng}$ defined in Subsection \ref{sss:catofringsexam}. $\mathbf{CRng}$ is a full but not wide subcategory of $\mathbf{Rng}$, since every commutative ring is a ring but there exist rings that are not commutative but we have for two commutative rings $R,S\in\ob{\mathbf{CRng}}$ if $f\in\ho[\mathbf{CRng}]{R}{S}$ then $f\in\ho[\mathbf{Rng}]{R}{S}$.
</span>


\pagebreak


<script src="../../mathjax_helper.js"></script>