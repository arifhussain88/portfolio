"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp } from "@/lib/motion";
import { getAssetPath } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current || !scrollRef.current) return;

    const timer = setTimeout(() => {
      const scrollElement = scrollRef.current;
      if (!scrollElement) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top 12%",
          end: () => `+=${scrollElement.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
        },
      });

      tl.to(scrollElement, {
        x: () => -(scrollElement.scrollWidth - window.innerWidth + 120),
        ease: "none",
      });

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }, 120);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="work" className="section-padding overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 mb-12">
        <SectionHeading
          label="Production Case Studies"
          title="Selected Engineering Work"
          description="High-scale applications, enterprise CRMs, and APIs delivered for production environments."
        />
      </div>

      {/* Horizontal Scroll Area for Featured Projects */}
      <div ref={containerRef} className="relative h-[82vh] w-full max-h-[850px] min-h-[620px] hidden md:block">
        <div ref={scrollRef} className="absolute top-0 left-0 flex h-full items-center gap-10 px-[10vw]">
          {featured.map((project, index) => (
            <div key={project.id} className="relative w-[82vw] max-w-[1050px] shrink-0">
              <div className="rounded-2xl border border-border bg-surface p-8 h-[62vh] max-h-[640px] flex gap-8 items-center shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-1 space-y-5 overflow-y-auto pr-2">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      {index === 0 && (
                        <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-semibold text-accent">
                          ★ Primary Case Study
                        </span>
                      )}
                      <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                        {project.period}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl font-bold text-foreground">
                      {project.name}
                    </h3>
                  </div>

                  <div className="space-y-3 text-sm text-muted">
                    <div className="rounded-xl border border-border/80 bg-surface-elevated/60 p-3.5">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                        Problem
                      </span>
                      <p className="text-foreground/90">{project.problem}</p>
                    </div>

                    <div className="rounded-xl border border-border/80 bg-surface-elevated/60 p-3.5">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-accent block mb-1">
                        Architecture &amp; Solution
                      </span>
                      <p className="text-foreground/90">{project.solution}</p>
                    </div>

                    <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/60 p-3.5">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                        Measurable Impact
                      </span>
                      <p className="text-emerald-950 font-medium">{project.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technology.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-surface-elevated px-2.5 py-1 font-mono text-xs text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <div className="pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dim transition-colors"
                      >
                        Visit Production Deployment
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path
                            d="M3 11L11 3M11 3H5M11 3v6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>

                {project.images.length > 0 && (
                  <div className="flex-1 relative h-full w-full rounded-xl overflow-hidden border border-border bg-slate-100 shadow-xs">
                    <Image
                      src={getAssetPath(project.images[0])}
                      alt={project.name}
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                      sizes="50vw"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Stack for Featured Projects */}
      <div className="md:hidden flex flex-col gap-8 px-6">
        {featured.map((project) => (
          <div key={project.id} className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            {project.images.length > 0 && (
              <div className="relative h-48 w-full rounded-xl overflow-hidden border border-border bg-slate-100 mb-5">
                <Image
                  src={getAssetPath(project.images[0])}
                  alt={project.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
            )}
            <span className="font-mono text-xs text-muted-foreground uppercase">{project.period}</span>
            <h3 className="font-display text-2xl font-bold text-foreground mt-1">{project.name}</h3>
            
            <div className="mt-4 space-y-3 text-sm">
              <p><strong className="text-red-600 font-mono text-xs">Problem:</strong> {project.problem}</p>
              <p><strong className="text-accent font-mono text-xs">Solution:</strong> {project.solution}</p>
              <p className="rounded-lg bg-emerald-50 p-2 text-emerald-900"><strong className="text-emerald-800 font-mono text-xs">Impact:</strong> {project.result}</p>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.technology.slice(0, 5).map((tech) => (
                <span key={tech} className="rounded bg-surface-elevated px-2 py-0.5 text-xs text-muted">
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
              >
                View Live Site
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Other Projects Grid */}
      <div className="mx-auto max-w-6xl px-6 mt-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Additional Production Systems
            </h3>
            <p className="text-sm text-muted mt-1">
              Diverse SaaS platforms, CRM backends, APIs, and client portals.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-xs transition-all hover:border-accent hover:shadow-sm hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div className="h-9 w-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.period}
                  </span>
                </div>

                <h4 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.name}
                </h4>
                <p className="text-xs text-muted leading-relaxed line-clamp-3 mb-4">
                  {project.solution}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technology.map((tech) => (
                    <span key={tech} className="text-[11px] font-mono text-slate-600 bg-surface-elevated px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.link && (
                <div className="border-t border-border pt-3 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-dim transition-colors"
                  >
                    View Project
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
