import React, { useEffect, useState } from "react";
import { TRAINERS_DATA } from "@/lib/data/trainers-data";
import type { Trainer } from "@/types/trainer";

/**
 * TestimonialCarousel displays a rotating carousel of trainer testimonials.
 * Each slide shows the trainer's picture, name, rating, reviews count and a short excerpt.
 * The carousel automatically advances every 7 seconds and also supports manual navigation.
 */
const TestimonialCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const slideCount = TRAINERS_DATA.length;

  // Auto‑advance the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 7000);
    return () => clearInterval(timer);
  }, [slideCount]);

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + slideCount) % slideCount);
  };
  const goNext = () => {
    setCurrent((prev) => (prev + 1) % slideCount);
  };

  const trainer: Trainer = TRAINERS_DATA[current];
  const excerpt = trainer.bio.length > 150 ? trainer.bio.slice(0, 147) + "..." : trainer.bio;
  const ratingStars = "★".repeat(Math.round(trainer.rating));

  return (
    <section className="testimonial-carousel container mx-auto py-12">
      <div className="relative overflow-hidden rounded-xl bg-white/90 backdrop-blur-md shadow-lg">
        {/* Image background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${trainer.image})` }}
        />
        {/* Content overlay */}
        <div className="relative p-8 text-center">
          <img
            src={trainer.image}
            alt={trainer.name}
            className="mx-auto mb-4 h-24 w-24 rounded-full border-4 border-white object-cover"
          />
          <h3 className="text-xl font-semibold text-gray-800">{trainer.name}</h3>
          <p className="text-sm text-gray-600">{trainer.role}</p>
          <p className="mt-2 text-lg font-medium text-amber-600">
            {ratingStars} ({trainer.rating.toFixed(1)}) • {trainer.reviewsCount} reviews
          </p>
          <p className="mt-4 text-gray-700 italic">“{excerpt}”</p>
        </div>
        {/* Navigation arrows */}
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow-md hover:bg-white/90"
          aria-label="Previous testimonial"
        >
          ‹
        </button>
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow-md hover:bg-white/90"
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
