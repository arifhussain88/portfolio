"use client";

import { motion, useReducedMotion } from "framer-motion";
import { aiWorkflow } from "@/lib/constants";
import { ease } from "@/components/ui/Reveal";

/** Dark band: the AI-first, human-reviewed way the 2026 products were built. */
export function Metric() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="workflow-heading" className="px-3 md:px-6">
      <div className="relative mx-auto max-w-[76rem] overflow-hidden rounded-[2.25rem] bg-[#0c0c0d] text-white ring-1 ring-white/10">
        <div
          className="pointer-events-none absolute -top-32 -right-24 size-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(234,88,12,0.45),transparent)] blur-2xl"
          aria-hidden="true"
        />
        <div className="relative grid gap-12 px-6 py-16 md:grid-cols-[1.25fr_1fr] md:px-14 md:py-20">
          <div>
            <p className="font-mono text-xs tracking-[0.14em] text-white/55 uppercase">{aiWorkflow.kicker}</p>
            <motion.h2
              id="workflow-heading"
              className="mt-6 text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.045em]"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease }}
            >
              {aiWorkflow.title}
              <br />
              <span className="font-serif font-normal tracking-[-0.02em] text-[#fb7a3c] italic">
                {aiWorkflow.titleAccent}
              </span>
            </motion.h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{aiWorkflow.detail}</p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {aiWorkflow.tools.map((tool) => (
                <li key={tool} className="rounded-full border border-white/15 px-3 py-1 text-sm text-white/85">
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:self-end">
            <p className="font-mono text-xs tracking-[0.14em] text-white/55 uppercase">Shipped in 2026</p>
            <ol className="mt-4 divide-y divide-white/10 border-y border-white/10">
              {aiWorkflow.shipped.map((item, i) => (
                <motion.li
                  key={item.name}
                  className="flex items-baseline gap-4 py-4"
                  initial={reduce ? false : { opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                >
                  <span className="font-mono text-xs text-[#fb7a3c]">0{i + 1}</span>
                  <span>
                    <span className="block text-lg font-semibold tracking-tight">{item.name}</span>
                    <span className="text-sm text-white/60">{item.note}</span>
                  </span>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
