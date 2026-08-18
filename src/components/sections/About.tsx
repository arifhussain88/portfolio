"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutContent } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="About"
          title="Build. Improve. Scale. Maintain."
          description={aboutContent.summary}
        />

        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
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
              className="grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {aboutContent.pillars.map((pillar, i) => (
                <div
                  key={pillar}
                  className="group rounded-xl border border-border bg-surface p-4 transition-all hover:border-accent/30 hover:bg-surface-elevated"
                >
                  <span className="font-mono text-xs text-accent">
                    0{i + 1}
                  </span>
                  <p className="mt-2 font-display text-lg font-semibold text-foreground">
                    {pillar}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto h-48 w-48 shrink-0 overflow-hidden rounded-2xl border border-border md:h-56 md:w-56"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/headshot.jpg"
              alt="Arif Hussain"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 224px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
