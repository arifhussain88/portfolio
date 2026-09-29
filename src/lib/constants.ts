import type { ExperienceEntry, Project, SideProject } from "@/lib/types";
import { getAssetPath } from "@/lib/utils";

export const siteConfig = {
  name: "Arif Hussain",
  title: "Senior software engineer",
  location: "Karachi, Pakistan",
  intro:
    "I build the screen, the API, and the database, and I stay with the software after it ships.",
  availability: "Open to senior roles.",
  tools: ["Laravel", "Vue", "React", "Next.js", "MySQL", "PostgreSQL", "AWS"],
  email: "sayed.arif2001@gmail.com",
  phone: "+92-308-9130079",
  linkedin: "https://linkedin.com/in/sayed-arifhussain",
  github: "https://github.com/arifhussain88",
  resumePath: getAssetPath("/resume/arif-hussain-resume.pdf"),
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "moeapqdo",
};

export const metric = {
  before: "50s",
  after: "200ms",
  kicker: "A sales report at Meta Frolic Labs",
  detail:
    "Indexes, a rewritten query, and Redis. The same report, without the wait.",
};

export const projects: Project[] = [
  {
    id: "northline",
    name: "Northline",
    period: "2026",
    summary: "A general store, from the catalog through to checkout.",
    detail:
      "Departments, search, and a cart work before anyone has an account. Checkout asks them to sign in. Prices are in US dollars. Shipping is free from $35, and $5.99 below that. A card number is checked, then discarded: the shop never charges it and never stores it. Past orders stay on the account.",
    technology: ["Next.js", "Drizzle ORM", "Neon Postgres", "Vercel"],
    links: [
      { label: "Live site", href: "https://northline-revamp.vercel.app/" },
      {
        label: "Code",
        href: "https://github.com/arifhussain88/amazon-replica-assesment",
      },
    ],
  },
  {
    id: "projectcamp",
    name: "ProjectCamp",
    period: "2021 – 2024",
    summary: "One product in place of the separate tools the company was using.",
    detail:
      "I co-built it to replace Teamwork for production, sales, billing, and clients. Production, project managers, sales, clients, and leadership each get their own view: dashboards, CRM, invoices, payments, and reports. I ran staging and moved the servers from CentOS to AlmaLinux so staging matched production.",
    technology: ["Laravel", "Vue.js", "MySQL", "Redis", "AWS"],
    links: [{ label: "Live site", href: "https://projectcamp.io/" }],
  },
  {
    id: "metafrolic",
    name: "Meta Frolic Labs",
    period: "2023 – 2026",
    summary: "The portal about 1,500 people use at the same time.",
    detail:
      "I owned the architecture. Internal work, clients, and projects sit in one Laravel app, with Filament and Livewire. Redis queues, background workers, and a Bitbucket pipeline keep it running. A long cleanup — refactoring, shared error handling, and one place for logs — cut about 40% of the technical debt. The sales report in the dark band is from this portal.",
    technology: ["Laravel", "Filament", "Livewire", "MySQL", "Redis"],
    links: [
      {
        label: "Portal",
        href: "https://portal.metafroliclabs.com/login",
      },
    ],
  },
  {
    id: "botnest",
    name: "BotNest",
    period: "2024 – 2025",
    summary: "Where a business designs a chatbot and puts it on their site.",
    detail:
      "The screens are React and the API is Node. You configure the bot, switch models, read the conversation stats, and embed the agent on a client site.",
    technology: ["React", "Node.js", "Tailwind CSS"],
    links: [{ label: "Open the app", href: "https://app.botnest.ai/login" }],
  },
];

export const sideProjects: SideProject[] = [
  {
    id: "kalm",
    name: "KALM",
    period: "2023 – 2024",
    summary: "Booking for electricians, plumbers, and maintenance in Karachi.",
    href: "https://kalm.pk/",
  },
  {
    id: "zentracker",
    name: "ZenTracker",
    period: "2026",
    summary: "Habits, mood, and a weekly chart. A short sprint with Laravel and NativePHP.",
    href: "https://github.com/arifhussain88/ZenTracker",
  },
  {
    id: "news-app",
    name: "News aggregation",
    period: "2024",
    summary: "Laravel jobs that pull articles from the Times, the Guardian, and NewsAPI.",
    href: "https://github.com/arifhussain88/news-app",
  },
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
  { label: "Contact", href: "#contact" },
];
