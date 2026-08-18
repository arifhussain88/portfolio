"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

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
          start: "top 70%",
          end: "bottom 60%",
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
          x: -30,
          duration: 0.6,
          ease: "power3.out",
        });
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="section-padding bg-surface/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Experience"
          title="Production ownership across the stack"
          description="Technical decision-making, architecture, mentoring, and hands-on delivery."
        />

        <div ref={timelineRef} className="relative mt-16">
          <div
            ref={lineRef}
            className="absolute top-0 left-[20px] h-full w-[2px] bg-gradient-to-b from-accent via-accent-secondary to-transparent md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experience.map((entry, index) => (
              <div
                key={`${entry.company}-${entry.period}`}
                data-timeline-item
                className={`relative flex flex-col gap-4 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden flex-1 md:block" />

                <div className="absolute left-[2px] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background md:left-1/2 md:-translate-x-1/2">
                  <div className="h-4 w-4 rounded-full bg-accent shadow-[0_0_20px_rgba(139,92,246,0.8)]" />
                </div>

                <div
                  className={`flex-1 pl-16 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <TiltCard className="p-8 md:p-10" intensity={5}>
                    <p className="font-mono text-sm uppercase tracking-widest text-accent-secondary">
                      {entry.period}
                    </p>
                    <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
                      {entry.role}
                    </h3>
                    <p className="mt-2 text-lg text-muted">
                      {entry.company}
                    </p>
                    <div className={`mt-8 space-y-4 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                      {entry.highlights.map((highlight) => (
                        <p
                          key={highlight.slice(0, 40)}
                          className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                          {highlight}
                        </p>
                      ))}
                    </div>
                  </TiltCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
