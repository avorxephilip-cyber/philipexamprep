import docx
import json
import re

doc_path = r'C:\Users\avorx\OneDrive\Desktop\philipexamprep\Raw_Documents\ACC402D_SectionA_Solutions_v2.docx'
doc = docx.Document(doc_path)

from docx.document import Document
from docx.oxml.table import CT_Tbl
from docx.oxml.text.paragraph import CT_P
from docx.table import _Cell, Table
from docx.text.paragraph import Paragraph

def iter_block_items(parent):
    parent_elm = parent.element.body
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

state = "SEARCHING"

for block in blocks:
    if isinstance(block, Paragraph):
        text = block.text.strip()
        if not text:
            continue
            
        if "SHARED SCENARIO" in text:
            # The next paragraph is the actual scenario text
            state = "PREAMBLE_TEXT"
            current_preamble = ""
            continue
            
        if state == "PREAMBLE_TEXT":
            if text.startswith("Question"):
                state = "SEARCHING"
                # Do not continue, let it fall through to "Question"
            else:
                current_preamble += text + "\n"
                continue
                
        if text.startswith("Question ") and "|" in text:
            if current_q:
                current_q['explanation'] = '\n'.join(current_workings)
                questions.append(current_q)
            current_q = {'q': '', 'options': [], 'answer': 0, 'explanation': '', 'preamble': current_preamble.strip() if current_preamble else ""}
            current_workings = []
            state = "WAITING_FOR_QUESTION"
            continue
            
        if state == "WAITING_FOR_QUESTION" and text == "THE QUESTION":
            state = "QUESTION_TEXT"
            continue
            
        if state == "QUESTION_TEXT":
            current_q['q'] += text + "\n"
            if "____________" in text or text.endswith("?"):
                state = "WAITING_FOR_SOLUTION"
            continue
            
        if state == "WAITING_FOR_SOLUTION" and text.startswith("SOLUTION"):
            # Extract answer from text if possible, e.g. "SOLUTION — ANSWER: D"
            m = re.search(r"ANSWER:\s*([A-D])", text)
            if m:
                ans_char = m.group(1)
                current_q['answer'] = ord(ans_char) - ord('A')
            state = "WORKINGS"
            continue
            
        if state == "WORKINGS":
            if text != "WORKINGS":
                current_workings.append(text)
            continue
            
    elif isinstance(block, Table):
        # A table could contain options or workings
        is_options = False
        options = []
        for row in block.rows:
            cells = [c.text.strip() for c in row.cells]
            if len(cells) >= 2 and cells[0] in ["A.", "B.", "C.", "D."]:
                is_options = True
                options.append(cells[1].replace("✓  CORRECT ANSWER", "").strip())
        
        if is_options and current_q:
            current_q['options'] = options
            # the answer might be indicated in the options
            for i, row in enumerate(block.rows):
                if "CORRECT ANSWER" in row.cells[1].text:
                    current_q['answer'] = i
        elif state == "WORKINGS":
            # Just append table text as workings
            table_text = ""
            for row in block.rows:
                table_text += " | ".join([c.text.strip() for c in row.cells]) + "\n"
            current_workings.append(table_text)

if current_q:
    current_q['explanation'] = '\n'.join(current_workings)
    questions.append(current_q)

import sys
sys.stdout.reconfigure(encoding='utf-8')
print("const acc402d_questions = " + json.dumps(questions, indent=2) + ";")
