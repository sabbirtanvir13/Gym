"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Award, Flame, Users, Star } from "lucide-react";
import { TEAM_METRICS } from "@/lib/trainers-data";

export default function TrainersHero() {
  const metricIcons = [Users, Award, Flame, Star];

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      {/* Dynamic ambient gradient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[450px] w-[90%] max-w-4xl rounded-full bg-[var(--theme-accent-glow)] blur-[140px] opacity-40" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-[380px] w-[380px] rounded-full bg-[var(--theme-secondary-glow)] blur-[120px] opacity-25" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ash mb-6"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="hover:text-accent transition-colors duration-200"
          >
            Home
          </Link>
          <ChevronRight size={13} className="text-ash-2" />
          <span className="text-accent">Trainers &amp; Coaches</span>
        </motion.nav>

        {/* Header content */}
        <div className="max-w-3xl">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-md mb-5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              ELITE ATHLETIC ROSTER
            </span>
            <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-extrabold text-accent">
              6 Certified Mentors
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]"
          >
            MEET OUR{" "}
            <span className="text-accent drop-shadow-[0_0_24px_var(--theme-accent-glow)]">
              ELITE TRAINERS
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg leading-relaxed text-ash max-w-2xl"
          >
            Transform your body with our team of 6 elite coaches — 3 dedicated female specialists &amp; 3 master male trainers. Whether you aim for raw strength, fat loss, mobility, or peak athletic conditioning, get the world-class guidance you deserve.
          </motion.p>
        </div>

        {/* Quick Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4"
        >
          {TEAM_METRICS.map((metric, i) => {
            const Icon = metricIcons[i % metricIcons.length];
            return (
              <div
                key={metric.label}
                className="group relative overflow-hidden rounded-2xl border border-white/6 bg-white/[0.02] p-5 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.04] hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon size={16} />
                  </span>
                </div>
                <div className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white">
                  {metric.value}
                  <span className="text-accent text-lg font-bold">{metric.suffix}</span>
                </div>
                <p className="mt-1 text-xs font-medium text-ash group-hover:text-white/80 transition-colors">
                  {metric.label}
                </p>
                {/* Subtle bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
