"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowRight,
  FiBarChart2,
  FiBriefcase,
  FiGlobe,
  FiLayers,
  FiMessageSquare,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import SalesHeroSpotlightStatCard from "@/src/components/sections/v2/salespage/SalesHeroSpotlightStatCard";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const viewportOnce = { once: true, amount: 0.14 };

const featureCardVariants = {
  rest: {
    borderColor: "#e8e5e0",
  },
  hover: {
    borderColor: "#ff7a59",
    transition: { duration: 0.28, ease: "easeOut" },
  },
};

const featureBarVariants = {
  rest: {
    scaleX: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  hover: {
    scaleX: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const trustChips = [
  "Chicago, USA",
  "Dhaka, Bangladesh",
  "Bogra, Bangladesh",
  "Bharatpur, India",
  "Lucknow, India",
  "Bucharest, Romania",
  "Manila, Philippines",
  "Cavite, Philippines",
];

const heroStats = [
  {
    value: "24",
    suffix: "hrs",
    label: "target response window for sales follow-up",
    activeDotColor: "#5cf0a5",
  },
  {
    value: "8",
    suffix: " hubs",
    label: "listed Sidago office locations supporting delivery",
    activeDotColor: "#ff8c6a",
  },
  {
    value: "6",
    suffix: "+",
    label: "core commercial support areas across sales and service",
    activeDotColor: "#7aa8ff",
  },
];

const serviceCards = [
  {
    title: "Customer Acquisition & Sales",
    body:
      "Sidago lists customer acquisition and sales as a core marketing capability for teams that need disciplined growth execution.",
    icon: FiTrendingUp,
  },
  {
    title: "Telemarketing & Telesales",
    body:
      "Sidago's broader outsourcing model includes telesales and online marketing for companies expanding demand without building every role in-house.",
    icon: FiMessageSquare,
  },
  {
    title: "CRM / Contact Management",
    body:
      "Contact management and CRM management are presented by Sidago as practical support for protecting customer relationships at scale.",
    icon: FiLayers,
  },
  {
    title: "Customer Service",
    body:
      "Customer service is treated as a business-critical retention layer, with support available across phone, email, and social channels.",
    icon: FiUsers,
  },
  {
    title: "Market Research & Data Mining",
    body:
      "Research and data support help commercial teams reach better accounts with stronger context before outreach begins.",
    icon: FiBarChart2,
  },
  {
    title: "Negotiation Management",
    body:
      "Sidago emphasizes support for important business relationships, including mediation and negotiation when outcomes need to stay mutually beneficial.",
    icon: FiShield,
  },
];

const featureHighlights = [
  {
    title: "Improve employee teamwork",
    text:
      "The original Sidago sales page focuses on training sessions, team building, and positive attitudes that improve productivity and customer satisfaction.",
  },
  {
    title: "Strengthen external relationships",
    text:
      "Sidago positions sales support around maintaining profitable, efficient relationships with other organizations and business partners.",
  },
  {
    title: "Use online networks with confidence",
    text:
      "Sidago specifically highlights online networks as a way to make communication easier while keeping information safe and secure.",
  },
  {
    title: "Deliver measurable business outcomes",
    text:
      "Every Sidago engagement is tied to real results — reduced costs, faster execution, and compounding value across every service line.",
  },
];

const dashboardBars = [
  { label: "Customer service", value: 92, color: "#5CF0A5" },
  { label: "Telesales / outreach", value: 84, color: "#FF7A59" },
  { label: "CRM management", value: 76, color: "#7AA8FF" },
  { label: "Market research", value: 68, color: "#C7F36B" },
];

const benefitRows = [
  "Save on operating costs while growing the business",
  "Access customer service, tech support, telesales, and online marketing support",
  "Use solutions personalized for your business and relationship model",
  "Support customers through phone, email, and social media channels",
];

const workflowSteps = [
  {
    step: "01",
    title: "Assess relationship pressure points",
    body:
      "Sidago starts from the idea that businesses rely on many kinds of relationships to stay profitable, so the first job is understanding where friction exists.",
  },
  {
    step: "02",
    title: "Deploy the right support mix",
    body:
      "From customer acquisition and telesales to customer service and administrative support, Sidago's service catalog lets teams assemble practical commercial coverage.",
  },
  {
    step: "03",
    title: "Improve loyalty, visibility, and follow-through",
    body:
      "The intended outcome is stronger teamwork, happier customers, more reliable outreach, and external relationships that become more profitable over time.",
  },
];

const caseStudyAreas = [
  "Data Mining",
  "Public Relations",
  "Telemarketing",
  "Web Content",
  "Market Research",
  "General Offshoring",
  "Expert Negotiation",
  "Administrative Assistants",
  "Web Research",
  "Web Development",
];

const deliverySignals = [
  {
    title: "Business relationship focus",
    body:
      "Built to improve how companies manage teams, customers, and partner relationships.",
  },
  {
    title: "Outsourcing and offshoring depth",
    body:
      "Sidago combines lower operating cost with scalable business support.",
  },
  {
    title: "Global operating footprint",
    body:
      "Operations span the United States, Bangladesh, India, Romania, and the Philippines.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  eyebrowClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-[0.28em] text-[#8acfa8] md:text-sm ${eyebrowClassName}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] text-white md:text-5xl ${titleClassName}`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 text-base leading-8 text-[#b9c7bf] md:text-lg ${descriptionClassName}`}
      >
        {description}
      </p>
    </div>
  );
}

function AmbientOrb({ className, color, duration, reduce }) {
  return (
    <motion.div
      aria-hidden="true"
      className={`absolute rounded-full blur-[90px] ${className}`}
      style={{ background: color }}
      animate={
        reduce
          ? undefined
          : {
              x: [0, 16, -12, 0],
              y: [0, -18, 12, 0],
              scale: [1, 1.08, 0.96, 1],
            }
      }
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function HeroSection({ reduce }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#07110d] px-5 pb-20 pt-[calc(var(--header-height)+2rem)] md:px-10 md:pb-28 md:pt-[calc(var(--header-height)+3rem)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(92,240,165,0.12),_transparent_25%),radial-gradient(circle_at_80%_18%,_rgba(255,122,89,0.14),_transparent_28%),linear-gradient(180deg,#08120d_0%,#091611_55%,#0c1c15_100%)]" />
      <AmbientOrb
        reduce={reduce}
        duration={12}
        className="-left-16 top-10 h-48 w-48 bg-[#5cf0a5]/25"
        color="rgba(92, 240, 165, 0.18)"
      />
      <AmbientOrb
        reduce={reduce}
        duration={14}
        className="right-0 top-24 h-56 w-56 bg-[#ff7a59]/20"
        color="rgba(255, 122, 89, 0.18)"
      />
      <AmbientOrb
        reduce={reduce}
        duration={16}
        className="bottom-0 left-1/3 h-52 w-52 bg-[#7aa8ff]/16"
        color="rgba(122, 168, 255, 0.12)"
      />

      <div className="container relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.95fr)] lg:items-stretch">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex max-w-3xl flex-col lg:h-full lg:justify-between"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3 rounded-full bg-white/[0.06] px-4 py-2 text-[0.72rem] font-semibold tracking-[0.24em] text-[#d7e8de] shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl"
            >
              Sidago Sales
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff8c6a]" />
              <span className="text-[#9ce7bc]">
                Business relationships that drive profitability
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-medium leading-[0.95] tracking-[-0.055em] text-[#fff8f0] md:text-6xl lg:max-w-[11ch] lg:text-[5.1rem]"
            >
              Helping companies{" "}
              <span className="text-[#8ef0b4]">grow sales</span> through{" "}
              <span className="text-[#ffb097]">stronger relationships</span>.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-8 text-[#d0ddd6] md:text-xl"
            >
              Sidago improves teamwork, customer service, and partner
              coordination for stronger growth.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#ff7a59] px-7 py-3 text-sm font-semibold tracking-[0.18em] text-white shadow-[0_18px_40px_rgba(255,122,89,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff6a44]"
              >
                Contact Sidago
                <FiArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("core-services")
                    ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" })
                }
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white/[0.07] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#ebfff2] shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.11]"
              >
                Explore capabilities
              </button>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-12 grid gap-4 sm:grid-cols-3 lg:mt-8"
          >
            {heroStats.map((item) => (
              <SalesHeroSpotlightStatCard key={item.label} item={item} reduce={reduce} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative h-full"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_20%_20%,rgba(92,240,165,0.22),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(255,122,89,0.2),transparent_30%)] blur-2xl" />
          <div className="relative h-full overflow-hidden rounded-[2rem] bg-white/[0.06] p-4 shadow-[0_32px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-5">
            <div className="h-full rounded-[1.7rem] bg-[#0d1813] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#90ddb0]">
                    Revenue operations
                  </p>
                  <h3 className="mt-2 text-xl text-white">
                    Sidago relationship dashboard
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#5cf0a5]" />
                  <span className="text-xs uppercase tracking-[0.18em] text-[#b8c8bf]">
                    Live support
                  </span>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(220px,0.9fr)]">
                <div className="overflow-hidden rounded-[1.5rem] bg-[#112118]">
                  <Image
                    src="/images/sidago-performance-dashboard.png"
                    alt="Sidago dashboard style presentation"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover opacity-80"
                  />
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[1.4rem] bg-[#12241a] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.18em] text-[#9cdbb6]">
                        Active channels
                      </span>
                      <FiZap className="h-4 w-4 text-[#ff7a59]" aria-hidden />
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white">
                      <div className="rounded-2xl bg-white/[0.04] p-3">Phone</div>
                      <div className="rounded-2xl bg-white/[0.04] p-3">Email</div>
                      <div className="rounded-2xl bg-white/[0.04] p-3">Social</div>
                      <div className="rounded-2xl bg-white/[0.04] p-3">
                        Online networks
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.4rem] bg-[#12241a] p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#9cdbb6]">
                      Service distribution
                    </p>
                    <div className="mt-4 space-y-4">
                      {dashboardBars.map((bar) => (
                        <div key={bar.label}>
                          <div className="mb-2 flex items-center justify-between text-xs text-[#b8c8bf]">
                            <span>{bar.label}</span>
                            <span>{bar.value}%</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-white/[0.08]">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ backgroundColor: bar.color }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${bar.value}%` }}
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
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {deliverySignals.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.35rem] bg-white/[0.04] p-4"
                  >
                    <h4 className="text-sm font-medium uppercase tracking-[0.15em] text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-[#adc1b5]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="border-y border-white/[0.04] bg-[#08140f] px-5 py-10 md:px-10">
      <div className="container">
        <p className="text-center text-xs font-semibold tracking-[0.26em] text-[#86c4a0]">
          Global Sidago footprint
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {trustChips.map((item) => (
            <div
              key={item}
              className="rounded-full bg-white/[0.05] px-4 py-2 text-sm text-[#d9e2dd] shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ reduce }) {
  return (
    <section
      id="core-services"
      className="relative overflow-hidden bg-[#0b1712] px-5 py-20 md:px-10 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(122,168,255,0.08),transparent_26%),radial-gradient(circle_at_80%_50%,rgba(92,240,165,0.08),transparent_24%)]" />
      <div className="container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <SectionHeader
            eyebrow="Core services"
            title="A premium commercial layer built from Sidago's original service stack"
            description="The public Sidago service catalog spans customer acquisition and sales, telemarketing, market research, customer service, branding, negotiation management, and broader administrative support."
          />
        </motion.div>

        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {serviceCards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                variants={fadeUp}
                transition={{ duration: reduce ? 0 : undefined }}
                className="group rounded-[2rem] bg-white/[0.05] p-7 shadow-[0_26px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-[#8de1b0] transition group-hover:text-[#ff7a59]">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-6 text-2xl font-medium tracking-[-0.03em] text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#b6c4bc]">
                  {card.body}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function OptimaTaxLogo() {
  return (
    <svg
      viewBox="0 0 380 180"
      xmlns="http://www.w3.org/2000/svg"
      width="320"
      height="152"
      aria-hidden
      className="mx-auto max-w-full"
    >
      <defs>
        <linearGradient id="sales-optima-blue1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5ab4e8" />
          <stop offset="100%" stopColor="#1a6ab0" />
        </linearGradient>
        <linearGradient id="sales-optima-blue2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a3a7a" />
          <stop offset="100%" stopColor="#0d2050" />
        </linearGradient>
        <filter id="sales-optima-ds">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#1a3a7a" floodOpacity="0.2" />
        </filter>
      </defs>
      <path d="M80 110 Q100 60 130 50 Q115 90 120 120 Q100 130 80 110Z" fill="url(#sales-optima-blue1)" opacity="0.45" />
      <path d="M95 118 Q118 58 148 40 Q136 82 138 118 Q118 130 95 118Z" fill="url(#sales-optima-blue1)" opacity="0.65" />
      <path d="M112 122 Q140 52 168 32 Q158 76 156 122 Q136 134 112 122Z" fill="url(#sales-optima-blue2)" filter="url(#sales-optima-ds)" />
      <path d="M72 128 Q130 118 188 128 Q130 142 72 128Z" fill="url(#sales-optima-blue1)" opacity="0.5" />
      <path d="M80 134 Q130 125 180 134" fill="none" stroke="url(#sales-optima-blue1)" strokeWidth="2.5" opacity="0.6" />
      <text x="198" y="80" fontFamily="Georgia,serif" fontSize="36" fontWeight="700" fill="#1a2a5a" letterSpacing="-0.5">Optima</text>
      <text x="198" y="116" fontFamily="Georgia,serif" fontSize="36" fontWeight="700" fill="#1a2a5a" letterSpacing="-0.5">Tax</text>
      <text x="313" y="86" fontFamily="saans,sans-serif" fontSize="10" fontWeight="500" fill="#666">SM</text>
      <line x1="198" y1="126" x2="360" y2="126" stroke="#1a2a5a" strokeWidth="1.2" />
      <text x="198" y="148" fontFamily="saans,sans-serif" fontSize="17" fontWeight="600" fill="#1a2a5a" letterSpacing="7">RELIEF</text>
    </svg>
  );
}

function FeaturesSection({ reduce }) {
  return (
    <section className="bg-[#f3f0e8] px-5 py-20 text-[#11251a] md:px-12 md:py-[5.5rem]">
      <div className="container grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
        <motion.div
          className="flex h-full min-h-0 flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <p className="mb-5 flex items-center gap-2.5 font-blender text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4d8665]">
            <span className="block h-[1.5px] w-5 bg-[#4d8665]" aria-hidden />
            Feature Highlights
          </p>
          <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] text-[#11251a] md:text-5xl">
            The original Sidago sales message translated into a more premium
            product experience.
          </h2>
          <p className="mb-10 mt-5 max-w-2xl text-base leading-8 text-[#55675c] md:text-lg">
            Instead of generic marketing copy, this page keeps Sidago&apos;s
            actual commercial themes: teamwork, relationship strength, customer
            satisfaction, communication, and mutually beneficial business outcomes.
          </p>

          <div className="relative flex min-h-[11.5rem] flex-1 items-center justify-center overflow-hidden rounded-2xl border border-[#e8e5e0] bg-white px-8 py-10 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-l-2xl before:bg-[#ff7a59]">
            <OptimaTaxLogo />
          </div>
        </motion.div>

        <motion.div
          className="flex h-full min-h-0 flex-col gap-4 lg:gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {featureHighlights.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              transition={{ duration: reduce ? 0 : undefined, delay: reduce ? 0 : 0.08 + index * 0.08 }}
            >
              <motion.div
                initial="rest"
                animate="rest"
                whileHover={reduce ? undefined : "hover"}
                variants={featureCardVariants}
                className="relative flex h-full w-full cursor-default flex-col overflow-hidden rounded-2xl border bg-white px-7 py-7 md:px-8 md:py-8"
              >
                <motion.span
                  aria-hidden
                  variants={featureBarVariants}
                  className="pointer-events-none absolute left-0 top-0 h-[3px] w-full origin-left bg-[#ff7a59]"
                />
                <h3 className="text-base font-extrabold tracking-[-0.025em] text-[#11251a]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[0.8125rem] leading-[1.72] text-[#55675c]">
                  {item.text}
                </p>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AnalyticsSection({ reduce }) {
  return (
    <section className="bg-[#091511] px-5 py-20 md:px-10 md:py-28">
      <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <SectionHeader
            eyebrow="Analytics showcase"
            title="A dashboard-style section that makes Sidago's sales model easier to understand"
            description="The visuals are product-like, but the content remains anchored in Sidago's real business areas: customer service, outreach, CRM, research, and multi-channel communication."
          />
          <ul className="mt-8 space-y-4">
            {benefitRows.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-[1.35rem] bg-white/[0.04] px-4 py-4 text-sm leading-7 text-[#d3ddd7] shadow-[0_14px_40px_rgba(0,0,0,0.18)]"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff7a59]" />
                <span>{item}</span>
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
          className="rounded-[2rem] bg-white/[0.05] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.3)] backdrop-blur-xl"
        >
          <div className="rounded-[1.7rem] bg-[#0f1d17] p-5 md:p-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.3rem] bg-white/[0.05] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[#8de1b0]">
                  Main objective
                </p>
                <p className="mt-4 text-xl font-medium text-white">
                  Improve business relationships
                </p>
              </div>
              <div className="rounded-[1.3rem] bg-white/[0.05] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[#8de1b0]">
                  Service channels
                </p>
                <p className="mt-4 text-xl font-medium text-white">
                  Phone, e-mail, social
                </p>
              </div>
              <div className="rounded-[1.3rem] bg-white/[0.05] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[#8de1b0]">
                  Growth lens
                </p>
                <p className="mt-4 text-xl font-medium text-white">
                  More productivity, happier customers
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(240px,0.85fr)]">
              <div className="rounded-[1.4rem] bg-[#13231b] p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#a7d7bb]">
                    Delivery mix
                  </p>
                  <FiGlobe className="h-5 w-5 text-[#ff7a59]" aria-hidden />
                </div>
                <div className="mt-6 space-y-4">
                  {dashboardBars.map((bar) => (
                    <div key={bar.label}>
                      <div className="mb-2 flex justify-between text-xs text-[#c8d4cd]">
                        <span>{bar.label}</span>
                        <span>{bar.value}%</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-white/[0.08]">
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
              </div>

              <div className="rounded-[1.4rem] bg-[#13231b] p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-[#a7d7bb]">
                  Revenue stack
                </p>
                <div className="mt-5 space-y-3 text-sm text-white">
                  <div className="rounded-2xl bg-white/[0.05] px-4 py-3">
                    Lead generation
                  </div>
                  <div className="rounded-2xl bg-white/[0.05] px-4 py-3">
                    Online marketing strategy
                  </div>
                  <div className="rounded-2xl bg-white/[0.05] px-4 py-3">
                    Branding
                  </div>
                  <div className="rounded-2xl bg-white/[0.05] px-4 py-3">
                    Contact management
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WorkflowSection({ reduce }) {
  return (
    <section className="bg-[#f3f0e8] px-5 py-20 text-[#102117] md:px-10 md:py-28">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <SectionHeader
            eyebrow="How it works"
            title="A cleaner workflow for companies that need sales support with less friction"
            description="This section reframes Sidago's original positioning into a simple three-step enterprise process while staying faithful to the source material."
            eyebrowClassName="!text-[#3f7a58]"
            titleClassName="!text-[#0f1f16]"
            descriptionClassName="!text-[#4f6257]"
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {workflowSteps.map((item) => (
            <motion.article
              key={item.step}
              variants={fadeUp}
              transition={{ duration: reduce ? 0 : undefined }}
              className="rounded-[2rem] bg-white p-8 shadow-[0_24px_70px_rgba(16,33,23,0.1)]"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.26em] text-[#3f7a58]">
                Step {item.step}
              </div>
              <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em] text-[#0f1f16]">
                {item.title}
              </h3>
              <p className="mt-5 text-base leading-7 text-[#4f6257]">
                {item.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SuccessSection({ reduce }) {
  return (
    <section className="bg-[#0b1712] px-5 py-20 md:px-10 md:py-28">
      <div className="container grid gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <SectionHeader
            eyebrow="Project categories"
            title="Commercial work areas already visible across Sidago's public case studies"
            description="Sidago's homepage highlights project categories such as data mining, public relations, telemarketing, market research, negotiation, and web research. This gives the sales page concrete proof of adjacent commercial delivery."
          />
          <div className="mt-8 rounded-[2rem] bg-white/[0.05] p-6 shadow-[0_26px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl">
            <div className="grid gap-3 sm:grid-cols-2">
              {caseStudyAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] bg-white/[0.05] px-4 py-3 text-sm uppercase tracking-[0.14em] text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5"
        >
          {[
            {
              icon: FiBriefcase,
              title: "Customer success angle",
              body:
                "Sidago's customer service messaging centers on rapport, reputation, and loyal customers. That makes the sales page feel more credible than a generic demand-generation pitch.",
            },
            {
              icon: FiUsers,
              title: "Team collaboration angle",
              body:
                "The original sales copy ties business growth directly to teamwork and employee relationships, which is a useful enterprise differentiator.",
            },
            {
              icon: FiTrendingUp,
              title: "Growth angle",
              body:
                "Across its public site, Sidago repeatedly connects outsourcing support to savings, implementation, and growth, which aligns well with a modern conversion-focused landing page.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                transition={{ duration: reduce ? 0 : undefined }}
                className="rounded-[2rem] bg-white/[0.05] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-[#90ddb0]">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-2xl font-medium tracking-[-0.03em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#b6c4bc]">
                  {item.body}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ConversionBanner({ reduce }) {
  return (
    <section className="bg-[#07110d] px-5 pb-20 md:px-10 md:pb-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        transition={{ duration: reduce ? 0 : undefined }}
        className="container overflow-hidden rounded-[2.4rem] bg-[linear-gradient(135deg,#f4eee4_0%,#f7f5ef_40%,#dff0e6_100%)] p-8 text-[#102117] shadow-[0_32px_90px_rgba(0,0,0,0.28)] md:p-12"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4d8665] md:text-sm">
              Conversion banner
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] text-[#11251a] md:text-5xl">
              Do not leave important business relationships to chance.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#55675c] md:text-lg">
              Sidago&apos;s own sales message ends with a direct call to action:
              contact Sidago today to see results. This section keeps that tone,
              but presents it with a more premium enterprise layout.
            </p>
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-[#224132]">
              <span>Chicago office</span>
              <span>contact+chicago@sidago.com</span>
              <span>Reply target: 24-48 hours</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#102117] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-0.5"
            >
              Request pricing
              <FiArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
            <a
              href="mailto:contact+chicago@sidago.com"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold tracking-[0.18em] text-[#102117] shadow-[0_16px_40px_rgba(16,33,23,0.08)] transition duration-300 hover:-translate-y-0.5"
            >
              Email Sidago
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function SalesLandingView() {
  const reduce = useReducedMotion();

  return (
    <>
      <HeroSection reduce={reduce} />
      <TrustSection />
      <ServicesSection reduce={reduce} />
      <FeaturesSection reduce={reduce} />
      <AnalyticsSection reduce={reduce} />
      <WorkflowSection reduce={reduce} />
      <SuccessSection reduce={reduce} />
      <ConversionBanner reduce={reduce} />
    </>
  );
}
