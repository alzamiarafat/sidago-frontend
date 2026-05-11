"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiLayers } from "react-icons/fi";
import {
  springSnappy,
  transitionQuick,
} from "@/src/components/sections/v2/support-compliance/motion";

/**
 * Full-width slide carousel driven by pixel-accurate track width.
 * Distinct from the site’s static card grids.
 */
export default function SupportHubCategoryCarousel({
  items,
  resolveIcon,
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [trackW, setTrackW] = useState(0);
  const viewportRef = useRef(null);

  const n = items.length;
  const slideIndex = n === 0 ? 0 : Math.min(Math.max(0, index), n - 1);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el || typeof ResizeObserver === "undefined") {
      return undefined;
    }
    const ro = new ResizeObserver(() => {
      setTrackW(el.offsetWidth);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [n]);

  if (n === 0) {
    return (
      <p className="py-12 text-center text-sm text-white/45">
        No matches—try another search.
      </p>
    );
  }

  const go = (dir) => {
    setIndex((i) => {
      const next = i + dir;
      if (next < 0) {
        return n - 1;
      }
      if (next >= n) {
        return 0;
      }
      return next;
    });
  };

  const xPx = trackW > 0 ? -slideIndex * trackW : 0;

  return (
    <div className="relative">
      <div
        ref={viewportRef}
        className="relative overflow-hidden rounded-2xl border border-white/14 bg-[#141918] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_64px_rgba(0,0,0,0.5)]"
      >
        <motion.div
          className="flex"
          animate={{ x: reduce ? 0 : xPx }}
          transition={reduce ? { duration: 0 } : transitionQuick}
        >
          {items.map((cat) => {
            const Icon = resolveIcon(cat.id) ?? FiLayers;
            return (
              <div
                key={cat.id}
                className="shrink-0 px-2 sm:px-3"
                style={{ width: trackW > 0 ? trackW : "100%" }}
              >
                <Link
                  href={cat.href}
                  className="flex h-full min-h-[300px] flex-col justify-between rounded-xl border border-white/10 bg-gradient-to-b from-[#1c2320] to-[#151a18] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-white/18 hover:from-[#222a26] hover:to-[#1a211e] md:min-h-[320px] md:p-10"
                >
                  <div>
                    <span className="inline-flex rounded-lg bg-[#E7512F]/15 p-2.5 ring-1 ring-[#E7512F]/25">
                      <Icon className="h-7 w-7 text-[#E7512F]" aria-hidden />
                    </span>
                    <h3 className="mt-6 font-blender text-2xl tracking-tight text-white md:text-3xl">
                      {cat.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-tradfi-silver md:text-base">
                      {cat.body}
                    </p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 font-mono text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[#E7512F]">
                    Open request
                    <span aria-hidden>→</span>
                  </span>
                </Link>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="mt-4 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/12 bg-[#161918] text-white shadow-sm transition hover:border-white/20 hover:bg-[#1c2220] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E7512F]"
            aria-label="Previous topic"
          >
            <FiChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/12 bg-[#161918] text-white shadow-sm transition hover:border-white/20 hover:bg-[#1c2220] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E7512F]"
            aria-label="Next topic"
          >
            <FiChevronRight className="h-5 w-5" />
          </button>
          <span className="font-mono text-xs tabular-nums text-white/50">
            {slideIndex + 1} / {n}
          </span>
        </div>

        <LayoutGroup id="support-carousel-dots">
          <div className="flex flex-wrap items-center justify-start gap-2 sm:justify-end">
            {items.map((cat, i) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setIndex(i)}
                className={`relative flex h-2.5 items-center justify-center rounded-full transition ${
                  i === slideIndex
                    ? "w-9 bg-white/20 ring-1 ring-white/25"
                    : "w-2.5 bg-white/30 hover:bg-white/45"
                }`}
                aria-label={`Show ${cat.title}`}
                aria-current={i === slideIndex ? "true" : undefined}
              >
                {i === slideIndex ? (
                  <motion.span
                    layoutId="supportCarouselDot"
                    className="absolute inset-0 rounded-full bg-[#E7512F]"
                    transition={reduce ? { duration: 0 } : springSnappy}
                  />
                ) : null}
              </button>
            ))}
          </div>
        </LayoutGroup>
      </div>
    </div>
  );
}
