"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LiquidBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
            {/* Organic Blobs - Subtle tints for light theme */}
            <motion.div
                style={{ y: y1, rotate }}
                className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-accent/5 blur-[120px] rounded-full mix-blend-multiply"
            />
            <motion.div
                style={{ y: y2, rotate: -rotate }}
                className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-accent-purple/5 blur-[150px] rounded-full mix-blend-multiply"
            />

            {/* Reduced Noise Overlay for Light Theme */}
            <div className="absolute inset-0 opacity-[0.02] contrast-50 brightness-150 pointer-events-none mix-blend-multiply"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

            {/* Radial Gradient for Depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(255,255,255,0.4)_80%)]" />
        </div>
    );
}
