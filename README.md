# Arif Hussain — Portfolio

Personal portfolio for Arif Hussain, senior software engineer. Built with **Next.js 15 (App Router, static export)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**. Light and dark themes follow the visitor's system setting.

Live: **https://arifhussain88.github.io/portfolio/**

## Run locally

```bash
npm install
cp .env.example .env.local   # PowerShell: Copy-Item .env.example .env.local
npm run dev                  # http://localhost:3000
```

Set `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local` to your [Formspree](https://formspree.io) form ID for the contact form.

| Command | What it does |
| :--- | :--- |
| `npm run dev` | Dev server with Turbopack on `http://localhost:3000` |
| `npm run build` | Static export into `./out` (used by GitHub Pages) |
| `npm run lint` | ESLint |

Pushing to `main` builds and deploys to GitHub Pages through `.github/workflows/nextjs.yml`.

## Editing content

All copy lives in [`src/lib/constants.ts`](src/lib/constants.ts):

- `featuredProjects` — the large “Latest work” cards (Chalkback, Northline), with grouped stacks and links
- `projects` / `sideProjects` — production systems and smaller builds
- `experience`, `skills`, `heroStats`, `metric` — the remaining sections

## Résumé

The PDF at `public/resume/arif-hussain-resume.pdf` is generated from [`resume/resume.html`](resume/resume.html). After editing the HTML, regenerate it with Edge (or Chrome) in headless mode:

```bash
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --no-pdf-header-footer --print-to-pdf="C:\laragon\www\portfolio\public\resume\arif-hussain-resume.pdf" "file:///C:/laragon/www/portfolio/resume/resume.html"
```

## Structure

```text
src/
├── app/
│   ├── globals.css          # Design tokens (light/dark) and utilities
│   ├── layout.tsx           # Fonts (Geist, Geist Mono, Instrument Serif) and metadata
│   ├── page.tsx             # Section order
│   └── not-found.tsx
├── components/
│   ├── layout/Header.tsx    # Floating nav, scroll progress, footer
│   ├── sections/            # Hero, Work (+ Previews), Metric, Stack, Experience, Contact
│   └── ui/Reveal.tsx        # Scroll reveal, section heading, icons
└── lib/                     # Content, types, base-path helper
public/resume/               # Résumé PDF
```
