"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp } from "@/lib/motion";
import { TiltCard } from "@/components/ui/TiltCard";

gsap.registerPlugin(ScrollTrigger);

export function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current || !scrollRef.current) return;

    // Wait a tick for layout calculation
    const timer = setTimeout(() => {
      const scrollElement = scrollRef.current;
      if (!scrollElement) return;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top 10%",
          end: () => `+=${scrollElement.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
        },
      });

      tl.to(scrollElement, {
        x: () => -(scrollElement.scrollWidth - window.innerWidth + 100), // extra padding
        ease: "none",
      });
      
      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="work" className="section-padding overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 mb-16">
        <SectionHeading
          label="Selected work"
          title="Engineering in Motion"
          description="A selection of featured projects focusing on large-scale web architecture."
        />
      </div>

      {/* Horizontal Scroll Area for Featured Projects */}
      <div ref={containerRef} className="relative h-[80vh] w-full max-h-[800px] min-h-[600px] hidden md:block">
        <div ref={scrollRef} className="absolute top-0 left-0 flex h-full items-center gap-12 px-[10vw]">
          {featured.map((project, index) => (
            <div key={project.id} className="relative w-[80vw] max-w-[1000px] shrink-0">
              <TiltCard className="p-8 h-[60vh] max-h-[600px] flex gap-8 items-center bg-surface-elevated/40" intensity={3}>
                <div className="flex-1 space-y-6">
                  <div>
                    {index === 0 && (
                      <span className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        Primary case study
                      </span>
                    )}
                    <h3 className="font-display text-4xl font-bold gradient-text-animated">
                      {project.name}
                    </h3>
                    <p className="mt-2 font-mono text-sm text-muted-foreground uppercase tracking-widest">
                      {project.period}
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-base text-muted">
                    <p><strong className="text-foreground">Problem:</strong> {project.problem}</p>
                    <p><strong className="text-foreground">Solution:</strong> {project.solution}</p>
                    <p><strong className="text-foreground">Result:</strong> <span className="text-accent-secondary">{project.result}</span></p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technology.map(tech => (
                      <span key={tech} className="rounded-full border border-border-subtle bg-background/50 px-3 py-1 text-xs text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-secondary pt-4"
                    >
                      Explore live
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                </div>

                {project.images.length > 0 && (
                  <div className="flex-1 relative h-full w-full rounded-xl overflow-hidden border border-white/5">
                    <Image
                      src={project.images[0]}
                      alt={project.name}
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                      sizes="50vw"
                    />
                  </div>
                )}
              </TiltCard>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Fallback for Featured Projects */}
      <div className="md:hidden flex flex-col gap-12 px-6">
        {featured.map((project) => (
          <div key={project.id} className="glass-card rounded-2xl p-6 border border-border">
             {project.images.length > 0 && (
                <div className="relative h-48 w-full rounded-xl overflow-hidden border border-white/5 mb-6">
                  <Image
                    src={project.images[0]}
                    alt={project.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              )}
              <h3 className="font-display text-2xl font-bold gradient-text">{project.name}</h3>
              <p className="mt-2 text-sm text-muted mb-4">{project.problem}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technology.slice(0, 4).map(tech => (
                  <span key={tech} className="rounded-full bg-surface-elevated px-2 py-1 text-xs text-muted">
                    {tech}
                  </span>
                ))}
              </div>
          </div>
        ))}
      </div>

      {/* Other Projects Grid */}
      <div className="mx-auto max-w-6xl px-6 mt-32">
        <h3 className="font-display text-3xl font-bold mb-10 text-foreground">More Projects</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card rounded-2xl p-6 transition-all hover:bg-surface-elevated/80 hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
              </div>
              <h4 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-accent-secondary transition-colors">
                {project.name}
              </h4>
              <p className="text-sm text-muted mb-6 h-10 overflow-hidden line-clamp-2">
                {project.solution}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technology.map(tech => (
                  <span key={tech} className="text-xs font-mono text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-secondary mt-auto"
                >
                  Visit Project
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
