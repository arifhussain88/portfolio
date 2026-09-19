"use client";

import { motion } from "framer-motion";
import { aboutContent, siteConfig } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function About() {
  const pillarDetails = [
    { title: "Build", subtitle: "Full-Stack Web Systems", desc: "Crafting end-to-end architectures from scalable Laravel/Node APIs to reactive Vue/React interfaces." },
    { title: "Improve", subtitle: "Performance & Refactoring", desc: "Profiling slow queries, eradicating N+1 bottlenecks, and modernizing legacy codebases under load." },
    { title: "Scale", subtitle: "Caching & Infrastructure", desc: "Deploying Redis clusters, database indexing strategies, and AWS cloud services for concurrent users." },
    { title: "Maintain", subtitle: "Reliability & DevOps", desc: "Setting up automated CI/CD pipelines, Docker containerization, monitoring, and zero-downtime deploys." },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Engineering Philosophy"
          title="Build. Improve. Scale. Maintain."
          description={aboutContent.summary}
        />

        <div className="grid items-start gap-12 lg:grid-cols-[1fr_320px]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p
              variants={staggerItem}
              className="mb-8 text-base leading-relaxed text-muted md:text-lg"
            >
              {aboutContent.detail}
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {pillarDetails.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="group rounded-xl border border-border bg-surface p-5 shadow-xs transition-all hover:border-accent hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-accent">
                      0{i + 1}
                    </span>
                    <span className="font-mono text-[11px] text-muted-foreground uppercase">
                      Pillar
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="font-mono text-xs font-medium text-slate-500 mt-0.5">
                    {pillar.subtitle}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Identity & Highlights Card */}
          <motion.div
            className="flex flex-col items-center rounded-2xl border border-border bg-surface p-6 shadow-xs"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-accent via-accent-dim to-slate-900 text-white font-display text-3xl font-bold shadow-md shadow-accent/20">
              AH
            </div>
            <div className="mt-5 text-center w-full">
              <h4 className="font-display text-lg font-bold text-foreground">
                {siteConfig.name}
              </h4>
              <p className="font-mono text-xs text-muted-foreground mt-0.5">
                {siteConfig.title}
              </p>

              <div className="mt-5 space-y-2 border-t border-border pt-4 text-left text-xs font-mono text-muted">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience:</span>
                  <span className="font-semibold text-foreground">8+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Focus:</span>
                  <span className="font-semibold text-foreground">Full-Stack / Core</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-semibold text-foreground">Karachi (Remote)</span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-800">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                Available for Senior Roles
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
