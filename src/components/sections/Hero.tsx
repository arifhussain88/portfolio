"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroStats, marqueeTools, siteConfig } from "@/lib/constants";
import { ease } from "@/components/ui/Reveal";

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number, y = 16) => ({
    initial: reduce ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease, delay },
  });

  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 md:pt-40">
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="hero-glow pointer-events-none absolute -top-40 left-1/2 -z-10 h-[34rem] w-[48rem] -translate-x-1/2"
        aria-hidden="true"
      />

      <div className="page-wrap">
        <motion.a
          href="#contact"
          {...fade(0.05, 8)}
          className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 py-1.5 pr-4 pl-2.5 text-sm text-ink-2 shadow-card backdrop-blur transition-colors hover:border-border-strong"
        >
          <span className="pulse-dot relative size-2 rounded-full bg-success" aria-hidden="true" />
          {siteConfig.availability} · {siteConfig.location}
        </motion.a>

        <h1 className="mt-8 max-w-5xl text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] font-semibold tracking-[-0.045em] text-foreground">
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="block"
              initial={reduce ? false : { y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, ease }}
            >
              Web and mobile products
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.1em]">
            <motion.span
              className="block"
              initial={reduce ? false : { y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, ease, delay: 0.08 }}
            >
              that stay{" "}
              <span className="font-serif font-normal tracking-[-0.02em] text-accent italic">
                fast in production.
              </span>
            </motion.span>
          </span>
        </h1>

        <motion.p
          {...fade(0.35)}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-2 md:text-xl"
        >
          I&apos;m {siteConfig.name}, a senior full-stack engineer in Karachi. I design the
          database, write the API, and build the screens — Laravel, React, and Next.js on the web,
          React Native on mobile — then stay on to keep it fast. One sales report went from 50
          seconds to 200 milliseconds.
        </motion.p>

        <motion.div {...fade(0.5)} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background shadow-card-lg transition-transform hover:-translate-y-0.5"
          >
            See latest work
            <span className="transition-transform group-hover:translate-y-0.5" aria-hidden="true">
              ↓
            </span>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
          >
            Email me
          </a>
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-3.5 text-sm font-medium text-foreground underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-accent"
          >
            Résumé (PDF)
          </a>
        </motion.div>

        <motion.dl
          {...fade(0.65)}
          className="mt-20 grid grid-cols-2 overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4"
          style={{ gap: "1px" }}
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-surface p-5 md:p-7">
              <dt className="text-sm text-muted">{stat.label}</dt>
              <dd className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-foreground md:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.div {...fade(0.8, 0)} className="marquee mt-16 overflow-hidden border-y border-border py-5">
        <div className="marquee-track flex w-max gap-10 pr-10">
          {[...marqueeTools, ...marqueeTools].map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="flex items-center gap-10 font-mono text-sm tracking-wide whitespace-nowrap text-muted"
              aria-hidden={i >= marqueeTools.length ? "true" : undefined}
            >
              {tool}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
