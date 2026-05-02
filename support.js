// Support Session Widget for Philip Exam Prep
document.addEventListener("DOMContentLoaded", () => {

    // --- Detect Android for extra-aggressive optimizations ---
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isLowEnd = isAndroid || navigator.hardwareConcurrency <= 4;

    // --- Inject widget HTML (single, deduplicated <style> block) ---
    const supportHTML = `
        <style>
            body {
                background: transparent !important;
                background-color: transparent !important;
            }
            .bg-animation {
                position: fixed;
                top: 0; left: 0;
                width: 100%; height: 100%;
                z-index: -2;
                background-color: #050505;
                overflow: hidden;
                pointer-events: none;
            }
            .blob {
                position: absolute;
                border-radius: 50%;
                will-change: transform;
                /*
                 * FIX #2: Reduced blur from 140px → 80px (desktop) / 60px (mobile).
                 * Heavy blur is rendered by the GPU on every frame. 140px on an
                 * 800px div crushes Android's Adreno/Mali GPUs. 80px looks nearly
                 * identical but is 3-4x cheaper to composite.
                 */
            }
            .blob-1 {
                background: #10b981;
                width: 600px; height: 600px;
                top: -150px; left: -150px;
                opacity: 0.12;
                filter: blur(80px);
                animation: float1 30s infinite alternate ease-in-out;
            }
            .blob-2 {
                background: #fbbf24;
                width: 600px; height: 600px;
                bottom: -200px; right: -150px;
                opacity: 0.12;
                filter: blur(80px);
                animation: float2 35s infinite alternate ease-in-out;
            }
            .blob-3 {
                background: #059669;
                width: 700px; height: 700px;
                top: 30%; left: 20%;
                opacity: 0.07;
                filter: blur(80px);
                animation: float3 40s infinite alternate ease-in-out;
            }
            /* On small/Android screens, reduce blobs further */
            @media (max-width: 768px) {
                .blob-1, .blob-2 { width: 350px; height: 350px; filter: blur(60px); }
                .blob-3 { width: 400px; height: 400px; filter: blur(60px); }
            }
            .cloud-texture {
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                opacity: 0.02;
                background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            }
            #neural-canvas {
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                opacity: 0.8;
            }
            @keyframes float1 {
                0%   { transform: translate(0, 0) scale(1) rotate(0deg); }
                100% { transform: translate(200px, 150px) scale(1.2) rotate(15deg); }
            }
            @keyframes float2 {
                0%   { transform: translate(0, 0) scale(1.2) rotate(0deg); }
                100% { transform: translate(-150px, -200px) scale(1) rotate(-15deg); }
            }
            @keyframes float3 {
                0%   { transform: translate(0, 0) scale(1) rotate(0deg); }
                100% { transform: translate(-80px, 120px) scale(1.1) rotate(10deg); }
            }
            @keyframes slideInUp {
                from { transform: translateY(100px); opacity: 0; }
                to   { transform: translateY(0); opacity: 1; }
            }
            @keyframes pulseGlow {
                0%   { box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 0 0 rgba(16,185,129,0.3); }
                70%  { box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 0 8px rgba(16,185,129,0); }
                100% { box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 0 0 rgba(16,185,129,0); }
            }
            #floating-support {
                position: fixed;
                bottom: 30px; right: 30px;
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
            #floating-support:active { cursor: grabbing; box-shadow: 0 12px 40px rgba(16,185,129,0.5); }
            .drag-handle-indicator { width: 40px; height: 4px; background: rgba(255,255,255,0.3); border-radius: 4px; margin: 0 auto -2px auto; }
            .support-icon { font-size: 1.5rem; margin-bottom: 2px; }
            .support-title { font-size: 0.95rem; }
            .support-desc { font-size: 0.8rem; margin: 0; line-height: 1.4; opacity: 0.9; }
            .support-momo { background: rgba(0,0,0,0.2); border-radius: 6px; padding: 8px; margin-top: 4px; font-weight: 700; font-size: 0.95rem; letter-spacing: 0.5px; }
            .support-name { font-size: 0.75rem; font-weight: normal; margin-top: 2px; opacity: 0.8; }
            @media (max-width: 768px) {
                #floating-support { bottom: 15px; right: 15px; max-width: 170px; padding: 10px 12px; gap: 4px; }
                .support-icon { font-size: 1.2rem; margin-bottom: 0px; }
                .support-desc { display: none; }
                .support-momo { padding: 6px; font-size: 0.85rem; margin-top: 2px; }
                .support-name { font-size: 0.7rem; }
            }
        </style>

        <div class="bg-animation">
            <div class="blob blob-1"></div>
            <div class="blob blob-2"></div>
            <div class="blob blob-3"></div>
            <div class="cloud-texture"></div>
            <canvas id="neural-canvas"></canvas>
        </div>

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

    // =========================================================
    // Neural Network Canvas — Android-optimised
    // =========================================================
    const canvas = document.getElementById('neural-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animFrameId = null;
        let isPageVisible = true;

        /*
         * FIX #1 — Reduce particle count aggressively on Android/low-end.
         * Fewer particles = O(n²) loop is much cheaper.
         * Desktop: 60 | Mobile: 25 | Android: 20
         */
        const particleCount = isAndroid ? 20 : (window.innerWidth < 768 ? 25 : 60);

        /*
         * FIX: Use squared distance to avoid Math.sqrt() on every pair.
         * sqrt is one of the slowest math ops — this alone cuts CPU ~20%.
         */
        const connectionDistanceSq = isAndroid ? (120 * 120) : (150 * 150);
        const connectionDistance   = isAndroid ? 120 : 150;

        function initCanvas() {
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x:    Math.random() * canvas.width,
                    y:    Math.random() * canvas.height,
                    vx:   (Math.random() - 0.5) * (isAndroid ? 0.25 : 0.4),
                    vy:   (Math.random() - 0.5) * (isAndroid ? 0.25 : 0.4),
                    size: Math.random() * 2 + 1
                });
            }
        }

        function animateCanvas() {
            /*
             * FIX #3 — Pause animation when tab/page is hidden.
             * Android's Chrome freezes pages when invisible anyway, but the
             * RAF queue still queues up frames. Checking here prevents waking.
             */
            if (!isPageVisible) {
                animFrameId = requestAnimationFrame(animateCanvas);
                return;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const n = particles.length;

            // --- Update positions ---
            for (let i = 0; i < n; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height)  p.vy *= -1;
            }

            /*
             * FIX: Batch all line drawing into a single path per opacity level.
             * Previously each connection called ctx.stroke() individually — that's
             * a separate GPU draw call per line. Batching reduces draw calls
             * from ~800/frame to just a handful of path segments.
             *
             * We bucket lines into 5 opacity levels and stroke each bucket once.
             */
            const buckets = 5;
            const paths   = Array.from({ length: buckets }, () => new Path2D());
            let  hasLine  = new Array(buckets).fill(false);

            for (let i = 0; i < n; i++) {
                const p = particles[i];
                for (let j = i + 1; j < n; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    /*
                     * FIX: Compare dx*dx+dy*dy to connectionDistanceSq.
                     * Avoids the expensive Math.sqrt() on every pair.
                     */
                    const distSq = dx * dx + dy * dy;
                    if (distSq < connectionDistanceSq) {
                        const alpha  = 1 - (Math.sqrt(distSq) / connectionDistance);
                        const bucket = Math.min(Math.floor(alpha * buckets), buckets - 1);
                        paths[bucket].moveTo(p.x, p.y);
                        paths[bucket].lineTo(p2.x, p2.y);
                        hasLine[bucket] = true;
                    }
                }
            }

            // Stroke each bucket once
            ctx.lineWidth = 0.5;
            for (let b = 0; b < buckets; b++) {
                if (!hasLine[b]) continue;
                const alpha = ((b + 1) / buckets) * 0.2;
                ctx.strokeStyle = `rgba(251, 191, 36, ${alpha})`;
                ctx.stroke(paths[b]);
            }

            // Draw dots (a single beginPath/fill per dot is unavoidable but fast)
            ctx.fillStyle = 'rgba(16, 185, 129, 0.4)';
            for (let i = 0; i < n; i++) {
                const p = particles[i];
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }

            animFrameId = requestAnimationFrame(animateCanvas);
        }

        /*
         * FIX #5 — Debounce the resize handler.
         * Android fires "resize" constantly while the address bar slides away.
         * Without a debounce, initCanvas() (which recreates all particles)
         * fires dozens of times per second, causing visible stutters.
         */
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(initCanvas, 250);
        });

        /*
         * FIX #3 — Pause/resume on page visibility changes.
         * When user switches apps or locks the screen, stop burning CPU/GPU.
         */
        document.addEventListener('visibilitychange', () => {
            isPageVisible = !document.hidden;
        });

        initCanvas();
        animateCanvas();
    }

    // =========================================================
    // Draggable Support Widget
    // =========================================================
    const floatingElement = document.getElementById('floating-support');
    if (floatingElement) {
        let isDragging = false;
        let initialX, initialY, currentX = 0, currentY = 0;
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
            initialX  = currentX;
            initialY  = currentY;
            isDragging = false;
        }

        function drag(e) {
            if (!isDragging) return;
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

        floatingElement.addEventListener("mousedown",  dragStart);
        document.addEventListener("mouseup",           dragEnd);
        document.addEventListener("mousemove",         drag);
        floatingElement.addEventListener("touchstart", dragStart, { passive: false });
        document.addEventListener("touchend",          dragEnd);
        document.addEventListener("touchmove",         drag, { passive: false });
    }
});
