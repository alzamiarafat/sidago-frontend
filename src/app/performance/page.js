import "../../app/globals.css";
import Image from "next/image";
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import PerformanceCapabilitiesCarousel from "@/src/components/sections/v2/performancepage/PerformanceCapabilitiesCarousel";
import PerformanceTabsSlider from "@/src/components/sections/v2/performancepage/PerformanceTabsSlider";
import { getGlobalSettings, getPerformancePage } from "@/src/lib/api";
import { buildPageMetadata } from "@/src/lib/seo";

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

const performanceCarouselItems = [
  {
    title: "Sidago Performance visibility",
    description:
      "Sidago Performance turns workflow activity into clearer delivery visibility and review context.",
    metric: "96%",
    label: "Coverage",
    visual: "dashboard",
    imageFit: "contain",
    imageBackground: "#eef4fb",
  },
  {
    title: "Sidago Performance quality",
    description:
      "Sidago Performance helps teams protect standards, reduce rework, and keep operations measurable.",
    metric: "28%",
    label: "Less rework",
    visual: "quality",
    image: "/images/performance-quality-slide.png",
    imageFit: "contain",
    imageBackground: "#eef4fb",
  },
  {
    title: "Sidago Performance rhythm",
    description:
      "Sidago Performance connects reviews, risks, actions, and measurable service movement.",
    metric: "3.4x",
    label: "Review pace",
    visual: "rhythm",
    image: "/images/performance-rhythm-slide-v2.png",
    imageFit: "contain",
    imageBackground: "#edf3ff",
  },
  {
    title: "Sidago Performance capacity",
    description:
      "Sidago Performance gives teams a practical capacity view before workload issues slow delivery.",
    metric: "86%",
    label: "Owner coverage",
    visual: "capacity",
    imageFit: "contain",
    imageBackground: "#f2efe8",
  },
  {
    title: "Sidago Performance control",
    description:
      "Sidago Performance keeps operating signals organized for clearer ownership and follow-through.",
    metric: "42%",
    label: "Faster turnaround",
    visual: "control",
  },
  {
    title: "Sidago Performance reporting",
    description:
      "Sidago Performance turns updates into focused reporting that supports faster decisions.",
    metric: "91%",
    label: "SLA visibility",
    visual: "reporting",
  },
  {
    title: "Sidago Performance alignment",
    description:
      "Sidago Performance aligns teams around scorecards, service visibility, and improvement cadence.",
    metric: "18h",
    label: "Avg cycle",
    visual: "alignment",
  },
];

const clientLogos = [
  {
    name: "HCI Group",
    image: "/images/our-client1.jpg",
  },
  {
    name: "RAM Modular",
    image: "/images/our-client2.jpg",
  },
  {
    name: "Provider Power",
    image: "/images/our-client4.jpg",
  },
  {
    name: "Prescient Edge",
    image: "/images/our-client5.jpg",
  },
  {
    name: "Go Energies",
    image: "/images/our-client6.jpg",
  },
  {
    name: "Acacia",
    image: "/images/our-client11.jpg",
  },
  {
    name: "Daiichi Sankyo",
    image: "/images/daiichi-sanko.png",
  },
];

function SectionHeader({ eyebrow, title, description, className = "" }) {
  return (
    <div className={`max-w-5xl ${className}`}>
      <div className="font-blender text-sm uppercase tracking-[0.24em] text-[#E7512F] md:text-base">
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

function PerformanceImageCarousel({ section }) {
  const carouselImages = section.fallbackImages || [];
  const carouselItems = section.items.map((item, index) => ({
    ...item,
    image: item.image || carouselImages[index % carouselImages.length],
  }));
  const loopItems = [...carouselItems, ...carouselItems];

  return (
    <section className="overflow-hidden bg-[#0f140f] text-gray-off-white">
      <div className="container py-16 md:py-20">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="mt-10 overflow-hidden">
          <div className="performance-carousel-track flex w-max gap-5 md:gap-6 will-change-transform">
            {loopItems.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="group relative flex h-[25rem] w-[17rem] shrink-0 flex-col overflow-hidden rounded-[1.2rem] bg-[#f5f4ef] text-[#243047] shadow-[0_18px_44px_rgba(0,0,0,0.14)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(0,0,0,0.18)] md:h-[27rem] md:w-[20rem]"
              >
                <div className="p-0">
                  <div
                    className="relative h-[12.8rem] overflow-hidden md:h-[14.5rem]"
                    style={
                      item.imageBackground
                        ? { backgroundColor: item.imageBackground }
                        : { backgroundColor: "#e9edf3" }
                    }
                  >
                    <Image
                      src={item.image}
                      alt={`${item.title} visual`}
                      fill
                      className={`transition duration-700 ${
                        item.imageFit === "contain"
                          ? "object-contain p-4"
                          : "object-cover object-center group-hover:scale-[1.03]"
                      }`}
                      sizes="(min-width: 768px) 19rem, 16rem"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between px-5 pb-5 pt-5 md:px-6 md:pb-6">
                  <div>
                    <div className="font-blender text-[0.68rem] uppercase tracking-[0.2em] text-[#7f8898]">
                      Sidago Performance
                    </div>
                    <h3 className="mt-3 text-[2rem] font-medium leading-[1.04] text-[#243047] md:text-[2.2rem]">
                      {item.title}
                    </h3>
                    <p className="mt-4 min-h-[6rem] text-[1.02rem] leading-[1.6] text-[#536179]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#d8dde6] pt-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-[#7f8898]">
                      {item.label}
                    </div>
                    <div className="font-blender text-2xl leading-none text-[#4d5d7a]">
                      {item.metric}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
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

  return (
    <div className="flex h-svh flex-col text-base">
      <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
        <Navigation />

        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark bg-gray-night-green text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection {...performancePage.hero} />
          <PerformanceStats items={performancePage.stats} />
          <PerformanceDashboard section={performancePage.dashboardSection} />
          <PerformanceTabsSlider section={performancePage.tabsSection} />
          <PerformanceImageCarousel section={performancePage.imageCarouselSection} />
          <PerformanceCapabilities section={performancePage.capabilitiesSection} />
          <PerformanceMethod section={performancePage.methodSection} />
          <CTASection items={performancePage.cta} />
          <Footer footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
