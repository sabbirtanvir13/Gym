"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { IMAGES, STATS } from "@/lib/data";
import Counter from "./Counter";
import React from "react";

// =========================================================================
// Easy-to-adjust configuration:
// Change this number (in seconds) to match the exact moment the athlete lifts the barbell upward
// =========================================================================
const revealTime = 2.8;

type AnimationStage = "hidden" | "impact";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stage, setStage] = useState<AnimationStage>("hidden");
  const [cycleCount, setCycleCount] = useState<number>(0);
  
  const hasRevealedRef = useRef<boolean>(false);
  const stageRef = useRef<AnimationStage>("hidden");

  const isImpact = stage === "impact";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video autoplays muted without restrictions
    video.defaultMuted = true;
    video.muted = true;
    video.play().catch(() => {});

    let rafId: number;
    let prevTime = 0;

    const checkTimeline = () => {
      const current = video.currentTime;

      // Detect video loop wrap-around:
      // Current time jumped backwards or looped to start while in revealed state
      if (
        (current < prevTime - 0.4 || current < revealTime - 0.5) &&
        hasRevealedRef.current
      ) {
        hasRevealedRef.current = false;
        stageRef.current = "hidden";
        setStage("hidden");
        setCycleCount((c) => c + 1);
      }

      // Trigger impact: exactly once when currentTime crosses revealTime
      if (!hasRevealedRef.current && current >= revealTime) {
        hasRevealedRef.current = true;
        stageRef.current = "impact";
        setStage("impact");
      }

      prevTime = current;
      rafId = requestAnimationFrame(checkTimeline);
    };

    rafId = requestAnimationFrame(checkTimeline);

    const handleSeeked = () => {
      if (video.currentTime < revealTime && hasRevealedRef.current) {
        hasRevealedRef.current = false;
        stageRef.current = "hidden";
        setStage("hidden");
        setCycleCount((c) => c + 1);
      }
    };

    video.addEventListener("seeked", handleSeeked);

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-black">
      {/* 
        Video Background:
        Zero CSS filters applied to the <video> tag so the browser keeps full hardware acceleration.
        Pure GPU transform scale for the camera punch.
      */}
      <motion.div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ willChange: "transform" }}
        animate={
          isImpact
            ? { scale: [1.04, 1.0] }
            : { scale: 1.0 }
        }
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1] as const,
        }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/video/gym-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster={IMAGES.hero}
        />
      </motion.div>

      {/* 
        GPU Flash overlay:
        Uses pure opacity on a separate layer (0% CPU cost, 0 video decoding stalls).
      */}
      {isImpact && (
        <motion.div
          key={`flash-overlay-${cycleCount}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.28, 0] }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="pointer-events-none absolute inset-0 bg-white z-[3] mix-blend-screen"
        />
      )}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />
      {/* Vignette gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-black/75 pointer-events-none z-[2]" />

      {/* 
        CINEMATIC SHOCKWAVE & FLARE:
        Composited on the GPU using transform scale and opacity.
      */}
      {isImpact && (
        <>
          {/* Radial light flare centered behind the text */}
          <motion.div
            key={`flare-${cycleCount}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.75, 0], scale: [0.5, 1.4, 2.0] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className="pointer-events-none absolute inset-0 z-[4] flex items-center justify-center overflow-hidden"
          >
            <div className="h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.9)_0%,_rgba(242,133,34,0.5)_35%,_transparent_70%)]" />
          </motion.div>

          {/* Shockwave expanding energy ring */}
          <motion.div
            key={`shockwave-${cycleCount}`}
            initial={{ opacity: 0.9, scale: 0.2 }}
            animate={{ opacity: 0, scale: 2.5 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
            style={{ willChange: "transform, opacity" }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-[4] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/90 shadow-[0_0_35px_rgba(242,133,34,0.8)] h-[300px] w-[300px]"
          />
        </>
      )}

      {/* 
        HERO CONTENT CONTAINER:
        Strictly hidden (opacity: 0, pointer-events: none) before barbell lift.
      */}
      <div
        className={`relative z-20 mx-auto w-full max-w-7xl px-5 pt-32 pb-20 text-center transition-opacity duration-100 ${
          isImpact ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Badge: Emerges smoothly on impact */}
        <motion.div
          key={`badge-${cycleCount}`}
          initial={{ opacity: 0, y: -16 }}
          animate={
            isImpact
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -16 }
          }
          transition={{ delay: 0.25, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          style={{ willChange: "transform, opacity" }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm mx-auto"
        >
          <Sparkles size={14} className="text-accent" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Premium Fitness Experience
          </span>
        </motion.div>

        {/* Headline Container */}
        <h1 className="max-w-5xl mx-auto">
          {/* "Welcome to" – Fast upward velocity, razor sharp */}
          <motion.span
            key={`welcome-${cycleCount}`}
            initial={{ opacity: 0, y: 30, scale: 0.85 }}
            animate={
              isImpact
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 30, scale: 0.85 }
            }
            transition={{
              duration: 0.42,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="block font-sans text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-wider text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          >
            Welcome to
          </motion.span>

          {/* "AHMED GYM & CAFE 29" – The Main Impact Punch: Crystal Clear & Sharp */}
          <div className="relative inline-block px-2 py-1 mt-3">
            <motion.span
              key={`brand-${cycleCount}`}
              initial={{ opacity: 0, scale: 0.72, y: 25 }}
              animate={
                isImpact
                  ? {
                      opacity: 1,
                      scale: [0.72, 1.08, 1.0],
                      y: 0,
                    }
                  : { opacity: 0, scale: 0.72, y: 25 }
              }
              transition={{
                delay: 0.08,
                duration: 0.5,
                times: [0, 0.45, 1],
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="block font-display text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
            >
              AHMED GYM &amp; CAFE{" "}
              <span className="text-accent drop-shadow-[0_0_20px_rgba(242,133,34,0.7)]">
                29
              </span>
            </motion.span>

            {/* Subtle horizontal energy sweep across the title */}
            {isImpact && (
              <motion.div
                key={`sweep-${cycleCount}`}
                initial={{ x: "-120%", opacity: 0 }}
                animate={{ x: "220%", opacity: [0, 0.9, 0] }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="pointer-events-none absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-12 mix-blend-overlay"
              />
            )}
          </div>
        </h1>


        {/* Stats – appear with slight delay */}
        <motion.div
          key={`stats-${cycleCount}`}
          initial={{ opacity: 0, y: 24 }}
          animate={
            isImpact
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 24 }
          }
          transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          style={{ willChange: "transform, opacity" }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
        >
          {STATS.map((stat: { label: string; value: number; suffix?: string }) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-ash">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
