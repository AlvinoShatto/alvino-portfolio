export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  contribution: string[];
  features: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
  githubUrl: string;
  liveUrl?: string;
  videoUrl?: string;
  featured: boolean;
  accentColor: string;
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  type: string;
  points: string[];
  technologies: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  score?: string;
  year: string;
  credentialUrl?: string;
}

export interface Hackathon {
  title: string;
  event: string;
  duration?: string;
  highlight: string;
  year: string;
}

export const PERSONAL_DATA = {
  name: "ALVINO P SHATTO",
  preferredName: "Alvino",
  monogram: "AS",
  title: "Full-Stack Developer & AI Systems Engineer",
  tagline: "ENGINEERING THE DIGITAL EXPERIENCE",
  shortBio:
    "Third-year Computer Science & Engineering student at Christ College of Engineering. Building high-performance full-stack architectures, applied computer vision, and real-world AI pipelines with backend precision.",
  aboutText: [
    "I engineer software at the intersection of robust backend architecture and applied intelligence. From real-time computer vision pipelines analyzing rehabilitation biomechanics to enterprise microservices secured by role-based access control, I focus on building dependable digital experiences.",
    "My hands-on experience spans industry software engineering internships at WHITEMATRIX Software Solutions and Cognifyz Technologies, as well as 24-to-36-hour national hackathons where high-velocity execution and clean architectural decisions are paramount.",
    "Proficient in Python, Java, C++, and React, I treat software development as an exact craft: writing clean, modular code backed by solid database design, strict API contracts, and performant user interfaces."
  ],
  status: "OPEN FOR OPPORTUNITIES & COLLABORATION",
  location: "Irinjalakuda, Thrissur, Kerala, India",
  email: "alvinoshatto14@gmail.com",
  phone: "+91 9562141466",
  links: {
    github: "https://github.com/AlvinoShatto",
    linkedin: "https://www.linkedin.com/in/alvinoshatto",
    leetcode: "https://leetcode.com/u/Alvino14/",
    resume: "/assets/Alvino_P_Shatto_Resume.pdf"
  },
  metrics: [
    { label: "ACADEMIC CGPA", value: "8.6/10" },
    { label: "CORE ARCHITECTURES", value: "6+" },
    { label: "COMPLETED INTERNSHIPS", value: "2" },
    { label: "JAVA NPTEL SCORE", value: "88%" }
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "rehabsense-ai",
    number: "01",
    title: "RehabSense AI",
    subtitle: "AI-Powered Physical Rehabilitation & Pose Biomechanics Engine",
    category: "Computer Vision & Healthcare AI",
    description:
      "An intelligent physical therapy platform integrating MediaPipe pose estimation, voice interaction, and real-time exercise biomechanics tracking. Built to provide patients with immediate feedback on rehabilitation routines and automated progress logging.",
    contribution: [
      "Engineered real-time computer vision landmark extraction pipeline using MediaPipe and OpenCV.",
      "Integrated FastAPI asynchronous backend with MongoDB for exercise telemetry and user session state.",
      "Developed voice interaction and synthesized audio prompts for hands-free patient guidance.",
      "Deployed and optimized full-stack cloud architecture across Render as part of a 4-member team."
    ],
    features: [
      "Real-time joint angle calculation and postural feedback",
      "Interactive voice guidance for hands-free therapy sessions",
      "Dynamic session telemetry logging and recovery charts",
      "Multi-exercise rehabilitation library with compliance monitoring"
    ],
    techStack: ["React", "Python", "FastAPI", "MediaPipe", "MongoDB", "OpenCV", "Render"],
    metrics: [
      { label: "Latency", value: "<45ms" },
      { label: "Landmarks", value: "33 Points" },
      { label: "Stack", value: "FastAPI + React" }
    ],
    githubUrl: "https://github.com/AnandhaKrishnaR/RehabSense-AI.git",
    liveUrl: "https://rehabsense-ai-1.onrender.com/",
    featured: true,
    accentColor: "#D71927"
  },
  {
    id: "skillforge-ai",
    number: "02",
    title: "SkillForge AI",
    subtitle: "Reasoning Evaluation & Adaptive Learning Recommendation Engine",
    category: "EdTech & Applied AI",
    description:
      "An AI-powered skill development platform designed to evaluate multi-step analytical reasoning, track competencies over time, and generate personalized, dynamic learning curriculums.",
    contribution: [
      "Architected dynamic assessment logic and competency evaluation algorithms.",
      "Built high-throughput REST APIs using FastAPI and Python for test evaluation.",
      "Designed an interactive student dashboard in React with modular skill progression visualizations."
    ],
    features: [
      "Multi-tier reasoning and problem-solving evaluation",
      "Real-time algorithmic skill-gap diagnosis",
      "Dynamic curriculum recommendations powered by performance analytics",
      "Automated progress metrics and benchmark tracking"
    ],
    techStack: ["React", "FastAPI", "Python", "Tailwind CSS", "REST APIs"],
    metrics: [
      { label: "Engine", value: "Adaptive Evaluation" },
      { label: "Backend", value: "FastAPI" },
      { label: "Architecture", value: "Microservices" }
    ],
    githubUrl: "https://github.com/AlvinoShatto/SkilllForgeAI.git",
    featured: true,
    accentColor: "#D71927"
  },
  {
    id: "white-matrix",
    number: "03",
    title: "White Matrix",
    subtitle: "Secure Online Voting Platform with OAuth & Role-Based Access",
    category: "Security & Full-Stack Web",
    description:
      "A zero-trust digital election platform engineered to guarantee vote integrity, tamper resistance, and strictly audited voter credentialing through Google/LinkedIn OAuth and JWT authentication.",
    contribution: [
      "Implemented federated authentication with Google & LinkedIn OAuth 2.0 alongside strict JWT validation.",
      "Structured role-based access control (RBAC) separating voters, election auditors, and administrators.",
      "Created transactional MySQL schemas with integrity constraints preventing double-casting.",
      "Designed a responsive, cyber-minimalist voting terminal in React."
    ],
    features: [
      "Multi-provider OAuth (Google & LinkedIn) + JWT sessions",
      "Cryptographically enforced single-vote execution",
      "Real-time election tallying with live audit logs",
      "Strict role-based administration dashboard"
    ],
    techStack: ["React", "Node.js", "Express.js", "MySQL", "OAuth 2.0", "JWT", "Vercel"],
    metrics: [
      { label: "Security", value: "OAuth + JWT" },
      { label: "Integrity", value: "Zero-Trust" },
      { label: "Platform", value: "Vercel Live" }
    ],
    githubUrl: "https://github.com/AlvinoShatto",
    liveUrl: "https://white-matrix-4e6d.vercel.app/",
    featured: true,
    accentColor: "#D71927"
  },
  {
    id: "smart-placement-portal",
    number: "04",
    title: "Smart College Placement Portal",
    subtitle: "Enterprise Campus Recruitment & Student Workflow System",
    category: "Enterprise Full-Stack",
    description:
      "A centralized campus placement management ecosystem built to streamline recruitment drives, resume vetting, student eligibility filtering, and corporate application lifecycle tracking.",
    contribution: [
      "Developed robust backend services with Django REST Framework and relational MySQL schemas.",
      "Created automated eligibility filtering engines matching student CGPA/backlog criteria against company requisitions.",
      "Built role-segregated UI views for Students, Placement Coordinators, and Company Recruiters."
    ],
    features: [
      "Automated job eligibility filtering based on academic criteria",
      "End-to-end applicant tracking pipeline from drive notification to offer letter",
      "Administrative analytics on placement percentages and recruiter metrics",
      "Secure resume attachment and document verification workflows"
    ],
    techStack: ["React", "Django REST Framework", "Python", "MySQL", "CSS3"],
    metrics: [
      { label: "Framework", value: "Django REST" },
      { label: "Database", value: "MySQL Relational" },
      { label: "Workflows", value: "Multi-Role" }
    ],
    githubUrl: "https://github.com/AlvinoShatto/placement_portal.git",
    featured: false,
    accentColor: "#D71927"
  },
  {
    id: "mindguard-ai",
    number: "05",
    title: "MindGuard AI",
    subtitle: "Student Mental Wellness & Automated Risk Assessment Platform",
    category: "AI & Healthcare",
    description:
      "An AI-integrated mental wellness platform providing student self-assessments, sentiment analysis check-ins, automated emotional distress risk profiling, and guided wellness interventions.",
    contribution: [
      "Engineered full-stack architecture using Next.js, TypeScript, and a Flask Python backend.",
      "Implemented natural language sentiment and symptom scoring mechanisms for automated risk triage.",
      "Created interactive student check-in modules with confidential self-help recommendations."
    ],
    features: [
      "Automated risk tier classification for proactive intervention",
      "Confidential sentiment journal and mood streak logging",
      "Responsive next-gen interface built with Next.js and TypeScript",
      "Curated guided breathing exercises and professional escalation paths"
    ],
    techStack: ["Next.js", "TypeScript", "Flask", "Python", "Tailwind CSS"],
    metrics: [
      { label: "Frontend", value: "Next.js + TS" },
      { label: "Backend", value: "Flask" },
      { label: "Demo", value: "YouTube Video" }
    ],
    githubUrl: "https://github.com/AlvinoShatto/MindGuardAI.git",
    videoUrl: "https://youtu.be/6w7pLIq3O7c",
    featured: false,
    accentColor: "#D71927"
  },
  {
    id: "car-rental-service",
    number: "06",
    title: "Car Rental Enterprise Service",
    subtitle: "High-Availability Layered MVC Fleet Management Application",
    category: "Enterprise Java",
    description:
      "A production-grade fleet booking and vehicle rental management application engineered using Java Spring Boot, Hibernate ORM, and Spring Security under a disciplined multi-layered MVC architecture.",
    contribution: [
      "Architected clean layered MVC structure: Controllers, Service Layer, Repositories, and Entities.",
      "Integrated Spring Security for user authentication and protected booking workflows.",
      "Utilized Hibernate / JPA for efficient relational data persistence and concurrency-safe vehicle reservations."
    ],
    features: [
      "Layered enterprise MVC architecture with Spring Boot",
      "Dynamic vehicle fleet inventory and reservation scheduling",
      "Automated rental tariff calculation with duration discounts",
      "Relational MySQL integration with transactional ACID safety"
    ],
    techStack: ["Java", "Spring Boot", "Spring Security", "Hibernate", "MySQL", "Thymeleaf"],
    metrics: [
      { label: "Language", value: "Java 17" },
      { label: "Framework", value: "Spring Boot" },
      { label: "Pattern", value: "Layered MVC" }
    ],
    githubUrl: "https://github.com/AlvinoShatto/Car-Rental-Service.git",
    featured: false,
    accentColor: "#D71927"
  }
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    company: "WHITEMATRIX Software Solutions",
    location: "Infopark Koratty, Kerala",
    role: "Junior Software Engineering Intern",
    period: "March 2026 – Completed",
    type: "Completed",
    points: [
      "Contributed to software development and engineering support for client and internal production projects.",
      "Collaborated with senior engineers on REST API integration, database schema optimization, and scalable web component engineering.",
      "Participated in agile sprints, code reviews, and performance benchmarking for client deliverables."
    ],
    technologies: ["React", "FastAPI", "Node.js", "MySQL", "Git", "REST APIs"]
  },
  {
    company: "Cognifyz Technologies",
    location: "Remote",
    role: "Full Stack Development Intern",
    period: "June 2025 – July 2025",
    type: "Completed",
    points: [
      "Completed intensive hands-on assignments across the full web development lifecycle including responsive UI and backend routing.",
      "Participated in a comprehensive two-week immersion program covering cloud computing fundamentals, containerization, and modern full-stack workflows.",
      "Delivered modular web components adhering to modern frontend standards and clean code conventions."
    ],
    technologies: ["React", "JavaScript", "Python", "Cloud Fundamentals", "HTML5/CSS3"]
  }
];

