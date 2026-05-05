"use client";
import "../../app/globals.css";
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/Navbar";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";

const titles = [
  {
    title: "Work with experts focused on",
    color: "",
    className: "",
  },
  {
    title: "efficient operational execution",
    color: "#168b50",
    className: "",
  },
];

const supportChips = [
  "Strategy implementation",
  "Operating rhythm",
  "Delivery governance",
  "Performance visibility",
  "Process discipline",
  "Scalable growth",
];

const overviewItems = [
  {
    value: "42%",
    title: "Faster cycle time",
    description:
      "Execution models designed to reduce friction, improve decisions, and shorten delivery loops.",
  },
  {
    value: "6",
    title: "Core operating lanes",
    description:
      "Strategy, planning, process, delivery, reporting, and growth support aligned in one system.",
  },
  {
    value: "90%",
    title: "Clearer visibility",
    description:
      "Practical dashboards and routines help leaders see progress, blockers, and next actions.",
  },
];

const executionCards = [
  {
    title: "Strategic Execution",
    description:
      "Translate priorities into focused initiatives, clear owners, and measurable execution plans.",
    iconPath: "M6 29h28M10 25l6-6 5 4 9-11M28 12h6v6",
  },
  {
    title: "Operational Planning",
    description:
      "Build capacity plans, cadences, and delivery routines that keep work moving with less drag.",
    iconPath:
      "M9 10h22M9 18h14M9 26h22M28 15l4 4-4 4M13 7v6M24 23v6",
  },
  {
    title: "Process Optimization",
    description:
      "Refine workflows, handoffs, controls, and documentation so teams can deliver repeatedly.",
    iconPath: "M8 9h24v22H8zM13 15h14M13 20h14M13 25h8",
  },
  {
    title: "Project Delivery",
    description:
      "Coordinate milestones, dependencies, risks, and follow-through across strategic initiatives.",
    iconPath: "M8 20h7l4-9 5 18 4-9h4M9 31h22M9 9h22",
  },
  {
    title: "Performance Tracking",
    description:
      "Create scorecards and operating reviews that show progress, blockers, and accountability.",
    iconPath: "M7 31h26M11 27v-8M19 27V9M27 27V15",
  },
  {
    title: "Growth Support",
    description:
      "Strengthen execution capacity as teams, markets, and operational demands expand.",
    iconPath: "M7 29V11h6v18M17 29V7h6v22M27 29V15h6v14",
  },
];

const executionMetrics = [
  {
    value: "35%",
    label: "Faster Delivery",
    description: "Shorter planning-to-launch cycles through clearer ownership.",
    progress: "78%",
  },
  {
    value: "48%",
    label: "Improved Workflow",
    description: "Less rework with cleaner handoffs and stronger operating rhythm.",
    progress: "84%",
  },
  {
    value: "90%",
    label: "Better Visibility",
    description: "Transparent progress reporting for decisions and accountability.",
    progress: "90%",
  },
  {
    value: "3X",
    label: "Scalable Growth",
    description: "Execution capacity that adapts as new initiatives expand.",
    progress: "72%",
  },
];

const operatingSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "Assess priorities, operating gaps, current workflows, and the outcomes that matter most.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "Define owners, milestones, capacity, governance, and the operating cadence for delivery.",
  },
  {
    step: "03",
    title: "Execute",
    description:
      "Coordinate teams, track dependencies, remove blockers, and keep decisions moving.",
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "Measure performance, improve workflows, and scale the system as the business grows.",
  },
];

const executionCtaItems = [
  {
    title: "Start execution planning",
    description: "Talk to Sidago about your execution priorities",
    href: "/contact",
    srLabel: "Start execution planning with Sidago",
    backgroundColor: "#168b50",
  },
  {
    title: "Explore our services",
    description: "See how Sidago supports planning, delivery, and growth",
    href: "/services",
    srLabel: "Explore Sidago services",
    backgroundColor: "#eef0ee",
  },
];

function ExecutionIcon({ path }) {
  return (
    <svg
      aria-hidden="true"
      className="h-7 w-7 text-green-dark"
      fill="none"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={path}
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeWidth="1"
      />
    </svg>
  );
}

function SupportPills() {
  return (
    <div className="mt-8 flex flex-wrap gap-2">
      {supportChips.map((chip) => (
        <span
          key={chip}
          className="rounded-full bg-white/[0.055] px-4 py-2 text-sm text-gray-off-white/68"
        >
          {chip}
        </span>
      ))}
    </div>
  );
}

