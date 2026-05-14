"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiLayers,
  FiSearch,
  FiTarget,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import CountUpStat from "@/src/components/sections/v2/executionpage/CountUpStat";
import {
  campaignBars,
  caseStudies,
  conversionItems,
  coreServices,
  faqItems,
  insightBlocks,
  performanceStats,
  processSteps,
  progressMetrics,
  strategyPillars,
} from "@/src/components/sections/v2/marketing-growth/data";
import {
  fadeIn,
  fadeUp,
  stagger,
  viewportOnce,
} from "@/src/components/sections/v2/marketing-growth/motion";

const serviceIcons = [FiLayers, FiZap, FiUsers, FiTarget, FiSearch, FiBarChart2];

/** Page background palette (marketing growth only) */
const MG = {
  deep: "bg-[#070B09]",
  mid: "bg-[#1C211E]",
  elevated: "bg-[#323935]",
};

function SectionHeader({ eyebrow, title, description, className = "" }) {
  return (
    <div className={`mb-10 max-w-3xl md:mb-14 ${className}`}>
      {eyebrow ? (
        <p className="font-blender text-sm uppercase tracking-[0.22em] text-green-dark">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-2xl font-normal leading-tight text-white md:text-4xl lg:text-[2.5rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-gray-tradfi-silver md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function MarketingHero({ reduce }) {
  return (
    <section
      id="top"
      className={`relative overflow-hidden ${MG.mid} px-5 pb-16 pt-[calc(var(--header-height)+2.5rem)] text-gray-off-white md:px-10 md:pb-24 md:pt-[calc(var(--header-height)+3.5rem)]`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-1/4 top-0 h-[26rem] w-[26rem] rounded-full bg-[#958dec]/8 blur-[96px]" />
        <div className="absolute -right-1/4 top-1/4 h-[22rem] w-[22rem] rounded-full bg-[#E7512F]/6 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-15%,rgba(60,133,221,0.1),transparent_58%)]" />
      </div>
      <div className="container relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.p
            variants={fadeUp}
            className="font-blender text-sm uppercase tracking-[0.26em] text-green-dark md:text-base"
          >
            Marketing growth
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-4 text-4xl font-normal leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Grow demand with{" "}
            <span className="text-[#E7512F]">disciplined</span> marketing
            systems
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-gray-tradfi-silver md:text-lg"
          >
            Sidago helps teams scale digital growth through brand visibility,
            performance channels, lead generation, and data-backed decisions—
            without losing the premium feel your market expects.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#E7512F] px-6 py-3 font-blender text-sm uppercase tracking-[0.14em] text-white transition hover:bg-[#cf4526] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E7512F]"
            >
              Plan a growth sprint
              <FiArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" })
              }
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white/[0.08] px-6 py-3 font-blender text-sm uppercase tracking-[0.14em] text-gray-off-white backdrop-blur-sm transition hover:bg-white/[0.12]"
            >
              View core services
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StrategySection({ reduce }) {
  return (
    <section
      id="strategy"
      className={`scroll-mt-24 ${MG.elevated} px-5 text-gray-off-white md:px-10`}
    >
      <div className="container py-block">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <SectionHeader
            eyebrow="Growth strategy overview"
            title="A clear model for sustainable digital growth"
            description="Sidago connects brand, acquisition, and measurement so budgets compound learning—not just impressions."
          />
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {strategyPillars.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              transition={{ duration: reduce ? 0 : undefined }}
              className={`group rounded-2xl ${MG.mid} p-6 shadow-[0_14px_44px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_52px_rgba(0,0,0,0.42)]`}
            >
              <div className="h-1 w-10 rounded-full bg-gradient-to-r from-[#E7512F] to-[#958dec] opacity-80 transition group-hover:opacity-100" />
              <h3 className="mt-5 text-lg text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-tradfi-silver">
                {item.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection({ reduce }) {
  return (
    <section
      id="services"
      className={`scroll-mt-24 ${MG.deep} px-5 text-gray-off-white md:px-10`}
    >
      <div className="container py-block">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <SectionHeader
            eyebrow="Core marketing services"
            title="Everything you need to attract, convert, and retain"
            description="Modular engagements let you start with diagnostics, campaigns, or analytics—and expand as results land."
          />
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {coreServices.map((svc, index) => {
            const Icon = serviceIcons[index] ?? FiLayers;
            return (
              <motion.article
                key={svc.title}
                variants={fadeUp}
                transition={{ duration: reduce ? 0 : undefined }}
                className={`flex flex-col rounded-2xl ${MG.elevated} p-6 shadow-[0_12px_40px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_52px_rgba(0,0,0,0.4)]`}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/[0.06] text-green-dark">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg text-white">{svc.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-tradfi-silver">
                  {svc.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-green-dark transition hover:text-white"
                >
                  Discuss scope
                  <FiArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function InsightsSection({ reduce }) {
  return (
    <section className="scroll-mt-24 bg-gray-night-green px-5 text-gray-off-white md:px-10">
      <div className="container py-block">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeIn}
          >
            <SectionHeader
              eyebrow="Data-driven insights"
              title="Marketing decisions grounded in evidence"
              description="We combine quantitative signals with qualitative context so leaders see both the trend and the why behind it."
            />
            <ul className="mt-8 space-y-5">
              {insightBlocks.map((block) => (
                <li
                  key={block.label}
                  className={`flex gap-4 rounded-xl ${MG.elevated} p-4 shadow-[0_8px_28px_rgba(0,0,0,0.22)]`}
                >
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#3c85dd] shadow-[0_0_12px_rgba(60,133,221,0.5)]" />
                  <div>
                    <p className="font-blender text-xs uppercase tracking-[0.18em] text-green-dark">
                      {block.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-tradfi-silver">
                      {block.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: reduce ? 0 : undefined }}
            className={`rounded-2xl ${MG.elevated} p-6 shadow-[0_14px_44px_rgba(0,0,0,0.35)] md:p-8`}
          >
            <p className="font-blender text-xs uppercase tracking-[0.2em] text-green-dark">
              Channel mix index
            </p>
            <p className="mt-2 text-sm text-gray-tradfi-silver">
              Illustrative blend across a mature growth program (normalized).
            </p>
            <div className="mt-8 space-y-5">
              {campaignBars.map((bar) => (
                <div key={bar.label}>
                  <div className="mb-1.5 flex justify-between text-xs text-gray-tradfi-silver">
                    <span>{bar.label}</span>
                    <span className="font-blender text-green-dark">
                      {bar.value}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: bar.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.value}%` }}
                      viewport={viewportOnce}
                      transition={{
                        duration: reduce ? 0 : 0.85,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ConversionSection({ reduce }) {
  return (
    <section className={`scroll-mt-24 ${MG.elevated} px-5 text-gray-off-white md:px-10`}>
      <div className="container py-block">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <SectionHeader
            eyebrow="Conversion & lead generation"
            title="From first click to qualified pipeline"
            description="Sidago tightens messaging, forms, routing, and nurture so marketing spend converts to conversations sales actually wants."
          />
        </motion.div>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
          >
            {conversionItems.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                transition={{ duration: reduce ? 0 : undefined }}
                className={`rounded-2xl ${MG.mid} p-5 shadow-[0_12px_36px_rgba(0,0,0,0.3)] md:p-6`}
              >
                <h3 className="text-lg text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-tradfi-silver">
                  {item.body}
                </p>
              </motion.article>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: reduce ? 0 : undefined }}
            className={`rounded-2xl ${MG.deep} bg-[linear-gradient(165deg,rgba(50,57,53,0.55),rgba(7,11,9,0.98))] p-6 shadow-[0_14px_44px_rgba(0,0,0,0.32)] md:p-8`}
          >
            <p className="font-blender text-xs uppercase tracking-[0.2em] text-green-dark">
              Program readiness
            </p>
            <p className="mt-2 text-sm text-gray-tradfi-silver">
              Example readiness scores from a joint marketing–sales review.
            </p>
            <div className="mt-8 space-y-6">
              {progressMetrics.map((row) => (
                <div key={row.label}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-gray-off-white">{row.label}</span>
                    <span className="font-blender text-green-dark">
                      {row.value}%
                    </span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-[#1C211E]/90">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#168b50] to-[#3c85dd]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.value}%` }}
                      viewport={viewportOnce}
                      transition={{
                        duration: reduce ? 0 : 0.9,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MetricsSection({ reduce }) {
  return (
    <section className={`scroll-mt-24 ${MG.deep} px-5 text-gray-off-white md:px-10`}>
      <div className="container py-block">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <SectionHeader
            eyebrow="Campaign performance metrics"
            title="Outcomes we optimize toward—not vanity alone"
            description="Figures reflect composite benchmarks from Sidago-led growth programs; your reporting is always tailored to your funnel."
          />
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-3"
        >
          {performanceStats.map((row) => (
            <motion.div
              key={row.label}
              variants={fadeUp}
              transition={{ duration: reduce ? 0 : undefined }}
              className={`rounded-2xl ${MG.elevated} p-6 text-center shadow-[0_12px_40px_rgba(0,0,0,0.45)] md:p-8`}
            >
              <div className="font-blender text-4xl text-white md:text-5xl lg:text-6xl">
                <CountUpStat value={row.value} />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-tradfi-silver">
                {row.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CaseStudySection({ reduce }) {
  return (
    <section className={`scroll-mt-24 ${MG.mid} px-5 text-gray-off-white md:px-10`}>
      <div className="container py-block">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <SectionHeader
            eyebrow="Success highlights"
            title="Case studies built for decision-makers"
            description="Representative outcomes from marketing growth engagements—scoped, measured, and documented for internal stakeholders."
          />
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 lg:grid-cols-2"
        >
          {caseStudies.map((cs) => (
            <motion.article
              key={cs.title}
              variants={fadeUp}
              transition={{ duration: reduce ? 0 : undefined }}
              className={`flex flex-col rounded-2xl ${MG.elevated} p-6 shadow-[0_14px_44px_rgba(0,0,0,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_56px_rgba(0,0,0,0.38)] md:p-8`}
            >
              <p className="font-blender text-xs uppercase tracking-[0.2em] text-green-dark">
                {cs.title}
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-off-white md:text-lg">
                {cs.outcome}
              </p>
              <blockquote className="mt-6 rounded-lg bg-white/[0.04] py-4 pl-5 pr-4 text-sm italic leading-relaxed text-gray-tradfi-silver">
                “{cs.quote}”
              </blockquote>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-gray-tradfi-silver/80">
                — {cs.role}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProcessSection({ reduce }) {
  return (
    <section className={`scroll-mt-24 ${MG.elevated} px-5 text-gray-off-white md:px-10`}>
      <div className="container py-block">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <SectionHeader
            eyebrow="How we work"
            title="A transparent process from kickoff to scale"
            description="You always know what is shipping this week, what is learning, and what is next in the backlog."
          />
        </motion.div>
        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {processSteps.map((step) => (
            <motion.li
              key={step.step}
              variants={fadeUp}
              transition={{ duration: reduce ? 0 : undefined }}
              className={`overflow-hidden rounded-2xl ${MG.mid} p-6 shadow-[0_12px_36px_rgba(0,0,0,0.3)]`}
            >
              <span className="font-blender text-3xl text-white/10 md:text-4xl">
                {step.step}
              </span>
              <h3 className="mt-2 text-lg text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-tradfi-silver">
                {step.body}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const reduce = useReducedMotion();

  return (
    <section className={`scroll-mt-24 ${MG.deep} px-5 text-gray-off-white md:px-10`}>
      <div className="container max-w-3xl py-block">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions about marketing growth at Sidago"
            description="Straight answers on how we collaborate, measure, and ship—before you ever book a call."
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-4 flex flex-col gap-2"
        >
          {faqItems.map((item, index) => {
            const open = openIndex === index;
            return (
              <motion.div
                key={item.q}
                variants={fadeUp}
                className={`overflow-hidden rounded-xl ${MG.elevated} shadow-[0_8px_28px_rgba(0,0,0,0.28)]`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-start justify-between gap-4 px-4 py-5 text-left text-base text-white transition hover:bg-white/[0.03] md:px-5 md:text-lg"
                  aria-expanded={open}
                >
                  <span className="pr-2">{item.q}</span>
                  <FiChevronDown
                    className={`mt-1 h-5 w-5 shrink-0 text-green-dark transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      key={`faq-${index}`}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: reduce ? 0 : 0.22 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-5 pr-8 text-sm leading-relaxed text-gray-tradfi-silver md:px-5 md:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default function MarketingGrowthView({ footer }) {
  const reduce = useReducedMotion();

  return (
    <div className="flex min-h-svh flex-col text-base">
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
        <Navigation />
        <main
          className={`[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] relative flex-1 ${MG.deep} text-gray-off-white dark`}
          style={{ colorScheme: "dark" }}
        >
          <MarketingHero reduce={reduce} />
          <StrategySection reduce={reduce} />
          <ServicesSection reduce={reduce} />
          <InsightsSection reduce={reduce} />
          <ConversionSection reduce={reduce} />
          <MetricsSection reduce={reduce} />
          <CaseStudySection reduce={reduce} />
          <ProcessSection reduce={reduce} />
          <FaqSection />
          <CTASection />
          <Footer footer={footer} />
        </main>
      </div>
    </div>
  );
}
