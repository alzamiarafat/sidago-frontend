"use client";

import { useMemo, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  FiActivity,
  FiCpu,
  FiCreditCard,
  FiLayers,
  FiSearch,
  FiUser,
} from "react-icons/fi";
import SupportHubCategoryCarousel from "@/src/components/sections/v2/support-compliance/SupportHubCategoryCarousel";
import { helpCategories } from "@/src/components/sections/v2/support-compliance/data";
import {
  fadeIn,
  springSnappy,
  transitionQuick,
  viewportOnce,
} from "@/src/components/sections/v2/support-compliance/motion";

const categoryIcons = {
  technical: FiCpu,
  billing: FiCreditCard,
  general: FiLayers,
  account: FiUser,
};

const HUB_TABS = [
  { id: "browse", label: "Topics" },
  { id: "contact", label: "Message" },
];

function SoftField() {
  return (
    <>
      <div
        className="pointer-events-none absolute -left-[20%] top-0 h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-[#E7512F]/[0.07] blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[15%] bottom-0 h-[min(55vw,420px)] w-[min(55vw,420px)] rounded-full bg-emerald-500/[0.04] blur-[90px]"
        aria-hidden
      />
    </>
  );
}

export default function SupportHelpHub() {
  const reduce = useReducedMotion();
  const [hubTab, setHubTab] = useState("browse");
  const [query, setQuery] = useState("");
  const [sent, setSent] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return helpCategories;
    }
    return helpCategories.filter(
      (c) =>
        c.title.toLowerCase().includes(q) || c.body.toLowerCase().includes(q),
    );
  }, [query]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 2400);
  };

  return (
    <section
      id="support-hub"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-[#0f1311] via-[#0c100e] to-[#080b09] px-4 py-14 text-gray-off-white sm:px-6 md:px-10 md:py-24"
    >
      <SoftField />
      <div className="container relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeIn}
            className="min-w-0 max-w-xl lg:max-w-none"
          >
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-white/55">
              Support
            </p>
            <h2 className="mt-4 font-blender text-[clamp(2rem,5vw,3.25rem)] font-normal leading-[0.95] tracking-tight text-white">
              How can we help?
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/70 md:text-base">
              Browse topics on the carousel or switch to Message to reach the
              team directly.
            </p>
          </motion.div>

          <LayoutGroup id="support-hub-segment">
            <div className="flex justify-start lg:justify-end">
              <div className="inline-flex rounded-full border border-white/12 bg-[#141918] p-1 shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
                {HUB_TABS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setHubTab(t.id)}
                    className={`relative rounded-full px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] transition md:min-w-[7.5rem] md:px-6 ${
                      hubTab === t.id
                        ? "text-white"
                        : "text-white/65 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {hubTab === t.id ? (
                      <motion.span
                        layoutId="supportHubSegmentPill"
                        className="absolute inset-0 rounded-full bg-[#E7512F] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                        transition={reduce ? { duration: 0 } : springSnappy}
                      />
                    ) : null}
                    <span className="relative z-10">{t.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </LayoutGroup>
        </div>

        <AnimatePresence mode="wait">
          {hubTab === "browse" ? (
            <motion.div
              key="browse"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={reduce ? { duration: 0 } : transitionQuick}
              className="mt-10 md:mt-12"
            >
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05, ...transitionQuick }}
                onSubmit={(e) => e.preventDefault()}
                className="relative mb-8 md:mb-10"
              >
                <label
                  htmlFor="support-search"
                  className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/50"
                >
                  Filter topics
                </label>
                <div className="relative rounded-xl border border-white/12 bg-[#161918] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <FiSearch className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/45" />
                  <input
                    id="support-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g. billing, API, access…"
                    className="w-full rounded-xl border-0 bg-transparent py-3.5 pl-12 pr-4 font-mono text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[#E7512F]/35 md:py-4 md:text-base"
                  />
                </div>
              </motion.form>

              <SupportHubCategoryCarousel
                key={filtered.map((c) => c.id).join("|")}
                items={filtered}
                resolveIcon={(id) => categoryIcons[id]}
              />
            </motion.div>
          ) : (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={reduce ? { duration: 0 } : transitionQuick}
              className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-start lg:gap-12"
            >
              <div className="flex flex-wrap items-center gap-6 rounded-xl border border-white/12 bg-[#161918] px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_16px_48px_rgba(0,0,0,0.35)]">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/50 opacity-50" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  <div>
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-white/50">
                      Status
                    </p>
                    <p className="text-sm font-medium text-white">All systems operational</p>
                  </div>
                </div>
                <span className="hidden h-8 w-px bg-white/10 sm:block" aria-hidden />
                <div className="font-mono text-xs text-white/55">
                  <FiActivity
                    className="mr-1.5 inline h-4 w-4 text-emerald-400/80"
                    aria-hidden
                  />
                  On-call line
                </div>
              </div>

              <div className="rounded-xl border border-white/12 bg-[#161918] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_16px_48px_rgba(0,0,0,0.35)] md:p-8">
                <div className="h-0.5 w-12 rounded-full bg-[#E7512F]" aria-hidden />
                <p className="mt-5 font-mono text-[0.6rem] uppercase tracking-[0.28em] text-white/50">
                  Message
                </p>
                <h3 className="mt-2 font-blender text-2xl tracking-tight text-white md:text-3xl">
                  Direct line
                </h3>
                <form className="mt-10 space-y-7" onSubmit={onSubmitForm}>
                  {[
                    {
                      id: "scf-name",
                      fieldName: "name",
                      type: "text",
                      label: "Name",
                    },
                    {
                      id: "scf-email",
                      fieldName: "email",
                      type: "email",
                      label: "Work email",
                    },
                    {
                      id: "scf-topic",
                      fieldName: "topic",
                      type: "text",
                      label: "Topic",
                    },
                  ].map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="mb-1.5 block font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/55"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        name={field.fieldName}
                        type={field.type}
                        required
                        className="w-full rounded-lg border border-white/10 bg-[#0f1211] px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#E7512F]/50 focus:outline-none focus:ring-1 focus:ring-[#E7512F]/25 md:text-base"
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      htmlFor="scf-message"
                      className="mb-1.5 block font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/55"
                    >
                      Message
                    </label>
                    <textarea
                      id="scf-message"
                      name="message"
                      rows={3}
                      required
                      className="w-full resize-none rounded-lg border border-white/10 bg-[#0f1211] px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#E7512F]/50 focus:outline-none focus:ring-1 focus:ring-[#E7512F]/25 md:text-base"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                    className="w-full bg-[#E7512F] py-3.5 font-blender text-sm uppercase tracking-[0.2em] text-white transition hover:bg-[#cf4526] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E7512F]"
                  >
                    {sent ? "Queued" : "Send"}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
