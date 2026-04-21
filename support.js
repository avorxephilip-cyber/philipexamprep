// Support Session Widget for Philip Exam Prep
document.addEventListener("DOMContentLoaded", () => {
    // Inject the widget HTML
    const supportHTML = `
        <div id="floating-support" style="
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: linear-gradient(135deg, rgba(16,185,129,0.9), rgba(5,150,105,0.95));
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
            padding: 15px 20px;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
            z-index: 9999;
            color: #fff;
            font-family: 'Inter', sans-serif;
            max-width: 250px;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 8px;
            animation: slideInUp 0.5s ease-out;
            cursor: grab;
            user-select: none;
            touch-action: none;
            transition: box-shadow 0.3s ease;
        ">
            <style>
                @keyframes slideInUp {
                    from { transform: translateY(100px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                #floating-support:active {
                    cursor: grabbing;
                    box-shadow: 0 12px 40px rgba(16,185,129,0.5);
                }
                .drag-handle-indicator {
                    width: 40px;
                    height: 4px;
                    background: rgba(255,255,255,0.3);
                    border-radius: 4px;
                    margin: 0 auto -2px auto;
                }
            </style>
            
            <div class="drag-handle-indicator"></div>
            <div style="font-size: 1.5rem; margin-bottom: 2px;">&#128154;</div>
            <strong style="font-size: 0.95rem;">Support Our Work</strong>
            <p style="font-size: 0.8rem; margin: 0; line-height: 1.4; opacity: 0.9;">
                Help keep the website running and materials easily accessible!
            </p>
            <div style="background: rgba(0,0,0,0.2); border-radius: 6px; padding: 8px; margin-top: 4px; font-weight: 700; font-size: 0.95rem; letter-spacing: 0.5px;">
                Momo: 0595163974
                <div style="font-size: 0.75rem; font-weight: normal; margin-top: 2px; opacity: 0.8;">Philip</div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', supportHTML);

    // Draggable Logic
    const floatingElement = document.getElementById('floating-support');
    
    let isDragging = false;
    let initialX;
    let initialY;
    let currentX;
    let currentY;
    let xOffset = 0;
    let yOffset = 0;

    function dragStart(e) {
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        if (floatingElement.contains(e.target)) {
            isDragging = true;
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();

            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, floatingElement);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }

    // Mouse events
    floatingElement.addEventListener("mousedown", dragStart);
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("mousemove", drag);

    // Touch events for mobile
    floatingElement.addEventListener("touchstart", dragStart, { passive: false });
    document.addEventListener("touchend", dragEnd);
    document.addEventListener("touchmove", drag, { passive: false });
});
