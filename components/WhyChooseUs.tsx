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
    <section className="relative py-24 lg:py-32">
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
                transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-accent/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <span className="text-base font-semibold">{item.title}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Stats with counters */}
        <div className="mt-16 grid grid-cols-2 gap-8 rounded-3xl border border-white/8 bg-gradient-to-b from-white/[0.03] to-transparent p-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="font-display text-4xl font-extrabold text-accent lg:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-wider text-ash">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
