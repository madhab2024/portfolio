import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const framesPaths = import.meta.glob('../assets/frames/ezgif-frame-*.jpg', { eager: true, import: 'default' });
const frameUrls = Object.keys(framesPaths).sort().map(key => framesPaths[key]);
const frameCount = frameUrls.length;

const VideoBackground = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (!canvas || !context || frameCount === 0) return;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
        };

        const images = [];
        const frames = { frame: 0 }; // Float interpolation

        const render = () => {
            // Get integer part and fractional remainder for Cross-Fading!
            const currentIndex = Math.floor(frames.frame);
            const progress = frames.frame - currentIndex;
            const nextIndex = Math.min(currentIndex + 1, frameCount - 1);

            const img1 = images[currentIndex];
            const img2 = images[nextIndex];

            if (!img1 || !img1.complete || img1.naturalWidth === 0) return;
            
            context.clearRect(0, 0, canvas.width, canvas.height);
            
            const imgRatio = img1.naturalWidth / img1.naturalHeight;
            const canvasRatio = canvas.width / canvas.height;
            let drawWidth, drawHeight, offsetX, offsetY;
            
            if (canvasRatio > imgRatio) {
                drawWidth = canvas.width;
                drawHeight = canvas.width / imgRatio;
                offsetX = 0;
                offsetY = (canvas.height - drawHeight) / 2;
            } else {
                drawHeight = canvas.height;
                drawWidth = canvas.height * imgRatio;
                offsetX = (canvas.width - drawWidth) / 2;
                offsetY = 0;
            }
            
            // Draw current frame solidly
            context.globalAlpha = 1;
            context.drawImage(img1, offsetX, offsetY, drawWidth, drawHeight);

            // Cross-fade the next frame dynamically based on exact scroll percentage
            // This eliminates any stepping / jumping from low frame counts!
            if (progress > 0 && img2 && img2.complete) {
                context.globalAlpha = progress;
                context.drawImage(img2, offsetX, offsetY, drawWidth, drawHeight);
            }
        };

        let loadedCount = 0;
        frameUrls.forEach((url) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === 1) setCanvasSize(); // Render exactly when first image is ready!
            };
            images.push(img);
        });

        window.addEventListener('resize', setCanvasSize);

        // Do NOT use 'snap' here; we want precise floating-point decimals to drive our cross-fade mathematically.
        gsap.to(frames, {
            frame: frameCount - 1, 
            ease: "none", 
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 1 // smooth scrubbing catch-up delay
            },
            onUpdate: render
        });

        return () => {
            window.removeEventListener('resize', setCanvasSize);
        };
    }, { scope: containerRef });

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1, 
                pointerEvents: 'none', 
                background: '#050a10',
                overflow: 'hidden'
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                     width: '100%',
                     height: '100%',
                     opacity: 1 // Full opacity, 0% transparency!
                }}
            />
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                // Very light overlay just to keep text readable
                background: 'linear-gradient(to bottom, rgba(5, 10, 16, 0.1), rgba(5, 10, 16, 0.4))'
            }} />
        </div>
    );
};

export default VideoBackground;
