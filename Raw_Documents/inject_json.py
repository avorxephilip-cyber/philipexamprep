import json
import os

with open(r'C:\Users\avorx\OneDrive\Desktop\philipexamprep\Raw_Documents\acc402d_parsed.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

js_snippet = """
  // ─────────────────────────────────────────────
  // 7. ADVANCE FINANCIAL REPORTING PASCO 2025 TRIAL
  // ─────────────────────────────────────────────
  acc402d: {
    label: "Advance Financial Reporting Pasco 2025 trial",
    icon: "🎓",
    color: "#a78bfa",
    questions: """ + json.dumps(data, indent=4) + """
  }
"""

with open(r'C:\Users\avorx\OneDrive\Desktop\philipexamprep\quiz_data.js', 'r', encoding='utf-8') as f:
    quiz_js = f.read()

if 'acc402d:' not in quiz_js:
    # replace the very last };
    if '}\n};' in quiz_js:
        quiz_js = quiz_js.replace('}\n};', '},\n' + js_snippet + '\n};')
    elif '\n};' in quiz_js:
        quiz_js = quiz_js.replace('\n};', ',\n' + js_snippet + '\n};')

with open(r'C:\Users\avorx\OneDrive\Desktop\philipexamprep\quiz_data.js', 'w', encoding='utf-8') as f:
    f.write(quiz_js)
