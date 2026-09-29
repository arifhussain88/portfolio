"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { projects, sideProjects } from "@/lib/constants";
import type { Project } from "@/lib/types";

const ease = [0.16, 1, 0.3, 1] as const;

function ProjectBody({
  project,
  showTech = true,
}: {
  project: Project;
  showTech?: boolean;
}) {
  return (
    <div className="grid gap-6 pb-8 md:grid-cols-[minmax(0,40rem)_16rem] md:gap-12 md:pb-10">
      <p className="text-lg leading-relaxed text-foreground">{project.detail}</p>
      <div>
        {showTech && (
          <p className="text-sm leading-relaxed text-muted">
            {project.technology.join(" · ")}
          </p>
        )}
        {project.links.length > 0 && (
          <div className={`flex flex-col items-start gap-2 ${showTech ? "mt-4" : ""}`}>
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function Work() {
  const [openId, setOpenId] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="page-wrap py-24 md:py-32">
      <div className="max-w-2xl">
        <h2 className="font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          Selected work
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          The newest is a shop. The others are systems a company runs every day.
        </p>
      </div>

      {featured && (
        <article className="mt-14 border-t border-foreground pt-8 md:mt-20 md:pt-10">
          <h3>
            <button
              type="button"
              className="group w-full cursor-pointer text-left"
              aria-expanded={openId === featured.id}
              aria-controls={`${featured.id}-detail`}
              onClick={() => setOpenId(openId === featured.id ? null : featured.id)}
            >
              <span className="flex items-baseline justify-between gap-4 text-sm text-muted">
                <span className="font-display text-base italic">01</span>
                <span>{featured.period}</span>
              </span>
              <span className="mt-3 flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
                <span className="font-display text-[clamp(3.25rem,8vw,6.25rem)] leading-[0.92] font-medium tracking-[-0.03em] text-foreground transition-colors duration-300 group-hover:text-accent">
                  {featured.name}
                </span>
                <span className="mb-2 shrink-0 text-sm text-accent">
                  {openId === featured.id ? "Close" : "Read"}
                </span>
              </span>
              <span className="reading mt-5 block text-xl leading-snug text-foreground">
                {featured.summary}
              </span>
            </button>
          </h3>
          <p className="mt-4 text-sm text-muted">{featured.technology.join(" · ")}</p>
          <AnimatePresence initial={false}>
            {openId === featured.id && (
              <motion.div
                id={`${featured.id}-detail`}
                key={featured.id}
                initial={reduce ? false : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={reduce ? undefined : { height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease }}
                className="overflow-hidden"
              >
                <div className="pt-8">
                  <ProjectBody project={featured} showTech={false} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </article>
      )}

      <div className="mt-6 border-t border-border">
        {rest.map((project, index) => {
          const open = openId === project.id;
          const number = String(index + 2).padStart(2, "0");

          return (
            <article key={project.id} className="border-b border-border">
              <h3>
                <button
                  type="button"
                  className="group w-full cursor-pointer py-7 text-left md:py-8"
                  aria-expanded={open}
                  aria-controls={`${project.id}-detail`}
                  onClick={() => setOpenId(open ? null : project.id)}
                >
                  <span className="flex items-baseline justify-between gap-4 text-sm text-muted">
                    <span className="font-display italic">{number}</span>
                    <span>{project.period}</span>
                  </span>
                  <span className="mt-2 flex items-end justify-between gap-4">
                    <span className="font-display text-3xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent md:text-4xl">
                      {project.name}
                    </span>
                    <span className="shrink-0 text-sm text-accent">
                      {open ? "Close" : "Read"}
                    </span>
                  </span>
                  <span className="reading mt-2 block text-lg leading-snug text-foreground">
                    {project.summary}
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    id={`${project.id}-detail`}
                    key={project.id}
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduce ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease }}
                    className="overflow-hidden"
                  >
                    <ProjectBody project={project} />
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>

      <div className="mt-16 md:mt-24">
        <h3 className="font-display text-2xl font-medium italic text-foreground">
          Smaller pieces
        </h3>
        <ul className="mt-6 border-t border-border">
          {sideProjects.map((project) => (
            <li key={project.id} className="border-b border-border py-4">
              <div className="grid gap-1 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-8">
                <span className="text-sm text-muted">{project.period}</span>
                <p className="text-lg leading-snug">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      {project.name}
                    </a>
                  ) : (
                    <span>{project.name}</span>
                  )}
                  <span className="text-muted"> — {project.summary}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
