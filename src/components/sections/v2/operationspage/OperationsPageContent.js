"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { defaultOperationsPage } from "@/src/data/cms/defaults.mjs";
import OpsNumbarStat from "./OpsNumbarStat";
import OpsReachGlobe from "./OpsReachGlobe";
import "./operations-page.css";

const OPS_CARD_BEVEL = "ops-card-surface bevel overflow-hidden";
const OPS_BEVEL = "bevel overflow-hidden";

const CHIP_VARIANTS = [
  "ops-ptag--green",
  "ops-ptag--orange",
  "ops-ptag--blue",
  "ops-ptag--violet",
  "ops-ptag--pink",
];

const OPS_BTN_PRIMARY =
  "group/interactive inline-flex items-center justify-center gap-md bevel bevel-[0.25rem] bg-[#168B50] px-sm py-xs text-sm font-medium text-white transition-opacity hover:opacity-90";

const OPS_BTN_SECONDARY = OPS_BTN_PRIMARY;

const TICKER_ITEMS = [
  "Process Automation",
  "Workforce Solutions",
  "CRM Operations",
  "Marketing Engine",
  "HR Management",
  "Web Delivery",
  "BPO Support",
  "Global Operations",
  "Digital Transformation",
  "Cost Optimisation",
];

const HANDLE_CARDS = [
  { code: "OPS", num: "01 / 06", name: "Operations", val: "75%", tag: "Cost Savings" },
  { code: "DEV", num: "02 / 06", name: "Development", val: "96%", tag: "Uptime SLA" },
  { code: "MKT", num: "03 / 06", name: "Marketing", val: "360", tag: "Leads / Month" },
  { code: "CRM", num: "04 / 06", name: "CRM", val: "92%", tag: "Retention Rate" },
  { code: "HRM", num: "05 / 06", name: "HR Management", val: "48H", tag: "Hiring Speed" },
  { code: "BPO", num: "06 / 06", name: "BPO Support", val: "24/7", tag: "Always On" },
];

const NUMBAR = [
  {
    big: "75",
    suffix: "%",
    label: "Cost Savings",
    sub: "Average reduction in operational overhead across all clients",
  },
  {
    big: "81",
    suffix: "%",
    label: "Output Increase",
    sub: "Measured improvement in team output within 90 days",
  },
  {
    big: "87",
    suffix: "%",
    label: "Operational Efficiency",
    sub: "Process efficiency score vs industry benchmark of 52%",
  },
  {
    big: "92",
    suffix: "%",
    label: "Client Retention",
    sub: "Of clients renew after their first full engagement year",
  },
  {
    big: "88",
    suffix: "%",
    label: "Service Reliability",
    sub: "SLA-backed uptime across all service verticals",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery & Audit",
    desc: "We map your existing operations, identify bottlenecks, and quantify every point of inefficiency before a single recommendation is made.",
    tags: ["Gap Analysis", "Process Mapping", "Cost Audit"],
  },
  {
    step: "02",
    title: "Blueprint Design",
    desc: "A custom operational architecture tailored to your industry vertical, team size, and growth stage — built to scale with you from day one.",
    tags: ["Org Design", "Workflow Build", "Tool Stack"],
  },
  {
    step: "03",
    title: "Live Deployment",
    desc: "Teams go live on a structured rollout. First measurable results within 30 days. Full operational handover by day 90.",
    tags: ["Team Launch", "Integration", "Training"],
  },
  {
    step: "04",
    title: "Continuous Optimise",
    desc: "Real-time KPI monitoring, monthly performance reviews, and iterative refinement ensure your operations compound in efficiency over time.",
    tags: ["Live Dashboards", "QA Cycles", "Reporting"],
  },
];

