import re

def decode_escapes(match):
    return match.group(0).encode('utf-8').decode('unicode-escape')

with open('quiz_data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace \uXXXX with the actual characters
# We use a regex to find \u followed by 4 hex digits
new_content = re.sub(r'\\u[0-9a-fA-F]{4}', decode_escapes, content)

with open('quiz_data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Decoded unicode escapes in quiz_data.js")
