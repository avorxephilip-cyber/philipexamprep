import os, re
directory = r'c:\Users\avorx\OneDrive\Desktop\philipexamprep\exams'
for filename in os.listdir(directory):
    if filename.endswith('.html') and filename != '2026_Campus_Q1.html':
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace styles
        content = re.sub(r'<style>.*?</style>', '<link rel="stylesheet" href="exam_theme.css">', content, flags=re.DOTALL)
        
        # Ensure security script is right before </body>
        if '../security.js' not in content:
            content = re.sub(r'</body>', '<script src="../security.js"></script>\n</body>', content)
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
print('Done replacing.')
