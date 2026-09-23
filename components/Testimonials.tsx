"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import SectionHeading from "./SectionHeading";

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
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="WHAT MEMBERS SAY"
          center
        />

        <div className="relative mt-14 min-h-[300px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-3xl p-6 sm:p-12 text-center"
            >
              <Quote
                size={40}
                className="mx-auto mb-6 text-accent/40"
              />

              <div className="mb-6 flex justify-center gap-1">
                {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
                &ldquo;{TESTIMONIALS[current].text}&rdquo;
              </p>

              <div className="mt-8 flex items-center justify-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={TESTIMONIALS[current].image}
                  alt={TESTIMONIALS[current].name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/30"
                  loading="lazy"
                />
                <div className="text-left">
                  <div className="text-sm font-bold">
                    {TESTIMONIALS[current].name}
                  </div>
                  <div className="text-xs text-ash">
                    {TESTIMONIALS[current].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={goPrev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-accent hover:text-accent"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-accent"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-accent hover:text-accent"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
