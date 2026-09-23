export const IMAGES = {
  hero: "https://images.pexels.com/photos/38453115/pexels-photo-38453115.jpeg?auto=compress&cs=tinysrgb&w=1920",
  about: "/mmentor/dumbel.png",
  aboutSecondary: "/mmentor/cycle.png",
  transformation:
    "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1920",
  programs: {
    strength:
      "https://images.pexels.com/photos/17210051/pexels-photo-17210051.jpeg?auto=compress&cs=tinysrgb&w=900",
    weightLoss:
      "https://images.pexels.com/photos/6388450/pexels-photo-6388450.jpeg?auto=compress&cs=tinysrgb&w=900",
    muscle:
      "https://images.pexels.com/photos/13885345/pexels-photo-13885345.jpeg?auto=compress&cs=tinysrgb&w=900",
    cross:
      "https://images.pexels.com/photos/7991607/pexels-photo-7991607.jpeg?auto=compress&cs=tinysrgb&w=900",
    personal:
      "https://images.pexels.com/photos/20240046/pexels-photo-20240046.jpeg?auto=compress&cs=tinysrgb&w=900",
    cardio:
      "https://images.pexels.com/photos/6390233/pexels-photo-6390233.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  trainers: ["/mmentor/t1.png", "/mmentor/t2.png", "/mmentor/t3.png"],
  gallery: [
    "/video/1GB.mp4",
    "/video/2GB.mp4",
    "/video/3GB.mp4",
    "https://images.pexels.com/photos/17956264/pexels-photo-17956264.jpeg?auto=compress&cs=tinysrgb&w=800",
    "/mmentor/masin/f1.jpg",
    "/mmentor/masin/ma1.jpg",
    "/video/4GB.mp4",
    "/video/5GB.mp4",
    "/video/6GB.mp4",
  ],
  testimonials: [
    "/mmentor/rw1.jpg",
    "/mmentor/rw2.jpg",
    "/mmentor/rw3.jpg",
    "/mmentor/rw4.jpg",
  ],
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Membership", href: "#membership" },
  { label: "Schedule", href: "#schedule" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: 500, suffix: "+", label: "Members" },
  { value: 15, suffix: "+", label: "Expert Trainers" },
  { value: 20, suffix: "+", label: "Programs" },
  { value: 7, suffix: "", label: "Days Open" },
];

export const FEATURES = [
  {
    icon: "Dumbbell",
    title: "Modern Equipment",
    desc: "State-of-the-art machines and free weights.",
  },
  {
    icon: "Award",
    title: "Expert Trainers",
    desc: "Certified professionals guiding every rep.",
  },
  {
    icon: "Target",
    title: "Personalized Training",
    desc: "Custom plans tailored to your goals.",
  },
  {
    icon: "Sparkles",
    title: "Clean Environment",
    desc: "Spotless, hygienic, and well-maintained.",
  },
];

export const PROGRAMS = [
  {
    name: "Strength Training",
    desc: "Build raw power with progressive overload.",
    image: IMAGES.programs.strength,
  },
  {
    name: "Weight Loss",
    desc: "Burn fat efficiently with science-backed routines.",
    image: IMAGES.programs.weightLoss,
  },
  {
    name: "Muscle Building",
    desc: "Hypertrophy-focused training for mass.",
    image: IMAGES.programs.muscle,
  },
  {
    name: "Cross Training",
    desc: "Functional fitness for full-body power.",
    image: IMAGES.programs.cross,
  },
  {
    name: "Personal Training",
    desc: "One-on-one coaching for faster results.",
    image: IMAGES.programs.personal,
  },
  {
    name: "Cardio & Conditioning",
    desc: "Improve endurance and heart health.",
    image: IMAGES.programs.cardio,
  },
];

export const TRAINERS = [
  {
    name: "Alex Rahman",
    role: "Head Trainer",
    spec: "Strength & Conditioning",
    image: IMAGES.trainers[0],
  },
  {
    name: "Sara Khan",
    role: "Yoga Director",
    spec: "Mobility & Recovery",
    image: IMAGES.trainers[1],
  },
  {
    name: "Marcus Lee",
    role: "CrossFit Coach",
    spec: "Functional Fitness",
    image: IMAGES.trainers[2],
  },
  {
    name: "Elena Voss",
    role: "Personal Trainer",
    spec: "Weight Loss & Toning",
    image: IMAGES.trainers[3],
  },
];

export const PLANS = [
  {
    name: "BASIC",
    price: 1500,
    features: [
      "Access to gym floor",
      "Locker room access",
      "2 group classes / week",
      "Fitness assessment",
    ],
  },
  {
    name: "PREMIUM",
    price: 3000,
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "1 personal training session / month",
      "Nutrition plan",
      "Sauna & steam room",
    ],
    recommended: true,
  },
  {
    name: "ELITE",
    price: 5000,
    features: [
      "Everything in Premium",
      "4 personal training sessions / month",
      "Priority booking",
      "Recovery massage",
      "Guest passes",
    ],
  },
];

