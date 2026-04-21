import os

with open(r'c:\Users\avorx\OneDrive\Desktop\philipexamprep\main.js', 'r', encoding='utf-8') as f:
    js_code = f.read()

filter_logic = """
    // Search and Filter Logic
    const searchInput = document.getElementById('search-input');
    const yearFilter = document.getElementById('year-filter');
    const clearFiltersBtn = document.getElementById('clear-filters');
    const chips = document.querySelectorAll('.chip');
    const allCards = document.querySelectorAll('#materials .exam-card');
    
    let currentCourseFilter = 'all';

    function filterCards() {
        if (!searchInput) return; // If filter bar isn't on this page
        
        const searchTerm = searchInput.value.toLowerCase();
        const yearTerm = yearFilter.value;
        
        allCards.forEach(card => {
            const title = (card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '');
            const desc = (card.querySelector('p') ? card.querySelector('p').textContent.toLowerCase() : '');
            const course = card.getAttribute('data-course') || '';
            const year = card.getAttribute('data-year') || '';
            
            const matchSearch = title.includes(searchTerm) || desc.includes(searchTerm);
            const matchYear = (yearTerm === 'all') || (year === yearTerm);
            
            // For course filter, allow fuzzy matching or exact matching
            let matchCourse = (currentCourseFilter === 'all');
            if (!matchCourse) {
                matchCourse = course.toLowerCase().includes(currentCourseFilter.toLowerCase());
            }
            
            if (matchSearch && matchYear && matchCourse) {
                card.style.display = 'block';
                // A small animation could be added here
            } else {
                card.style.display = 'none';
            }
        });
        
        // Hide empty category headers
        const categoryHeaders = document.querySelectorAll('#materials h3');
        categoryHeaders.forEach(header => {
            const grid = header.nextElementSibling;
            if (grid && grid.classList.contains('exams-grid')) {
                // Check if any visible cards in this grid
                const visibleCards = Array.from(grid.querySelectorAll('.exam-card')).filter(c => c.style.display !== 'none');
                if (visibleCards.length === 0) {
                    header.style.display = 'none';
                    grid.style.display = 'none';
                } else {
                    header.style.display = 'block';
                    grid.style.display = 'grid'; // restore grid layout
                }
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterCards);
        yearFilter.addEventListener('change', filterCards);
        
        clearFiltersBtn.addEventListener('click', () => {
            searchInput.value = '';
            yearFilter.value = 'all';
            currentCourseFilter = 'all';
            chips.forEach(c => c.classList.remove('active'));
            document.querySelector('.chip[data-filter="all"]').classList.add('active');
            filterCards();
        });
        
        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                chips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                currentCourseFilter = chip.getAttribute('data-filter');
                filterCards();
            });
        });
    }
"""

# Inject before the last closing brace
js_code = js_code.replace("});", filter_logic + "\n});")

with open(r'c:\Users\avorx\OneDrive\Desktop\philipexamprep\main.js', 'w', encoding='utf-8') as f:
    f.write(js_code)

print("Updated main.js")
