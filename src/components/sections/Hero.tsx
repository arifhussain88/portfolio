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
  const highlights = [
    { label: "Production Experience", value: "8+ Years" },
    { label: "Query Optimization", value: "50s → 200ms" },
    { label: "Concurrent Load", value: "1,500+ Users" },
    { label: "Core Expertise", value: "Laravel · Full-Stack · AWS" },
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <HeroVisual />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={staggerItem} className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-mono font-medium text-muted shadow-xs">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              {siteConfig.location} · Available Worldwide
            </span>
            <span className="hidden sm:inline-block rounded-full border border-border/80 bg-surface-elevated/60 px-3 py-1 font-mono text-xs text-muted-foreground">
              Full-Stack Architecture & Delivery
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={staggerItem}
            className="font-display text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-6xl md:text-7xl lg:text-[4.75rem] leading-[1.14]"
          >
            Engineering <span className="gradient-text font-extrabold">resilient, scalable</span> web applications.
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
          >
            I&apos;m <span className="font-semibold text-foreground">{siteConfig.name}</span>, a{" "}
            <span className="text-foreground font-medium">{siteConfig.title}</span> specializing in
            end-to-end production systems — robust Laravel &amp; Node APIs, high-performance database architectures,
            modern frontend interfaces, and automated cloud infrastructure.
          </motion.p>

          {/* Tech stack badges */}
          <motion.div
            variants={staggerItem}
            className="mt-8 flex flex-wrap items-center gap-2"
          >
            <span className="mr-2 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Core Stack:
            </span>
            {siteConfig.heroSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-border bg-surface px-3 py-1 font-mono text-xs font-medium text-foreground shadow-xs transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* Action buttons */}
          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#work" variant="primary">
              Explore Selected Work
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </MagneticButton>
            <MagneticButton href={siteConfig.resumePath} variant="secondary">
              Download Résumé (PDF)
            </MagneticButton>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            variants={staggerItem}
            className="mt-14 grid grid-cols-2 gap-4 border-t border-border pt-8 sm:grid-cols-4"
          >
            {highlights.map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="font-display text-xl font-bold text-foreground md:text-2xl">
                  {item.value}
                </span>
                <span className="mt-1 text-xs font-mono text-muted-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
