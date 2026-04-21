import docx
import json
import re

doc_path = r'C:\Users\avorx\OneDrive\Desktop\philipexamprep\Raw_Documents\ACC402D_SectionA_Solutions_v2.docx'
doc = docx.Document(doc_path)

# Extract paragraphs and tables
content = []

# To associate tables with text, we can interleave them based on their XML position, but python-docx doesn't easily interleave elements natively.
# Let's iterate over block-level elements:
from docx.document import Document
from docx.oxml.table import CT_Tbl
from docx.oxml.text.paragraph import CT_P
from docx.table import _Cell, Table
from docx.text.paragraph import Paragraph

def iter_block_items(parent):
    if isinstance(parent, Document):
        parent_elm = parent.element.body
    elif isinstance(parent, _Cell):
        parent_elm = parent._tc
    else:
        raise ValueError("something's not right")

    for child in parent_elm.iterchildren():
        if isinstance(child, CT_P):
            yield Paragraph(child, parent)
        elif isinstance(child, CT_Tbl):
            yield Table(child, parent)

blocks = list(iter_block_items(doc))

questions = []
current_q = None
current_preamble = None
current_workings = []

for block in blocks:
    if isinstance(block, Paragraph):
        text = block.text.strip()
        if not text:
            continue
            
        if "SHARED SCENARIO" in text:
            current_preamble = text
            # The next few paragraphs might be the preamble text
            
        elif "Question " in text and "|" in text:
            if current_q:
                if current_workings:
                    current_q['explanation'] = '\n'.join(current_workings)
                questions.append(current_q)
            current_q = {'q': '', 'options': [], 'answer': 0, 'explanation': '', 'preamble': current_preamble}
            current_workings = []
            
        elif text == "THE QUESTION":
            pass # Next paragraph is the question
            
        elif text.startswith("SOLUTION"):
            pass # Workings follow
            
        elif text == "WORKINGS":
            pass
            
        elif current_q is not None:
            if not current_q['q'] and not current_workings and not text.startswith('A.') and not text.startswith('B.'):
                # If we haven't found the question text yet
                # Wait, if there's a preamble, it might be in paragraphs before 'Question X |'
                pass
            
            # This is a bit fragile. Let's just collect based on state
            pass

# Since the document is very structured, let's just do a manual extraction or a regex-based one.
# It's only 20 questions, I'll write a Python script that outputs the JSON by reading the text file and the tables, and I'll manually clean it up if needed.
