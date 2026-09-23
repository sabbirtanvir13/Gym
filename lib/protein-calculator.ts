export type Gender = "male" | "female";

export type FitnessGoal = "general" | "muscle" | "fat_loss" | "strength";

export type ActivityLevel = "low" | "moderate" | "active" | "very_active";

export interface ProteinInput {
  height: string; // user text input
  weight: string; // user text input
  age: string; // user text input
  gender: Gender;
  fitnessGoal: FitnessGoal;
  activityLevel: ActivityLevel;
}

export interface ValidationErrors {
  height?: string;
  weight?: string;
  age?: string;
}

export interface ProteinResult {
  minRange: number;
  maxRange: number;
  recommendedTarget: number;
  proteinPerMeal: number;
  suggestedMeals: number;
  percentagePosition: number; // For progress bar (0 to 100)
}

export const FITNESS_GOALS: { id: FitnessGoal; label: string; description: string }[] = [
  { id: "general", label: "General Fitness", description: "Maintain weight & overall health" },
  { id: "muscle", label: "Muscle Gain", description: "Build lean muscle mass" },
  { id: "fat_loss", label: "Fat Loss", description: "Preserve muscle while cutting fat" },
  { id: "strength", label: "Strength Training", description: "Maximize strength & power output" },
];

export const ACTIVITY_LEVELS: { id: ActivityLevel; label: string; description: string }[] = [
  { id: "low", label: "Low", description: "Sedentary or light daily activity" },
  { id: "moderate", label: "Moderate", description: "3–4 workouts / active routines per week" },
  { id: "active", label: "Active", description: "5+ intense workouts per week" },
  { id: "very_active", label: "Very Active", description: "Daily heavy training or physically active job" },
];

export function validateProteinInputs(input: ProteinInput): ValidationErrors {
  const errors: ValidationErrors = {};

  const heightNum = Number(input.height);
  if (!input.height || isNaN(heightNum)) {
    errors.height = "Please enter a valid height.";
  } else if (heightNum < 100 || heightNum > 250) {
    errors.height = "Height must be between 100 and 250 cm.";
  }

  const weightNum = Number(input.weight);
  if (!input.weight || isNaN(weightNum)) {
    errors.weight = "Please enter a valid weight.";
  } else if (weightNum < 20 || weightNum > 300) {
    errors.weight = "Weight must be between 20 and 300 kg.";
  }

  const ageNum = Number(input.age);
  if (!input.age || isNaN(ageNum)) {
    errors.age = "Please enter a valid age.";
  } else if (ageNum < 13 || ageNum > 100) {
    errors.age = "Age must be between 13 and 100 years.";
  }

  return errors;
}

export function calculateDailyProtein(input: ProteinInput): ProteinResult {
  const weight = Number(input.weight);

  // Base protein ranges per kg body weight
  let minMultiplier = 1.2;
  let maxMultiplier = 1.6;

  switch (input.fitnessGoal) {
    case "general":
      minMultiplier = 1.2;
      maxMultiplier = 1.6;
      break;
    case "muscle":
    case "fat_loss":
    case "strength":
      minMultiplier = 1.6;
      maxMultiplier = 2.2;
      break;
  }

  const minRange = Math.round(weight * minMultiplier);
  const maxRange = Math.round(weight * maxMultiplier);

  // Position within the range based on activity level
  let activityFactor = 0.55; // Default moderate
  switch (input.activityLevel) {
    case "low":
      activityFactor = 0.25;
      break;
    case "moderate":
      activityFactor = 0.55;
      break;
    case "active":
      activityFactor = 0.75;
      break;
    case "very_active":
      activityFactor = 0.95;
      break;
  }

  const recommendedTarget = Math.round(minRange + (maxRange - minRange) * activityFactor);

  const suggestedMeals = 4;
  const proteinPerMeal = Math.round(recommendedTarget / suggestedMeals);

  // Progress bar percentage calculation relative to max range threshold (scaled nicely up to ~100%)
  const percentagePosition = Math.min(
    100,
    Math.max(15, Math.round(((recommendedTarget - minRange) / (maxRange - minRange)) * 100))
  );

  return {
    minRange,
    maxRange,
    recommendedTarget,
    proteinPerMeal,
    suggestedMeals,
    percentagePosition,
  };
}
