"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Dumbbell,
  Flame,
  Crosshair,
  Users,
  HeartPulse,
  Clock,
  Sparkles,
  CheckCircle2,
  X,
  Zap,
  Target,
  ShieldCheck,
} from "lucide-react";
import { PROGRAMS } from "@/lib/data";
import SectionHeading from "./SectionHeading";

/* ─── CATEGORIES ────────────────────────────────────────────────────────── */
const CATEGORIES = [
  "All",
  "Strength",
  "Cardio",
  "Weight Loss",
  "Cross Training",
  "Personal",
] as const;

interface ExtendedProgram {
  name: string;
  desc: string;
  image: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  diffColor: string;
  isPopular: boolean;
  duration: string;
  calories: string;
  highlights: string[];
  benefits: string[];
}

/* ─── RICH DATA ENHANCER ────────────────────────────────────────────────── */
const getExtendedPrograms = (): ExtendedProgram[] => {
  return PROGRAMS.map((p) => {
    let category = "Strength";
    let icon = Dumbbell;
    let difficulty: "Beginner" | "Intermediate" | "Advanced" | "All Levels" = "Advanced";
    let isPopular = false;
    let diffColor = "border-red-500/30 bg-red-500/10 text-red-400";
    let calories = "600-850 kcal";
    let duration = "60 min · 4x/week";
    let highlights = ["Barbell Mastery", "Heavy Lifts", "Progressive Overload"];
    let benefits = [
      "Significant strength & power increase",
      "Bone density & joint stability improvement",
      "Structured 1-on-1 form checks & safety",
    ];

    const nameLower = p.name.toLowerCase();

    if (nameLower.includes("weight")) {
      category = "Weight Loss";
      icon = Flame;
      difficulty = "Beginner";
      diffColor = "border-emerald-500/30 bg-emerald-500/10 text-emerald-400";
      calories = "500-750 kcal";
      duration = "45 min · 5x/week";
      highlights = ["Fat Burn", "High Sweat", "Metabolic Boost"];
      benefits = [
        "Accelerated fat loss and calorie burning",
        "Sustainable dietary & habit tracking",
        "Full body toning without bulk",
      ];
    } else if (nameLower.includes("cardio")) {
      category = "Cardio";
      icon = HeartPulse;
      difficulty = "Intermediate";
      diffColor = "border-amber-500/30 bg-amber-500/10 text-amber-400";
      calories = "450-700 kcal";
      duration = "45 min · 4x/week";
      highlights = ["Stamina", "Heart Health", "Endurance"];
      benefits = [
        "Enhanced cardiovascular endurance",
        "Lower resting heart rate & stamina",
        "Endorphin boost & mental clarity",
      ];
    } else if (nameLower.includes("cross")) {
      category = "Cross Training";
      icon = Crosshair;
      difficulty = "Advanced";
      diffColor = "border-purple-500/30 bg-purple-500/10 text-purple-400";
      calories = "700-1000 kcal";
      duration = "60 min · 3x/week";
      highlights = ["Olympic Bar", "Agility", "High Intensity"];
      benefits = [
        "Unmatched functional agility & stamina",
        "High-energy group competition WODs",
        "Explosive athletic speed & power",
      ];
    } else if (nameLower.includes("personal")) {
      category = "Personal";
      icon = Users;
      difficulty = "All Levels";
      diffColor = "border-accent/40 bg-accent/15 text-accent";
      isPopular = true;
      calories = "Customized";
      duration = "60 min · 1-on-1";
      highlights = ["VIP Coach", "Custom Meal", "100% Focus"];
      benefits = [
        "Tailored workout & nutrition blueprint",
        "Dedicated certified coach by your side",
        "Fastest path to targeted body goals",
      ];
    } else if (nameLower.includes("muscle")) {
      category = "Strength";
      icon = Zap;
      difficulty = "Intermediate";
      diffColor = "border-blue-500/30 bg-blue-500/10 text-blue-400";
      calories = "550-800 kcal";
      duration = "50 min · 4x/week";
      highlights = ["Hypertrophy", "Mass Gain", "Sculpting"];
      benefits = [
        "Maximum muscle hypertrophy & symmetry",
        "Strict isolation & compound split routine",
        "Optimal post-workout nutrition plan",
      ];
    }

    return {
      ...p,
      category,
      icon,
      difficulty,
      diffColor,
      isPopular,
      duration,
      calories,
      highlights,
      benefits,
    };
  });
};

