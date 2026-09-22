"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { IMAGES, STATS } from "@/lib/data";
import Counter from "./Counter";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.9]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ scale: imageScale, y: imageY }}
        className="absolute inset-0 z-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES.hero}
          alt="Gym"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-10 bg-gradient-to-b from-ink/70 via-ink/50 to-ink"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-ink via-ink/40 to-transparent" />

      {/* Floating gradient glow */}
      <div className="absolute left-1/4 top-1/3 z-10 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 mx-auto w-full max-w-7xl px-5 pt-32 pb-20 lg:px-8"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
        >
          <Sparkles size={14} className="text-accent" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Premium Fitness Experience
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display max-w-5xl text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          {["BUILD YOUR", "STRONGEST", "SELF."].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4 + i * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block"
            >
              {i === 1 ? (
                <span className="text-gradient">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 max-w-xl text-lg text-white/70 sm:text-xl"
        >
          Train harder. Move stronger. Become better.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#membership"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#membership")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-accent px-8 py-4 text-sm font-bold text-black transition-transform duration-300 hover:scale-105"
          >
            <span className="relative z-10">JOIN NOW</span>
            <ArrowRight
              size={16}
              className="relative z-10 transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#programs"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10"
          >
            <Play size={14} className="text-accent" />
            <span>EXPLORE PROGRAMS</span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-ash">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
