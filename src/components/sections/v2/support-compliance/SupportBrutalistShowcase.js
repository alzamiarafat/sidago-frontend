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

/**
 * Chamfer only top-left + bottom-right (TR & BL stay square).
 * Matches reference “cut corner” cards.
 */
const CLIP_TL_BR =
  "[clip-path:polygon(22px_0,100%_0,100%_calc(100%-22px),calc(100%-22px)_100%,0_100%,0_22px)]";

const statRows = [
  {
    label: "First-response coverage",
    meta: "Rolling 30d",
    segments: [
      { w: 62, color: "bg-[#E7512F]" },
      { w: 28, color: "bg-[#6ec4ff]" },
      { w: 10, color: "bg-white/35" },
    ],
  },
  {
    label: "Evidence packs shipped",
    meta: "QoQ",
    segments: [
      { w: 45, color: "bg-[#6ec4ff]" },
      { w: 40, color: "bg-[#e056c8]" },
      { w: 15, color: "bg-white/35" },
    ],
  },
  {
    label: "Cross-team handoffs",
    meta: "Median latency",
    segments: [
      { w: 55, color: "bg-[#4ade80]" },
      { w: 30, color: "bg-[#E7512F]" },
      { w: 15, color: "bg-white/35" },
    ],
  },
];

const colorCards = [
  {
    title: "Runbooks operators actually run",
    body:
      "Plain-language steps, owners, and escalation ladders so midnight pages do not become folklore.",
    tags: ["L1–L3", "Postmortems", "Change logs"],
    className: "bg-[#63B3ED]",
    tagClass: "bg-black/18 text-[#0a0c0b]",
  },
  {
    title: "Evidence your reviewers can trace",
    body:
      "Exports, timestamps, and decision trails aligned to how procurement and risk committees read packs.",
    tags: ["SOC2-ready", "GDPR maps", "Vendor Q&A"],
    className: "bg-[#D946EF]",
    tagClass: "bg-black/18 text-[#0a0c0b]",
  },
  {
    title: "Liquidations & continuity",
    body:
      "Backstopping operational gaps when ownership rotates, vendors change, or audits compress timelines.",
    tags: ["Per project", "Runbooks", "Sign-off"],
    className: "bg-[#fca5a5]",
    tagClass: "bg-black/18 text-[#0a0c0b]",
  },
  {
    title: "Cross-system control maps",
    body:
      "Single language for controls across tools and teams—so evidence lines up with what engineers actually ship.",
    tags: ["Maps", "Owners", "Evidence"],
    className: "bg-[#c4b5fd]",
    tagClass: "bg-black/18 text-[#0a0c0b]",
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
    <div className="grid grid-cols-1 items-center gap-3 border-b border-white/[0.06] py-4 last:border-0 sm:grid-cols-[minmax(0,1.2fr)_2fr_auto] sm:gap-6">
      <div>
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-white/55">
          {row.label}
        </p>
      </div>
      <div className="flex h-2.5 w-full overflow-hidden rounded-sm bg-white/[0.08]">
        {row.segments.map((s, i) => (
          <div
            key={i}
            className={`${s.color} h-full flex-none transition-[width] duration-500`}
            style={{ width: `${s.w}%` }}
          />
        ))}
      </div>
      <p className="font-mono text-xs text-white/45 sm:text-right">{row.meta}</p>
    </div>
  );
}

