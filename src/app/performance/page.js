import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import PerformanceCapabilitiesCarousel from "@/src/components/sections/v2/performancepage/PerformanceCapabilitiesCarousel";
import "@/src/components/sections/v2/performancepage/performance-hero-mobile.css";
import PerformanceViewsCarousel from "@/src/components/sections/v2/performancepage/PerformanceViewsCarousel";
import PerformanceTabsSlider from "@/src/components/sections/v2/performancepage/PerformanceTabsSlider";
import { getGlobalSettings, getPerformancePage } from "@/src/lib/api";
import { buildPageMetadata } from "@/src/lib/seo";
import { notFound } from "next/navigation";

export const metadata = buildPageMetadata({
  title: "Performance",
  description:
    "Sidago Performance helps organizations improve workflow speed, service quality, reporting visibility, and operational accountability.",
  path: "/performance",
  keywords: [
    "Sidago performance",
    "business performance",
    "workflow performance",
    "performance reporting",
    "operational analytics",
  ],
});

const defaultTitles = [
  {
    title: "Sidago Performance",
    color: "",
    className: "",
  },
  {
    title: "turns operational signals",
    color: "#f075e4",
    className: "",
  },
  {
    title: "into measurable progress",
    color: "",
    className: "",
  },
];

const performanceStats = [
  {
    value: "42%",
    label: "Faster turnaround",
    detail: "Sidago Performance shortens delivery cycles through cleaner ownership and fewer stalled handoffs.",
  },
  {
    value: "91%",
    label: "SLA visibility",
    detail: "Sidago Performance tracks core service commitments through practical operating dashboards.",
  },
  {
    value: "3.4x",
    label: "Review cadence",
    detail: "Sidago Performance increases review rhythm without adding reporting overhead.",
  },
  {
    value: "28%",
    label: "Less rework",
    detail: "Sidago Performance reduces repeat work by aligning intake, standards, and escalation paths.",
  },
];

const performanceCapabilities = [
  {
    title: "Performance Measurement",
    description:
      "Sidago Performance defines the KPIs, service levels, and quality signals that show how work is actually moving.",
    image: "/images/performance-measurement-capabilities.png",
  },
  {
    title: "Workflow Diagnostics",
    description:
      "Sidago Performance finds the friction points behind missed deadlines, unclear ownership, duplicate effort, and slow approvals.",
    image: "/images/workflow-diagnostics-capabilities.png",
  },
  {
    title: "Sidago Performance rhythm",
    description:
      "Sidago Performance connects reviews, risks, actions, and measurable service movement.",
    image: "/images/performance-rhythm-slide-v2.png",
  },
  {
    title: "Reporting Systems",
    description:
      "Sidago Performance turns fragmented updates into concise dashboards that leaders and delivery teams can use every week.",
    image: "/images/performance-capabilities-illustration.png",
  },
];

const performanceSignals = [
  "Cycle time",
  "Backlog health",
  "Service quality",
  "Owner coverage",
  "Escalation load",
  "Decision velocity",
];

const performanceSteps = [
  {
    icon: "flow",
    title: "Map the work clearly",
    description:
      "Understand how work moves, who owns each step, and where progress starts to slow down.",
  },
  {
    icon: "scorecard",
    title: "Measure what matters",
    description:
      "Create simple metrics for speed, quality, capacity, risk, and customer-facing outcomes.",
  },
  {
    icon: "rhythm",
    title: "Improve every cycle",
    description:
      "Use review routines, escalation paths, and reporting loops to make improvement repeatable.",
  },
];

