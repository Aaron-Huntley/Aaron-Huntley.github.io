# convert_tex_to_md.py
import os

for filename in os.listdir("docs/notes_tex"):
    if filename.endswith(".tex"):
        tex_path = os.path.join("notes_tex", filename)
        md_path = os.path.join("notes_md", filename.replace(".tex", ".md"))
        # Conversion logic goes here
        with open(md_path, "w") as f:
            f.write(f"# Converted from {filename}\n")


"""This is a placeholder file for a script which does the following:
This script converts .tex files in the 'docs/notes_tex' directory to .md files in the 'docs/notes_md' directory with correct formatting.
It updates index.md to include the newly added markdown files.
There is a workflow which automatically run this script when .tex files are added or modified."""
