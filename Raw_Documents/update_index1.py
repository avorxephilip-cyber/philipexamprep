import re
from bs4 import BeautifulSoup

with open(r'c:\Users\avorx\OneDrive\Desktop\philipexamprep\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

# 1. Update Hero
hero = soup.find('section', class_='hero')
if hero:
    hero_h1 = hero.find('h1')
    if hero_h1:
        hero_h1.string = "Master Your UCC BCom Exams Across "
        span = soup.new_tag('span')
        span.string = "Multiple Courses"
        hero_h1.append(span)
        
    hero_p = hero.find('p')
    if hero_p:
        hero_p.string = "Past exam solutions, model answers, and practice quizzes for Auditing, Financial Reporting, Entrepreneurship, Project Management, and more. Tailored for University of Cape Coast (UCC) students."

    # Add stat badges
    stats_div = soup.new_tag('div', **{'class': 'hero-stats', 'style': 'display: flex; gap: 1rem; justify-content: center; margin-bottom: 2rem; transform: translateY(20px); opacity: 0; animation: fadeUp 0.8s ease forwards 0.7s;'})
    
    badge1 = soup.new_tag('div', style='background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 0.5rem 1rem; border-radius: 50px; font-size: 0.9rem; font-weight: 600;')
    badge1.string = "📚 25+ Solutions Available"
    
    badge2 = soup.new_tag('div', style='background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 0.5rem 1rem; border-radius: 50px; font-size: 0.9rem; font-weight: 600;')
    badge2.string = "🎓 6 Courses Covered"
    
    stats_div.append(badge1)
    stats_div.append(badge2)
    
    hero_buttons = hero.find('div', class_='hero-buttons')
    if hero_buttons:
        hero_buttons.insert_before(stats_div)


# Add data attributes to existing cards
course_headings = soup.find_all('h3', style=lambda value: value and 'font-size: 1.8rem' in value and 'border-bottom' in value)
for heading in course_headings:
    course_name = heading.get_text(strip=True)
    grid = heading.find_next_sibling('div', class_='exams-grid')
    if grid:
        for card in grid.find_all('a', class_='exam-card'):
            card['data-course'] = course_name
            # extract year
            year_div = card.find('div', class_='exam-year')
            if year_div:
                year_text = year_div.get_text(strip=True)
                if year_text.isdigit():
                    if len(year_text) == 2:
                        card['data-year'] = "20" + year_text
                    else:
                        card['data-year'] = year_text
                else:
                    card['data-year'] = year_text # U1, Q1, etc.
                    
            # 4. Handle "Awaiting solution" cards
            card_p = card.find('p')
            if card_p and ('Awaiting solution' in card_p.get_text() or 'Materials being prepared' in card_p.get_text()):
                card['style'] = card.get('style', '') + ' opacity: 0.7;'
                card_title = card.find('h3').get_text(strip=True) if card.find('h3') else 'this solution'
                
                # Replace text
                new_p_html = card_p.get_text().replace('Awaiting solution.', '').replace('Awaiting solution', '').replace('Materials being prepared.', '').strip()
                card_p.clear()
                card_p.append(new_p_html + " ")
                
                notify_btn = soup.new_tag('a', href=f"mailto:avorxephilip@gmail.com?subject=Notify me when {card_title} is ready", **{'class': 'notify-btn'})
                notify_btn.string = "🔔 Notify me when ready"
                card_p.append(soup.new_tag('br'))
                card_p.append(soup.new_tag('br'))
                card_p.append(notify_btn)

# 2. Search and Filter Bar
filter_html = """
<div id="filter-bar" class="filter-section" style="margin-bottom: 3rem; background: var(--glass-bg); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--glass-border); position: sticky; top: 80px; z-index: 90; backdrop-filter: blur(15px);">
    <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; justify-content: space-between;">
        <div style="flex: 1; min-width: 250px;">
            <input type="text" id="search-input" placeholder="🔍 Search solutions by title or keyword..." style="width: 100%; padding: 0.8rem 1rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.5); color: #fff; font-family: 'Inter', sans-serif;">
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
            <button id="clear-filters" class="btn btn-secondary" style="padding: 0.8rem 1.5rem;">Clear Filters</button>
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
</div>
"""
materials_section = soup.find('section', id='materials')
if materials_section:
    materials_header = materials_section.find('div', class_='section-header')
    if materials_header:
        filter_soup = BeautifulSoup(filter_html, 'html.parser')
        materials_header.insert_after(filter_soup)


# 3. Recently Updated Section
recently_updated_html = """
<section id="recently-updated" style="padding-top: 2rem; padding-bottom: 2rem;">
    <div class="section-header" style="margin-bottom: 2rem;">
        <h2 class="section-title" style="font-size: 2rem;">Recently <span>Updated</span></h2>
    </div>
    <div class="exams-grid" id="recent-grid">
        <!-- Cards will be cloned here -->
    </div>
</section>
"""
quiz_banner = soup.find('section', id='quiz-banner')
if quiz_banner:
    recent_soup = BeautifulSoup(recently_updated_html, 'html.parser')
    quiz_banner.insert_before(recent_soup)

# We will populate the #recent-grid later with JS or we can do it here by copying 4 specific cards.
# Let's copy them now.
recent_grid = soup.find('div', id='recent-grid')
if recent_grid:
    cards_to_copy = [
        ('2026 Campus Audit Exam', 'Auditing'),
        ('2025 Exam Solutions', 'Auditing'),
        ('2025 Entrepreneurship', 'Entrepreneurship'),
        ('2025 Corporate Financial Analysis', 'Corporate Financial Analysis')
    ]
    for card_h3, course_name in cards_to_copy:
        # find the card
        found = False
        for card in soup.find_all('a', class_='exam-card'):
            if card.find('h3') and card_h3 in card.find('h3').get_text():
                clone = BeautifulSoup(str(card), 'html.parser').find('a')
                recent_grid.append(clone)
                found = True
                break

# 5. Email Capture & 6. Trust Signals
trust_email_html = """
<section id="trust-email" style="padding-top: 2rem; padding-bottom: 4rem;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem;">
        
        <!-- Trust Signals -->
        <div class="info-card" style="padding: 2rem;">
            <h3><span style="font-size: 1.5rem; margin-right: 10px;">💡</span> How to use this site</h3>
            <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.5rem;">
                <div style="display: flex; align-items: flex-start; gap: 1rem;">
                    <div style="font-size: 1.8rem; background: rgba(16,185,129,0.1); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 12px; color: var(--primary);">1</div>
                    <div>
                        <strong style="color: #fff; font-size: 1.1rem;">Browse Materials</strong>
                        <p style="margin-bottom: 0; font-size: 0.9rem;">Find your course and year in the comprehensive archive.</p>
                    </div>
                </div>
                <div style="display: flex; align-items: flex-start; gap: 1rem;">
                    <div style="font-size: 1.8rem; background: rgba(251,191,36,0.1); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 12px; color: var(--accent);">2</div>
                    <div>
                        <strong style="color: #fff; font-size: 1.1rem;">Study the Solutions</strong>
                        <p style="margin-bottom: 0; font-size: 0.9rem;">Review step-by-step model answers and deep explanations.</p>
                    </div>
                </div>
                <div style="display: flex; align-items: flex-start; gap: 1rem;">
                    <div style="font-size: 1.8rem; background: rgba(16,185,129,0.1); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 12px; color: var(--primary);">3</div>
                    <div>
                        <strong style="color: #fff; font-size: 1.1rem;">Practice with Quiz</strong>
                        <p style="margin-bottom: 0; font-size: 0.9rem;">Test your knowledge in the interactive Quiz Mode.</p>
                    </div>
                </div>
            </div>
            
            <!-- Placeholder for Testimonials
            <div style="margin-top: 3rem;">
                <h4>What Students Say</h4>
                <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                    <p style="font-style: italic; font-size: 0.9rem;">"This site saved my auditing grade!" - John D.</p>
                </div>
            </div>
            -->
        </div>

        <!-- Email Capture -->
        <div class="info-card" style="padding: 2rem; border-color: rgba(251,191,36,0.3); background: linear-gradient(180deg, rgba(251,191,36,0.05) 0%, transparent 100%);">
            <h3><span style="font-size: 1.5rem; margin-right: 10px;">📬</span> Stay Updated</h3>
            <p>Get notified immediately when new exam solutions, study guides, and quiz updates drop. No spam, ever.</p>
            
            <form action="https://formspree.io/f/YOUR_ENDPOINT" method="POST" style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
                <label style="display: none;" for="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Your best email address" required style="width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.5); color: #fff; font-family: 'Inter', sans-serif;">
                <button type="submit" class="btn btn-primary" style="width: 100%;">Subscribe</button>
            </form>
        </div>

    </div>
</section>
"""

contact_section = soup.find('section', id='contact')
if contact_section:
    trust_email_soup = BeautifulSoup(trust_email_html, 'html.parser')
    contact_section.insert_after(trust_email_soup)


with open(r'c:\Users\avorx\OneDrive\Desktop\philipexamprep\index.html', 'w', encoding='utf-8') as f:
    f.write(str(soup))

print("Modified index.html")
