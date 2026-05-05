"use client";

import "../../app/globals.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/Navbar";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";

const executionContent = {
  hero: {
    useVideo: true,
    lighterTheme: false,
    videoSrc: "https://www.wintermute.com/videos/heroes/ventures.mp4",
    imageSrc: "",
    subtitle:
      "Sidago ensures consistent performance with optimized workflows and dedicated global support",
    fontWeight: 400,
    loop: true,
    lighterBgColor: "bg-[#f0f1f1]",
    videoSectionClass: "",
    videoClass: "left-[500px] top-[70px] !w-3/4 !h-3/4",
    titles: [
      {
        title: "Work with experts focused on",
        color: "",
        className: "",
      },
      {
        title: "efficient operational execution",
        color: "#3c85dd",
        className: "",
      },
    ],
  },
  aboutSection: {
    label: "About Sidago Execution",
    title: "Build a simple system for",
    highlight: "consistent execution",
    subtitle:
      "Sidago Execution helps organizations turn strategy into disciplined implementation. We align priorities, workflows, teams, and reporting so business operations move with more speed, clarity, and efficiency.",
    supportChips: [
      "Strategy implementation",
      "Operating rhythm",
      "Delivery governance",
      "Performance visibility",
      "Process discipline",
      "Scalable growth",
    ],
    visual: {
      eyebrow: "Execution snapshot",
      title: "Simple. Visible. Moving.",
      statusText: "Active",
      imageSrc: "/images/Paralegal-and-Bookkeeping2.jpg",
      imageAlt: "Sidago execution operations team at work",
      imageEyebrow: "Active delivery view",
      imageTitle:
        "Teams, workflow, and reporting aligned in one operating rhythm.",
      coordinationLabel: "Live coordination",
      coordinationText:
        "Clear owners, cleaner handoffs, faster follow-through.",
      deliveryStatusLabel: "Delivery status",
      deliveryStatusValue: "Stable",
      planningLabel: "Planning",
      planningValue: "92%",
      reportingLabel: "Reporting",
      reportingValue: "84%",
    },
    overviewItems: [
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
    ],
  },
  coreSection: {
    label: "Core Capabilities",
    title: "Everything needed to move work forward.",
    subtitle:
      "Focused services for planning, delivery, process, performance, and growth.",
    cards: [
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
        iconPath: "M9 10h22M9 18h14M9 26h22M28 15l4 4-4 4M13 7v6M24 23v6",
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
    ],
  },
  workflowSection: {
    label: "Execution Workflow",
    title: "A clean four-step workflow.",
    subtitle:
      "A practical execution sequence that keeps priorities, delivery, and improvement moving in one direction.",
    steps: [
      {
        title: "Discover",
        description:
          "Assess priorities, operating gaps, current workflows, and the outcomes that matter most.",
        tag: "Priority mapping",
      },
      {
        title: "Plan",
        description:
          "Define owners, milestones, capacity, governance, and the operating cadence for delivery.",
        tag: "Delivery planning",
      },
      {
        title: "Execute",
        description:
          "Coordinate teams, track dependencies, remove blockers, and keep decisions moving.",
        tag: "Live execution",
      },
      {
        title: "Optimize",
        description:
          "Measure performance, improve workflows, and scale the system as the business grows.",
        tag: "Performance tuning",
      },
    ],
  },
  resultsSection: {
    label: "Results / Impact",
    title: "Clear improvements without extra complexity.",
    subtitle:
      "Visible delivery gains, cleaner execution, and stronger reporting without adding operational drag.",
    metrics: [
      {
        value: "35%",
        label: "Faster Delivery",
        description:
          "Shorter planning-to-launch cycles through clearer ownership.",
        progress: "78%",
      },
      {
        value: "48%",
        label: "Improved Workflow",
        description:
          "Less rework with cleaner handoffs and stronger operating rhythm.",
        progress: "84%",
      },
      {
        value: "90%",
        label: "Better Visibility",
        description:
          "Transparent progress reporting for decisions and accountability.",
        progress: "90%",
      },
      {
        value: "3X",
        label: "Scalable Growth",
        description:
          "Execution capacity that adapts as new initiatives expand.",
        progress: "72%",
      },
    ],
  },
  cta: [
    {
      title: "Start execution planning",
      description: "Talk to Sidago about your execution priorities",
      href: "/contact",
      srLabel: "Start execution planning with Sidago",
      backgroundColor: "#3c85dd",
    },
    {
      title: "Explore our services",
      description: "See how Sidago supports planning, delivery, and growth",
      href: "/services",
      srLabel: "Explore Sidago services",
      backgroundColor: "#eef0ee",
    },
  ],
};

