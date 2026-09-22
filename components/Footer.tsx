"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Dumbbell,
  Mail,
  MapPin,
  Phone,
  ArrowUp,
} from "lucide-react";
import { InstagramIcon, FacebookIcon, XIcon } from "./SocialIcons";

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Membership", href: "#membership" },
  { label: "Schedule", href: "#schedule" },
  { label: "Gallery", href: "#gallery" },
];

const PROGRAM_LINKS = [
  "Strength Training",
  "Weight Loss",
  "Muscle Building",
  "Cross Training",
  "Personal Training",
  "Cardio & Conditioning",
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="relative border-t border-white/5 bg-ink-2 noise-texture">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:pr-8">
              <a href="#home" className="font-display text-2xl font-extrabold">
                TITAN<span className="text-accent">.</span>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ash">
                More than a gym. A premium fitness experience designed to help
                you build your strongest self.
              </p>
              <div className="mt-6 flex gap-3">
                {[InstagramIcon, FacebookIcon, XIcon].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ash transition-all duration-300 hover:border-accent hover:text-accent"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ash transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
                Programs
              </h4>
              <ul className="space-y-3">
                {PROGRAM_LINKS.map((p) => (
                  <li key={p}>
                    <a
                      href="#programs"
                      className="text-sm text-ash transition-colors hover:text-accent"
                    >
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-ash">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>123 Fitness Avenue, Downtown, New York, NY 10001</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-ash">
                  <Phone size={16} className="shrink-0 text-accent" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-ash">
                  <Mail size={16} className="shrink-0 text-accent" />
                  <span>hello@titanfitness.com</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-ash">
                  <Dumbbell size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>
                    Mon – Fri: 5:00 AM – 11:00 PM
                    <br />
                    Sat – Sun: 6:00 AM – 10:00 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-ash-2 md:flex-row">
            <p>&copy; {new Date().getFullYear()} TITAN Fitness Club. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-black shadow-lg shadow-accent/20 transition-transform hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
