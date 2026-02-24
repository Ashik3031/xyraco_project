"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <section className="relative pt-48 pb-24 overflow-hidden bg-background">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-super-tight text-black leading-[0.9] mb-12 uppercase">
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed border-l border-black/10 pl-8 italic">
                        {description}
                    </p>
                </motion.div>
            </div>

            {/* Decorative Line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-black/5" />
        </section>
    );
}
