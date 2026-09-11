# Arif Hussain - Portfolio Website

A modern, responsive portfolio website built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4**, **Framer Motion**, and **GSAP**.

---

## 🚀 Quick Start (Run Locally)

### 1. Prerequisites
Make sure you have Node.js and npm installed on your system:
- **Node.js**: v18.18+ or later (Node v20+ recommended)
- **npm**: v9+ (comes bundled with Node)

Verify in your terminal:
```bash
node -v
npm -v
```

---

### 2. Install Dependencies
If `node_modules` is not installed or dependencies were updated, run:
```bash
npm install
```

---

### 3. Environment Setup
The project uses [Formspree](https://formspree.io) to handle the contact form submissions.

An environment file named `.env.local` should exist in the project root with your Formspree form ID:
```env
NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
```
*(A sample template is available in `.env.example`)*.

---

### 4. Run the Development Server
Start the Next.js development server with Turbopack:
```bash
npm run dev
```

Once running, open your browser and navigate to:
```
http://localhost:3000
```

---

## 🛠 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the development server with Turbopack on `http://localhost:3000` |
| `npm run build` | Builds the application for production in the `.next` folder |
| `npm run start` | Starts the production server (requires `npm run build` first) |
| `npm run lint` | Runs ESLint to check for code formatting and linting errors |

---

## 📁 Project Structure

```text
portfolio/
├── public/                 # Static assets (images, icons, etc.)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── globals.css     # Global styles & Tailwind v4 config
│   │   ├── layout.tsx      # Root layout & font configurations
│   │   └── page.tsx        # Main portfolio landing page
│   ├── components/
│   │   ├── effects/        # Custom animations & cursor effects
│   │   ├── layout/         # Header, Navigation, Footer
│   │   ├── sections/       # Hero, About, Skills, Experience, Work, Contact
│   │   └── ui/             # Reusable UI primitives (Buttons, Cards, Modals)
│   └── lib/                # Utility helpers & constants
├── .env.example            # Example environment variables
├── .env.local              # Local environment variables
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```
