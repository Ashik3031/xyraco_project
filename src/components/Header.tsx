"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Keep existing nav items
    const navItems = [
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "AI Advantage", href: "/ai" },
        { name: "Apply", href: "/apply" },
    ];

    const stagger = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.07, delayChildren: 0.05 },
        },
    };

    const itemVariant = {
        hidden: { y: 24, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 mix-blend-difference ${scrolled ? "py-4 md:py-6" : "py-8 md:py-12"}`}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    <Link href="/" className="group flex items-center gap-1">
                        <span className="text-xl font-bold tracking-[0.4em] text-white uppercase italic-none">XYRACO</span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/apply"
                            className="px-6 py-2.5 rounded-full bg-white text-black text-[10px] uppercase tracking-widest font-bold hover:scale-105 transition-all duration-500 hidden sm:block"
                        >
                            Let&apos;s Talk •
                        </Link>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="pl-4 pr-0 py-2.5 text-white text-[10px] uppercase tracking-widest font-bold hover:opacity-70 transition-all duration-500"
                        >
                            Menu ••
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[200] bg-[#e8e8e6] overflow-y-auto"
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-8 right-10 p-2 text-accent hover:text-accent/70 transition-colors z-10"
                            aria-label="Close menu"
                        >
                            <X size={22} strokeWidth={1.5} />
                        </button>

                        <div className="h-full grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_1.2fr] divide-x divide-black/10">

                            {/* COLUMN 1: Large nav links */}
                            <motion.div
                                variants={stagger}
                                initial="hidden"
                                animate="show"
                                className="flex flex-col justify-center px-8 lg:px-14 py-20 lg:py-24 gap-3 md:gap-1"
                            >
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <motion.div key={item.href} variants={itemVariant} className="flex items-center gap-4 group">
                                            {/* Orange square indicator for active */}
                                            <span className={`w-3.5 h-3.5 flex-shrink-0 transition-all duration-300 ${isActive ? "bg-accent opacity-100" : "bg-transparent opacity-0 group-hover:opacity-30 group-hover:bg-accent"}`} />
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-none whitespace-nowrap transition-colors duration-300 ${isActive ? "text-accent" : "text-[#0a0a0a] hover:text-accent"}`}
                                            >
                                                {item.name}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                                </motion.div>

                                {/* COLUMN 2: Contact info - Visible on mobile but at bottom */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="flex flex-col justify-center px-10 lg:px-10 py-12 lg:py-24 gap-8"
                                >
                                {/* Contact */}
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-semibold mb-3">Contact</p>
                                    <div className="flex flex-col gap-1.5 text-sm text-black/70 font-light">
                                        <span>info@xyraco.com</span>
                                        <span className="mt-2">Instagram: <span className="text-black">@xyraco</span></span>
                                        <span>LinkedIn: <span className="text-black">@xyraco</span></span>
                                        <span>Twitter: <span className="text-black">@xyraco</span></span>
                                    </div>
                                </div>

                                {/* Working Globally status */}
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-semibold mb-4">Working Globally</p>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-start gap-2.5">
                                            <div className="w-3 h-3 bg-accent flex-shrink-0 mt-0.5" />
                                            <p className="text-[11px] uppercase tracking-wide text-black/60 font-medium leading-relaxed">
                                                Accepting projects. Join the waitlist.
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-2.5">
                                            <div className="w-3 h-3 bg-accent flex-shrink-0 mt-0.5" />
                                            <p className="text-[11px] uppercase tracking-wide text-black/60 font-medium">
                                                Only 3 spots left
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* COLUMN 3: About photo */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.25 }}
                                className="relative overflow-hidden hidden lg:block"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                                    alt="About the Studio"
                                    className="absolute inset-0 w-full h-full object-cover grayscale"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/70 font-semibold">About the Studio</p>
                                </div>
                            </motion.div>

                            {/* COLUMN 4: Featured project */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.35 }}
                                className="relative overflow-hidden hidden lg:block"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
                                    alt="Featured Project"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/70 font-semibold">Featured Project</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
