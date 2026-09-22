"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/data";

export default function Transformation() {
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

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          READY TO TRANSFORM
          <br />
          <span className="text-gradient">YOUR BODY?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-6 max-w-xl text-lg text-white/70"
        >
          Your journey starts with one decision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-10"
        >
          <a
            href="#membership"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#membership")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-10 py-4 text-sm font-bold text-black transition-transform duration-300 hover:scale-105"
          >
            START YOUR JOURNEY
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
