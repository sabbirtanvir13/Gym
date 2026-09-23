"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Sparkles, CircleDashed } from "lucide-react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stage, setStage] = useState<AnimationStage>("hidden");
  const [cycleCount, setCycleCount] = useState<number>(0);
  
  const hasRevealedRef = useRef<boolean>(false);
  const stageRef = useRef<AnimationStage>("hidden");

  const isImpact = stage === "impact";

  // Parallax Setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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

  // Word stagger variants
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  return (
    <section id="home" ref={containerRef} className="relative flex min-h-screen items-center overflow-hidden">
      {/* 
        Video Background with Parallax:
      */}
      <motion.div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ y: backgroundY, willChange: "transform" }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
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
      </motion.div>

      {/* GPU Flash overlay */}
      {isImpact && (
        <motion.div
          key={`flash-overlay-${cycleCount}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.28, 0] }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="pointer-events-none absolute inset-0 bg-secondary z-[3] mix-blend-overlay"
        />
      )}

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-black/65 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 pointer-events-none z-[2]" />

      {/* Floating Micro-elements */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] text-accent"
        >
          <CircleDashed size={40} className="opacity-30" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 40, 0], scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[30%] right-[15%] w-20 h-20 sm:w-32 sm:h-32 rounded-full border border-secondary/20 bg-secondary/5 blur-[2px]"
        />
      </div>

      {/* CINEMATIC SHOCKWAVE & FLARE */}
      {isImpact && (
        <>
          <motion.div
            key={`flare-${cycleCount}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.5, 2.2] }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className="pointer-events-none absolute inset-0 z-[4] flex items-center justify-center overflow-hidden"
          >
            <div className="h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.9)_0%,_rgba(250,204,21,0.4)_30%,_rgba(242,133,34,0.1)_60%,_transparent_80%)]" />
          </motion.div>

          <motion.div
            key={`shockwave-${cycleCount}`}
            initial={{ opacity: 0.9, scale: 0.2 }}
            animate={{ opacity: 0, scale: 2.8 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-[4] -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/70 shadow-[0_0_40px_rgba(250,204,21,0.6)] h-[200px] w-[200px] sm:h-[300px] sm:w-[300px]"
          />
        </>
      )}

      {/* HERO CONTENT CONTAINER */}
      <motion.div
        style={{ y: textY, opacity: opacityFade }}
        className={`relative z-20 mx-auto w-full max-w-7xl px-5 pt-32 pb-20 text-center transition-opacity duration-100 ${
          isImpact ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <motion.div
          key={`badge-${cycleCount}`}
          initial={{ opacity: 0, y: -20 }}
          animate={isImpact ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          style={{ willChange: "transform, opacity" }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-gradient-to-r from-white/5 to-white/0 px-5 py-2 backdrop-blur-md mx-auto shadow-[0_0_15px_rgba(250,204,21,0.1)]"
        >
          <Sparkles size={14} className="text-secondary" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/90">
            Premium Fitness Experience
          </span>
        </motion.div>

        <h1 className="max-w-5xl mx-auto">
          {/* Staggered "Welcome to" */}
          {isImpact && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="block font-sans text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-wider text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {["WELCOME", "TO"].map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
            </motion.div>
          )}

          <div className="relative inline-block px-2 py-1 mt-4">
            <motion.span
              key={`brand-${cycleCount}`}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={isImpact ? { opacity: 1, scale: [0.8, 1.05, 1.0], y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="block font-display text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
            >
              AHMED GYM &amp; CAFE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary drop-shadow-[0_0_25px_rgba(250,204,21,0.5)]">
                29
              </span>
            </motion.span>

            {isImpact && (
              <motion.div
                key={`sweep-${cycleCount}`}
                initial={{ x: "-120%", opacity: 0 }}
                animate={{ x: "220%", opacity: [0, 1, 0] }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="pointer-events-none absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-secondary/40 to-transparent -skew-x-12 mix-blend-overlay blur-[2px]"
              />
            )}
          </div>
        </h1>

        <motion.div
          key={`stats-${cycleCount}`}
          initial={{ opacity: 0, y: 30 }}
          animate={isImpact ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          style={{ willChange: "transform, opacity" }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4 relative"
        >
          {/* Subtle glow behind stats */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
          
          {STATS.map((stat: { label: string; value: number; suffix?: string }) => (
            <div key={stat.label} className="group cursor-default">
              <div className="font-display text-3xl font-extrabold text-white sm:text-5xl drop-shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:text-secondary">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-[11px] font-bold uppercase tracking-[0.15em] text-ash-2 group-hover:text-white/80 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
