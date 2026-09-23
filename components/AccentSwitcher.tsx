"use client";

import { useAccentTheme, ACCENT_THEMES } from "@/components/AccentThemeProvider";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AccentSwitcher() {
  const { accent, setAccent } = useAccentTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger: shows current accent dot */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Switch accent color"
        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:border-white/25 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
      >
        <span
          className="h-4 w-4 rounded-full transition-all duration-300 shadow-[0_0_8px_var(--theme-accent)]"
          style={{ backgroundColor: ACCENT_THEMES.find((t) => t.id === accent)?.color }}
        />
      </button>

      {/* Dropdown palette */}
      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-12 z-50 rounded-2xl border border-white/10 p-3 shadow-2xl glass-strong"
          >
            <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-widest text-ash-2">
              Accent Color
            </p>
            <div className="flex gap-2">
              {ACCENT_THEMES.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => {
                    setAccent(theme.id);
                    setOpen(false);
                  }}
                  aria-label={theme.label}
                  title={theme.label}
                  className="group relative flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-200 hover:scale-110"
                >
                  <span
                    className="h-6 w-6 rounded-full transition-all duration-200"
                    style={{
                      backgroundColor: theme.color,
                      boxShadow:
                        accent === theme.id
                          ? `0 0 0 2px #0d0d0f, 0 0 0 4px ${theme.color}, 0 0 12px ${theme.color}55`
                          : "none",
                    }}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}
