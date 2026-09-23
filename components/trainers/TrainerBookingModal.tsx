"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Target,
  CheckCircle2,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { Trainer, BookingFormData } from "@/types/trainer";
import { TRAINERS_DATA } from "@/lib/trainers-data";

interface TrainerBookingModalProps {
  trainer: Trainer | null;
  isOpen: boolean;
  onClose: () => void;
}

const TIME_SLOTS = [
  "07:00 AM - 08:00 AM",
  "09:00 AM - 10:00 AM",
  "11:00 AM - 12:00 PM",
  "04:00 PM - 05:00 PM",
  "06:30 PM - 07:30 PM",
  "08:00 PM - 09:00 PM",
];

const FITNESS_GOALS = [
  "Weight Loss & Toning",
  "Muscle Building & Hypertrophy",
  "Strength & Powerlifting",
  "Mobility & Flexibility",
  "CrossFit & Functional Fitness",
  "General Health & Stamina",
];

export default function TrainerBookingModal({
  trainer,
  isOpen,
  onClose,
}: TrainerBookingModalProps) {
  const [selectedTrainerId, setSelectedTrainerId] = useState<string>(
    trainer?.id || TRAINERS_DATA[0].id
  );
  const [date, setDate] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>(TIME_SLOTS[0]);
  const [goal, setGoal] = useState<string>(FITNESS_GOALS[0]);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>("");

  // Update selected trainer if prop changes
  if (trainer && trainer.id !== selectedTrainerId && !isSubmitted) {
    setSelectedTrainerId(trainer.id);
  }

  const activeTrainer =
    TRAINERS_DATA.find((t) => t.id === selectedTrainerId) || TRAINERS_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = "AG-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refCode);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setDate("");
    setName("");
    setPhone("");
    setEmail("");
    setNotes("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 bg-ink/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-charcoal shadow-2xl z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/50 text-ash hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>

          {!isSubmitted ? (
            <div className="p-6 sm:p-8">
              {/* Modal Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent mb-2">
                  <Sparkles size={13} />
                  <span>Free Initial Fitness Assessment</span>
                </div>
                <h3 className="font-display text-2xl font-black text-white">
                  Book a 1-on-1 Session
                </h3>
                <p className="text-xs text-ash mt-1">
                  Schedule your consultation with our certified trainers at Ahmed Gym &amp; Cafe 29.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Trainer Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ash mb-1.5">
                    Select Your Trainer
                  </label>
                  <select
                    value={selectedTrainerId}
                    onChange={(e) => setSelectedTrainerId(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-ink-2 px-3.5 py-2.5 text-sm text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  >
                    <optgroup label="Female Coaches (৩ জন)">
                      {TRAINERS_DATA.filter((t) => t.gender === "female").map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name} — {t.specialty}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Male Coaches (৩ জন)">
                      {TRAINERS_DATA.filter((t) => t.gender === "male").map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name} — {t.specialty}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Primary Fitness Goal */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ash mb-1.5">
                    Primary Fitness Goal
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-ink-2 px-3.5 py-2.5 text-sm text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  >
                    {FITNESS_GOALS.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time Slot Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ash mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={date}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-ink-2 px-3.5 py-2.5 text-sm text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ash mb-1.5">
                      Time Slot
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-ink-2 px-3.5 py-2.5 text-sm text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Client Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ash mb-1.5">
                    Your Full Name
                  </label>
                  <div className="relative">
                    <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ash" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanvir Ahmed"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-ink-2 pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-ash-2 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ash mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <div className="relative">
                      <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ash" />
                      <input
                        type="tel"
                        required
                        placeholder="+880 1700-000000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-ink-2 pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-ash-2 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ash mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ash" />
                      <input
                        type="email"
                        required
                        placeholder="yourname@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-ink-2 pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-ash-2 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-accent to-secondary py-3.5 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_25px_var(--theme-accent-glow)]"
                  >
                    Confirm Consultation Booking
                  </button>
                  <p className="text-[11px] text-center text-ash mt-2">
                    Free 1st session consultation. No credit card required.
                  </p>
                </div>
              </form>
            </div>
          ) : (
            /* ── Success Confirmation Screen ──────────────────────────── */
            <div className="p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
              >
                <CheckCircle2 size={36} />
              </motion.div>

              <h3 className="font-display text-2xl font-black text-white">
                Booking Request Received!
              </h3>
              <p className="text-sm text-ash mt-2 max-w-sm mx-auto">
                Thank you, <strong className="text-white">{name}</strong>! Your session request with{" "}
                <strong className="text-accent">{activeTrainer.name}</strong> is queued.
              </p>

              {/* Reference Card */}
              <div className="my-6 rounded-2xl border border-white/8 bg-ink-2 p-4 text-left text-xs space-y-2 max-w-sm mx-auto">
                <div className="flex justify-between border-b border-white/6 pb-2">
                  <span className="text-ash">Booking Reference:</span>
                  <span className="font-mono font-bold text-accent">{bookingRef}</span>
                </div>
                <div className="flex justify-between border-b border-white/6 pb-2">
                  <span className="text-ash">Trainer:</span>
                  <span className="font-semibold text-white">{activeTrainer.name}</span>
                </div>
                <div className="flex justify-between border-b border-white/6 pb-2">
                  <span className="text-ash">Date &amp; Slot:</span>
                  <span className="font-semibold text-white">
                    {date || "Flexible"} ({timeSlot.split(" - ")[0]})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ash">Fitness Goal:</span>
                  <span className="font-semibold text-white">{goal}</span>
                </div>
              </div>

              {/* Quick WhatsApp Action */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/8801700000000?text=${encodeURIComponent(
                    `Hello Ahmed Gym! I booked a personal training session with ${activeTrainer.name} (Ref: ${bookingRef}). My name is ${name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs font-bold text-white hover:bg-emerald-500 transition-colors"
                >
                  <MessageSquare size={14} />
                  <span>Instant WhatsApp Confirmation</span>
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto rounded-full border border-white/10 px-6 py-3 text-xs font-semibold text-ash hover:text-white transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
