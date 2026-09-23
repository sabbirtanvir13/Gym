"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  BadgeCheck,
  CalendarClock,
  UserRound,
  Sparkles,
  Users,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Counter from "./Counter";
import SectionDivider from "./SectionDivider";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Dumbbell,
  BadgeCheck,
  CalendarClock,
  UserRound,
  Sparkles,
  Users,
};

const STATS = [
  { value: 500, suffix: "+", label: "Active Members" },
  { value: 15, suffix: "+", label: "Certified Trainers" },
  { value: 20, suffix: "+", label: "Weekly Classes" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-ink-2">
      <SectionDivider position="top" color="fill-ink" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="BUILT FOR RESULTS"
          subtitle="Everything you need under one roof — premium facilities, expert guidance, and a community that pushes you forward."
          center
        />

        {/* Feature grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICONS[item.icon] || Dumbbell;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, x: 4 }}
                className="group flex items-center gap-5 rounded-2xl glass p-6 transition-all duration-400 hover:border-accent/40 hover:shadow-[0_8px_30px_var(--theme-accent-glow)]"
              >
                <div className="icon-container h-12 w-12 shrink-0 text-accent group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <span className="text-base font-bold tracking-wide">{item.title}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Stats with counters */}
        <div className="mt-20 grid grid-cols-2 gap-4 sm:gap-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8 lg:p-12 lg:grid-cols-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group"
            >
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary lg:text-5xl drop-shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-3 text-xs uppercase tracking-widest font-bold text-ash-2 group-hover:text-white/80 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
