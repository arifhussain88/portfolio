"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function Skills() {
  const layerMeta: Record<string, { subtitle: string; icon: string }> = {
    build: { subtitle: "Frameworks, Runtimes & Full-Stack Tools", icon: "⚡" },
    data: { subtitle: "Relational, In-Memory & Document Stores", icon: "🗄️" },
    cloud: { subtitle: "Containers, Compute & Infrastructure", icon: "☁️" },
  };

  return (
    <section id="skills" className="section-padding bg-surface/50 border-y border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Technical Capability"
          title="Full-Stack Breadth, Backend & Architecture Depth"
          description="Categorized by system layer — prioritized by battle-tested production usage."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skillGroups.map((group) => {
            const meta = layerMeta[group.id] || { subtitle: "Engineering Domain", icon: "⚙️" };
            return (
              <motion.div
                key={group.id}
                variants={staggerItem}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 shadow-xs transition-all hover:border-accent/60 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl" aria-hidden="true">
                      {meta.icon}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-0.5 rounded-full">
                      {group.label} Tier
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                    {group.label}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {meta.subtitle}
                  </p>

                  {/* Highlighted primary skills */}
                  <div className="mt-6 space-y-2">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block">
                      Core Strengths
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {group.highlight.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg bg-accent px-3 py-1 text-xs font-semibold text-white shadow-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Supporting skills */}
                  <div className="mt-5 space-y-2">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block">
                      Production Tooling
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items
                        .filter((item) => !group.highlight.includes(item))
                        .map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg border border-border bg-surface-elevated/70 px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-border pt-4">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Production Ready &amp; Maintained
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
