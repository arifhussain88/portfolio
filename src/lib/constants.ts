import type {
  ExperienceEntry,
  FeaturedProject,
  FlagshipProject,
  Project,
  SideProject,
  Stat,
  StackGroup,
} from "@/lib/types";
import { getAssetPath } from "@/lib/utils";

export const siteConfig = {
  name: "Arif Hussain",
  fullName: "Sayed Arif Hussain",
  title: "Senior full-stack engineer",
  location: "Karachi, Pakistan",
  availability: "Open to senior roles",
  email: "sayed.arif2001@gmail.com",
  phone: "+92-308-9130079",
  linkedin: "https://linkedin.com/in/sayed-arifhussain",
  github: "https://github.com/arifhussain88",
  resumePath: getAssetPath("/resume/arif-hussain-resume.pdf?v=2026-11b"),
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "moeapqdo",
};

export const heroStats: Stat[] = [
  { value: "2", label: "Client companies running ProjectCamp.io" },
  { value: "3–4", label: "Developers led and mentored" },
  { value: "6", label: "Payment gateways integrated" },
  { value: "3", label: "Products shipped in 2026" },
];

/** The dark band: how the 2026 products were built. */
export const aiWorkflow = {
  kicker: "How I work",
  title: "AI-first.",
  titleAccent: "Reviewed by hand.",
  detail:
    "AI tools speed up design and development every day. Architecture, code review, tests, and production monitoring stay with me — that is how three products shipped in 2026.",
  tools: ["Claude Code", "Cursor", "GitHub Copilot", "Antigravity"],
  shipped: [
    { name: "Chalkback", note: "AI learning app" },
    { name: "Northline", note: "Next.js store on Neon Postgres" },
    { name: "Mobile game", note: "React Native, closed testing on Google Play" },
  ],
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "chalkback",
    name: "Chalkback",
    period: "2026",
    kind: "Mobile app · AI learning",
    summary:
      "Paste a YouTube video, then teach it back to two AI students who ask about what you missed.",
    detail:
      "Answers are checked against the transcript, and every gap comes back as a short warm-up until it sticks.",
    highlights: [
      "Answers checked against the transcript",
      "Score stays hidden until the class ends",
      "Subscriptions via RevenueCat and Stripe",
    ],
    stack: [
      { label: "App", items: ["React Native", "Expo", "Expo Router", "Reanimated"] },
      { label: "Backend", items: ["Supabase", "LLM APIs", "YouTube transcripts"] },
      { label: "Payments", items: ["RevenueCat", "Stripe"] },
      { label: "Ops", items: ["Sentry", "PostHog"] },
      { label: "Landing", items: ["Next.js", "Vercel"] },
    ],
    links: [
      { label: "Open the app", href: "https://chalkback-app.vercel.app/" },
      { label: "Landing page", href: "https://chalkback.vercel.app/" },
    ],
    preview: "chalkback",
    workflow: {
      note: "Designed and built with Claude Code for rapid development, with every change reviewed and production monitored in Sentry and PostHog.",
      practices: ["Claude Code", "Code review", "Continuous monitoring"],
    },
  },
  {
    id: "northline",
    name: "Northline",
    period: "2026",
    kind: "Web · E-commerce",
    summary: "A store from catalog to checkout.",
    detail:
      "Search, a guest cart, account checkout, and order history. Card numbers are validated, never charged or stored.",
    highlights: [
      "Drizzle ORM on Neon Postgres",
      "Server Actions, validated with Zod",
      "API routes tested with Vitest",
    ],
    stack: [
      { label: "Frontend", items: ["Next.js 16", "React 19", "Tailwind CSS v4"] },
      { label: "Backend", items: ["Server Actions", "Drizzle ORM", "Neon Postgres", "Zod"] },
      { label: "Quality", items: ["TypeScript", "Vitest"] },
      { label: "Hosting", items: ["Vercel"] },
    ],
    links: [
      { label: "Live site", href: "https://northline-revamp.vercel.app/" },
      { label: "Code", href: "https://github.com/arifhussain88/amazon-replica-assesment" },
    ],
    preview: "northline",
    workflow: {
      note: "Designed and built with Cursor for rapid development, with every change reviewed and tests passing before each deploy.",
      practices: ["Cursor", "Code review", "Tests before deploy"],
    },
  },
];

