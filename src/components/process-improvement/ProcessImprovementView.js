"use client";

import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  FiActivity,
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiCpu,
  FiMessageCircle,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import { fadeIn, fadeUp, stagger, viewportOnce } from "./motion";

/** Sidago brand — orange #E7512F, green #168b50, forest #006623 (see style-v2 / site usage) */
const BR = {
  orange: "#E7512F",
  green: "#168b50",
  forest: "#006623",
  g: "22,139,80",
};

const LOGOS = [
  "Axiom North",
  "Velora Labs",
  "Kiteframe",
  "Helix Meridian",
  "Northwind Ops",
  "Cinder & Co",
];

const FEATURES = [
  {
    title: "Adaptive workflow automation",
    body: "Sidago maps decision paths, handoffs, and exceptions so repetitive cycles compress without losing human judgment at the edge.",
    icon: FiCpu,
  },
  {
    title: "Signal-rich process analysis",
    body: "We fuse operational telemetry with qualitative context to expose bottlenecks that spreadsheets and static maps routinely miss.",
    icon: FiActivity,
  },
  {
    title: "Efficiency without fragility",
    body: "Tighter throughput is staged with rollback lanes, observability hooks, and change windows that keep production calm.",
    icon: FiZap,
  },
  {
    title: "Narrative-grade reporting",
    body: "Leaders receive living briefs—trendlines, variance drivers, and next actions—instead of flat monthly reconciliations.",
    icon: FiBarChart2,
  },
  {
    title: "Collaboration in one plane",
    body: "Design, risk, and delivery share a single source of intent with versioned rationale so alignment survives turnover.",
    icon: FiMessageCircle,
  },
  {
    title: "Predictive optimization loops",
    body: "Forecast-informed capacity and backlog shaping reduce fire drills while keeping service promises defensible.",
    icon: FiTrendingUp,
  },
];

const WORKFLOW_STEPS = [
  {
    title: "Sense",
    detail: "Ingest live signals from systems, tickets, and stakeholder touchpoints.",
  },
  {
    title: "Diagnose",
    detail: "Isolate root friction with traceable evidence—not anecdotal heat maps alone.",
  },
  {
    title: "Design",
    detail: "Co-author target flows with guardrails, SLAs, and measurable exit criteria.",
  },
  {
    title: "Deploy",
    detail: "Roll out in waves with automated checks and human checkpoints at critical seams.",
  },
  {
    title: "Evolve",
    detail: "Close the loop with retrospectives that feed the next optimization sprint.",
  },
];

const DASHBOARD_SLIDES = [
  {
    title: "Latency-aware throughput",
    caption: "Live corridor view of queue depth, aging risk, and predicted breach windows.",
  },
  {
    title: "Decision confidence index",
    caption: "Blended model of data completeness, policy fit, and historical resolution quality.",
  },
  {
    title: "Automation coverage map",
    caption: "Where machines assist, where humans decide, and where hybrid review is mandatory.",
  },
];

const WHY_METRICS = [
  { label: "Faster cycle completion", value: "38%", hint: "median uplift across pilot programs" },
  { label: "Manual touch reduction", value: "52%", hint: "on audited high-volume paths" },
  { label: "Decision latency drop", value: "41%", hint: "executive review windows compressed" },
  { label: "Live health coverage", value: "24/7", hint: "always-on observability surfaces" },
];

/** Repeating SVG noise — each layer is isolated; safe to stack per section */
function CssNoise({ className = "opacity-[0.045]" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[1] mix-blend-soft-light ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: "96px 96px",
      }}
      aria-hidden
    />
  );
}

function GridTexture({ opacity = 0.11 }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1]"
      style={{
        opacity,
        backgroundImage:
          `linear-gradient(rgba(${BR.g},0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(${BR.g},0.14) 1px, transparent 1px)`,
        backgroundSize: "52px 52px",
      }}
      aria-hidden
    />
  );
}

function SectionFadeTop() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-20 bg-gradient-to-b from-black/25 to-transparent"
      aria-hidden
    />
  );
}

