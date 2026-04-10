"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
    Mail, 
    Phone, 
    MapPin, 
    ArrowUp, 
    Instagram, 
    Linkedin, 
    MessageCircle
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    const [subscriberEmail, setSubscriberEmail] = useState("");
    const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [subscribeMessage, setSubscribeMessage] = useState("");

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubscribeStatus("loading");
        setSubscribeMessage("");

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: subscriberEmail, recaptchaToken: "" }),
            });
            const data = (await response.json()) as { success: boolean; message: string };

            if (!response.ok || !data.success) {
                throw new Error(data.message || "Unable to subscribe right now.");
            }

            setSubscribeStatus("success");
            setSubscribeMessage(data.message);
            setSubscriberEmail("");
        } catch (error) {
            setSubscribeStatus("error");
            setSubscribeMessage(error instanceof Error ? error.message : "Unable to subscribe right now.");
        }
    };

    const footerSections = [
        {
            title: "Services",
            links: [
                { name: "MVP Development", href: "/services" },
                { name: "Web & Mobile Apps", href: "/services" },
                { name: "AI & Automation", href: "/ai" },
                { name: "UI/UX & Product Design", href: "/services" },
                { name: "Branding & Strategy", href: "/services" },
                { name: "No-Code Solutions", href: "/services" },
            ],
        },
        {
            title: "Company",
            links: [
                { name: "About Us", href: "/about" },
                { name: "How We Work", href: "/how-it-works" },
                { name: "Projects", href: "/projects" },
                { name: "Insights", href: "/blog" },
                { name: "Apply", href: "/apply" },
            ],
        },
        {
            title: "Resources",
            links: [
                { name: "Privacy Policy", href: "/legal" },
                { name: "Terms of Use", href: "/legal" },
                { name: "Cookie Policy", href: "/legal" },
                { name: "Sitemap", href: "/sitemap.xml" },
            ],
        },
    ];

    const socials = [
        { icon: Instagram, href: "https://www.instagram.com/xyraco.in?igsh=dnE2MnJhaW5rdjY0&utm_source=qr", label: "Instagram" },
        { icon: Linkedin, href: "https://linkedin.com/company/xyraco", label: "LinkedIn" },
        { icon: MessageCircle, href: "https://wa.me/919497411513", label: "WhatsApp" },
    ];

    return (
        <footer className="relative bg-vanta pt-16 pb-12 font-sans overflow-hidden">
            {/* Back to Top Button - Positioned to be fully visible */}
            <div className="flex justify-center mb-12">
                <motion.button
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-black shadow-lg shadow-accent/20"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={18} />
                </motion.button>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-4 max-w-sm">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-xl font-bold tracking-tighter text-accent">
                                XYRACO
                            </span>
                        </Link>
                        <p className="text-gray-400 font-light leading-relaxed mb-8 text-xs">
                            Xyraco is an AI startup builder and startup development company for founders who need MVP development and want to build startup without funding or upfront cost.
                        </p>
                        
                        <div className="space-y-3">
                            <a href="mailto:info@xyraco.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                                <Mail size={14} className="text-accent/60 group-hover:text-accent" />
                                <span className="text-xs font-light">info@xyraco.com</span>
                            </a>
                            <a href="tel:+971544692469" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                                <Phone size={14} className="text-accent/60 group-hover:text-accent" />
                                <span className="text-xs font-light">UAE: +971 54 469 2469</span>
                            </a>
                            <a href="tel:+919567039149" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                                <Phone size={14} className="text-accent/60 group-hover:text-accent" />
                                <span className="text-xs font-light">India: +91 95670 39149</span>
                            </a>
                            <a href="https://wa.me/919497411513" target="_blank" rel="noreferrer noopener" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                                <MessageCircle size={14} className="text-accent/60 group-hover:text-accent" />
                                <span className="text-xs font-light">WhatsApp: +91 94974 11513</span>
                            </a>
                            <div className="flex items-start gap-3 text-gray-400">
                                <MapPin size={14} className="text-accent/60 mt-0.5 flex-shrink-0" />
                                <span className="text-xs font-light">Tower 400, Office No: 1004, Al Soor Street, Sharjah, UAE</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Sections */}
                    {footerSections.map((section) => (
                        <div key={section.title} className="lg:col-span-2">
                            <h4 className="text-accent font-bold text-[10px] uppercase tracking-[0.2em] mb-8">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors font-light text-xs"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter Box */}
                <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-md text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-2">
                            Stay in the <span className="text-accent">loop</span>
                        </h3>
                        <p className="text-gray-500 font-light text-xs">
                            Get updates on product insights, growth tactics and new launches.
                        </p>
                    </div>
                    
                    <form onSubmit={handleSubscribe} className="flex flex-col w-full md:w-auto gap-3">
                        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            value={subscriberEmail}
                            onChange={(event) => setSubscriberEmail(event.target.value)}
                            required
                            className="bg-vanta border border-white/10 rounded-xl px-5 py-3 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-accent/30 transition-colors w-full sm:w-72"
                        />
                        <button
                            type="submit"
                            disabled={subscribeStatus === "loading"}
                            className="bg-accent hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-xl text-sm transition-all duration-300"
                        >
                            {subscribeStatus === "loading" ? "Sending..." : "Subscribe"}
                        </button>
                        </div>
                        {subscribeMessage && (
                            <p className={`text-xs ${subscribeStatus === "success" ? "text-accent" : "text-red-300"}`}>
                                {subscribeMessage}
                            </p>
                        )}
                    </form>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                            <img src="/logo.png" alt="Xyraco" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                        </div>
                        <span className="text-xs text-gray-500 font-light tracking-wide">
                            <span className="text-white font-medium">Xyraco</span> &copy; 2026. All rights reserved.
                        </span>
                    </div>

                    <div className="flex items-center gap-6">
                        {socials.map((social, i) => (
                            <Link 
                                key={i} 
                                href={social.href} 
                                aria-label={social.label}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="text-gray-500 hover:text-accent transition-all transform hover:scale-110"
                            >
                                <social.icon size={18} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