export const flagshipProject: FlagshipProject = {
  id: "projectcamp",
  name: "ProjectCamp.io",
  company: "Meta Frolic Labs",
  period: "2023 – 2026",
  kind: "SaaS · CRM and operations",
  summary: "An all-in-one SaaS that replaced separate tools for production, sales, billing, and clients.",
  detail:
    "Co-built with the implementation team and sold to two local client companies. I owned its performance, queues, CI/CD, and Linux servers, and single-handedly migrated production from CentOS 7 to AlmaLinux.",
  scope: [
    "CRM for sales, account management, and support teams",
    "Project and task boards",
    "Customer portal with live project progress, tasks, and reports",
    "CEO-level dashboards that load in real time",
    "Dialpad telephony and email replies threaded into conversations",
    "Real-time notifications",
    "Custom payment module: Stripe, Authorize.net, ThriftyPayments, Maverick Payments",
  ],
  facts: [
    { value: "2", label: "Client companies" },
    { value: "4", label: "Payment gateways" },
    { value: "AlmaLinux", label: "Server migration, 2026" },
  ],
  stack: [
    { label: "App", items: ["Laravel", "Vue.js", "MySQL", "Redis"] },
    { label: "Servers", items: ["AWS", "AlmaLinux", "NGINX", "Apache", "PHP-FPM"] },
    { label: "Delivery", items: ["Queues & workers", "Bitbucket CI/CD"] },
  ],
  links: [{ label: "projectcamp.io", href: "https://projectcamp.io/" }],
  screens: [
    {
      src: getAssetPath("/images/projectcamp/project-dashboard.webp"),
      title: "Project dashboard",
      caption: "Every client project with its status and latest activity.",
      width: 1280,
      height: 534,
    },
    {
      src: getAssetPath("/images/projectcamp/sales-dashboard.webp"),
      title: "Sales dashboard",
      caption: "Targets, leads, conversions, and daily sales against the prior month.",
      width: 1280,
      height: 560,
    },
    {
      src: getAssetPath("/images/projectcamp/task-board.webp"),
      title: "Task board",
      caption: "Production tasks grouped by assignee, with due dates and status.",
      width: 1280,
      height: 566,
    },
    {
      src: getAssetPath("/images/projectcamp/team-board.webp"),
      title: "Team board",
      caption: "The same board grouped by team, with members and projects.",
      width: 1280,
      height: 558,
    },
    {
      src: getAssetPath("/images/projectcamp/team-dashboard.webp"),
      title: "Team dashboard",
      caption: "Each person's tasks, what's due today, and what's done.",
      width: 1280,
      height: 557,
    },
    {
      src: getAssetPath("/images/projectcamp/production-calendar.webp"),
      title: "Production calendar",
      caption: "Per-person calendars with the tasks due each day.",
      width: 1280,
      height: 565,
    },
    {
      src: getAssetPath("/images/projectcamp/sales-kpi.webp"),
      title: "Sales KPI",
      caption: "Head count, team targets, achievement, and commissions per agent.",
      width: 1280,
      height: 560,
    },
    {
      src: getAssetPath("/images/projectcamp/invoice.webp"),
      title: "Invoice",
      caption: "Invoices with payment history from the custom payment module.",
      width: 1280,
      height: 586,
    },
  ],
};

export const projects: Project[] = [
  {
    id: "hrm",
    name: "HRM portal",
    company: "Meta Frolic Labs",
    period: "2023 – 2026",
    kind: "Internal platform",
    summary: "The company's internal HR portal.",
    detail: "Designed and built end to end, owning its architecture.",
    technology: ["Laravel", "Filament"],
    links: [],
  },
  {
    id: "billing",
    name: "Billing portal",
    company: "Salsoft Technologies",
    period: "2019 – 2022",
    kind: "Payments",
    summary: "Lead management, invoicing, and payment-link checkout pages.",
    detail: "Led development and deployment, plus a Stripe-integrated client payment portal.",
    technology: ["Laravel", "React", "MongoDB", "Stripe"],
    links: [],
  },
  {
    id: "supplier-crm",
    name: "Supplier CRM",
    company: "PNC Solutions",
    period: "2016 – 2019",
    kind: "CRM",
    summary: "Orders, measurements, and invoicing for a timber and hardware supplier.",
    detail: "Built in Laravel for the client's day-to-day operations.",
    technology: ["Laravel", "MySQL"],
    links: [],
  },
];

export const sideProjects: SideProject[] = [
  {
    id: "mobile-game",
    name: "Mobile game",
    period: "2026",
    summary: "React Native game in closed testing on Google Play, built with agentic development.",
    technology: ["React Native", "Oracle Cloud"],
    href: null,
  },
  {
    id: "zentracker",
    name: "ZenTracker",
    period: "2026",
    summary: "Native mobile habit and mood tracker with a weekly chart.",
    technology: ["Laravel 12", "NativePHP", "SQLite"],
    href: "https://github.com/arifhussain88/ZenTracker",
  },
  {
    id: "tms",
    name: "Translation service",
    period: "2026",
    summary: "Translation API with tags, ETag caching, and rate-limited export.",
    technology: ["Laravel 11", "MySQL"],
    href: "https://github.com/arifhussain88/tms",
  },
  {
    id: "kalm",
    name: "KALM",
    period: "2023 – 2024",
    summary: "Booking for electricians, plumbers, and maintenance services in Karachi.",
    technology: ["Laravel"],
    href: "https://kalm.pk/",
  },
];

