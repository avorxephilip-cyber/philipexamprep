with open('index.html','r',encoding='utf-8') as f:
    content = f.read()

# Find and replace the Coming Soon Unit 1 card for Corporate Financial Analysis
marker = 'Unit 1'
corp_section_start = content.find('<!-- Corporate Financial Analysis -->')
if corp_section_start == -1:
    print('Section marker not found')
else:
    # Find the first anchor that is "Coming Soon" after the corporate section marker
    search_from = corp_section_start
    old_start = content.find('href="#" class="exam-card" style="opacity: 0.65; pointer-events: none;"', search_from)
    old_end = content.find('</a>', old_start) + 4
    old_block = content[old_start - 12 : old_end]
    print("OLD BLOCK FOUND:")
    print(repr(old_block[:300]))

    new_block = '''<a href="exams/2025_Corporate_Financial_Analysis_Q1.html" class="exam-card">
                <span class="exam-badge">New</span>
                <div class="exam-icon" style="color:#f472b6; border-color:rgba(244,114,182,0.3); background:rgba(244,114,182,0.08);">\U0001f4c8</div>
                <h3>2025 Corporate Financial Analysis Q1</h3>
                <p>AA Limited &mdash; Free Cash Flow Model, NPV, Tax Depreciation &amp; Terminal Value (Gordon Growth Model).</p>
                <div class="exam-year" style="font-size: 2rem;">25</div>
            </a>'''

    new_content = content[:old_start - 12] + new_block + content[old_end:]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('SUCCESS')
