import io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Replace lines 217 (0-indexed) onwards — the entire Corporate section grid (lines 218-232 in 1-indexed = indices 217-231)
new_section = '''        <div class="exams-grid" style="margin-bottom: 5rem;">

            <!-- 2025 Corporate Financial Analysis Q1 — Question & Solution card -->
            <a href="exams/2025_Corporate_Financial_Analysis_Q1.html" class="exam-card">
                <span class="exam-badge">New</span>
                <div class="exam-icon" style="color:#f472b6; border-color:rgba(244,114,182,0.3); background:rgba(244,114,182,0.08);">&#x1F4C4;</div>
                <h3>2025 Corporate Financial Analysis &mdash; Q1</h3>
                <p>AA Limited &mdash; Free Cash Flow Model: Full question &amp; step-by-step solution. NPV, Tax Depreciation Schedule &amp; Terminal Value (Gordon Growth Model).</p>
                <div class="exam-year" style="font-size: 2rem;">25</div>
            </a>

            <!-- Placeholder -->
            <a href="#" class="exam-card" style="opacity: 0.65; pointer-events: none;">
                <span class="exam-badge">Coming Soon</span>
                <div class="exam-icon" style="color:#f472b6; border-color:rgba(244,114,182,0.3); background:rgba(244,114,182,0.08);">&#x1F4C9;</div>
                <h3>Unit 4 &mdash; Corporate Distress Analysis</h3>
                <p>Causes, indicators, and analysis of corporate financial failure. Materials being prepared.</p>
                <div class="exam-year" style="font-size: 2rem;">U4</div>
            </a>
        </div>
'''

# Find the line with the exams-grid opening for corporate section (line 217, 0-indexed 216)
# and replace through the closing div (line 232, 0-indexed 231)
start_idx = 216   # 0-indexed line 217 (the <div class="exams-grid" line)
end_idx   = 231   # 0-indexed line 232 (the </div> that closes it)

new_lines = lines[:start_idx] + [new_section] + lines[end_idx+1:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print('SUCCESS — Corporate Financial Analysis card updated cleanly')
