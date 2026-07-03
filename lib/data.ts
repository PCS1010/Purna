export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const TYPING_ROLES = [
  "Full Stack Developer",
  "AI Developer",
  "Next.js Developer",
  "Python Developer",
  "UI/UX Designer",
];

export const STATS = [
  { value: 5, suffix: "+", label: "Projects Built" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 1000, suffix: "+", label: "Hours of Coding" },
  { value: 3, suffix: "+", label: "Hackathons" },
];

export const SKILLS = {
  Frontend: [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 92 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 82 },
    { name: "React", level: 88 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
  ],
  Backend: [
    { name: "Python", level: 88 },
    { name: "Flask", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "REST APIs", level: 85 },
  ],
  Database: [
    { name: "MySQL", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "Supabase", level: 82 },
  ],
  "AI & ML": [
    { name: "Machine Learning", level: 78 },
    { name: "Computer Vision", level: 75 },
    { name: "Face Recognition", level: 72 },
    { name: "TensorFlow", level: 70 },
    { name: "OpenCV", level: 75 },
  ],
  GIS: [
    { name: "Leaflet", level: 85 },
    { name: "OpenStreetMap", level: 80 },
    { name: "GeoJSON", level: 78 },
    { name: "Interactive Maps", level: 82 },
  ],
  Cloud: [
    { name: "Git", level: 88 },
    { name: "GitHub", level: 90 },
    { name: "Vercel", level: 85 },
    { name: "Firebase", level: 72 },
  ],
  Design: [
    { name: "Figma", level: 80 },
    { name: "Photoshop", level: 70 },
    { name: "Canva", level: 85 },
  ],
};

export type ProjectCategory = "All" | "AI" | "Web" | "GIS" | "Agri";

