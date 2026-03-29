"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as CANNON from "cannon-es";
import gsap from "gsap";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import fontData from "three/examples/fonts/helvetiker_bold.typeface.json";

export default function HeroScene({ primaryColor }: { primaryColor: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({ x: 0, y: 0 });
    const objectsRef = useRef<{ mesh: THREE.Mesh; body: CANNON.Body; isPrimary: boolean; initialColor: number }[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        // --- Physics Setup ---
        const world = new CANNON.World();
        world.gravity.set(0, 0, 0);
        world.allowSleep = true;
        world.defaultContactMaterial.friction = 0.5;
        world.defaultContactMaterial.restitution = 0.2;

        world.solver = new CANNON.GSSolver();
        (world.solver as CANNON.GSSolver).iterations = 10;
        world.broadphase = new CANNON.SAPBroadphase(world);

        // --- Scene Setup ---
        const scene = new THREE.Scene();
        scene.background = null;

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0xffffff, 2.0, 400);
        pointLight.position.set(0, 0, 50);
        scene.add(pointLight);

        const centerLight = new THREE.PointLight(0xffffff, 3.0, 200);
        centerLight.position.set(0, 0, 20);
        scene.add(centerLight);

        // Water Effect Mouse Light
        const mouseLight = new THREE.PointLight(0x00ffff, 0, 150); // Start off
        scene.add(mouseLight);
        const mouseLightRef = { current: mouseLight };

        // Camera Setup
        const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 150;

        // Renderer Setup
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.2;
        containerRef.current.appendChild(renderer.domElement);

        const letters = ["X", "Y", "R", "A", "C", "O"];
        const jellyColors = [
            0xe60023, // Vibrant Red (Requested)
            0x0033ff, // Electric Blue
            0x00d166, // Emerald Green
            0x7b2cbf, // Royal Purple
            0xff9100, // Vivid Orange
            0xff006e  // Hot Pink
        ];

        const objects: { mesh: THREE.Mesh; body: CANNON.Body; isPrimary: boolean; initialColor: number }[] = [];
        const fontLoader = new FontLoader();

        // Load font and create letters
        const font = fontLoader.parse(fontData);

        for (let i = 0; i < 40; i++) {
            const char = letters[i % letters.length];
            const size = Math.random() * 6 + 10; // Reduced size
            const depth = 4;

            const geometry = new TextGeometry(char, {
                font: font,
                size: size,
                depth: depth,
                curveSegments: 24,
                bevelEnabled: true,
                bevelThickness: 2.0, // Thinned for smaller size
                bevelSize: 1.0,
                bevelOffset: 0,
                bevelSegments: 12
            });
            geometry.center();

            const colorValue = jellyColors[Math.floor(Math.random() * jellyColors.length)];

            const material = new THREE.MeshPhysicalMaterial({
                color: new THREE.Color(colorValue),
                transparent: false, // Solid
                opacity: 1.0,
                roughness: 0.0,
                metalness: 0.3, // Enhanced shine for solid
                clearcoat: 1.0,
                clearcoatRoughness: 0.0,
                transmission: 0.0, // Removed transparency
                thickness: 0,
                ior: 1.5,
                reflectivity: 1.0,
            });

            const mesh = new THREE.Mesh(geometry, material);

            // --- Weighted Centered Distribution ---
            const isFar = Math.random() > 0.7;
            const rangeX = isFar ? 280 : 130;
            const rangeY = isFar ? 160 : 90;
            const rangeZ = isFar ? 80 : 40;

            const x = (Math.random() - 0.5) * rangeX;
            const y = (Math.random() - 0.5) * rangeY;
            const z = (Math.random() - 0.5) * rangeZ;

            // Physics body - use a box that fits the letter
            const body = new CANNON.Body({
                mass: 1,
                shape: new CANNON.Box(new CANNON.Vec3(size / 2, size / 2, depth / 2)),
                position: new CANNON.Vec3(x, y, z),
                linearDamping: 0.85,
                angularDamping: 0.85
            });

            // Add subtle initial drift
            body.velocity.set(
                (Math.random() - 0.5) * 1.5,
                (Math.random() - 0.5) * 1.5,
                (Math.random() - 0.5) * 1.5
            );

            body.quaternion.setFromEuler(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            );

            world.addBody(body);
            scene.add(mesh);
            objects.push({ mesh, body, isPrimary: true, initialColor: colorValue });
        }
        objectsRef.current = objects;

        // --- Handle Resize & Input ---
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
            mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener("mousemove", handleMouseMove);

        // --- Click Interaction Logic ---
        const handleClick = (e: MouseEvent) => {
            // Reproject mouse 2D to 3D roughly for impulse
            const clickPos = new CANNON.Vec3(mouse.current.x * 120, mouse.current.y * 75, 0);

            objects.forEach(({ body }) => {
                const dist = body.position.distanceTo(clickPos);
                if (dist < 80) {
                    const dir = body.position.vsub(clickPos).unit();
                    // Add a slight outward/z-axis push
                    dir.z += 0.5;
                    dir.normalize();

                    const force = (1 - dist / 80) * 20;
                    body.applyImpulse(dir.scale(force), body.position);

                    // Add a little spin to make the movement more dynamic
                    body.angularVelocity.set(
                        body.angularVelocity.x + (Math.random() - 0.5) * 4,
                        body.angularVelocity.y + (Math.random() - 0.5) * 4,
                        body.angularVelocity.z + (Math.random() - 0.5) * 4
                    );
                }
            });
        };
        window.addEventListener("click", handleClick);

        // --- Animation Loop ---
        let lastTime = performance.now();
        let animationFrameId: number;
        let isVisible = true;

        // Intersection Observer to prevent continuous painting when scrolled away
        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
            },
            { threshold: 0 }
        );
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            if (!isVisible) return; // Skip heavy rendering when off-screen

            const time = performance.now();
            lastTime = time;

            // Step Physics
            world.fixedStep();

            // Camera Parallax
            const targetX = mouse.current.x * 20;
            const targetY = mouse.current.y * 20;
            camera.position.x += (targetX - camera.position.x) * 0.05;
            camera.position.y += (targetY - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            pointLight.position.x = mouse.current.x * 80;
            pointLight.position.y = mouse.current.y * 80;

            // --- Physics Retention Logic ---
            objects.forEach(({ mesh, body }, k) => {
                // 1. Invisible Viewport Container (Calibrated Soft Cage)
                const limitX = 130, limitY = 85, limitZ = 50;

                if (Math.abs(body.position.x) > limitX) {
                    body.velocity.x -= Math.sign(body.position.x) * 0.05;
                }
                if (Math.abs(body.position.y) > limitY) {
                    body.velocity.y -= Math.sign(body.position.y) * 0.05;
                }
                if (Math.abs(body.position.z) > limitZ) {
                    body.velocity.z -= Math.sign(body.position.z) * 0.05;
                }

                // 2. Strong restorative force to center
                const attraction = body.position.negate().scale(0.012); // Slightly tuned
                body.applyForce(attraction, body.position);

                // 3. Water Ripple Effect (Soft Mouse Push)
                const mouse3D = new CANNON.Vec3(mouse.current.x * 140, mouse.current.y * 80, 0);

                // Update mouse light position
                if (k === 0) {
                    mouseLightRef.current.position.set(mouse3D.x, mouse3D.y, 20);
                    mouseLightRef.current.intensity = 4.0;
                }

                const dToMouse = body.position.distanceTo(mouse3D);
                if (dToMouse < 60) {
                    const pushDir = body.position.vsub(mouse3D).unit();
                    // Softer, liquid-like push
                    const pushForce = (1 - dToMouse / 60) * 15;
                    body.applyForce(pushDir.scale(pushForce), body.position);
                }

                // 4. Sync Mesh with Physics Body & Add Jelly Jiggle
                mesh.position.copy(body.position as any);
                mesh.quaternion.copy(body.quaternion as any);

                // Subtle jelly-like scale pulsation (softened)
                const jiggleFreq = time * 0.005 + (k * 0.5);
                const jiggleScaleX = 1 + Math.sin(jiggleFreq) * 0.07;
                const jiggleScaleY = 1 + Math.cos(jiggleFreq * 0.8) * 0.07;
                mesh.scale.set(jiggleScaleX, jiggleScaleY, jiggleScaleX);

                // 5. Trace-like slow rotation
                body.angularVelocity.x += Math.sin(time * 0.0005 + k) * 0.0005;
                body.angularVelocity.y += Math.cos(time * 0.0005 + k) * 0.0005;
            });

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleClick);
            if (containerRef.current) {
                if (containerRef.current.contains(renderer.domElement)) {
                    containerRef.current.removeChild(renderer.domElement);
                }
            }
            scene.clear();
            renderer.dispose();
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!objectsRef.current.length) return;
        objectsRef.current.forEach(({ mesh, initialColor }) => {
            const targetColor = new THREE.Color(initialColor);
            gsap.to((mesh.material as THREE.MeshPhysicalMaterial).color, {
                r: targetColor.r,
                g: targetColor.g,
                b: targetColor.b,
                duration: 0.8,
                ease: "power2.out"
            });
        });
    }, [primaryColor]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-0 pointer-events-none"
        />
    );
}
