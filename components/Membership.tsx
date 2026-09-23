"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { PLANS } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Membership() {
  return (
    <section id="membership" className="relative py-24 lg:py-32">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[300px] sm:h-[400px] w-[300px] sm:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Membership"
          title="CHOOSE YOUR PLAN"
          subtitle="Flexible membership options designed to fit your goals and budget."
          center
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col rounded-3xl border p-8 transition-colors duration-300 ${
                plan.recommended
                  ? "border-accent/40 bg-gradient-to-b from-accent/[0.06] to-transparent"
                  : "border-white/8 bg-white/[0.02] hover:border-white/15"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-black">
                  Recommended
                </div>
              )}

              <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-ash">
                {plan.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl font-extrabold">
                  ${plan.price}
                </span>
                <span className="text-sm text-ash">/month</span>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-white/80"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.recommended
                          ? "bg-accent/15 text-accent"
                          : "bg-white/8 text-white/60"
                      }`}
                    >
                      <Check size={11} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 ${
                  plan.recommended
                    ? "bg-accent text-black hover:scale-105"
                    : "border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
                }`}
              >
                JOIN {plan.name}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 text-sm text-ash sm:flex-row"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-accent text-accent" />
            ))}
          </div>
          <span>No hidden fees · Cancel anytime · 7-day free trial</span>
        </motion.div>
      </div>
    </section>
  );
}
