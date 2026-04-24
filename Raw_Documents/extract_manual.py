
import pypdf

def extract_manual(pdf_path):
    reader = pypdf.PdfReader(pdf_path)
    current_q = 0
    results = {}

    for i, page in enumerate(reader.pages):
        content = page.get_contents()
        if not content: continue
        if isinstance(content, list):
            data = b"".join(c.get_data() for c in content)
        else:
            data = content.get_data()
        
        text = data.decode('latin-1', errors='ignore')
        
        # First, find all strings and their positions to track question numbers
        import re
        all_matches = list(re.finditer(r'\((.*?)\)\s*Tj', text))
        
        # We need to know which question we are in at each position
        q_pos = []
        for m in all_matches:
            s = m.group(1).strip()
            if re.match(r'^\d+\.', s):
                current_q_num = int(s.split('.')[0])
                q_pos.append((m.start(), current_q_num))
        
        # Now find all red markers
        red_markers = []
        idx = text.find('1 0 0 rg')
        while idx != -1:
            red_markers.append(idx)
            idx = text.find('1 0 0 rg', idx + 1)
            
        for rm in red_markers:
            # Find the first ( after this rm
            start_paren = text.find('(', rm)
            end_paren = text.find(')', start_paren)
            if start_paren != -1 and end_paren != -1:
                ans_text = text[start_paren+1:end_paren].strip()
                if ans_text.startswith(('A.', 'B.', 'C.', 'D.')):
                    # Determine which question this is
                    # It's the question with the largest start_pos < rm
                    this_q = 0
                    for pos, qnum in q_pos:
                        if pos < rm:
                            this_q = qnum
                        else:
                            break
                    
                    if this_q > 0:
                        results[this_q] = ans_text
                        print(f"Q{this_q}: {ans_text}")

    return results

if __name__ == "__main__":
    pdf_path = r"c:\Users\avorx\OneDrive\Desktop\philipexamprep\Raw_Documents\Project_Management_Exam_Consolidated.pdf"
    res = extract_manual(pdf_path)
    with open(r"c:\Users\avorx\OneDrive\Desktop\philipexamprep\Raw_Documents\verified_answers.txt", "w") as f:
        for q in sorted(res.keys()):
            f.write(f"Q{q}: {res[q]}\n")
