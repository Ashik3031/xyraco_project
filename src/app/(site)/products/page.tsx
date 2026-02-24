"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

const platforms = [
    {
        title: "Billing Systems",
        description: "Enterprise subscription management for complex SaaS unit economics.",
        category: "FINTECH",
    },
    {
        title: "ERP Solutions",
        description: "Deep operational engines for SME digital transformation.",
        category: "OPERATIONS",
    },
    {
        title: "E-commerce",
        description: "High-conversion AI-powered storefronts for scaling brands.",
        category: "COMMERCE",
    },
];

export default function ProductsPage() {
    return (
        <main className="min-h-screen pb-40 bg-white">
            <PageHeader
                title="OUR PLATFORMS"
                description="We build proprietary engines that solve real business problems. These are not just prototypes—they are production-ready assets."
            />

            <section className="container mx-auto px-6 mt-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 border border-black/5 rounded-[40px] overflow-hidden">
                    {platforms.map((product, index) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1, duration: 1 }}
                            viewport={{ once: true }}
                            className="group p-12 md:p-20 bg-white hover:bg-black/[0.02] transition-colors duration-700 min-h-[400px] flex flex-col justify-between"
                        >
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-8 block font-bold transition-colors group-hover:text-accent">
                                    {product.category}
                                </span>
                                <h3 className="text-3xl md:text-5xl font-bold tracking-super-tight text-black mb-8 group-hover:translate-x-4 transition-transform duration-700">
                                    {product.title}
                                </h3>
                            </div>
                            <p className="text-gray-500 text-lg font-light leading-relaxed group-hover:text-black transition-colors italic">
                                {product.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
