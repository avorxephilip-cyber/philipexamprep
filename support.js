// Support Session Widget for Philip Exam Prep
document.addEventListener("DOMContentLoaded", () => {
    // Inject the widget HTML
    const supportHTML = `
        <style>
            /* Site-wide Background Animation */
            body {
                background: transparent !important;
                background-color: transparent !important;
            }
            .bg-animation {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -2;
                background-color: #050505; 
                overflow: hidden;
                pointer-events: none;
            }
            .blob {
                position: absolute;
                width: 800px;
                height: 800px;
                filter: blur(140px);
                border-radius: 50%;
                opacity: 0.15;
                will-change: transform;
            }
            .blob-1 {
                background: #10b981; /* Emerald */
                top: -200px;
                left: -200px;
                animation: float1 30s infinite alternate ease-in-out;
            }
            .blob-2 {
                background: #fbbf24; /* Gold */
                bottom: -250px;
                right: -200px;
                animation: float2 35s infinite alternate ease-in-out;
            }
            .blob-3 {
                background: #059669; /* Deep Emerald */
                top: 30%;
                left: 20%;
                width: 900px;
                height: 900px;
                opacity: 0.1;
                animation: float3 40s infinite alternate ease-in-out;
            }
            @keyframes float1 {
                0% { transform: translate(0, 0) scale(1) rotate(0deg); }
                100% { transform: translate(200px, 150px) scale(1.2) rotate(15deg); }
            }
            @keyframes float2 {
                0% { transform: translate(0, 0) scale(1.2) rotate(0deg); }
                100% { transform: translate(-150px, -200px) scale(1) rotate(-15deg); }
            }
            @keyframes float3 {
                0% { transform: translate(0, 0) scale(1) rotate(0deg); }
                100% { transform: translate(-80px, 120px) scale(1.1) rotate(10deg); }
            }

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
        
        <div class="bg-animation">
            <div class="blob blob-1"></div>
            <div class="blob blob-2"></div>
            <div class="blob blob-3"></div>
            <div class="cloud-texture"></div>
            <canvas id="neural-canvas"></canvas>
        </div>

        <style>
            /* Site-wide Background Animation */
            body {
                background: transparent !important;
                background-color: transparent !important;
            }
            .bg-animation {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -2;
                background-color: #050505; 
                overflow: hidden;
                pointer-events: none;
            }
            .blob {
                position: absolute;
                width: 800px;
                height: 800px;
                filter: blur(140px);
                border-radius: 50%;
                opacity: 0.08; /* Slightly dimmed for better content contrast */
                will-change: transform;
            }
            .blob-1 {
                background: #10b981; /* Emerald */
                top: -200px;
                left: -200px;
                animation: float1 30s infinite alternate ease-in-out;
            }
            .blob-2 {
                background: #fbbf24; /* Gold */
                bottom: -250px;
                right: -200px;
                animation: float2 35s infinite alternate ease-in-out;
            }
            .blob-3 {
                background: #059669; /* Deep Emerald */
                top: 30%;
                left: 20%;
                width: 900px;
                height: 900px;
                opacity: 0.05;
                animation: float3 40s infinite alternate ease-in-out;
            }
            /* Cloudy Texture Overlay */
            .cloud-texture {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0.02; /* Dimmed the cloud to not wash out content */
                background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            }
            #neural-canvas {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0.8; /* Made neurals much more visible */
            }
            @keyframes float1 {
                0% { transform: translate(0, 0) scale(1) rotate(0deg); }
                100% { transform: translate(200px, 150px) scale(1.2) rotate(15deg); }
            }
            @keyframes float2 {
                0% { transform: translate(0, 0) scale(1.2) rotate(0deg); }
                100% { transform: translate(-150px, -200px) scale(1) rotate(-15deg); }
            }
            @keyframes float3 {
                0% { transform: translate(0, 0) scale(1) rotate(0deg); }
                100% { transform: translate(-80px, 120px) scale(1.1) rotate(10deg); }
            }

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

    // Neural Network Background Logic
    const canvas = document.getElementById('neural-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        const particleCount = window.innerWidth < 768 ? 40 : 80;
        const connectionDistance = 150;

        function initCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4,
                    size: Math.random() * 2 + 1
                });
            }
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(16, 185, 129, 0.4)'; // Increased Emerald visibility
                ctx.fill();
                
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        const alpha = 1 - (dist / connectionDistance);
                        ctx.strokeStyle = `rgba(251, 191, 36, ${alpha * 0.2})`; // Increased Gold visibility
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animateCanvas);
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();
        animateCanvas();
    }

    // Draggable Logic for Support Widget
    const floatingElement = document.getElementById('floating-support');
    if (floatingElement) {
        let isDragging = false;
        let initialX, initialY, currentX, currentY;
        let xOffset = 0, yOffset = 0;

        function dragStart(e) {
            if (e.type === "touchstart") {
                initialX = e.touches[0].clientX - xOffset;
                initialY = e.touches[0].clientY - yOffset;
            } else {
                initialX = e.clientX - xOffset;
                initialY = e.clientY - yOffset;
            }
            if (floatingElement.contains(e.target)) isDragging = true;
        }

        function dragEnd() {
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
                floatingElement.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
            }
        }

        floatingElement.addEventListener("mousedown", dragStart);
        document.addEventListener("mouseup", dragEnd);
        document.addEventListener("mousemove", drag);
        floatingElement.addEventListener("touchstart", dragStart, { passive: false });
        document.addEventListener("touchend", dragEnd);
        document.addEventListener("touchmove", drag, { passive: false });
    }
});
