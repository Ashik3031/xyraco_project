import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "XYRACO | Architectural Engineering Engine",
    description: "Xyraco is a premium co-builder engine for elite founders. We build brands and high-end digital experiences.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased selection:bg-accent selection:text-white`}>
                <SmoothScroll>
                    <Preloader />
                    <CustomCursor />
                    <Header />
                    <PageTransition>
                        {children}
                    </PageTransition>
                    <Footer />
                </SmoothScroll>
            </body>
        </html>
    );
}
