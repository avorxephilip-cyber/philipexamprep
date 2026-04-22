// Support Session Widget for Philip Exam Prep
document.addEventListener("DOMContentLoaded", () => {
    // Inject the widget HTML
    const supportHTML = `
        <style>
            @keyframes slideInUp {
                from { transform: translateY(100px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @keyframes pulseGlow {
                0% { box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 0 0 rgba(16,185,129,0.3); }
                70% { box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 0 8px rgba(16,185,129,0); }
                100% { box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 0 0 rgba(16,185,129,0); }
            }
            #floating-support {
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
                animation: slideInUp 0.5s ease-out, pulseGlow 3s infinite;
                cursor: grab;
                user-select: none;
                touch-action: none;
                transition: box-shadow 0.3s ease;
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
            .support-icon {
                font-size: 1.5rem; 
                margin-bottom: 2px;
            }
            .support-title {
                font-size: 0.95rem;
            }
            .support-desc {
                font-size: 0.8rem; 
                margin: 0; 
                line-height: 1.4; 
                opacity: 0.9;
            }
            .support-momo {
                background: rgba(0,0,0,0.2); 
                border-radius: 6px; 
                padding: 8px; 
                margin-top: 4px; 
                font-weight: 700; 
                font-size: 0.95rem; 
                letter-spacing: 0.5px;
            }
            .support-name {
                font-size: 0.75rem; 
                font-weight: normal; 
                margin-top: 2px; 
                opacity: 0.8;
            }
            
            /* Smaller screens (Phones) */
            @media (max-width: 768px) {
                #floating-support {
                    bottom: 15px;
                    right: 15px;
                    max-width: 170px;
                    padding: 10px 12px;
                    gap: 4px;
                }
                .support-icon {
                    font-size: 1.2rem;
                    margin-bottom: 0px;
                }
                .support-title {
                    font-size: 0.85rem;
                }
                .support-desc {
                    display: none; /* Hide the long text on phones to save space */
                }
                .support-momo {
                    padding: 6px;
                    font-size: 0.85rem;
                    margin-top: 2px;
                }
                .support-name {
                    font-size: 0.7rem;
                }
            }
        </style>
        
        <div id="floating-support">
            <div class="drag-handle-indicator"></div>
            <div class="support-icon">&#128154;</div>
            <strong class="support-title">Support Our Work</strong>
            <p class="support-desc">Help keep the website running and materials easily accessible!</p>
            <div class="support-momo">
                Momo: 0595163974
                <div class="support-name">Philip</div>
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