export const SKILLS_CATEGORIES = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: ["Python", "C", "C++", "Java", "SQL"]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend Development",
    icon: "Server",
    skills: ["FastAPI", "Django REST Framework", "Django", "Node.js", "Express.js", "Spring Boot", "Flask"]
  },
  {
    category: "AI & Computer Vision",
    icon: "Cpu",
    skills: ["MediaPipe", "Hugging Face", "OpenCV", "Generative AI", "Agentic AI Concepts"]
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    skills: ["MySQL", "MongoDB", "Relational Modeling", "Hibernate / JPA"]
  },
  {
    category: "Core Concepts & Security",
    icon: "ShieldCheck",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "RESTful API Design",
      "OAuth 2.0 & JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "Layered MVC Architecture"
    ]
  },
  {
    category: "DevOps & Developer Tools",
    icon: "Terminal",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Vercel", "Render", "Postman"]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: "Programming in Java",
    issuer: "NPTEL (12-Week Intensive)",
    score: "88% — Elite Tier",
    year: "2025"
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    score: "72% — Elite Tier",
    year: "2025"
  },
  {
    title: "Digital 101",
    issuer: "NASSCOM / IT-ITeS SSC (NSQF Level 5)",
    score: "70% — Gold Category",
    year: "2026"
  },
  {
    title: "Developing Generative AI Applications with Python",
    issuer: "IBM / edX",
    year: "2025"
  },
  {
    title: "Java Spring Boot Training",
    issuer: "Neu iPlus Education Pvt. Ltd.",
    year: "2025"
  }
];

