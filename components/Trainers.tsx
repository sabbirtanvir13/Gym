"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, Users, ArrowRight } from "lucide-react";
import { TRAINERS } from "@/lib/data";
import { InstagramIcon, FacebookIcon, XIcon } from "./SocialIcons";

const CHECKLIST = [
  "Certified & experienced trainers",
  "Personalized training programs",
  "Flexible scheduling",
  "Nutrition guidance included",
];

/* ─── Animation variants ─────────────────────────────────────────────── */
const fadeLeft = {
  hidden: { opacity: 0, x: -48, scale: 1.05 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};
const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 },
  },
};
const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
};
const listItem = {
  hidden: { opacity: 0, scale: 0.88, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Trainers() {
  return (
    <section id="trainers" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[var(--theme-accent-glow)] blur-[120px] opacity-40" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[var(--theme-secondary-glow)] blur-[100px] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* ═══════════════════════════════════════════════════════════════
            FEATURED SPLIT SECTION
        ═══════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16 lg:items-stretch">

          {/* ── LEFT: Featured Image ───────────────────────────────── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative w-full lg:w-[45%] shrink-0"
          >
            {/* Decorative pulsing ring — top-right corner of the image */}
            <div className="absolute -top-3 -right-3 z-20 flex h-10 w-10 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-30" />
              <span className="relative h-4 w-4 rounded-full bg-accent shadow-[0_0_12px_var(--theme-accent-glow)]" />
            </div>

            {/* Glowing border frame */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-accent/30 via-transparent to-secondary/20 opacity-60" />

            <div className="relative overflow-hidden rounded-3xl aspect-[3/4] lg:aspect-auto lg:h-full min-h-[480px]">
              <Image
                src="/mmentor/mentor.png"
                alt="Elite fitness trainer at Ahmed Gym & Cafe 29"
                fill
                className="object-cover object-top transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
              {/* Duotone colour overlay */}
              <div
                className="absolute inset-0 mix-blend-color opacity-20 pointer-events-none z-[1]"
                style={{ backgroundColor: "var(--theme-accent)" }}
              />
              {/* Bottom fade to dark */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent z-[2]" />

              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 z-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Users size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-ash">Elite Staff</p>
                  <p className="text-sm font-bold text-white">15+ Expert Coaches</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Text Content ────────────────────────────────── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col justify-center lg:w-[55%]"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
                Elite Staff
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              MEET OUR{" "}
              <span className="text-accent">FITNESS COACHES</span>
            </h2>

            {/* Body text */}
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ash">
              Our dedicated team of certified professionals is here to guide,
              motivate, and push you past your limits. Get one-on-one guidance
              from the best trainers in the industry, complete with customized
              programs and constant motivation to crush your goals.
            </p>

            {/* Checklist */}
            <motion.ul
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {CHECKLIST.map((item) => (
                <motion.li
                  key={item}
                  variants={listItem}
                  className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/[0.02] px-4 py-3 transition-colors duration-300 hover:border-accent/25 hover:bg-white/[0.04]"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-white/85">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <Link
                href="/trainers"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-accent to-secondary px-8 py-4 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_30px_var(--theme-accent-glow)]"
              >
                <Users size={16} className="relative z-10" />
                <span className="relative z-10">VIEW OUR TRAINERS</span>
                <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                {/* Shimmer sweep */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[200%] skew-x-[-20deg]" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            FULL TEAM GRID — secondary subsection
        ═══════════════════════════════════════════════════════════════ */}



      </div>
    </section>
  );
}
