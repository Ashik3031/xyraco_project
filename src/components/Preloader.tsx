"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const pathname = usePathname();

    // Trigger on initial load and every route change
    useEffect(() => {
        setIsLoading(true);
        setProgress(0);

        // Animate counter from 0 to 100
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    // Add a small delay after hitting 100 before closing
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 300);
                    return 100;
                }
                return prev + 1;
            });
        }, 15); // Roughly 1.5s total

        return () => {
            clearInterval(interval);
        };
    }, [pathname]);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ y: 0 }}
                    exit={{ 
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
                    }}
                    className="fixed inset-0 z-[9999] bg-accent flex items-center justify-center pointer-events-none"
                    style={{ position: 'fixed' }}
                >
                    {/* Liquid Curve Overlay */}
                    <svg 
                        viewBox="0 0 100 100" 
                        preserveAspectRatio="none"
                        className="absolute top-full left-0 w-full h-[30vh] fill-accent -mt-px"
                    >
                        <motion.path
                            initial={{ d: "M0 0 L100 0 L100 100 Q50 100 0 100 Z" }}
                            exit={{ 
                                d: "M0 0 L100 0 L100 0 Q50 100 0 0 Z",
                                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                            }}
                        />
                    </svg>

                    <div className="flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40, scale: 0.9, transition: { duration: 0.4 } }}
                            className="flex flex-col items-center gap-4"
                        >
                            <div className="flex gap-2">
                                {[0, 1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ 
                                            scaleY: [1, 1.6, 1],
                                            opacity: [1, 0.4, 1]
                                        }}
                                        transition={{ 
                                            duration: 1, 
                                            repeat: Infinity, 
                                            delay: i * 0.1,
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                        className="w-1.5 h-6 bg-black rounded-full"
                                    />
                                ))}
                            </div>
                            <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-black mt-4 ml-[0.8em]">
                                LOADING
                            </span>
                        </motion.div>
                    </div>

                    {/* Percentage Counter Bottom-right */}
                    <div className="absolute bottom-12 right-12 flex flex-col items-end gap-1">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-7xl md:text-8xl font-medium tracking-tighter text-black leading-none"
                        >
                            {progress}
                        </motion.span>
                        <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/40 mr-2">
                            Progress %
                        </span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
