"use client";

import "../../app/globals.css";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  FiActivity,
  FiArchive,
  FiBarChart2,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiCopy,
  FiDatabase,
  FiDownload,
  FiExternalLink,
  FiFileText,
  FiFilter,
  FiGrid,
  FiHeart,
  FiLayers,
  FiList,
  FiMapPin,
  FiMenu,
  FiMoon,
  FiPieChart,
  FiSearch,
  FiShare2,
  FiSliders,
  FiStar,
  FiSun,
  FiTrendingUp,
  FiUsers,
  FiX,
  FiZap,
} from "react-icons/fi";
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/Navbar";
import CountUpStat from "@/src/components/sections/v2/executionpage/CountUpStat";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const reports = [
  {
    title: "SIDAGO Digital Economy Outlook 2026",
    category: "Economy",
    year: "2026",
    region: "Global",
    type: "Report",
    date: "May 10, 2026",
    size: "18.2 MB",
    downloads: "12.8K",
    description:
      "Enterprise research on digital adoption, investment signals, workforce readiness, and regional operating momentum.",
    color: "#3c85dd",
    tags: ["Economy", "Forecast", "Global"],
  },
  {
    title: "Agriculture Data Systems Benchmark",
    category: "Agriculture",
    year: "2026",
    region: "Asia Pacific",
    type: "Dataset",
    date: "April 18, 2026",
    size: "42.8 MB",
    downloads: "9.4K",
    description:
      "A benchmark of agricultural data maturity, logistics visibility, production reporting, and field survey coverage.",
    color: "#16a34a",
    tags: ["Agriculture", "Survey", "Dataset"],
  },
  {
    title: "Healthcare Access Intelligence Brief",
    category: "Healthcare",
    year: "2025",
    region: "North America",
    type: "Brief",
    date: "December 12, 2025",
    size: "8.6 MB",
    downloads: "7.1K",
    description:
      "Survey-led insight into care access, reporting gaps, service quality signals, and analytics adoption.",
    color: "#f075e4",
    tags: ["Healthcare", "Access", "Brief"],
  },
  {
    title: "Technology Workforce Survey",
    category: "Technology",
    year: "2025",
    region: "Global",
    type: "Survey",
    date: "October 8, 2025",
    size: "11.4 MB",
    downloads: "15.2K",
    description:
      "Original SIDAGO survey research on skill readiness, automation exposure, AI operations, and training needs.",
    color: "#E7512F",
    tags: ["Technology", "AI", "Survey"],
  },
];

const stats = [
  { label: "Research Reports", value: "2500+", icon: FiFileText },
  { label: "Active Surveys", value: "120+", icon: FiActivity },
  { label: "Data Records", value: "8M+", icon: FiDatabase },
  { label: "Partner Organizations", value: "65+", icon: FiUsers },
  { label: "District Coverage", value: "40+", icon: FiMapPin },
  { label: "Years of Data", value: "15+", icon: FiArchive },
];

const categories = [
  { title: "Education", icon: FiBookOpen, description: "Learning access, workforce readiness, and institutional performance." },
  { title: "Agriculture", icon: FiLayers, description: "Production data, field surveys, supply chain visibility, and rural systems." },
  { title: "Economy", icon: FiTrendingUp, description: "Market outlooks, digital economy movement, and investment signals." },
  { title: "Healthcare", icon: FiHeart, description: "Service access, patient experience, reporting quality, and care operations." },
  { title: "Technology", icon: FiSliders, description: "AI adoption, software systems, automation, and infrastructure readiness." },
  { title: "Climate", icon: FiActivity, description: "Climate resilience, risk monitoring, adaptation signals, and regional exposure." },
  { title: "Governance", icon: FiCheckCircle, description: "Policy systems, service delivery, monitoring, and institutional accountability." },
  { title: "Employment", icon: FiBriefcase, description: "Labor markets, skill readiness, income mobility, and workforce systems." },
  { title: "Infrastructure", icon: FiBarChart2, description: "Connectivity, physical assets, service networks, and investment readiness." },
  { title: "Social Development", icon: FiBriefcase, description: "Community indicators, policy research, and public-sector datasets." },
];

const navLinks = ["Research", "Reports", "Datasets", "Insights", "Analytics", "Publications", "API Access"];

const suggestions = [
  "Bangladesh district coverage data",
  "Digital economy outlook 2026",
  "Agriculture survey microdata",
  "Healthcare access indicators",
];

const savedSearches = ["National surveys", "Open datasets", "Policy documents"];

const insights = [
  {
    title: "How verified survey systems improve policy confidence",
    label: "Expert analysis",
    description: "A practical editorial note on validation, field coverage, and decision-grade evidence.",
  },
  {
    title: "The next operating model for public-sector data intelligence",
    label: "Research highlight",
    description: "Why analytics teams are moving toward shared indicators, open APIs, and continuous monitoring.",
  },
  {
    title: "District-level reporting needs more than dashboards",
    label: "Trending topic",
    description: "SIDAGO analysis on usability, governance, refresh cadence, and field-level accountability.",
  },
];

