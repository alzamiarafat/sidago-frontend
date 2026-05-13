"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiDownload, FiShield } from "react-icons/fi";
import { legalTabs } from "@/src/components/sections/v2/support-compliance/data";
import { fadeIn, viewportOnce } from "@/src/components/sections/v2/support-compliance/motion";

export default function ComplianceLegalHub() {
  return (
    <section
      id="compliance-documents"
      className="relative scroll-mt-24 overflow-hidden bg-[#151916] px-4 py-16 text-gray-off-white sm:px-6 md:px-10 md:py-24"
    >
      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
          className="mb-12 max-w-2xl md:mb-14"
        >
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.32em] text-white/38">
            Legal & compliance
          </p>
          <h2 className="mt-4 font-saans text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-tight tracking-tight text-white">
            Trust center documents
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/50 md:text-base">
            Clear summaries of the core policies and terms that govern how Sidago works with your teams.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {legalTabs.map((tab, index) => (
            <motion.article
              key={tab.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.35, delay: 0.05 * index }}
              className="group flex h-full flex-col rounded-3xl bg-white/[0.045] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_36px_100px_rgba(0,0,0,0.55)] md:p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5">
                  <FiShield className="h-3.5 w-3.5 text-white/80" aria-hidden />
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/70">
                    {tab.label}
                  </span>
                </div>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="font-saans text-lg leading-snug text-white md:text-xl">
                  {tab.label}
                </h3>
                <p className="text-[0.78rem] text-white/45">
                  Last updated {tab.lastUpdated}
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {tab.sections[0]?.body}
              </p>
              <div className="mt-4 space-y-2">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-white/45">
                  Key highlights
                </p>
                <ul className="space-y-1.5">
                  {tab.sections.slice(1).map((section) => (
                    <li
                      key={section.title}
                      className="flex gap-2 text-[0.82rem] leading-relaxed text-white/70"
                    >
                      <span className="mt-1 h-[3px] w-4 shrink-0 rounded-full bg-[#E7512F]" />
                      <span>{section.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={tab.href}
                  className="inline-flex flex-1 min-w-[8.5rem] items-center justify-center rounded-full bg-[#E7512F] px-4 py-2.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gray-night-green transition hover:bg-[#f0623a]"
                >
                  View full document
                </Link>
                <Link
                  href={tab.pdfHref}
                  className="inline-flex flex-1 min-w-[8.5rem] items-center justify-center gap-2 rounded-full bg-white/[0.1] px-4 py-2.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition hover:bg-white/[0.16] hover:text-white hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]"
                >
                  <FiDownload className="h-3.5 w-3.5" aria-hidden />
                  PDF
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
