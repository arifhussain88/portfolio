"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { metricHighlight } from "@/lib/constants";

export function MetricSection() {
  const [activeTab, setActiveTab] = useState<"optimized" | "legacy">("optimized");

  const legacyMetrics = [
    { name: "Full Table Scan & Joins (No Index)", time: "44,200 ms", percentage: 88, color: "bg-red-500" },
    { name: "PHP Eloquent Hydration (Uncached)", time: "4,600 ms", percentage: 9, color: "bg-red-400" },
    { name: "JSON Serialization & Transfer", time: "1,200 ms", percentage: 3, color: "bg-red-300" },
  ];

  const optimizedMetrics = [
    { name: "Composite B-Tree Indexed Query", time: "38 ms", percentage: 20, color: "bg-emerald-600" },
    { name: "Redis In-Memory Key Cache Hit", time: "8 ms", percentage: 5, color: "bg-emerald-500" },
    { name: "Streamed Optimized Payload", time: "154 ms", percentage: 75, color: "bg-emerald-400" },
  ];

  const architecturalWins = [
    {
      title: "Strategic Composite Indexes",
      desc: "Eliminated full-table scans across 2M+ records with compound indexes on tenant_id, date, and status.",
    },
    {
      title: "Multi-Tier Redis Caching",
      desc: "Cached aggregated analytical payloads with automated cache invalidation on sales event ingestion.",
    },
    {
      title: "Query Pipeline Refactoring",
      desc: "Replaced N+1 ORM hydration loops with raw indexed SQL aggregates and cursor-based pagination.",
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-surface/50 border-y border-border" aria-label="Performance highlight">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Systems Architecture Case Study
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              From 50-Second Timeout to Sub-Second Realtime
            </h2>
            <p className="mt-2 max-w-2xl text-muted text-base">
              {metricHighlight.description}
            </p>
          </div>

          <div className="inline-flex rounded-xl border border-border bg-surface p-1 shadow-xs">
            <button
              onClick={() => setActiveTab("optimized")}
              className={`rounded-lg px-4 py-2 text-xs font-mono font-medium transition-all ${
                activeTab === "optimized"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "text-muted hover:text-foreground"
              }`}
            >
              ✓ Optimized (200ms)
            </button>
            <button
              onClick={() => setActiveTab("legacy")}
              className={`rounded-lg px-4 py-2 text-xs font-mono font-medium transition-all ${
                activeTab === "legacy"
                  ? "bg-red-600 text-white shadow-xs"
                  : "text-muted hover:text-foreground"
              }`}
            >
              ⚠ Legacy State (50s)
            </button>
          </div>
        </div>

        {/* Main Interactive Benchmark Card */}
        <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
            {/* Latency Pipeline Visualizer */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    {activeTab === "optimized" ? "Production Response Profile" : "Legacy Bottleneck Profile"}
                  </span>
                  <div className="mt-1 flex items-baseline gap-3">
                    <span
                      className={`font-display text-5xl font-extrabold tracking-tight ${
                        activeTab === "optimized" ? "text-emerald-600" : "text-red-600"
                      }`}
                    >
                      {activeTab === "optimized" ? "200 ms" : "50.0 s"}
                    </span>
                    <span className="font-mono text-sm text-muted-foreground">
                      {activeTab === "optimized" ? "⚡ 250x Speedup" : "🐌 DB Connection Exhaustion"}
                    </span>
                  </div>
                </div>

                <span className="rounded-full border border-border bg-surface-elevated px-3 py-1 font-mono text-xs font-medium text-foreground">
                  {metricHighlight.context}
                </span>
              </div>

              {/* Progress visualizer */}
              <div className="space-y-4 pt-2">
                <AnimatePresence mode="wait">
                  {activeTab === "optimized" ? (
                    <motion.div
                      key="optimized"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      {optimizedMetrics.map((m) => (
                        <div key={m.name} className="space-y-1.5">
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-foreground font-medium">{m.name}</span>
                            <span className="text-emerald-700 font-bold">{m.time}</span>
                          </div>
                          <div className="h-2.5 w-full rounded-full bg-surface-elevated overflow-hidden border border-border/50">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${m.percentage}%` }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                              className={`h-full rounded-full ${m.color}`}
                            />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="legacy"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      {legacyMetrics.map((m) => (
                        <div key={m.name} className="space-y-1.5">
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-foreground font-medium">{m.name}</span>
                            <span className="text-red-700 font-bold">{m.time}</span>
                          </div>
                          <div className="h-2.5 w-full rounded-full bg-surface-elevated overflow-hidden border border-border/50">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${m.percentage}%` }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                              className={`h-full rounded-full ${m.color}`}
                            />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Architecture Highlights side panel */}
            <div className="rounded-xl border border-border bg-surface-elevated/70 p-6 flex flex-col justify-between">
              <div>
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                  Architecture Interventions
                </h4>
                <div className="mt-4 space-y-4">
                  {architecturalWins.map((win, idx) => (
                    <div key={win.title} className="text-xs">
                      <div className="flex items-center gap-2 font-semibold text-foreground">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] text-white">
                          {idx + 1}
                        </span>
                        {win.title}
                      </div>
                      <p className="mt-1 text-muted leading-relaxed pl-6">
                        {win.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-border pt-4">
                <span className="font-mono text-[11px] text-muted-foreground block">
                  Impact: Unlocked realtime executive dashboards &amp; cut database CPU load by 78%.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
