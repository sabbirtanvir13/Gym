import { Trainer } from "@/types/trainer";

export const TRAINERS_DATA: Trainer[] = [
  // ── 2 FEMALE CRICKETER OWNERS ───────────────────────────────────────
  {
    id: "Rumana Ahmed",
    name: "Rumana Ahmed",
    gender: "female",
    role: "Owner & BD National Cricketer",
    tagline:
      "Bangladesh National Women's Cricket Team Athlete & Fitness Specialist.",
    specialty: "Athletic Conditioning",
    specialties: [
      "Cricket Conditioning",
      "Agility & Endurance",
      "Core Stability",
      "Athletic Performance",
    ],
    experience: "",
    rating: 5.0,
    reviewsCount: 210,
    image: "/mmentor/orn1.jpg",
    certifications: [
      "BD National Team Professional Athlete",
      "ICC High Performance Fitness Certification",
      "Advanced Sports Conditioning Specialist",
      "CPR & Athletic First Aid",
    ],
    bio: "Sobhana Mostary is an active middle-order batter for the Bangladesh Women's National Cricket Team and Co-Owner of Ahmed Gym & Cafe 29. She brings international sports conditioning and top-tier athletic discipline to our fitness community.",
    philosophy:
      "Representing your country starts with mastering your body. Discipline and consistency turn dreams into reality.",
    stats: [],
    schedule: [
      "Mon - Thu: 07:00 AM - 12:00 PM",
      "Fri: 08:00 AM - 11:30 AM",
      "Sat: 09:00 AM - 01:00 PM",
    ],
    achievements: [
      "Bangladesh Women's National Cricket Team Player",
      "Featured in ICC Women's T20 World Cup",
      "Co-Owner & Elite Athletic Director at Ahmed Gym",
    ],
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
    isOwner: true,
  },
  {
    id: "AhMed ShuMana",
    name: "AhMed ShuMana",
    gender: "female",
    role: "Owner & BD National Cricketer",
    tagline:
      "Legendary Bangladesh National Pace Bowler & Master Fitness Coach.",
    specialty: "Strength & Endurance",
    specialties: [
      "Pace Conditioning",
      "Functional Movement",
      "Body Recomposition",
      "Mobility & Recovery",
    ],
    experience: "",
    rating: 5.0,
    reviewsCount: 310,
    image: "/mmentor/orn2.jpg",
    certifications: [
      "Bangladesh National Team Veteran Athlete",
      "Level 2 Certified Strength & Conditioning Coach",
      "FMS Movement Specialist",
    ],
    bio: "Jahanara Alam is one of Bangladesh's most celebrated international cricketers and Co-Owner of Ahmed Gym. With over a decade of elite international competition, she inspires members to push past limits.",
    philosophy:
      "Hard work beats talent every single day. Train like a champion, live like a champion.",
    stats: [],
    schedule: [
      "Sun - Thu: 08:00 AM - 01:00 PM",
      "Tue & Thu: 04:00 PM - 08:00 PM",
      "Sat: 10:00 AM - 02:00 PM",
    ],
    achievements: [
      "Pioneer of Bangladesh Women's National Cricket Team",
      "First BD Female Cricketer to take 5-wicket haul in T20I",
      "Co-Owner & Fitness Mentor at Ahmed Gym",
    ],
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
    isOwner: true,
  },

  // ── REGULAR FEMALE TRAINERS ──────────────────────────────────────────
  {
    id: "Abir Parves",
    name: "Abir Parves",
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
    bio: "Elena specializes in sustainable fat loss, body recomposition, and empowering individuals with lifelong nutritional habits.",
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
    ],
    socials: {
      instagram: "https://instagram.com",
    },
  },



  // ── 3 MALE TRAINERS ─────────────────────────────────────────────────
  {
    id: "Shemul Afsan",
    name: "Shemul Afsan",
    gender: "male",
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
    image: "/mmentor/t2.png",
    certifications: [
      "CSCS (Certified Strength & Conditioning Specialist)",
      "B.Sc. in Exercise & Sports Science",
      "USAPL National Level Strength Coach",
    ],
    bio: "Alex leads our strength division with technical precision and structured barbell programming.",
    philosophy: "Progress is purely math, biomechanics, and relentless effort.",
    stats: [
      { label: "Powerlifters Coached", value: "85+" },
      { label: "Average Strength Boost", value: "+38%" },
      { label: "Sessions Supervised", value: "4,800+" },
    ],
    schedule: ["Mon - Fri: 08:00 AM - 02:00 PM", "Sat: 10:00 AM - 03:00 PM"],
    achievements: ["Regional Powerlifting Champion"],
    socials: {
      instagram: "https://instagram.com",
    },
  },
  {
    id: "Masrafi Mahmud",
    name: "Masrafi Mahmud",
    gender: "male",
    role: "CrossFit & Functional Fitness Specialist",
    tagline:
      "Forging complete physical preparedness for any real-world challenge.",
    specialty: "CrossFit & Olympic Lifting",
    specialties: ["CrossFit", "Olympic Weightlifting", "Functional Endurance"],
    experience: "7+ Years",
    rating: 4.9,
    reviewsCount: 165,
    image: "/mmentor/t3.png",
    certifications: [
      "Certified CrossFit Level 3 Trainer (CCFT)",
      "USAW Advanced Performance Coach",
    ],
    bio: "Marcus fuses Olympic weightlifting and endurance conditioning to build unstoppable stamina.",
    philosophy: "When your body is versatile, your mind is invincible.",
    stats: [
      { label: "Athletes Trained", value: "190+" },
      { label: "Sessions Led", value: "3,400+" },
    ],
    schedule: ["Mon - Thu: 06:00 AM - 12:00 PM", "Sat: 08:00 AM - 01:00 PM"],
    achievements: ["CrossFit Regional Qualifier"],
    socials: {
      instagram: "https://instagram.com",
    },
  },
  {
    id: "Tanveer Ahmed",
    name: "Tanveer Ahmed",
    gender: "male",
    role: "Manager",
    tagline:
      "Sculpt symmetrical muscle while protecting joints and correcting posture.",
    specialty: "Hypertrophy & Posture Rehab",
    specialties: [
      "Aesthetic Bodybuilding",
      "Hypertrophy",
      "Posture Correction",
      "Injury Prevention",
    ],
    experience: "",
    rating: 5.0,
    reviewsCount: 245,
    image: "/mmentor/orn3.jpg",
    certifications: [
      "ACE Master Personal Trainer",
      "EXOS Performance Specialist (XPS)",
      "Corrective Exercise Specialist (CES)",
    ],
    bio: "Founder & Manager of Ahmed Gym & Cafe 29. Tariq specializes in building balanced physiques and injury rehabilitation.",
    philosophy: "Form follows function, and symmetry creates art.",
    stats: [],
    schedule: ["Sun - Thu: 09:00 AM - 03:00 PM", "Sat: 10:00 AM - 02:00 PM"],
    achievements: [
      "Founder & Manager at Ahmed Gym & Cafe 29",
      "10+ Years Zero-Injury Training Record",
    ],
    socials: {
      instagram: "https://instagram.com",
    },
    isOwner: false,
    isManager: true,
  },

  {
    id: "farhana-islam",
    name: "Farhana Islam",
    gender: "female",
    role: "Lead Pilates & Flexibility Coach",
    tagline: "Enhance your core strength, posture, and deep tissue mobility.",
    specialty: "Mobility & Recovery",
    specialties: [
      "Pilates",
      "Yoga & Stretching",
      "Injury Rehabilitation",
      "Mindfulness",
    ],
    experience: "5+ Years",
    rating: 4.8,
    reviewsCount: 142,
    image: "/mmentor/t5.jpg",
    certifications: [
      "Certified Pilates Instructor",
      "Yoga Alliance RYT 200",
      "Corrective Exercise Specialist (CES)",
    ],
    bio: "Farhana brings a calming yet challenging approach to fitness, focusing on core stability, posture correction, and full-body flexibility.",
    philosophy:
      "True strength starts from within. Build your core, align your posture, and the rest will naturally follow.",
    stats: [
      { label: "Clients Guided", value: "200+" },
      { label: "Mobility Increase", value: "45%" },
      { label: "Sessions Led", value: "1,500+" },
    ],
    schedule: [
      "Sun - Wed: 08:00 AM - 01:00 PM",
      "Thu - Sat: 04:00 PM - 08:00 PM",
    ],
    achievements: [
      "Best Yoga & Pilates Mentor 2023",
      "Specialist in Women's Health & Wellness",
    ],
    socials: {
      instagram: "https://instagram.com",
    },
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
    value: "8",
    suffix: " Master Coaches",
    label: "Certified Elite Trainers & Staff",
  },
  { value: "100%", suffix: "", label: "Internationally Certified" },
  { value: "16k+", suffix: "", label: "1-on-1 Sessions Completed" },
  { value: "10+", suffix: " Years", label: "Industry Experience" },
];
