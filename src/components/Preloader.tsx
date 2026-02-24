"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    exit={{ y: "-100%" }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[9999] bg-background flex items-center justify-center pointer-events-none"
                >
                    <div className="flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-4 mb-20"
                        >
                            <span className="text-xl font-bold tracking-[0.2em] text-black">XYRACO</span>
                            <div className="w-[1px] h-6 bg-black/10 mx-4" />
                            <span className="text-xs uppercase tracking-[0.4em] font-bold text-black/40">
                                Engine V2
                            </span>
                        </motion.div>

                        <div className="w-60 h-[1px] bg-black/5 relative overflow-hidden">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute inset-0 bg-black"
                            />
                        </div>

                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mt-8"
                        >
                            Initializing Architectural Core
                        </motion.span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
