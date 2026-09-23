export const IMAGES = {
  hero: "https://images.pexels.com/photos/38453115/pexels-photo-38453115.jpeg?auto=compress&cs=tinysrgb&w=1920",
  about: "https://images.pexels.com/photos/4753885/pexels-photo-4753885.jpeg?auto=compress&cs=tinysrgb&w=1200",
  aboutSecondary: "https://images.pexels.com/photos/6389516/pexels-photo-6389516.jpeg?auto=compress&cs=tinysrgb&w=800",
  transformation: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1920",
  programs: {
    strength: "https://images.pexels.com/photos/17210051/pexels-photo-17210051.jpeg?auto=compress&cs=tinysrgb&w=900",
    weightLoss: "https://images.pexels.com/photos/6388450/pexels-photo-6388450.jpeg?auto=compress&cs=tinysrgb&w=900",
    muscle: "https://images.pexels.com/photos/13885345/pexels-photo-13885345.jpeg?auto=compress&cs=tinysrgb&w=900",
    cross: "https://images.pexels.com/photos/7991607/pexels-photo-7991607.jpeg?auto=compress&cs=tinysrgb&w=900",
    personal: "https://images.pexels.com/photos/20240046/pexels-photo-20240046.jpeg?auto=compress&cs=tinysrgb&w=900",
    cardio: "https://images.pexels.com/photos/6390233/pexels-photo-6390233.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  trainers: [
    "https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&w=700",
    "https://images.pexels.com/photos/6739935/pexels-photo-6739935.jpeg?auto=compress&cs=tinysrgb&w=700",
    "https://images.pexels.com/photos/21633393/pexels-photo-21633393.jpeg?auto=compress&cs=tinysrgb&w=700",
    "https://images.pexels.com/photos/10551491/pexels-photo-10551491.jpeg?auto=compress&cs=tinysrgb&w=700",
  ],
  gallery: [
    "https://images.pexels.com/photos/6390242/pexels-photo-6390242.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1552251/pexels-photo-1552251.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4761785/pexels-photo-4761785.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/17956264/pexels-photo-17956264.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4720796/pexels-photo-4720796.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/6389893/pexels-photo-6389893.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/39219683/pexels-photo-39219683.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3931001/pexels-photo-3931001.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/7690459/pexels-photo-7690459.jpeg?auto=compress&cs=tinysrgb&w=800",
  ],
  testimonials: [
    "https://images.pexels.com/photos/6739935/pexels-photo-6739935.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/2105493/pexels-photo-2105493.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/7203532/pexels-photo-7203532.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/4720784/pexels-photo-4720784.jpeg?auto=compress&cs=tinysrgb&w=200",
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
  { icon: "Dumbbell", title: "Modern Equipment", desc: "State-of-the-art machines and free weights." },
  { icon: "Award", title: "Expert Trainers", desc: "Certified professionals guiding every rep." },
  { icon: "Target", title: "Personalized Training", desc: "Custom plans tailored to your goals." },
  { icon: "Sparkles", title: "Clean Environment", desc: "Spotless, hygienic, and well-maintained." },
];

export const PROGRAMS = [
  { name: "Strength Training", desc: "Build raw power with progressive overload.", image: IMAGES.programs.strength },
  { name: "Weight Loss", desc: "Burn fat efficiently with science-backed routines.", image: IMAGES.programs.weightLoss },
  { name: "Muscle Building", desc: "Hypertrophy-focused training for mass.", image: IMAGES.programs.muscle },
  { name: "Cross Training", desc: "Functional fitness for full-body power.", image: IMAGES.programs.cross },
  { name: "Personal Training", desc: "One-on-one coaching for faster results.", image: IMAGES.programs.personal },
  { name: "Cardio & Conditioning", desc: "Improve endurance and heart health.", image: IMAGES.programs.cardio },
];

export const TRAINERS = [
  { name: "Alex Rahman", role: "Head Trainer", spec: "Strength & Conditioning", image: IMAGES.trainers[0] },
  { name: "Sara Khan", role: "Yoga Director", spec: "Mobility & Recovery", image: IMAGES.trainers[1] },
  { name: "Marcus Lee", role: "CrossFit Coach", spec: "Functional Fitness", image: IMAGES.trainers[2] },
  { name: "Elena Voss", role: "Personal Trainer", spec: "Weight Loss & Toning", image: IMAGES.trainers[3] },
];

export const PLANS = [
  {
    name: "BASIC",
    price: 29,
    features: ["Access to gym floor", "Locker room access", "2 group classes / week", "Fitness assessment"],
  },
  {
    name: "PREMIUM",
    price: 59,
    features: ["Everything in Basic", "Unlimited group classes", "1 personal training session / month", "Nutrition plan", "Sauna & steam room"],
    recommended: true,
  },
  {
    name: "ELITE",
    price: 99,
    features: ["Everything in Premium", "4 personal training sessions / month", "Priority booking", "Recovery massage", "Guest passes"],
  },
];

export const SCHEDULE = [
  { day: "Saturday", classes: ["Strength", "Cardio", "CrossFit", "Yoga", "HIIT", "Personal Training"] },
  { day: "Sunday", classes: ["Yoga", "Cardio", "—", "Strength", "—", "HIIT"] },
  { day: "Monday", classes: ["HIIT", "Strength", "Cardio", "Personal Training", "CrossFit", "Yoga"] },
  { day: "Tuesday", classes: ["CrossFit", "Yoga", "HIIT", "Strength", "Cardio", "Personal Training"] },
  { day: "Wednesday", classes: ["Strength", "Personal Training", "CrossFit", "Yoga", "HIIT", "Cardio"] },
  { day: "Thursday", classes: ["Cardio", "HIIT", "Yoga", "CrossFit", "Personal Training", "Strength"] },
  { day: "Friday", classes: ["Yoga", "CrossFit", "Personal Training", "HIIT", "Strength", "Cardio"] },
];

export const SCHEDULE_TIMES = ["06:00", "08:00", "10:00", "12:00", "17:00", "19:00"];

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
    name: "David Okoro",
    role: "Member — 3 years",
    rating: 5,
    text: "Best gym I've ever been to. Premium equipment, clean facilities, and trainers who genuinely care about your progress. Every session feels purposeful.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Priya Sharma",
    role: "Member — 1 year",
    rating: 5,
    text: "The atmosphere is unmatched. I lost 15 kg in six months with their personalized program. The nutrition guidance from Cafe 29 was the game‑changer.",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "James Carter",
    role: "Member — 2 years",
    rating: 5,
    text: "Joining this gym completely changed my training routine. The coaches push you hard but always keep your safety and form in check. Couldn't ask for more.",
    image: "https://images.pexels.com/photos/2105493/pexels-photo-2105493.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Lina Hoffmann",
    role: "Member — 8 months",
    rating: 5,
    text: "From day one I felt welcomed. The group classes are intense and fun — this place pushes you to be better every single week.",
    image: "https://images.pexels.com/photos/4720784/pexels-photo-4720784.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Marcus Chen",
    role: "Member — 4 years",
    rating: 5,
    text: "I've trained at gyms across three countries and nothing comes close. The scientific approach to programming here is on another level entirely.",
    image: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Aisha Rahman",
    role: "Member — 1.5 years",
    rating: 5,
    text: "As a woman, I was nervous about joining a strength gym. The female coaches made me feel completely at ease and now I deadlift more than most guys!",
    image: "https://images.pexels.com/photos/2256365/pexels-photo-2256365.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];
