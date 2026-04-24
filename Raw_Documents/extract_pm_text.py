
from pypdf import PdfReader
import json

def extract_text_from_pdf(pdf_path):
    reader = PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    return text

if __name__ == "__main__":
    pdf_path = r"c:\Users\avorx\OneDrive\Desktop\philipexamprep\Raw_Documents\Project_Management_Exam_Consolidated.pdf"
    try:
        content = extract_text_from_pdf(pdf_path)
        with open(r"c:\Users\avorx\OneDrive\Desktop\philipexamprep\Raw_Documents\pm_consolidated_text.txt", "w", encoding="utf-8") as f:
            f.write(content)
        print("Successfully extracted text to pm_consolidated_text.txt")
    except Exception as e:
        print(f"Error: {e}")
