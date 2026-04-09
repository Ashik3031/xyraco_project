"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

export default function HexagonFloorScene() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;

        // --- Scene Setup ---
        const scene = new THREE.Scene();
        // Set a dark background
        scene.background = new THREE.Color('#000000');
        scene.fog = new THREE.Fog('#000000', 15, 60); // Linear fog to fade nicely into distance

        // --- Lighting ---
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        // A low, intense central light casting sweeping glossy highlights across the floor
        const centerLight = new THREE.PointLight(0xddffff, 25.0, 150); 
        centerLight.position.set(0, 4, -5); // Low down, close to camera
        scene.add(centerLight);
        
        // Brighter scattered central fill
        const topLight = new THREE.PointLight(0x00e5ff, 10.0, 150);
        topLight.position.set(0, 20, 0);
        scene.add(topLight);
        
        // Add directional light for global brightness and specular highlights
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
        dirLight.position.set(5, 20, -10);
        scene.add(dirLight);
        
        // A moving spotlight tied to the mouse for interaction
        const mouseLight = new THREE.SpotLight(0xffffff, 8.0, 150, Math.PI / 3, 0.8, 1);
        mouseLight.position.set(0, 8, 0);
        mouseLight.target.position.set(0, 0, 0);
        scene.add(mouseLight);
        scene.add(mouseLight.target);

        // --- Camera Setup ---
        // Wide FOV to match Bipsync's dramatic distortion
        const getContainerSize = () => ({
            width: container.clientWidth || window.innerWidth,
            height: container.clientHeight || window.innerHeight,
        });
        const initialSize = getContainerSize();
        const camera = new THREE.PerspectiveCamera(65, initialSize.width / initialSize.height, 0.1, 1000);
        
        // Dynamic camera position based on screen width
        const updateCameraPos = () => {
            const isMobile = window.innerWidth < 768;
            if (isMobile) {
                // Further back and higher on mobile to see more grid
                camera.position.set(0, 20, 30);
                camera.lookAt(0, -10, -50);
            } else {
                camera.position.set(0, 15, 20);
                camera.lookAt(0, 0, -30);
            }
        };
        updateCameraPos();

        // --- Renderer Setup ---
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(initialSize.width, initialSize.height);
        renderer.domElement.style.display = "block";
        renderer.domElement.style.width = "100%";
        renderer.domElement.style.height = "100%";
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // Post-processing setup (Tone mapping for better colors)
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0;
        
        container.appendChild(renderer.domElement);

        // --- Hexagon Grid Setup ---
        const hexRadius = 4.0;
        const hexHeight = 1.0;
        const colWidth = hexRadius * 1.5;
        const rowHeight = hexRadius * Math.sqrt(3) / 2;

        // Create a custom hexagon shape for beveling
        const hexShape = new THREE.Shape();
        const bevelSize = 0.3; // Very thick, soft bevel
        const effectiveRadius = hexRadius * 0.98 - bevelSize; // Prevent overlap by accounting for bevel expansion
        for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = Math.cos(angle) * effectiveRadius;
            const z = Math.sin(angle) * effectiveRadius;
            if (i === 0) hexShape.moveTo(x, z);
            else hexShape.lineTo(x, z);
        }
        hexShape.lineTo(Math.cos(0) * effectiveRadius, Math.sin(0) * effectiveRadius);

        const hexGeometry = new THREE.ExtrudeGeometry(hexShape, {
            depth: hexHeight,
            bevelEnabled: true,
            bevelSegments: 8, // Very smooth rounded edges like pebbles
            steps: 1,
            bevelSize: bevelSize,
            bevelThickness: 0.3,
        });
        // Rotate so flat face is up (XZ plane)
        hexGeometry.rotateX(Math.PI / 2);
        // Center vertically so origin is at the bottom
        hexGeometry.translate(0, hexHeight, 0);

        // Material for hexagons - back to MeshPhysicalMaterial for deep glossy polish
        const hexMaterial = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color('#104040'), 
            emissive: new THREE.Color('#000000'), 
            metalness: 0.1, 
            roughness: 0.05, // Exceptionally smooth
            clearcoat: 1.0,
            clearcoatRoughness: 0.05,
        });

        const gridGroup = new THREE.Group();
        const hexMeshes: { mesh: THREE.Mesh; ix: number; iz: number; baseHeight: number }[] = [];

        // Grid dimensions
        const rows = 120; // Increased significantly to cover deep horizon and foreground
        const cols = 60; // Increased to cover width even at low angles

        for (let row = -rows/2; row < rows/2; row++) {
            for (let col = -cols/2; col < cols/2; col++) {
                const mesh = new THREE.Mesh(hexGeometry, hexMaterial.clone());
                
                // Calculate position
                const x = col * colWidth;
                // Stagger every other column
                const zOffset = (col % 2 !== 0) ? rowHeight : 0;
                const z = row * rowHeight * 2 + zOffset;

                mesh.position.set(x, 0, z);

                // Add to scene and tracking array
                gridGroup.add(mesh);
                
                // Add some initial noise to height for a natural look
                const baseHeight = (Math.sin(x * 0.05) + Math.cos(z * 0.05)) * 1.0;
                
                hexMeshes.push({ mesh, ix: x, iz: z, baseHeight });
            }
        }
        scene.add(gridGroup);

        // --- Handle Resize & Input ---
        const handleResize = () => {
            const { width, height } = getContainerSize();
            camera.aspect = width / height;
            updateCameraPos(); // Update position on resize
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener("resize", handleResize);
        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(container);

        const handleMouseMove = (e: MouseEvent) => {
            // Normalized Device Coordinates (-1 to +1)
            mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
            mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener("mousemove", handleMouseMove);

        // Raycaster for accurate mouse interaction with floor
        const raycaster = new THREE.Raycaster();
        const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

        // --- Animation Loop ---
        let animationFrameId: number;
        let isVisible = true;

        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
            },
            { threshold: 0 }
        );
        observer.observe(container);

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            if (!isVisible) return;

            const time = performance.now() * 0.001;

            // Update raycaster for mouse intersection
            raycaster.setFromCamera(new THREE.Vector2(mouse.current.x, mouse.current.y), camera);
            const targetPos = new THREE.Vector3();
            raycaster.ray.intersectPlane(plane, targetPos);

            // Smoothly move mouse light to target position
            if (targetPos) {
                 mouseLight.position.x += (targetPos.x - mouseLight.position.x) * 0.1;
                 mouseLight.position.z += (targetPos.z - mouseLight.position.z) * 0.1;
                 mouseLight.target.position.copy(mouseLight.position);
                 mouseLight.target.position.y = 0;
            }

            // Animate hexagons
            hexMeshes.forEach(({ mesh, ix, iz, baseHeight }) => {
                // 1. Continuous slow wave (breathing)
                const waveSpeed = time * 0.5;
                const wave = Math.sin(ix * 0.05 + waveSpeed) * Math.cos(iz * 0.05 + waveSpeed) * 0.8;

                // 2. Mouse interaction (push down or pull up)
                let mouseEffect = 0;
                let colorIntensity = 0;

                if (targetPos) {
                    const distToMouse = Math.sqrt(Math.pow(ix - targetPos.x, 2) + Math.pow(iz - targetPos.z, 2));
                    const effectRadius = 25; // Adjusted for larger hexagons
                    
                    if (distToMouse < effectRadius) {
                        // Smooth falloff
                        const normalizedDist = distToMouse / effectRadius;
                        const factor = Math.cos(normalizedDist * Math.PI) * 0.5 + 0.5;
                        
                        mouseEffect = factor * 2.0; // Lift up slightly near mouse
                        colorIntensity = factor;
                    }
                }

                // Apply height
                const targetY = baseHeight + wave + mouseEffect;
                // Smooth height transition
                mesh.position.y += (targetY - mesh.position.y) * 0.1;

                // Dynamic coloring based on height and mouse proximity
                const mat = mesh.material as THREE.MeshPhysicalMaterial;
                
                // Color perfectly matched to Image 2:
                // Dark outer teal, vibrant cyan inner ring, white hot center
                const distFromCenter = Math.sqrt(ix*ix + iz*iz);
                const focusFactor = Math.max(0, 1 - distFromCenter / 45); // 1 = center, 0 = edge
                
                const edgeColor = new THREE.Color('#042830'); // Very dark outer teal
                const peakColor = new THREE.Color('#b5fffc'); // Bright center cyan/white
                
                const baseColor = new THREE.Color().lerpColors(edgeColor, peakColor, focusFactor + (colorIntensity * 0.3));
                mat.color.copy(baseColor);
                
                // Pulsating highlight specifically at hover
                if (colorIntensity > 0.01) {
                    mat.emissive.lerpColors(new THREE.Color('#000000'), new THREE.Color('#00ffbb'), colorIntensity * 0.4);
                } else {
                    mat.emissive.setHex(0x000000);
                }
            });

            // Subtle camera movement
            camera.position.x += (mouse.current.x * 2 - camera.position.x) * 0.02;
            
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            // Dispose geometries and materials
            hexGeometry.dispose();
            hexMaterial.dispose();
            scene.clear();
            renderer.dispose();
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-0 pointer-events-auto"
            style={{ 
                background: 'linear-gradient(to bottom, #000000 0%, #050510 100%)',
                cursor: 'crosshair'
            }}
        />
    );
}
