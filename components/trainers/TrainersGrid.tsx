"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Users, Frown } from "lucide-react";
import { Trainer } from "@/types/trainer";
import { TRAINERS_DATA } from "@/lib/trainers-data";
import TrainerFilters from "./TrainerFilters";
import TrainerCard from "./TrainerCard";
import TrainerDetailModal from "./TrainerDetailModal";
import TrainerBookingModal from "./TrainerBookingModal";

export default function TrainersGrid() {
  const [genderFilter, setGenderFilter] = useState<"all" | "male" | "female">("all");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [activeTrainerDetail, setActiveTrainerDetail] = useState<Trainer | null>(null);
  const [bookingTrainer, setBookingTrainer] = useState<Trainer | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  // Counts
  const totalCount = TRAINERS_DATA.length;
  const maleCount = TRAINERS_DATA.filter((t) => t.gender === "male").length;
  const femaleCount = TRAINERS_DATA.filter((t) => t.gender === "female").length;

  // Filtered trainers
  const filteredTrainers = useMemo(() => {
    return TRAINERS_DATA.filter((t) => {
      // Gender filter
      if (genderFilter !== "all" && t.gender !== genderFilter) {
        return false;
      }
      // Specialty filter
      if (
        selectedSpecialty !== "All" &&
        !t.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase()) &&
        !t.specialties.some((s) => s.toLowerCase().includes(selectedSpecialty.toLowerCase()))
      ) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesName = t.name.toLowerCase().includes(q);
        const matchesRole = t.role.toLowerCase().includes(q);
        const matchesSpec = t.specialty.toLowerCase().includes(q);
        const matchesCerts = t.certifications.some((c) => c.toLowerCase().includes(q));
        if (!matchesName && !matchesRole && !matchesSpec && !matchesCerts) {
          return false;
        }
      }
      return true;
    });
  }, [genderFilter, selectedSpecialty, searchQuery]);

  const handleOpenDetail = (trainer: Trainer) => {
    setActiveTrainerDetail(trainer);
  };

  const handleOpenBooking = (trainer: Trainer) => {
    setBookingTrainer(trainer);
    setIsBookingOpen(true);
  };

  return (
    <section className="relative pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Filter Controls Bar */}
        <TrainerFilters
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
          selectedSpecialty={selectedSpecialty}
          setSelectedSpecialty={setSelectedSpecialty}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          totalCount={totalCount}
          filteredCount={filteredTrainers.length}
          maleCount={maleCount}
          femaleCount={femaleCount}
        />

        {/* Trainers Grid */}
        <div className="mt-10">
          {filteredTrainers.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filteredTrainers.map((trainer) => (
                  <TrainerCard
                    key={trainer.id}
                    trainer={trainer}
                    onSelect={handleOpenDetail}
                    onBook={handleOpenBooking}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center rounded-3xl border border-white/6 bg-white/[0.02] p-12 text-center my-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-ash mb-4">
                <Frown size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-white">No Trainers Found</h3>
              <p className="mt-1 text-sm text-ash max-w-sm">
                No coaches matched your active filters or search terms. Try adjusting your query.
              </p>
              <button
                onClick={() => {
                  setGenderFilter("all");
                  setSelectedSpecialty("All");
                  setSearchQuery("");
                }}
                className="mt-5 rounded-full bg-gradient-to-r from-accent to-secondary px-6 py-2.5 text-xs font-bold text-black hover:scale-105 transition-all"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Trainer Detail Modal */}
      <TrainerDetailModal
        trainer={activeTrainerDetail}
        onClose={() => setActiveTrainerDetail(null)}
        onBook={handleOpenBooking}
      />

      {/* Trainer Booking Modal */}
      <TrainerBookingModal
        trainer={bookingTrainer}
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          setBookingTrainer(null);
        }}
      />
    </section>
  );
}
