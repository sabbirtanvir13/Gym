"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Award, Flame, Users, Star } from "lucide-react";
import { TEAM_METRICS } from "@/lib/data/trainers-data";

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



        {/* Quick Stats Grid Removed */}
      </div>
    </section>
  );
}
