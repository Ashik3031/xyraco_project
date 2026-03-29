import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import WhatWeDo from "@/components/sections/WhatWeDo";
import WhoThisIsFor from "@/components/sections/WhoThisIsFor";
import ZeroUpfrontModel from "@/components/sections/ZeroUpfrontModel";
import AiAdvantage from "@/components/sections/AiAdvantage";
import GlobalReach from "@/components/sections/GlobalReach";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <AboutSection />
            <WhatWeDo />
            <WhoThisIsFor />
            <ZeroUpfrontModel />
            <AiAdvantage />
            <GlobalReach />
            <FinalCTA />
        </main>
    );
}
