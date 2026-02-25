"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import * as CANNON from "cannon-es";
import gsap from "gsap";

export default function HeroScene({ primaryColor }: { primaryColor: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({ x: 0, y: 0 });
    const objectsRef = useRef<{ mesh: THREE.Mesh; body: CANNON.Body; isPrimary: boolean }[]>([]);

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

        const pointLight = new THREE.PointLight(0xffffff, 1.5, 300);
        pointLight.position.set(0, 0, 50);
        scene.add(pointLight);

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

        // --- Geometric Setup ---
        const staticColors = [0xcecece, 0xd7c100];
        const objects: { mesh: THREE.Mesh; body: CANNON.Body; isPrimary: boolean }[] = [];

        for (let i = 0; i < 45; i++) {
            const size = Math.random() * 6 + 4;
            const w = size, h = size, d = size;
            const r = 1.5;

            const shape = new THREE.Shape();
            shape.moveTo(-w / 2 + r, -h / 2);
            shape.lineTo(w / 2 - r, -h / 2);
            shape.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
            shape.lineTo(w / 2, h / 2 - r);
            shape.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
            shape.lineTo(-w / 2 + r, h / 2);
            shape.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
            shape.lineTo(-w / 2, -h / 2 + r);
            shape.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);

            const extrudeSettings = {
                depth: d - r * 2,
                bevelEnabled: true,
                bevelThickness: r,
                bevelSize: r,
                bevelOffset: 0,
                bevelSegments: 8
            };

            const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
            geometry.center();

            const isPrimary = Math.random() > 0.6;
            const colorValue = isPrimary ? primaryColor : staticColors[Math.floor(Math.random() * staticColors.length)];

            const material = new THREE.MeshPhysicalMaterial({
                color: new THREE.Color(colorValue),
                transparent: false,
                opacity: 1.0,
                roughness: 0.1,
                metalness: 0.3,
                clearcoat: 1.0,
                clearcoatRoughness: 0.05,
                reflectivity: 1.0,
            });

            const mesh = new THREE.Mesh(geometry, material);

            // --- Calibrated Distribution ---
            // Keep cubes primarily on-screen but spread out
            const x = (Math.random() - 0.5) * 280;
            const y = (Math.random() - 0.5) * 160;
            const z = (Math.random() - 0.5) * 80;

            const body = new CANNON.Body({
                mass: 1,
                shape: new CANNON.Box(new CANNON.Vec3(w / 2, h / 2, d / 2)),
                position: new CANNON.Vec3(x, y, z),
                linearDamping: 0.85, // Increased for calmer movement
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
            objects.push({ mesh, body, isPrimary });
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

                // 2. Very weak restorative force to center
                const attraction = body.position.negate().scale(0.005);
                body.applyForce(attraction, body.position);

                // 3. Subtle Mouse Hover Friction (Micro-movement)
                const mouse3D = new CANNON.Vec3(mouse.current.x * 120, mouse.current.y * 75, 0);
                const dToMouse = body.position.distanceTo(mouse3D);
                if (dToMouse < 50) {
                    const pushDir = body.position.vsub(mouse3D).unit();
                    const pushForce = (1 - dToMouse / 50) * 35; // Very small force
                    body.applyForce(pushDir.scale(pushForce), body.position);
                }

                // 4. Sync Mesh with Physics Body
                mesh.position.copy(body.position as any);
                mesh.quaternion.copy(body.quaternion as any);

                // 4. Trace-like slow rotation
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

    // Color cycling logic
    useEffect(() => {
        if (!objectsRef.current.length) return;
        objectsRef.current.forEach(({ mesh, isPrimary }) => {
            if (isPrimary) {
                const targetColor = new THREE.Color(primaryColor);
                gsap.to((mesh.material as THREE.MeshPhysicalMaterial).color, {
                    r: targetColor.r,
                    g: targetColor.g,
                    b: targetColor.b,
                    duration: 0.8,
                    ease: "power2.out"
                });
            }
        });
    }, [primaryColor]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-0 pointer-events-none"
        />
    );
}
