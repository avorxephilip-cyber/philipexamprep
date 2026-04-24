
import pypdf
import re

def final_extract(pdf_path):
    reader = pypdf.PdfReader(pdf_path)
    output_path = r"c:\Users\avorx\OneDrive\Desktop\philipexamprep\Raw_Documents\extracted_answers_debug.txt"
    
    with open(output_path, "w", encoding="utf-8") as f:
        current_q = 0
        for i, page in enumerate(reader.pages):
            content = page.get_contents()
            if not content: continue
            if isinstance(content, list):
                data = b"".join(c.get_data() for c in content)
            else:
                data = content.get_data()
            
            text = data.decode('latin-1', errors='ignore')
            
            # Find all strings and their positions
            matches = list(re.finditer(r'\((.*?)\)\s*Tj|\[(.*?)\]\s*TJ', text))
            
            for m in matches:
                val = m.group(1) or m.group(2)
                if m.group(2):
                    val = "".join(re.findall(r'\((.*?)\)', val))
                
                val = val.strip()
                if not val: continue
                
                # Check for question number
                q_match = re.match(r'^(\d+)\.', val)
                if q_match:
                    current_q = int(q_match.group(1))
                
                # Check color
                # Search back 200 chars for any rg/RG
                area = text[max(0, m.start()-200):m.start()]
                colors = re.findall(r'([\d\.]+)\s+([\d\.]+)\s+([\d\.]+)\s+rg', area)
                
                is_red = False
                if colors:
                    last_c = colors[-1]
                    if last_c == ('1', '0', '0') or last_c == ('1.0', '0.0', '0.0'):
                        is_red = True
                
                if is_red and re.match(r'^[A-D]\.', val):
                    f.write(f"Q{current_q}: {val}\n")
                    print(f"Extracted Q{current_q}: {val}")

if __name__ == "__main__":
    pdf_path = r"c:\Users\avorx\OneDrive\Desktop\philipexamprep\Raw_Documents\Project_Management_Exam_Consolidated.pdf"
    final_extract(pdf_path)
