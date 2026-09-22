"use client";

import { motion } from "framer-motion";
import { TRAINERS } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { InstagramIcon, FacebookIcon, XIcon } from "./SocialIcons";

export default function Trainers() {
  return (
    <section id="trainers" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title="MEET THE EXPERTS"
          subtitle="Our certified trainers bring years of experience and a passion for helping you succeed."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINERS.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-charcoal"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

                {/* Social icons - appear on hover */}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  {[InstagramIcon, FacebookIcon, XIcon].map((Icon, si) => (
                    <a
                      key={si}
                      href="#"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-accent hover:text-black"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="relative p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {trainer.role}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold">
                  {trainer.name}
                </h3>
                <p className="mt-1 text-sm text-ash">{trainer.spec}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