function SectionHeader({ eyebrow, title, description, className = "" }) {
  return (
    <div className={`max-w-5xl ${className}`}>
      <div className="font-blender text-sm tracking-[0.24em] text-[#E7512F] md:text-base">
        {eyebrow}
      </div>
      <h2 className="mt-5 text-3xl font-normal leading-[1.06] text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-off-white/68 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function PerformanceStats({ items }) {
  return (
    <section className="bg-[#101410] text-gray-off-white">
      <div className="container py-14 md:py-18">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.label}
              className="performance-rise-card relative overflow-hidden rounded-lg bg-[#171d18] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[#f075e4]" />
              <div className="font-blender text-4xl text-[#f075e4] md:text-5xl">
                {item.value}
              </div>
              <h3 className="mt-5 text-xl text-white">{item.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-off-white/58">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PerformanceDashboard({ section }) {
  return (
    <section className="bg-[#e9ece9] text-[#111511]">
      <div className="container grid gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          className="[&>div]:!text-[#111511] [&>h2]:!text-[#111511] [&>p]:!text-[#3d463f]"
        />

        <div className="rounded-lg bg-[#111511] p-5 text-gray-off-white shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:p-6">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="font-blender text-xs uppercase tracking-[0.22em] text-[#f075e4]">
                {section.panelEyebrow}
              </div>
              <div className="mt-2 text-2xl text-white">{section.panelTitle}</div>
            </div>
            <div className="rounded-full bg-[#f075e4]/14 px-4 py-2 text-sm text-[#f075e4]">
              {section.status}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-3">
              {section.signals.map((signal, index) => (
                <div
                  key={signal}
                  className="flex items-center justify-between rounded-md bg-white/[0.055] px-4 py-3"
                >
                  <span className="text-sm text-gray-off-white/68">{signal}</span>
                  <span className="h-2 w-10 rounded-full bg-[#f075e4]/70" style={{ opacity: 1 - index * 0.08 }} />
                </div>
              ))}
            </div>

            <div className="rounded-md bg-[#0b0f0c] p-5">
              <div className="flex h-48 items-end gap-3">
                {section.bars.map((height, index) => (
                  <div
                    key={`${height}-${index}`}
                    className="flex flex-1 items-end rounded-t-sm bg-white/5"
                    style={{ height: `${height}%` }}
                  >
                    <div
                      className="performance-bar h-full w-full rounded-t-sm bg-[#f075e4]"
                      style={{
                        opacity: 0.42 + index * 0.07,
                        animationDelay: `${index * 120}ms`,
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {section.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-md bg-white/[0.055] p-3">
                    <div className="font-blender text-2xl text-white">{metric.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-gray-off-white/42">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PerformanceCapabilities({ section }) {
  return (
    <section id="performance-capabilities" className="bg-[#141914] text-gray-off-white">
      <div className="container py-16 md:py-20">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <PerformanceCapabilitiesCarousel items={section.items} />
      </div>
    </section>
  );
}

function PerformanceMethod({ section }) {
  const renderMethodIcon = (icon) => {
    if (icon === "scorecard") {
      return (
        <svg viewBox="0 0 56 56" aria-hidden="true" className="h-14 w-14">
          <rect x="9" y="9" width="38" height="38" rx="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M18 22h9M18 31h20M18 40h13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M35 18l3 3 6-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }

    if (icon === "rhythm") {
      return (
        <svg viewBox="0 0 56 56" aria-hidden="true" className="h-14 w-14">
          <path d="M10 34c7-16 15 16 22 0s12-10 14-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="14" cy="34" r="4" fill="currentColor" />
          <circle cx="30" cy="34" r="4" fill="currentColor" />
          <circle cx="44" cy="28" r="4" fill="currentColor" />
          <path d="M12 45h32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 56 56" aria-hidden="true" className="h-14 w-14">
        <path d="M13 18h14c6 0 9 3 9 8v4c0 5 3 8 9 8h2" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M42 32l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="13" cy="18" r="5" fill="currentColor" />
        <circle cx="28" cy="18" r="3" fill="currentColor" opacity="0.5" />
        <circle cx="36" cy="30" r="3" fill="currentColor" opacity="0.5" />
      </svg>
    );
  };

  return (
    <section className="bg-[#202620] text-gray-off-white">
      <div className="container py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeader
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
            className="[&>div]:!text-xs [&>div]:md:!text-sm [&>h2]:!text-2xl [&>h2]:md:!text-[2.65rem] [&>p]:!text-sm [&>p]:md:!text-base"
          />

          <div className="space-y-4">
            {section.steps.map((item) => (
              <article
                key={item.title}
                className="grid gap-5 rounded-lg bg-[#111711] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] transition duration-300 hover:bg-[#131a13] md:grid-cols-[5rem_1fr]"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-md bg-[#f075e4]/10 text-[#f075e4] shadow-[inset_0_0_0_1px_rgba(240,117,228,0.24)]">
                  {renderMethodIcon(item.icon)}
                </div>
                <div>
                  <h3 className="text-lg leading-tight text-white md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-xs leading-relaxed text-gray-off-white/64 md:text-sm">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function PerformancePage() {
  const [settings, performancePage] = await Promise.all([
    getGlobalSettings(),
    getPerformancePage(),
  ]);

  if (!performancePage?.hero) {
    notFound();
  }

  const hero = {
    ...performancePage.hero,
    videoClass: "performance-hero-video lg:left-[500px] lg:!w-3/4",
    videoSectionClass: [
      "performance-hero-section",
      performancePage.hero?.videoSectionClass,
    ]
      .filter(Boolean)
      .join(" "),
  };

  return (
    <div className="flex min-h-svh flex-col text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark bg-gray-night-green text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection {...hero} />
          <PerformanceStats items={performancePage.stats} />
          <PerformanceDashboard section={performancePage.dashboardSection} />
          <PerformanceTabsSlider section={performancePage.tabsSection} />
          <PerformanceViewsCarousel section={performancePage.imageCarouselSection} />
          <PerformanceCapabilities section={performancePage.capabilitiesSection} />
          <PerformanceMethod section={performancePage.methodSection} />
          <CTASection />
          <Footer footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
