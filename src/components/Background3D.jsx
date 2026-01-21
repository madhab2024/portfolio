import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene Setup
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050a10, 0.035);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 25;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // optimize for high DPI

        // Append renderer to DOM
        const container = containerRef.current;
        container.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0x00f3ff, 1.5);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);

        // Particles
        const particleCount = 2000;
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesPos = [];
        const spread = 80;

        for (let i = 0; i < particleCount; i++) {
            particlesPos.push((Math.random() - 0.5) * spread);
            particlesPos.push((Math.random() - 0.5) * spread);
            particlesPos.push((Math.random() - 0.5) * spread);
        }

        particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(particlesPos, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            color: 0x00f3ff,
            size: 0.28,
            transparent: true,
            opacity: 0.95
        });

        const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particleSystem);

        // Shapes
        const shapes = [];
        const geometries = [
            new THREE.IcosahedronGeometry(1, 0),
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.OctahedronGeometry(1, 0)
        ];
        const colors = [0x00f3ff, 0x00ff88, 0xbc13fe]; // Cyan, Green, Purple
        const shapeCount = 35;
        const shapeSpread = 50;

        for (let i = 0; i < shapeCount; i++) {
            const geo = geometries[Math.floor(Math.random() * geometries.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];
            const material = new THREE.MeshBasicMaterial({
                color: color,
                wireframe: true,
                transparent: true,
                opacity: 0.15
            });

            const mesh = new THREE.Mesh(geo, material);
            mesh.position.set(
                (Math.random() - 0.5) * shapeSpread,
                (Math.random() - 0.5) * shapeSpread,
                (Math.random() - 0.5) * shapeSpread
            );

            const s = 0.5 + Math.random() * 2.5;
            mesh.scale.set(s, s, s);

            scene.add(mesh);
            shapes.push({
                mesh: mesh,
                rotSpeed: {
                    x: (Math.random() - 0.5) * 0.02,
                    y: (Math.random() - 0.5) * 0.02
                }
            });
        }

        // Interaction
        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Resize Handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Animation Loop
        let animationFrameId; // To store requestAnimationFrame ID

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const time = Date.now() * 0.0005;

            // Animate Shapes
            shapes.forEach(obj => {
                obj.mesh.rotation.x += obj.rotSpeed.x;
                obj.mesh.rotation.y += obj.rotSpeed.y;
                obj.mesh.position.y += Math.sin(time + obj.mesh.position.x) * 0.01;
            });

            // Animate Particles
            particleSystem.rotation.y += 0.001;
            particleSystem.rotation.x += 0.0005;

            // Camera Movement
            camera.position.x += (mouseX * 3 - camera.position.x) * 0.05;
            camera.position.y += (mouseY * 3 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);

            if (container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }

            // Dispose Three.js resources
            geometries.forEach(geo => geo.dispose());
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1, // Behind everything
                pointerEvents: 'none', // Allow clicks to pass through
                background: '#050a10' // Match fog color as base
            }}
        />
    );
};

export default Background3D;
