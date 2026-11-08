"use client";

import { skills } from "@/lib/constants";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";

export function Stack() {
  return (
    <section id="stack" className="border-y border-border bg-surface-2/60">
      <div className="page-wrap py-24 md:py-32">
        <SectionHeading
          eyebrow="Stack"
          title="From the screen to the server."
          description="Laravel is the deepest. React, Next.js, and React Native are where the newest work lives, built faster with AI tools and checked by review."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.06} className="h-full">
              <div className="h-full rounded-3xl border border-border bg-surface p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">{group.label}</h3>
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
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
      </div>
    </section>
  );
}
