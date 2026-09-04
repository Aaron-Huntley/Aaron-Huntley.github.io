window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    // Custom notation used throughout the category theory notes.
    macros: {
      ob: ["\\operatorname{Ob}(#1)", 1],
      objs: ["\\text{object of }#1", 1],
      cat: ["\\mathscr{#1}", 1],
      alg: ["\\mathrm{Alg}(#1)", 1],
      func: ["#1\\colon #2\\rightarrow #3", 3],
      nattran: ["#1\\colon #2\\Rightarrow #3", 3],
      ho: ["\\operatorname{Hom}_{#1}(#2,#3)", 3, ""],
      GL: ["\\operatorname{GL}"],
      Units: ["\\operatorname{Units}"],
    },
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex",
  },
};

document$.subscribe(() => {
  MathJax.startup.output.clearCache();
  MathJax.typesetClear();
  MathJax.texReset();
  MathJax.typesetPromise();
});