const ACCORDION = [
  {
    code: "OPS",
    name: "Operations Management",
    metric: "75%",
    desc: "We assume full operational ownership — procurement, vendor management, compliance, logistics, and financial reporting. Your leadership stops managing operations and starts directing strategy.",
    pills: ["Procurement", "Compliance", "Logistics", "Financial Ops", "Vendor Mgmt", "Reporting"],
  },
  {
    code: "DEV",
    name: "Development & Technology",
    metric: "96% uptime",
    desc: "Dedicated senior engineering squads embedded in your product roadmap. We handle recruiting, velocity management, QA, DevOps, and infrastructure — you get output without overhead.",
    pills: ["Full-Stack", "DevOps", "Cloud Infra", "QA", "Security", "CI/CD"],
  },
  {
    code: "MKT",
    name: "Marketing Operations",
    metric: "360 leads/mo",
    desc: "Integrated demand generation across paid, organic, content, and outbound. Every channel tracked against agreed KPIs. We build compounding growth engines — not one-time campaigns.",
    pills: ["Paid Media", "SEO", "Content Ops", "Outbound", "Analytics", "Automation"],
  },
  {
    code: "CRM",
    name: "CRM & Retention",
    metric: "92% retention",
    desc: "CRM systems implemented, populated, and operated by our team. Every customer touchpoint tracked, every follow-up automated, every churn risk flagged — before it becomes a cancellation.",
    pills: ["CRM Setup", "Lifecycle Flows", "Segmentation", "NPS", "Win-back", "Dashboards"],
  },
  {
    code: "HRM",
    name: "HR & Workforce",
    metric: "48H hire",
    desc: "From job spec to signed offer in 48 hours. We manage payroll, compliance, performance management, and offboarding across 40+ jurisdictions — your headcount without the HR overhead.",
    pills: ["Recruiting", "Payroll", "Performance", "Compliance", "L&D", "Offboarding"],
  },
  {
    code: "BPO",
    name: "BPO & Customer Support",
    metric: "24/7",
    desc: "Multilingual support teams operating under your brand around the clock. SLA-backed delivery, real-time QA monitoring, full reporting. Your customers never know it's outsourced.",
    pills: ["Multilingual", "White Label", "Omnichannel", "QA", "SLA", "Analytics"],
  },
];

function buildRandomChipColorMap() {
  const map = {};
  const pick = () =>
    CHIP_VARIANTS[Math.floor(Math.random() * CHIP_VARIANTS.length)];

  PROCESS.forEach((step) => {
    step.tags.forEach((tag) => {
      map[`process:${step.step}:${tag}`] = pick();
    });
  });

  ACCORDION.forEach((item) => {
    item.pills.forEach((pill) => {
      map[`acc:${item.code}:${pill}`] = pick();
    });
  });

  return map;
}

function useRandomChipColors() {
  const [chipColors, setChipColors] = useState({});

  useEffect(() => {
    setChipColors(buildRandomChipColorMap());
  }, []);

  return chipColors;
}

function OpsChip({ label, variant = CHIP_VARIANTS[0] }) {
  return (
    <span tabIndex={0} className={`ops-ptag bevel bevel-[0.25rem] ${variant}`}>
      {label}
    </span>
  );
}

const VERTICALS = [
  {
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
    name: "Financial Services",
    desc: "Trading firms, fintechs, and banks needing ironclad compliance, speed, and 24/7 stability across global markets.",
  },
  {
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
    name: "Technology & SaaS",
    desc: "Scale-ups that need to grow operational capacity without proportionally growing their headcount or overhead.",
  },
  {
    icon: (
      <>
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </>
    ),
    name: "E-Commerce & Retail",
    desc: "High-volume merchants needing seamless supply chain, customer support, and marketing operations at scale.",
  },
  {
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
    name: "Healthcare & Life Sciences",
    desc: "Regulated industries requiring precision compliance, patient data management, and global coordination.",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </>
    ),
    name: "Professional Services",
    desc: "Consulting firms and agencies needing lean operational infrastructure to maintain margins as they scale.",
  },
  {
    icon: <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />,
    name: "Manufacturing & Logistics",
    desc: "Production operations, supply chain coordination, and workforce management for complex value chains.",
  },
  {
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    name: "Government & Public Sector",
    desc: "Public institutions needing scalable, compliant delivery without expanding permanent civil service headcount.",
  },
  {
    icon: (
      <>
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </>
    ),
    name: "Startups & Scale-ups",
    desc: "High-growth companies that need enterprise-grade operational infrastructure without building it in-house.",
  },
];

