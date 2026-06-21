"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
import AtAGlanceSection from "@/src/components/sections/v2/digital-support-services/AtAGlanceSection";
import ReportContentsSection from "@/src/components/sections/v2/digital-support-services/ReportContentsSection";
import SubscribeSection from "@/src/components/sections/v2/digital-support-services/SubscribeSection";
import SimilarInsightsSection from "@/src/components/sections/v2/digital-support-services/SimilarInsightsSection";
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
              href="/contact/digital-support"
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

function PageBody({
  reduce,
  hero,
  atAGlance,
  reportContents,
  subscribe,
  similarInsights,
}) {
  const lightSections = (
    <>
      <AtAGlanceSection {...atAGlance} />
      <ReportContentsSection content={reportContents} />
      <SubscribeSection content={subscribe} />
      <SimilarInsightsSection
        content={similarInsights}
        sectionBgColor={similarInsights?.sectionBgColor}
      />
    </>
  );

  if (hero) {
    return (
      <>
        {hero}
        {lightSections}
        <div
          className="bg-black text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
        </div>
      </>
    );
  }

  return (
    <>
      <HeroSection reduce={reduce} />
      {lightSections}
    </>
  );
}

export default function DigitalSupportServicesView({
  footer,
  hero,
  atAGlance,
  reportContents,
  subscribe,
  similarInsights,
}) {
  const reduce = useReducedMotion();

  return (
    <div className="flex min-h-svh flex-col text-base">
      <Navigation />

      <div className="flex flex-1 flex-col">
        <main
          className={`[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] flex-1 ${hero ? "" : "bg-black text-gray-off-white"
            }`}
          style={hero ? undefined : { colorScheme: "dark" }}
        >
          <PageBody
            reduce={reduce}
            hero={hero}
            atAGlance={atAGlance}
            reportContents={reportContents}
            subscribe={subscribe}
            similarInsights={similarInsights}
          />
          <CTASection />
          <Footer footer={footer} />
        </main>
      </div>
    </div>
  );
}
