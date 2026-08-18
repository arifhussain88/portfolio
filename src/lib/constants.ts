import type { ExperienceEntry, ProjectCaseStudy, SkillGroup } from "@/lib/types";

export const siteConfig = {
  name: "Arif Hussain",
  title: "Senior Software Engineer",
  location: "Karachi, Pakistan",
  tagline:
    "Building modern, reliable web applications from frontend to backend, with deep expertise in Laravel, JavaScript, APIs, databases, and cloud infrastructure.",
  heroSkills: ["PHP", "Laravel", "Vue.js", "React", "Next.js", "MySQL", "AWS"],
  email: "sayed.arif2001@gmail.com",
  phone: "+92-308-9130079",
  linkedin: "https://linkedin.com/in/sayed-arifhussain",
  github: "https://github.com/arifhussain88",
  resumePath: "/resume/arif-hussain-resume.pdf",
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
};

export const metricHighlight = {
  before: "50s",
  after: "200ms",
  title: "Sales reporting API performance",
  description:
    "Reduced a CRM report load from 50+ seconds to sub-second response through query optimization, strategic indexing, and Redis caching — unlocking real-time dashboards for leadership.",
  context: "Meta Frolic Labs · CRM platform · 1,500+ concurrent users",
};

export const aboutContent = {
  pillars: ["Build", "Improve", "Scale", "Maintain"] as const,
  summary:
    "Senior software engineer experienced in building, improving, and running production web applications and SaaS products. I own the complete application lifecycle — frontend, backend, APIs, databases, integrations, cloud infrastructure, deployment, and production troubleshooting.",
  detail:
    "I translate complex business requirements into practical software, improve existing systems under real production pressure, and solve performance and scalability problems with measurable results.",
};

export const skillGroups: SkillGroup[] = [
  {
    id: "build",
    label: "Build",
    highlight: ["Laravel", "Vue.js", "React", "Next.js"],
    items: [
      "Vue.js",
      "React",
      "Next.js",
      "Livewire",
      "Alpine.js",
      "PHP",
      "Laravel",
      "Node.js",
      "Python",
      "FastAPI",
    ],
  },
  {
    id: "data",
    label: "Data",
    highlight: ["MySQL", "PostgreSQL", "Redis"],
    items: ["MySQL", "PostgreSQL", "Redis", "MongoDB", "Prisma"],
  },
  {
    id: "cloud",
    label: "Cloud",
    highlight: ["AWS", "Docker", "Linux"],
    items: [
      "AWS EC2",
      "AWS RDS",
      "AWS S3",
      "Docker",
      "Linux",
      "Nginx",
      "Apache",
      "Supervisor",
    ],
  },
  {
    id: "engineering",
    label: "Engineering",
    highlight: ["REST APIs", "Performance", "SaaS"],
    items: [
      "REST APIs",
      "Performance tuning",
      "Third-party integrations",
      "Payment gateways",
      "SaaS architecture",
      "Background jobs",
      "Technical leadership",
    ],
  },
];

