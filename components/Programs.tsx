"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROGRAMS } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import SectionDivider from "./SectionDivider";

export default function Programs() {
  return (
    <section id="programs" className="relative py-24 lg:py-32 bg-ink-2">
      <SectionDivider position="top" color="fill-ink" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Programs"
          title="TRAIN SMARTER"
          subtitle="Every program is engineered by certified professionals to deliver real, measurable results."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program, i) => (
            <motion.a
              key={program.name}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: (i % 3) * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8 }}
              className="group relative block overflow-hidden rounded-2xl border border-white/8 bg-charcoal"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <motion.img
                  initial={{ scale: 1.2, filter: "blur(5px)" }}
                  whileInView={{ scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  src={program.image}
                  alt={program.name}
                  className="h-full w-full object-cover ken-burns"
                  loading="lazy"
                />
                <div className="duotone-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent transition-opacity duration-500 group-hover:from-ink" />
                <div className="absolute inset-0 bg-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="relative p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {program.name}
                  </h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-ash transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-black">
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ash">
                  {program.desc}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="h-0.5 w-0 bg-gradient-to-r from-accent to-secondary transition-all duration-500 group-hover:w-full" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