const partners = ["UNDP", "World Bank", "ADB", "BRAC", "USAID", "JICA", "WHO", "UNICEF"];

const mapDistricts = [
  { name: "Dhaka", x: "53%", y: "45%", score: "94%" },
  { name: "Chattogram", x: "68%", y: "68%", score: "82%" },
  { name: "Rajshahi", x: "32%", y: "30%", score: "76%" },
  { name: "Sylhet", x: "76%", y: "27%", score: "71%" },
  { name: "Khulna", x: "36%", y: "69%", score: "88%" },
];

const testimonials = [
  {
    quote: "SIDAGO research gives our teams the clarity needed to compare regions, validate assumptions, and move policy discussions forward.",
    name: "Research Program Lead",
    org: "Development partner network",
  },
  {
    quote: "The data experience feels reliable, modern, and practical. It helps transform raw survey activity into board-ready intelligence.",
    name: "Analytics Director",
    org: "Institutional research unit",
  },
];

const timeline = [
  { type: "Publication", title: "Digital Economy Outlook published", date: "May 2026", detail: "New global report with updated regional indices and 9.6M analyzed records." },
  { type: "Survey", title: "Technology workforce survey completed", date: "April 2026", detail: "32 active survey panels consolidated into a new skills-readiness benchmark." },
  { type: "Dataset", title: "Agriculture benchmark data uploaded", date: "March 2026", detail: "CSV and API data released for field operations, logistics, and production reporting." },
  { type: "Partner", title: "Research partner network expanded", date: "February 2026", detail: "New partner organizations added across healthcare, education, and social development." },
];

const downloads = [
  { name: "Digital Economy Outlook", format: "PDF", size: "18.2 MB", status: "Ready" },
  { name: "Agriculture Benchmark Dataset", format: "CSV", size: "42.8 MB", status: "Ready" },
  { name: "Survey Microdata Workbook", format: "Excel", size: "11.4 MB", status: "Syncing" },
  { name: "Research API Access Pack", format: "API", size: "Docs", status: "Request" },
];

const feedRows = [
  ["Digital adoption index", "Global", "2026", "94%"],
  ["Survey completion", "Asia Pacific", "2026", "81%"],
  ["Dataset freshness", "North America", "2025", "88%"],
  ["Publication quality", "Global", "2026", "97%"],
];

const filterGroups = {
  Year: ["2026", "2025", "2024"],
  Category: ["Economy", "Agriculture", "Healthcare", "Technology"],
  Region: ["Global", "Asia Pacific", "North America", "Europe"],
  "Research Type": ["Report", "Dataset", "Survey", "Brief"],
};

