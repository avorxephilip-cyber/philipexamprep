import os

def parse_txt_to_html(txt_path, title):
    with open(txt_path, 'r', encoding='utf-8') as f:
        lines = f.read().split('\n')
        
    html = f"""<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <link rel="stylesheet" href="exam_theme.css">
</head>

<body>

    <div class="container">
        <h1>{title}</h1>
"""
    
    in_question = False
    in_answer = False
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        if line.startswith("ENTREPRENEURSHIP") or "Past Examination Questions" in line or line.startswith("Source:") or line.startswith("Note") or line.startswith("All answers sourced from:") or "End of Model Answers" in line or "Academic Years:" in line or "Papers:" in line:
            continue
            
        if "EXAMINATION" in line and "SECTION" in line:
            if in_question:
                html += "        </div>\n"
                in_question = False
            html += f"        <h2 style='text-align:center; margin-top:2rem; color:var(--primary);'>{line}</h2>\n"
            continue
            
        if line.startswith("Question") or line.startswith("Q3") or line.startswith("Q4") or line.startswith("Part ") or line.startswith("SECTION B — QUESTION") or line.startswith("SECTION C — QUESTION"):
            if in_question:
                html += "        </div>\n"
            html += f'        <div class="solution-section">\n'
            html += f'            <div class="question-text">\n                <strong>{line}</strong>\n            </div>\n'
            in_question = True
            in_answer = False
            continue
            
        if line.startswith("Model Answer:") or line.startswith("Model Answer") or line.startswith("Solution to") or line.startswith("Proposed Vision Statement:"):
            html += f'            <h3>{line}</h3>\n'
            in_answer = True
            continue
            
        if in_question and not in_answer:
            html += f'            <div class="question-text">{line}</div>\n'
        elif in_question and in_answer:
            if line.startswith("(Source:"):
                html += f'            <p><em>{line}</em></p>\n'
            elif ":" in line and not line.startswith("1.") and not line.startswith("2.") and not line.startswith("3.") and not line.startswith("4.") and not line.startswith("5.") and not line.startswith("6.") and len(line.split(":")[0]) < 40:
                parts = line.split(":", 1)
                html += f'            <p><strong>{parts[0]}:</strong>{parts[1]}</p>\n'
            else:
                html += f'            <p>{line}</p>\n'
        else:
            if in_question:
                html += "        </div>\n"
                in_question = False
            html += f'        <h2>{line}</h2>\n'
            
    if in_question:
        html += "        </div>\n"
        
    html += """    </div>

<script src="../security.js"></script>
    <script src="../support.js"></script>
</body>

</html>"""

    return html

files_to_process = [
    ("Raw_Documents/Entrepreneurship_2020-2022Exam_Answers.txt", "2020-2022 Entrepreneurship Exam Solutions", "exams/2020_2022_Entrepreneurship_ExamSolution.html"),
    ("Raw_Documents/Entrepreneurship_2023_Answers.txt", "2023 Entrepreneurship Exam Solutions", "exams/2023_Entrepreneurship_ExamSolution.html"),
    ("Raw_Documents/Entrepreneurship_2024_2025_Answers.txt", "2024-2025 Entrepreneurship Exam Solutions", "exams/2024_2025_Entrepreneurship_ExamSolution.html")
]

for txt_file, title, out_file in files_to_process:
    html_content = parse_txt_to_html(txt_file, title)
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(html_content)
    print(f"Generated {out_file}")
