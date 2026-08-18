"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

const HeroVisual = dynamic(
  () =>
    import("@/components/effects/HeroVisual").then((mod) => mod.HeroVisual),
  { ssr: false },
);

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <HeroVisual />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.p
            variants={staggerItem}
            className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-accent"
          >
            {siteConfig.location} · Open to remote
          </motion.p>

          <motion.h1
            variants={staggerItem}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
          >
            <span className="gradient-text">{siteConfig.title}.</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-8 flex flex-wrap gap-2"
          >
            {siteConfig.heroSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-muted backdrop-blur-sm transition-colors hover:border-accent/30 hover:text-foreground"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton href="#work" variant="primary">
              View my work
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </MagneticButton>
            <MagneticButton href={siteConfig.resumePath} variant="secondary">
              Download résumé
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M10 3v14M10 17l-4-4M10 17l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
