/** Support & Compliance page — structured copy */

export const helpCategories = [
  {
    id: "technical",
    title: "Technical",
    body: "Integrations, APIs, access issues, and environment troubleshooting with clear reproduction steps.",
    href: "/contact",
  },
  {
    id: "billing",
    title: "Billing",
    body: "Invoices, purchase orders, scope changes, and commercial alignment with your procurement rules.",
    href: "/contact",
  },
  {
    id: "general",
    title: "General",
    body: "Program questions, onboarding, and how to engage Sidago across support and compliance workstreams.",
    href: "/contact",
  },
  {
    id: "account",
    title: "Account & access",
    body: "User provisioning, role changes, and secure handoffs when teams or vendors rotate.",
    href: "/contact",
  },
];

/** Legal hub: tabbed sections with accordion-friendly clauses (summary copy — not legal advice). */
export const legalTabs = [
  {
    id: "privacy",
    label: "Privacy",
    lastUpdated: "May 2026",
    pdfLabel: "Privacy summary (PDF)",
    sections: [
      {
        title: "What we collect",
        body: "Identifiers, contact details, and operational metadata needed to deliver services, evidence work, and meet contractual and regulatory duties.",
      },
      {
        title: "How we use data",
        body: "Processing is limited to stated purposes, with retention aligned to obligations, dispute windows, and your instructions where you act as controller.",
      },
      {
        title: "Your choices",
        body: "Subject requests are triaged with identity checks; responses follow documented timelines and escalation paths for complex matters.",
      },
    ],
  },
  {
    id: "terms",
    label: "Terms of service",
    lastUpdated: "May 2026",
    pdfLabel: "Terms summary (PDF)",
    sections: [
      {
        title: "Engagement scope",
        body: "Deliverables, assumptions, and change control are defined per statement of work; out-of-scope work requires written approval.",
      },
      {
        title: "Acceptable use",
        body: "Services may not be used to violate law, compromise security, or circumvent compliance controls agreed in writing.",
      },
      {
        title: "Limitations",
        body: "Liability caps and carve-outs follow the executed agreement; summaries here do not replace signed contract text.",
      },
    ],
  },
  {
    id: "gdpr",
    label: "Data & GDPR",
    lastUpdated: "May 2026",
    pdfLabel: "Data processing overview (PDF)",
    sections: [
      {
        title: "Roles",
        body: "Controller/processor responsibilities are assigned per engagement; records of processing reflect reality on the ground.",
      },
      {
        title: "Transfers",
        body: "Cross-border mechanisms are selected based on risk, geography, and supervisory expectations—not generic boilerplate alone.",
      },
      {
        title: "Breach readiness",
        body: "Playbooks define assessment steps, notification templates, and evidence preservation aligned to your jurisdiction.",
      },
    ],
  },
];

export const supportPillars = [
  {
    title: "Responsive service desk",
    body: "Tiered intake, clear SLAs, and escalation paths so issues are owned from first contact to resolution.",
  },
  {
    title: "Evidence-ready compliance",
    body: "Control matrices, audit trails, and periodic reviews aligned to how your regulators and partners actually ask questions.",
  },
  {
    title: "Security by design",
    body: "Least-privilege access, change discipline, and monitoring hooks that support both IT operations and compliance attestations.",
  },
  {
    title: "Continuous improvement",
    body: "Post-incident learning, policy refresh cadences, and metrics that tie support quality to business risk reduction.",
  },
];

export const complianceCards = [
  {
    title: "Policy & control library",
    body: "Centralized policies, standard operating procedures, and control statements mapped to obligations and owners.",
  },
  {
    title: "Audit coordination",
    body: "Evidence packs, interview prep, and finding remediation tracking across internal and external audit cycles.",
  },
  {
    title: "Training & attestation",
    body: "Role-based curricula, acknowledgements, and lightweight quizzes that keep teams current without slowing delivery.",
  },
];

export const securityItems = [
  {
    title: "Identity & access",
    body: "Provisioning reviews, privileged access workflows, and periodic access recertification aligned to your stack.",
  },
  {
    title: "Privacy program",
    body: "Data inventory, purpose limitation, retention schedules, and DPIA-style assessments for new processing activities.",
  },
];

export const riskPoints = [
  "Operational risk registers linked to incidents, vendors, and key business services.",
  "Scenario testing for high-impact events with clear decision trees and communications templates.",
  "Third-party diligence templates scaled to vendor criticality—not one-size-fits-all paperwork.",
];

export const regulatoryTopics = [
  {
    label: "Sector frameworks",
    text: "Map controls to industry-specific expectations while preserving a single internal control language.",
  },
  {
    label: "Cross-border nuance",
    text: "Coordinate retention, transfer mechanisms, and local notices where your customer footprint spans regions.",
  },
  {
    label: "Reporting readiness",
    text: "Rehearse supervisory interactions with consistent narrative, metrics, and remediation evidence.",
  },
];

export const docLinks = [
  {
    title: "Service catalog",
    body: "What Sidago supports, expected response targets, and how to request changes or exceptions.",
  },
  {
    title: "Compliance handbook",
    body: "Roles, approvals, recordkeeping rules, and where to find the latest approved templates.",
  },
  {
    title: "Security notices",
    body: "How we communicate incidents, maintenance windows, and required actions for your administrators.",
  },
];

export const workflowSteps = [
  {
    step: "01",
    title: "Intake",
    body: "Structured tickets, severity classification, and automatic routing to the right resolver group.",
  },
  {
    step: "02",
    title: "Triage",
    body: "Duplicate detection, known-error matching, and compliance flags surfaced before work begins.",
  },
  {
    step: "03",
    title: "Resolve",
    body: "Time-boxed investigation, transparent updates, and closure criteria tied to customer confirmation.",
  },
  {
    step: "04",
    title: "Learn",
    body: "Root-cause notes, control adjustments, and knowledge articles so the same class of issue trends down.",
  },
];

export const metricStats = [
  {
    value: "99%",
    label: "Target availability for covered support windows under agreed programs (rolling sample)",
  },
  {
    value: "48",
    label: "Median hours to first substantive compliance review response on scoped requests",
  },
  {
    value: "24",
    label: "Critical security escalations acknowledged within twenty-four hours on business days",
  },
];

export const faqItems = [
  {
    q: "How do you align support with compliance obligations?",
    a: "We map ticket categories and change types to your control framework so evidence is produced as work happens—not reconstructed weeks later.",
  },
  {
    q: "Can Sidago work with our existing tools?",
    a: "Yes. We integrate with common ITSM, GRC, and identity platforms, and document any bespoke connectors or manual bridges during onboarding.",
  },
  {
    q: "What does onboarding typically look like?",
    a: "A short discovery on policies, systems, and stakeholders, followed by a staged cutover with parallel run where risk warrants it.",
  },
  {
    q: "How are incidents communicated?",
    a: "You choose channels and audiences. We provide templates for customer, partner, and internal notices, and track acknowledgements where required.",
  },
];
