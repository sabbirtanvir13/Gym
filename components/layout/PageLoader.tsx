"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show the loader, ensuring the user sees it
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink noise-texture"
        >
          {/* Animated SVG Loader */}
          <div className="relative mb-12 flex h-40 w-40 items-center justify-center">
            {/* Glow effect */}
            <div className="absolute inset-0 animate-pulse rounded-full bg-accent/20 blur-2xl" />
            
            <svg
              viewBox="0 0 120 120"
              className="relative h-full w-full"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Bench */}
              <line x1="15" y1="85" x2="105" y2="85" className="stroke-ash stroke-[6]" />
              <line x1="25" y1="85" x2="25" y2="105" className="stroke-ash stroke-[6]" />
              <line x1="95" y1="85" x2="95" y2="105" className="stroke-ash stroke-[6]" />

              {/* Body */}
              <circle cx="85" cy="78" r="8" className="fill-white stroke-none" /> {/* Head */}
              <line x1="80" y1="82" x2="40" y2="82" className="stroke-white stroke-[10]" /> {/* Torso */}
              
              {/* Legs */}
              <path 
                d="M40 82 L28 92 L28 105" 
                className="stroke-white stroke-[8]" 
                fill="none" 
              />
              
              {/* Arms (Animated) */}
              <motion.path
                d="M 65 82 L 65 68 L 65 55"
                animate={{ 
                  d: [
                    "M 65 82 L 65 68 L 65 55", 
                    "M 65 82 L 55 72 L 65 68", 
                    "M 65 82 L 65 68 L 65 55"
                  ] 
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="stroke-accent stroke-[8]"
                fill="none"
              />

              {/* Barbell (Animated) */}
              <motion.g
                animate={{ y: [0, 13, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Bar */}
                <line x1="30" y1="55" x2="100" y2="55" className="stroke-white stroke-[5]" />
                
                {/* Left Plates */}
                <rect x="40" y="35" width="6" height="40" rx="2" className="fill-accent stroke-none" />
                <rect x="33" y="40" width="5" height="30" rx="1.5" className="fill-accent/70 stroke-none" />
                
                {/* Right Plates */}
                <rect x="84" y="35" width="6" height="40" rx="2" className="fill-accent stroke-none" />
                <rect x="92" y="40" width="5" height="30" rx="1.5" className="fill-accent/70 stroke-none" />
              </motion.g>
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white">
              <span className="text-accent">AHMED GYM & CAFE 29</span>
            </h2>
            <p className="mt-3 text-sm font-bold tracking-[0.25em] text-ash animate-pulse">
              GETTING YOU READY...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
