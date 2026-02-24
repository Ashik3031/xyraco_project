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

    const navItems = [
        { name: "Services", href: "/services" },
        { name: "AI Advantage", href: "/ai" },
        { name: "Products", href: "/products" },
        { name: "Apply", href: "/apply" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled ? "py-6 bg-background/80 backdrop-blur-xl" : "py-12 bg-transparent"
                    }`}
            >
                <div className="container mx-auto px-10 flex items-center justify-between">
                    <Link href="/" className="group flex items-center gap-1">
                        <span className="text-xl font-bold tracking-[0.2em] text-[#f9faf8]">XYRACO</span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/apply"
                            className="px-6 py-2.5 rounded-full bg-black text-white text-[10px] uppercase tracking-widest font-bold hover:bg-accent hover:text-black transition-all duration-500 hidden sm:block"
                        >
                            Let&apos;s Talk •
                        </Link>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="px-6 py-2.5 rounded-full bg-black/5 text-black text-[10px] uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all duration-500"
                        >
                            Menu ••
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-10 right-10 p-4 text-black hover:text-accent transition-colors"
                        >
                            <X size={32} />
                        </button>

                        <nav className="flex flex-col items-center gap-8">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-5xl md:text-8xl font-bold tracking-super-tight transition-all duration-500 ${pathname === item.href ? "text-accent" : "text-black/10 hover:text-black"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="absolute bottom-20 flex gap-8">
                            <Link href="/about" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors">About</Link>
                            <Link href="/blog" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Blog</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
