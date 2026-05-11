"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { transitionQuick } from "@/src/components/sections/v2/support-compliance/motion";

/**
 * Range + prev/next with animated clause switching (distinct from accordion-only UIs).
 */
export default function ComplianceClauseSlider({ sections, tabId }) {
  const reduce = useReducedMotion();
  const [ix, setIx] = useState(0);
  const max = Math.max(0, sections.length - 1);

  const sec = sections[ix] ?? sections[0];
  if (!sec) {
    return null;
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label="Previous clause"
            disabled={ix <= 0}
            onClick={() => setIx((i) => Math.max(0, i - 1))}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] text-white transition hover:bg-white/[0.14] disabled:pointer-events-none disabled:opacity-30"
          >
            <FiChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next clause"
            disabled={ix >= max}
            onClick={() => setIx((i) => Math.min(max, i + 1))}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] text-white transition hover:bg-white/[0.14] disabled:pointer-events-none disabled:opacity-30"
          >
            <FiChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="min-w-0 flex-1">
          <label
            htmlFor={`clause-range-${tabId}`}
            className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/38"
          >
            Clause navigator
          </label>
          <input
            id={`clause-range-${tabId}`}
            type="range"
            min={0}
            max={max}
            value={ix}
            onChange={(e) => setIx(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/[0.08] accent-[#E7512F] [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#E7512F] [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(231,81,47,0.5)]"
          />
        </div>

        <p className="shrink-0 text-right font-mono text-[0.65rem] tabular-nums text-white/40">
          {ix + 1} / {sections.length}
        </p>
      </div>

      <div className="relative min-h-[200px] overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.07] to-transparent p-8 shadow-[0_24px_70px_rgba(0,0,0,0.4)] md:p-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${tabId}-${ix}-${sec.title}`}
            initial={{ opacity: 0, x: reduce ? 0 : 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reduce ? 0 : -22 }}
            transition={reduce ? { duration: 0 } : transitionQuick}
          >
            <h4 className="font-blender text-xl tracking-tight text-white md:text-2xl">
              {sec.title}
            </h4>
            <p className="mt-5 text-sm leading-relaxed text-white/55 md:text-base">
              {sec.body}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
