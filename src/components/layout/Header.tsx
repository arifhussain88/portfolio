"use client";

import { motion } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-surface/85 backdrop-blur-md shadow-xs py-3.5"
          : "bg-transparent py-5"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight text-foreground transition-colors"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white font-mono text-sm font-bold shadow-xs transition-transform group-hover:scale-105">
            AH
          </span>
          <span className="font-semibold tracking-tight">
            Arif Hussain<span className="text-accent">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 rounded-full border border-border/80 bg-surface/80 px-6 py-2 shadow-xs backdrop-blur-md md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="hidden items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3 py-1 text-xs font-medium text-emerald-800 lg:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
            Available for hire
          </div>
          <MagneticButton href="#contact" variant="primary" className="!px-4 !py-2 !text-xs">
            Contact
          </MagneticButton>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <motion.nav
          className="border-t border-border bg-surface px-6 py-6 shadow-lg md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted transition-colors hover:text-accent"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2 text-xs font-medium text-emerald-700">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              Available for senior roles & consulting
            </div>
            <MagneticButton href="#contact" variant="primary" className="mt-2 w-full">
              Get in touch
            </MagneticButton>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <p className="text-sm font-medium text-foreground">
            © {new Date().getFullYear()} {siteConfig.name} — Senior Software Engineer
          </p>
          <p className="text-xs text-muted-foreground">
            Architected for scalability, speed, and precision. Built with Next.js & TypeScript.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.resumePath}
            className="text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            Resume (PDF)
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm font-medium text-accent transition-colors hover:underline"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
