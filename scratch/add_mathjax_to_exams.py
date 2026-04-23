import os
import re

exams_dir = 'exams'
mathjax_script = """<!-- MathJax for Formula Rendering -->
<script>
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
    displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
    processEscapes: true
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
  }
};
</script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
"""

for filename in os.listdir(exams_dir):
    if filename.endswith('.html'):
        path = os.path.join(exams_dir, filename)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if 'MathJax-script' in content:
            continue
            
        # Insert before </head>
        new_content = content.replace('</head>', mathjax_script + '</head>')
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
print("Added MathJax to all exam pages.")
