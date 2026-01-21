import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WavyBackground = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Setup
        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 20;

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        // Geometry
        const geometry = new THREE.BufferGeometry();
        const gridWidth = 50;
        const gridHeight = 30;
        const positions = [];

        // Reducing density slightly for performance in small cards
        for (let i = 0; i < gridWidth; i++) {
            for (let j = 0; j < gridHeight; j++) {
                positions.push(i - gridWidth / 2);
                positions.push(j - gridHeight / 2);
                positions.push(0);
            }
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            color: 0x6366f1, // Using primary theme color
            size: 0.2,
            transparent: true,
            opacity: 0.6
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        // Animation
        let animationFrameId;
        const mouse = { x: 0, y: 0 };

        const handleMouseMove = (event) => {
            // Calculate mouse position relative to the container
            const rect = container.getBoundingClientRect();
            // Normalized -1 to 1 based on container center
            const x = ((event.clientX - rect.left) / width) * 2 - 1;
            const y = -((event.clientY - rect.top) / height) * 2 + 1;
            mouse.x = x;
            mouse.y = y;
        };

        // Listen on window to track mouse even when outside specific card (optional choice)
        // Listening on container might be better for per-card localized effects
        // But the prompt implies a general wave logic. Let's stick to container relative for "inside" feel
        container.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            const time = performance.now() * 0.002;
            const positionsAttributes = points.geometry.attributes.position;
            const positionsArray = positionsAttributes.array;

            for (let i = 0; i < positionsArray.length; i += 3) {
                const x = positionsArray[i];
                const y = positionsArray[i + 1];

                // Mouse interaction distance in scene units
                const dx = x - mouse.x * 12; // Scaled down influence
                const dy = y - mouse.y * 12;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Wave calculation
                const wave = Math.sin(dist / 2 - time) * 1.5;
                positionsArray[i + 2] = wave;
            }

            positionsAttributes.needsUpdate = true;
            renderer.render(scene, camera);
        };

        animate();

        // Resize handler
        const handleResize = () => {
            if (!container) return;
            const newWidth = container.clientWidth;
            const newHeight = container.clientHeight;
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
                if (renderer.domElement) {
                    container.removeChild(renderer.domElement);
                }
            }
            cancelAnimationFrame(animationFrameId);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                opacity: 0.5,
                pointerEvents: 'none', // Allow clicks to pass through to card content
                overflow: 'hidden',
                borderRadius: 'inherit' // Inherit card border radius
            }}
        />
    );
};

export default WavyBackground;
