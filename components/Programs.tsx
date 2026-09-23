"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Dumbbell,
  Flame,
  Activity,
  Crosshair,
  Users,
  HeartPulse,
  Clock,
} from "lucide-react";
import { PROGRAMS } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import SectionDivider from "./SectionDivider";

/* ─── CATEGORIES & TABS ────────────────────────────────────────────────── */
const TABS = [
  "All",
  "Strength",
  "Cardio",
  "Weight Loss",
  "Cross Training",
  "Personal",
];

/* ─── HELPER TO EXTEND MOCK DATA (Difficulty, Icons, etc.) ─────────────── */
// যেহেতু আপনার অরিজিনাল ডাটায় এই ফিল্ডগুলো নেই, তাই আমরা ডাইনামিক্যালি এগুলো এড করে নিচ্ছি।
const getExtendedPrograms = () => {
  return PROGRAMS.map((p) => {
    let category = "Strength";
    let icon = Dumbbell;
    let difficulty = "Advanced";
    let isPopular = false;
    let diffColor = "bg-red-500/20 text-red-400 border-red-500/30";

    const nameLower = p.name.toLowerCase();

    if (nameLower.includes("weight")) {
      category = "Weight Loss";
      icon = Flame;
      difficulty = "Beginner";
      diffColor = "bg-green-500/20 text-green-400 border-green-500/30";
    } else if (nameLower.includes("cardio")) {
      category = "Cardio";
      icon = HeartPulse;
      difficulty = "Intermediate";
      diffColor = "bg-amber-500/20 text-amber-400 border-amber-500/30";
    } else if (nameLower.includes("cross")) {
      category = "Cross Training";
      icon = Crosshair;
      difficulty = "Advanced";
      diffColor = "bg-red-500/20 text-red-400 border-red-500/30";
    } else if (nameLower.includes("personal")) {
      category = "Personal";
      icon = Users;
      difficulty = "All Levels";
      diffColor = "bg-accent/20 text-accent border-accent/30";
      isPopular = true;
    }

    return {
      ...p,
      category,
      icon,
      difficulty,
      diffColor,
      isPopular,
      duration: "45 min · 3x/week",
    };
  });
};

/* ─── ANIMATION VARIANTS ───────────────────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3 },
  },
};

export default function Programs() {
  const [activeTab, setActiveTab] = useState("All");

  // Data processing based on active tab
  const extendedPrograms = useMemo(() => getExtendedPrograms(), []);
  const filteredPrograms = useMemo(() => {
    if (activeTab === "All") return extendedPrograms;
    return extendedPrograms.filter((p) => p.category === activeTab);
  }, [activeTab, extendedPrograms]);

  return (
    <section
      id="programs"
      className="relative py-24 lg:py-32 bg-ink-2 overflow-hidden"
    >
      <SectionDivider position="top" color="fill-ink" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Programs"
          title="TRAIN SMARTER"
          subtitle="Every program is engineered by certified professionals to deliver real, measurable results."
          center
        />

        {/* ─── FILTER TABS ──────────────────────────────────────────────── */}
        <div className="mt-10 flex justify-start lg:justify-center overflow-x-auto hide-scrollbar pb-4">
          <div className="flex gap-2 rounded-full border border-white/10 bg-white/[0.02] p-1.5 backdrop-blur-md shrink-0">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2.5 text-sm font-bold uppercase tracking-widest transition-colors duration-300 rounded-full ${
                  activeTab === tab
                    ? "text-black"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-program-tab"
                    className="absolute inset-0 -z-10 rounded-full bg-accent shadow-[0_0_15px_var(--theme-accent-glow)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ─── PROGRAMS GRID ────────────────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program) => {
              const Icon = program.icon;

              return (
                <motion.a
                  key={program.name}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  href="#contact"
                  className="group relative block overflow-hidden rounded-3xl border border-white/8 bg-charcoal transition-all duration-500 hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_20px_var(--theme-accent-glow)]"
                >
                  {/* ── Image & Badges ── */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-black">
                    {/* Difficulty Badge (Top Left) */}
                    <div className="absolute top-4 left-4 z-20">
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-widest backdrop-blur-md ${program.diffColor}`}
                      >
                        {program.difficulty}
                      </span>
                    </div>

                    {/* Most Popular Ribbon (Top Right) - Only for Personal Training */}
                    {program.isPopular && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-[10px] font-black uppercase tracking-widest text-black shadow-lg">
                          Most Popular
                        </span>
                      </div>
                    )}

                    {/* Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={program.image}
                      alt={program.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Smooth & Darker Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:from-ink" />

                    {/* "Book a Session" Hover Reveal (Bottom Center) */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center translate-y-8 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 z-20">
                      <span className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest text-accent drop-shadow-md">
                        Book a Session <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>

                  {/* ── Content ── */}
                  <div className="relative p-6 lg:p-8 z-10 bg-charcoal transition-colors duration-500 group-hover:bg-ink">
                    <div className="flex items-start justify-between gap-4">
                      {/* Title + Icon */}
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.04] text-white/50 transition-colors duration-300 group-hover:text-accent">
                          <Icon size={20} />
                        </div>
                        <h3 className="font-display text-xl font-bold tracking-tight text-white group-hover:text-accent transition-colors">
                          {program.name}
                        </h3>
                      </div>

                      {/* Arrow Button */}
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-ash transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-black">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-ash/80 group-hover:text-white/70 transition-colors">
                      {program.desc}
                    </p>

                    {/* Duration / Frequency Badge */}
                    <div className="mt-6 flex items-center gap-2 border-t border-white/5 pt-5">
                      <Clock
                        size={14}
                        className="text-white/40 group-hover:text-accent transition-colors"
                      />
                      <span className="text-xs font-bold tracking-widest uppercase text-white/50">
                        {program.duration}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Accent Glow Line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full" />
                </motion.a>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* ─── SECTION FOOTER BUTTON ────────────────────────────────────── */}
        <div className="mt-16 flex justify-center">
          <motion.a
            href="#all-programs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative inline-flex overflow-hidden rounded-full border border-accent px-8 py-4 font-bold uppercase tracking-widest text-accent transition-all hover:border-transparent hover:shadow-[0_0_20px_var(--theme-accent-glow)]"
          >
            {/* Background Fill */}
            <div className="absolute inset-0 translate-y-full bg-accent transition-transform duration-300 ease-out group-hover:translate-y-0" />

            {/* Shimmer Sweep Effect */}
            <div className="absolute inset-0 -translate-x-[150%] skew-x-12 bg-white/20 transition-transform duration-700 ease-out group-hover:translate-x-[150%] z-10" />

            {/* Button Text */}
            <span className="relative z-20 transition-colors duration-300 group-hover:text-black">
              View All Programs
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
