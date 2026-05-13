"use client";

import { useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  fadeIn,
  fadeUp,
  springSnappy,
  stagger,
  transitionQuick,
  viewportOnce,
} from "@/src/components/sections/v2/support-compliance/motion";

const colorCards = [
  {
    title: "Runbooks operators actually run",
    body:
      "Plain-language steps, owners, and escalation ladders so midnight pages do not become folklore.",
    tags: ["L1–L3", "Postmortems", "Change logs"],
  },
  {
    title: "Evidence your reviewers can trace",
    body:
      "Exports, timestamps, and decision trails aligned to how procurement and risk committees read packs.",
    tags: ["SOC2-ready", "GDPR maps", "Vendor Q&A"],
  },
];

const deskTabs = [
  {
    id: "triage",
    label: "Triage",
    lead: "Intake that stays legible under load.",
    body:
      "Severity models, customer-visible status, and internal comms templates so every thread stays auditable from day one.",
  },
  {
    id: "controls",
    label: "Controls",
    lead: "Guardrails without freezing the roadmap.",
    body:
      "Pair delivery velocity with access reviews, approvals, and data minimization checks that match your real toolchain.",
  },
  {
    id: "handoff",
    label: "Handoff",
    lead: "Clean exits between teams and vendors.",
    body:
      "Structured knowledge transfer, artifact indexes, and sign-off rituals so context survives rotations and audits.",
  },
];

const barHeights = [40, 64, 48, 72, 52];

export default function SupportBrutalistShowcase() {
  const reduce = useReducedMotion();
  const [deskIx, setDeskIx] = useState(0);
  const active = deskTabs[deskIx] ?? deskTabs[0];

  return (
    <section
      id="support-brutalist-showcase"
      className="relative scroll-mt-24 overflow-hidden bg-[#323935] text-gray-off-white"
    >
      <div className="container relative max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
          className="max-w-3xl"
        >
          <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.26em] text-[#E7512F]/90">
            Operating clarity
          </p>
          <h2 className="mt-4 font-saans text-2xl font-normal leading-tight tracking-tight text-white md:text-4xl">
            High-signal surfaces your teams can run in production
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">
            One continuous canvas—layers of glass, light, and motion replace hard frames. Every block breathes with the same rhythm as the hub above.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-16"
        >
          <LayoutGroup id="support-desk-tabs">
            <div
              className="inline-flex w-full max-w-md items-center justify-center gap-1 rounded-full bg-white/[0.07] p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:max-w-lg"
              role="tablist"
              aria-label="Support desk stages"
            >
              {deskTabs.map((t, i) => {
                const selected = deskIx === i;
                return (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    id={`desk-tab-${t.id}`}
                    onClick={() => setDeskIx(i)}
                    className={`relative inline-flex min-w-[4.25rem] flex-col items-center justify-center rounded-full px-3 pb-2 pt-1.5 text-center font-saans text-[0.88rem] font-semibold tracking-tight transition-colors sm:min-w-[5rem] sm:px-4 sm:text-[0.92rem] ${
                      selected ? "text-white" : "text-white/55 hover:text-white/85"
                    }`}
                  >
                    {selected ? (
                      <motion.span
                        layoutId="deskTabPill"
                        className="absolute inset-0 rounded-full bg-white/[0.12] shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
                        transition={reduce ? { duration: 0 } : springSnappy}
                      />
                    ) : null}
                    <span className="relative z-10 inline-flex flex-col items-center">
                      <span className="block whitespace-nowrap">{t.label}</span>
                      <span className="mt-1 inline-flex h-[0.18rem] w-full items-center justify-center sm:mt-1.5" aria-hidden>
                        <motion.span
                          layoutId={selected ? "deskTabUnderline" : undefined}
                          className={`block h-full w-8 rounded-full ${
                            selected ? "bg-[#E7512F]" : "bg-transparent"
                          }`}
                          transition={reduce ? { duration: 0 } : springSnappy}
                        />
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>

          <div className="mt-10 overflow-hidden rounded-3xl bg-white/[0.04] shadow-[0_32px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[260px] p-8 md:min-h-[280px] md:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: reduce ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: reduce ? 0 : -6 }}
                    transition={reduce ? { duration: 0 } : transitionQuick}
                    className="relative"
                  >
                    <p className="font-saans text-xl leading-snug text-white md:text-2xl">
                      {active.lead}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-white/65 md:text-base">
                      {active.body}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="relative flex min-h-[220px] flex-col justify-between p-8 md:min-h-[280px] md:p-10">
                <p className="relative font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/45">
                  Load preview
                </p>
                <div className="relative mx-auto flex h-36 w-full max-w-[220px] items-end justify-center gap-2 px-4 pb-2 pt-6 md:h-40 md:max-w-[260px]">
                  {barHeights.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: h }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{
                        delay: reduce ? 0 : 0.04 * i,
                        ...transitionQuick,
                      }}
                      className={`w-[14%] max-w-9 rounded-t-lg ${
                        i % 2 === 0 ? "bg-[#168b50]/85" : "bg-white/25"
                      }`}
                    />
                  ))}
                </div>
                <p className="relative text-right font-mono text-[0.55rem] text-white/35">
                  Illustrative
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-20 grid gap-6 md:grid-cols-2 md:gap-8"
        >
          {colorCards.map((card) => (
            <motion.article
              key={card.title}
              variants={fadeUp}
              whileHover={reduce ? undefined : { y: -4 }}
              className="relative overflow-hidden rounded-3xl bg-white/[0.045] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.48)] backdrop-blur-xl md:p-10"
            >
              <div
                className="absolute inset-x-0 top-0 h-1 bg-[#E7512F]"
                aria-hidden
              />
              <h3 className="mt-2 font-saans text-2xl leading-tight tracking-tight text-white md:text-3xl">
                {card.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-white/70 md:text-base">
                {card.body}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/[0.08] px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-white/78"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
