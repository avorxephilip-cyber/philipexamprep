// Security module to deter copying, right-clicking, and basic screenshotting

document.addEventListener("DOMContentLoaded", () => {
    // 1. Disable Right Click Context Menu
    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        return false;
    });

    // 2. Disable Text Selection and Copy/Cut/Paste
    document.addEventListener("selectstart", (e) => {
        e.preventDefault();
        return false;
    });

    document.addEventListener("copy", (e) => {
        const clipboardData = e.clipboardData || window.clipboardData;
        clipboardData.setData('text/plain', 'Copying content from this site is strictly prohibited by Philip Exam Prep.');
        e.preventDefault();
        return false;
    });

    document.addEventListener("cut", (e) => {
        e.preventDefault();
        return false;
    });

    // 3. Disable specific keyboard shortcuts (Ctrl+P, Ctrl+C, Ctrl+S, Ctrl+U, PrintScreen)
    document.addEventListener("keydown", (e) => {
        if (
            (e.ctrlKey && (e.key === 'p' || e.key === 'P' || e.key === 'c' || e.key === 'C' || e.key === 's' || e.key === 'S' || e.key === 'u' || e.key === 'U')) ||
            e.key === 'PrintScreen' ||
            (e.ctrlKey && e.shiftKey && e.key === 'I') || // Dev tools
            (e.ctrlKey && e.shiftKey && e.key === 'C') || // Element inspector
            (e.ctrlKey && e.shiftKey && e.key === 'J') || // Console
            (e.key === 'F12') // F12 Dev tools
        ) {
            e.preventDefault();
            return false;
        }
    });

    // 4. "Deter" Snipping Tool & Screenshot by detecting blur (loss of focus window)
    // Create overlay
    const overlay = document.createElement("div");
    overlay.className = "security-overlay";
    overlay.innerHTML = "<p>Taking screenshots or recording is strictly prohibited.</p>";
    document.body.appendChild(overlay);

    window.addEventListener("blur", () => {
        // Show overlay when window loses focus (often happens before snipping UI appears)
        overlay.style.display = "flex";
    });

    window.addEventListener("focus", () => {
        // Hide overlay when window regains focus
        overlay.style.display = "none";
    });

    // 5. Detect and clear print media
    window.addEventListener("beforeprint", () => {
        overlay.innerHTML = "<p>Printing documents from this portal is disabled.</p>";
        overlay.style.display = "flex";
    });
    
    window.addEventListener("afterprint", () => {
        overlay.style.display = "none";
        overlay.innerHTML = "<p>Taking screenshots or recording is strictly prohibited.</p>";
    });
});
