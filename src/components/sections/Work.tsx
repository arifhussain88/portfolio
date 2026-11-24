"use client";

import { featuredProjects, flagshipProject, projects, sideProjects } from "@/lib/constants";
import type { FeaturedProject } from "@/lib/types";
import { ArrowUpRight, Reveal, SectionHeading } from "@/components/ui/Reveal";
import { ChalkbackPreview, NorthlinePreview } from "@/components/sections/Previews";
import { ScreenGallery } from "@/components/sections/ScreenGallery";

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
            New products, <span className="font-serif font-normal italic">shipped AI-first.</span>
          </>
        }
        description="An AI learning app and a store from catalog to checkout, both live. A React Native game is in closed testing on Google Play."
      />

      <div className="mt-14 space-y-8 md:mt-16 md:space-y-10">
        {featuredProjects.map((project, index) => (
          <FeaturedCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function Flagship() {
  const p = flagshipProject;
  return (
    <Reveal as="article">
      <div className="grid overflow-hidden rounded-[2rem] border border-border bg-surface shadow-card lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col p-7 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="eyebrow">{p.kind}</span>
            <span className="font-mono text-xs text-muted">
              {p.company} · {p.period}
            </span>
          </div>
          <h3 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-foreground md:text-5xl">{p.name}</h3>
          <p className="mt-3 text-xl leading-snug text-ink-2">{p.summary}</p>
          <p className="mt-5 leading-relaxed text-muted">{p.detail}</p>

          <dl
            className="mt-7 grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3"
            style={{ gap: "1px" }}
          >
            {p.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-3 bg-surface px-4 py-3 sm:flex-col-reverse sm:items-start sm:justify-end sm:p-4"
              >
                <dt className="text-xs text-muted sm:mt-1">{fact.label}</dt>
                <dd className="text-lg font-semibold tracking-tight text-foreground md:text-2xl">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <dl className="mt-7 space-y-2.5">
            {p.stack.map((group) => (
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

          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            {p.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                {link.label}
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border bg-surface-2 p-7 md:p-10 lg:border-t-0 lg:border-l">
          <p className="eyebrow">What it covers</p>
          <ol className="mt-5 space-y-3">
            {p.scope.map((item, i) => (
              <li key={item} className="flex gap-4 rounded-2xl border border-border bg-surface px-4 py-3.5">
                <span className="font-mono text-xs leading-6 text-accent-ink">{String(i + 1).padStart(2, "0")}</span>
                <span className="leading-6 text-ink-2">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Reveal>
  );
}

export function MoreWork() {
  return (
    <section id="projectcamp" className="page-wrap pb-24 md:pb-32">
      <SectionHeading eyebrow="In production" title="Systems companies rely on every day." />

      <div className="mt-12">
        <Flagship />
      </div>

      <div className="mt-8 md:mt-10">
        <Reveal className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">Inside ProjectCamp.io</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-foreground">
              Screens from the product
            </h3>
          </div>
          <p className="max-w-md text-sm text-muted">
            Client details are hidden; some screens show test data. Click any screen to enlarge.
          </p>
        </Reveal>
        <ScreenGallery screens={flagshipProject.screens} label={flagshipProject.name} />
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.08} className="h-full">
            <article className="flex h-full flex-col rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-card-lg md:p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="eyebrow">{project.kind}</span>
                <span className="font-mono text-xs text-muted">{project.period}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.025em] text-foreground">{project.name}</h3>
              <p className="mt-1 text-sm text-muted">{project.company}</p>
              <p className="mt-3 font-medium text-ink-2">{project.summary}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.detail}</p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {project.technology.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">Smaller builds</h3>
        <ul className="mt-5 divide-y divide-border border-y border-border">
          {sideProjects.map((project) => {
            const rowClass =
              "group grid gap-2 py-5 sm:grid-cols-[7rem_12rem_1fr_auto] sm:items-center sm:gap-6";
            const row = (
              <>
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
                  {project.href ? (
                    <ArrowUpRight className="ml-1 hidden size-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground sm:block" />
                  ) : (
                    <span className="ml-1 hidden size-4 sm:block" aria-hidden="true" />
                  )}
                </span>
              </>
            );
            return (
              <li key={project.id}>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className={rowClass}>
                    {row}
                  </a>
                ) : (
                  <div className={rowClass}>{row}</div>
                )}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