function Section({ children, className = "" }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      className={`px-5 py-14 md:px-10 md:py-20 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </motion.section>
  );
}

function SectionHeader({ eyebrow, title, description, action }) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-4xl">
        <div className="font-blender text-sm uppercase tracking-[0.24em] text-[#E7512F] md:text-base">
          {eyebrow}
        </div>
        <h2 className="mt-4 text-3xl font-normal leading-[1.08] text-white/90 md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-off-white/68 md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

function Button({ children, variant = "primary", icon: Icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`research-button inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 py-3 font-blender text-sm uppercase tracking-[0.16em] transition ${
        variant === "primary"
          ? "border border-[#E7512F]/70 bg-[#E7512F] text-white"
          : "border border-white/12 bg-white/[0.04] text-gray-off-white"
      }`}
    >
      {Icon ? <Icon aria-hidden="true" className="h-4 w-4" /> : null}
      {children}
    </button>
  );
}

function IconBadge({ icon: Icon }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] text-[#E7512F]">
      <Icon aria-hidden="true" className="h-5 w-5" />
    </span>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[90] h-1 origin-left bg-[#E7512F]"
      style={{ scaleX }}
    />
  );
}

function ResearchTopNav({ drawerOpen, setDrawerOpen }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-[#07100c]/78 px-5 py-3 backdrop-blur-xl md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#E7512F]/35 bg-[#E7512F]/12 text-[#E7512F]">
            <FiDatabase aria-hidden="true" />
          </span>
          <div>
            <div className="font-blender text-sm uppercase tracking-[0.22em] text-white">
              SIDAGO Data
            </div>
            <div className="text-xs text-gray-off-white/45">Updated Daily</div>
          </div>
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
              className={`relative rounded-full px-4 py-2 text-sm text-gray-off-white/62 transition hover:text-white ${
                index === 0 ? "text-white" : ""
              }`}
            >
              {link}
              {index === 0 ? (
                <motion.span
                  layoutId="research-active-nav"
                  className="absolute inset-x-3 -bottom-1 h-px bg-[#E7512F]"
                />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden rounded-2xl border border-white/10 p-3 text-gray-off-white/70 transition hover:text-white sm:inline-flex"
            aria-label="Search research"
          >
            <FiSearch aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setDarkMode((current) => !current)}
            className="rounded-2xl border border-white/10 p-3 text-gray-off-white/70 transition hover:text-white"
            aria-label="Toggle theme preview"
          >
            {darkMode ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="rounded-2xl border border-white/10 p-3 text-gray-off-white/70 transition hover:text-white lg:hidden"
            aria-label="Open research menu"
          >
            <FiMenu aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="research" className="research-hero relative overflow-hidden px-5 pb-16 pt-24 md:px-10 md:pb-24 md:pt-32">
      <div className="research-grid absolute inset-0" />
      <div className="research-glow research-glow-a" />
      <div className="research-glow research-glow-b" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="font-blender text-sm uppercase tracking-[0.28em] text-[#E7512F] md:text-base">
            SIDAGO intelligence platform
          </motion.div>
          <motion.h1 variants={fadeUp} className="mt-5 max-w-5xl text-4xl font-normal leading-[0.98] text-white md:text-6xl lg:text-7xl">
            SIDAGO Research & Data Center
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-relaxed text-gray-off-white/72 md:text-xl">
            Trusted research, survey insights, publications, datasets, and data intelligence for organizations that need evidence-led decisions.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button icon={FiSearch}>Explore Research</Button>
            <Button icon={FiDownload} variant="secondary">Download Reports</Button>
            <Button icon={FiDatabase} variant="secondary">Access Datasets</Button>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {["Verified research", "Updated Daily", "Real-time activity"].map((badge, index) => (
              <span key={badge} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-off-white/66">
                <span className={`h-2 w-2 rounded-full ${index === 2 ? "bg-[#168b50] research-pulse-dot" : "bg-[#E7512F]"}`} />
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="research-panel research-float rounded-2xl p-5 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-blender text-xs uppercase tracking-[0.24em] text-[#3c85dd]">
                Data intelligence
              </div>
              <div className="mt-2 text-2xl text-white">Research command view</div>
            </div>
            <span className="rounded-full border border-[#168b50]/40 bg-[#168b50]/12 px-3 py-1 text-sm text-[#75d39e]">
              Live
            </span>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl bg-[#0a120e]/80 p-4">
              <LineChart />
              <div className="mt-4 grid gap-3">
                {["Publication volume", "Survey confidence", "Dataset freshness"].map((label, index) => (
                  <ProgressRow key={label} label={label} value={`${82 - index * 9}%`} />
                ))}
              </div>
            </div>
            <div className="grid gap-3">
              {["Reports", "Surveys", "Datasets"].map((label, index) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-gray-off-white/52">{label}</div>
                  <div className="mt-3 font-blender text-3xl text-white">
                    <CountUpStat value={["148", "32", "9.6M"][index]} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProgressRow({ label, value }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-xs uppercase tracking-[0.16em] text-gray-off-white/50">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: value }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-full rounded-full bg-[#E7512F]"
        />
      </div>
    </div>
  );
}

function LineChart() {
  return (
    <svg className="h-44 w-full overflow-visible" viewBox="0 0 420 180" role="img" aria-label="Research trend line chart">
      {[30, 70, 110, 150].map((y) => (
        <line key={y} x1="0" x2="420" y1={y} y2={y} stroke="rgba(255,255,255,0.08)" />
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
        transition={{ duration: 1.5, delay: 0.15, ease: "easeOut" }}
      />
    </svg>
  );
}

function DonutChart() {
  return (
    <div className="relative mx-auto flex h-48 w-48 items-center justify-center">
      <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="46" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="13" />
        {[72, 18, 10].map((value, index) => (
          <motion.circle
            key={value}
            cx="60"
            cy="60"
            r="46"
            fill="none"
            stroke={["#E7512F", "#3c85dd", "#168b50"][index]}
            strokeDasharray={`${value * 2.89} 289`}
            strokeDashoffset={index === 0 ? 0 : index === 1 ? -208 : -260}
            strokeLinecap="round"
            strokeWidth="13"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.12 }}
          />
        ))}
      </svg>
      <div className="absolute text-center">
        <div className="font-blender text-4xl text-white">72%</div>
        <div className="text-xs uppercase tracking-[0.18em] text-gray-off-white/52">Reports</div>
      </div>
    </div>
  );
}

function BarChart() {
  const bars = ["42%", "58%", "76%", "64%", "88%", "70%"];
  return (
    <div className="flex h-48 items-end gap-3">
      {bars.map((height, index) => (
        <motion.div
          key={`${height}-${index}`}
          initial={{ height: "8%" }}
          whileInView={{ height }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: index * 0.08 }}
          className="flex-1 rounded-t-xl bg-gradient-to-t from-[#E7512F] to-[#3c85dd]"
        />
      ))}
    </div>
  );
}

function StatsSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Live Research Overview"
        title="Trusted national-scale research activity at a glance."
        description="Animated intelligence cards summarize the current state of SIDAGO reports, surveys, records, partners, district coverage, and longitudinal data."
      />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {stats.map(({ label, value, icon: Icon }) => (
          <motion.div key={label} variants={fadeUp} whileHover={{ y: -6 }} className="research-card rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <IconBadge icon={Icon} />
              <span className="h-2 w-2 rounded-full bg-[#168b50]" />
            </div>
            <div className="mt-8 font-blender text-4xl text-white md:text-5xl">
              <CountUpStat value={value} />
            </div>
            <div className="mt-3 text-sm text-gray-off-white/62">{label}</div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function SmartFilters({ selectedTag, setSelectedTag, setDrawerOpen }) {
  const tags = ["All", "Economy", "Agriculture", "Healthcare", "Technology", "Survey", "Dataset"];
  return (
    <Section className="pt-4">
      <div className="research-panel rounded-2xl p-4 md:p-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="flex min-h-14 items-center gap-3 rounded-2xl border border-white/10 bg-[#0a120e] px-4 text-gray-off-white/52">
            <FiSearch aria-hidden="true" className="h-5 w-5 text-[#E7512F]" />
            <span className="sr-only">Search research</span>
            <input
              className="w-full bg-transparent text-sm text-gray-off-white outline-none placeholder:text-gray-off-white/42"
              placeholder="Search reports, survey insights, datasets, publications..."
            />
          </label>
          <div className="flex gap-2">
            <Button variant="secondary" icon={FiFilter} onClick={() => setDrawerOpen(true)}>Filters</Button>
            <Button variant="secondary" icon={FiSliders}>Sort</Button>
          </div>
        </div>
        <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_0.7fr]">
          <div className="rounded-2xl border border-white/10 bg-[#07100c]/70 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-blender text-xs uppercase tracking-[0.2em] text-[#E7512F]">
                AI suggestions
              </span>
              <span className="text-xs text-gray-off-white/42">4 results</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button key={suggestion} type="button" className="rounded-full bg-white/[0.045] px-3 py-2 text-sm text-gray-off-white/62 transition hover:text-white">
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#07100c]/70 p-4">
            <div className="font-blender text-xs uppercase tracking-[0.2em] text-[#3c85dd]">
              Saved presets
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {savedSearches.map((preset) => (
                <span key={preset} className="rounded-full border border-white/10 px-3 py-2 text-sm text-gray-off-white/58">
                  {preset}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
                selectedTag === tag
                  ? "border-[#E7512F]/70 bg-[#E7512F]/14 text-white"
                  : "border-white/10 bg-white/[0.035] text-gray-off-white/60 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}

function FilterDrawer({ open, onClose }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-[70] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button type="button" aria-label="Close filters" onClick={onClose} className="absolute inset-0 bg-black/60" />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 flex h-full w-[min(26rem,100vw)] flex-col bg-[#08100f] p-5 text-gray-off-white shadow-[-24px_0_60px_rgba(0,0,0,0.42)]"
          >
            <div className="flex items-center justify-between">
              <div className="font-blender text-lg uppercase tracking-[0.18em]">Smart filters</div>
              <button type="button" onClick={onClose} className="rounded-full border border-white/10 p-3">
                <FiX aria-hidden="true" />
              </button>
            </div>
            <FilterControls />
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function FilterControls() {
  return (
    <div className="mt-6 space-y-6">
      {Object.entries(filterGroups).map(([group, options]) => (
        <div key={group}>
          <div className="font-blender text-sm uppercase tracking-[0.18em] text-[#E7512F]">{group}</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {options.map((option) => (
              <button key={option} type="button" className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-off-white/68">
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ReportsSection({ view, setView, selectedTag, openPreview }) {
  const filteredReports = selectedTag === "All"
    ? reports
    : reports.filter((report) => report.tags.includes(selectedTag) || report.category === selectedTag || report.type === selectedTag);

  return (
    <Section>
      <div id="reports" />
      <SectionHeader
        eyebrow="Featured Research Reports"
        title="Original SIDAGO publications, surveys, and datasets."
        description="Explore premium research cards with category filtering, publication metadata, downloadable assets, and modal previews."
        action={
          <div className="flex rounded-2xl border border-white/10 bg-white/[0.04] p-1">
            <button type="button" aria-label="Grid view" onClick={() => setView("grid")} className={`rounded-xl p-3 ${view === "grid" ? "bg-[#E7512F] text-white" : "text-gray-off-white/58"}`}>
              <FiGrid aria-hidden="true" />
            </button>
            <button type="button" aria-label="List view" onClick={() => setView("list")} className={`rounded-xl p-3 ${view === "list" ? "bg-[#E7512F] text-white" : "text-gray-off-white/58"}`}>
              <FiList aria-hidden="true" />
            </button>
          </div>
        }
      />

      <div className="mt-8 hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 lg:block">
        <FilterControls />
      </div>

      {filteredReports.length === 0 ? (
        <EmptyState />
      ) : (
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className={`mt-8 grid gap-5 ${view === "grid" ? "md:grid-cols-2 xl:grid-cols-4" : "grid-cols-1"}`}
        >
          {filteredReports.map((report) => (
            <ReportCard key={report.title} report={report} view={view} openPreview={openPreview} />
          ))}
        </motion.div>
      )}
    </Section>
  );
}

function ReportCard({ report, view, openPreview }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -7 }}
      className={`research-card research-card-hover overflow-hidden rounded-2xl ${view === "list" ? "grid md:grid-cols-[18rem_1fr]" : ""}`}
    >
      <div className="relative min-h-48 overflow-hidden bg-[#101814]">
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${report.color}44, rgba(255,255,255,0.03))` }} />
        <div className="absolute inset-4 rounded-2xl border border-white/12 bg-black/10" />
        <div className="absolute bottom-5 left-5 right-5">
          <div className="font-blender text-xs uppercase tracking-[0.22em] text-white/66">SIDAGO research</div>
          <div className="mt-2 text-2xl leading-none text-white">{report.year}</div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#E7512F]/14 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#ff9b82]">{report.category}</span>
          <span className="text-sm text-gray-off-white/44">{report.date}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-off-white/46">
          <span>{report.region}</span>
          <span>/</span>
          <span>{report.type}</span>
          <span>/</span>
          <span>{report.size}</span>
        </div>
        <h3 className="mt-4 text-xl leading-tight text-white">{report.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-off-white/62">{report.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {report.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-off-white/52">{tag}</span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between gap-3 text-sm text-gray-off-white/48">
          <span>{report.downloads} downloads</span>
          <div className="flex gap-2">
            <ToolTip label="Bookmark">
              <button type="button" className="rounded-full border border-white/10 p-2 transition hover:text-white">
                <FiStar aria-hidden="true" />
              </button>
            </ToolTip>
            <ToolTip label="Share">
              <button type="button" className="rounded-full border border-white/10 p-2 transition hover:text-white">
                <FiShare2 aria-hidden="true" />
              </button>
            </ToolTip>
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          <Button variant="secondary" icon={FiBookOpen} onClick={() => openPreview(report)}>View</Button>
          <Button variant="secondary" icon={FiDownload}>Download</Button>
        </div>
      </div>
    </motion.article>
  );
}

