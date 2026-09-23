"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  RotateCcw,
  Sparkles,
  Flame,
  Scale,
  Ruler,
  User,
  Activity,
  CheckCircle2,
  Info,
  HeartPulse,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import {
  ProteinInput,
  HealthResult,
  ValidationErrors,
  FITNESS_GOALS,
  ACTIVITY_LEVELS,
  validateProteinInputs,
  calculateHealthMetrics,
  Gender,
  FitnessGoal,
  ActivityLevel,
} from "@/lib/protein-calculator";

type CalcMode = "protein" | "bmi" | "combined";

const INITIAL_INPUT: ProteinInput = {
  height: "175",
  weight: "70",
  age: "22",
  gender: "male",
  fitnessGoal: "muscle",
  activityLevel: "moderate",
};

export default function ProteinCalculator() {
  const [calcMode, setCalcMode] = useState<CalcMode>("protein");
  const [input, setInput] = useState<ProteinInput>(INITIAL_INPUT);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [result, setResult] = useState<HealthResult | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleInputChange = (field: keyof ProteinInput, value: string) => {
    setInput((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateProteinInputs(input);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setResult(null);
      setHasCalculated(false);
      return;
    }

    setErrors({});
    const healthResult = calculateHealthMetrics(input);
    setResult(healthResult);
    setHasCalculated(true);
  };

  const handleReset = () => {
    setInput({
      height: "",
      weight: "",
      age: "",
      gender: "male",
      fitnessGoal: "general",
      activityLevel: "moderate",
    });
    setErrors({});
    setResult(null);
    setHasCalculated(false);
  };

  const switchMode = (mode: CalcMode) => {
    setCalcMode(mode);
    setHasCalculated(false);
    setResult(null);
    setErrors({});
  };

  return (
    <section id="health-calculator" className="relative py-16 lg:py-24">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Health & Fitness Calculators"
          title="Daily Protein & BMI Calculators"
          subtitle="Choose between our Personalized Protein Calculator, Body Mass Index (BMI) Calculator, or run a Complete Health Assessment."
          center
        />

        {/* Top Calculator Mode Switcher Tabs */}
        <div className="mt-8 flex items-center justify-center">
          <div className="inline-flex items-center gap-1.5 rounded-2xl border border-white/10 bg-charcoal/90 p-1.5 backdrop-blur-xl">
            <button
              type="button"
              onClick={() => switchMode("protein")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all duration-300 ${
                calcMode === "protein"
                  ? "bg-accent text-black shadow-lg shadow-accent/20"
                  : "text-ash hover:text-white"
              }`}
            >
              <Flame size={15} />
              Protein Calculator
            </button>
            <button
              type="button"
              onClick={() => switchMode("bmi")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all duration-300 ${
                calcMode === "bmi"
                  ? "bg-accent text-black shadow-lg shadow-accent/20"
                  : "text-ash hover:text-white"
              }`}
            >
              <HeartPulse size={15} />
              BMI Calculator
            </button>
            <button
              type="button"
              onClick={() => switchMode("combined")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all duration-300 ${
                calcMode === "combined"
                  ? "bg-accent text-black shadow-lg shadow-accent/20"
                  : "text-ash hover:text-white"
              }`}
            >
              <Sparkles size={15} />
              Both (All-In-One)
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Inputs Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-3xl border border-white/10 bg-charcoal/80 p-6 backdrop-blur-xl transition-all lg:p-8 ${
              hasCalculated && result ? "lg:col-span-6" : "lg:col-span-12 max-w-4xl mx-auto"
            }`}
          >
            <div className="mb-6 border-b border-white/10 pb-4">
              <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                {calcMode === "protein" && <Flame className="text-accent" size={22} />}
                {calcMode === "bmi" && <HeartPulse className="text-accent" size={22} />}
                {calcMode === "combined" && <Sparkles className="text-accent" size={22} />}
                {calcMode === "protein" && "Protein Calculator Form"}
                {calcMode === "bmi" && "BMI Calculator Form"}
                {calcMode === "combined" && "Full Health Assessment Form"}
              </h3>
              <p className="text-xs text-ash mt-1">
                {calcMode === "protein" && "Calculate your estimated daily protein requirement based on your weight and goals."}
                {calcMode === "bmi" && "Calculate your Body Mass Index (BMI) and healthy weight status based on height & weight."}
                {calcMode === "combined" && "Calculate both Daily Protein intake and Body Mass Index (BMI) together."}
              </p>
            </div>

            <form onSubmit={handleCalculate} className="space-y-6">
              {/* Primary Measurements Grid (Height, Weight, Age) */}
              <div className="grid gap-5 sm:grid-cols-3">
                {/* Weight Input */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ash">
                    <Scale size={14} className="text-accent" />
                    Weight <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={input.weight}
                      onChange={(e) => handleInputChange("weight", e.target.value)}
                      placeholder="e.g. 70"
                      min="20"
                      max="300"
                      className={`w-full rounded-xl border bg-ink-2 px-4 py-3.5 pr-12 text-sm text-white placeholder-ash-2 outline-none transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 ${
                        errors.weight ? "border-red-500/80 bg-red-500/5" : "border-white/10"
                      }`}
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-ash-2">
                      kg
                    </span>
                  </div>
                  {errors.weight && (
                    <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.weight}</p>
                  )}
                </div>

                {/* Height Input */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ash">
                    <Ruler size={14} className="text-accent" />
                    Height <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={input.height}
                      onChange={(e) => handleInputChange("height", e.target.value)}
                      placeholder="e.g. 175"
                      min="100"
                      max="250"
                      className={`w-full rounded-xl border bg-ink-2 px-4 py-3.5 pr-12 text-sm text-white placeholder-ash-2 outline-none transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 ${
                        errors.height ? "border-red-500/80 bg-red-500/5" : "border-white/10"
                      }`}
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-ash-2">
                      cm
                    </span>
                  </div>
                  {errors.height && (
                    <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.height}</p>
                  )}
                </div>

                {/* Age Input */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ash">
                    <User size={14} className="text-accent" />
                    Age <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={input.age}
                      onChange={(e) => handleInputChange("age", e.target.value)}
                      placeholder="e.g. 22"
                      min="13"
                      max="100"
                      className={`w-full rounded-xl border bg-ink-2 px-4 py-3.5 pr-12 text-sm text-white placeholder-ash-2 outline-none transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 ${
                        errors.age ? "border-red-500/80 bg-red-500/5" : "border-white/10"
                      }`}
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-ash-2">
                      yrs
                    </span>
                  </div>
                  {errors.age && (
                    <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.age}</p>
                  )}
                </div>
              </div>

              {/* Gender Selection */}
              <div>
                <label className="mb-2.5 block text-xs font-bold uppercase tracking-wider text-ash">
                  Gender
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(["male", "female"] as Gender[]).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => handleInputChange("gender", g)}
                      className={`relative flex items-center justify-center rounded-xl border py-3 text-sm font-bold capitalize transition-all duration-300 ${
                        input.gender === g
                          ? "border-accent bg-accent/10 text-accent shadow-[0_0_15px_var(--theme-accent-glow)]"
                          : "border-white/10 bg-ink-2 text-ash hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {g}
                      {input.gender === g && (
                        <CheckCircle2 size={16} className="absolute right-3.5 text-accent" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fitness Goal Selection (Only required for Protein / Combined modes) */}
              {calcMode !== "bmi" && (
                <div>
                  <label className="mb-2.5 block text-xs font-bold uppercase tracking-wider text-ash">
                    Fitness Goal
                  </label>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {FITNESS_GOALS.map((goal) => (
                      <button
                        key={goal.id}
                        type="button"
                        onClick={() => handleInputChange("fitnessGoal", goal.id as FitnessGoal)}
                        className={`group flex flex-col items-start rounded-xl border p-3.5 text-left transition-all duration-300 ${
                          input.fitnessGoal === goal.id
                            ? "border-accent bg-accent/10 shadow-[0_0_15px_var(--theme-accent-glow)]"
                            : "border-white/10 bg-ink-2 hover:border-white/20"
                        }`}
                      >
                        <div className="flex w-full items-center justify-between">
                          <span
                            className={`text-sm font-bold ${
                              input.fitnessGoal === goal.id ? "text-accent" : "text-white"
                            }`}
                          >
                            {goal.label}
                          </span>
                          {input.fitnessGoal === goal.id && (
                            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                          )}
                        </div>
                        <span className="mt-1 text-xs text-ash">{goal.description}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Activity Level Selection (Only required for Protein / Combined modes) */}
              {calcMode !== "bmi" && (
                <div>
                  <label className="mb-2.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ash">
                    <Activity size={14} className="text-accent" />
                    Activity Level
                  </label>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {ACTIVITY_LEVELS.map((act) => (
                      <button
                        key={act.id}
                        type="button"
                        onClick={() => handleInputChange("activityLevel", act.id as ActivityLevel)}
                        className={`flex flex-col items-start rounded-xl border p-3.5 text-left transition-all duration-300 ${
                          input.activityLevel === act.id
                            ? "border-accent bg-accent/10 shadow-[0_0_15px_var(--theme-accent-glow)]"
                            : "border-white/10 bg-ink-2 hover:border-white/20"
                        }`}
                      >
                        <div className="flex w-full items-center justify-between">
                          <span
                            className={`text-sm font-bold ${
                              input.activityLevel === act.id ? "text-accent" : "text-white"
                            }`}
                          >
                            {act.label}
                          </span>
                          {input.activityLevel === act.id && (
                            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                          )}
                        </div>
                        <span className="mt-1 text-xs text-ash">{act.description}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:items-center">
                {hasCalculated && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-bold text-ash transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    <RotateCcw size={16} />
                    Reset
                  </button>
                )}

                <button
                  type="submit"
                  className="group relative flex-1 inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-accent to-secondary px-8 py-3.5 text-sm font-extrabold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_25px_var(--theme-accent-glow)] active:scale-[0.99]"
                >
                  <Calculator size={18} className="relative z-10" />
                  <span className="relative z-10 uppercase tracking-wide">
                    {calcMode === "protein" && "Calculate My Protein"}
                    {calcMode === "bmi" && "Calculate My BMI"}
                    {calcMode === "combined" && "Calculate Protein & BMI"}
                  </span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[150%] skew-x-[-20deg]" />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Results Section */}
          <AnimatePresence mode="wait">
            {hasCalculated && result && (
              <motion.div
                key="result-cards"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6 space-y-6"
              >
                {/* 1. DAILY PROTEIN TARGET CARD (Visible in protein or combined mode) */}
                {(calcMode === "protein" || calcMode === "combined") && (
                  <div className="rounded-3xl border border-accent/30 bg-gradient-to-b from-charcoal/90 via-charcoal/80 to-ink-2/90 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5),0_0_20px_var(--theme-accent-glow)] lg:p-7">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-2">
                        <Sparkles className="text-accent animate-spin-slow" size={18} />
                        <span className="text-xs font-bold uppercase tracking-widest text-accent">
                          YOUR DAILY PROTEIN TARGET
                        </span>
                      </div>
                      <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-extrabold text-accent border border-accent/20">
                        ESTIMATE
                      </span>
                    </div>

                    <div className="py-4 text-center">
                      <div className="font-display text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
                        <span className="text-gradient drop-shadow-sm">
                          {result.protein.recommendedTarget}
                        </span>
                        <span className="text-xl font-bold text-accent ml-1.5">g/day</span>
                      </div>
                      <p className="mt-1.5 text-xs text-ash font-medium">
                        Recommended Range:{" "}
                        <strong className="text-white font-semibold">
                          {result.protein.minRange}–{result.protein.maxRange} g/day
                        </strong>
                      </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4 rounded-2xl border border-white/5 bg-ink/60 p-3.5">
                      <div className="flex items-center justify-between text-xs font-bold text-ash mb-1.5">
                        <span>Daily Target Scale</span>
                        <span className="text-accent font-extrabold">
                          {result.protein.recommendedTarget}g
                        </span>
                      </div>
                      <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-white/10 p-0.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${result.protein.percentagePosition}%` }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-accent to-secondary shadow-[0_0_12px_var(--theme-accent-glow)]"
                        />
                      </div>
                      <div className="mt-1.5 flex justify-between text-[10px] font-semibold text-ash-2">
                        <span>{result.protein.minRange}g (Min)</span>
                        <span>{result.protein.maxRange}g (Max)</span>
                      </div>
                    </div>

                    {/* Meal Breakdown Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-white/5 bg-ink-2/80 p-3 text-center">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-ash">
                          Protein per meal
                        </span>
                        <span className="mt-1 flex items-center justify-center gap-1 text-sm font-extrabold text-white">
                          <Flame size={14} className="text-accent" />
                          Approx. {result.protein.proteinPerMeal} g
                        </span>
                      </div>
                      <div className="rounded-xl border border-white/5 bg-ink-2/80 p-3 text-center">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-ash">
                          Suggested meals
                        </span>
                        <span className="mt-1 flex items-center justify-center gap-1 text-sm font-extrabold text-white">
                          <CheckCircle2 size={14} className="text-accent" />
                          {result.protein.suggestedMeals} meals/day
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. BODY MASS INDEX (BMI) CARD (Visible in bmi or combined mode) */}
                {(calcMode === "bmi" || calcMode === "combined") && (
                  <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-charcoal/90 via-charcoal/80 to-ink-2/90 p-6 backdrop-blur-xl shadow-lg lg:p-7">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-2">
                        <HeartPulse className="text-accent animate-pulse" size={18} />
                        <span className="text-xs font-bold uppercase tracking-widest text-accent">
                          YOUR BODY MASS INDEX (BMI)
                        </span>
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold border ${result.bmi.categoryColor}`}
                      >
                        {result.bmi.category}
                      </span>
                    </div>

                    <div className="py-4 text-center">
                      <div className="font-display text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
                        <span className="text-gradient drop-shadow-sm">{result.bmi.bmi}</span>
                        <span className="text-lg font-bold text-ash ml-2">BMI Score</span>
                      </div>
                      <p className="mt-1.5 text-xs text-ash font-medium">
                        Ideal Weight Range for Height:{" "}
                        <strong className="text-white font-semibold">
                          {result.bmi.idealWeightMin}–{result.bmi.idealWeightMax} kg
                        </strong>
                      </p>
                    </div>

                    {/* BMI Progress Bar Gauge */}
                    <div className="mb-4 rounded-2xl border border-white/5 bg-ink/60 p-3.5">
                      <div className="flex items-center justify-between text-xs font-bold text-ash mb-1.5">
                        <span>BMI Category Scale</span>
                        <span className="text-accent font-extrabold">{result.bmi.category}</span>
                      </div>

                      <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-white/10 p-0.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${result.bmi.percentagePosition}%` }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-accent to-secondary shadow-[0_0_12px_var(--theme-accent-glow)]"
                        />
                      </div>

                      <div className="mt-1.5 flex justify-between text-[9px] font-semibold text-ash-2">
                        <span>Under (&lt;18.5)</span>
                        <span>Normal (18.5-24.9)</span>
                        <span>Over (25-29.9)</span>
                        <span>Obese (30+)</span>
                      </div>
                    </div>

                    {/* Weight Status Summary */}
                    <div className="rounded-xl border border-white/5 bg-ink-2/80 p-3 text-center">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-ash">
                        BMI Health Status
                      </span>
                      <span className="mt-1 block text-xs font-semibold text-white">
                        Your BMI of <strong className="text-accent">{result.bmi.bmi}</strong> is categorized as <strong className="text-white">{result.bmi.category}</strong>.
                      </span>
                    </div>
                  </div>
                )}

                {/* Explanation and Disclaimer */}
                <div className="space-y-2 rounded-xl border border-white/5 bg-ink/40 p-4 text-xs text-ash leading-relaxed">
                  <p className="flex items-start gap-2">
                    <Info size={14} className="mt-0.5 shrink-0 text-accent" />
                    <span>
                      {calcMode === "protein" && "Based on your body weight, height, activity level, and fitness goal, this provides an estimated daily protein requirement."}
                      {calcMode === "bmi" && "Based on your height and body weight, this provides an estimated Body Mass Index (BMI)."}
                      {calcMode === "combined" && "Based on your height, weight, age, activity level, and fitness goal, these calculations provide estimated daily protein requirements and Body Mass Index (BMI)."}
                    </span>
                  </p>
                  <p className="pt-2 border-t border-white/5 text-[11px] text-ash-2 italic">
                    * This calculator provides general estimates and is not medical or nutritional advice.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