function ExecutionIcon({ path, className = "h-7 w-7", strokeWidth = "1" }) {
  return (
    <svg
      aria-hidden="true"
      className={`${className} text-[#3c85dd]`}
      fill="none"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={path}
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

function SupportPills({ chips }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {chips.map((chip) => (
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

function SectionHeading({ label, title, subtitle, className = "max-w-4xl" }) {
  return (
    <div className={className}>
      <div className="font-blender text-base uppercase tracking-[0.24em] text-[#d66243] md:text-lg">
        {label}
      </div>
      <h2 className="mt-5 text-3xl font-normal leading-[1.08] text-white/88 md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-gray-off-white/70 md:text-[1.7rem] md:leading-[1.3]">
          {subtitle}
        </p>
      ) : null}
      <div className="mt-8 h-px w-full bg-[#d66243]/80" />
    </div>
  );
}

function CountUpStat({ value }) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const numericValue = Number.parseInt(value, 10);
  const suffix = value.replace(String(numericValue), "");

  useEffect(() => {
    const node = ref.current;

    if (!node || hasAnimated || Number.isNaN(numericValue)) {
      return undefined;
    }

    const mediaQuery =
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;

    if (mediaQuery?.matches) {
      window.requestAnimationFrame(() => {
        setDisplayValue(numericValue);
        setHasAnimated(true);
      });
      return undefined;
    }

    const runAnimation = () => {
      const duration = 1400;
      const startTime = performance.now();

      setHasAnimated(true);

      const tick = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - (1 - progress) * (1 - progress);
        const nextValue = Math.round(numericValue * easedProgress);

        setDisplayValue(nextValue);

        if (progress < 1) {
          window.requestAnimationFrame(tick);
        }
      };

      window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.45 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasAnimated, numericValue]);

  if (Number.isNaN(numericValue)) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

function AboutVisual({ visual, supportChips, overviewItems }) {
  return (
    <div className="execution-flow-panel overflow-hidden rounded-lg bg-[#101814] p-5 shadow-[0_18px_48px_rgba(0,0,0,0.22)] md:p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="font-blender text-xs uppercase tracking-[0.2em] text-[#3c85dd]">
            {visual.eyebrow}
          </div>
          <div className="mt-2 text-2xl text-white">{visual.title}</div>
        </div>
        <div className="rounded-full bg-[#3c85dd]/12 px-4 py-2 text-sm text-[#3c85dd]">
          {visual.statusText}
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-md bg-[#0a120e]">
        <div className="execution-visual-glow absolute left-[-18%] top-[-30%] h-40 w-40 rounded-full bg-[#3c85dd]/16 blur-3xl" />
        <div className="execution-scan" />
        <div className="absolute inset-0 execution-grid bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
        <div className="relative grid gap-4 p-4 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:p-5">
          <div className="relative min-h-[16rem] overflow-hidden rounded-md">
            <Image
              src={visual.imageSrc}
              alt={visual.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 28rem, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07100c] via-[#07100c]/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="text-xs uppercase tracking-[0.18em] text-[#3c85dd]">
                {visual.imageEyebrow}
              </div>
              <div className="mt-2 max-w-xs text-lg leading-snug text-white">
                {visual.imageTitle}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="relative overflow-hidden rounded-md bg-white/[0.045] p-4">
              <div className="execution-pulse-line h-px w-16 bg-[#3c85dd]/70" />
              <div className="mt-4 text-xs uppercase tracking-[0.18em] text-gray-off-white/55">
                {visual.coordinationLabel}
              </div>
              <div className="mt-2 text-base text-white">
                {visual.coordinationText}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md bg-white/[0.045] p-4">
              <div className="execution-pulse-line execution-pulse-line-delay h-px w-20 bg-[#3c85dd]/70" />
              <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-gray-off-white/55">
                <span>{visual.deliveryStatusLabel}</span>
                <span className="execution-node text-[#3c85dd]">
                  {visual.deliveryStatusValue}
                </span>
              </div>
              <div className="mt-3 space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-off-white/72">
                  <span>{visual.planningLabel}</span>
                  <span>{visual.planningValue}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="execution-progress h-full rounded-full bg-[#3c85dd]"
                    style={{ width: visual.planningValue }}
                  />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-off-white/72">
                  <span>{visual.reportingLabel}</span>
                  <span>{visual.reportingValue}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="execution-progress h-full rounded-full bg-[#3c85dd]"
                    style={{ width: visual.reportingValue }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-md bg-[#0a120e]">
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
          <div
            key={item.title}
            className="execution-flow-panel relative overflow-hidden rounded-md bg-white/[0.045] p-4"
          >
            <div className="execution-stat-dots absolute inset-x-0 top-0 h-24 opacity-80" />
            <div className="execution-stat-scan absolute inset-x-0 top-0 h-24" />
            <div className="pointer-events-none absolute left-4 right-4 top-[4.35rem] h-px bg-[#3c85dd]/12" />
            <div className="pointer-events-none absolute left-4 top-4 h-10 w-10 rounded-full bg-[#3c85dd]/10 blur-xl" />
            <div className="relative flex items-end justify-between gap-4">
              <div className="font-blender text-3xl text-[#3c85dd] md:text-4xl">
                <CountUpStat value={item.value} />
              </div>
              <div className="execution-stat-trend flex items-center gap-1 pt-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3c85dd]" />
                <span className="h-2.5 w-1.5 rounded-full bg-[#3c85dd]/90" />
                <span className="h-4 w-1.5 rounded-full bg-[#3c85dd]/85" />
                <span className="h-6 w-1.5 rounded-full bg-[#3c85dd]/80" />
                <span className="h-8 w-1.5 rounded-full bg-[#3c85dd]/75" />
              </div>
            </div>
            <div className="relative mt-3 h-px w-24 bg-[#3c85dd]/45" />
            <div className="relative mt-3 text-[0.68rem] uppercase tracking-[0.22em] text-[#3c85dd]/70">
              Statistics
            </div>
            <div className="relative mt-2 text-sm text-white">{item.title}</div>
            <p className="relative mt-2 text-xs leading-relaxed text-gray-off-white/54">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultsImpact({ section }) {
  return (
    <section>
      <SectionHeading
        label={section.label}
        title={section.title}
        subtitle={section.subtitle}
        className="max-w-6xl"
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {section.metrics.map((metric) => (
          <article
            key={metric.label}
            className="execution-flow-panel rounded-lg bg-[#101814] p-5 transition-colors duration-300 hover:bg-[#142119]"
          >
            <div className="font-blender text-3xl text-[#3c85dd] md:text-4xl">
              {metric.value}
            </div>
            <h4 className="mt-4 text-lg text-white">{metric.label}</h4>
            <p className="mt-3 text-sm leading-relaxed text-gray-off-white/62">
              {metric.description}
            </p>
            <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-gray-off-white/48">
              <span>Progress</span>
              <span>{metric.progress}</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="execution-progress h-full rounded-full bg-[#3c85dd]"
                style={{ width: metric.progress }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutSection({ section }) {
  const title = section.highlight ? (
    <>
      {section.title}
      <span className="text-white/88"> {section.highlight}</span>
    </>
  ) : (
    section.title
  );

  return (
    <section className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
      <div className="max-w-4xl">
        <SectionHeading
          label={section.label}
          title={title}
          subtitle={section.subtitle}
        />
        <SupportPills chips={section.supportChips} />
      </div>

      <AboutVisual
        visual={section.visual}
        supportChips={section.supportChips}
        overviewItems={section.overviewItems}
      />
    </section>
  );
}

function CoreCapabilities({ section }) {
  return (
    <section>
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          label={section.label}
          title={section.title}
          subtitle={section.subtitle}
          className="max-w-4xl"
        />
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {section.cards.slice(0, 4).map((card, index) => (
          <article
            key={card.title}
            className="execution-card group relative overflow-hidden rounded-lg bg-[#101814] p-6 transition-colors duration-300 hover:bg-[#142119]"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="pointer-events-none absolute right-[-0.75rem] top-[-0.75rem] opacity-[0.08] transition-opacity duration-300 group-hover:opacity-[0.14]">
              <ExecutionIcon
                path={card.iconPath}
                className="h-32 w-32 md:h-36 md:w-36"
                strokeWidth="0.9"
              />
            </div>

            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3c85dd]/20 via-[#3c85dd]/8 to-transparent shadow-[inset_0_0_0_1px_rgba(60,133,221,0.24)] transition-transform duration-300 group-hover:scale-[1.04]">
              <div className="absolute inset-[0.45rem] rounded-[1rem] bg-[#0c1511]" />
              <div className="relative flex h-full w-full items-center justify-center">
                <ExecutionIcon
                  path={card.iconPath}
                  className="h-10 w-10 md:h-11 md:w-11"
                  strokeWidth="1.15"
                />
              </div>
            </div>
            <h4 className="relative mt-7 text-xl text-white md:text-[1.65rem] md:leading-[1.1]">
              {card.title}
            </h4>
            <p className="relative mt-3 max-w-[24rem] text-sm leading-relaxed text-gray-off-white/66 md:text-base">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExecutionWorkflow({ section }) {
  return (
    <section>
      <div>
        <SectionHeading
          label={section.label}
          title={section.title}
          subtitle={section.subtitle}
          className="max-w-6xl"
        />

        <div className="mt-6 overflow-x-auto pb-3 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="relative flex min-w-max gap-4 pr-4">
            <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-white/8 lg:block" />
            {section.steps.map((step, index) => (
              <article
                key={step.title}
                className="execution-lane group relative min-h-[17rem] min-w-[18.5rem] snap-start overflow-hidden rounded-lg bg-[#101814] p-6 transition-colors duration-300 hover:bg-[#142119] md:min-w-[21rem] lg:min-w-[23rem]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="pointer-events-none absolute right-[-1rem] top-[-1rem] h-24 w-24 rounded-full bg-[#3c85dd]/[0.06] blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a120e]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#3c85dd] shadow-[0_0_14px_rgba(60,133,221,0.65)]" />
                  </div>
                  <div className="execution-pulse-line h-px w-16 bg-[#3c85dd]/70" />
                </div>
                <div className="relative mt-6 text-[0.7rem] uppercase tracking-[0.22em] text-[#3c85dd]/72">
                  Workflow phase
                </div>
                <h4 className="relative mt-3 text-2xl leading-tight text-white">
                  {step.title}
                </h4>
                <p className="relative mt-4 max-w-[17rem] text-base leading-relaxed text-gray-off-white/62">
                  {step.description}
                </p>
                <div className="relative mt-6 flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-gray-off-white/42">
                  <span className="rounded-full bg-white/[0.04] px-3 py-1.5">
                    {step.tag}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExecutionSection({ content }) {
  return (
    <>
      <section className="bg-[#151916] text-gray-off-white">
        <div className="container py-16 md:py-20">
          <AboutSection section={content.aboutSection} />
        </div>
      </section>
      <section className="bg-[#090f15] text-gray-off-white">
        <div className="container py-16 md:py-20">
          <CoreCapabilities section={content.coreSection} />
        </div>
      </section>
      <section className="bg-[#1c211e] text-gray-off-white">
        <div className="container py-16 md:py-20">
          <ExecutionWorkflow section={content.workflowSection} />
        </div>
      </section>
      <section className="bg-[#151916] text-gray-off-white">
        <div className="container py-16 md:py-20">
          <ResultsImpact section={content.resultsSection} />
        </div>
      </section>
    </>
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
          <HeroBannerSection {...executionContent.hero} />
          <ExecutionSection content={executionContent} />
          <CTASection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