export const SCHEDULE = [
  {
    day: "Saturday",
    classes: [
      "Strength",
      "Cardio",
      "CrossFit",
      "Yoga",
      "HIIT",
      "Personal Training",
    ],
  },
  { day: "Sunday", classes: ["Yoga", "Cardio", "—", "Strength", "—", "HIIT"] },
  {
    day: "Monday",
    classes: [
      "HIIT",
      "Strength",
      "Cardio",
      "Personal Training",
      "CrossFit",
      "Yoga",
    ],
  },
  {
    day: "Tuesday",
    classes: [
      "CrossFit",
      "Yoga",
      "HIIT",
      "Strength",
      "Cardio",
      "Personal Training",
    ],
  },
  {
    day: "Wednesday",
    classes: [
      "Strength",
      "Personal Training",
      "CrossFit",
      "Yoga",
      "HIIT",
      "Cardio",
    ],
  },
  {
    day: "Thursday",
    classes: [
      "Cardio",
      "HIIT",
      "Yoga",
      "CrossFit",
      "Personal Training",
      "Strength",
    ],
  },
  {
    day: "Friday",
    classes: [
      "Yoga",
      "CrossFit",
      "Personal Training",
      "HIIT",
      "Strength",
      "Cardio",
    ],
  },
];

export const SCHEDULE_TIMES = [
  "06:00",
  "08:00",
  "10:00",
  "12:00",
  "17:00",
  "19:00",
];

export const WHY_CHOOSE_US = [
  { icon: "Dumbbell", title: "Modern Equipment" },
  { icon: "BadgeCheck", title: "Certified Trainers" },
  { icon: "CalendarClock", title: "Flexible Schedule" },
  { icon: "UserRound", title: "Personal Training" },
  { icon: "Sparkles", title: "Clean Facilities" },
  { icon: "Users", title: "Friendly Community" },
];

export const TESTIMONIALS = [
  {
    name: "James Carter",
    role: "Member — 2 years",
    rating: 5,
    text: "Joining this gym completely changed my training routine. The trainers are extremely supportive and professional.",
    image: IMAGES.testimonials[1],
  },
  {
    name: "Priya Sharma",
    role: "Member — 1 year",
    rating: 5,
    text: "The atmosphere is unmatched. I lost 15kg in 6 months with their personalized program. Highly recommended.",
    image: IMAGES.testimonials[0],
  },
  {
    name: "David Okoro",
    role: "Member — 3 years",
    rating: 5,
    text: "Best gym I've ever been to. Premium equipment, clean facilities, and trainers who genuinely care about your progress.",
    image: IMAGES.testimonials[2],
  },
  {
    name: "Lina Hoffmann",
    role: "Member — 8 months",
    rating: 5,
    text: "From day one I felt welcomed. The group classes are intense and fun. This place pushes you to be better.",
    image: IMAGES.testimonials[3],
  },
];
