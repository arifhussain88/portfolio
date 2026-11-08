"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { metric } from "@/lib/constants";
import { ease } from "@/components/ui/Reveal";

function CountDown({ from, to, unit, start }: { from: number; to: number; unit: string; start: boolean }) {
  const [value, setValue] = useState(from);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!start) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(from, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, from, to, reduce]);

  return (
    <span className="tabular-nums">
      {value}
      {unit}
    </span>
  );
}

export function Metric() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="metric-heading" className="px-3 md:px-6">
      <div
        ref={ref}
        className="relative mx-auto max-w-[76rem] overflow-hidden rounded-[2.25rem] bg-[#0c0c0d] text-white ring-1 ring-white/10"
      >
        <div
          className="pointer-events-none absolute -top-32 -right-24 size-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(234,88,12,0.45),transparent)] blur-2xl"
          aria-hidden="true"
        />
        <div className="relative grid gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr] md:items-end md:px-14 md:py-24">
          <div>
            <p className="font-mono text-xs tracking-[0.14em] text-white/55 uppercase">{metric.kicker}</p>
            <h2
              id="metric-heading"
              className="mt-6 flex flex-wrap items-baseline gap-x-5 text-[clamp(3.5rem,11vw,8.5rem)] leading-[0.9] font-semibold tracking-[-0.05em]"
            >
              <span className="text-white/35 line-through decoration-[0.05em]">
                {metric.before}
                {metric.beforeUnit}
              </span>
              <motion.span
                className="text-[0.4em] text-[#fb7a3c]"
                aria-hidden="true"
                initial={reduce ? false : { opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : undefined}
                transition={{ duration: 0.6, ease, delay: 0.2 }}
              >
                →
              </motion.span>
              <span className="sr-only">
                {metric.after}
                {metric.afterUnit}
              </span>
              <span aria-hidden="true">
                <CountDown from={50000} to={metric.after} unit={metric.afterUnit} start={inView} />
              </span>
            </h2>
          </div>
          <div className="md:pb-4">
            <p className="text-lg leading-relaxed text-white/75 md:text-xl">{metric.detail}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Query rewrite", "Composite indexes", "Redis cache"].map((t) => (
                <span key={t} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
