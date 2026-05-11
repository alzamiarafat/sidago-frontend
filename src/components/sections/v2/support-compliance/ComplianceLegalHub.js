"use client";

import {
  TabGroup,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { motion, useReducedMotion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import ComplianceClauseSlider from "@/src/components/sections/v2/support-compliance/ComplianceClauseSlider";
import { legalTabs } from "@/src/components/sections/v2/support-compliance/data";
import { fadeIn, viewportOnce } from "@/src/components/sections/v2/support-compliance/motion";

function Ambient() {
  return (
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_80%_0%,rgba(231,81,47,0.09),transparent_50%),radial-gradient(ellipse_50%_40%_at_0%_100%,rgba(16,185,129,0.05),transparent_55%)]"
      aria-hidden
    />
  );
}

export default function ComplianceLegalHub() {
  const reduce = useReducedMotion();

  return (
    <section
      id="compliance-documents"
      className="relative scroll-mt-24 overflow-hidden bg-[#050806] px-4 py-16 text-gray-off-white sm:px-6 md:px-10 md:py-24"
    >
      <Ambient />
      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
          className="mb-12 max-w-2xl md:mb-14"
        >
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.32em] text-white/38">
            Legal
          </p>
          <h2 className="mt-4 font-blender text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-tight tracking-tight text-white">
            Policies & data
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/50 md:text-base">
            Tabbed documents with a clause slider—scan and jump without long
            accordion walls.
          </p>
        </motion.div>

        <TabGroup className="flex flex-col gap-10 outline-none md:gap-12">
          <TabList className="flex flex-wrap gap-2 md:gap-3">
            {legalTabs.map((tab, i) => (
              <Tab
                key={tab.id}
                className={({ selected }) =>
                  [
                    "rounded-xl px-4 py-3 text-left font-mono text-[0.65rem] uppercase tracking-[0.14em] transition outline-none md:px-4 md:py-3.5",
                    selected
                      ? "bg-[#E7512F]/25 text-white shadow-[0_12px_36px_rgba(231,81,47,0.15)]"
                      : "bg-white/[0.04] text-white/45 hover:bg-white/[0.08] hover:text-white/80",
                  ].join(" ")
                }
              >
                <span className="mr-2 font-blender text-lg tabular-nums text-white/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {tab.label}
              </Tab>
            ))}
          </TabList>

          <TabPanels className="min-w-0 flex-1 outline-none">
            {legalTabs.map((tab) => (
              <TabPanel key={tab.id} className="outline-none focus:outline-none">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-white/35">
                      {tab.label}
                    </p>
                    <p className="mt-2 text-xs text-white/45">
                      Updated {tab.lastUpdated}
                    </p>
                  </div>
                  <motion.button
                    type="button"
                    whileHover={reduce ? undefined : { scale: 1.02 }}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                    className="inline-flex items-center gap-2 self-start rounded-full bg-white/[0.1] px-5 py-2.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-white/90 transition hover:bg-white/[0.16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E7512F]"
                    onClick={(e) => e.preventDefault()}
                  >
                    <FiDownload className="h-3.5 w-3.5 opacity-80" aria-hidden />
                    {tab.pdfLabel}
                  </motion.button>
                </div>

                <div className="mt-10">
                  <ComplianceClauseSlider
                    key={tab.id}
                    tabId={tab.id}
                    sections={tab.sections}
                  />
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
}
