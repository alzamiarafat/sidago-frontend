import "../../app/globals.css";
import Image from "next/image";
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/Navbar";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import PerformanceTabsSlider from "@/src/components/sections/v2/performancepage/PerformanceTabsSlider";
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
  },
  {
    title: "Workflow Diagnostics",
    description:
      "Sidago Performance finds the friction points behind missed deadlines, unclear ownership, duplicate effort, and slow approvals.",
  },
  {
    title: "Operating Reviews",
    description:
      "Sidago Performance creates a reliable cadence for decisions, blockers, accountability, and continuous improvement.",
  },
  {
    title: "Reporting Systems",
    description:
      "Sidago Performance turns fragmented updates into concise dashboards that leaders and delivery teams can use every week.",
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
    step: "01",
    title: "Map Sidago performance flows",
    description:
      "Sidago Performance documents workflows, ownership, standards, data sources, and the moments where performance is lost.",
  },
  {
    step: "02",
    title: "Build the Sidago scorecard",
    description:
      "Sidago Performance defines useful metrics around speed, quality, capacity, risk, and customer-facing outcomes.",
  },
  {
    step: "03",
    title: "Run the performance rhythm",
    description:
      "Sidago Performance installs review routines, escalation paths, and reporting loops that make improvement repeatable.",
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
  },
  {
    title: "Sidago Performance quality",
    description:
      "Sidago Performance helps teams protect standards, reduce rework, and keep operations measurable.",
    metric: "28%",
    label: "Less rework",
    visual: "quality",
  },
  {
    title: "Sidago Performance rhythm",
    description:
      "Sidago Performance connects reviews, risks, actions, and measurable service movement.",
    metric: "3.4x",
    label: "Review pace",
    visual: "rhythm",
  },
  {
    title: "Sidago Performance capacity",
    description:
      "Sidago Performance gives teams a practical capacity view before workload issues slow delivery.",
    metric: "86%",
    label: "Owner coverage",
    visual: "capacity",
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

function PerformanceStats() {
  return (
    <section className="bg-[#101410] text-gray-off-white">
      <div className="container py-14 md:py-18">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {performanceStats.map((item) => (
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

function PerformanceDashboard() {
  return (
    <section className="bg-[#e9ece9] text-[#111511]">
      <div className="container grid gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
        <SectionHeader
          eyebrow="Performance System"
          title="Sidago Performance creates a clearer operating view for faster decisions."
          description="Sidago Performance connects measurement, workflow discipline, and leadership reporting so teams can see what is healthy, what is blocked, and where improvement will matter most."
          className="[&_*]:text-[#111511] [&>div]:!text-[#E7512F] [&>p]:!text-[#3d463f]"
        />

        <div className="rounded-lg bg-[#111511] p-5 text-gray-off-white shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:p-6">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="font-blender text-xs uppercase tracking-[0.22em] text-[#f075e4]">
                Live performance view
              </div>
              <div className="mt-2 text-2xl text-white">Operational health</div>
            </div>
            <div className="rounded-full bg-[#f075e4]/14 px-4 py-2 text-sm text-[#f075e4]">
              Active
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-3">
              {performanceSignals.map((signal, index) => (
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
                {[52, 68, 61, 74, 88, 79, 94].map((height, index) => (
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
                <div className="rounded-md bg-white/[0.055] p-3">
                  <div className="font-blender text-2xl text-white">96%</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-gray-off-white/42">
                    Coverage
                  </div>
                </div>
                <div className="rounded-md bg-white/[0.055] p-3">
                  <div className="font-blender text-2xl text-white">18h</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-gray-off-white/42">
                    Avg cycle
                  </div>
                </div>
                <div className="rounded-md bg-white/[0.055] p-3">
                  <div className="font-blender text-2xl text-white">12</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-gray-off-white/42">
                    Risks
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PerformanceCapabilities() {
  return (
    <section className="bg-[#141914] text-gray-off-white">
      <div className="container py-16 md:py-20">
        <SectionHeader
          eyebrow="Sidago Performance Capabilities"
          title="Performance support built around the way Sidago helps teams deliver."
          description="Sidago Performance is not more reporting. It is a sharper system for seeing progress, protecting quality, and making work easier to manage at scale."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {performanceCapabilities.map((item, index) => (
            <article
              key={item.title}
              className="performance-rise-card group rounded-lg bg-[#0d120e] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] transition-colors duration-300 hover:bg-[#191f1a]"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="font-blender text-sm uppercase tracking-[0.24em] text-[#f075e4]/78">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-2xl text-white">{item.title}</h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-off-white/62">
                {item.description}
              </p>
              <div className="mt-6 h-px w-full bg-white/10">
                <div className="h-px w-24 bg-[#f075e4] transition-all duration-300 group-hover:w-40" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PerformanceImageCarousel() {
  const carouselImages = [
    "/images/sidago-performance-view.png",
    "/images/sidago-performance-capacity.png",
  ];
  const carouselItems = performanceCarouselItems.slice(0, 4).map((item, index) => ({
    ...item,
    image: carouselImages[index % carouselImages.length],
  }));
  const loopItems = [...carouselItems, ...carouselItems];

  return (
    <section className="overflow-hidden bg-[#0f140f] text-gray-off-white">
      <div className="container py-16 md:py-20">
        <SectionHeader
          eyebrow="Sidago Performance Views"
          title="A visual layer for Sidago Performance work."
          description="Simple image-backed views for visibility, quality, review rhythm, and capacity conversations."
        />

        <div className="mt-10 overflow-hidden">
          <div className="performance-carousel-track flex w-max gap-4 md:gap-5">
            {loopItems.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="group relative h-[19rem] w-[16rem] shrink-0 overflow-hidden rounded-lg bg-[#151b15] shadow-[0_12px_32px_rgba(0,0,0,0.18)] ring-1 ring-white/8 transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(0,0,0,0.26)] md:h-[20rem] md:w-[19rem]"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} visual`}
                  fill
                  className="object-cover opacity-92 transition duration-700 group-hover:scale-[1.04]"
                  sizes="(min-width: 768px) 19rem, 16rem"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050805]/94 via-[#050805]/34 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-px bg-white/18" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#050805] to-transparent" />
                <div className="absolute inset-x-4 bottom-4 md:inset-x-5 md:bottom-5">
                  <div className="font-blender text-[0.68rem] uppercase tracking-[0.2em] text-gray-off-white/58">
                    Sidago Performance
                  </div>

                  <h3 className="mt-3 text-xl leading-[1.08] text-white md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-off-white/74">
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

function PerformanceMethod() {
  return (
    <section className="bg-[#202620] text-gray-off-white">
      <div className="container py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeader
            eyebrow="Sidago Performance Method"
            title="From unclear performance to managed improvement."
            description="Sidago Performance helps teams move from scattered updates to a practical operating rhythm: clear metrics, visible blockers, and consistent action."
          />

          <div className="space-y-4">
            {performanceSteps.map((item) => (
              <article
                key={item.step}
                className="grid gap-5 rounded-lg bg-[#111711] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] md:grid-cols-[5rem_1fr]"
              >
                <div className="font-blender text-4xl text-[#f075e4]">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-off-white/62">
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

export default function PerformancePage({ variant = "default", slug = "" }) {
  const isB2B = true;

  return (
    <div className="flex h-svh flex-col text-base">
      <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
        <Navigation />

        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark bg-gray-night-green text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection
            useVideo={true}
            lighterTheme={false}
            videoSrc={
              "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/17212516/Accordion-Prop-trading.mp4#t=4.14"
            }
            titles={defaultTitles}
            subtitle="Sidago Performance helps teams improve speed, quality, capacity, and reporting visibility through measurable operating systems"
            videoClass={
              isB2B
                ? "left-[500px] !w-3/4"
                : "left-[500px] top-[70px] !w-3/4 !h-3/4"
            }
          />
          <PerformanceStats />
          <PerformanceDashboard />
          <PerformanceTabsSlider />
          <PerformanceImageCarousel />
          <PerformanceCapabilities />
          <PerformanceMethod />
          <CTASection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
