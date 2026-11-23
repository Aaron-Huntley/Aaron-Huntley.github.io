# Aaron Huntley's website

Source for <https://aaron-huntley.github.io/>, a personal site built with
[MkDocs](https://www.mkdocs.org/) and the
[Material](https://squidfunk.github.io/mkdocs-material/) theme. It has a
homepage, a CV, a talks page, and a blog ("Conversations with friends").

## Layout

```
docs/                 Everything that gets published
  index.md            Homepage
  aboutme/            CV, talks and talk slides
  blog/posts/         Blog posts (Markdown)
  blog/posts/vdc-fam/ Generated from quarto/vdc-fam (do not edit by hand)
  images/             Site images, logo and favicon
  notes_pdf/          PDFs linked from the CV
  javascripts/        MathJax config and page scripts
  mini-coi.js         Retired service worker (see "Housekeeping")
quarto/               Quarto sources for posts with TikZ diagrams and citations
  _quarto.yml         Quarto settings and filters
  _tikz.lua           Turns tikz code blocks into SVGs
  _mkdocs.lua         Rewrites Quarto's Markdown so MkDocs can read it
  vdc-fam/            One folder per post: index.qmd, refs.bib, macros
sources/              LaTeX sources, kept out of the website
render.sh             Renders quarto/ posts into docs/blog/posts/
mkdocs.yml            Site configuration
requirements.txt      Python packages for building the site
.github/workflows/    ci.yml deploys the site on every push to main
```

## Set up

You need Python 3.

```bash
python3 -m venv venv
venv/bin/pip install -r requirements.txt
```

## Preview locally

```bash
venv/bin/mkdocs serve
```

Then open <http://127.0.0.1:8000/>. The page reloads when you save a file.

## Write a blog post

### Plain Markdown

1. Add `docs/blog/posts/<name>.md` with front matter:

   ```markdown
   ---
   date:
     created: 2026-11-23
   draft: true
   ---

   # Title

   Intro paragraph shown on the blog index.

   <!-- more -->

   The rest of the post.
   ```

2. Remove `draft: true` when it is ready to publish. Drafts are hidden,
   including in local preview.

Maths: `$...$` for inline maths, and `$$` on separate lines for display maths.

### Quarto (TikZ diagrams, citations, theorem blocks)

These posts are written in Quarto and converted to Markdown **before**
MkDocs sees them. MkDocs and CI never run Quarto.

1. Put the source in `quarto/<name>/index.qmd` (see `quarto/vdc-fam/`).
   The `date:` field is required, and `<!-- more -->` marks the end of the
   blog index excerpt.
2. Run `./render.sh` (or `./render.sh <name>`). It writes
   `docs/blog/posts/<name>/index.md` and copies the diagrams it uses into
   `_svgs/`.
3. Commit both the `.qmd` and the generated files in `docs/`.

**Edit the `.qmd`, not the generated `index.md`.** The next `./render.sh`
overwrites the generated file.

Rendering needs [Quarto](https://quarto.org/) (the script expects it in
`~/Applications/quarto/bin`), plus a TeX installation with `lualatex`,
`dvisvgm` and the `quiver` package for TikZ diagrams. Diagrams are cached in
`quarto/<name>/_svgs/`, so only new or changed diagrams are compiled.

## Deploy

Push to `main`. The `ci` GitHub Action builds the site and publishes it to
the `gh-pages` branch, which GitHub Pages serves. Check the Actions tab if
the live site doesn't update.

To check the build locally first:

```bash
venv/bin/mkdocs build --strict
```

## Housekeeping

- `docs/calc3/` is an unfinished page. Git ignores it and `mkdocs.yml`
  excludes it from the build, so it stays local.
- `docs/blog/p3_love.md` is deliberately left out of the menu and search.
  It is reachable only by its URL.
- `docs/mini-coi.js` removes a service worker that an earlier version of
  the site installed in visitors' browsers. It can be deleted after mid-2027.
- `site/` is local build output and is not committed.
