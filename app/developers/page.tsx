import type { Metadata } from "next";
import DevelopersShowcase from "@/components/developers/DevelopersShowcase";

export const metadata: Metadata = {
  title: "Developers | Ahmed Gym & Cafe 29",
  description:
    "Meet the talented developers behind the Ahmed Gym & Cafe 29 website. Full-stack engineers building premium digital fitness experiences.",
  openGraph: {
    title: "Developers | Ahmed Gym & Cafe 29",
    description:
      "Meet the talented developers behind the Ahmed Gym & Cafe 29 website.",
    type: "website",
  },
};

export default function DevelopersPage() {
  return (
    <div className="relative min-h-screen">
      <DevelopersShowcase />
    </div>
  );
}
