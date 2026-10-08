\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{ekblite}[2025/12/20 ekblite class]
\LoadClass[11pt]{amsart}
\RequirePackage{ifthen}
\RequirePackage{amssymb}
\RequirePackage{amsthm}
\RequirePackage{amsmath}
\RequirePackage[alphabetic]{amsrefs}
\RequirePackage{stmaryrd}
\RequirePackage{wasysym}
\RequirePackage{mathrsfs}
\RequirePackage[dvipsnames,svgnames,x11names]{xcolor}
\RequirePackage{hyperref}
\hypersetup{colorlinks=true,linkcolor=mblue,citecolor=mblue}
\RequirePackage[all]{xy}
\SelectTips{cm}{10}
\RequirePackage{float}
\RequirePackage{mdframed}
\RequirePackage{scalefnt}
\RequirePackage{setspace}
\RequirePackage{fancyhdr}
\pagestyle{headings}
%\RequirePackage[top = 1in, bottom = 1in, left = 1.2in, right=1.2in, marginparwidth=1.2in]{geometry}
\RequirePackage[utf8x]{inputenc}
\RequirePackage{tikz}
\usetikzlibrary{cd}
\usetikzlibrary{decorations.pathmorphing}
\usetikzlibrary{arrows, decorations.markings}
\pagenumbering{gobble}
\renewcommand{\datename}{\textit{Date}:}
\usepackage{marginnote}
\RequirePackage{mathtools}

\RequirePackage{enumitem}
\setlist[enumerate,1]{leftmargin=6ex,topsep=-5pt}
\setlist[enumerate]{itemsep=7pt}
\setlist[itemize,1]{leftmargin=4ex,topsep=0em}
\setlist[itemize]{itemsep=5pt}
\setlist[itemize,2]{label=$\circ$}
%\setlist[itemize,3]{label=$\rightarrowtriangle$}
\setlist[itemize,3]{label={\scalefont{0.6}\color{gray}$\blacktriangleright$}}
\setlist[itemize,4]{label=$\ast$}
\setlist{nolistsep}

\lhead{}\chead{}\rhead{}\lfoot{}\cfoot{\thepage}\rfoot{}

\parskip=0.2in \parindent=0in
\allowdisplaybreaks % Allow align environments to split over page breaks
\raggedbottom % Don't leave awkward spaces in the middle of pages

\renewcommand{\arraystretch}{1.5}

