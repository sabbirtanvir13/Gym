import type { Metadata } from "next";
import TrainersHero from "@/components/trainers/TrainersHero";
import TrainersGrid from "@/components/trainers/TrainersGrid";
import TrainersFaqCta from "@/components/trainers/TrainersFaqCta";

export const metadata: Metadata = {
  title: "Elite Trainers & Coaches | Ahmed Gym & Cafe 29",
  description:
    "Meet our 6 certified master trainers (3 female & 3 male coaches) at Ahmed Gym & Cafe 29. Explore specializations, experience, certifications, and book your personalized 1-on-1 session.",
  keywords: [
    "gym trainers",
    "personal trainer",
    "female gym coach",
    "male gym trainer",
    "fitness trainer dhaka",
    "Ahmed gym trainers",
    "crossfit coach",
    "weight loss trainer",
  ],
  openGraph: {
    title: "Elite Trainers & Coaches | Ahmed Gym & Cafe 29",
    description:
      "Transform your strength and physique with 6 master certified coaches (3 male & 3 female) at Ahmed Gym & Cafe 29.",
    type: "website",
  },
};

export default function TrainersPage() {
  return (
    <div className="relative min-h-screen">
      <TrainersHero />
      <TrainersGrid />
      <TrainersFaqCta />
    </div>
  );
}