export const projects: ProjectCaseStudy[] = [
  {
    id: "projectcamp",
    name: "ProjectCamp",
    period: "May 2021 – May 2024",
    featured: true,
    link: "https://projectcamp.io/",
    problem:
      "The organization relied on fragmented tools for production, project management, sales, billing, and client collaboration — creating operational friction and limited visibility across teams.",
    solution:
      "Co-developed an internal enterprise platform from scratch to replace Teamwork, with role-based access and distinct experiences for Production, PMs, Sales, Clients, and Leadership — including dashboards, CRM, invoicing, payments, and reporting.",
    technology: [
      "Laravel",
      "Vue.js",
      "MySQL",
      "Redis",
      "AWS EC2",
      "RDS",
      "S3",
      "Supervisor",
      "Linux",
    ],
    result:
      "Unified the full operational workflow under one platform. Independently owned staging environment setup and a CentOS → AlmaLinux migration, ensuring production parity and long-term stability.",
    images: [
      "/images/projects/projectcamp-0.jpg",
      "/images/projects/projectcamp-1.jpg",
      "/images/projects/projectcamp-2.jpg",
      "/images/projects/projectcamp-3.jpg",
      "/images/projects/projectcamp-4.jpg",
      "/images/projects/projectcamp-5.jpg",
      "/images/projects/projectcamp-6.jpg",
    ],
  },
  {
    id: "zentracker",
    name: "ZenTracker",
    period: "Feb 2026 – Mar 2026",
    featured: true,
    link: "https://github.com/arifhussain88/ZenTracker",
    problem:
      "Needed a high-performance wellness companion that could run natively on mobile while leveraging a Laravel backend — without sacrificing speed or polish.",
    solution:
      "Engineered a multi-user habit and mood tracking platform using NativePHP, with glassmorphism UI, optimistic UI updates, and a personalized analytics engine for weekly wellness trends.",
    technology: [
      "Laravel 12",
      "PHP 8.3",
      "NativePHP",
      "SQLite",
      "Tailwind CSS",
      "Chart.js",
      "Fetch API",
    ],
    result:
      "Delivered a fully functional native-feeling app in a rapid development sprint, with secure per-user data isolation and real-time analytics visualization.",
    images: ["/images/projects/zentracker.jpg"],
  },
  {
    id: "news-app",
    name: "News Aggregation App",
    period: "Jan 2024",
    featured: true,
    link: "https://github.com/arifhussain88/news-app",
    problem:
      "Needed automated ingestion of news from multiple external sources with reliable scheduling and database updates.",
    solution:
      "Built a Laravel application that fetches articles from The New York Times, The Guardian, and NewsAPI, persisting updates through queued background jobs.",
    technology: ["Laravel", "REST APIs", "Queues", "MySQL", "Jobs"],
    result:
      "Automated multi-source news aggregation with clean separation between fetch logic, persistence, and scheduled processing.",
    images: [],
  },
  {
    id: "payments",
    name: "Payment Integrations",
    period: "2019 – 2023",
    featured: true,
    link: null,
    problem:
      "Client billing workflows required reliable payment processing across multiple gateways with secure transaction handling and auditability.",
    solution:
      "Designed and implemented payment flows integrating Stripe (including 3D Secure), Authorize.net, Paytrace, and Elavon — covering invoicing, short payment links, and client payment portals.",
    technology: [
      "Laravel",
      "Stripe",
      "Authorize.net",
      "Paytrace",
      "Elavon",
      "MySQL",
      "MongoDB",
    ],
    result:
      "Delivered production-grade payment experiences with robust error handling, external API communication, and transaction workflow design across multiple client platforms.",
    images: [],
  },
  {
    id: "urban-emerge",
    name: "Urban Emerge",
    period: "Apr 2017 – Aug 2018",
    featured: false,
    link: "https://www.urbanemerge.com/",
    problem: "Needed a digital platform for urban development tracking.",
    solution: "Developed with PNC Solutions Pakistan to deliver robust tracking.",
    technology: ["PHP", "MySQL", "JavaScript"],
    result: "Successfully delivered the project during my tenure at PNC.",
    images: [],
  },
  {
    id: "pulmonary-practice",
    name: "Pulmonary Practice Associates",
    period: "Mar 2017 – Apr 2017",
    featured: false,
    link: "https://pulmonarypracticeassociates.com/",
    problem: "Medical practice required a modern patient portal.",
    solution: "Built a customized web platform for the practice.",
    technology: ["PHP", "MySQL", "HTML5/CSS3"],
    result: "Improved patient engagement and automated scheduling.",
    images: ["/images/projects/PulmonaryPracticeAssociates.png"],
  },
  {
    id: "studypage",
    name: "StudyPage",
    period: "Sep 2014 – Mar 2015",
    featured: false,
    link: "https://studypage.com/",
    problem: "Lack of a unified educational portal for student-teacher interaction.",
    solution: "Created a portal where students can take quizzes, communicate via live chat, audio record features, and interact with a timeline.",
    technology: ["PHP", "MySQL", "JavaScript"],
    result: "Enabled rich interaction and media sharing between students and teachers.",
    images: ["/images/projects/StudyPagepng.png"],
  },
  {
    id: "orcapacific",
    name: "orcapacific.net",
    period: "2015",
    featured: false,
    link: null,
    problem: "Business needed an online presence and client portal.",
    solution: "Developed custom web application.",
    technology: ["PHP", "MySQL"],
    result: "Delivered fully functional business website.",
    images: [],
  },
  {
    id: "thenewagesource",
    name: "thenewagesource.com",
    period: "2014",
    featured: false,
    link: null,
    problem: "Content platform needed a manageable CMS.",
    solution: "Built using WordPress and custom MySQL integrations.",
    technology: ["WordPress", "MySQL"],
    result: "Provided an easy-to-manage content hub.",
    images: [],
  }
];

export const experience: ExperienceEntry[] = [
  {
    company: "Meta Frolic Labs (Pvt.) Ltd.",
    role: "Senior Technology Lead",
    location: "Karachi, Pakistan",
    period: "May 2023 – May 2026",
    highlights: [
      "Owned architecture and technical direction for a full-featured CRM platform serving 1,500+ concurrent users.",
      "Cut a 50+ second report load to sub-second through query optimization, indexing, and Redis caching.",
      "Led technical debt cleanup — 40% reduction through refactoring, standardized error handling, and centralized logging.",
      "Introduced Redis-backed queues, background workers, and production deployment pipeline (Bitbucket CI/CD).",
    ],
  },
  {
    company: "Salsoft Technologies (Pvt) Ltd.",
    role: "Senior Technology Lead",
    location: "Karachi, Pakistan",
    period: "Nov 2022 – May 2023",
    highlights: [
      "Architected backend services for a ground-up SaaS revamp — Laravel APIs, Vue.js, MySQL, Redis, and Supervisor-managed queues.",
      "Built live dashboards and activity-driven notifications for real-time project visibility.",
      "Designed a platform-wide logging system for fast debugging and full auditability.",
    ],
  },
  {
    company: "Salsoft Technologies (Pvt) Ltd.",
    role: "Senior PHP Developer / Team Lead",
    location: "Karachi, Pakistan",
    period: "Jun 2019 – Nov 2022",
    highlights: [
      "Led development of a full-featured billing portal with lead management, invoicing, and payment pages (Laravel, React, MongoDB).",
      "Resolved a company-wide email spam vulnerability affecting all in-house brands.",
      "Developed a Stripe-integrated client payment portal while leading code reviews and mentoring the team.",
    ],
  },
  {
    company: "PNC Solutions Pakistan",
    role: "Senior PHP Developer",
    location: "Karachi, Pakistan",
    period: "Nov 2016 – Jun 2019",
    highlights: [
      "Built and maintained a classified listings platform and admin management portal (CodeIgniter).",
      "Developed a Laravel-based CRM for a timber and hardware supply client — orders, measurements, and invoicing.",
      "Delivered e-commerce and client projects on OpenCart, WordPress, and Shopify.",
    ],
  },
  {
    company: "Salsoft Technologies (Pvt) Ltd.",
    role: "PHP Web Developer",
    location: "Karachi, Pakistan",
    period: "Aug 2013 – Oct 2016",
    highlights: [
      "Built a games website with integrated CRM and social networking features, plus a custom CMS platform.",
      "Developed an online learning portal for teachers and students with video, chat, and discussion forums.",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