\renewcommand{\l}{\overset}
\newcommand{\lu}{\underset}
\newcommand{\too}[1]{\l{#1}\to}
\newcommand{\bto}{\leftarrow}
\newcommand{\btoo}[1]{\overset{#1}\bto}
\newcommand{\into}{\hookrightarrow}
\newcommand{\binto}{\hookleftarrow}
\newcommand{\onto}{\twoheadrightarrow}
\newcommand{\bimplies}{\impliedby}
\newcommand{\ints}{\cap}
\newcommand{\intss}{\bigcap}
\newcommand{\union}{\cup}
\newcommand{\unions}{\bigcup}
\newcommand{\djunion}{\sqcup}
\newcommand{\djunions}{\bigsqcup}
\newcommand{\propersubset}{\subsetneq}
\newcommand{\propersupset}{\supsetneq}
\newcommand{\contains}{\supset}
\newcommand{\isom}{\cong}
\newcommand{\dsum}{\oplus}
\newcommand{\dsums}{\bigoplus}
\newcommand{\tensor}{\otimes}
\newcommand{\tensors}{\bigotimes}
\renewcommand{\bar}[1]{{\overline{#1}}}
\renewcommand{\u}{\underbracket[1pt]}
\newcommand{\x}{\times}
\providecommand{\st}{\hspace{2pt} : \hspace{2pt}}
\renewcommand{\til}{\widetilde}
\renewcommand{\hat}{\widehat}
\newcommand{\sm}{\wedge}
\newcommand{\iy}{\infty}
\newcommand{\hteq}{\simeq}

%% Large parentheses, etc.
\newcommand{\pa}[1]{\left( {#1} \right)}
\newcommand{\br}[1]{\left[ {#1} \right]}
\newcommand{\cu}[1]{\left\{ {#1} \right\}}
\newcommand{\ab}[1]{\left| {#1} \right|}
\newcommand{\an}[1]{\left\langle {#1}\right\rangle}
\newcommand{\fl}[1]{\left\lfloor {#1}\right\rfloor}
\newcommand{\ceil}[1]{\left\lceil {#1}\right\rceil}
\newcommand{\tf}[1]{{\textstyle{#1}}}
\newcommand{\patf}[1]{\pa{\textstyle{#1}}}

\renewcommand{\dim}{\operatorname{dim}}
\newcommand{\coker}{\operatorname{coker}}
\newcommand{\im}{\operatorname{im}}
\newcommand{\ord}{\operatorname{ord}}
\newcommand{\codim}{\operatorname{codim}}
\newcommand{\cchar}{\operatorname{char}}
\newcommand{\rank}{\operatorname{rank}}
\newcommand{\Aut}{\operatorname{Aut}}
\newcommand{\Gal}{\operatorname{Gal}}
\newcommand{\Hom}{\operatorname{Hom}}
\newcommand{\Vect}{\operatorname{Vect}}
\newcommand{\Fun}{\operatorname{Fun}}
\newcommand{\Map}{\operatorname{Map}}
\newcommand{\Ho}{\operatorname{Ho}}
\newcommand{\Mod}{\operatorname{Mod}}
\newcommand{\Maps}{\operatorname{Maps}}
\renewcommand{\Re}{\operatorname{Re}} % don't like the curly default ones
\renewcommand{\Im}{\operatorname{Im}}
\newcommand{\gr}{\operatorname{gr}}
\newcommand{\tr}{\operatorname{tr}}
\newcommand{\colim}{\operatorname{colim}}
\newcommand{\End}{\operatorname{End}}
\newcommand{\Spec}{\operatorname{Spec}}
\newcommand{\Sp}{\operatorname{Sp}}
\newcommand{\Tot}{\operatorname{Tot}}
\newcommand{\Ext}{\operatorname{Ext}}
\newcommand{\Tor}{\operatorname{Tor}}
\newcommand{\Cotor}{\operatorname{Cotor}}

\newcommand{\A}{\mathbb{A}}
\newcommand{\C}{\mathbb{C}}
\newcommand{\CP}{\mathbb{C}P}
\renewcommand{\O}{\mathcal{O}}
\newcommand{\Q}{\mathbb{Q}}
\newcommand{\R}{\mathbb{R}}
\newcommand{\RP}{\mathbb{R}P}
\newcommand{\Z}{\mathbb{Z}}
\newcommand{\N}{\mathbb{N}}
\renewcommand{\k}{\Bbbk}
\newcommand{\m}{\mathfrak{m}}
\newcommand{\p}{\mathfrak{p}}

\definecolor{gray}{RGB}{100,100,100}
\definecolor{lgray}{RGB}{190,190,190}
\definecolor{llgray}{RGB}{230,230,230}
\definecolor{maroon}{RGB}{150,0,0}
\definecolor{mblue}{RGB}{65,105,225}
\newcommand{\edit}[1]{\itshape{\color{gray}#1}\upshape}
\newcommand{\fixme}[1]{{\color{maroon}\textit{#1}}}
\newcommand{\question}[1]{\itshape{\color{blue}#1}\upshape}
\newcommand{\citeme}[2][\!\!]{{\color{orange}#2~\textit{#1}}}

% adds barred right arrows for vertical arrows in double cats
% requires mathtools
\makeatletter
\def\slashedarrowfill@#1#2#3#4#5{%
  $\m@th\thickmuskip0mu\medmuskip\thickmuskip\thinmuskip\thickmuskip
   \relax#5#1\mkern-7mu%
   \cleaders\hbox{$#5\mkern-2mu#2\mkern-2mu$}\hfill
   \mathclap{#3}\mathclap{#2}%
   \cleaders\hbox{$#5\mkern-2mu#2\mkern-2mu$}\hfill
   \mkern-7mu#4$%
}
\def\rightslashedarrowfill@{%
  \slashedarrowfill@\relbar\relbar\mapstochar\rightarrow}
\newcommand\vrightarrow[2][]{%
  \ext@arrow 0055{\rightslashedarrowfill@}{#1}{#2}}
\makeatother

\newcommand{\itext}{\shortintertext} % requires mathtools
\makeatletter
\@ifundefined{resetu}{ % revert to \u as text accent by defining \resetu
	\renewcommand{\u}{\underbracket[0.7pt]} % requires mathtools
}

\@ifundefined{substack}{}{
    \newcommand{\attop}[1]{{\let\textstyle\scriptstyle\let\scriptstyle\scriptscriptstyle\substack{#1}}}
    \renewcommand{\atop}[1]{{\let\scriptstyle\textstyle\let\scriptscriptstyle\scriptstyle\substack{#1}}}
}


\newenvironment{titleblock}
{\begin{mdframed}[linecolor=black!20,backgroundcolor=black!15]\begin{center}}
{\end{center}\end{mdframed}}

\newenvironment{shadedblock}[1][5in]
{\bigskip\begin{mdframed}[align=center,userdefinedwidth=#1,linecolor=white,backgroundcolor=black!5]}{\end{mdframed}}

\newenvironment{shadedtitleblock}[2][5in]
{\begin{mdframed}[align=center,userdefinedwidth=#1,linecolor=white,backgroundcolor=black!15]\sc #2\end{mdframed}\begin{mdframed}[align=center,userdefinedwidth=#1,linecolor=white,backgroundcolor=black!5]}{\end{mdframed}}



\newcommand{\shadedheader}[1]{\vspace{15pt}\begin{mdframed}[linecolor=black!20,backgroundcolor=black!5]\sc #1\end{mdframed}\vspace{15pt}}

%%%%%%%%% newtheorem

\newtheoremstyle{gloss}{\topsep}{\topsep}{}{0pt}{\bfseries}{}{\newline}{\newline
*{\bf #3} }
\theoremstyle{gloss}
\newtheorem*{defstar}{Definition}

\newtheoremstyle{newplain}{20pt}{0pt}{\it}{0pt}{\bfseries}{.}{1ex}{}
\theoremstyle{newplain}

% Number by section (1.1) by default, can override with
% \newcommand{\theoremnumstyle}{} (must be empty)
\ifthenelse{\isundefined\theoremnumstyle}
	{\newtheorem{theorem}{Theorem}[section] 
	\numberwithin{equation}{section}} % Number equations by section, like (1.1) instead of (1)
	{\ifthenelse{\equal\theoremnumstyle{}}
		{\newtheorem{theorem}{Theorem}}
		{\newtheorem{theorem}{Theorem}[section]
		\numberwithin{equation}{section}
		}
	}

\newtheorem{corollary}[theorem]{Corollary}
\newtheorem{claim}[theorem]{Claim}
\newtheorem{lemma}[theorem]{Lemma}
\newtheorem{proposition}[theorem]{Proposition}
\newtheorem{fact}[theorem]{Fact}

\newtheoremstyle{newtextthm}{20pt}{0pt}{}{0pt}{\bfseries}{.}{1ex}{}
\theoremstyle{newtextthm}
\newtheorem{definition}[theorem]{Definition}
\newtheorem{example}[theorem]{Example}
\newtheorem{problem}[theorem]{Problem}
\newtheorem{remark}[theorem]{Remark}
\newtheorem{notation}[theorem]{Notation}


\newtheorem*{theoremstar}{Theorem}
\newtheorem*{definitionstar}{Definition}
\newtheorem*{lemmastar}{Lemma}
\newtheorem*{corstar}{Corollary}
\newtheorem*{corollarystar}{Corollary}
\newtheorem*{propositionstar}{Proposition}
\newtheorem*{claimstar}{Claim}
\newtheorem*{examplestar}{Example}

% custom
\newcommand{\argforcustom}{}
\theoremstyle{newtextthm}
\newtheorem{helperforcustom}[theorem]{\argforcustom}
\newtheorem*{helperforcustomstar}{\argforcustom}
\newenvironment{custom}[1]{\renewcommand{\argforcustom}{#1}\begin{helperforcustom}}{\end{helperforcustom}}
\newenvironment{customstar}[1]{\renewcommand{\argforcustom}{#1}\begin{helperforcustomstar}}{\end{helperforcustomstar}}



\newcommand{\itemref}[1]{(\ref{#1})}
