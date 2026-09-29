"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { experience } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

export function Experience() {
  const [openCompany, setOpenCompany] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="border-t border-border">
      <div className="page-wrap py-24 md:py-32">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Experience
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Three companies. Open a name for what the job actually was.
          </p>
        </div>

        <div className="mt-12 border-t border-border">
          {experience.map((entry) => {
            const open = openCompany === entry.company;
            const panelId = `${entry.company.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-story`;

            return (
              <article key={entry.company} className="border-b border-border">
                <h3>
                  <button
                    type="button"
                    className="group w-full cursor-pointer py-7 text-left md:py-8"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenCompany(open ? null : entry.company)}
                  >
                    <span className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between md:gap-10">
                      <span className="font-display text-3xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent md:text-4xl">
                        {entry.company}
                      </span>
                      <span className="shrink-0 text-sm text-muted">{entry.years}</span>
                    </span>
                    <span className="mt-2 flex items-baseline justify-between gap-4">
                      <span className="reading text-lg leading-snug text-foreground">
                        {entry.summary}
                      </span>
                      <span className="shrink-0 text-sm text-accent">
                        {open ? "Close" : "Read"}
                      </span>
                    </span>
                    <span className="mt-2 block text-sm text-muted">{entry.location}</span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={panelId}
                      key={panelId}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-8 pb-8 md:max-w-2xl">
                        {entry.roles.map((role) => (
                          <div key={`${entry.company}-${role.period}`}>
                            <p className="text-sm text-muted">
                              {role.role}
                              <span className="px-2" aria-hidden="true">
                                ·
                              </span>
                              {role.period}
                            </p>
                            <p className="mt-2 text-lg leading-relaxed text-foreground">
                              {role.story}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
