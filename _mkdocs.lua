-- Make fenced divs (theorems, definitions, bibliography entries, ...) survive
-- the trip to Python-Markdown (md_in_html): emit <div ... markdown="1">.
function Div(el)
  local attrs = ""
  if el.identifier ~= "" then attrs = attrs .. ' id="' .. el.identifier .. '"' end
  if #el.classes > 0 then attrs = attrs .. ' class="' .. table.concat(el.classes, " ") .. '"' end
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