export default function SupportBrutalistShowcase() {
  const reduce = useReducedMotion();
  const [deskIx, setDeskIx] = useState(0);
  const active = deskTabs[deskIx] ?? deskTabs[0];

  return (
    <section
      id="support-brutalist-showcase"
      className="scroll-mt-24 bg-black px-4 py-16 text-white sm:px-6 md:px-10 md:py-24"
    >
      <div className="container relative z-10 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
          className="max-w-3xl"
        >
          <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.28em] text-[#E7512F]">
            Building clarity for support & compliance
          </p>
          <h2 className="mt-4 font-blender text-2xl font-normal leading-tight tracking-tight text-white md:text-4xl">
            High-signal surfaces your teams can run in production
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">
            Color blocks replace noisy borders—geometry and contrast carry the
            hierarchy, similar to trading and risk consoles.
          </p>
          <div
            className="mt-8 h-px max-w-md bg-gradient-to-r from-[#E7512F] via-[#E7512F]/50 to-transparent"
            aria-hidden
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-14 rounded-xl bg-[#141616] px-5 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.55)] md:px-8"
        >
          <p className="py-4 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/40">
            Operating snapshot
          </p>
          {statRows.map((row) => (
            <BarRow key={row.label} row={row} />
          ))}
        </motion.div>

        {/* Tabs + split card: shared width — tabs left edge = card left edge */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-16 w-full"
        >
          <LayoutGroup id="support-desk-tabs">
            <div
              className="flex w-full flex-wrap items-center gap-x-1 gap-y-2"
              aria-label="Desk modes"
            >
              {deskTabs.map((t, i) => {
                const selected = deskIx === i;
                return (
                  <button
                    key={t.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setDeskIx(i)}
                    className={`relative rounded-full px-5 py-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] transition-colors md:px-6 md:py-3 ${
                      selected
                        ? "text-black"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {selected ? (
                      <motion.span
                        layoutId="supportDeskTabPill"
                        className="absolute inset-0 -z-10 rounded-full bg-[#9fd9ff]"
                        transition={reduce ? { duration: 0 } : springSnappy}
                      />
                    ) : null}
                    <span className="relative z-10">{t.label}</span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>

          <div
            className={`mt-4 w-full overflow-hidden shadow-[0_28px_80px_rgba(0,0,0,0.55)] ${CLIP_TL_BR}`}
          >
            <div className="grid min-h-[280px] md:min-h-[300px] md:grid-cols-2">
              <div className="bg-[#B8E4FF] p-8 text-left text-black md:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, x: reduce ? 0 : -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: reduce ? 0 : 10 }}
                    transition={reduce ? { duration: 0 } : transitionQuick}
                  >
                    <p className="font-blender text-lg leading-snug md:text-xl">
                      {active.lead}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-black/80 md:text-base">
                      {active.body}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="relative flex min-h-[220px] items-center justify-center bg-[#2d5580] p-8 md:min-h-0 md:p-10">
                <div
                  className="relative flex h-44 w-full max-w-[240px] items-end justify-center gap-2 md:h-52 md:max-w-[280px]"
                  style={{
                    clipPath:
                      "polygon(12% 0, 100% 0, 100% 88%, 88% 100%, 0 100%, 0 12%)",
                  }}
                >
                  <div
                    className="absolute inset-0 border-2 border-[#4ade80] bg-[#1a4060]/95"
                    aria-hidden
                  />
                  {[72, 110, 78, 132, 92].map((px, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: px }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        delay: reduce ? 0 : 0.05 * i,
                        ...transitionQuick,
                      }}
                      className={`relative z-10 w-[15%] max-w-10 rounded-t-sm ${
                        i % 2 === 0 ? "bg-[#4ade80]" : "bg-white/35"
                      }`}
                    />
                  ))}
                </div>
                <p className="pointer-events-none absolute bottom-4 right-4 max-w-[10rem] text-right font-mono text-[0.55rem] uppercase leading-relaxed tracking-[0.18em] text-white/40">
                  Motion preview
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
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:mt-12 md:gap-8"
        >
          {colorCards.map((card) => (
            <motion.article
              key={card.title}
              variants={fadeUp}
              className={`flex flex-col items-start text-left ${CLIP_TL_BR} ${card.className} p-9 text-[#0a0c0b] shadow-[0_28px_70px_rgba(0,0,0,0.45)] md:p-10`}
            >
              <h3 className="font-blender text-2xl leading-tight tracking-tight md:text-3xl">
                {card.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-black/80 md:text-base">
                {card.body}
              </p>
              <p className="mt-8 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-black/55">
                Including on:
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] ${card.tagClass}`}
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