export const skills: StackGroup[] = [
  { label: "Backend", items: ["PHP", "Laravel", "Filament", "Livewire", "REST APIs", "Queues & workers"] },
  { label: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
  { label: "Mobile", items: ["React Native", "Expo", "NativePHP"] },
  { label: "Databases", items: ["MySQL", "PostgreSQL", "Neon", "Supabase", "MongoDB", "Redis", "SQLite", "Drizzle ORM"] },
  { label: "Cloud & DevOps", items: ["AWS EC2", "Oracle Cloud", "Vercel", "Docker", "AlmaLinux", "NGINX", "Apache", "PHP-FPM", "Supervisor", "Bitbucket CI/CD"] },
  { label: "Payments & integrations", items: ["Stripe", "Authorize.net", "ThriftyPayments", "Maverick Payments", "Paytrace", "Elavon", "RevenueCat", "Dialpad"] },
  { label: "AI-assisted development", items: ["Claude Code", "Cursor", "GitHub Copilot", "Antigravity", "LLM APIs", "Agentic workflows"] },
  { label: "Quality & practice", items: ["Code review", "PHPUnit", "Vitest", "Sentry", "PostHog", "Mentoring", "Git", "Jira", "Agile"] },
];

export const learning = ["Python", "FastAPI", "Node.js", "NestJS", "Express"];

export const marqueeTools = [
  "Laravel",
  "Vue.js",
  "React",
  "Next.js",
  "React Native",
  "Expo",
  "TypeScript",
  "Filament",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "Supabase",
  "AWS",
  "NGINX",
  "Stripe",
  "Claude Code",
  "Cursor",
];

export const experience: ExperienceEntry[] = [
  {
    company: "Meta Frolic Labs",
    location: "Karachi",
    years: "2023 – 2026",
    summary: "ProjectCamp.io, an internal HRM portal, and a team of 3–4 developers.",
    roles: [
      {
        role: "Senior Technology Lead",
        period: "May 2023 – May 2026",
        points: [
          "Co-built ProjectCamp.io, an all-in-one SaaS that replaced separate tools for production, sales, billing, and clients; sold and deployed to two local client companies.",
          "Made slow CRM reports fast with query rewrites, composite indexes, and Redis caching, giving leadership dashboards that load in real time.",
          "Led a technical-debt cleanup through refactoring, shared error handling, and centralized logging; introduced Redis queues and background workers and built the Bitbucket CI/CD pipeline.",
          "Single-handedly migrated ProjectCamp.io's production servers from CentOS 7 to AlmaLinux, with Apache, PHP-FPM, and NGINX as reverse proxy.",
          "Led 3–4 developers: mentoring, unblocking bugs and performance issues, and shaping architecture with the software architect and PM.",
          "Designed and built the company's internal HRM portal with Laravel and Filament.",
        ],
      },
    ],
  },
  {
    company: "Salsoft Technologies",
    location: "Karachi",
    years: "2013 – 2016 · 2019 – 2023",
    summary: "Billing and payments, then the backend of a SaaS rebuild.",
    roles: [
      {
        role: "Senior Technology Lead",
        period: "Nov 2022 – May 2023",
        points: [
          "Core team member rebuilding a legacy portal from scratch as a SaaS workspace for billing, project and task management, and team collaboration.",
          "Built backend services with Laravel APIs, Vue.js, MySQL, and Redis, with Supervisor-managed queues; added live dashboards, activity notifications, and a platform-wide log.",
        ],
      },
      {
        role: "Senior PHP Developer / Team Lead",
        period: "Jun 2019 – Nov 2022",
        points: [
          "Led a billing portal for leads, invoicing, and payment-link checkout pages (Laravel, React, MongoDB).",
          "Found and fixed the root cause of a company-wide email spam issue affecting every in-house brand.",
          "Built a Stripe-integrated client payment portal while leading code reviews and mentoring the team.",
        ],
      },
      {
        role: "PHP Web Developer",
        period: "Aug 2013 – Oct 2016",
        points: [
          "Built a games website with CRM and social features, a custom CMS, and an online learning portal for teachers and students.",
        ],
      },
    ],
  },
  {
    company: "PNC Solutions Pakistan",
    location: "Karachi",
    years: "2016 – 2019",
    summary: "A supplier CRM, classifieds, and client web apps.",
    roles: [
      {
        role: "Senior PHP Developer",
        period: "Nov 2016 – Jun 2019",
        points: [
          "Built a Laravel CRM for a timber and hardware supplier covering orders, measurements, and invoicing.",
          "Built and maintained a classified listings platform and its admin portal (CodeIgniter, jQuery), plus further client web apps and online stores.",
        ],
      },
    ],
  },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "ProjectCamp", href: "#projectcamp" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#stack" },
  { label: "Contact", href: "#contact" },
];
