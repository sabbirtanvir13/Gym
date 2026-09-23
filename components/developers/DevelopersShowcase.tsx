"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Code2,
  Globe,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Sparkles,
} from "lucide-react";

/* ─── Developer Data ────────────────────────────────────────────────────── */
interface Developer {
  name: string;
  role: string;
  location?: string;
  bio: string;
  portfolio: string;
  email?: string;
  phone?: string;
  photo: string;
  techStack: string[];
  socials?: { github?: string; linkedin?: string };
}

const DEVELOPERS: Developer[] = [
  {
    name: "Tanvir Ahmed Sabbir",
    role: "Full Stack Developer",
    location: "Dhaka, Bangladesh",
    bio: "Full Stack Developer with 1 year of practical experience in web development and testing. Skilled in React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, and REST APIs. Experienced in building responsive full-stack applications, integrating APIs, debugging issues, and performing manual/API testing to ensure application quality.",
    portfolio: "https://tanvirahmedsabbir-dev.vercel.app/",
    email: "sabbirtanvirahmed18@gmail.com",
    photo: "/dev/dev-1.png",
    techStack: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"],
  },
  {
    name: "S M Tamjid Hossain Epick",
    role: "Full Stack Developer",
    bio: "Dedicated Full Stack Developer focused on building scalable and high-performance web applications. Experienced with Next.js, React, TypeScript, Node.js, PostgreSQL, Prisma, and modern UI technologies. Has developed role-based platforms, learning management systems, rental marketplaces, payment integrations, and real-time dashboards.",
    portfolio: "https://epickdev.vercel.app/",
    phone: "+8801339613197",
    photo: "/dev/dev-2.png",
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
  },
];

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function DevelopersShowcase() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* ── Ambient glows ──────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[450px] w-[90%] max-w-4xl rounded-full bg-[var(--theme-accent-glow)] blur-[140px] opacity-30" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-[360px] w-[360px] rounded-full bg-[var(--theme-secondary-glow)] blur-[120px] opacity-20" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        {/* ── Breadcrumb ───────────────────────────────────────────────── */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ash mb-8"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-accent transition-colors duration-200">Home</Link>
          <ChevronRight size={13} className="text-ash-2" />
          <span className="text-accent">Developers</span>
        </motion.nav>

        {/* ── Header ───────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-md mb-5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-white">BUILT WITH PASSION</span>
            <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-extrabold text-accent">2 Engineers</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]">
            MEET THE{" "}
            <span className="text-accent drop-shadow-[0_0_24px_var(--theme-accent-glow)]">DEVELOPERS</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-ash">
            The engineers behind the digital experience of Ahmed Gym &amp; Cafe 29.
            Crafting premium, high-performance web applications with modern technologies.
          </p>
        </motion.div>

        {/* ── Developer Cards (alternating layout) ─────────────────────── */}
        <div className="flex flex-col gap-24">
          {DEVELOPERS.map((dev, idx) => (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className={`group flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}
            >
              {/* ── Photo column ── */}
              <div className="relative w-full lg:w-[44%] shrink-0">
                <div className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.06] shadow-[0_8px_60px_rgba(0,0,0,0.5)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={dev.photo}
                    alt={dev.name}
                    className="w-full aspect-[4/5] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <span className="inline-block rounded-full bg-accent/90 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-black backdrop-blur-sm">
                      {dev.role}
                    </span>
                  </div>
                  <div className="pointer-events-none absolute -top-4 -right-4 text-accent/[0.06]">
                    <Code2 size={140} strokeWidth={0.6} />
                  </div>
                </div>
              </div>

              {/* ── Text column ── */}
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-3">FEATURED DEVELOPER</p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-1">
                  {dev.name.split(" ").map((word, wi) => (
                    <span key={wi} className={wi % 2 === 1 ? "text-accent" : "text-white"}>{word} </span>
                  ))}
                </h2>
                <p className="text-sm font-semibold uppercase tracking-widest text-ash mb-4">{dev.role}</p>
                {dev.location && (
                  <p className="flex items-center gap-1.5 text-xs text-ash mb-6">
                    <MapPin size={13} className="text-accent/60" />
                    {dev.location}
                  </p>
                )}
                <div className="h-px w-12 bg-accent/40 mb-6" />
                <p className="text-sm sm:text-base leading-relaxed text-ash mb-8">{dev.bio}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {dev.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold text-white/70 transition-colors duration-200 hover:border-accent/40 hover:text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8 text-xs text-ash">
                  {dev.email && (
                    <a href={`mailto:${dev.email}`} className="flex items-center gap-1.5 transition-colors hover:text-accent">
                      <Mail size={13} className="text-accent/60" />
                      {dev.email}
                    </a>
                  )}
                  {dev.phone && (
                    <a href={`tel:${dev.phone}`} className="flex items-center gap-1.5 transition-colors hover:text-accent">
                      <Phone size={13} className="text-accent/60" />
                      {dev.phone}
                    </a>
                  )}
                </div>
                <a
                  href={dev.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-accent to-[var(--theme-secondary)] px-7 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_var(--theme-accent-glow)] active:scale-[0.98]"
                >
                  <Globe size={16} />
                  View Portfolio
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.02] px-5 py-2.5 text-xs font-medium text-ash backdrop-blur-md">
            <Sparkles size={14} className="text-accent" />
            Designed &amp; developed with ❤️ for Ahmed Gym &amp; Cafe 29
          </div>
        </motion.div>
      </div>
    </section>
  );
}
