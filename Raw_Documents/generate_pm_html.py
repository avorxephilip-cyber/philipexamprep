import re
import os

ROOT = r'c:\Users\avorx\OneDrive\Desktop\philipexamprep'
INPUT_FILE = os.path.join(ROOT, 'Raw_Documents', 'PM_Exam_Answers_v2.txt')
OUTPUT_DIR = os.path.join(ROOT, 'exams')

with open(INPUT_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# Split by year - looking for "YYYY EXAMINATION"
year_blocks = re.split(r'\n\s*(\d{4})\s+EXAMINATION\s*\n', content)
# year_blocks[0] is intro
# blocks[1] is 2019, blocks[2] is 2019 data...

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>{year} Project Management Exam Solutions | UCC BCom | Philip Exam Prep</title>
<link href="exam_theme.css" rel="stylesheet"/>
<meta content="{year} Project Management Exam Solutions for UCC BCom students. Step-by-step model answers and explanations." name="description"/>
</head>
<body>
<div class="container">
    <div class="breadcrumb"><a href="../index.html">Home</a> &gt; <a href="../index.html#materials">Project Management</a> &gt; {year}</div>
    <h1>{year} Project Management Exam Solutions</h1>
    <h2 style="text-align:center; margin-top:2rem; color:var(--primary);">{year} EXAMINATION — SECTION B</h2>
    
    {content_html}

    <div class="exam-navigation">
        <a class="nav-btn back" href="../index.html#materials">Back to Project Management</a>
    </div>
</div>
<script src="../security.js"></script>
<script src="../support.js"></script>
</body>
</html>
"""

def parse_year_data(data):
    # Split by Question
    q_blocks = re.split(r'\n\s*(Question\s+\d+|QUESTION\s+\d+)\s*\n', data)
    html = ""
    # q_blocks[0] is year intro
    for i in range(1, len(q_blocks), 2):
        q_title = q_blocks[i].strip()
        q_text = q_blocks[i+1]
        
        html += f"<h2>{q_title}</h2>\n"
        
        # Split by part a., b., c.
        # Looking for lines starting with a. , b. , etc.
        parts = re.split(r'\n([a-z]\.\s+|[a-z]\.\.\s+)', "\n" + q_text)
        # parts[0] is question intro (like "Explain ...")
        
        intro = parts[0].strip()
        if intro:
            html += f'<div class="solution-section"><div class="question-text"><em>{intro}</em></div></div>\n'
            
        for j in range(1, len(parts), 2):
            p_label = parts[j].strip()
            p_content = parts[j+1]
            
            # Extract question text, model answer, and source
            # Model Answer: ... 📖 Source: ...
            
            ans_split = re.split(r'(Model Answer:|📖 Source:)', p_content)
            
            p_q_text = ans_split[0].strip()
            p_ans = ""
            p_src = ""
            
            for k in range(1, len(ans_split), 2):
                label = ans_split[k]
                val = ans_split[k+1].strip()
                if label == 'Model Answer:':
                    p_ans = val
                elif label == '📖 Source:':
                    p_src = val
            
            html += f'<div class="solution-section">\n'
            html += f'  <div class="question-text"><strong>Part {p_label}</strong> {p_q_text}</div>\n'
            if p_ans:
                # Replace newlines with <br/> or paragraphs
                p_ans_html = p_ans.replace('\n', '<br/>')
                html += f'  <div class="question-text">{p_ans_html}</div>\n'
            if p_src:
                html += f'  <div class="source-text">(Source: {p_src})</div>\n'
            html += '</div>\n'
    return html

for i in range(1, len(year_blocks), 2):
    year = year_blocks[i]
    y_data = year_blocks[i+1]
    
    html_content = parse_year_data(y_data)
    full_html = HTML_TEMPLATE.format(year=year, content_html=html_content)
    
    filename = f"{year}_PM_ExamSolution.html"
    with open(os.path.join(OUTPUT_DIR, filename), 'w', encoding='utf-8') as f:
        f.write(full_html)
    print(f"Generated {filename}")
