"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calculator } from "lucide-react";
import { IMAGES } from "@/lib/data/data";
import Link from "next/link";

export default function ProteinCalculatorPromo() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[70vh] items-center overflow-hidden"
    >
      {/* Background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES.transformation}
          alt="Transformation"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>

      <div className="absolute inset-0 z-10 bg-ink/80" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink via-ink/50 to-ink" />
      <div className="absolute left-1/2 top-1/2 z-10 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-20 mx-auto w-full max-w-4xl px-5 py-24 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-accent" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Your Journey Starts Here
          </span>
          <span className="h-px w-8 bg-accent" />
        </motion.div>

        {/* Title */}
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-[1.15]">
          Know Your Daily{" "}
          <span className="text-accent drop-shadow-[0_0_20px_var(--theme-accent-glow)]">
            Protein Needs
          </span>
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
      </div>
    </section>
  );
}
