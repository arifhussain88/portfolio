"use client";

import { motion, useReducedMotion } from "framer-motion";
import { metric } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

const item = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.8, ease } },
};

export function Metric() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="metric-heading" className="bg-foreground text-background">
      <div className="page-wrap py-24 md:py-36">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-sand"
        >
          {metric.kicker}
        </motion.p>

        <motion.h2
          id="metric-heading"
          className="mt-6 flex flex-wrap items-baseline gap-x-4 font-display text-[clamp(4.25rem,12vw,8rem)] leading-[0.9] font-medium tracking-[-0.03em] md:gap-x-8"
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <span className="inline-block overflow-hidden pb-[0.08em]">
            <motion.span className="inline-block" variants={reduce ? undefined : item}>
              {metric.before}
            </motion.span>
          </span>
          <motion.span
            className="text-[0.45em] text-accent-soft"
            aria-hidden="true"
            variants={
              reduce
                ? undefined
                : {
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { duration: 0.4 } },
                  }
            }
          >
            →
          </motion.span>
          <span className="inline-block overflow-hidden pb-[0.08em]">
            <motion.span className="inline-block" variants={reduce ? undefined : item}>
              {metric.after}
            </motion.span>
          </span>
        </motion.h2>

        <motion.p
          className="reading mt-8 text-lg leading-relaxed text-sand md:text-xl"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
        >
          {metric.detail}
        </motion.p>
      </div>
    </section>
  );
}
