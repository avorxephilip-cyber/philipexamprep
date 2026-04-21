import docx
import os

docs = [
    "Entrepreneurship_2020-2022Exam_Answers.docx",
    "Entrepreneurship_2023_Answers.docx",
    "Entrepreneurship_2024_2025_Answers.docx"
]

for d in docs:
    path = os.path.join("Raw_Documents", d)
    if os.path.exists(path):
        doc = docx.Document(path)
        text = "\n".join([p.text for p in doc.paragraphs])
        out_name = d.replace(".docx", ".txt")
        with open(os.path.join("Raw_Documents", out_name), "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Extracted {d}")
    else:
        print(f"Not found: {path}")
