"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-10 w-10" />;

  const themes = [
    { name: "dark", icon: Moon, label: "Dark" },
    { name: "light", icon: Sun, label: "Light" },
    { name: "blue", icon: Palette, label: "Blue" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-secondary hover:text-secondary overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute"
          >
            {theme === "light" ? <Sun size={18} /> : theme === "blue" ? <Palette size={18} /> : <Moon size={18} />}
          </motion.div>
        </AnimatePresence>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-12 z-50 flex flex-col gap-1 rounded-xl border border-white/10 p-2 shadow-2xl glass-strong min-w-[120px]"
          >
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => {
                  setTheme(t.name);
                  setOpen(false);
                }}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  theme === t.name ? "bg-gradient-to-r from-accent/15 to-secondary/5 text-secondary" : "text-ash hover:bg-white/5 hover:text-white"
                }`}
              >
                <t.icon size={16} />
                {t.label}
              </button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
}
