"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calculator, ArrowRight, Flame, Scale, Activity } from "lucide-react";

export default function ProteinCalculatorPromo() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[90%] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--theme-accent-glow)] blur-[140px] opacity-35" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-ink-2/90 p-8 backdrop-blur-xl md:p-12 lg:p-16">
          {/* Subtle noise grid accent */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Text & Action Area */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Eyebrow badge */}
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-accent">
                  NUTRITION &amp; PERFORMANCE
                </span>
              </div>

              {/* Title */}
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-[1.15]">
                Know Your Daily{" "}
                <span className="text-accent drop-shadow-[0_0_20px_var(--theme-accent-glow)]">
                  Protein Needs
                </span>
              </h2>

              {/* Description */}
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ash sm:text-lg">
                Discover how much protein your body may need based on your weight, fitness goal, and activity level.
              </p>

              {/* CTA Button */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/protein-calculator"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-accent to-secondary px-8 py-4 text-sm font-extrabold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_25px_var(--theme-accent-glow)] active:scale-[0.98]"
                >
                  <Calculator size={18} className="relative z-10 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="relative z-10 uppercase tracking-wide">
                    Calculate Your Protein
                  </span>
                  <ArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[150%] skew-x-[-20deg]" />
                </Link>
              </div>
            </motion.div>

            {/* Feature Cards Visual Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3.5"
            >
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-2/80 p-4 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.04]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Scale size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Body-Weight Based</h4>
                  <p className="text-xs text-ash">Precise g/kg intake calculations</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-2/80 p-4 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.04]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Flame size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Goal Tailored</h4>
                  <p className="text-xs text-ash">Muscle gain, fat loss &amp; strength</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-2/80 p-4 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.04]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Activity size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">BMI Health System</h4>
                  <p className="text-xs text-ash">Integrated Body Mass Index analysis</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
