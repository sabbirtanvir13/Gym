"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Phone, ArrowRight } from "lucide-react";
import { Trainer } from "@/types/trainer";
import { InstagramIcon, XIcon } from "@/components/ui/SocialIcons";

interface TrainerCardProps {
  trainer: Trainer;
  onSelect: (trainer: Trainer) => void;
}

export default function TrainerCard({ trainer, onSelect }: TrainerCardProps) {
  const getBadgeInfo = () => {
    if (trainer.isOwner) {
      return { label: "Owner", dotClass: "bg-amber-400" };
    }
    if (trainer.isManager) {
      return { label: "Manager", dotClass: "bg-emerald-400" };
    }
    if (trainer.gender === "female") {
      return { label: "Female Coach", dotClass: "bg-pink-400" };
    }
    return { label: "Male Coach", dotClass: "bg-sky-400" };
  };

  const badge = getBadgeInfo();

  return (
    <motion.div
      layout
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-charcoal/40 backdrop-blur-xl transition-all duration-500 hover:border-accent/50 hover:bg-charcoal/70 hover:shadow-[0_20px_40px_-15px_var(--theme-accent-glow)]"
    >
      {/* Glow border gradient effect */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-accent/20 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* ── Image & Top Badges ────────────────────────────────────────── */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-3">
        <Image
          src={trainer.image}
          alt={trainer.name}
          fill
          className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Ambient duotone overlay */}
        <div
          className="absolute inset-0 mix-blend-color opacity-15 pointer-events-none transition-opacity duration-500 group-hover:opacity-25"
          style={{ backgroundColor: "var(--theme-accent)" }}
        />

        {/* Deep gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />

        {/* Top Badges Bar */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          {/* Gender & Role Badge */}
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1 backdrop-blur-md">
            <span className={`h-2 w-2 rounded-full ${badge.dotClass}`} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-white">
              {badge.label}
            </span>
          </div>
        </div>

        {/* Quick Floating Stat badge on image (Only for regular trainers with stats) */}
        {!trainer.isOwner && !trainer.isManager && trainer.experience && trainer.stats && trainer.stats.length > 0 && (
          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
            <div className="rounded-xl border border-white/10 bg-black/70 px-3 py-1.5 backdrop-blur-md">
              <div className="text-[10px] font-medium uppercase tracking-wider text-ash">Experience</div>
              <div className="text-xs font-bold text-white">{trainer.experience}</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/70 px-3 py-1.5 backdrop-blur-md text-right">
              <div className="text-[10px] font-medium uppercase tracking-wider text-ash">{trainer.stats[0].label}</div>
              <div className="text-xs font-bold text-accent">{trainer.stats[0].value}</div>
            </div>
          </div>
        )}
      </div>

      {/* ── Content Body ──────────────────────────────────────────────── */}
      <div className="relative flex flex-1 flex-col p-6 z-10">
        {/* Specialty Tag */}
        <div className="flex items-center gap-2 mb-2">
          <Award size={13} className="text-accent shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-wider text-accent truncate">
            {trainer.specialty}
          </span>
        </div>

        {/* Name & Role */}
        <h3 className="font-display text-2xl font-black tracking-tight text-white group-hover:text-accent transition-colors duration-300">
          {trainer.name}
        </h3>
        <p className="text-xs font-medium text-ash mt-0.5">{trainer.role}</p>

        {/* Tagline */}
        <p className="mt-3 text-xs leading-relaxed text-ash line-clamp-2">
          {trainer.tagline}
        </p>

        {/* Specialty tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {trainer.specialties.slice(0, 3).map((spec) => (
            <span
              key={spec}
              className="rounded-md border border-white/6 bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium text-white/75"
            >
              {spec}
            </span>
          ))}
          {trainer.specialties.length > 3 && (
            <span className="rounded-md border border-white/6 bg-white/[0.03] px-1.5 py-0.5 text-[10px] font-medium text-ash">
              +{trainer.specialties.length - 3}
            </span>
          )}
        </div>

        {/* Spacer */}
        <div className="flex-1 min-h-4" />

        {/* Bottom Actions */}
      <div className="mt-6 pt-4 border-t border-white/6 flex items-center justify-center">
        {/* View Profile Button */}
        <button
          onClick={() => onSelect(trainer)}
          className="group/btn flex items-center gap-1.5 text-xs font-bold text-white hover:text-accent transition-colors py-2"
        >
          <span>Full Profile</span>
          <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-1 text-accent" />
        </button>
      </div>
      </div>
    </motion.div>
  );
}
