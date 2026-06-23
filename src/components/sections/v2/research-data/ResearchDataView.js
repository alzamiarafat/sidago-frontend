"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCopy,
  FiDatabase,
  FiDownload,
  FiFileText,
} from "react-icons/fi";
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.64, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function Section({ id, eyebrow, title, description, children, tone = "base", className = "" }) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      className={`research-clean-section research-clean-section--${tone} relative scroll-mt-24 px-5 py-16 md:px-10 md:py-24 ${className}`}
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl md:mb-12">
          <div className="font-blender text-sm tracking-[0.24em] text-[#E7512F]">{eyebrow}</div>
          <h2 className="mt-4 text-3xl font-normal leading-[1.05] text-white md:text-5xl">{title}</h2>
          {description ? <p className="mt-4 text-base leading-relaxed text-gray-off-white/64 md:text-lg">{description}</p> : null}
        </div>
        {children}
      </div>
    </motion.section>
  );
}

function Button({ children, variant = "primary", icon: Icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`research-clean-button inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 font-blender text-sm uppercase tracking-[0.16em] transition ${
        variant === "primary" ? "bg-[#E7512F] text-white" : "bg-white/[0.075] text-gray-off-white"
      }`}
    >
      {Icon ? <Icon aria-hidden="true" className="h-4 w-4" /> : null}
      {children}
    </button>
  );
}

function IconSurface({ icon: Icon }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/[0.07] text-[#E7512F] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <Icon aria-hidden="true" className="h-5 w-5" />
    </span>
  );
}

function Hero({ hero, onNavigate }) {
  return (
    <section id="hero" className="research-clean-hero relative overflow-hidden px-5 pb-16 pt-24 md:px-10 md:pb-24 md:pt-32">
      <div className="research-clean-grid absolute inset-0" aria-hidden="true" />
      <div className="research-clean-glow research-clean-glow-a" aria-hidden="true" />
      <div className="research-clean-glow research-clean-glow-b" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="font-blender text-sm tracking-[0.28em] text-[#E7512F] md:text-base">
            {hero.eyebrow}
          </motion.div>
          <motion.h1 variants={fadeUp} className="mt-5 max-w-5xl text-4xl font-normal leading-[0.98] text-white md:text-6xl lg:text-7xl">
            {hero.title}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-relaxed text-gray-off-white/72 md:text-xl">
            {hero.description}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button icon={FiArrowUpRight} onClick={() => onNavigate("reports")}>Explore Research</Button>
            <Button icon={FiDownload} variant="secondary" onClick={() => onNavigate("datasets")}>Download Reports</Button>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="research-clean-panel research-clean-float rounded-xl p-5 md:p-6">
          <div className="flex items-center justify-between gap-5">
            <div>
              <div className="font-blender text-xs uppercase tracking-[0.24em] text-[#3c85dd]">Research signal</div>
              <div className="mt-2 text-2xl text-white">Live intelligence preview</div>
            </div>
            <span className="rounded-full bg-[#168b50]/14 px-3 py-1 text-sm text-[#75d39e]">Live</span>
          </div>
          <LineChart />
        </motion.div>
      </div>
    </section>
  );
}

function LineChart() {
  return (
    <svg className="mt-6 h-48 w-full overflow-visible" viewBox="0 0 420 180" role="img" aria-label="Research trend line chart">
      {[30, 70, 110, 150].map((y) => (
        <line key={y} x1="0" x2="420" y1={y} y2={y} stroke="rgba(255,255,255,0.07)" />
      ))}
      <motion.path
        d="M4 138 C58 86 98 118 144 75 C190 31 228 108 278 66 C326 25 358 52 416 24"
        fill="none"
        stroke="#3c85dd"
        strokeLinecap="round"
        strokeWidth="5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.35, ease: "easeOut" }}
      />
      <motion.path
        d="M4 152 C70 128 108 140 154 104 C208 62 250 128 304 84 C344 52 370 74 416 42"
        fill="none"
        stroke="#E7512F"
        strokeLinecap="round"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.12, ease: "easeOut" }}
      />
    </svg>
  );
}

