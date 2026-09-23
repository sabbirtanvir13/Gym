"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  X,
  Star,
  CheckCircle2,
  Clock,
  Award,
  Flame,
  ShieldCheck,
  Quote,
  Phone,
} from "lucide-react";
import { Trainer } from "@/types/trainer";
import { InstagramIcon, XIcon } from "@/components/ui/SocialIcons";

interface TrainerDetailModalProps {
  trainer: Trainer | null;
  onClose: () => void;
}

export default function TrainerDetailModal({
  trainer,
  onClose,
}: TrainerDetailModalProps) {
  if (!trainer) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-ink/80 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-charcoal shadow-2xl z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-accent hover:text-black"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* ── Left Column: Trainer Photo & Core Info ─────────────── */}
            <div className="relative lg:col-span-5 flex flex-col justify-between bg-ink-2 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/8">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden mb-6 border border-white/8 shadow-lg">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Badges on image */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/70 px-3 py-1 backdrop-blur-md">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      trainer.gender === "female" ? "bg-pink-400" : "bg-sky-400"
                    }`}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                    {trainer.gender === "female" ? "Female Coach" : "Male Coach"}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-1 rounded-lg bg-black/70 px-2.5 py-1 backdrop-blur-md">
                    <Star size={13} className="fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-white">{trainer.rating.toFixed(1)}</span>
                    <span className="text-[10px] text-ash">({trainer.reviewsCount} reviews)</span>
                  </div>
                  <div className="rounded-lg bg-black/70 px-2.5 py-1 backdrop-blur-md text-xs font-bold text-accent">
                    {trainer.experience} Experience
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-2">
                {trainer.stats.map((st) => (
                  <div
                    key={st.label}
                    className="rounded-xl border border-white/6 bg-white/[0.02] p-3 text-center"
                  >
                    <div className="font-display text-sm font-black text-white">{st.value}</div>
                    <div className="text-[10px] text-ash mt-0.5 leading-tight">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right Column: Deep Details & Booking Trigger ───────── */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              {/* Header */}
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-0.5 text-xs font-bold text-accent mb-2">
                  <Award size={13} />
                  <span>{trainer.specialty}</span>
                </div>
                <h2 className="font-display text-3xl font-black text-white">{trainer.name}</h2>
                <p className="text-sm font-medium text-ash mt-0.5">{trainer.role}</p>
              </div>

              {/* Philosophy Quote */}
              <div className="relative rounded-2xl border border-accent/20 bg-accent/5 p-4 pl-10 text-xs sm:text-sm italic text-white/90">
                <Quote size={18} className="absolute left-3.5 top-4 text-accent/60" />
                &ldquo;{trainer.philosophy}&rdquo;
              </div>

              {/* About Bio */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-ash mb-2">
                  About the Coach
                </h4>
                <p className="text-sm leading-relaxed text-white/80">{trainer.bio}</p>
              </div>

              {/* Certifications & Credentials */}
              <div>
                <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ash mb-3">
                  <ShieldCheck size={14} className="text-accent" />
                  <span>Accreditations &amp; Certifications</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {trainer.certifications.map((cert) => (
                    <div
                      key={cert}
                      className="flex items-start gap-2 rounded-xl border border-white/6 bg-white/[0.02] p-2.5 text-xs text-white/85"
                    >
                      <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working Hours & Schedule */}
              <div>
                <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ash mb-2">
                  <Clock size={14} className="text-accent" />
                  <span>Available Training Hours</span>
                </h4>
                <div className="space-y-1.5">
                  {trainer.schedule.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-lg bg-white/[0.02] px-3 py-1.5 text-xs text-ash"
                    >
                      <span className="text-white/80">{item.split(":")[0]}</span>
                      <span className="font-semibold text-accent">
                        {item.substring(item.indexOf(":") + 1)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ash mb-2">
                  <Flame size={14} className="text-accent" />
                  <span>Career Achievements</span>
                </h4>
                <ul className="space-y-1 text-xs text-ash">
                  {trainer.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-white/8 flex flex-col sm:flex-row items-center justify-end gap-3">
                <a
                  href="tel:01777829308"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-secondary px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_25px_var(--theme-accent-glow)]"
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto rounded-full border border-white/10 px-6 py-3.5 text-xs font-semibold text-ash hover:text-white hover:border-white/20 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
