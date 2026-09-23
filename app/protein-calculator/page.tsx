import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProteinCalculator from "@/components/ui/ProteinCalculator";

export const metadata: Metadata = {
  title: "Personalized Daily Protein Calculator | Ahmed Gym & Cafe 29",
  description:
    "Calculate your exact recommended daily protein intake based on your weight, height, age, gender, fitness goals, and activity level.",
  keywords: [
    "protein calculator",
    "daily protein intake",
    "gym nutrition",
    "muscle gain protein",
    "fat loss protein",
    "fitness calculator",
  ],
};

export default function ProteinCalculatorPage() {
  return (
    <div className="relative min-h-screen pt-28 pb-16 lg:pt-36">
      {/* Background Glow Overlay */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[450px] w-[90%] max-w-4xl rounded-full bg-[var(--theme-accent-glow)] blur-[150px] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ash mb-6"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="hover:text-accent transition-colors duration-200"
          >
            Home
          </Link>
          <ChevronRight size={13} className="text-ash-2" />
          <span className="text-accent">Protein Calculator</span>
        </nav>
      </div>

      {/* Main Protein Calculator Component */}
      <ProteinCalculator />
    </div>
  );
}