export const PROJECTS = [
  {
    id: 1,
    title: "AI Urban Utility Intelligence Platform",
    description:
      "AI-powered smart city dashboard with GIS visualization, infrastructure analytics, forecasting engine, verification workflow, and intelligent AI recommendations for urban planning decisions.",
    tech: ["Next.js", "React", "Leaflet", "Supabase", "AI", "GIS"],
    category: ["AI", "GIS", "Web"] as ProjectCategory[],
    gradient: "from-blue-600 to-cyan-400",
    icon: "🏙️",
    featured: true,
  },
  {
    id: 2,
    title: "Kesava Musicals",
    description:
      "Modern music instrument e-commerce website with a responsive UI, rich product catalog, premium glassmorphism design, and seamless Vercel deployment.",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    category: ["Web"] as ProjectCategory[],
    gradient: "from-purple-600 to-pink-400",
    icon: "🎸",
    featured: true,
    link: "https://kesavamusicals.vercel.app",
  },
  {
    id: 3,
    title: "Smart Face Recognition Attendance",
    description:
      "Automated attendance system using real-time face recognition, geofencing, admin dashboard, Excel report generation, and SMS alerts for institutions.",
    tech: ["Python", "Flask", "OpenCV", "MySQL"],
    category: ["AI"] as ProjectCategory[],
    gradient: "from-green-500 to-emerald-400",
    icon: "👤",
    features: [
      "Face Recognition",
      "Auto Attendance",
      "Admin Dashboard",
      "Excel Reports",
      "SMS Alerts",
      "Geofencing",
    ],
  },
  {
    id: 4,
    title: "Granite Quarry Digital Management",
    description:
      "Comprehensive digital management system for granite quarries with permit management, vehicle tracking, weighbridge integration, and district-level analytics dashboard.",
    tech: ["Next.js", "Supabase", "Python", "GIS"],
    category: ["Web", "GIS"] as ProjectCategory[],
    gradient: "from-orange-500 to-red-400",
    icon: "⛏️",
    features: [
      "Permit Management",
      "Vehicle Tracking",
      "Weighbridge Integration",
      "District Dashboard",
      "Analytics",
    ],
  },
  {
    id: 5,
    title: "Mulberry AI Disease Detection",
    description:
      "AI-powered leaf disease classification system for mulberry cultivation with computer vision, farmer-friendly dashboard, and intelligent crop health recommendations.",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
    category: ["AI", "Agri"] as ProjectCategory[],
    gradient: "from-teal-500 to-cyan-400",
    icon: "🌿",
    features: [
      "Leaf Detection",
      "Disease Classification",
      "Farmer Dashboard",
      "AI Recommendations",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "2023 – Present",
    description: [
      "Developed responsive web applications using Next.js, React, and Tailwind CSS",
      "Built AI-powered dashboards integrating machine learning models with modern frontends",
      "Created government solution prototypes for smart city and quarry management domains",
      "Designed end-to-end UI/UX systems with Figma and implemented pixel-perfect layouts",
      "Participated in multiple national-level hackathons including Smart India Hackathon",
    ],
  },
  {
    role: "B.Tech Computer Science Engineering",
    company: "College Name Coming Soon",
    period: "2026 – Present",
    description: [
      "Second Year student specializing in AI, web technologies, and GIS systems",
      "Building scalable applications for government, agriculture, and enterprise sectors",
      "Active contributor to open-source projects and hackathon initiatives",
    ],
  },
  {
    role: "Diploma in Computer Engineering",
    company: "M.B.T.S Govt Polytechnic, Guntur",
    period: "2023 – 2026",
    description: [
      "Completed Diploma under State Board of Technical Education and Training",
      "Gained core knowledge in programming, database systems, and networking fundamentals",
    ],
  },
];

export const CERTIFICATIONS = [
  { name: "Python Programming", issuer: "Coursera / NPTEL", icon: "🐍", color: "from-yellow-500 to-orange-400" },
  { name: "React Development", issuer: "Meta / Udemy", icon: "⚛️", color: "from-cyan-500 to-blue-400" },
  { name: "Next.js Developer", issuer: "Vercel / Udemy", icon: "▲", color: "from-gray-300 to-gray-100" },
  { name: "SQL & Databases", issuer: "MySQL / PostgreSQL", icon: "🗄️", color: "from-blue-500 to-indigo-400" },
  { name: "Machine Learning", issuer: "Coursera / TF", icon: "🤖", color: "from-green-500 to-teal-400" },
  { name: "UI/UX Design", issuer: "Figma Certification", icon: "🎨", color: "from-purple-500 to-pink-400" },
];

export const ACHIEVEMENTS = [
  {
    icon: "🤖",
    title: "Multiple AI Proof of Concepts",
    description: "Developed and demonstrated functional AI prototypes for real-world government and industry problems.",
  },
  {
    icon: "🏛️",
    title: "Government Dashboard Development",
    description: "Built production-grade dashboards for Granite Quarry Management and Urban Utility Intelligence for AP government.",
  },
  {
    icon: "🇮🇳",
    title: "Smart India Hackathon Participant",
    description: "Participated in SIH with innovative solutions addressing national-level challenges in agriculture and smart cities.",
  },
  {
    icon: "🗺️",
    title: "AI & GIS Integrated Solutions",
    description: "Pioneered integration of AI recommendations with interactive GIS maps for smart urban planning platforms.",
  },
  {
    icon: "⚡",
    title: "Modern Full Stack Applications",
    description: "Shipped production-ready full stack apps using Next.js 14, Supabase, and edge-deployed on Vercel.",
  },
  {
    icon: "🐙",
    title: "GitHub Contributions",
    description: "Consistent open-source contributions and personal project repositories showcasing a diverse technology portfolio.",
  },
];

export const CONTACT = {
  email: "chpurna506@gmail.com",
  github: "https://github.com/purnachandrasekhar",
  linkedin: "https://www.linkedin.com/in/ch-purna-chandra-sekhar-9633ab2a4",
  portfolio: "https://purnachandrasekhar.dev",
};
