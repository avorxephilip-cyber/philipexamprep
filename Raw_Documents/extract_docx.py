from docx import Document

doc_path = r'C:\Users\avorx\OneDrive\Desktop\philipexamprep\Raw_Documents\ACC402D_SectionA_Solutions_v2.docx'
doc = Document(doc_path)
text = []
for para in doc.paragraphs:
    text.append(para.text)

with open(r'C:\Users\avorx\OneDrive\Desktop\philipexamprep\Raw_Documents\ACC402D_SectionA_Solutions_v2.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(text))
