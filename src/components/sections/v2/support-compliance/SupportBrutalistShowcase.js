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

const statRows = [
  {
    label: "First-response coverage",
    meta: "Rolling 30d",
    segments: [
      { w: 62, color: "bg-[#E7512F]" },
      { w: 28, color: "bg-[#7dd3fc]" },
      { w: 10, color: "bg-white/30" },
    ],
  },
  {
    label: "Evidence packs shipped",
    meta: "QoQ",
    segments: [
      { w: 45, color: "bg-[#7dd3fc]" },
      { w: 40, color: "bg-[#f472b6]" },
      { w: 15, color: "bg-white/30" },
    ],
  },
  {
    label: "Cross-team handoffs",
    meta: "Median latency",
    segments: [
      { w: 55, color: "bg-[#4ade80]" },
      { w: 30, color: "bg-[#E7512F]" },
      { w: 15, color: "bg-white/30" },
    ],
  },
];

const colorCards = [
  {
    title: "Runbooks operators actually run",
    body:
      "Plain-language steps, owners, and escalation ladders so midnight pages do not become folklore.",
    tags: ["L1–L3", "Postmortems", "Change logs"],
    surface: "bg-gradient-to-br from-[#5eead4] to-[#2dd4bf]",
    text: "text-[#042f2e]",
    tagSurface: "bg-teal-950/15",
  },
  {
    title: "Evidence your reviewers can trace",
    body:
      "Exports, timestamps, and decision trails aligned to how procurement and risk committees read packs.",
    tags: ["SOC2-ready", "GDPR maps", "Vendor Q&A"],
    surface: "bg-gradient-to-br from-[#fda4af] to-[#fb7185]",
    text: "text-[#450a0a]",
    tagSurface: "bg-rose-950/15",
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

function BarRow({ row }) {
  return (
    <div className="grid grid-cols-1 items-center gap-3 rounded-xl bg-white/[0.04] px-4 py-3 sm:grid-cols-[minmax(0,1.15fr)_2fr_auto] sm:gap-5 sm:px-5">
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-white/60">
        {row.label}
      </p>
      <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-black/30">
        {row.segments.map((s, i) => (
          <div
            key={i}
            className={`${s.color} h-full flex-none`}
            style={{ width: `${s.w}%` }}
          />
        ))}
      </div>
      <p className="font-mono text-xs text-white/45 sm:text-right">{row.meta}</p>
    </div>
  );
}

const barHeights = [40, 64, 48, 72, 52];

export default function SupportBrutalistShowcase() {
  const reduce = useReducedMotion();
  const [deskIx, setDeskIx] = useState(0);
  const active = deskTabs[deskIx] ?? deskTabs[0];

  return (
    <section id="support-brutalist-showcase" className="scroll-mt-24">
      {/* Band 1 — deep green charcoal */}
      <div className="bg-[#0a100e] px-4 py-14 text-white sm:px-6 md:px-10 md:py-20">
        <div className="container max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeIn}
            className="max-w-3xl"
          >
            <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.26em] text-[#E7512F]">
              Building clarity for support & compliance
            </p>
            <h2 className="mt-4 font-blender text-2xl font-normal leading-tight tracking-tight md:text-4xl">
              High-signal surfaces your teams can run in production
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
              Borderless color bands separate ideas—no outlines, just contrast
              and spacing.
            </p>
            <div
              className="mt-8 h-1 w-20 rounded-full bg-[#E7512F]"
              aria-hidden
            />
          </motion.div>
        </div>
      </div>

      {/* Band 2 — cool slate (stats) */}
      <div className="bg-[#111c24] px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="container max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <p className="mb-5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[#7dd3fc]/80">
              Operating snapshot
            </p>
            <div className="flex flex-col gap-2">
              {statRows.map((row) => (
                <BarRow key={row.label} row={row} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Band 3 — warm brown-black (desk) */}
      <div className="bg-[#14100c] px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="container max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <LayoutGroup id="support-desk-tabs">
              <div className="inline-flex w-full max-w-full flex-wrap gap-1 rounded-2xl bg-black/25 p-1.5 sm:gap-1">
                {deskTabs.map((t, i) => {
                  const selected = deskIx === i;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setDeskIx(i)}
                      className={`relative flex-1 min-w-[5.5rem] rounded-xl px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] transition-colors sm:min-w-0 sm:flex-none sm:px-6 ${
                        selected
                          ? "text-gray-900"
                          : "text-white/65 hover:text-white"
                      }`}
                    >
                      {selected ? (
                        <motion.span
                          layoutId="deskTabPill"
                          className="absolute inset-0 rounded-xl bg-[#c8eef9]"
                          transition={reduce ? { duration: 0 } : springSnappy}
                        />
                      ) : null}
                      <span className="relative z-10">{t.label}</span>
                    </button>
                  );
                })}
              </div>
            </LayoutGroup>

            <div className="mt-8 overflow-hidden rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <div className="grid md:grid-cols-2">
                <div className="min-h-[260px] bg-[#e0f2fe] p-8 text-left text-gray-900 md:min-h-[280px] md:p-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.id}
                      initial={{ opacity: 0, y: reduce ? 0 : 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: reduce ? 0 : -6 }}
                      transition={reduce ? { duration: 0 } : transitionQuick}
                    >
                      <p className="font-blender text-xl leading-snug text-gray-900 md:text-2xl">
                        {active.lead}
                      </p>
                      <p className="mt-5 text-sm leading-relaxed text-gray-800/90 md:text-base">
                        {active.body}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="flex min-h-[220px] flex-col justify-between bg-[#1e3a5f] p-8 md:min-h-[280px] md:p-10">
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/45">
                    Load preview
                  </p>
                  <div className="mx-auto flex h-36 w-full max-w-[220px] items-end justify-center gap-2 rounded-2xl bg-black/20 px-4 pb-4 pt-6 md:h-40 md:max-w-[260px]">
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
                        className={`w-[14%] max-w-9 rounded-t-md ${
                          i % 2 === 0 ? "bg-[#4ade80]" : "bg-white/35"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-right font-mono text-[0.55rem] text-white/35">
                    Illustrative
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Band 4 — near-black + vivid cards */}
      <div className="bg-[#060807] px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="container max-w-6xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-6 md:grid-cols-2 md:gap-8"
          >
            {colorCards.map((card) => (
              <motion.article
                key={card.title}
                variants={fadeUp}
                className={`${card.surface} ${card.text} rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:p-10`}
              >
                <h3 className="font-blender text-2xl leading-tight tracking-tight md:text-3xl">
                  {card.title}
                </h3>
                <p className="mt-5 text-sm leading-relaxed opacity-90 md:text-base">
                  {card.body}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] ${card.tagSurface}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
