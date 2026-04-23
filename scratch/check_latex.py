import re

def check_latex(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check for unclosed $
    # This is tricky because $ can appear in strings
    # We'll just look for odd numbers of $ in each question object
    
    questions = re.findall(r'\{[^{}]*?"q":.*?"options":.*?\}', content, re.DOTALL)
    
    errors = []
    for i, q in enumerate(questions):
        # Count $ in the entire question object
        dollar_count = q.count('$')
        if dollar_count % 2 != 0:
            errors.append(f"Potential unclosed '$' in question object {i}: {q[:100]}...")
            
        # Check for common LaTeX mistakes
        if re.search(r'\\frac{[^}]*?}[^{]', q): # Missing second { for \frac
             pass # complicated regex, let's keep it simple
             
        # Check for \text{... without }
        if re.search(r'\\text{[^}]*?$', q):
             errors.append(f"Potential unclosed '\\text{{' in question {i}")

    return errors

errors = check_latex('quiz_data.js')
if errors:
    for e in errors:
        print(e)
else:
    print("No obvious LaTeX errors found in quiz_data.js")
