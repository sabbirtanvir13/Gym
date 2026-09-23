"use client";

import { Search, X, SlidersHorizontal, Users } from "lucide-react";
import { SPECIALTY_FILTERS } from "@/lib/trainers-data";

interface TrainerFiltersProps {
  genderFilter: "all" | "male" | "female";
  setGenderFilter: (val: "all" | "male" | "female") => void;
  selectedSpecialty: string;
  setSelectedSpecialty: (val: string) => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  totalCount: number;
  filteredCount: number;
  maleCount: number;
  femaleCount: number;
}

export default function TrainerFilters({
  genderFilter,
  setGenderFilter,
  selectedSpecialty,
  setSelectedSpecialty,
  searchQuery,
  setSearchQuery,
  totalCount,
  filteredCount,
  maleCount,
  femaleCount,
}: TrainerFiltersProps) {
  const genderTabs = [
    { id: "all", label: "All Trainers", count: totalCount },
    { id: "female", label: "Female Coaches (৩ জন)", count: femaleCount },
    { id: "male", label: "Male Coaches (৩ জন)", count: maleCount },
  ] as const;

  return (
    <div className="space-y-6">
      {/* Top Bar: Gender Segments + Live Search */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Gender Toggle Tabs */}
        <div className="inline-flex rounded-2xl border border-white/8 bg-charcoal/60 p-1.5 backdrop-blur-xl">
          {genderTabs.map((tab) => {
            const isActive = genderFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setGenderFilter(tab.id)}
                className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-accent to-secondary text-black shadow-md shadow-accent/20"
                    : "text-ash hover:text-white"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                    isActive ? "bg-black/20 text-black" : "bg-white/10 text-ash"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full lg:w-80">
          <Search
            size={16}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ash"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search trainer, specialty..."
            className="w-full rounded-xl border border-white/8 bg-charcoal/60 pl-10 pr-9 py-2.5 text-sm text-white placeholder-ash-2 backdrop-blur-xl transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ash hover:text-white"
              aria-label="Clear search"
            >
              <X size={15} />
            </button>
          )}
        </div>
      </div>

      {/* Specialty Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-ash uppercase tracking-wider pr-2 shrink-0">
          <SlidersHorizontal size={13} className="text-accent" />
          <span>Focus Area:</span>
        </div>
        {SPECIALTY_FILTERS.map((specialty) => {
          const isSelected = selectedSpecialty === specialty;
          return (
            <button
              key={specialty}
              onClick={() => setSelectedSpecialty(specialty)}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                isSelected
                  ? "border border-accent bg-accent/15 text-accent font-semibold shadow-[0_0_12px_var(--theme-accent-glow)]"
                  : "border border-white/6 bg-white/[0.02] text-ash hover:border-white/20 hover:text-white"
              }`}
            >
              {specialty}
            </button>
          );
        })}
      </div>

      {/* Results summary bar */}
      <div className="flex items-center justify-between border-t border-white/5 pt-4 text-xs text-ash">
        <div className="flex items-center gap-2">
          <Users size={14} className="text-accent" />
          <span>
            Showing <strong className="text-white">{filteredCount}</strong> of{" "}
            <strong className="text-white">{totalCount}</strong> Elite Trainers
          </span>
        </div>
        {(genderFilter !== "all" || selectedSpecialty !== "All" || searchQuery) && (
          <button
            onClick={() => {
              setGenderFilter("all");
              setSelectedSpecialty("All");
              setSearchQuery("");
            }}
            className="text-accent hover:underline font-semibold"
          >
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
}
