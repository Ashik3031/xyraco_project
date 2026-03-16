"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    const currentYear = new Date().getFullYear();

    if (pathname === "/services") return null;

    const companyLinks = [
        { name: "How It Works", href: "/how-it-works" },
        { name: "Services", href: "/services" },
        { name: "AI Advantage", href: "/ai" },
        { name: "Products", href: "/products" },
    ];

    const insightLinks = [
        { name: "Blog", href: "/blog" },
        { name: "Case Signals", href: "/case-signals" },
        { name: "Legal", href: "/legal" },
    ];

    return (
        <footer className="py-24 bg-background border-t border-black/5 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
                    <div className="lg:col-span-2">
                        <Link href="/" className="group flex items-center gap-1 mb-10">
                            <span className="text-xl font-bold tracking-[0.2em] text-black">XYRACO</span>
                        </Link>
                        <p className="text-xl text-gray-500 font-light leading-relaxed max-w-sm">
                            An architectural engineering engine dedicated to helping elite founders validate, build, and scale world-class businesses.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black mb-10">Company</h4>
                        <ul className="space-y-6">
                            {companyLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-500 hover:text-black transition-colors font-light text-lg"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black mb-10">Insights</h4>
                        <ul className="space-y-6">
                            {insightLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-500 hover:text-black transition-colors font-light text-lg"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-black/5">
                    <span className="text-[10px] uppercase tracking-widest text-gray-400">
                        © {currentYear} XYRACO. All Rights Reserved.
                    </span>
                    <div className="flex gap-12">
                        {["Twitter", "LinkedIn", "Instagram"].map(social => (
                            <Link key={social} href="#" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
                                {social}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