export const HACKATHONS_DATA: Hackathon[] = [
  {
    title: "Realm Hack '26",
    event: "Team Hackops — 24-Hour National Hackathon",
    duration: "24 Hours",
    highlight: "Grand Finale Participant",
    year: "2026"
  },
  {
    title: "Google Cloud Agentic AI Day",
    event: "Google Cloud Ecosystem",
    highlight: "Recognized for Innovative Solution Submission",
    year: "2026"
  },
  {
    title: "HACKFIT 4.0",
    event: "Federal Institute of Science and Technology (FISAT)",
    duration: "36 Hours",
    highlight: "National-Level Participant",
    year: "2025"
  },
  {
    title: "CODE KALARI",
    event: "IIIT Kottayam",
    duration: "24 Hours",
    highlight: "National Hackathon Competitor",
    year: "2025"
  },
  {
    title: "Techashy 2.0",
    event: "IIIT Kottayam",
    highlight: "Technical Contestant",
    year: "2025"
  },
  {
    title: "Competitive Technical Challenges",
    event: "Code Fix, Code Relay, Debugging, SustainX, Tech4Good Hackathon & Videgenesis",
    highlight: "Active Participant & Finalist",
    year: "2024–2026"
  }
];

export const WORKSHOPS_DATA = [
  {
    title: "UST GenCyS 2025 — Generative AI and Cybersecurity",
    organization: "UST Global",
    year: "2025"
  },
  {
    title: "CyberDojo — Cybersecurity Masterclass",
    organization: "CyberDojo Security",
    year: "2025"
  },
  {
    title: "Current Cyber Security Aspects in the AI World",
    organization: "IEEE Student Branch",
    year: "2026"
  },
  {
    title: "Above The Clouds — Cloud Computing Summit",
    organization: "IEEE Computer Society Kerala Chapter",
    year: "2025"
  },
  {
    title: "AI in Energy Sector",
    organization: "IEEE PES Student Branch",
    year: "2024"
  }
];

export const EDUCATION_DATA = [
  {
    degree: "Bachelor of Technology — Computer Science and Engineering",
    institution: "Christ College of Engineering, Irinjalakuda",
    period: "2024 – 2028",
    grade: "CGPA: 8.6 / 10",
    status: "Current (3rd Year)",
    description: "Coursework in Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Theory of Computation."
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "Don Bosco Higher Secondary School",
    period: "2022 – 2024",
    grade: "96%",
    status: "Completed",
    description: "Focus on Mathematics, Physics, Chemistry, and Computer Science."
  },
  {
    degree: "Secondary School Examination (Class X)",
    institution: "Don Bosco High School",
    period: "2021 – 2022",
    grade: "92%",
    status: "Completed",
    description: "Strong academic foundation in science, analytical thinking, and mathematics."
  }
];

export const LANGUAGES_DATA = ["English (Professional)", "Malayalam (Native)", "Hindi (Working)"];
