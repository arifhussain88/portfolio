"use client";

import { experience } from "@/lib/constants";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="page-wrap py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[20rem_1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Experience"
            title="Lead roles on systems people use all day."
            description="CRMs, billing portals, and a SaaS rewrite — owned from the architecture through to production support."
          />
        </div>

        <ol className="relative border-l border-border">
          {experience.map((entry, i) => (
            <Reveal as="li" key={entry.company} delay={i * 0.05} className="relative pb-14 pl-8 last:pb-0 md:pl-12">
              <span
                className={`absolute top-1.5 -left-[7px] size-3.5 rounded-full border-2 border-background ${
                  i === 0 ? "bg-accent" : "bg-border-strong"
                }`}
                aria-hidden="true"
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="text-2xl font-semibold tracking-[-0.025em] text-foreground md:text-3xl">
                  {entry.company}
                </h3>
                <span className="shrink-0 font-mono text-xs text-muted">{entry.years}</span>
              </div>
              <p className="mt-1 text-muted">
                {entry.summary} · {entry.location}
              </p>

              <div className="mt-6 space-y-4">
                {entry.roles.map((role) => (
                  <div
                    key={`${entry.company}-${role.period}`}
                    className="rounded-2xl border border-border bg-surface p-5 md:p-6"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <p className="font-semibold text-foreground">{role.role}</p>
                      <p className="shrink-0 text-sm text-muted">{role.period}</p>
                    </div>
                    <p className="mt-2 leading-relaxed text-ink-2">{role.story}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