/* ─── MOTION VARIANTS ──────────────────────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 20,
    transition: { duration: 0.3 },
  },
};

export default function Programs() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedProgram, setSelectedProgram] = useState<ExtendedProgram | null>(null);

  const extendedPrograms = useMemo(() => getExtendedPrograms(), []);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: extendedPrograms.length };
    extendedPrograms.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [extendedPrograms]);

  const filteredPrograms = useMemo(() => {
    if (activeTab === "All") return extendedPrograms;
    return extendedPrograms.filter((p) => p.category === activeTab);
  }, [activeTab, extendedPrograms]);

  const handleOpenProgram = (program: ExtendedProgram) => {
    setSelectedProgram(program);
  };

  return (
    <section id="programs" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Ambient Mesh Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[var(--theme-accent-glow)] blur-[160px] opacity-25" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[450px] w-[450px] rounded-full bg-[var(--theme-secondary-glow)] blur-[150px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 z-10">
        <SectionHeading
          eyebrow="Elite Training Options"
          title="CHOOSE YOUR PROGRAM"
          subtitle="Engineered by certified master coaches to produce real, measurable physical transformations."
          center
        />

        {/* ─── CATEGORY FILTER TABS ─────────────────────────────────────── */}
        <div className="mt-12 flex justify-start lg:justify-center overflow-x-auto hide-scrollbar pb-4">
          <div className="inline-flex gap-2 rounded-2xl border border-white/10 bg-charcoal/60 p-2 backdrop-blur-xl shrink-0">
            {CATEGORIES.map((tab) => {
              const isActive = activeTab === tab;
              const count = categoryCounts[tab] || 0;

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                    isActive ? "text-black" : "text-ash hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-program-pill"
                      className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-accent to-secondary shadow-md shadow-accent/20"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-black transition-colors ${
                      isActive ? "bg-black/20 text-black" : "bg-white/10 text-ash"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
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
                <motion.div
                  key={program.name}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => handleOpenProgram(program)}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/8 bg-charcoal/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_var(--theme-accent-glow)]"
                >
                  {/* Image Container & Overlays */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    {/* Top Difficulty Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-widest backdrop-blur-md ${program.diffColor}`}
                      >
                        <Target size={11} />
                        {program.difficulty}
                      </span>
                    </div>

                    {/* Popular Badge */}
                    {program.isPopular && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-accent to-secondary px-3 py-1 text-[10px] font-black uppercase tracking-widest text-black shadow-lg">
                          <Sparkles size={11} />
                          Most Popular
                        </span>
                      </div>
                    )}

                    {/* Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={program.image}
                      alt={program.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      loading="lazy"
                    />

                    {/* Ambient Duotone Tint Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-75" />

                    {/* Floating Quick View Hint */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/40 backdrop-blur-xs">
                      <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-ink/80 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-xl">
                        View Program Details <ArrowUpRight size={14} className="text-accent" />
                      </span>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="relative p-6 lg:p-7 z-10">
                    {/* Header Row */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-accent transition-transform duration-300 group-hover:scale-110 group-hover:border-accent/40">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold tracking-tight text-white transition-colors group-hover:text-accent">
                            {program.name}
                          </h3>
                          <span className="text-[11px] font-semibold text-ash uppercase tracking-wider">
                            {program.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-ash transition-colors group-hover:text-white/80">
                      {program.desc}
                    </p>

                    {/* Highlight Pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {program.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/6 bg-white/[0.03] px-2.5 py-1 text-[10px] font-bold tracking-wide text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer Stats Bar */}
                    <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4 text-xs font-medium text-ash">
                      <div className="flex items-center gap-1.5">
                        <Clock size={13} className="text-accent" />
                        <span className="font-mono font-bold text-white/90">{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Flame size={13} className="text-secondary" />
                        <span className="font-mono text-white/80">{program.calories}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent Glow Line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-accent to-secondary transition-all duration-500 ease-out group-hover:w-full" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ─── PROGRAM DETAIL MODAL ───────────────────────────────────────── */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProgram(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-charcoal p-6 sm:p-8 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                <X size={20} />
              </button>

              {/* Header Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-widest ${selectedProgram.diffColor}`}>
                  <ShieldCheck size={12} />
                  {selectedProgram.difficulty} Level
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  {selectedProgram.category}
                </span>
              </div>

              {/* Title & Desc */}
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {selectedProgram.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ash">
                {selectedProgram.desc}
              </p>

              {/* Key Metrics Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-ash">Duration</p>
                  <p className="mt-1 font-mono text-sm font-extrabold text-white">{selectedProgram.duration}</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-ash">Est. Burn</p>
                  <p className="mt-1 font-mono text-sm font-extrabold text-secondary">{selectedProgram.calories}</p>
                </div>
                <div className="col-span-2 sm:col-span-1 rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-ash">Format</p>
                  <p className="mt-1 font-mono text-sm font-extrabold text-accent">Coached & Supervised</p>
                </div>
              </div>

              {/* Key Benefits List */}
              <div className="mt-6">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-white/90 mb-3">
                  Program Benefits & Outcomes
                </h4>
                <ul className="space-y-2">
                  {selectedProgram.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ash">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Action CTA */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/8801777829308?text=${encodeURIComponent(
                    `Hello Ahmed Gym & Cafe 29! 👋\nI want to enroll / get details about the *${selectedProgram.name}* program.\n\n• Duration: ${selectedProgram.duration}\n• Target: ${selectedProgram.category}\n\nPlease share batch schedule and pricing info. Thanks!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-secondary px-6 py-4 text-sm font-bold text-black transition-all hover:scale-102 shadow-lg shadow-accent/20"
                >
                  Book Session via WhatsApp
                  <ArrowUpRight size={18} />
                </a>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="w-full sm:w-auto rounded-2xl border border-white/10 px-6 py-4 text-sm font-bold text-ash hover:text-white hover:bg-white/5 transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

