import re

with open(r'C:\Users\avorx\OneDrive\Desktop\philipexamprep\quiz.html', 'r', encoding='utf-8') as f:
    html = f.read()

restart_original = """function restartSame() {
    questions = buildQuestions();
    currentQ = 0; score = 0; streak = 0; bestStreak = 0;
    document.getElementById('results').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    renderQuestion();
}"""

restart_new = """function restartSame() {
    if (lastConfig && lastConfig.trial) {
        questions = [...QUIZ_DATA['acc402d'].questions];
    } else {
        questions = buildQuestions();
    }
    currentQ = 0; score = 0; streak = 0; bestStreak = 0;
    document.getElementById('results').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    renderQuestion();
}"""

html = html.replace(restart_original, restart_new)

with open(r'C:\Users\avorx\OneDrive\Desktop\philipexamprep\quiz.html', 'w', encoding='utf-8') as f:
    f.write(html)
