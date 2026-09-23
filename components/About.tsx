"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  Award,
  Target,
  Sparkles,
  Check,
} from "lucide-react";
import { IMAGES, FEATURES } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Dumbbell,
  Award,
  Target,
  Sparkles,
};

const HIGHLIGHTS = [
  "Professional coaching",
  "Modern equipment",
  "Motivating community",
  "Personalized plans",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Ambient background glow for luxury feel */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left: Images Column (No Borders) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main Image - No Border */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group aspect-[4/5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMAGES.about}
                alt="Gym interior"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80" />
            </div>

            {/* Floating Secondary Image - Completely Borderless & Super Clear */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -right-3 sm:-right-6 z-30 w-48 sm:w-60 aspect-square overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMAGES.aboutSecondary}
                alt="Gym equipment"
                className="h-full w-full object-cover brightness-105 contrast-105 transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>

            {/* Floating Stat Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -left-4 top-8 z-30 flex items-center gap-3.5 rounded-2xl border border-white/15 bg-ink/80 px-5 py-3.5 shadow-2xl backdrop-blur-xl lg:-left-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/15 text-secondary border border-secondary/30">
                <Award size={22} />
              </div>
              <div>
                <div className="font-display text-2xl font-black tracking-tight text-white">
                  10<span className="text-secondary">+</span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-ash">
                  Years Experience
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content Column */}
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="MORE THAN A GYM"
              subtitle="We provide professional training, modern equipment, expert trainers, and a motivating environment — everything you need to become your strongest self."
            />

            {/* Highlights Grid */}
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5"
            >
              {HIGHLIGHTS.map((item) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                  }}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors hover:border-secondary/30 hover:bg-white/[0.04]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary shadow-[0_0_12px_rgba(250,204,21,0.25)]">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            {/* Feature Cards Grid */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {FEATURES.map((feature, i) => {
                const Icon = ICONS[feature.icon] || Dumbbell;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -5 }}
                    className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-md transition-all duration-300 hover:border-secondary/50 hover:shadow-[0_10px_30px_rgba(250,204,21,0.1)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary border border-secondary/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-secondary group-hover:text-ink">
                      <Icon size={22} />
                    </div>
                    <h4 className="mt-5 text-base font-bold text-white tracking-wide">
                      {feature.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-ash">
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}