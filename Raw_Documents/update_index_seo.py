from bs4 import BeautifulSoup

with open(r'c:\Users\avorx\OneDrive\Desktop\philipexamprep\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

# Add Favicon
if not soup.find('link', rel='icon'):
    favicon = soup.new_tag('link', rel='icon', href='favicon.ico', type='image/x-icon')
    soup.head.append(favicon)

# Add OG Tags
og_title = soup.find('meta', attrs={'property': 'og:title'})
if not og_title:
    soup.head.append(soup.new_tag('meta', attrs={'property': 'og:title', 'content': 'Philip Exam Prep | UCC BCom Excellence'}))

og_desc = soup.find('meta', attrs={'property': 'og:description'})
if not og_desc:
    soup.head.append(soup.new_tag('meta', attrs={'property': 'og:description', 'content': 'Premium exam preparation resources across multiple courses tailored for University of Cape Coast (UCC) students.'}))

with open(r'c:\Users\avorx\OneDrive\Desktop\philipexamprep\index.html', 'w', encoding='utf-8') as f:
    f.write(str(soup))

print("Modified index SEO")
