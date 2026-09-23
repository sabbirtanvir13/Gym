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
    theme: "from-blue-600/10 via-blue-600/5 to-transparent border-blue-500/20",
    accent: "text-blue-400",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.15)]",
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
    theme: "from-pink-600/10 via-pink-600/5 to-transparent border-pink-500/20",
    accent: "text-pink-400",
    glow: "shadow-[0_0_30px_rgba(236,72,153,0.15)]",
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
    transition: { delay: i * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="relative py-24 lg:py-32 overflow-hidden bg-[#020202]"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-pink-500/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Weekly Routine"
          title="GYM TIMING & BATCHES"
          subtitle="Dedicated slots for men and women 6 days a week. Find your perfect workout time."
          center
        />

        {/* Top Info Badge */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 backdrop-blur-md">
            <CalendarX2 size={16} className="text-accent" />
            <span className="text-sm font-bold uppercase tracking-widest text-white/80">
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
                className={`relative overflow-hidden rounded-3xl border bg-gradient-to-b p-6 sm:p-10 backdrop-blur-xl ${group.theme} ${group.glow}`}
              >
                {/* Header Section */}
                <div className="mb-10 flex items-center gap-5">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-black/40 border border-white/5 backdrop-blur-md ${group.accent}`}
                  >
                    <MainIcon size={32} />
                  </div>
                  <div>
                    <h2 className="font-display text-3xl font-black uppercase tracking-tight text-white">
                      {group.title}
                    </h2>
                    <p className="mt-1 text-sm font-bold uppercase tracking-widest text-white/50">
                      {group.subtitle}
                    </p>
                  </div>
                </div>

                {/* Morning Slots */}
                <div className="mb-8">
                  <div className="mb-4 flex items-center gap-2 border-b border-white/5 pb-3">
                    <Sun size={18} className="text-yellow-500" />
                    <h3 className="text-sm font-extrabold uppercase tracking-widest text-white/80">
                      Morning Shifts
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {group.morning.map((slot, idx) => (
                      <div
                        key={idx}
                        className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl bg-black/20 p-4 transition-colors hover:bg-black/40"
                      >
                        <div className="flex items-center gap-3">
                          <Clock size={16} className={group.accent} />
                          <span className="font-mono text-sm font-bold text-white">
                            {slot.time}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-white/60 sm:text-right">
                          {slot.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Evening Slots */}
                <div>
                  <div className="mb-4 flex items-center gap-2 border-b border-white/5 pb-3">
                    <Moon size={18} className="text-indigo-400" />
                    <h3 className="text-sm font-extrabold uppercase tracking-widest text-white/80">
                      Evening Shifts
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {group.evening.map((slot, idx) => (
                      <div
                        key={idx}
                        className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl bg-black/20 p-4 transition-colors hover:bg-black/40"
                      >
                        <div className="flex items-center gap-3">
                          <Clock size={16} className={group.accent} />
                          <span className="font-mono text-sm font-bold text-white">
                            {slot.time}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-white/60 sm:text-right">
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
