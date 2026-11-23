-- Make fenced divs (theorems, definitions, bibliography entries, ...) survive
-- the trip to Python-Markdown (md_in_html): emit <div ... markdown="1">.
function Div(el)
  local attrs = ""
  if el.identifier ~= "" then attrs = attrs .. ' id="' .. el.identifier .. '"' end
  if #el.classes > 0 then attrs = attrs .. ' class="' .. table.concat(el.classes, " ") .. '"' end
  for key, value in pairs(el.attributes) do
    if key ~= "markdown" then attrs = attrs .. " " .. key .. '="' .. value .. '"' end
  end
  local out = pandoc.List({ pandoc.RawBlock("html", "<div" .. attrs .. ' markdown="1">') })
  out:extend(el.content)
  out:insert(pandoc.RawBlock("html", "</div>"))
  return out
end

-- Bracketed spans ([text]{.class}) are not understood by Python-Markdown:
-- keep just their content.
function Span(el)
  return el.content
end

-- Display maths: pandoc writes $$...$$ inline in the paragraph, but
-- pymdownx.arithmatex only treats $$ as display maths when it sits on its
-- own lines. Split the paragraph around each display equation and emit
--
--   $$
--   ...
--   $$
--
-- as its own block.
local function is_space(x)
  return x.t == "Space" or x.t == "SoftBreak" or x.t == "LineBreak"
end

local function is_display_math(x)
  return x.t == "Math" and x.mathtype == "DisplayMath"
end

local function split_display_math(el, make_block)
  if not el.content:find_if(is_display_math) then return nil end

  local blocks = pandoc.List()
  local current = pandoc.List()

  local function flush()
    while #current > 0 and is_space(current[1]) do current:remove(1) end
    while #current > 0 and is_space(current[#current]) do current:remove(#current) end
    if #current > 0 then blocks:insert(make_block(current)) end
    current = pandoc.List()
  end

  for _, x in ipairs(el.content) do
    if is_display_math(x) then
      flush()
      -- Trim, and drop blank lines (they would end the $$ block early).
      local tex = x.text:gsub("^%s+", ""):gsub("%s+$", ""):gsub("\n%s*\n", "\n")
      -- Surrounding newlines: pandoc puts no blank line between two raw
      -- blocks (e.g. next to a <div>), and arithmatex needs one.
      blocks:insert(pandoc.RawBlock("markdown", "\n$$\n" .. tex .. "\n$$\n"))
    else
      current:insert(x)
    end
  end
  flush()
  return blocks
end

-- Inside lists the $$ block cannot be used: pandoc indents list content by
-- 2 spaces, Python-Markdown needs 4, so the block would end the list. There
-- the equation stays inline as <span class="arithmatex">\[...\]</span>, which
-- MathJax still typesets as a centred display equation. Characters that
-- Markdown would act on are written as HTML entities; MathJax reads the
-- decoded text.
local entities = {
  ["&"] = "&amp;", ["<"] = "&lt;", [">"] = "&gt;",
  ["\\"] = "&#92;", ["_"] = "&#95;", ["*"] = "&#42;", ["`"] = "&#96;",
  ["["] = "&#91;", ["]"] = "&#93;", ["$"] = "&#36;",
}

local function display_math_span(x)
  local tex = x.text:gsub("^%s+", ""):gsub("%s+$", ""):gsub("%s*\n%s*", " ")
  tex = tex:gsub('[&<>\\_*`%[%]$]', entities)
  return pandoc.RawInline("markdown", '<span class="arithmatex">&#92;[' .. tex .. '&#92;]</span>')
end

local function inline_display_math_in_list(list)
  return list:walk({
    Math = function(x)
      if is_display_math(x) then return display_math_span(x) end
    end,
  })
end

-- Run after the typewise pass above: lists first, then split the remaining
-- paragraphs (always into Para, so the $$ block gets blank lines around it).
function Pandoc(doc)
  doc = doc:walk({ BulletList = inline_display_math_in_list, OrderedList = inline_display_math_in_list })
  return doc:walk({
    Para = function(el) return split_display_math(el, pandoc.Para) end,
    Plain = function(el) return split_display_math(el, pandoc.Para) end,
  })
end
