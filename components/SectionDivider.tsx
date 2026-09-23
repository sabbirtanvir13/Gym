"use client";

import { motion } from "framer-motion";

type DividerProps = {
  position?: "top" | "bottom";
  color?: string;
  className?: string;
  type?: "curve" | "angle";
};

export default function SectionDivider({
  position = "top",
  color = "fill-charcoal",
  className = "",
  type = "curve",
}: DividerProps) {
  const isTop = position === "top";

  return (
    <div
      className={`absolute left-0 right-0 z-10 w-full overflow-hidden leading-[0] ${
        isTop ? "top-[-1px]" : "bottom-[-1px] rotate-180"
      } ${className}`}
    >
      <motion.svg
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px] lg:h-[80px] ${color}`}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {type === "curve" ? (
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        ) : (
          <path d="M1200 120L0 16.48V0h1200v120z" />
        )}
      </motion.svg>
    </div>
  );
}
