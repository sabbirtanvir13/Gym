"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import SectionHeading from "./SectionHeading";

/* ─── Slide animation variants ──────────────────────────────────────────── */
const slideVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 80 : -80,
    scale: 0.97,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -80 : 80,
    scale: 0.97,
  }),
};

const transition = {
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1] as const,
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, 7000);
    return () => clearInterval(timer);
  }, [goNext]);

  const t = TESTIMONIALS[current];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* ── Ambient glows ──────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-[160px]" />
      <div className="pointer-events-none absolute -right-32 top-0 h-[300px] w-[300px] rounded-full bg-[var(--theme-secondary-glow)] blur-[130px] opacity-15" />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="WHAT MEMBERS SAY"
          center
        />

        {/* ── Testimonial Card ─────────────────────────────────────────── */}
        <div className="relative mt-16 min-h-[340px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className="relative overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[rgba(12,12,14,0.65)] backdrop-blur-2xl shadow-[0_8px_60px_rgba(0,0,0,0.5)]"
            >
              {/* ── Oversized quotation mark ─────────────────────────── */}
              <div
                className="pointer-events-none absolute -top-6 right-4 sm:right-10 select-none font-display leading-none text-accent/[0.06]"
                style={{ fontSize: "clamp(10rem, 20vw, 18rem)" }}
                aria-hidden
              >
                &ldquo;
              </div>

              {/* ── Card content ──────────────────────────────────────── */}
              <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-10 sm:px-12 sm:py-14 lg:flex-row lg:items-center lg:gap-14 lg:px-16 lg:py-16">
                {/* ─ Profile side ─ */}
                <div className="flex flex-col items-center shrink-0">
                  {/* Photo with accent ring */}
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/50 via-accent/20 to-transparent blur-[2px]" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.image}
                      alt={t.name}
                      className="relative h-24 w-24 rounded-full object-cover ring-[3px] ring-accent/30 ring-offset-2 ring-offset-[#0c0c0e] sm:h-28 sm:w-28"
                      loading="lazy"
                    />
                  </div>

                  {/* Name & role */}
                  <h3 className="mt-5 text-center font-display text-lg font-bold tracking-tight text-white sm:text-xl">
                    {t.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium tracking-wide text-ash sm:text-sm">
                    {t.role}
                  </p>

                  {/* Verified badge */}
                  <span className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-accent/[0.08] px-3 py-1 text-[11px] font-bold text-accent">
                    <BadgeCheck size={13} />
                    Verified Member
                  </span>
                </div>

                {/* ─ Review side ─ */}
                <div className="flex-1 flex flex-col items-center lg:items-start">
                  {/* Star rating */}
                  <div className="mb-5 flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-accent text-accent drop-shadow-[0_0_4px_var(--theme-accent-glow)]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-center text-lg leading-[1.75] text-white/90 sm:text-xl lg:text-left lg:text-[1.35rem] lg:leading-[1.8]">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                </div>
              </div>

              {/* ── Subtle bottom accent line ─────────────────────────── */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Controls ─────────────────────────────────────────────────── */}
        <div className="mt-10 flex items-center justify-center gap-5">
          {/* Prev arrow */}
          <button
            onClick={goPrev}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/60 transition-all duration-300 hover:border-accent/50 hover:bg-accent/[0.06] hover:text-accent hover:scale-105 active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
          </button>

          {/* Pagination dots */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`h-[5px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  i === current
                    ? "w-8 bg-accent shadow-[0_0_8px_var(--theme-accent-glow)]"
                    : "w-[5px] bg-white/15 hover:bg-white/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={goNext}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/60 transition-all duration-300 hover:border-accent/50 hover:bg-accent/[0.06] hover:text-accent hover:scale-105 active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
