# Arif Hussain — Senior Software Engineer Portfolio

A modern, high-performance portfolio website built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4**, **Framer Motion**, and **GSAP**.

---

## ⚡ Quick Start (Run Locally)

Run these commands in your project root directory:

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:

```bash
# Windows (PowerShell)
Copy-Item .env.example .env.local

# Linux / macOS / Git Bash
cp .env.example .env.local
```

Add your [Formspree](https://formspree.io) form ID inside `.env.local`:
```env
NEXT_PUBLIC_FORMSPREE_ID=moeapqdo
```

### 3. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 All Available Commands

| Command | Purpose | Description |
| :--- | :--- | :--- |
| `npm run dev` | **Local Development** | Starts dev server with Turbopack at `http://localhost:3000` |
| `npm run build` | **Static Export Build** | Builds & exports static production site into `./out` directory |
| `npm run start` | **Production Server** | Starts local production server |
| `npm run lint` | **Code Quality** | Runs ESLint type & syntax validation |

---

## 🔄 Common Workflows & Troubleshooting

### Clean Cache & Reinstall
If you ever see build cache issues or Internal Server Errors:

```bash
# PowerShell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run dev

# Bash / Git Bash
rm -rf .next
npm run dev
```

### Test Production Static Export Locally
```bash
npm run build
```
The static build outputs directly into the `out/` folder (used by GitHub Pages).

### Deploy Updates to Live GitHub Pages
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```
GitHub Actions will automatically build and deploy the changes to:
👉 **[https://arifhussain88.github.io/portfolio/](https://arifhussain88.github.io/portfolio/)**

---

## 📁 Project Architecture

```text
portfolio/
├── public/                 # Static assets (PDF resume, favicons)
├── src/
│   ├── app/                # Next.js App Router (layout, page, global css)
│   │   ├── globals.css     # Design system tokens & Tailwind v4 theme
│   │   ├── layout.tsx      # Font configuration (Plus Jakarta Sans, DM Sans)
│   │   └── page.tsx        # Main single-page portfolio layout
│   ├── components/
│   │   ├── effects/        # Custom cursor, scroll progress, visual canvas
│   │   ├── layout/         # Header & Footer navigation
│   │   ├── sections/       # Hero, About, Skills, Work, Experience, Contact
│   │   └── ui/             # MagneticButton, SectionHeading, etc.
│   └── lib/                # Constants, project case studies, and animations
├── .env.example            # Environment variables template
├── .env.local              # Local environment variables
├── next.config.ts          # Next.js export & basePath config
├── package.json            # Scripts & project dependencies
└── tsconfig.json           # TypeScript configuration
```

---

## 🛠 Tech Stack
- **Framework:** Next.js 15 (App Router, Turbopack, Static Export)
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS v4 & Vanilla CSS Variables
- **Animations:** Framer Motion 12 & GSAP 3 (ScrollTrigger)
- **Form Handling:** Formspree React SDK
- **Hosting:** GitHub Pages (Automated CI/CD via GitHub Actions)
