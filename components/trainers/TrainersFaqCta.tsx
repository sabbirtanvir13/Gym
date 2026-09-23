"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ShieldCheck,
  Zap,
  HeartHandshake,
  MessageCircle,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const WHY_POINTS = [
  {
    icon: Zap,
    title: "Scientific Periodization",
    desc: "Every workout block is calculated with progressive overload, deload cycles, and fatigue management.",
  },
  {
    icon: ShieldCheck,
    title: "Joint-Friendly Biomechanics",
    desc: "We fix kinetic chain dysfunctions before loading heavy to ensure zero injury downtime.",
  },
  {
    icon: HeartHandshake,
    title: "Integrated Cafe & Nutrition",
    desc: "Custom macronutrient plans coordinated directly with Ahmed Cafe 29's clean protein menu.",
  },
];

const FAQS = [
  {
    q: "How do I choose between male and female personal trainers?",
    a: "All 6 of our coaches (3 male, 3 female) are elite, internationally accredited specialists. You can choose based on your comfort, training style, or personal preference. Our female trainers excel in sustainable fat loss, yoga mobility, and athletic conditioning, while our male trainers specialize in powerlifting, Olympic CrossFit, and bodybuilding rehab.",
  },
  {
    q: "What is included in the initial consultation session?",
    a: "Your first session includes a comprehensive body composition analysis (InBody), movement screen, posture evaluation, and a personalized 12-week roadmap tailored to your specific goals.",
  },
  {
    q: "Can I switch trainers if my schedule changes?",
    a: "Yes! Our system allows seamless transitions between coaches without losing your progress tracking, workout history, or nutritional logs.",
  },
  {
    q: "Do I need prior gym experience to train with personal coaches?",
    a: "Not at all. Over 65% of our private training clients start with zero gym background. Our trainers guide you step-by-step with proper breathing and technique from day one.",
  },
];

export default function TrainersFaqCta() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="relative py-20 lg:py-28 border-t border-white/6 overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[400px] w-[500px] rounded-full bg-[var(--theme-accent-glow)] blur-[140px] opacity-25" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* ── 3 Advantage Pillars ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {WHY_POINTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/8 bg-charcoal/50 p-7 backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:bg-charcoal/80"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-ash">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── FAQ Section ─────────────────────────────────────────────── */}
        <div className="mx-auto max-w-3xl mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Clarifications &amp; Details
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-white/8 bg-charcoal/40 backdrop-blur-md overflow-hidden transition-colors hover:border-white/15"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-white transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-accent transition-transform duration-300 shrink-0 ml-3 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-ash border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Consultation Match Banner ────────────────────────────────── */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-charcoal via-ink-2 to-charcoal p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--theme-accent-glow)] blur-[90px] opacity-40" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent mb-4">
                <Sparkles size={13} />
                <span>Personalized Trainer Matching</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Not sure which coach is right for you?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-ash leading-relaxed">
                Speak directly with our head training coordinator. We will analyze your body composition goals, daily schedule, and fitness level to pair you with the ideal coach (male or female).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <a
                href="https://wa.me/8801700000000?text=Hi%20Ahmed%20Gym!%20I%20would%20like%20a%20free%2015-minute%20trainer%20matching%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-secondary px-8 py-4 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_var(--theme-accent-glow)] text-center"
              >
                <MessageCircle size={17} />
                <span>WhatsApp Match Chat</span>
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 text-center"
              >
                <PhoneCall size={16} className="text-accent" />
                <span>Visit Ahmed Gym</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
