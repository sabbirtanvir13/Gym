"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.3 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, .cursor-pointer'
      );
      setIsHovering(!!interactive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkHover);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      animate={{
        scale: isHovering ? 1.8 : 1,
        backgroundColor: isHovering
          ? "rgba(212, 255, 0, 0)"
          : "rgba(212, 255, 0, 0)",
      }}
    >
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/60"
      >
        <div
          className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
            isHovering ? "scale-150 bg-accent" : "bg-accent/80"
          }`}
        />
      </motion.div>
    </motion.div>
  );
}
