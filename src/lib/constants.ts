import type {
  ExperienceEntry,
  FeaturedProject,
  Project,
  SideProject,
  Stat,
  StackGroup,
} from "@/lib/types";
import { getAssetPath } from "@/lib/utils";

export const siteConfig = {
  name: "Arif Hussain",
  title: "Senior software engineer",
  location: "Karachi, Pakistan",
  intro:
    "I build the screen, the API, and the database, and I stay with the software after it ships.",
  availability: "Open to senior roles",
  email: "sayed.arif2001@gmail.com",
  phone: "+92-308-9130079",
  linkedin: "https://linkedin.com/in/sayed-arifhussain",
  github: "https://github.com/arifhussain88",
  resumePath: getAssetPath("/resume/arif-hussain-resume.pdf?v=2026-11"),
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "moeapqdo",
};

export const heroStats: Stat[] = [
  { value: "4", label: "Payment gateways integrated" },
  { value: "~1,500", label: "People on one portal at once" },
  { value: "40%", label: "Technical debt cleared" },
  { value: "200ms", label: "Down from a 50s report" },
];

export const metric = {
  before: 50,
  beforeUnit: "s",
  after: 200,
  afterUnit: "ms",
  kicker: "A sales report at Meta Frolic Labs",
  detail:
    "Indexes, a rewritten query, and Redis caching. The same report, about 250× faster.",
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
      "Every gap links back to the moment in the video and returns as a one-minute warm-up until it sticks.",
    highlights: [
      "Answers checked against the transcript",
      "Score stays hidden until the class ends",
      "Subscriptions via RevenueCat and Stripe",
    ],
    stack: [
      { label: "App", items: ["React Native", "Expo", "Expo Router", "Reanimated", "Moti"] },
      { label: "Backend", items: ["Supabase", "LLM APIs", "YouTube transcripts"] },
      { label: "Payments", items: ["RevenueCat", "Stripe"] },
      { label: "Ops", items: ["Sentry", "PostHog", "Vercel"] },
      { label: "Landing", items: ["Next.js", "Vercel"] },
    ],
    links: [
      { label: "Open the app", href: "https://chalkback-app.vercel.app/" },
      { label: "Landing page", href: "https://chalkback.vercel.app/" },
    ],
    preview: "chalkback",
    workflow: {
      note: "Designed and built with Claude for rapid development, with every change reviewed and production monitored in Sentry and PostHog.",
      practices: ["Claude", "Code review", "Continuous monitoring"],
    },
  },
  {
    id: "northline",
    name: "Northline",
    period: "2026",
    kind: "Web · E-commerce",
    summary: "A general store, from the catalog through to checkout.",
    detail:
      "Search, a guest cart, account checkout, and order history. Card numbers are validated, never charged or stored.",
    highlights: [
      "Typed schema with Drizzle on Neon Postgres",
      "Server Actions and REST routes",
      "API routes covered by Vitest",
    ],
    stack: [
      { label: "Frontend", items: ["Next.js 16", "React 19", "Tailwind CSS v4", "Radix UI", "Motion"] },
      { label: "Backend", items: ["Server Actions", "Route Handlers", "Drizzle ORM", "Neon Postgres", "PGlite", "Zod"] },
      { label: "Quality", items: ["TypeScript", "Vitest", "ESLint"] },
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

export const projects: Project[] = [
  {
    id: "metafrolic",
    name: "Meta Frolic Labs portal",
    period: "2023 – 2026",
    kind: "Internal platform",
    summary: "The portal about 1,500 people use at the same time.",
    detail:
      "I owned the architecture. Internal work, clients, and projects sit in one Laravel app with Filament and Livewire. Redis queues, background workers, and a Bitbucket pipeline keep it running.",
    technology: ["Laravel", "Filament", "Livewire", "MySQL", "Redis"],
    links: [{ label: "Portal", href: "https://portal.metafroliclabs.com/login" }],
  },
  {
    id: "projectcamp",
    name: "ProjectCamp",
    period: "2021 – 2024",
    kind: "SaaS · Operations",
    summary: "One product in place of the separate tools a company was using.",
    detail:
      "Co-built to replace Teamwork for production, sales, billing, and clients, with a view for each role. I ran staging and moved servers from CentOS to AlmaLinux.",
    technology: ["Laravel", "Vue.js", "MySQL", "Redis", "AWS"],
    links: [{ label: "Live site", href: "https://projectcamp.io/" }],
  },
  {
    id: "botnest",
    name: "BotNest",
    period: "2024 – 2025",
    kind: "SaaS · AI",
    summary: "Where a business designs a chatbot and puts it on their site.",
    detail:
      "Configure the bot, switch models, read conversation stats, and embed the agent on a client site.",
    technology: ["React", "Node.js", "Tailwind CSS"],
    links: [{ label: "Open the app", href: "https://app.botnest.ai/login" }],
  },
];

export const sideProjects: SideProject[] = [
  {
    id: "zentracker",
    name: "ZenTracker",
    period: "2026",
    summary: "Habits, mood, and a weekly chart, as a native mobile app.",
    technology: ["Laravel 12", "NativePHP", "SQLite"],
    href: "https://github.com/arifhussain88/ZenTracker",
  },
  {
    id: "tms",
    name: "Translation service",
    period: "2026",
    summary: "A translation API with tags, ETag caching, and rate-limited export.",
    technology: ["Laravel 11", "MySQL"],
    href: "https://github.com/arifhussain88/tms",
  },
  {
    id: "news-app",
    name: "News aggregation",
    period: "2024",
    summary: "Scheduled jobs pull articles from the Times, the Guardian, and NewsAPI.",
    technology: ["Laravel", "Queues"],
    href: "https://github.com/arifhussain88/news-app",
  },
  {
    id: "kalm",
    name: "KALM",
    period: "2023 – 2024",
    summary: "Booking for electricians, plumbers, and maintenance in Karachi.",
    technology: ["Laravel"],
    href: "https://kalm.pk/",
  },
];

export const skills: StackGroup[] = [
  { label: "Frontend", items: ["React", "Next.js", "Vue.js", "React Native", "Expo", "Livewire", "Tailwind CSS"] },
  { label: "Backend", items: ["PHP", "Laravel", "Node.js", "REST APIs", "Queues", "Python"] },
  { label: "Data", items: ["MySQL", "PostgreSQL", "Redis", "Drizzle", "Supabase", "Neon"] },
  { label: "Infrastructure", items: ["AWS", "Linux", "Docker", "Nginx", "Vercel", "CI/CD"] },
  { label: "AI workflow", items: ["Claude", "Cursor", "LLM APIs", "Code review", "Sentry", "PostHog"] },
];

export const marqueeTools = [
  "Laravel",
  "React",
  "Next.js",
  "React Native",
  "Expo",
  "Vue.js",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Supabase",
  "AWS",
  "Docker",
  "Stripe",
  "Tailwind CSS",
];

export const experience: ExperienceEntry[] = [
  {
    company: "Meta Frolic Labs",
    location: "Karachi",
    years: "2023 – 2026",
    summary: "A CRM for about 1,500 people at once.",
    roles: [
      {
        role: "Senior Technology Lead",
        period: "May 2023 – May 2026",
        story:
          "I set the architecture and stayed with it in production. Queues, background workers, and a Bitbucket pipeline went in. Refactoring, shared error handling, and a single log stream cleared about 40% of the technical debt. The sales report that dropped from about 50 seconds to 200 milliseconds is this work.",
      },
    ],
  },
  {
    company: "Salsoft Technologies",
    location: "Karachi",
    years: "2013 – 2016 · 2019 – 2023",
    summary: "Billing and payments, then the backend of a SaaS rewrite.",
    roles: [
      {
        role: "Senior Technology Lead",
        period: "Nov 2022 – May 2023",
        story:
          "I designed the backend of a SaaS rewrite: Laravel APIs, Vue.js, MySQL, Redis, and queued workers. The team got live dashboards, activity notifications, and a log they could search.",
      },
      {
        role: "Senior PHP Developer / Team Lead",
        period: "Jun 2019 – Nov 2022",
        story:
          "I led a billing portal for leads, invoices, and payments, with Stripe (including 3D Secure), Authorize.net, Paytrace, and Elavon. I closed an email spam hole that affected every in-house brand, and mentored the team through code review.",
      },
      {
        role: "PHP Web Developer",
        period: "Aug 2013 – Oct 2016",
        story:
          "I built a games site with a CRM and social features, and a learning portal where teachers and students could use video, chat, and forums.",
      },
    ],
  },
  {
    company: "PNC Solutions Pakistan",
    location: "Karachi",
    years: "2016 – 2019",
    summary: "Classifieds, a supplier CRM, and a run of shop sites.",
    roles: [
      {
        role: "Senior PHP Developer",
        period: "Nov 2016 – Jun 2019",
        story:
          "I built a classifieds site and its admin portal in CodeIgniter, and a Laravel CRM for a timber supplier covering orders, measurements, and invoices. Alongside that, shop sites on OpenCart, WordPress, and Shopify.",
      },
    ],
  },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];