function EmptyState() {
  return (
    <div className="mt-8 rounded-2xl border border-dashed border-white/16 bg-white/[0.03] p-10 text-center">
      <FiArchive className="mx-auto h-8 w-8 text-[#E7512F]" />
      <h3 className="mt-4 text-xl text-white">No matching research found</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-gray-off-white/58">
        Try another tag, year, region, or research type to broaden the current view.
      </p>
    </div>
  );
}

function PreviewModal({ report, onClose }) {
  return (
    <AnimatePresence>
      {report ? (
        <motion.div className="fixed inset-0 z-[75] flex items-center justify-center px-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button type="button" aria-label="Close preview" onClick={onClose} className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <motion.div initial={{ y: 24, scale: 0.96 }} animate={{ y: 0, scale: 1 }} exit={{ y: 24, scale: 0.96 }} className="research-card relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-6">
            <button type="button" onClick={onClose} className="absolute right-4 top-4 rounded-full border border-white/10 p-3 text-white">
              <FiX aria-hidden="true" />
            </button>
            <div className="font-blender text-sm uppercase tracking-[0.22em] text-[#E7512F]">{report.category}</div>
            <h3 className="mt-4 pr-12 text-3xl leading-tight text-white">{report.title}</h3>
            <p className="mt-4 text-gray-off-white/66">{report.description}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["Region", report.region],
                ["Type", report.type],
                ["Published", report.date],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white/[0.045] p-4">
                  <div className="text-xs uppercase tracking-[0.16em] text-gray-off-white/44">{label}</div>
                  <div className="mt-2 text-white">{value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function DashboardSection() {
  return (
    <Section className="bg-[#0a120e]">
      <div id="analytics" />
      <SectionHeader
        eyebrow="Data Analytics Dashboard Preview"
        title="Interactive charting for trends, sectors, and dataset performance."
        description="Lightweight SVG-based charts provide the feel of a modern analytics platform without heavy canvas overhead."
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="research-card rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl text-white">Trend analytics</h3>
              <p className="mt-1 text-sm text-gray-off-white/52">Publication, survey, and dataset movement</p>
            </div>
            <ToolTip label="Updated weekly">
              <FiCheckCircle className="h-5 w-5 text-[#168b50]" />
            </ToolTip>
          </div>
          <LineChart />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <div className="research-card rounded-2xl p-5">
            <h3 className="text-xl text-white">Research mix</h3>
            <DonutChart />
          </div>
          <div className="research-card rounded-2xl p-5">
            <h3 className="text-xl text-white">Regional coverage</h3>
            <BarChart />
          </div>
        </div>
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <div className="research-card rounded-2xl p-5">
          <h3 className="text-xl text-white">District heatmap</h3>
          <Heatmap />
        </div>
        <div className="research-card rounded-2xl p-5">
          <h3 className="text-xl text-white">Research capacity radar</h3>
          <RadarChart />
        </div>
      </div>
      <DataTable />
    </Section>
  );
}

function Heatmap() {
  return (
    <div className="mt-6 grid grid-cols-8 gap-2">
      {Array.from({ length: 40 }).map((_, index) => {
        const level = (index * 17) % 100;
        return (
          <ToolTip key={index} label={`Coverage ${level}%`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.86 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.32, delay: index * 0.01 }}
              className="aspect-square rounded-lg border border-white/8"
              style={{ backgroundColor: `rgba(231,81,47,${0.12 + level / 180})` }}
            />
          </ToolTip>
        );
      })}
    </div>
  );
}

function RadarChart() {
  return (
    <svg className="mt-4 h-64 w-full" viewBox="0 0 260 220" role="img" aria-label="Research capacity radar chart">
      {[34, 58, 82].map((radius) => (
        <polygon
          key={radius}
          points={`130,${110 - radius} ${130 + radius * 0.86},${110 - radius * 0.5} ${130 + radius * 0.86},${110 + radius * 0.5} 130,${110 + radius} ${130 - radius * 0.86},${110 + radius * 0.5} ${130 - radius * 0.86},${110 - radius * 0.5}`}
          fill="none"
          stroke="rgba(255,255,255,0.09)"
        />
      ))}
      <motion.polygon
        points="130,28 198,72 210,132 130,186 62,148 72,64"
        fill="rgba(60,133,221,0.24)"
        stroke="#3c85dd"
        strokeWidth="3"
        initial={{ scale: 0.75, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ transformOrigin: "center" }}
      />
    </svg>
  );
}

function ToolTip({ children, label }) {
  return (
    <span className="group relative inline-flex">
      {children}
      <span className="pointer-events-none absolute right-0 top-7 z-10 whitespace-nowrap rounded-lg bg-black px-3 py-2 text-xs text-white opacity-0 shadow-xl transition group-hover:opacity-100">
        {label}
      </span>
    </span>
  );
}

function DataTable() {
  return (
    <div className="research-card mt-5 overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between border-b border-white/10 p-5">
        <div>
          <h3 className="text-xl text-white">Data quality table</h3>
          <p className="mt-1 text-sm text-gray-off-white/52">Current operational state of active research datasets.</p>
        </div>
        <div className="hidden items-center gap-2 text-sm text-gray-off-white/54 sm:flex">
          <FiChevronLeft />
          <span>1 of 4</span>
          <FiChevronRight />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[42rem] text-left text-sm">
          <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.16em] text-gray-off-white/50">
            <tr>
              <th className="px-5 py-4 font-normal">Signal</th>
              <th className="px-5 py-4 font-normal">Region</th>
              <th className="px-5 py-4 font-normal">Year</th>
              <th className="px-5 py-4 font-normal">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {feedRows.map((row) => (
              <tr key={row[0]} className="border-t border-white/8 text-gray-off-white/66">
                {row.map((cell, index) => (
                  <td key={cell} className={`px-5 py-4 ${index === 0 ? "text-white" : ""}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CategoriesSection() {
  return (
    <Section>
      <div id="publications" />
      <SectionHeader
        eyebrow="Research Categories"
        title="Sector intelligence organized for fast decision-making."
        description="Each category is structured for leaders, analysts, partners, and research teams who need clear context and trustworthy data."
      />
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ title, description, icon: Icon }) => (
          <motion.div key={title} variants={fadeUp} whileHover={{ y: -6 }} className="research-card rounded-2xl p-5">
            <IconBadge icon={Icon} />
            <h3 className="mt-5 text-xl text-white">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-off-white/58">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function OpenDataCenter({ showToast }) {
  const endpoints = [
    { name: "District indicators", format: "JSON", endpoint: "/api/research/district-indicators", frequency: "Daily" },
    { name: "Survey records", format: "CSV", endpoint: "/api/research/survey-records", frequency: "Weekly" },
    { name: "Publication index", format: "JSON", endpoint: "/api/research/publications", frequency: "Daily" },
  ];

  return (
    <Section className="bg-[#0a120e]">
      <div id="datasets" />
      <SectionHeader
        eyebrow="Datasets & Open Data Center"
        title="Public datasets, file previews, and API-ready intelligence."
        description="Support CSV, JSON, XLSX, PDF, and API workflows with copyable endpoints, update frequencies, tags, and live status."
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {endpoints.map((item) => (
          <div key={item.name} className="research-card rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <IconBadge icon={FiDatabase} />
              <span className="rounded-full bg-[#168b50]/12 px-3 py-1 text-xs text-[#75d39e]">API online</span>
            </div>
            <h3 className="mt-5 text-xl text-white">{item.name}</h3>
            <div className="mt-2 text-sm text-gray-off-white/52">{item.format} / Updated {item.frequency}</div>
            <div className="mt-4 rounded-xl border border-white/10 bg-black/20 px-3 py-3 font-mono text-xs text-gray-off-white/60">
              {item.endpoint}
            </div>
            <div className="mt-5 flex gap-3">
              <Button variant="secondary" icon={FiCopy} onClick={showToast}>Copy</Button>
              <Button variant="secondary" icon={FiZap}>API Key</Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function InsightsSection() {
  return (
    <Section>
      <div id="insights" />
      <SectionHeader
        eyebrow="Research Insights & Featured Articles"
        title="Editorial research intelligence for policy, program, and investment teams."
        description="Magazine-style analysis cards surface expert commentary, trending topics, and recommended evidence."
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        {insights.map((item, index) => (
          <motion.article
            key={item.title}
            whileHover={{ y: -8 }}
            className={`research-card research-card-hover overflow-hidden rounded-2xl ${index === 0 ? "lg:row-span-2" : ""}`}
          >
            <div className={`${index === 0 ? "min-h-64" : "min-h-36"} relative bg-[#101814]`}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#E7512F]/28 via-[#3c85dd]/18 to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-full bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/72">
                {item.label}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-2xl leading-tight text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-off-white/60">{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function PartnersSection() {
  return (
    <Section className="bg-[#07100c]">
      <SectionHeader
        eyebrow="Partner Organizations"
        title="Trusted collaborators across research, development, and data systems."
        description="A premium partner strip communicates credibility, institutional collaboration, and long-term trust."
      />
      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] py-5">
        <div className="research-marquee flex w-max gap-4 px-4">
          {[...partners, ...partners].map((partner, index) => (
            <div key={`${partner}-${index}`} className="flex h-24 min-w-44 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] font-blender text-lg uppercase tracking-[0.16em] text-gray-off-white/58 transition hover:text-white">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ResearchMapSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Research Map Visualization"
        title="Bangladesh coverage view with district-level insight markers."
        description="An interactive map-style visualization shows coverage highlights, hover tooltips, and regional research density."
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_22rem]">
        <div className="research-card relative min-h-[34rem] overflow-hidden rounded-2xl p-5">
          <div className="absolute inset-10 rounded-[48%_52%_46%_54%] border border-[#E7512F]/28 bg-[#E7512F]/8" />
          <div className="absolute inset-x-[24%] inset-y-[8%] rounded-[45%_55%_40%_60%] border border-[#3c85dd]/28 bg-[#3c85dd]/8" />
          {mapDistricts.map((district) => (
            <ToolTip key={district.name} label={`${district.name}: ${district.score}`}>
              <button
                type="button"
                className="research-map-node absolute h-5 w-5 rounded-full bg-[#E7512F] shadow-[0_0_20px_rgba(231,81,47,0.7)]"
                style={{ left: district.x, top: district.y }}
                aria-label={`${district.name} coverage ${district.score}`}
              />
            </ToolTip>
          ))}
        </div>
        <div className="space-y-3">
          {mapDistricts.map((district) => (
            <div key={district.name} className="research-card rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <span className="text-white">{district.name}</span>
                <span className="text-[#E7512F]">{district.score}</span>
              </div>
              <ProgressRow label="Coverage" value={district.score} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];

  return (
    <Section className="bg-[#0a120e]">
      <SectionHeader
        eyebrow="Testimonial & Trust"
        title="Built for credibility, verification, and institutional confidence."
        description="Research partners and analytics leaders rely on SIDAGO for decision-grade evidence and clean intelligence workflows."
      />
      <div className="mt-8 research-card rounded-2xl p-6 md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.quote}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-1 text-[#E7512F]">
              {Array.from({ length: 5 }).map((_, index) => <FiStar key={index} />)}
            </div>
            <blockquote className="mt-6 max-w-4xl text-2xl leading-relaxed text-white md:text-4xl">
              “{item.quote}”
            </blockquote>
            <div className="mt-6 text-gray-off-white/62">{item.name} / {item.org}</div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-8 flex gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition ${active === index ? "w-10 bg-[#E7512F]" : "w-2 bg-white/20"}`}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

function NewsletterSection() {
  const topics = ["Weekly digest", "Survey alerts", "Dataset updates", "Policy briefs"];

  return (
    <Section>
      <div className="research-card relative overflow-hidden rounded-2xl p-6 md:p-10">
        <div className="research-glow research-glow-b" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="font-blender text-sm uppercase tracking-[0.24em] text-[#E7512F]">Newsletter & Subscription</div>
            <h2 className="mt-4 text-3xl leading-tight text-white md:text-5xl">Get research alerts and weekly intelligence digests.</h2>
            <p className="mt-4 max-w-2xl text-gray-off-white/66">Select topic preferences for publications, open datasets, surveys, and research partner updates.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#07100c]/78 p-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex min-h-12 flex-1 items-center rounded-2xl border border-white/10 bg-black/20 px-4 text-sm text-gray-off-white/42">
                research@organization.org
              </div>
              <Button>Subscribe</Button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {topics.map((topic) => (
                <button key={topic} type="button" className="rounded-full border border-white/10 px-3 py-2 text-sm text-gray-off-white/58 transition hover:text-white">
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function TimelineSection() {
  return (
    <Section className="bg-[#07100c]">
      <SectionHeader
        eyebrow="Research Timeline / Activity Feed"
        title="Recent publication updates, survey completions, and dataset uploads."
        description="A clear activity feed keeps research users oriented around what changed and when."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_24rem]">
        <div className="space-y-4">
          {timeline.map((item, index) => (
            <motion.div key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="absolute -left-2 top-7 h-4 w-4 rounded-full bg-[#E7512F] shadow-[0_0_18px_rgba(231,81,47,0.55)]" />
              {index < timeline.length - 1 ? <div className="absolute -bottom-4 left-[-1px] h-4 w-px bg-[#E7512F]/35" /> : null}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-blender text-xs uppercase tracking-[0.2em] text-[#E7512F]">{item.type}</span>
                <span className="text-sm text-gray-off-white/44">{item.date}</span>
              </div>
              <h3 className="mt-3 text-xl text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-off-white/58">{item.detail}</p>
            </motion.div>
          ))}
        </div>
        <div className="research-card rounded-2xl p-5">
          <div className="flex items-center gap-3">
            <IconBadge icon={FiActivity} />
            <div>
              <h3 className="text-xl text-white">Loading skeletons</h3>
              <p className="mt-1 text-sm text-gray-off-white/52">Preview state for incoming research cards.</p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="research-skeleton h-16 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function DownloadCenter({ showToast }) {
  return (
    <Section>
      <SectionHeader
        eyebrow="Download Center"
        title="Research files, raw data, workbooks, and API access."
        description="Support PDF, CSV, Excel, and API workflows with clear status states and lightweight progress feedback."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {downloads.map((file, index) => (
          <div key={file.name} className="research-card rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <IconBadge icon={file.format === "API" ? FiDatabase : FiFileText} />
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-off-white/58">{file.format}</span>
            </div>
            <h3 className="mt-5 text-lg leading-tight text-white">{file.name}</h3>
            <div className="mt-2 text-sm text-gray-off-white/52">{file.size}</div>
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
              <FiDownload aria-hidden="true" />
              {file.status === "Request" ? "Request access" : "Download"}
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ResearchFooterEnhancement() {
  return (
    <section className="border-y border-white/10 bg-[#0a120e] px-5 py-10 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <div className="font-blender text-sm uppercase tracking-[0.22em] text-[#E7512F]">Research quick links</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Publications", "Datasets", "Survey methods", "API docs", "Media references"].map((link) => (
              <button key={link} type="button" className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-off-white/62 hover:text-white">
                {link}
              </button>
            ))}
          </div>
        </div>
        <div className="research-card rounded-2xl p-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex min-h-12 flex-1 items-center rounded-2xl border border-white/10 bg-[#07100c] px-4 text-sm text-gray-off-white/42">
              research@company.com
            </div>
            <Button>Newsletter</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchCta() {
  return (
    <Section>
      <div className="research-cta relative overflow-hidden rounded-2xl p-6 md:p-10">
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="font-blender text-sm uppercase tracking-[0.24em] text-[#E7512F]">Collaborate with SIDAGO</div>
            <h2 className="mt-4 text-3xl leading-tight text-white md:text-5xl">Access authoritative research or become a data partner.</h2>
            <p className="mt-4 max-w-3xl text-gray-off-white/68">
              Work with SIDAGO on survey design, data partnerships, sector research, analytics systems, and publication programs.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button icon={FiDatabase}>Request Research Access</Button>
            <Button icon={FiUsers} variant="secondary">Become Research Partner</Button>
            <Button icon={FiExternalLink} variant="secondary">Contact Research Team</Button>
            <Button icon={FiDownload} variant="secondary">Access Open Data</Button>
          </div>
        </div>
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
          className="fixed bottom-5 right-5 z-[80] rounded-2xl border border-[#168b50]/40 bg-[#0a120e] px-5 py-4 text-sm text-white shadow-2xl"
        >
          Download request added to queue.
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default function ResearchDataPage() {
  const [view, setView] = useState("grid");
  const [selectedTag, setSelectedTag] = useState("All");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [previewReport, setPreviewReport] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const particles = useMemo(() => Array.from({ length: 14 }), []);

  const showToast = () => {
    setToastVisible(true);
    window.setTimeout(() => setToastVisible(false), 2200);
  };

  return (
    <div className="flex h-svh flex-col text-base">
      <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
        <ScrollProgress />
        <Navigation />
        <ResearchTopNav drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <main className="research-page relative overflow-hidden bg-gray-night-green text-gray-off-white" style={{ colorScheme: "dark" }}>
          <div className="research-particles" aria-hidden="true">
            {particles.map((_, index) => <span key={index} />)}
          </div>
          <Hero />
          <StatsSection />
          <SmartFilters selectedTag={selectedTag} setSelectedTag={setSelectedTag} setDrawerOpen={setDrawerOpen} />
          <ReportsSection view={view} setView={setView} selectedTag={selectedTag} openPreview={setPreviewReport} />
          <DashboardSection />
          <CategoriesSection />
          <OpenDataCenter showToast={showToast} />
          <TimelineSection />
          <InsightsSection />
          <PartnersSection />
          <ResearchMapSection />
          <DownloadCenter showToast={showToast} />
          <TestimonialsSection />
          <NewsletterSection />
          <ResearchCta />
          <ResearchFooterEnhancement />
          <CTASection />
          <Footer />
        </main>
      </div>
      <FilterDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <PreviewModal report={previewReport} onClose={() => setPreviewReport(null)} />
      <Toast visible={toastVisible} />
    </div>
  );
}
