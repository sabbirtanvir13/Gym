"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import AccentSwitcher from "@/components/AccentSwitcher";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "/trainers" },
  { label: "Membership", href: "#membership" },
  { label: "Schedule", href: "#schedule" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    if (pathname === "/trainers") {
      setActive("/trainers");
      const onScrollSimple = () => setScrolled(window.scrollY > 40);
      window.addEventListener("scroll", onScrollSimple, { passive: true });
      onScrollSimple();
      return () => window.removeEventListener("scroll", onScrollSimple);
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const hashSections = NAV_LINKS.filter((l) => l.href.startsWith("#")).map((l) => l.href);
      const current = hashSections.find((href) => {
        const el = document.querySelector(href);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const handleNav = (href: string) => {
    setOpen(false);
    if (href === "/trainers") {
      router.push("/trainers");
      return;
    }
    if (href === "/" || href === "#home") {
      if (pathname !== "/") {
        router.push("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    if (href.startsWith("#")) {
      if (pathname !== "/") {
        router.push("/" + href);
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#home");
            }}
            className="font-display text-xl font-extrabold tracking-tight"
          >
            <span className="text-accent">AHMED GYM &amp; CAFE 29</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    active === link.href
                      ? "text-white"
                      : "text-ash hover:text-white"
                  }`}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-accent"
                      transition={{ type: "spring", stiffness: 350, damping: 30, mass: 1 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <AccentSwitcher />
            <a
              href="#membership"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#membership");
              }}
              className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-accent to-secondary px-6 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_20px_var(--theme-accent-glow)]"
            >
              <span className="relative z-10">JOIN NOW</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[150%] skew-x-[-20deg]" />
            </a>
          </div>

          {/* Mobile: show AccentSwitcher + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <AccentSwitcher />
            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/95 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 flex h-full w-72 flex-col gap-1 border-l border-white/10 bg-charcoal px-6 py-24"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    active === link.href
                      ? "bg-white/5 text-accent"
                      : "text-ash hover:text-white"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#membership"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("#membership");
                }}
                className="group relative mt-4 overflow-hidden rounded-full bg-gradient-to-r from-accent to-secondary px-6 py-3 text-center text-sm font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_20px_var(--theme-accent-glow)]"
              >
                <span className="relative z-10">JOIN NOW</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[150%] skew-x-[-20deg]" />
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
