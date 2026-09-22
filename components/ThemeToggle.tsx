"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Palette } from "lucide-react";

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
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-accent hover:text-accent"
        aria-label="Toggle theme"
      >
        {theme === "light" ? <Sun size={18} /> : theme === "blue" ? <Palette size={18} /> : <Moon size={18} />}
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-12 z-50 flex flex-col gap-1 rounded-xl border border-white/10 bg-charcoal p-2 shadow-lg glass-strong min-w-[120px]">
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => {
                  setTheme(t.name);
                  setOpen(false);
                }}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  theme === t.name ? "bg-accent/10 text-accent" : "text-ash hover:bg-white/5 hover:text-white"
                }`}
              >
                <t.icon size={16} />
                {t.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
