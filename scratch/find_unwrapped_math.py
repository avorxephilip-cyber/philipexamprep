import re

def find_unwrapped_math(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Common LaTeX patterns
    patterns = [r'\\frac', r'\\times', r'\\div', r'\\text\{', r'\\beta', r'\\Delta']
    
    # Simple check: find lines with these patterns but without $
    lines = content.split('\n')
    issues = []
    for i, line in enumerate(lines):
        for p in patterns:
            if re.search(p, line):
                if '$' not in line:
                    issues.append(f"Line {i+1}: Math pattern '{p}' found without '$' wrapper: {line.strip()}")
                break # Move to next line if one pattern found
    
    return issues

issues = find_unwrapped_math('quiz_data.js')
if issues:
    print(f"Found {len(issues)} lines with potential unwrapped math:")
    for issue in issues:
        print(issue)
else:
    print("No obvious unwrapped math found in quiz_data.js")
