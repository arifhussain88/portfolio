"use client";

/* eslint-disable @next/next/no-img-element -- static export with unoptimized images; plain <img> keeps basePath control */

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Screenshot } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";

/** Bento grid of screenshots that open in a full-screen viewer. */
export function ScreenGallery({ screens, label }: { screens: Screenshot[]; label: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const show = (i: number) => {
    returnFocus.current = document.activeElement as HTMLElement;
    setOpen(i);
  };
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + screens.length) % screens.length)),
    [screens.length],
  );

  useEffect(() => {
    if (open === null) {
      returnFocus.current?.focus();
      return;
    }
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = open === null ? null : screens[open];

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {screens.map((shot, i) => (
          <Reveal
            key={shot.src}
            delay={Math.min(i, 5) * 0.05}
            className={`h-full ${i === 0 ? "col-span-2 md:row-span-2" : i === 1 ? "col-span-2" : ""}`}
          >
            <button
              type="button"
              onClick={() => show(i)}
              className="group relative block h-full w-full cursor-zoom-in overflow-hidden rounded-2xl border border-border bg-surface text-left shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card-lg"
              aria-label={`Open screenshot: ${shot.title}`}
            >
              <img
                src={shot.src}
                alt={`${label}: ${shot.title}`}
                width={shot.width}
                height={shot.height}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.02] ${
                  i === 0 ? "aspect-[16/10] md:h-full md:aspect-auto" : "aspect-[16/10]"
                }`}
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-3 pt-8 pb-2.5 text-xs font-medium text-white md:px-4 md:text-sm">
                {shot.title}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {current && open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${label} screenshot: ${current.title}`}
            className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-sm"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3 text-white md:px-8 md:py-5">
              <p className="font-mono text-xs text-white/60">
                {open + 1} / {screens.length}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="cursor-pointer rounded-full border border-white/20 px-4 py-1.5 text-sm hover:bg-white/10"
              >
                Close ✕
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 md:px-20">
              <motion.img
                key={current.src}
                src={current.src}
                alt={`${label}: ${current.title}`}
                width={current.width}
                height={current.height}
                className="max-h-full w-auto max-w-full rounded-xl object-contain shadow-2xl"
                initial={reduce ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              />
              <button
                type="button"
                aria-label="Previous screenshot"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                className="absolute left-6 hidden size-11 cursor-pointer place-items-center rounded-full bg-white/10 text-xl text-white hover:bg-white/20 md:grid"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next screenshot"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                className="absolute right-6 hidden size-11 cursor-pointer place-items-center rounded-full bg-white/10 text-xl text-white hover:bg-white/20 md:grid"
              >
                ›
              </button>
            </div>

            <div className="px-4 py-4 text-center text-white md:py-6" onClick={(e) => e.stopPropagation()}>
              <p className="font-semibold">{current.title}</p>
              <p className="mt-1 text-sm text-white/70">{current.caption}</p>
              <div className="mt-4 flex justify-center gap-3 md:hidden">
                <button
                  type="button"
                  aria-label="Previous screenshot"
                  onClick={() => step(-1)}
                  className="grid size-11 cursor-pointer place-items-center rounded-full bg-white/10 text-xl"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next screenshot"
                  onClick={() => step(1)}
                  className="grid size-11 cursor-pointer place-items-center rounded-full bg-white/10 text-xl"
                >
                  ›
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
