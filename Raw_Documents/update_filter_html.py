import re

with open(r'c:\Users\avorx\OneDrive\Desktop\philipexamprep\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

old_filter_html = """<div class="filter-section" id="filter-bar" style="margin-bottom: 3rem; background: var(--glass-bg); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--glass-border); position: sticky; top: 80px; z-index: 90; backdrop-filter: blur(15px);">
<div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; justify-content: space-between;">
<div style="flex: 1; min-width: 250px;">
<input id="search-input" placeholder="🔍 Search solutions by title or keyword..." style="width: 100%; padding: 0.8rem 1rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.5); color: #fff; font-family: 'Inter', sans-serif;" type="text"/>
</div>
<div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
<select id="year-filter" style="padding: 0.8rem 1rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.5); color: #fff; font-family: 'Inter', sans-serif;">
<option value="all">All Years</option>
<option value="2026">2026</option>
<option value="2025">2025</option>
<option value="2024">2024</option>
<option value="2023">2023</option>
<option value="2022">2022</option>
<option value="2021">2021</option>
<option value="2020">2020</option>
</select>
<button class="btn btn-secondary" id="clear-filters" style="padding: 0.8rem 1.5rem;">Clear Filters</button>
</div>
</div>
<div id="course-chips" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
<button class="chip active" data-filter="all">All Courses</button>
<button class="chip" data-filter="Auditing">Auditing</button>
<button class="chip" data-filter="Intro to Project Management">Project Management</button>
<button class="chip" data-filter="Advanced Financial Reporting">Adv. Financial Reporting</button>
<button class="chip" data-filter="Corporate Financial Analysis">Corporate Finance</button>
<button class="chip" data-filter="Entrepreneurship">Entrepreneurship</button>
<button class="chip" data-filter="Investment Management">Investment Management</button>
</div>
</div>"""

new_filter_html = """<div class="filter-section" id="filter-bar">
<div class="filter-controls-row">
<div class="filter-search-col">
<input id="search-input" placeholder="🔍 Search solutions by title or keyword..." type="text"/>
</div>
<div class="filter-actions-col">
<select id="year-filter">
<option value="all">All Years</option>
<option value="2026">2026</option>
<option value="2025">2025</option>
<option value="2024">2024</option>
<option value="2023">2023</option>
<option value="2022">2022</option>
<option value="2021">2021</option>
<option value="2020">2020</option>
</select>
<button class="btn btn-secondary clear-btn" id="clear-filters">Clear Filters</button>
</div>
</div>
<div id="course-chips" class="filter-chips-row">
<button class="chip active" data-filter="all">All Courses</button>
<button class="chip" data-filter="Auditing">Auditing</button>
<button class="chip" data-filter="Intro to Project Management">Project Management</button>
<button class="chip" data-filter="Advanced Financial Reporting">Adv. Financial Reporting</button>
<button class="chip" data-filter="Corporate Financial Analysis">Corporate Finance</button>
<button class="chip" data-filter="Entrepreneurship">Entrepreneurship</button>
<button class="chip" data-filter="Investment Management">Investment Management</button>
</div>
</div>"""

if old_filter_html in html:
    html = html.replace(old_filter_html, new_filter_html)
else:
    print("Warning: old_filter_html not found perfectly. Trying regex.")
    html = re.sub(r'<div class="filter-section" id="filter-bar".*?</div>\s*</div>', new_filter_html, html, flags=re.DOTALL)

with open(r'c:\Users\avorx\OneDrive\Desktop\philipexamprep\index.html', 'w', encoding='utf-8') as f:
    f.write(html)
    
print("Updated index.html HTML structure.")
