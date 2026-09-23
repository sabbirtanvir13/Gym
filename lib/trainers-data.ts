import { Trainer } from "@/types/trainer";

export const TRAINERS_DATA: Trainer[] = [
  // ── 3 FEMALE TRAINERS ───────────────────────────────────────────────
  {
    id: "elena-voss",
    name: "Elena Voss",
    gender: "male",
    role: "Senior Personal Trainer & Nutritionist",
    tagline:
      "Transform your body composition through science and sustainable habits.",
    specialty: "Weight Loss & Toning",
    specialties: [
      "Weight Loss",
      "Toning",
      "Metabolic Conditioning",
      "Nutrition Planning",
    ],
    experience: "6+ Years",
    rating: 4.9,
    reviewsCount: 138,
    image: "/mmentor/t1.png",
    certifications: [
      "NASM Certified Personal Trainer",
      "Precision Nutrition Level 1 Coach",
      "ACE Functional Training Specialist",
      "CPR & First Aid Certified",
    ],
    bio: "Elena specializes in sustainable fat loss, body recomposition, and empowering individuals with lifelong nutritional habits. Her supportive yet challenging approach guarantees measurable changes inside and outside the gym.",
    philosophy:
      "Discipline creates freedom. We don't do crash diets; we build strong, resilient bodies with proven scientific methods.",
    stats: [
      { label: "Clients Transformed", value: "150+" },
      { label: "Success Rate", value: "98.5%" },
      { label: "Sessions Completed", value: "2,600+" },
    ],
    schedule: [
      "Mon - Thu: 06:30 AM - 12:30 PM",
      "Fri: 07:00 AM - 11:30 AM",
      "Sat: 09:00 AM - 01:00 PM",
    ],
    achievements: [
      "Top Transformation Coach of the Year 2024",
      "Keynote Speaker at Dhaka Fitness Expo",
      "Published fitness contributor in Men & Women Health BD",
    ],
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "sara-khan",
    name: "Sara Khan",
    gender: "male",
    role: "Lead Mobility Coach & Yoga Director",
    tagline:
      "Master movement mechanics, bulletproof your joints, and unlock freedom.",
    specialty: "Mobility & Recovery",
    specialties: [
      "Mobility & Flexibility",
      "Yoga Flow",
      "Core Stability",
      "Post-Injury Rehab",
    ],
    experience: "8+ Years",
    rating: 5.0,
    reviewsCount: 184,
    image: "/mmentor/t2.png",
    certifications: [
      "RYT-500 Master Yoga Instructor",
      "FMS (Functional Movement Screen) Certified",
      "FRC (Functional Range Conditioning) Mobility Specialist",
      "Mindfulness & Breathwork Master Coach",
    ],
    bio: "Sara bridges traditional mindfulness and modern biomechanics. Whether you are an athlete dealing with stiff hips or a professional suffering from desk-bound posture, Sara restores your natural posture and peak mobility.",
    philosophy:
      "You are only as young as your spine and joints. Move freely to live fiercely.",
    stats: [
      { label: "Athletes Coached", value: "240+" },
      { label: "Workshops Hosted", value: "35+" },
      { label: "Teaching Hours", value: "3,500+" },
    ],
    schedule: [
      "Sun - Thu: 07:00 AM - 01:00 PM",
      "Mon & Wed: 05:00 PM - 08:00 PM",
      "Sat: 08:00 AM - 12:00 PM",
    ],
    achievements: [
      "Yoga Alliance Registered 500-HR Master",
      "Specialist consultant for national level athletes",
      "Architect of Ahmed Gym's Recovery Lab",
    ],
    socials: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
    },
  },
  {
    id: "maya-lin",
    name: "Maya Lin",
    gender: "male",
    role: "HIIT & Athletic Conditioning Coach",
    tagline:
      "Build unbreakable cardiovascular endurance and explosive athleticism.",
    specialty: "HIIT & Conditioning",
    specialties: [
      "HIIT & Tabata",
      "Athletic Conditioning",
      "Calisthenics",
      "Speed & Agility",
    ],
    experience: "5+ Years",
    rating: 4.9,
    reviewsCount: 112,
    image: "/mmentor/t3.png",
    certifications: [
      "ISSA Master Personal Trainer",
      "CrossFit Level 2 Trainer (CF-L2)",
      "Battle Ropes & Kettlebell Master Specialist",
      "USA Track & Field Level 1 Coach",
    ],
    bio: "Maya brings explosive energy to every training block. She blends high-intensity interval conditioning with calisthenics bodyweight mastery to produce unmatched stamina and shredded muscle tone.",
    philosophy:
      "Comfort is the enemy of progress. When your lungs burn and muscles ache, that is where champions are forged.",
    stats: [
      { label: "Active Clients", value: "115+" },
      { label: "Calories Torched/Session", value: "700+ kcal" },
      { label: "Bootcamps Run", value: "80+" },
    ],
    schedule: [
      "Mon - Fri: 06:00 AM - 11:30 AM",
      "Tue & Thu: 04:30 PM - 08:30 PM",
      "Sat: 07:30 AM - 11:30 AM",
    ],
    achievements: [
      "National Calisthenics Championship Finalist",
      "Spartan Race Elite Finisher",
      "Ahmed Gym High-Intensity Coach of the Year",
    ],
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://x.com",
    },
  },

  // ── 3 MALE TRAINERS ─────────────────────────────────────────────────
  {
    id: "ayesha-rahman",
    name: "Ayesha Rahman",
    gender: "female",
    role: "Head Strength Coach & Power Specialist",
    tagline:
      "Master progressive barbell overload and unlock your peak physical power.",
    specialty: "Strength & Powerlifting",
    specialties: [
      "Powerlifting",
      "Heavy Barbell Training",
      "Hypertrophy",
      "Biomechanics",
    ],
    experience: "9+ Years",
    rating: 5.0,
    reviewsCount: 220,
    image: "/mmentor/alex_female.jpg",
    certifications: [
      "CSCS (Certified Strength & Conditioning Specialist)",
      "B.Sc. in Exercise & Sports Science",
      "USAPL National Level Strength Coach",
      "Westside Barbell Special Strengths Certified",
    ],
    bio: "Ayesha leads our performance department with unmatched technical mastery. Having trained competitive powerlifters and everyday warriors alike, she excels at fixing technique flaws and packing dense, explosive muscle on any frame.",
    philosophy:
      "Progress is purely math, biomechanics, and relentless effort. Respect the barbell, and it will reward you.",
    stats: [
      { label: "Powerlifters Coached", value: "85+" },
      { label: "Average Strength Boost", value: "+38%" },
      { label: "Sessions Supervised", value: "4,800+" },
    ],
    schedule: [
      "Mon - Fri: 08:00 AM - 02:00 PM",
      "Mon, Wed, Fri: 04:00 PM - 09:00 PM",
      "Sat: 10:00 AM - 03:00 PM",
    ],
    achievements: [
      "2x National Powerlifting Champion (83kg class)",
      "Coached 14 podium finishes in regional powerlifting meets",
      "Head Strength Director at Ahmed Gym & Cafe 29",
    ],
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "mariam-islam",
    name: "Mariam Islam",
    gender: "female",
    role: "CrossFit & Functional Fitness Director",
    tagline:
      "Forging complete physical preparedness for any real-world challenge.",
    specialty: "CrossFit & Olympic Lifting",
    specialties: [
      "CrossFit",
      "Olympic Weightlifting",
      "Functional Endurance",
      "Gymnastics",
    ],
    experience: "7+ Years",
    rating: 4.9,
    reviewsCount: 165,
    image: "/mmentor/marcus_female.jpg",
    certifications: [
      "Certified CrossFit Level 3 Trainer (CCFT)",
      "USAW (USA Weightlifting) Advanced Sports Performance Coach",
      "Invictus Gymnastics Certified",
      "First Aid & Advanced Athletic Taping",
    ],
    bio: "Mariam fuses Olympic barbell cycling, high-skill gymnastics, and engine-building conditioning. Her workouts are designed to transform you into an agile, resilient, and unstoppable athletic powerhouse.",
    philosophy:
      "Prepare for the unknown and the unknowable. When your body is versatile, your mind is invincible.",
    stats: [
      { label: "CrossFit Competitors", value: "190+" },
      { label: "PRs Hit This Year", value: "540+" },
      { label: "Sessions Led", value: "3,400+" },
    ],
    schedule: [
      "Mon - Thu: 06:00 AM - 12:00 PM",
      "Tue & Thu: 05:00 PM - 09:30 PM",
      "Sat: 08:00 AM - 01:00 PM",
    ],
    achievements: [
      "CrossFit Games Regional Qualifier Team Member",
      "Snatch PR: 130kg / Clean & Jerk PR: 165kg",
      "Founder of Ahmed Gym Cross Performance WODs",
    ],
    socials: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
    },
  },
  {
    id: "tariq-ahmed",
    name: "Tariq Ahmed",
    gender: "male",
    role: "Hypertrophy & Posture Rehabilitation Coach",
    tagline:
      "Sculpt symmetrical muscle while protecting joints and correcting posture.",
    specialty: "Hypertrophy & Posture Rehab",
    specialties: [
      "Aesthetic Bodybuilding",
      "Hypertrophy",
      "Posture Correction",
      "Injury Prevention",
    ],
    experience: "10+ Years",
    rating: 5.0,
    reviewsCount: 245,
    image:
      "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=800",
    certifications: [
      "ACE Master Personal Trainer",
      "EXOS Performance Specialist (XPS)",
      "Corrective Exercise Specialist (CES)",
      "Advanced Biomechanics & Hypertrophy Specialist",
    ],
    bio: "With a decade of clinical and bodybuilding coaching experience, Tariq specializes in building balanced, aesthetic physiques while eliminating chronic shoulder, back, and hip issues caused by modern lifestyles.",
    philosophy:
      "Form follows function, and symmetry creates art. Train intelligently so you can train for life.",
    stats: [
      { label: "Lifetime Clients", value: "420+" },
      { label: "Injury Recovery Rate", value: "99.2%" },
      { label: "Sessions Completed", value: "5,300+" },
    ],
    schedule: [
      "Sun - Thu: 09:00 AM - 03:00 PM",
      "Mon & Wed: 05:00 PM - 09:00 PM",
      "Sat: 10:00 AM - 02:00 PM",
    ],
    achievements: [
      "Senior Master Trainer & Biomechanics Mentor",
      "Over 10 years of zero-injury training record",
      "Coached multiple classic physique champions",
    ],
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    isOwner: true,
  },
];

export const SPECIALTY_FILTERS = [
  "All",
  "Strength & Powerlifting",
  "Weight Loss & Toning",
  "Mobility & Recovery",
  "CrossFit & Olympic Lifting",
  "HIIT & Conditioning",
  "Hypertrophy & Posture Rehab",
] as const;

export const TEAM_METRICS = [
  {
    value: "6",
    suffix: " Master Coaches",
    label: "3 Male & 3 Female Elite Trainers",
  },
  { value: "100%", suffix: "", label: "Internationally Certified" },
  { value: "12k+", suffix: "", label: "1-on-1 Sessions Completed" },
  { value: "4.96", suffix: " ★", label: "Average Member Rating" },
];
