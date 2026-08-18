"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { TiltCard } from "@/components/ui/TiltCard";

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Skills"
          title="Full-stack capability, backend depth"
          description="Grouped by domain — strongest areas carry more visual weight."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skillGroups.map((group) => (
            <motion.div key={group.id} variants={staggerItem}>
              <TiltCard className="h-full p-8" intensity={10}>
                <h3 className="mb-6 font-display text-2xl font-bold gradient-text-animated">
                  {group.label}
                </h3>

                <div className="mb-6 flex flex-wrap gap-2">
                  {group.highlight.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-accent/15 px-4 py-1.5 text-sm font-semibold text-accent shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items
                    .filter((item) => !group.highlight.includes(item))
                    .map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border-subtle bg-surface-elevated/50 px-3 py-1 text-sm text-muted backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
