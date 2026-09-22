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
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMAGES.about}
                alt="Gym interior"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>

            {/* Floating secondary image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="absolute -bottom-8 -right-4 w-44 overflow-hidden rounded-2xl border-4 border-ink shadow-2xl sm:w-56 lg:-right-8"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMAGES.aboutSecondary}
                alt="Gym equipment"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -left-4 top-8 glass rounded-2xl px-5 py-4 lg:-left-8"
            >
              <div className="font-display text-3xl font-extrabold text-accent">10+</div>
              <div className="text-xs uppercase tracking-wider text-ash">Years</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="MORE THAN A GYM"
              subtitle="We provide professional training, modern equipment, expert trainers, and a motivating environment — everything you need to become your strongest self."
            />

            {/* Highlights */}
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {HIGHLIGHTS.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 text-sm text-white/80"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check size={12} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Feature cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {FEATURES.map((feature, i) => {
                const Icon = ICONS[feature.icon] || Dumbbell;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -4 }}
                    className="group rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-accent/30"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                      <Icon size={20} />
                    </div>
                    <h4 className="mt-4 text-sm font-bold text-white">
                      {feature.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-ash">
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
