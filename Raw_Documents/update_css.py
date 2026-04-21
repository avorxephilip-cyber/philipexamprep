import os

with open(r'c:\Users\avorx\OneDrive\Desktop\philipexamprep\styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

new_css = """
/* Filter Bar & Chips */
.filter-section {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.chip {
  padding: 0.5rem 1rem;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
}

.chip:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.chip.active {
  background: rgba(16, 185, 129, 0.2);
  border-color: var(--primary);
  color: var(--primary);
  font-weight: 600;
}

/* Notify Button */
.notify-btn {
  display: inline-block;
  padding: 0.6rem 1rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-size: 0.85rem;
  transition: all 0.2s;
  cursor: pointer;
}

.notify-btn:hover {
  background: rgba(255,255,255,0.15);
}

/* Solution Page Nav */
.breadcrumb {
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.breadcrumb a {
  color: var(--primary);
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.exam-navigation {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--glass-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.nav-btn {
  padding: 0.8rem 1.5rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.nav-btn:hover {
  background: rgba(16, 185, 129, 0.2);
  border-color: var(--primary);
  color: var(--primary);
}

.nav-btn.back {
  background: transparent;
  border: none;
  color: var(--text-muted);
}

.nav-btn.back:hover {
  color: #fff;
  background: transparent;
}
"""

css += "\n" + new_css

with open(r'c:\Users\avorx\OneDrive\Desktop\philipexamprep\styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated styles.css")
