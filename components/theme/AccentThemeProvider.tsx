"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type AccentTheme = "orange" | "blue" | "purple" | "emerald" | "crimson";

export const ACCENT_THEMES: {
  id: AccentTheme;
  label: string;
  color: string;
}[] = [
  { id: "orange",  label: "Orange",  color: "#FF7A1A" },
  { id: "blue",    label: "Blue",    color: "#2F6FED" },
  { id: "purple",  label: "Purple",  color: "#8B5CF6" },
  { id: "emerald", label: "Emerald", color: "#10B981" },
  { id: "crimson", label: "Crimson", color: "#E11D48" },
];

const STORAGE_KEY = "gym-accent-theme";
const DEFAULT: AccentTheme = "orange";

interface AccentCtx {
  accent: AccentTheme;
  setAccent: (t: AccentTheme) => void;
}

const Ctx = createContext<AccentCtx>({ accent: DEFAULT, setAccent: () => {} });

export function AccentThemeProvider({ children }: { children: React.ReactNode }) {
  const [accent, setAccentState] = useState<AccentTheme>(DEFAULT);
  const [mounted, setMounted] = useState(false);

  // Read persisted value after mount to avoid SSR mismatch
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as AccentTheme | null;
    const initial = saved && ACCENT_THEMES.find((t) => t.id === saved) ? saved : DEFAULT;
    setAccentState(initial);
    document.documentElement.setAttribute("data-accent", initial);
    setMounted(true);
  }, []);

  const setAccent = (t: AccentTheme) => {
    setAccentState(t);
    localStorage.setItem(STORAGE_KEY, t);
    document.documentElement.setAttribute("data-accent", t);
  };

  // Render children regardless; the attribute just won't be set until mount
  return (
    <Ctx.Provider value={{ accent: mounted ? accent : DEFAULT, setAccent }}>
      {children}
    </Ctx.Provider>
  );
}

export function useAccentTheme() {
  return useContext(Ctx);
}