const REACH_COUNTRIES = [
  { name: "United States", dot: "accent" },
  { name: "United Kingdom", dot: "blue" },
  { name: "Germany", dot: "black" },
  { name: "Singapore", dot: "green" },
  { name: "India", dot: "accent" },
  { name: "Australia", dot: "purple" },
  { name: "UAE", dot: "blue" },
  { name: "Canada", dot: "black" },
  { name: "+ 32 More", dot: "accent", more: true },
];

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 },
    );

    node.querySelectorAll(".ops-reveal, .ops-nstat").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}

function SectionHeader({ eyebrow, children, className = "" }) {
  return (
    <div className={`ops-section-header ${className}`.trim()}>
      <div className="ops-section-header__copy">
        <h2 className="ops-section-header__title">{eyebrow}</h2>
        <p className="ops-section-header__subtitle">{children}</p>
      </div>
      <hr className="ops-section-header__rule" />
    </div>
  );
}

function SectionPad({ children, className = "" }) {
  return (
    <section className={className}>
      <div className="container">{children}</div>
    </section>
  );
}

function AccordionItem({ item, chipColors }) {
  return (
    <div className="ops-acc-item">
      <div className="ops-acc-trigger">
        <span className="ops-acc-left">
          <span className="ops-acc-code">{item.code}</span>
          <span className="ops-acc-name">{item.name}</span>
        </span>
        <span className="ops-acc-metric">{item.metric}</span>
        <span className="ops-acc-icon" aria-hidden>
          <span className="ops-acc-icon-bar ops-acc-icon-h" />
          <span className="ops-acc-icon-bar ops-acc-icon-v" />
        </span>
      </div>
      <div className="ops-acc-body">
        <div className="ops-acc-inner">
          <div className="ops-acc-content">
            <p className="ops-acc-desc">{item.desc}</p>
            <div className="ops-acc-pills">
              {item.pills.map((pill) => (
                <OpsChip
                  key={pill}
                  label={pill}
                  variant={chipColors[`acc:${item.code}:${pill}`]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OperationsPageContent({
  videoInMotion = defaultOperationsPage.videoInMotion,
}) {
  const pageRef = useReveal();
  const chipColors = useRandomChipColors();
  const { videoSrc, posterSrc, posterAlt } = videoInMotion ?? defaultOperationsPage.videoInMotion;

  const tickerLoop = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div ref={pageRef} className="ops-page">
      {/* Ticker */}
      <div className="ops-ticker ops-section ops-section--cool" aria-hidden>
        <div className="ops-ticker-track">
          {tickerLoop.map((item, i) => (
            <span key={`${item}-${i}`} className="ops-ticker-item">
              <span className="ops-ticker-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Key Numbers */}
      <section className="ops-numbar-wrap ops-section ops-section--white">
        <div className="container">
          <div className={`ops-numbar ${OPS_BEVEL}`}>
            {NUMBAR.map((item) => (
              <OpsNumbarStat key={item.label} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="ops-handle ops-section ops-section--warm">
        <div className="container">
          <div className="ops-reveal">
            <SectionHeader eyebrow="What We Handle">
              Every operational vertical, unified.
            </SectionHeader>
            <p className="ops-handle-intro">
              Six core divisions working in concert — your entire back-office,
              orchestrated by one trusted partner.
            </p>
          </div>
          <div className="ops-div-grid">
            {HANDLE_CARDS.map((card) => (
              <article key={card.code} className="ops-div-card ops-reveal">
                <div className="ops-div-card__top">
                  <span className="ops-div-card__code">{card.code}</span>
                  <span className="ops-div-card__index">{card.num}</span>
                </div>
                <h3 className="ops-div-card__name">{card.name}</h3>
                <div className="ops-div-card__foot">
                  <span className="ops-div-card__metric">{card.val}</span>
                  <span className="ops-div-card__tag">{card.tag}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="ops-process ops-section ops-section--white">
        <div className="container">
          <div className="ops-reveal">
            <SectionHeader eyebrow="How It Works">
              From kickoff to full operational control.
            </SectionHeader>
            <div className="ops-process-header">
              <p className="ops-process-note">
                A structured methodology refined across 300+ enterprise deployments.
                Results in 30 days, full integration in 90.
              </p>
            </div>
          </div>
          <div className="ops-psteps">
            {PROCESS.map((step) => (
              <div key={step.step} className="ops-pstep ops-reveal">
                <div className="ops-pstep-head">
                  <div className="ops-pstep-circ">
                    <span className="ops-pstep-n">{step.step}</span>
                  </div>
                </div>
                <h3 className="ops-pstep-title">{step.title}</h3>
                <p className="ops-pstep-desc">{step.desc}</p>
                <div className="ops-ptags">
                  {step.tags.map((tag) => (
                    <OpsChip
                      key={tag}
                      label={tag}
                      variant={chipColors[`process:${step.step}:${tag}`]}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Accordion */}
      <SectionPad className="ops-caps ops-section ops-section--warm">
        <div className="ops-reveal">
          <SectionHeader eyebrow="Deep Capabilities">
            Every service. Fully owned by us.
          </SectionHeader>
        </div>
        <div className="ops-caps-inner">
          <div className="ops-caps-sticky ops-reveal">
            <p className="ops-caps-body">
              We don&apos;t subcontract. Every service in the Sidago stack is delivered
              by trained, managed, and accountable teams — on your timeline and your
              terms.
            </p>
            <Link href="/contact" className={OPS_BTN_SECONDARY}>
              View Full Capability Matrix →
            </Link>
          </div>
          <div className="ops-reveal">
            {ACCORDION.map((item) => (
              <AccordionItem key={item.code} item={item} chipColors={chipColors} />
            ))}
          </div>
        </div>
      </SectionPad>

      {/* Video */}
      <SectionPad className="ops-video ops-section ops-section--white">
        <div className="ops-reveal">
          <SectionHeader eyebrow="Operations In Motion">
            See structured delivery in practice
          </SectionHeader>
        </div>
        <div className="ops-video-wrap ops-reveal">
          <div className="ops-video-grid" aria-hidden />
          <video
            playsInline
            preload="metadata"
            poster={posterSrc}
            aria-label={posterAlt}
            className="relative z-[1] aspect-video w-full object-cover"
            controls
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </SectionPad>

      {/* Global Reach */}
      <section className="ops-reach ops-section ops-section--warm">
        <div className="container">
          <div className="ops-reveal">
            <SectionHeader eyebrow="Global Footprint">
              Operations without borders.
            </SectionHeader>
          </div>
          <div className="ops-reach-inner">
            <div className="ops-reach-left ops-reveal">
              <p className="ops-reach-body">
                With talent, infrastructure, and compliance coverage spanning six
                continents, Sidago lets you operate globally from day one — without
                the complexity of building international infrastructure yourself.
              </p>
              <div className="ops-reach-countries">
                {REACH_COUNTRIES.map((country) => (
                  <div
                    key={country.name}
                    className={`ops-reach-cell${country.more ? " ops-reach-cell--more" : ""}`}
                  >
                    <span className={`ops-reach-dot ops-reach-dot--${country.dot}`} />
                    {country.name}
                  </div>
                ))}
              </div>
              <Link href="/contact" className={OPS_BTN_PRIMARY}>
                Explore Coverage
                <svg viewBox="0 0 16 16" aria-hidden className="h-3.5 w-3.5">
                  <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <polyline points="9,3 14,8 9,13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="ops-reach-right ops-reveal">
              <OpsReachGlobe />
            </div>
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="ops-verticals ops-section ops-section--white">
        <div className="container">
          <div className="ops-reveal">
            <SectionHeader eyebrow="Who We Serve">
              Built for industries that can&apos;t afford to slow down.
            </SectionHeader>
          </div>
          <div className="ops-vert-grid">
            {VERTICALS.map((v) => (
              <div key={v.name} className="ops-card-shell ops-reveal">
                <div className={`${OPS_CARD_BEVEL} ops-vcard`}>
                  <div className="ops-vcard-icon">
                    <svg viewBox="0 0 24 24">{v.icon}</svg>
                  </div>
                  <div className="ops-vcard-name">{v.name}</div>
                  <p className="ops-vcard-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
