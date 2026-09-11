"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !timelineRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
          end: "bottom 65%",
          scrub: 1,
        },
        scaleY: 0,
        transformOrigin: "top",
      });

      const items = timelineRef.current?.querySelectorAll("[data-timeline-item]");
      items?.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="section-padding bg-surface/50 border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Career Progression"
          title="Production Leadership & Architecture"
          description="Track record of leading technical initiatives, modernizing legacy systems, and delivering business-critical software."
        />

        <div ref={timelineRef} className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div
            ref={lineRef}
            className="absolute top-0 left-6 h-full w-[2px] bg-gradient-to-b from-accent via-slate-300 to-transparent md:left-8"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experience.map((entry) => (
              <div
                key={`${entry.company}-${entry.period}`}
                data-timeline-item
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline node */}
                <div className="absolute left-[17px] top-6 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-white ring-4 ring-accent/20 md:left-[25px]">
                  <div className="h-2.5 w-2.5 rounded-full bg-accent" />
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl border border-border bg-surface p-7 shadow-xs transition-all hover:border-accent/40 hover:shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border pb-4">
                    <div>
                      <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                        {entry.role}
                      </span>
                      <h3 className="font-display text-xl font-bold text-foreground mt-0.5">
                        {entry.company}
                      </h3>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <span className="rounded-full bg-surface-elevated px-3 py-1 font-mono text-xs font-medium text-slate-700">
                        {entry.period}
                      </span>
                      {entry.location && (
                        <span className="text-[11px] font-mono text-muted-foreground mt-1">
                          {entry.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 space-y-2.5">
                    {entry.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 text-sm text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span className="leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
