"use client";

import { learning, skills } from "@/lib/constants";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";

export function Stack() {
  return (
    <section id="stack" className="border-y border-border bg-surface-2/60">
      <div className="page-wrap py-24 md:py-32">
        <SectionHeading
          eyebrow="Skills"
          title="From the screen to the server."
          description="Laravel is the deepest. Vue.js, React, and Next.js on the web, React Native on mobile, and the Linux servers underneath."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={(i % 4) * 0.06} className="h-full">
              <div className="h-full rounded-3xl border border-border bg-surface p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-foreground">{group.label}</h3>
                  <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <p className="flex flex-wrap items-center gap-2 rounded-3xl border border-dashed border-border-strong px-6 py-4 text-sm text-muted">
            <span className="font-medium text-foreground">Currently learning</span>
            {learning.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
