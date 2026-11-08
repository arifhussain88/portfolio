"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 md:px-6 md:pt-4">
      <div
        className={`mx-auto flex h-14 max-w-[72rem] items-center justify-between rounded-full border px-3 pl-5 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "border-border bg-surface/80 shadow-card backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight text-foreground">
          <span className="grid size-7 place-items-center rounded-full bg-foreground font-mono text-[0.7rem] text-background">
            AH
          </span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Page">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative isolate rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  isActive ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-surface-2"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-px sm:inline-block"
          >
            Résumé
          </a>
          <button
            type="button"
            className="grid size-10 cursor-pointer place-items-center rounded-full text-foreground md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-5 bg-current transition-all duration-300 ${
                  mobileOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-5 bg-current transition-all duration-300 ${
                  mobileOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Page"
            initial={reduce ? false : { opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 max-w-[72rem] rounded-3xl border border-border bg-surface p-3 shadow-card-lg md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-2xl px-4 py-3 text-2xl font-semibold tracking-tight text-foreground hover:bg-surface-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-2xl bg-foreground px-4 py-3 text-center font-medium text-background"
            >
              Download résumé
            </a>
          </motion.nav>
        )}
      </AnimatePresence>

      <motion.div
        className="fixed inset-x-0 top-0 h-[2px] origin-left bg-accent"
        style={{ scaleX: reduce ? scrollYProgress : scaleX }}
        aria-hidden="true"
      />
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="page-wrap flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.location}
        </p>
        <div className="flex gap-5">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href={siteConfig.resumePath} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Résumé
          </a>
          <a href="#top" className="hover:text-foreground">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