function ReportsSection({ reports, filters, selectedFilter, setSelectedFilter, showToast }) {
  const filteredReports = selectedFilter === "All" ? reports : reports.filter((report) => report.category === selectedFilter || report.type === selectedFilter);

  return (
    <Section
      id="reports"
      tone="soft"
      eyebrow="Featured reports"
      title="Clean research cards for fast evaluation."
      description="Each report keeps metadata visible, summaries short, and actions easy to scan."
    >
      <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setSelectedFilter(filter)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm transition ${
              selectedFilter === filter ? "bg-[#E7512F] text-white" : "bg-white/[0.055] text-gray-off-white/58 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredReports.map((report) => (
          <motion.article key={report.title} variants={fadeUp} whileHover={{ y: -7 }} className="research-clean-card overflow-hidden rounded-xl">
            <div className="relative min-h-44 overflow-hidden bg-[#101814]">
              <div className="absolute inset-0 opacity-80" style={{ background: `radial-gradient(circle at 24% 24%, ${report.color}44, transparent 18rem)` }} />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="font-blender text-xs tracking-[0.22em] text-white/58">Sidago research</div>
                <h3 className="mt-2 text-2xl leading-tight text-white">{report.title}</h3>
              </div>
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-gray-off-white/46">
                <span>{report.category}</span>
                <span>/</span>
                <span>{report.date}</span>
                <span>/</span>
                <span>{report.size}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-off-white/62">{report.summary}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button variant="secondary" icon={FiArrowUpRight}>View</Button>
                <Button variant="secondary" icon={FiDownload} onClick={showToast}>Download</Button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

function DatasetsSection({ datasets, showToast }) {
  return (
    <Section
      id="datasets"
      tone="soft"
      eyebrow="Datasets & downloads"
      title="Download resources or request API access."
      description="Clean file cards support reports, workbooks, CSV exports, and partner API documentation."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {datasets.map((file, index) => (
          <motion.div key={file.name} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ y: -5 }} className="research-clean-card rounded-xl p-5">
            <div className="flex items-center justify-between">
              <IconSurface icon={file.format === "API" ? FiDatabase : FiFileText} />
              <span className="rounded-full bg-white/[0.07] px-3 py-1 text-xs text-gray-off-white/54">{file.format}</span>
            </div>
            <h3 className="mt-6 text-lg leading-tight text-white">{file.name}</h3>
            <div className="mt-2 text-sm text-gray-off-white/50">{file.size}</div>
            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: file.status === "Ready" ? "100%" : file.status === "Syncing" ? "62%" : "38%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: index * 0.08 }}
                className="h-full rounded-full bg-[#168b50]"
              />
            </div>
            <button type="button" onClick={showToast} className="mt-5 inline-flex items-center gap-2 text-sm text-[#E7512F] transition hover:text-white">
              {file.format === "API" ? <FiCopy aria-hidden="true" /> : <FiDownload aria-hidden="true" />}
              {file.status === "Request" ? "Request access" : "Download"}
            </button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function InsightsSection({ insights }) {
  return (
    <Section
      id="insights"
      tone="soft"
      eyebrow="Research insights"
      title="Editorial highlights for decision teams."
      description="A clean editorial grid keeps research commentary readable and restrained."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {insights.map((item, index) => (
          <motion.article key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ y: -7 }} className={`research-clean-card overflow-hidden rounded-xl ${index === 0 ? "lg:col-span-2" : ""}`}>
            <div className="min-h-40 bg-gradient-to-br from-[#E7512F]/18 via-[#3c85dd]/12 to-white/[0.025]" />
            <div className="p-5">
              <div className="font-blender text-xs uppercase tracking-[0.2em] text-[#E7512F]">{item.label}</div>
              <h3 className="mt-3 text-2xl leading-tight text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-off-white/60">{item.summary}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Toast({ visible }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          className="fixed bottom-5 left-5 z-[80] rounded-lg bg-[#101814] px-5 py-4 text-sm text-white shadow-2xl"
        >
          Download request added.
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default function ResearchDataView({ footer, content }) {
  if (!content?.hero || !content?.reports || !content?.filters || !content?.datasets || !content?.insights) {
    return null;
  }

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [toastVisible, setToastVisible] = useState(false);

  const navigateToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const showToast = () => {
    setToastVisible(true);
    window.setTimeout(() => setToastVisible(false), 2000);
  };

  return (
    <div className="flex min-h-svh flex-col text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] flex-1 dark bg-gray-night-green text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <Hero hero={content.hero} onNavigate={navigateToSection} />
          <ReportsSection
            reports={content.reports}
            filters={content.filters}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            showToast={showToast}
          />
          <DatasetsSection datasets={content.datasets} showToast={showToast} />
          <InsightsSection insights={content.insights} />
          <CTASection />
          <Footer footer={footer} />
        </main>
      </div>
      <Toast visible={toastVisible} />
    </div>
  );
}
