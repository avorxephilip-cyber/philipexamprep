import os
import glob
from bs4 import BeautifulSoup
import re

exams_dir = r'c:\Users\avorx\OneDrive\Desktop\philipexamprep\exams'
files = glob.glob(os.path.join(exams_dir, '*.html'))

# Build a catalog
catalog = []
for file_path in files:
    filename = os.path.basename(file_path)
    # Ignore exam_theme.css
    if filename.endswith('.css'):
        continue
    
    # Try to extract year and course
    year = ""
    course = ""
    m = re.match(r'^([0-9]{4}[A-C]?|Project_unit[0-9]|Unit\s?[0-9]\s?Project|Unit[0-9]\s?project)_(.*)\.html$', filename)
    if m:
        year = m.group(1)
        course = m.group(2)
    else:
        # Some are named differently like 2025_Corporate_Financial_Analysis_Q1.html
        parts = filename.replace('.html', '').split('_')
        if parts[0].isdigit():
            year = parts[0]
            course = " ".join(parts[1:])
        else:
            year = ""
            course = filename.replace('.html', '')
            
    # Clean up course name
    if 'Auditing' in filename: course = 'Auditing'
    elif 'Entrepreneurship' in filename: course = 'Entrepreneurship'
    elif 'Project' in filename: course = 'Intro to Project Management'
    elif 'Corporate' in filename: course = 'Corporate Financial Analysis'
    elif 'Advance' in filename or 'Campus_Q1' in filename: course = 'Advanced Financial Reporting'
    else: course = course.replace('_', ' ')
    
    # Clean up year
    m_year = re.search(r'(20[0-9]{2}[A-C]?)', filename)
    if m_year: year = m_year.group(1)
    
    m_unit = re.search(r'(Unit\s?[0-9])', filename, re.IGNORECASE)
    if m_unit and not year: year = m_unit.group(1).title()
    
    if not year:
        year = "Exam"
        
    catalog.append({
        'path': file_path,
        'filename': filename,
        'course': course,
        'year': year
    })

# Group and sort
courses = {}
for item in catalog:
    if item['course'] not in courses:
        courses[item['course']] = []
    courses[item['course']].append(item)

for c in courses:
    courses[c].sort(key=lambda x: x['year'], reverse=True) # newest first

# Process files
for c in courses:
    items = courses[c]
    for i, item in enumerate(items):
        file_path = item['path']
        prev_item = items[i+1] if i < len(items)-1 else None # since reverse sorted, older is next in array
        next_item = items[i-1] if i > 0 else None
        
        with open(file_path, 'r', encoding='utf-8') as f:
            html = f.read()
            
        soup = BeautifulSoup(html, 'html.parser')
        
        # 1. SEO
        title_str = f"{item['year']} {item['course']} Exam Solutions | UCC BCom | Philip Exam Prep"
        if item['year'] == "Exam":
            title_str = f"{item['course']} Exam Solutions | UCC BCom | Philip Exam Prep"
            
        if soup.title:
            soup.title.string = title_str
        else:
            new_title = soup.new_tag('title')
            new_title.string = title_str
            soup.head.append(new_title)
            
        # Add Meta Description
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        desc_str = f"{item['year']} {item['course']} Exam Solutions for UCC BCom students. Step-by-step model answers and explanations."
        if meta_desc:
            meta_desc['content'] = desc_str
        else:
            soup.head.append(soup.new_tag('meta', attrs={'name': 'description', 'content': desc_str}))
            
        # Add OG Tags
        og_title = soup.find('meta', attrs={'property': 'og:title'})
        if og_title: og_title['content'] = title_str
        else: soup.head.append(soup.new_tag('meta', attrs={'property': 'og:title', 'content': title_str}))
        
        og_desc = soup.find('meta', attrs={'property': 'og:description'})
        if og_desc: og_desc['content'] = desc_str
        else: soup.head.append(soup.new_tag('meta', attrs={'property': 'og:description', 'content': desc_str}))

        # 2. Breadcrumbs & Nav
        container = soup.find('div', class_='container')
        if not container:
            # If no container, just use body
            container = soup.body
            
        if container:
            # Remove existing breadcrumb/nav if any
            existing_bc = container.find('div', class_='breadcrumb')
            if existing_bc: existing_bc.decompose()
            existing_nav = container.find('div', class_='exam-navigation')
            if existing_nav: existing_nav.decompose()
            
            # Breadcrumb
            bc_html = f'<div class="breadcrumb"><a href="../index.html">Home</a> &gt; <a href="../index.html#materials">{item["course"]}</a> &gt; {item["year"]}</div>'
            bc_soup = BeautifulSoup(bc_html, 'html.parser')
            container.insert(0, bc_soup)
            
            # Navigation
            nav_html = '<div class="exam-navigation">'
            if prev_item:
                nav_html += f'<a href="{prev_item["filename"]}" class="nav-btn prev">← {prev_item["year"]}</a>'
            
            nav_html += f'<a href="../index.html#materials" class="nav-btn back">Back to {item["course"]}</a>'
            
            if next_item:
                nav_html += f'<a href="{next_item["filename"]}" class="nav-btn next">{next_item["year"]} →</a>'
                
            nav_html += '</div>'
            nav_soup = BeautifulSoup(nav_html, 'html.parser')
            container.append(nav_soup)

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(str(soup))

print("Modified all exam files.")
