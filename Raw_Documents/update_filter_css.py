import os

with open(r'c:\Users\avorx\OneDrive\Desktop\philipexamprep\styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

new_css = """
/* ===================== */
/* FILTER BAR STYLES     */
/* ===================== */
#filter-bar {
    margin-bottom: 3rem;
    background: var(--glass-bg);
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid var(--glass-border);
    position: sticky;
    top: 80px;
    z-index: 90;
    backdrop-filter: blur(15px);
}

.filter-controls-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
}

.filter-search-col {
    flex: 1;
    min-width: 250px;
}

#search-input {
    width: 100%;
    padding: 0.8rem 1rem;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.1);
    background: rgba(0,0,0,0.5);
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
}

.filter-actions-col {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
}

#year-filter {
    padding: 0.8rem 1rem;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.1);
    background: rgba(0,0,0,0.5);
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
}

.clear-btn {
    padding: 0.8rem 1.5rem;
}

.filter-chips-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
}

/* Tablet: 641px to 1024px */
@media (max-width: 1024px) {
    #filter-bar {
        padding: 1rem;
    }
}

/* Mobile: max-width 640px */
@media (max-width: 640px) {
    #filter-bar {
        position: relative; /* Remove sticky */
        top: 0;
        padding: 12px;
        margin-bottom: 24px;
    }

    .filter-controls-row {
        flex-direction: column;
        align-items: stretch;
        gap: 12px;
    }
    
    .filter-search-col {
        min-width: 100%;
    }
    
    .filter-actions-col {
        flex-direction: column;
        align-items: stretch;
        gap: 12px;
    }

    #search-input, #year-filter {
        font-size: 14px;
        padding: 0.6rem 0.8rem;
    }
    
    .clear-btn {
        padding: 0.6rem 1rem;
        font-size: 14px;
        width: 100%;
    }

    .filter-chips-row {
        gap: 6px;
        margin-top: 12px;
    }
    
    .chip {
        font-size: 12px;
        padding: 0.4rem 0.8rem;
    }
}
"""

# Append to styles.css
css += "\n" + new_css

with open(r'c:\Users\avorx\OneDrive\Desktop\philipexamprep\styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated styles.css with filter bar rules.")
