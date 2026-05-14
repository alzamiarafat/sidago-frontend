"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  FiChevronDown,
  FiLock,
  FiShield,
  FiTarget,
  FiUsers,
} from "react-icons/fi";
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import { DotMatrixText } from "@/src/components/sections/v2/common/DotMatrixText";
import ComplianceLegalHub from "@/src/components/sections/v2/support-compliance/ComplianceLegalHub";
import ComplianceStandardsFlipCard from "@/src/components/sections/v2/support-compliance/ComplianceStandardsFlipCard";
import SupportBrutalistShowcase from "@/src/components/sections/v2/support-compliance/SupportBrutalistShowcase";
import SupportHelpHub from "@/src/components/sections/v2/support-compliance/SupportHelpHub";
import {
  complianceCards,
  faqItems,
  metricStats,
  regulatoryTopics,
  riskPoints,
  securityItems,
} from "@/src/components/sections/v2/support-compliance/data";
import {
  fadeIn,
  fadeUp,
  stagger,
  transitionQuick,
  viewportOnce,
} from "@/src/components/sections/v2/support-compliance/motion";

/** Shared layout; each section sets its own `bg-[#…]` (brand band colors). */
const SECTION =
  "relative scroll-mt-24 overflow-hidden text-gray-off-white";
const GLASS =
  "rounded-3xl bg-white/[0.045] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.52)] backdrop-blur-xl md:p-7";
const GLASS_SOFT =
  "rounded-3xl bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.48)] backdrop-blur-xl md:p-7";

const pillarIcons = [FiUsers, FiShield, FiLock, FiTarget];

function SectionHeader({ eyebrow, title, description, className = "" }) {
  return (
    <div className={`mb-10 max-w-3xl md:mb-14 ${className}`}>
      {eyebrow ? (
        <p className="font-saans text-sm uppercase tracking-[0.22em] text-green-dark">
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

function ComplianceSection() {
  return (
    <section
      id="compliance-standards"
      className={`${SECTION} bg-[#020403] px-4 sm:px-6 md:px-10`}
    >
      <div className="container relative py-16 sm:py-20 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <SectionHeader
            eyebrow="Compliance standards"
            title="Controls that stay aligned as your business changes"
            description="Coherent policies, accountable owners, and audit-ready evidence without slowing delivery."
          />
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 overflow-visible md:grid-cols-3 md:gap-8"
        >
          {complianceCards.map((card, index) => (
            <motion.div key={card.title} variants={fadeUp} className="h-full">
              <ComplianceStandardsFlipCard card={card} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SecurityPrivacySection({ reduce }) {
  return (
    <section
      id="security-privacy"
      className={`${SECTION} bg-[#070b0a] px-4 sm:px-6 md:px-10`}
    >
      <div className="container relative py-16 sm:py-20 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <SectionHeader
            eyebrow="Security & privacy"
            title="Protect data, identities, and customer trust"
            description="Controls that work for security, privacy, and day-to-day operations."
          />
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-5"
          >
            {securityItems.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className={GLASS_SOFT}
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
            className={GLASS}
          >
            <p className="font-saans text-xs uppercase tracking-[0.2em] text-green-dark">
              Risk management focus
            </p>
            <ul className="mt-6 space-y-4">
              {riskPoints.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed text-gray-tradfi-silver">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E7512F]" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DataProtectionSection() {
  const [active, setActive] = useState(-1);

  return (
    <section
      id="data-protection"
      className={`${SECTION} bg-[#151916] px-4 sm:px-6 md:px-10`}
    >
      <div className="container relative py-16 sm:py-20 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <SectionHeader
            eyebrow="Data protection"
            title="Retention, minimization, and defensible processing"
            description="Lawful bases, technical measures, and breach playbooks aligned to how data actually moves."
          />
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-3 sm:gap-8"
        >
          {metricStats.map((row, index) => (
            <motion.div
              key={row.label}
              variants={fadeUp}
              className={`${GLASS} px-6 py-8 text-center md:px-8 md:py-10`}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(-1)}
            >
              <div className="flex justify-center">
                <DotMatrixText
                  text={row.value}
                  active={active === index}
                  dotSize={2}
                  dotSpacing={3}
                  dotColor="#E9EEE9"
                  activeDotColor="#E7512F"
                  fontSizeMobile={44}
                  fontSizeDesktop={64}
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                {row.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function RegulatorySection({ reduce }) {
  return (
    <section
      id="regulatory-guidelines"
      className={`${SECTION} bg-[#323935] px-4 sm:px-6 md:px-10`}
    >
      <div className="container relative py-16 sm:py-20 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <SectionHeader
            eyebrow="Regulatory guidelines"
            title="One operating model across overlapping rules"
            description="External obligations turned into language delivery teams can run and evidence."
          />
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-3 md:gap-8"
        >
          {regulatoryTopics.map((topic) => (
            <motion.article
              key={topic.label}
              variants={fadeUp}
              className={GLASS_SOFT}
            >
              <p className="font-saans text-xs uppercase tracking-[0.2em] text-green-dark">
                {topic.label}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-tradfi-silver">
                {topic.text}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const reduce = useReducedMotion();

  return (
    <section
      className={`${SECTION} bg-[#020403] px-4 sm:px-6 md:px-10`}
    >
      <div className="container relative max-w-3xl py-16 sm:py-20 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
        >
          <SectionHeader
            eyebrow="FAQ"
            title="Support & compliance questions"
            description="Straight answers on how Sidago collaborates with your legal, risk, and IT teams."
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-8 flex flex-col gap-5"
        >
          {faqItems.map((item, index) => {
            const open = openIndex === index;
            return (
              <motion.div
                key={item.q}
                variants={fadeUp}
                className="overflow-hidden rounded-3xl bg-white/[0.04] shadow-[0_26px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-start justify-between gap-4 px-4 py-5 text-left text-base text-white transition hover:bg-white/[0.04] md:px-5 md:text-lg"
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
                      transition={reduce ? { duration: 0 } : transitionQuick}
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

export default function SupportComplianceView({ footer }) {
  const reduce = useReducedMotion();

  return (
    <div className="font-saans">
      <SupportHelpHub />
      <SupportBrutalistShowcase />
      <ComplianceSection />
      <ComplianceLegalHub />
      <SecurityPrivacySection reduce={reduce} />
      <DataProtectionSection />
      <RegulatorySection reduce={reduce} />
      <FaqSection />
      <CTASection />
      <Footer footer={footer} />
    </div>
  );
}
