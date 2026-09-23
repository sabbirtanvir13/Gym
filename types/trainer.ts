export type TrainerGender = "male" | "female";

export interface TrainerStat {
  label: string;
  value: string;
}

export interface Trainer {
  id: string;
  name: string;
  gender: TrainerGender;
  role: string;
  tagline: string;
  specialty: string;
  specialties: string[];
  experience: string;
  rating: number;
  reviewsCount: number;
  image: string;
  certifications: string[];
  bio: string;
  philosophy: string;
  stats: TrainerStat[];
  schedule: string[];
  achievements: string[];
  socials: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    facebook?: string;
  };
  isOwner?: boolean;
}

export interface BookingFormData {
  trainerId: string;
  trainerName: string;
  clientName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  goal: string;
  notes?: string;
}
