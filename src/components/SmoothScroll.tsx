"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);
    let requestRef: number | null = null;

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard easing
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            touchMultiplier: 2,
        });

        const animate = (time: number) => {
            lenisRef.current?.raf(time);
            requestRef = requestAnimationFrame(animate);
        };

        requestRef = requestAnimationFrame(animate);

        return () => {
            if (requestRef) cancelAnimationFrame(requestRef);
            if (lenisRef.current) lenisRef.current.destroy();
        };
    }, []);

    return <>{children}</>;
}
