"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SCHEDULE, SCHEDULE_TIMES } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const CLASS_COLORS: Record<string, string> = {
  Strength: "bg-accent/15 text-accent border-accent/30",
  Cardio: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  CrossFit: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  Yoga: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  HIIT: "bg-red-500/15 text-red-400 border-red-500/30",
  "Personal Training": "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Class Schedule"
          title="WEEKLY SCHEDULE"
          subtitle="Find the perfect class for your routine. All classes are led by certified trainers."
        />

        {/* Day selector - mobile */}
        <div className="mt-12 flex gap-2 overflow-x-auto pb-2 hide-scrollbar lg:hidden">
          {SCHEDULE.map((day, i) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(i)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                activeDay === i
                  ? "bg-accent text-black"
                  : "border border-white/10 text-ash"
              }`}
            >
              {day.day.slice(0, 3)}
            </button>
          ))}
        </div>

        {/* Mobile schedule */}
        <div className="mt-6 lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {SCHEDULE_TIMES.map((time, ti) => {
                const cls = SCHEDULE[activeDay].classes[ti];
                if (cls === "—") return null;
                return (
                  <div
                    key={ti}
                    className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.02] p-4"
                  >
                    <span className="w-14 text-sm font-bold text-accent">
                      {time}
                    </span>
                    <span
                      className={`rounded-lg border px-3 py-1 text-xs font-semibold ${
                        CLASS_COLORS[cls] ||
                        "border-white/10 text-white/70"
                      }`}
                    >
                      {cls}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop schedule table */}
        <div className="mt-12 hidden lg:block">
          <div className="overflow-hidden rounded-2xl border border-white/8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/8 bg-white/[0.02]">
                  <th className="p-4 text-left text-xs font-bold uppercase tracking-wider text-ash">
                    Time
                  </th>
                  {SCHEDULE.map((day) => (
                    <th
                      key={day.day}
                      className="p-4 text-left text-xs font-bold uppercase tracking-wider text-ash"
                    >
                      {day.day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SCHEDULE_TIMES.map((time, ti) => (
                  <tr
                    key={time}
                    className="border-b border-white/5 transition-colors hover:bg-white/[0.01]"
                  >
                    <td className="p-4 text-sm font-bold text-accent">
                      {time}
                    </td>
                    {SCHEDULE.map((day) => {
                      const cls = day.classes[ti];
                      return (
                        <td key={day.day} className="p-4">
                          {cls && cls !== "—" ? (
                            <span
                              className={`inline-block rounded-lg border px-3 py-1.5 text-xs font-semibold ${
                                CLASS_COLORS[cls] ||
                                "border-white/10 text-white/70"
                              }`}
                            >
                              {cls}
                            </span>
                          ) : (
                            <span className="text-ash-2">—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
