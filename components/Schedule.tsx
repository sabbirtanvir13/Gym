"use client";

import { motion } from "framer-motion";
import { Sun, Moon, Dumbbell, Sparkles, Clock, CalendarX2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

// ─── MOCK DATA ─────────────────────────────────────────────────────────
// Ei data gulo apni apnar gym er actual time onujayi change kore nite parben
const SCHEDULE_DATA = [
  {
    id: "men",
    title: "MEN'S SCHEDULE",
    subtitle: "Regular 6 Days (Sat - Thu)",
    theme: "from-accent/[0.08] via-white/[0.02] to-transparent border-accent/30",
    accent: "text-accent",
    glow: "hover:shadow-[0_0_40px_var(--theme-accent-glow)]",
    icon: Dumbbell,
    morning: [
      { time: "06:00 AM - 08:00 AM", name: "Early Bird Fitness & Cardio" },
      { time: "08:00 AM - 10:00 AM", name: "Morning Strength Batch" },
    ],
    evening: [
      { time: "05:00 PM - 07:00 PM", name: "Evening General Fitness" },
      { time: "07:00 PM - 10:00 PM", name: "Heavy Weight & Pro Bodybuilding" },
    ],
  },
  {
    id: "women",
    title: "WOMEN'S SCHEDULE",
    subtitle: "Regular 6 Days (Sat - Thu)",
    theme: "from-secondary/[0.08] via-white/[0.02] to-transparent border-secondary/30",
    accent: "text-secondary",
    glow: "hover:shadow-[0_0_40px_var(--theme-secondary-glow)]",
    icon: Sparkles,
    morning: [
      { time: "09:00 AM - 10:30 AM", name: "Morning Yoga & Aerobics" },
      { time: "10:30 AM - 12:00 PM", name: "Cardio & Fat Loss Program" },
    ],
    evening: [
      { time: "03:00 PM - 05:00 PM", name: "Ladies Only General Batch" },
      { time: "04:00 PM - 05:00 PM", name: "Zumba & HIIT (Tue/Thu)" },
    ],
  },
];

/* ─── Animations ───────────────────────────────────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[var(--theme-accent-glow)] blur-[140px] opacity-25" />
      <div className="pointer-events-none absolute -right-40 bottom-1/3 h-[450px] w-[450px] rounded-full bg-[var(--theme-secondary-glow)] blur-[140px] opacity-20" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Weekly Routine"
          title="GYM TIMING & BATCHES"
          subtitle="Dedicated slots for men and women 6 days a week. Find your perfect workout time."
          center
        />

        {/* Top Info Badge */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-5 py-2 backdrop-blur-md">
            <CalendarX2 size={16} className="text-accent" />
            <span className="text-sm font-bold uppercase tracking-widest text-accent">
              Friday Closed / Maintenance
            </span>
          </div>
        </div>

        {/* ── Main Schedule Grid ── */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {SCHEDULE_DATA.map((group, i) => {
            const MainIcon = group.icon;

            return (
              <motion.div
                key={group.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className={`relative overflow-hidden rounded-3xl border bg-gradient-to-b p-6 sm:p-10 backdrop-blur-xl transition-all duration-500 ${group.theme} ${group.glow}`}
              >
                {/* Header Section */}
                <div className="mb-10 flex items-center gap-5">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md ${group.accent}`}
                  >
                    <MainIcon size={32} />
                  </div>
                  <div>
                    <h2 className="font-display text-3xl font-black uppercase tracking-tight text-white">
                      {group.title}
                    </h2>
                    <p className="mt-1 text-sm font-bold uppercase tracking-widest text-ash">
                      {group.subtitle}
                    </p>
                  </div>
                </div>

                {/* Morning Slots */}
                <div className="mb-8">
                  <div className="mb-4 flex items-center gap-2 border-b border-white/8 pb-3">
                    <Sun size={18} className="text-amber-400" />
                    <h3 className="text-sm font-extrabold uppercase tracking-widest text-white/90">
                      Morning Shifts
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {group.morning.map((slot, idx) => (
                      <div
                        key={idx}
                        className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl border border-white/6 bg-white/[0.02] p-4 transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.04]"
                      >
                        <div className="flex items-center gap-3">
                          <Clock size={16} className={group.accent} />
                          <span className="font-mono text-sm font-bold text-white">
                            {slot.time}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-ash sm:text-right group-hover:text-white transition-colors">
                          {slot.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Evening Slots */}
                <div>
                  <div className="mb-4 flex items-center gap-2 border-b border-white/8 pb-3">
                    <Moon size={18} className="text-accent" />
                    <h3 className="text-sm font-extrabold uppercase tracking-widest text-white/90">
                      Evening Shifts
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {group.evening.map((slot, idx) => (
                      <div
                        key={idx}
                        className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl border border-white/6 bg-white/[0.02] p-4 transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.04]"
                      >
                        <div className="flex items-center gap-3">
                          <Clock size={16} className={group.accent} />
                          <span className="font-mono text-sm font-bold text-white">
                            {slot.time}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-ash sm:text-right group-hover:text-white transition-colors">
                          {slot.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
