"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { IMAGES } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const HEIGHTS = ["h-64", "h-80", "h-72", "h-96", "h-64", "h-80", "h-72", "h-96", "h-64"];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const nextImage = useCallback(() => {
    setLightbox((prev) =>
      prev === null ? 0 : (prev + 1) % IMAGES.gallery.length
    );
  }, []);
  const prevImage = useCallback(() => {
    setLightbox((prev) =>
      prev === null ? 0 : (prev - 1 + IMAGES.gallery.length) % IMAGES.gallery.length
    );
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox, nextImage, prevImage]);

  return (
    <section id="gallery" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="INSIDE THE CLUB"
          subtitle="Take a visual tour of our premium facilities and the energy that defines TITAN."
        />

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {IMAGES.gallery.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
              className={`group relative mb-4 overflow-hidden rounded-2xl border border-white/8 ${HEIGHTS[i]}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="h-full w-full cursor-pointer object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onClick={() => setLightbox(i)}
              />
              <div className="absolute inset-0 bg-ink/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 backdrop-blur-sm">
                  <ZoomIn size={20} className="text-white" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/90 backdrop-blur-xl p-6"
          >
            <button
              onClick={closeLightbox}
              className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10"
            >
              <X size={22} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-2xl text-white transition-colors hover:bg-white/10 lg:left-8"
            >
              &#8249;
            </button>

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={IMAGES.gallery[lightbox]}
              alt={`Gallery ${lightbox + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-2xl text-white transition-colors hover:bg-white/10 lg:right-8"
            >
              &#8250;
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-ash">
              {lightbox + 1} / {IMAGES.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
