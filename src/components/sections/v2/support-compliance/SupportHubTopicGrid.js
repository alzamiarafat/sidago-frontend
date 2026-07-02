"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiLayers } from "react-icons/fi";
import {
  fadeUp,
  stagger,
  transitionQuick,
} from "@/src/components/sections/v2/support-compliance/motion";

/**
 * Responsive topic grid — borderless glass surfaces, spacing-based rhythm.
 */
export default function SupportHubTopicGrid({ items, resolveIcon }) {
  const reduce = useReducedMotion();

  if (items.length === 0) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-3xl bg-white/[0.035] py-12 text-center text-[0.8125rem] text-white/42 shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-md"
      >
        No matches—try another search.
      </motion.p>
    );
  }

  return (
    <motion.div
      key={items.map((c) => c.id).join("|")}
      className="grid grid-cols-2 gap-4 sm:gap-5"
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      {items.map((cat) => {
        const Icon = resolveIcon(cat.id) ?? FiLayers;
        return (
          <motion.div
            key={cat.id}
            variants={fadeUp}
            transition={reduce ? { duration: 0 } : undefined}
            className="min-h-0"
          >
            <Link
              href={cat.href}
              className="group/card relative block h-full rounded-3xl focus:outline-none focus-visible:ring-0"
            >
              <motion.div
                className="relative flex h-full min-h-[200px] flex-col overflow-hidden rounded-3xl bg-white/[0.055] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.42)] transition-[background-color,box-shadow,transform] duration-300 group-hover/card:bg-white/[0.08] group-hover/card:shadow-[0_28px_80px_rgba(0,0,0,0.5)] group-focus-visible/card:ring-2 group-focus-visible/card:ring-[#E7512F]/35 md:min-h-[210px] md:p-6"
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -4,
                        transition: transitionQuick,
                      }
                }
                transition={transitionQuick}
              >
                <div className="relative flex flex-1 flex-col">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E7512F]/10 text-[#E7512F] transition-all duration-300 group-hover/card:bg-[#E7512F]/16 group-hover/card:shadow-[0_0_28px_rgba(231,81,47,0.15)]">
                    <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden />
                  </span>
                  <h3 className="mt-3.5 max-w-full break-normal font-saans text-base font-medium tracking-tight text-white md:text-lg">
                    {cat.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-white/54 line-clamp-4 md:text-sm md:leading-snug">
                    {cat.body}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#E7512F]/95 transition-all duration-300 group-hover/card:gap-2">
                    Open request
                    <FiArrowUpRight
                      className="h-3 w-3 transition-transform duration-300 group-hover/card:-translate-y-px group-hover/card:translate-x-px"
                      aria-hidden
                    />
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
