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
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMAGES.about}
                alt="Gym interior"
                className="aspect-[4/5] w-full object-cover ken-burns"
                loading="lazy"
              />
              <div className="duotone-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent z-20" />
            </div>

            {/* Floating secondary image */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-8 -right-4 w-44 overflow-hidden rounded-2xl border-4 border-ink shadow-2xl sm:w-56 lg:-right-8 group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMAGES.aboutSecondary}
                alt="Gym equipment"
                className="aspect-square w-full object-cover ken-burns"
                loading="lazy"
              />
              <div className="duotone-overlay" />
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
            <motion.ul 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {HIGHLIGHTS.map((item, i) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, x: -10 },
                    show: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
                  }}
                  className="flex items-center gap-3 text-sm font-medium text-white/90"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary shadow-[0_0_10px_rgba(250,204,21,0.2)]">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            {/* Feature cards */}
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {FEATURES.map((feature, i) => {
                const Icon = ICONS[feature.icon] || Dumbbell;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -6 }}
                    className="group rounded-2xl glass p-6 transition-all duration-400 hover:border-secondary/40 hover:shadow-[0_8px_30px_rgba(250,204,21,0.08)]"
                  >
                    <div className="icon-container h-12 w-12 text-secondary group-hover:scale-110">
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
