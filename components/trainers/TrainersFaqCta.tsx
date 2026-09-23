"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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


      </div>
    </section>
  );
}
