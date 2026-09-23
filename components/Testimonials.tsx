"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, BadgeCheck, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import SectionHeading from "./SectionHeading";

/* ─── Ultra-Smooth Motion Variants ─────────────────────────────────────── */
const slideVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 60 : -60,
    scale: 0.98,
    filter: "blur(6px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      staggerChildren: 0.08,
    },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -60 : 60,
    scale: 0.98,
    filter: "blur(6px)",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1] as [number, number, number, number],
    },
  }),
};

const itemVariants = {
  enter: { opacity: 0, y: 15 },
  center: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as [number, number, number, number] } },
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
    const timer = setInterval(goNext, 8000);
    return () => clearInterval(timer);
  }, [goNext]);

  const t = TESTIMONIALS[current];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden text-white">
      {/* ── Atmospheric Glow Backdrops ───────────────────────────────────── */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Real Transformations"
          title="WHAT MEMBERS SAY"
          center
        />

        <div className="relative mt-16 lg:mt-24">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid items-center gap-10 lg:grid-cols-12 lg:gap-0"
            >
              {/* ── Left Column: Clean Image (ABSOLUTELY NO BORDER) ── */}
              <div className="relative lg:col-span-5 lg:z-20">
                {/* Image Container - Pure Shadow & Rounded corners, NO BORDERS */}
                <div className="group relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.95)]">
                  {/* Subtle Gradient Overlays for Readability & Mood */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />

                  {/* Floating Luxury Verified Badge */}
                  <div className="absolute top-5 left-5 z-20 flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 backdrop-blur-xl shadow-lg">
                    <BadgeCheck size={16} className="text-accent" />
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-white/90">
                      Verified Member
                    </span>
                  </div>

                  {/* Member Photo - Borderless */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Mobile-only name highlight over photo */}
                  <div className="absolute bottom-6 left-6 z-20 lg:hidden">
                    <h3 className="font-display text-2xl font-black uppercase text-white tracking-wide">
                      {t.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-accent">
                      {t.role || "Gym Member"}
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Right Column: Luxury Glass Content Card (Overlapping) ── */}
              <div className="relative lg:-ml-12 lg:col-span-7 lg:z-10">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-12 lg:p-16 lg:pl-24 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

                  {/* Top Ambient Glow Line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

                  {/* Big Ambient Background Quote Icon */}
                  <Quote className="absolute -right-4 -top-4 h-40 w-40 text-white/[0.02] rotate-12 pointer-events-none select-none" />

                  {/* Rating Stars */}
                  <motion.div variants={itemVariants} className="mb-6 flex items-center gap-1.5">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-accent text-accent drop-shadow-[0_0_10px_var(--theme-accent-glow)]"
                      />
                    ))}
                    <span className="ml-3 text-xs font-bold tracking-widest text-white/50 uppercase">
                      5.0 / 5.0 Rating
                    </span>
                  </motion.div>

                  {/* Quote Message */}
                  <motion.blockquote
                    variants={itemVariants}
                    className="relative z-10 font-display text-xl leading-relaxed text-white/95 sm:text-2xl lg:text-3xl lg:leading-[1.6] tracking-tight font-medium"
                  >
                    &ldquo;{t.text}&rdquo;
                  </motion.blockquote>

                  {/* Desktop Author Details */}
                  <motion.div variants={itemVariants} className="mt-10 hidden lg:block">
                    <div className="h-1 w-12 bg-accent rounded-full mb-5" />
                    <h3 className="font-display text-3xl font-black tracking-tight text-white uppercase">
                      {t.name}
                    </h3>
                    <p className="mt-1 text-xs font-extrabold uppercase tracking-widest text-accent">
                      {t.role || "Elite Gym Member"}
                    </p>
                  </motion.div>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Ultra-Modern Slider Navigation Controls */}
          <div className="mt-12 flex items-center justify-between lg:justify-end gap-8 px-2">
            {/* Pagination Line Indicators */}
            <div className="flex items-center gap-2.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className="group relative h-8 flex items-center"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <span
                    className={`h-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${i === current
                        ? "w-12 bg-accent shadow-[0_0_15px_var(--theme-accent-glow)]"
                        : "w-3 bg-white/20 group-hover:bg-white/40 group-hover:w-6"
                      }`}
                  />
                </button>
              ))}
            </div>

            {/* Next / Prev Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={goPrev}
                className="group flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.03] text-white/80 backdrop-blur-xl transition-all duration-300 hover:bg-accent hover:text-black hover:scale-105 active:scale-95 shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={22} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>
              <button
                onClick={goNext}
                className="group flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.03] text-white/80 backdrop-blur-xl transition-all duration-300 hover:bg-accent hover:text-black hover:scale-105 active:scale-95 shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight size={22} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}