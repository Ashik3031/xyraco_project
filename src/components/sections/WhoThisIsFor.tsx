"use client";

import React from "react";
import { Users, Briefcase, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";

const groups = [
    {
        title: "IDEA-STAGE Founders",
        description: "Launch your vision without the internal tech barrier.",
        icon: Zap,
    },
    {
        title: "NON-TECH LEADERS",
        description: "We handle the build, you handle the market.",
        icon: Briefcase,
    },
    {
        title: "SME INNOVATION",
        description: "AI transformation for established growth engines.",
        icon: Globe,
    },
    {
        title: "ENTERPRISE LABS",
        description: "Rapid experimentation with elite engineering talent.",
        icon: Users,
    },
];

export default function WhoThisIsFor() {
    return (
        <section className="py-40 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mb-32">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-6xl md:text-8xl font-bold tracking-super-tight text-black uppercase leading-[0.9]"
                    >
                        WHO WE <br />
                        <span className="stroke-text">PARTNER</span> WITH.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 border border-black/5 rounded-[40px] overflow-hidden">
                    {groups.map((group, index) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-12 md:p-20 bg-background hover:bg-black/[0.02] transition-colors duration-500"
                        >
                            <group.icon className="text-black group-hover:text-accent transition-colors mb-12" size={32} />
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-super-tight text-black uppercase">
                                {group.title}
                            </h3>
                            <p className="text-gray-500 text-lg leading-relaxed font-light">
                                {group.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
