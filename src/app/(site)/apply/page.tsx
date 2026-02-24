import type { Metadata } from "next";
import ApplyClient from "@/components/ApplyClient";

export const metadata: Metadata = {
    title: "Apply to Build Your Startup With Us",
    description: "Submit your idea for validation and partnership.",
};

export default function ApplyPage() {
    return <ApplyClient />;
}