function AboutVisual() {
  return (
    <div className="overflow-hidden rounded-lg bg-[#101814] p-5 shadow-[0_18px_48px_rgba(0,0,0,0.22)] md:p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="font-blender text-xs uppercase tracking-[0.2em] text-green-dark">
            Execution snapshot
          </div>
          <div className="mt-2 text-2xl text-white">Simple. Visible. Moving.</div>
        </div>
        <div className="rounded-full bg-green-dark/12 px-4 py-2 text-sm text-green-tradfi">
          Active
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-md bg-[#0a120e]">
        <div className="execution-carousel-track flex w-max gap-3 px-3 py-3">
          {[...supportChips, ...supportChips].map((chip, index) => (
            <div
              key={`${chip}-${index}`}
              className="min-w-[12rem] rounded-md bg-white/[0.055] px-4 py-3 text-sm text-gray-off-white/72"
            >
              {chip}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {overviewItems.map((item) => (
          <div key={item.title} className="rounded-md bg-white/[0.045] p-4">
            <div className="font-blender text-3xl text-green-dark">
              {item.value}
            </div>
            <div className="mt-2 text-sm text-white">{item.title}</div>
            <p className="mt-2 text-xs leading-relaxed text-gray-off-white/54">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultsImpact() {
  return (
    <section className="mt-20">
      <div className="max-w-3xl">
        <div className="font-blender text-sm uppercase tracking-[0.22em] text-green-dark">
          Results / Impact
        </div>
        <h3 className="mt-4 text-3xl leading-tight text-white md:text-4xl">
          Clear improvements without extra complexity.
        </h3>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {executionMetrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-lg bg-[#101814] p-5 transition-colors duration-300 hover:bg-[#142119]"
          >
            <div className="font-blender text-3xl text-green-dark md:text-4xl">
              {metric.value}
            </div>
            <h4 className="mt-4 text-lg text-white">{metric.label}</h4>
            <p className="mt-3 text-sm leading-relaxed text-gray-off-white/62">
              {metric.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
      <div className="max-w-4xl">
        <div className="font-blender text-sm uppercase tracking-[0.22em] text-green-dark">
          About Sidago Execution
        </div>
        <h2 className="mt-5 max-w-4xl text-4xl leading-[1.08] text-white md:text-5xl">
          Build a simple system for
          <span className="text-green-dark"> consistent execution</span>
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-off-white/72 md:text-lg">
          Sidago Execution helps organizations turn strategy into disciplined
          implementation. We align priorities, workflows, teams, and reporting
          so business operations move with more speed, clarity, and efficiency.
        </p>
        <SupportPills />
      </div>

      <AboutVisual />
    </section>
  );
}

function CoreCapabilities() {
  return (
    <section className="mt-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="font-blender text-sm uppercase tracking-[0.22em] text-green-dark">
            Core Capabilities
          </div>
          <h3 className="mt-4 text-3xl leading-tight text-white md:text-4xl">
            Everything needed to move work forward.
          </h3>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-gray-off-white/64 md:text-base">
          Focused services for planning, delivery, process, performance, and
          growth.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {executionCards.slice(0, 4).map((card, index) => (
          <article
            key={card.title}
            className="execution-card group rounded-lg bg-[#101814] p-6 transition-colors duration-300 hover:bg-[#142119]"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-green-dark/10 transition-colors group-hover:bg-green-dark/16">
              <ExecutionIcon path={card.iconPath} />
            </div>
            <h4 className="mt-6 text-xl text-white">{card.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-gray-off-white/66 md:text-base">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExecutionWorkflow() {
  return (
    <section className="mt-20">
      <div>
        <div className="max-w-3xl">
          <div className="font-blender text-sm uppercase tracking-[0.22em] text-green-dark">
            Execution Workflow
          </div>
          <h3 className="mt-4 text-3xl leading-tight text-white md:text-4xl">
            A clean four-step workflow.
          </h3>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {operatingSteps.map((step, index) => (
            <article
              key={step.title}
              className="execution-lane rounded-lg bg-[#101814] p-5 transition-colors duration-300 hover:bg-[#142119]"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a120e] font-blender text-base text-green-dark">
                {step.step}
              </div>
              <h4 className="mt-6 text-lg text-white">{step.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-gray-off-white/62">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExecutionSection() {
  return (
    <section className="bg-[#090f15] text-gray-off-white">
      <div className="container py-block">
        <AboutSection />
        <CoreCapabilities />
        <ExecutionWorkflow />
        <ResultsImpact />
      </div>
    </section>
  );
}

export default function ExecutionPage() {
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
            videoSrc="https://www.wintermute.com/videos/heroes/ventures.mp4"
            titles={titles}
            subtitle="Sidago ensures consistent performance with optimized workflows and dedicated global support"
            videoClass="left-[500px] top-[70px] !w-3/4 !h-3/4"
          />
          <ExecutionSection />
          <CTASection items={executionCtaItems} />
          <Footer />
        </main>
      </div>
    </div>
  );
}
