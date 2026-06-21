"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiCpu, FiCreditCard, FiLayers, FiSearch, FiUser } from "react-icons/fi";
import SupportHubTopicGrid from "@/src/components/sections/v2/support-compliance/SupportHubTopicGrid";
import { helpCategories } from "@/src/components/sections/v2/support-compliance/data";
import { fadeUp, transitionQuick, viewportOnce } from "@/src/components/sections/v2/support-compliance/motion";

const categoryIcons = {
  technical: FiCpu,
  billing: FiCreditCard,
  general: FiLayers,
  account: FiUser,
};

export default function SupportHelpHub({ helpCategories: categories = helpCategories }) {
  const [query, setQuery] = useState("");
  const searchInputRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return categories;
    }
    return categories.filter(
      (c) =>
        c.title.toLowerCase().includes(q) || c.body.toLowerCase().includes(q),
    );
  }, [categories, query]);

  return (
    <section
      id="support-hub"
      className="relative scroll-mt-24 overflow-hidden bg-[#151916] py-14 text-gray-off-white sm:py-16 md:py-20"
    >
      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <header className="max-w-3xl">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-white/42">
              Support
            </p>
            <h2
              className="mt-2.5 max-w-full font-saans font-semibold text-white normal-case break-normal text-[2rem] leading-[1.12] tracking-[-0.02em] sm:text-[2.5rem] sm:leading-[1.1] lg:text-[3rem] lg:leading-[1.08] xl:text-[3.5rem] xl:leading-[1.05]"
              style={{ wordBreak: "normal", overflowWrap: "normal" }}
            >
              How can we help?
            </h2>
            <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-white/55 sm:text-base">
              Browse the topics below and open a request when you are ready—we will route it to the right team.
            </p>
          </header>

          <div className="mt-8 sm:mt-9 lg:mt-10">
            <label
              htmlFor="support-search"
              className="mb-2.5 block font-mono text-[0.5625rem] uppercase tracking-[0.24em] text-white/40"
            >
              Filter topics
            </label>
            <div className="group/search relative w-full px-0.5 pt-0.5">
              <div className="relative flex w-full min-h-[3.25rem] items-stretch overflow-hidden rounded-3xl bg-white/[0.06] shadow-[0_16px_48px_rgba(0,0,0,0.38)] md:min-h-[3.5rem]">
                <div className="flex shrink-0 items-center justify-center self-stretch pl-3.5 md:pl-4">
                  <button
                    type="button"
                    tabIndex={-1}
                    className="flex h-9 w-9 shrink-0 cursor-text items-center justify-center rounded-xl border-0 bg-[#E7512F]/10 p-0 text-[#E7512F] transition-colors duration-300 group-focus-within/search:bg-[#E7512F]/14"
                    aria-label="Focus search"
                    onMouseUp={() => {
                      searchInputRef.current?.focus();
                    }}
                  >
                    <FiSearch
                      className="block h-[0.9375rem] w-[0.9375rem] shrink-0"
                      strokeWidth={1}
                      aria-hidden
                    />
                  </button>
                </div>
                <input
                  ref={searchInputRef}
                  id="support-search"
                  type="search"
                  name="support-topic-query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by topic, e.g. billing, API, access…"
                  className="min-w-0 flex-1 self-center border-0 bg-transparent py-3 pr-4 pl-2 text-[0.9375rem] leading-normal text-white caret-[#E7512F] placeholder:text-white/30 outline-none md:py-3.5 md:pr-5 md:pl-2.5 md:text-base"
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={transitionQuick}
            className="mt-8 sm:mt-9 lg:mt-10"
          >
            <SupportHubTopicGrid
              items={filtered}
              resolveIcon={(id) => categoryIcons[id]}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