function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-900/90 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_40px_120px_rgba(22,139,80,0.12),0_24px_80px_rgba(231,81,47,0.06)] backdrop-blur-xl sm:p-5">
        <div className="flex items-center justify-between gap-3 border-b border-white/5 pb-3">
          <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[#168b50]/90">
            Live orchestration
          </span>
          <span className="h-2 w-2 rounded-full bg-[#168b50] shadow-[0_0_14px_rgba(22,139,80,0.85)]" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[72, 54, 88].map((h, i) => (
            <div
              key={i}
              className="flex flex-col justify-end rounded-lg bg-white/[0.05] p-2"
              style={{ minHeight: 72 }}
            >
              <motion.div
                className="rounded-sm bg-gradient-to-t from-[#168b50]/55 to-[#E7512F]/35"
                initial={{ height: 8 }}
                animate={{ height: h }}
                transition={{ duration: 1.2, delay: 0.15 * i, ease: "easeOut" }}
              />
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-white/[0.05] p-3">
            <p className="text-[0.65rem] font-medium uppercase tracking-wider text-slate-400">
              Throughput
            </p>
            <p className="mt-1 text-xl text-white">+18.4%</p>
          </div>
          <div className="rounded-lg bg-white/[0.05] p-3">
            <p className="text-[0.65rem] font-medium uppercase tracking-wider text-slate-400">
              Risk index
            </p>
            <p className="mt-1 text-xl text-[#a8f5c2]/95">Low</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProcessImprovementView() {
  const reduce = useReducedMotion();
  const [dashIx, setDashIx] = useState(0);
  const [compare, setCompare] = useState(52);

  useEffect(() => {
    if (reduce) return undefined;
    const id = window.setInterval(() => {
      setDashIx((i) => (i + 1) % DASHBOARD_SLIDES.length);
    }, 5200);
    return () => clearInterval(id);
  }, [reduce]);

  const shell =
    "font-saans bg-[#030712] text-slate-100 selection:bg-[#168b50]/35 selection:text-white";

  return (
    <div className={shell}>
      {/* Hero — flat canvas (#151916), no radial / noise / motion backdrops */}
      <section className="relative overflow-hidden bg-[#151916] px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-14 md:px-8 md:pb-28">
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-xl"
            >
              <motion.p
                variants={fadeUp}
                className="text-[0.65rem] uppercase tracking-[0.28em] text-[#168b50]/95"
              >
                Process improvement · AI-native
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
              >
                Orchestrate sharper decisions across every operational lane.
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg"
              >
                Sidago fuses human expertise with intelligent systems to redesign how work moves—measured, humane, and built for enterprises that cannot afford guesswork.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#168b50] to-[#E7512F] px-6 py-3 text-[0.7rem] uppercase tracking-[0.16em] text-white shadow-[0_12px_40px_rgba(22,139,80,0.28),0_8px_32px_rgba(231,81,47,0.18)] transition hover:brightness-110"
                >
                  Optimize workflow
                  <FiArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[0.7rem] uppercase tracking-[0.16em] text-slate-100 transition hover:border-[#168b50]/50 hover:bg-white/[0.08] hover:shadow-[0_0_24px_rgba(22,139,80,0.12)]"
                >
                  Book consultation
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <DashboardMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logos — same container width as other bands; seamless infinite marquee */}
      <section className="relative overflow-hidden border-y border-white/[0.06] px-4 py-10 sm:px-6 md:px-8">
        <SectionFadeTop />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-800/25 via-[#070d18]/95 to-[#050a14]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_100%,rgba(22,139,80,0.12),transparent_58%),radial-gradient(ellipse_60%_40%_at_0%_0%,rgba(231,81,47,0.06),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 backdrop-blur-[2px]" />
        <CssNoise className="opacity-[0.035]" />
        <div className="container relative z-[3] mx-auto max-w-6xl">
          <p className="mb-6 text-center text-[0.65rem] uppercase tracking-[0.24em] text-slate-500">
            Trusted by teams who ship under scrutiny
          </p>
          <div className="relative overflow-hidden">
            <div className="pi-trusted-marquee gap-12 whitespace-nowrap sm:gap-16 md:gap-20">
              {[...LOGOS, ...LOGOS].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="shrink-0 text-lg uppercase tracking-[0.2em] text-slate-500 opacity-70 sm:text-xl"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features / Capabilities — flat band */}
      <section className="relative overflow-hidden bg-[#323935] px-4 py-20 sm:px-6 md:px-8 md:py-24">
        <div className="container relative z-[3] mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeIn}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-[0.65rem] uppercase tracking-[0.26em] text-[#168b50]/95">
              Capabilities
            </p>
            <h2 className={`mt-3 text-3xl font-medium tracking-tight sm:text-4xl text-white`}>
              A full-stack lens on how work actually gets done
            </h2>
            <p className={`mt-4 text-base text-slate-400`}>
              Six synchronized disciplines that keep transformation honest, measurable, and humane.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {FEATURES.map((f) => (
              <motion.article
                key={f.title}
                variants={fadeUp}
                whileHover={reduce ? undefined : { y: -6 }}
                className="group relative overflow-hidden rounded-2xl bg-[#151916] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.28)] transition-shadow duration-300 hover:shadow-[0_24px_64px_rgba(0,0,0,0.38)]"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#168b50]/12 blur-3xl transition-opacity group-hover:opacity-100" />
                <f.icon className="h-6 w-6 text-[#168b50] sm:text-[#75d39e]" aria-hidden />
                <h3
                  className={`mt-4 text-lg text-white`}
                >
                  {f.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed text-slate-400`}>
                  {f.body}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workflow — flat band + phase cards (#151916) for clarity */}
      <section
        className="relative overflow-hidden bg-[#070b0a] px-4 py-20 sm:px-6 md:px-8 md:py-24"
        aria-labelledby="workflow-cadence-heading"
      >
        <div className="container relative z-[1] mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.65rem] uppercase tracking-[0.26em] text-[#E7512F]/90">
              Operating cadence
            </p>
            <h2
              id="workflow-cadence-heading"
              className="mt-3 text-3xl font-medium tracking-tight text-white sm:text-4xl"
            >
              A horizontal spine your teams can follow without guesswork
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              Five ordered phases—each card is one step in the loop from raw signals to sustained
              improvement.
            </p>
          </div>

          <div className="mt-10 md:mt-14">
            <p className="mb-3 text-center text-[0.65rem] uppercase tracking-[0.2em] text-slate-500 md:sr-only">
              Swipe sideways to see all phases
            </p>
            <div
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch] md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:pb-0"
              role="list"
              aria-label="Operating cadence phases"
            >
              {WORKFLOW_STEPS.map((s, i) => (
                <motion.article
                  key={s.title}
                  role="listitem"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: reduce ? 0 : 0.06 * i }}
                  className="relative min-w-[min(100%,17.5rem)] max-w-[20rem] shrink-0 snap-center rounded-2xl bg-[#151916] p-5 text-left shadow-[0_16px_48px_rgba(0,0,0,0.35)] sm:min-w-[16rem] md:min-w-0 md:max-w-none"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-slate-500">
                      Phase {i + 1} of {WORKFLOW_STEPS.length}
                    </span>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#168b50] text-xs font-semibold tabular-nums text-white shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.detail}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard carousel — flat #151916 band */}
      <section className="relative overflow-hidden bg-[#151916] px-4 py-20 sm:px-6 md:px-8 md:py-24">
        <div className="container relative z-[1] mx-auto max-w-6xl">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.26em] text-[#168b50]/95">
                Live intelligence
              </p>
              <h2 className={`mt-3 text-3xl font-medium tracking-tight sm:text-4xl text-white`}>
                Preview the Sidago clarity layer your executives asked for
              </h2>
              <p className={`mt-4 text-base text-slate-400`}>
                Rotate through three representative views—each designed to collapse noise into decisive signal.
              </p>
              <div className="mt-8 flex gap-2">
                {DASHBOARD_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => setDashIx(i)}
                    className={`h-1.5 flex-1 rounded-full transition ${
                      dashIx === i ? "bg-[#168b50] shadow-[0_0_12px_rgba(22,139,80,0.5)]" : "bg-white/15"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-[#0c1010] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={dashIx}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.45 }}
                >
                  <p className="text-[0.6rem] uppercase tracking-[0.22em] text-[#E7512F]/90">
                    View {dashIx + 1} / {DASHBOARD_SLIDES.length}
                  </p>
                  <h3
                    className={`mt-3 text-2xl text-white`}
                  >
                    {DASHBOARD_SLIDES[dashIx].title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400">{DASHBOARD_SLIDES[dashIx].caption}</p>
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <StatPill label="Signal density" value="High" />
                    <StatPill label="Drift alerts" value="3 live" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sidago — flat black */}
      <section className="relative overflow-hidden bg-[#000000] px-4 py-20 sm:px-6 md:px-8 md:py-24">
        <div className="container relative z-[1] mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
            className="grid gap-6 md:grid-cols-2"
          >
            <motion.div variants={fadeUp}>
              <p className="text-[0.65rem] uppercase tracking-[0.26em] text-[#168b50]/95">
                Why Sidago
              </p>
              <h2 className={`mt-3 text-3xl font-medium tracking-tight sm:text-4xl text-white`}>
                Precision without the theater
              </h2>
              <p className={`mt-4 text-base text-slate-400`}>
                We build operating systems that respect your constraints—regulatory, cultural, and technical—while still pushing the frontier of what your teams can sense and steer.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {WHY_METRICS.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl bg-[#151916] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
                >
                  <p className="text-2xl text-[#E7512F] sm:text-[#f0623a]">{m.value}</p>
                  <p className={`mt-1 text-sm font-medium text-white`}>
                    {m.label}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{m.hint}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Before / After — flat #030713 */}
      <section className="relative overflow-hidden bg-[#030713] px-4 py-20 sm:px-6 md:px-8 md:py-24">
        <div className="container relative z-[1] mx-auto max-w-5xl">
          <header className="mx-auto flex w-full max-w-2xl flex-col items-center text-center text-balance lg:max-w-3xl">
            <p className="pl-[0.26em] text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-[#E7512F]/90">
              Transformation lens
            </p>
            <h2 className="mt-3 w-full text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Before clarity · After orchestration
            </h2>
            <p className="mt-4 w-full text-base leading-relaxed text-slate-400">
              Drag the control to reveal how Sidago reframes the same operating reality—without erasing the humans in the loop.
            </p>
          </header>
          <div className="mt-12 overflow-hidden rounded-3xl bg-[#0c1010] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.35)] sm:p-8">
            <label htmlFor="compare-range" className="sr-only">
              Compare before and after
            </label>
            <input
              id="compare-range"
              type="range"
              min={0}
              max={100}
              value={compare}
              onChange={(e) => setCompare(Number(e.target.value))}
              className="mb-8 w-full accent-[#E7512F]"
            />
            <div className="grid gap-5 md:grid-cols-2 md:items-stretch md:gap-8">
              <div
                className="flex min-h-0 flex-col rounded-2xl bg-[#151916] p-5 shadow-[0_10px_36px_rgba(0,0,0,0.35)] transition-opacity md:p-6"
                style={{ opacity: 1 - compare / 130 }}
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#E7512F]/90">
                  Before
                </p>
                <ul className="mt-5 flex flex-1 flex-col gap-3 text-sm leading-relaxed text-slate-400">
                  <li className="grid grid-cols-[0.5rem_1.25rem_1fr] items-start gap-x-2.5">
                    <span
                      className="mt-[0.42em] h-2 w-2 shrink-0 rounded-sm bg-[#168b50]"
                      aria-hidden
                    />
                    <span className="flex h-[1.125rem] shrink-0 items-center justify-center text-xs font-medium text-slate-500">
                      −
                    </span>
                    <span className="min-w-0">Fragmented status in chat threads</span>
                  </li>
                  <li className="grid grid-cols-[0.5rem_1.25rem_1fr] items-start gap-x-2.5">
                    <span
                      className="mt-[0.42em] h-2 w-2 shrink-0 rounded-sm bg-[#168b50]"
                      aria-hidden
                    />
                    <span className="flex h-[1.125rem] shrink-0 items-center justify-center text-xs font-medium text-slate-500">
                      −
                    </span>
                    <span className="min-w-0">Manual reconciliations every Friday</span>
                  </li>
                  <li className="grid grid-cols-[0.5rem_1.25rem_1fr] items-start gap-x-2.5">
                    <span
                      className="mt-[0.42em] h-2 w-2 shrink-0 rounded-sm bg-[#168b50]"
                      aria-hidden
                    />
                    <span className="flex h-[1.125rem] shrink-0 items-center justify-center text-xs font-medium text-slate-500">
                      −
                    </span>
                    <span className="min-w-0">Heroics rewarded over repeatable playbooks</span>
                  </li>
                </ul>
              </div>
              <div
                className="flex min-h-0 flex-col rounded-2xl bg-[#168b50]/10 p-5 shadow-[0_10px_36px_rgba(0,0,0,0.28)] transition-opacity md:p-6"
                style={{ opacity: compare / 100 }}
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#168b50]/95">
                  After
                </p>
                <ul className="mt-5 flex flex-1 flex-col gap-3 text-sm leading-relaxed text-slate-200">
                  <li className="grid grid-cols-[0.5rem_1.25rem_1fr] items-start gap-x-2.5">
                    <span
                      className="mt-[0.42em] h-2 w-2 shrink-0 rounded-sm bg-[#168b50]"
                      aria-hidden
                    />
                    <span className="flex h-[1.125rem] shrink-0 items-center justify-center">
                      <FiCheck className="h-4 w-4 text-[#168b50]" aria-hidden />
                    </span>
                    <span className="min-w-0">One orchestrated narrative with receipts</span>
                  </li>
                  <li className="grid grid-cols-[0.5rem_1.25rem_1fr] items-start gap-x-2.5">
                    <span
                      className="mt-[0.42em] h-2 w-2 shrink-0 rounded-sm bg-[#168b50]"
                      aria-hidden
                    />
                    <span className="flex h-[1.125rem] shrink-0 items-center justify-center">
                      <FiCheck className="h-4 w-4 text-[#168b50]" aria-hidden />
                    </span>
                    <span className="min-w-0">Automated guardrails with human checkpoints</span>
                  </li>
                  <li className="grid grid-cols-[0.5rem_1.25rem_1fr] items-start gap-x-2.5">
                    <span
                      className="mt-[0.42em] h-2 w-2 shrink-0 rounded-sm bg-[#168b50]"
                      aria-hidden
                    />
                    <span className="flex h-[1.125rem] shrink-0 items-center justify-center">
                      <FiCheck className="h-4 w-4 text-[#168b50]" aria-hidden />
                    </span>
                    <span className="min-w-0">Forecast-aware staffing and backlog shaping</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — cinematic gradient + light pulse */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:px-8 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#020617] via-[#030712] to-[#020617]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-10%,rgba(22,139,80,0.22),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_80%,rgba(231,81,47,0.18),transparent_50%),radial-gradient(ellipse_60%_45%_at_0%_90%,rgba(0,102,35,0.2),transparent_48%)]" />
        {!reduce ? (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[22rem] w-[min(100vw,48rem)] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#168b50]/28 via-[#E7512F]/22 to-[#006623]/30 blur-[100px]"
            animate={{ opacity: [0.35, 0.65, 0.4], scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        ) : null}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#168b50]/18 via-[#E7512F]/10 to-transparent"
          animate={{ opacity: [0.35, 0.75, 0.4] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <CssNoise className="opacity-[0.05]" />
        <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center lg:max-w-3xl">
          <h2 className="w-full text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Ready for a calmer, sharper operating rhythm?
          </h2>
          <p className="mt-5 w-full text-base leading-relaxed text-slate-300 sm:text-lg">
            Tell us where friction shows up today—we will co-design a measurable path forward with your leaders, operators, and data custodians.
          </p>
          <div className="mt-10 flex w-full flex-col items-stretch gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[3rem] flex-1 items-center justify-center gap-2 rounded-full bg-[#E7512F] px-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_14px_44px_rgba(231,81,47,0.42)] transition hover:bg-[#f0623a] hover:shadow-[0_18px_48px_rgba(231,81,47,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E7512F] sm:flex-initial"
            >
              Start a working session
              <FiArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </Link>
            <Link
              href="/strategy"
              className="inline-flex min-h-[3rem] flex-1 items-center justify-center gap-2 rounded-full border-2 border-[#E7512F] bg-[#E7512F]/10 px-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:border-[#f0623a] hover:bg-[#E7512F]/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E7512F] sm:flex-initial"
            >
              Explore strategy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatPill({ label, value }) {
  return (
    <div className="rounded-xl bg-[#151916] px-3 py-3">
      <p className="text-[0.65rem] uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-1 text-lg text-white">{value}</p>
    </div>
  );
}
