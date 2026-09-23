"use client";

import { Users, Crown } from "lucide-react";

interface TrainerFiltersProps {
  genderFilter: "all" | "male" | "female" | "owner";
  setGenderFilter: (val: "all" | "male" | "female" | "owner") => void;
  selectedSpecialty: string;
  setSelectedSpecialty: (val: string) => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  totalCount: number;
  filteredCount: number;
  maleCount: number;
  femaleCount: number;
  ownerCount: number;
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
  ownerCount,
}: TrainerFiltersProps) {
  const genderTabs = [
    { id: "all", label: "All Trainers", count: totalCount },
    { id: "female", label: "Female Coaches (৩ জন)", count: femaleCount },
    { id: "male", label: "Male Coaches (৩ জন)", count: maleCount },
    { id: "owner", label: "Owner", count: ownerCount },
  ] as const;

  return (
    <div className="space-y-6">
      {/* Top Bar: Gender Segments */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Gender Toggle Tabs */}
        <div className="inline-flex flex-wrap gap-1 rounded-2xl border border-white/8 bg-charcoal/60 p-1.5 backdrop-blur-xl">
          {genderTabs.map((tab) => {
            const isActive = genderFilter === tab.id;
            const isOwner = tab.id === "owner";
            return (
              <button
                key={tab.id}
                onClick={() => setGenderFilter(tab.id)}
                className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? isOwner
                      ? "bg-gradient-to-r from-yellow-500 to-amber-400 text-black shadow-md shadow-yellow-500/30"
                      : "bg-gradient-to-r from-accent to-secondary text-black shadow-md shadow-accent/20"
                    : "text-ash hover:text-white"
                }`}
              >
                {isOwner && <Crown size={13} className={isActive ? "text-black" : "text-yellow-400"} />}
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
