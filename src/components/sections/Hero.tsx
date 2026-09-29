"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="page-wrap flex min-h-[100svh] flex-col pt-28 pb-8 md:pt-32">
      <div className="flex flex-1 flex-col justify-center">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-sm tracking-wide text-muted"
        >
          {siteConfig.title}
        </motion.p>

        <div className="mt-4 overflow-hidden">
          <motion.h1
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, ease }}
            className="font-display text-[clamp(3.4rem,9vw,7.25rem)] leading-[0.92] font-medium tracking-[-0.035em] text-foreground"
          >
            {siteConfig.name}
          </motion.h1>
        </div>

        <motion.div
          aria-hidden="true"
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.4 }}
          className="mt-8 h-px w-16 origin-left bg-accent"
        />

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.5 }}
          className="reading mt-6 font-display text-[1.65rem] leading-snug text-foreground italic md:text-3xl"
        >
          {siteConfig.intro}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mt-8"
        >
          <a href="#work" className="link text-lg">
            Selected work
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-16 grid gap-2 border-t border-border pt-5 text-sm text-muted sm:grid-cols-[auto_auto_1fr] sm:items-baseline sm:gap-8"
      >
        <p>{siteConfig.location}</p>
        <p>{siteConfig.availability}</p>
        <p className="sm:text-right">{siteConfig.tools.join(" · ")}</p>
      </motion.div>
    </section>
  );
}
