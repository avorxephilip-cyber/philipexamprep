import os
import glob
import re

directory = r'c:\Users\avorx\OneDrive\Desktop\philipexamprep\exams'
files = glob.glob(os.path.join(directory, '*Entrepreneurship_ExamSolution.html'))

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = re.sub(r'<div class="question-text">\s*(\(Source:.*?\))\s*</div>', r'<div class="source-text">\1</div>', content, flags=re.DOTALL)
    content = re.sub(r'<p>\s*<em>\s*(\(Source:.*?\))\s*</em>\s*</p>', r'<div class="source-text">\1</div>', content, flags=re.DOTALL)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
print('Replaced sources')
