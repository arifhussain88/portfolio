"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { metricHighlight } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export function MetricSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const beforeRef = useRef<HTMLSpanElement>(null);
  const afterRef = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(beforeRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(arrowRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -20,
        duration: 0.6,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(afterRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      aria-label="Performance highlight"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-border bg-surface/50 p-8 backdrop-blur-sm md:p-16">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Headline achievement
          </p>

          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10">
            <span
              ref={beforeRef}
              className="font-display text-6xl font-bold md:text-8xl"
              style={{ color: "var(--color-metric-from)" }}
            >
              {metricHighlight.before}
            </span>

            <div ref={arrowRef} className="flex items-center gap-2">
              <div className="h-px w-12 bg-border md:w-20" />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="text-accent"
                aria-hidden="true"
              >
                <path
                  d="M6 16h20M20 10l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="h-px w-12 bg-border md:w-20" />
            </div>

            <span
              ref={afterRef}
              className="font-display text-6xl font-bold glow-accent md:text-8xl"
              style={{ color: "var(--color-metric-to)" }}
            >
              {metricHighlight.after}
            </span>
          </div>

          <div className="mt-10 text-center">
            <h3 className="font-display text-xl font-semibold text-foreground md:text-2xl">
              {metricHighlight.title}
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {metricHighlight.description}
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {metricHighlight.context}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
