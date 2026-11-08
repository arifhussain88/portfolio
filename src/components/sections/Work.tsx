"use client";

import { featuredProjects, projects, sideProjects } from "@/lib/constants";
import type { FeaturedProject } from "@/lib/types";
import { ArrowUpRight, Reveal, SectionHeading } from "@/components/ui/Reveal";
import { ChalkbackPreview, NorthlinePreview } from "@/components/sections/Previews";

const previewBg: Record<FeaturedProject["preview"], string> = {
  northline: "bg-[radial-gradient(120%_90%_at_80%_10%,#f6dfe6_0%,#fbf5ee_55%,#f8efe2_100%)]",
  chalkback: "bg-[radial-gradient(120%_90%_at_20%_10%,#fdfbc8_0%,#f6f6f3_50%,#eeecff_100%)]",
};

function FeaturedCard({ project, index }: { project: FeaturedProject; index: number }) {
  const reversed = index % 2 === 1;
  const [primary, ...secondary] = project.links;

  return (
    <Reveal as="article" className="group">
      <div className="grid overflow-clip rounded-[2rem] border border-border bg-surface shadow-card transition-shadow duration-500 hover:shadow-card-lg lg:grid-cols-2">
        <div
          className={`relative overflow-clip px-6 py-12 md:px-12 lg:py-16 ${
            previewBg[project.preview]
          } ${reversed ? "lg:order-2" : ""}`}
        >
          <div className="lg:sticky lg:top-32">
            {project.preview === "northline" ? <NorthlinePreview /> : <ChalkbackPreview />}
          </div>
        </div>

        <div className="flex flex-col p-7 md:p-10">
          <div className="flex items-center justify-between gap-4">
            <span className="eyebrow">{project.kind}</span>
            <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-xs whitespace-nowrap text-accent-ink">
              New · {project.period}
            </span>
          </div>

          <h3 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-foreground md:text-5xl">
            {project.name}
          </h3>
          <p className="mt-3 text-xl leading-snug text-ink-2">{project.summary}</p>
          <p className="mt-5 leading-relaxed text-muted">{project.detail}</p>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm leading-snug text-ink-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-7 rounded-2xl border border-border bg-surface-2 p-4 md:p-5">
            <p className="text-sm leading-relaxed text-ink-2">{project.workflow.note}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {project.workflow.practices.map((p) => (
                <li key={p} className="chip">
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 space-y-3 border-t border-border pt-6">
            <p className="eyebrow">Stack</p>
            <dl className="space-y-2.5">
              {project.stack.map((group) => (
                <div key={group.label} className="grid gap-1.5 sm:grid-cols-[5.5rem_1fr] sm:items-baseline">
                  <dt className="text-xs font-medium text-muted">{group.label}</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            {primary && (
              <a
                href={primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                {primary.label}
                <ArrowUpRight />
              </a>
            )}
            {secondary.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
              >
                {link.label}
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="page-wrap py-24 md:py-32">
      <SectionHeading
        eyebrow="Latest work · 2026"
        title={
          <>
            Two products, <span className="font-serif font-normal italic">shipped this year.</span>
          </>
        }
        description="A mobile app that turns any video into a class you teach, and a store that runs from catalog to checkout."
      />

      <div className="mt-14 space-y-8 md:mt-16 md:space-y-10">
        {featuredProjects.map((project, index) => (
          <FeaturedCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export function MoreWork() {
  return (
    <section className="page-wrap pb-24 md:pb-32">
      <SectionHeading
        eyebrow="In production"
        title="Systems companies rely on every day."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.08} className="h-full">
            <article className="group flex h-full flex-col rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-card-lg md:p-7">
              <div className="flex items-center justify-between text-sm text-muted">
                <span className="eyebrow">{project.kind}</span>
                <span className="font-mono text-xs">{project.period}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.025em] text-foreground">
                {project.name}
              </h3>
              <p className="mt-2 font-medium text-ink-2">{project.summary}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{project.detail}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.technology.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-6">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-accent-ink"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">Smaller builds</h3>
        <ul className="mt-5 divide-y divide-border border-y border-border">
          {sideProjects.map((project) => (
            <li key={project.id}>
              <a
                href={project.href ?? undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-2 py-5 transition-colors sm:grid-cols-[7rem_12rem_1fr_auto] sm:items-center sm:gap-6"
              >
                <span className="font-mono text-xs text-muted">{project.period}</span>
                <span className="font-semibold text-foreground transition-colors group-hover:text-accent-ink">
                  {project.name}
                </span>
                <span className="text-sm text-muted">{project.summary}</span>
                <span className="flex flex-wrap items-center gap-1.5 sm:justify-end">
                  {project.technology.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                  <ArrowUpRight className="ml-1 hidden size-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground sm:block" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
