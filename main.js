// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.05,          // Trigger when just 5% is visible (was 15%)
        rootMargin: "0px 0px 0px 0px"  // No negative margin cutting off trigger zone (was -50px)
    };
    
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);
    
    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // Immediately reveal any elements already in the viewport on page load
    // (important on mobile where content may already be visible)
    setTimeout(() => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('active');
            }
        });
    }, 100);

    // Navigation background blur on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(5, 5, 5, 0.85)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.background = 'rgba(5, 5, 5, 0.6)';
            header.style.boxShadow = 'none';
        }
    });

    // Search and Filter Logic
    const searchInput = document.getElementById('search-input');
    const searchCol = document.querySelector('.filter-search-col');
    const suggestionsContainer = document.getElementById('search-suggestions');
    const yearFilter = document.getElementById('year-filter');
    const clearFiltersBtn = document.getElementById('clear-filters');
    const chips = document.querySelectorAll('.chip');
    const allCards = document.querySelectorAll('#materials .exam-card');
    
    const searchContainer = document.querySelector('.search-container');
    
    let currentCourseFilter = 'all';

    // Sticky Search Bar
    window.addEventListener('scroll', () => {
        if (searchContainer && searchInput) {
            const filterBar = document.getElementById('filter-bar');
            if (filterBar) {
                const filterBarRect = filterBar.getBoundingClientRect();
                // When filter bar starts to scroll out of view
                if (filterBarRect.top <= 60 && window.scrollY > 0) {
                    searchContainer.classList.add('fixed-search');
                } else {
                    searchContainer.classList.remove('fixed-search');
                }
            }
        } else if (searchContainer) {
            searchContainer.classList.remove('fixed-search');
        }
    });

    function filterCards() {
        if (!searchInput) return; // If filter bar isn't on this page
        
        const searchTerm = searchInput.value.toLowerCase();
        const yearTerm = yearFilter.value;

        let exactMatches = []; // For suggestions
        
        allCards.forEach(card => {
            const titleElement = card.querySelector('h3');
            const descElement = card.querySelector('p');
            const titleText = titleElement ? titleElement.textContent : '';
            const title = titleText.toLowerCase();
            const desc = descElement ? descElement.textContent.toLowerCase() : '';
            const course = card.getAttribute('data-course') || '';
            const year = card.getAttribute('data-year') || '';
            
            const matchSearch = title.includes(searchTerm) || desc.includes(searchTerm) || course.toLowerCase().includes(searchTerm);
            const matchYear = (yearTerm === 'all') || (year === yearTerm);
            
            // For course filter, allow fuzzy matching or exact matching
            let matchCourse = (currentCourseFilter === 'all');
            if (!matchCourse) {
                matchCourse = course.toLowerCase().includes(currentCourseFilter.toLowerCase());
            }
            
            if (matchSearch && matchYear && matchCourse) {
                card.style.display = 'block';
                if (searchTerm.length > 0 && exactMatches.length < 5) {
                    exactMatches.push({title: titleText, course: course, element: card});
                }
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

        // Update suggestions
        if (searchTerm.length > 0 && suggestionsContainer && document.activeElement === searchInput) {
             if (exactMatches.length > 0) {
                  suggestionsContainer.innerHTML = exactMatches.map(match => `
                      <div class="suggestion-item">
                          <div class="suggestion-title">${match.title}</div>
                          <div class="suggestion-course">${match.course}</div>
                      </div>
                  `).join('');
                  suggestionsContainer.style.display = 'block';
                  
                  // Add click handlers
                  const items = suggestionsContainer.querySelectorAll('.suggestion-item');
                  items.forEach((item, index) => {
                       item.addEventListener('click', (e) => {
                            e.preventDefault();
                            const card = exactMatches[index].element;
                            const link = card.getAttribute('href');
                            if(link && link !== '#') {
                                window.location.href = link;
                            } else {
                                card.scrollIntoView({behavior: 'smooth', block: 'center'});
                                card.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.6)';
                                setTimeout(() => { card.style.boxShadow = ''; }, 2000);
                            }
                            suggestionsContainer.style.display = 'none';
                            searchInput.value = '';
                            filterCards();
                       });
                  });
             } else {
                  suggestionsContainer.innerHTML = `<div class="suggestion-item" style="color: var(--text-muted); cursor: default;">No exact matches found</div>`;
                  suggestionsContainer.style.display = 'block';
             }
        } else if (suggestionsContainer) {
             suggestionsContainer.style.display = 'none';
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterCards);
        searchInput.addEventListener('focus', filterCards);
        yearFilter.addEventListener('change', filterCards);
        
        document.addEventListener('click', (e) => {
             if (suggestionsContainer && !searchInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
                  suggestionsContainer.style.display = 'none';
             }
        });
        
        clearFiltersBtn.addEventListener('click', () => {
            searchInput.value = '';
            yearFilter.value = 'all';
            currentCourseFilter = 'all';
            chips.forEach(c => c.classList.remove('active'));
            document.querySelector('.chip[data-filter="all"]').classList.add('active');
            if (suggestionsContainer) suggestionsContainer.style.display = 'none';
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

});
