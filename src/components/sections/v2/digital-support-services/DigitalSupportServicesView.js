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
  FiChevronDown,
  FiClock,
  FiHeadphones,
  FiMessageCircle,
  FiMonitor,
  FiShield,
} from "react-icons/fi";
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import {
  coreServices,
  coverageHighlights,
  deliverySteps,
  faqItems,
  performanceStats,
  supportPillars,
} from "@/src/components/sections/v2/digital-support-services/data";
import {
  fadeIn,
  fadeUp,
  stagger,
  viewportOnce,
} from "@/src/components/sections/v2/digital-support-services/motion";

const DSS = {
  hero: "bg-black",
  deep: "bg-[#070B09]",
  mid: "bg-[#151916]",
  elevated: "bg-[#1C211E]",
};

const serviceIcons = [
  FiHeadphones,
  FiMonitor,
  FiMessageCircle,
  FiShield,
  FiClock,
  FiShield,
];

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

function HeroSection({ reduce }) {
  return (
    <section
      id="top"
      className={`relative overflow-hidden ${DSS.hero} px-5 pb-16 pt-[calc(var(--header-height)+2.5rem)] text-gray-off-white md:px-10 md:pb-24 md:pt-[calc(var(--header-height)+3.5rem)]`}
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -right-1/4 top-0 h-[24rem] w-[24rem] rounded-full bg-[#E7512F]/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(231,81,47,0.12),transparent_55%)]" />
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
            className="font-blender text-sm uppercase tracking-[0.26em] text-[#E7512F] md:text-base"
          >
            Digital support services
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-4 text-4xl font-normal leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Reliable digital support for{" "}
            <span className="text-[#E7512F]">teams and customers</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-gray-tradfi-silver md:text-lg"
          >
            Sidago delivers structured help desk, technical assistance, and
            customer operations so your organization stays responsive across
            channels—without overloading in-house staff.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#E7512F] px-6 py-3 font-blender text-sm uppercase tracking-[0.14em] text-white transition hover:bg-[#cf4526] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E7512F]"
            >
              Discuss support scope
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
              View services
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PillarsSection({ reduce }) {
  return (
    <section className={`scroll-mt-24 ${DSS.mid} px-5 text-gray-off-white md:px-10`}>
      <div className="container py-block">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <SectionHeader
            eyebrow="Why Sidago"
            title="Support built for modern digital operations"
            description="Coverage, tooling, and quality controls designed for organizations that cannot afford slow or inconsistent responses."
          />
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {supportPillars.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              transition={{ duration: reduce ? 0 : undefined }}
              className={`group rounded-2xl ${DSS.elevated} p-6 shadow-[0_14px_44px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-0.5`}
            >
              <div className="h-1 w-10 rounded-full bg-[#E7512F] opacity-80 transition group-hover:opacity-100" />
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
      className={`scroll-mt-24 ${DSS.deep} px-5 text-gray-off-white md:px-10`}
    >
      <div className="container py-block">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <SectionHeader
            eyebrow="Core capabilities"
            title="End-to-end digital support, modular by design"
            description="Start with a single queue or channel and expand as volumes, tools, and stakeholder needs grow."
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
            const Icon = serviceIcons[index] ?? FiHeadphones;
            return (
              <motion.article
                key={svc.title}
                variants={fadeUp}
                transition={{ duration: reduce ? 0 : undefined }}
                className={`flex flex-col rounded-2xl ${DSS.elevated} p-6 shadow-[0_12px_40px_rgba(0,0,0,0.32)] transition duration-300 hover:-translate-y-0.5`}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/[0.06] text-[#E7512F]">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg text-white">{svc.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-tradfi-silver">
                  {svc.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function DeliverySection({ reduce }) {
  return (
    <section className={`scroll-mt-24 ${DSS.mid} px-5 text-gray-off-white md:px-10`}>
      <div className="container py-block">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <SectionHeader
            eyebrow="How we deliver"
            title="From discovery to steady-state operations"
            description="A phased rollout keeps risk low while your team gains confidence in coverage and reporting."
          />
        </motion.div>
        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {deliverySteps.map((item) => (
            <motion.li
              key={item.step}
              variants={fadeUp}
              transition={{ duration: reduce ? 0 : undefined }}
              className={`list-none rounded-2xl border border-white/[0.06] ${DSS.elevated} p-6`}
            >
              <span className="font-blender text-sm uppercase tracking-[0.2em] text-[#E7512F]">
                {item.step}
              </span>
              <h3 className="mt-4 text-lg text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-tradfi-silver">
                {item.body}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

function CoverageSection() {
  return (
    <section className={`scroll-mt-24 ${DSS.deep} px-5 text-gray-off-white md:px-10`}>
      <div className="container py-block">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <SectionHeader
            eyebrow="Operating model"
            title="Coverage that leadership can trust"
            description="Clear intake, security-aware handling, and reporting rhythms—so support is an extension of your ops, not a black box."
          />
          <ul className="space-y-6">
            {coverageHighlights.map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6"
              >
                <p className="font-blender text-sm uppercase tracking-[0.18em] text-[#E7512F]">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-tradfi-silver md:text-base">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className={`${DSS.hero} px-5 text-gray-off-white md:px-10`}>
      <div className="container py-12 md:py-16">
        <ul className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {performanceStats.map((item) => (
            <li key={item.label} className="text-center md:text-left">
              <p className="text-3xl font-normal text-white md:text-4xl">
                {item.stat}
              </p>
              <p className="mt-2 font-blender text-xs uppercase tracking-[0.2em] text-gray-tradfi-silver md:text-sm">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FaqSection({ reduce }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className={`scroll-mt-24 ${DSS.mid} px-5 text-gray-off-white md:px-10`}
    >
      <div className="container py-block">
        <SectionHeader
          eyebrow="FAQ"
          title="Common questions"
          description="Quick answers about scope, tooling, timelines, and quality at scale."
        />
        <ul className="mx-auto max-w-3xl divide-y divide-white/[0.08]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <li key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="text-base text-white md:text-lg">
                    {item.question}
                  </span>
                  <FiChevronDown
                    className={`h-5 w-5 shrink-0 text-[#E7512F] transition ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduce ? 0 : 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-gray-tradfi-silver md:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default function DigitalSupportServicesView({ footer }) {
  const reduce = useReducedMotion();

  return (
    <div className="flex h-svh flex-col text-base">
      <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
        <Navigation />

        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] flex-1 bg-black text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroSection reduce={reduce} />
          <PillarsSection reduce={reduce} />
          <ServicesSection reduce={reduce} />
          <DeliverySection reduce={reduce} />
          <CoverageSection />
          <StatsSection />
          <FaqSection reduce={reduce} />
          <CTASection />
          <Footer footer={footer} />
        </main>
      </div>
    </div>
  );
}
