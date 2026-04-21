import re

with open(r'C:\Users\avorx\OneDrive\Desktop\philipexamprep\quiz.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Add preamble box
preamble_html = """
    <div class="preamble-box" id="preamble-box" style="display:none; background: var(--surface-2); border-left: 4px solid var(--gold); padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; font-style: italic; color: #d4d4d8; font-size: 0.95rem; line-height: 1.6;">
        <div style="font-weight: bold; color: var(--gold); margin-bottom: 0.5rem; font-size: 0.8rem; text-transform: uppercase;">Scenario / Preamble</div>
        <div id="preamble-text"></div>
    </div>
"""
html = html.replace('<div class="question-card">', preamble_html + '\n    <div class="question-card">')

# 2. Add Exam Trial button
trial_btn_html = """
    <div class="section-label">Special Trial</div>
    <div style="margin-bottom: 2rem;">
        <button onclick="startExamTrial()" style="width: 100%; padding: 1.2rem; border-radius: 12px; background: linear-gradient(135deg, var(--gold), #d97706); color: #000; font-family: 'Inter', sans-serif; font-size: 1.1rem; font-weight: 800; border: none; cursor: pointer; box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3); transition: transform 0.2s;">
            🎯 Advance Financial Reporting Pasco 2025 Trial
        </button>
    </div>
"""
html = html.replace('<div class="section-label">Select Course(s)</div>', trial_btn_html + '\n    <div class="section-label">Select Course(s)</div>')

# 3. Modify Javascript for Exam Trial and Preamble and Logic
js_additions = """
let isExamTrial = false;

function startExamTrial() {
    isExamTrial = true;
    selectedTimer = 0; // No limit for trial usually, or maybe 60s? Let's use whatever is selected or no limit
    // Actually, let's just use what they selected in the timer grid
    lastConfig = { courses: ['acc402d'], timer: selectedTimer, trial: true };
    
    // Select ALL 20 questions in order
    if (QUIZ_DATA['acc402d']) {
        questions = [...QUIZ_DATA['acc402d'].questions];
    } else {
        alert("Trial data not loaded!");
        return;
    }
    
    currentQ = 0; score = 0; streak = 0; bestStreak = 0;
    document.getElementById('lobby').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    renderQuestion();
}
"""

html = html.replace('let answered = false;', 'let answered = false;\n' + js_additions)

# Fix buildQuestions for normal start Quiz
html = html.replace('lastConfig = { courses: [...selectedCourses], timer: selectedTimer };', 'isExamTrial = false;\n    lastConfig = { courses: [...selectedCourses], timer: selectedTimer, trial: false };')

# Fix renderQuestion to support preamble
render_q_replace = """
    if (q.preamble && q.preamble.trim() !== '') {
        document.getElementById('preamble-box').style.display = 'block';
        document.getElementById('preamble-text').textContent = q.preamble;
    } else {
        document.getElementById('preamble-box').style.display = 'none';
    }
"""
html = html.replace("document.getElementById('question-text').textContent = q.q;", "document.getElementById('question-text').textContent = q.q;\n" + render_q_replace)

# Fix selectAnswer for trial logic: auto move on if right
select_answer_original = """    if (selected === q.answer) {
        score++;
        streak++;
        if (streak > bestStreak) bestStreak = streak;
    } else {
        btn.classList.add('wrong');
        streak = 0;
    }
    document.getElementById('score-pill').textContent = `Score: ${score}`;
    document.getElementById('streak-pill').textContent = `\\uD83D\\uDD25 Streak: ${streak}`;
    showExplanation(q.explanation);
    document.getElementById('next-btn').style.display = 'block';"""

select_answer_new = """    if (selected === q.answer) {
        score++;
        streak++;
        if (streak > bestStreak) bestStreak = streak;
        document.getElementById('score-pill').textContent = `Score: ${score}`;
        document.getElementById('streak-pill').textContent = `\\uD83D\\uDD25 Streak: ${streak}`;
        
        // Auto move on if right
        setTimeout(() => {
            nextQuestion();
        }, 800);
    } else {
        btn.classList.add('wrong');
        streak = 0;
        document.getElementById('score-pill').textContent = `Score: ${score}`;
        document.getElementById('streak-pill').textContent = `\\uD83D\\uDD25 Streak: ${streak}`;
        showExplanation(q.explanation);
        document.getElementById('next-btn').style.display = 'block';
    }"""

html = html.replace(select_answer_original, select_answer_new)

# Fix autoFail
html = html.replace("showExplanation(q.explanation);", "if(q.explanation) { showExplanation(q.explanation); }")

with open(r'C:\Users\avorx\OneDrive\Desktop\philipexamprep\quiz.html', 'w', encoding='utf-8') as f:
    f.write(html)
