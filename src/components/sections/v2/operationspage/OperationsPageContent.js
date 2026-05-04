import OperationsMetrics from "./OperationsMetrics";

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mb-3xl flex flex-col gap-xl">
      <div className="flex max-w-4xl flex-col gap-xs">
        <h2
          className={`font-blender text-xl uppercase tracking-[0.18em] ${light ? "text-black" : "text-[#E7512F]"}`}
        >
          {title}
        </h2>
        <p className="max-w-4xl text-base leading-relaxed text-[#5F6660] lg:text-lg">
          {description}
        </p>
      </div>
      <hr className="border-green-dark/30" />
    </div>
  );
}

function CirclePattern() {
  return (
    <div className="relative h-10 w-10 rounded-full border border-current/25">
      <div className="absolute inset-2 rounded-full border border-current/30"></div>
      <div className="absolute inset-4 rounded-full bg-current/90"></div>
    </div>
  );
}

function FlowPattern() {
  return (
    <div className="flex items-center gap-1">
      <div className="h-2.5 w-2.5 rounded-full bg-current"></div>
      <div className="h-px w-7 bg-current/40"></div>
      <div className="h-2.5 w-2.5 rounded-full border border-current bg-transparent"></div>
      <div className="h-px w-7 bg-current/40"></div>
      <div className="h-2.5 w-2.5 rounded-full bg-current/30"></div>
    </div>
  );
}

function StackPattern() {
  return (
    <div className="space-y-2">
      <div className="h-3 w-10 rounded-full bg-current"></div>
      <div className="h-3 w-14 rounded-full bg-current/65"></div>
      <div className="h-3 w-8 rounded-full bg-current/35"></div>
    </div>
  );
}

function GridPattern() {
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className={`h-3 w-3 rounded-sm ${index % 2 === 0 ? "bg-current" : "bg-current/25"}`}
        ></div>
      ))}
    </div>
  );
}

function ArrowPattern() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="h-px w-8 bg-current"></div>
      <div className="h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-current"></div>
    </div>
  );
}

function ToolGlyph({ type }) {
  if (type === "flow") {
    return <FlowPattern />;
  }

  if (type === "stack") {
    return <StackPattern />;
  }

  if (type === "grid") {
    return <GridPattern />;
  }

  if (type === "arrow") {
    return <ArrowPattern />;
  }

  return <CirclePattern />;
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className="ml-[--arrow-offset] transition-all group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset]"
      style={{
        "--arrow-offset": "0.4rem",
        width: "1rem",
      }}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function IconShell({ children }) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F1F7F2] text-[#1F8F4E]">
      {children}
    </div>
  );
}

function HighlightIcon({ type }) {
  if (type === "efficiency") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path
          d="M12 3v6l4-4m-4 4L8 5m4 4c-4.418 0-8 3.134-8 7s3.582 7 8 7 8-3.134 8-7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "scalability") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path
          d="M4 18h4V8H4v10Zm6 0h4V5h-4v13Zm6 0h4v-7h-4v7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "transparency") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path
          d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
      <path
        d="M12 4 4 8l8 4 8-4-8-4Zm-8 8 8 4 8-4M4 16l8 4 8-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AreaIcon({ type }) {
  if (type === "supply") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path
          d="M4 7.5 12 4l8 3.5v9L12 20l-8-3.5v-9Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M4 7.5 12 11l8-3.5M12 11v9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "logistics") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path
          d="M3 7h11v8H3V7Zm11 3h3l3 3v2h-6v-5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="18" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (type === "quality") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path
          d="M12 3 6 5v6c0 4.2 2.6 8.1 6 10 3.4-1.9 6-5.8 6-10V5l-6-2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="m9.5 12 1.7 1.7 3.8-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
      <path
        d="M4 6h16v12H4V6Zm4-2v4M16 4v4M8 18v2M16 18v2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 10h6M9 14h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const highlights = [
  {
    title: "Efficiency",
    description:
      "Structured operating rhythms reduce waste, shorten turnaround times, and keep teams aligned on execution.",
    icon: "efficiency",
  },
  {
    title: "Scalability",
    description:
      "Flexible delivery models help Sidago expand support capacity without adding friction to the workflow.",
    icon: "scalability",
  },
  {
    title: "Transparency",
    description:
      "Clear ownership, reporting, and status visibility make decisions easier at every layer of the operation.",
    icon: "transparency",
  },
  {
    title: "Innovation",
    description:
      "Automation, process design, and integrated tools help modernize repetitive operational work.",
    icon: "innovation",
  },
];

const operationalAreas = [
  {
    title: "Supply Chain Management",
    description:
      "We coordinate sourcing, vendor communication, and inventory planning to keep material and information flow predictable.",
    icon: "supply",
  },
  {
    title: "Logistics & Distribution",
    description:
      "Sidago designs dependable delivery workflows with route visibility, scheduling discipline, and fulfillment oversight.",
    icon: "logistics",
  },
  {
    title: "Quality Control",
    description:
      "Defined standards, review checkpoints, and escalation paths protect service quality across each operating stage.",
    icon: "quality",
  },
  {
    title: "Technology Integration",
    description:
      "Operational systems are connected through dashboards, automations, and shared data models that support faster action.",
    icon: "technology",
  },
];

const workflow = [
  {
    step: "01",
    title: "Planning",
    description:
      "Define requirements, service levels, ownership, and expected outcomes before work begins.",
  },
  {
    step: "02",
    title: "Execution",
    description:
      "Deploy trained teams, delivery routines, and task controls to move work consistently and on schedule.",
  },
  {
    step: "03",
    title: "Monitoring",
    description:
      "Track throughput, quality signals, response times, and risk points through live operational reporting.",
  },
  {
    step: "04",
    title: "Optimization",
    description:
      "Use review cycles and data-backed improvements to remove bottlenecks and strengthen output over time.",
  },
];

const metrics = [
  {
    label: "Projects Delivered",
    value: 320,
    suffix: "+",
    stat: "320+",
    width: 250,
    description:
      "Cross-functional operational engagements launched and completed across client accounts.",
  },
  {
    label: "Delivery Success Rate",
    value: 98,
    suffix: "%",
    stat: "98%",
    width: 250,
    description:
      "Milestones and service commitments met through structured planning and monitored execution.",
  },
  {
    label: "Client Satisfaction",
    value: 94,
    suffix: "%",
    stat: "94%",
    width: 240,
    description:
      "Sustained partner satisfaction driven by responsiveness, clarity, and measurable reliability.",
  },
  {
    label: "Process Improvements",
    value: 45,
    suffix: "+",
    stat: "45+",
    width: 240,
    description:
      "Workflow redesigns and automation initiatives implemented to reduce friction and manual overhead.",
  },
];

const tools = [
  {
    name: "ERP Platforms",
    description: "Connected planning, procurement, and resource control.",
    glyph: "circle",
  },
  {
    name: "WMS & Inventory Systems",
    description: "Warehouse visibility and stock coordination in real time.",
    glyph: "grid",
  },
  {
    name: "Workflow Automation",
    description: "Automated handoffs, approvals, and recurring task triggers.",
    glyph: "flow",
  },
  {
    name: "Analytics Dashboards",
    description: "Operational reporting for throughput, risk, and service quality.",
    glyph: "stack",
  },
  {
    name: "Collaboration Suites",
    description: "Shared communication and documented ownership across teams.",
    glyph: "arrow",
  },
];

const caseStudies = [
  {
    title: "Regional Distribution Reset",
    outcome: "28% faster delivery coordination",
    description:
      "Sidago redesigned routing approvals and distribution reporting for a multi-location operator, reducing handoff delays and improving schedule accuracy.",
  },
  {
    title: "Quality Assurance Standardization",
    outcome: "41% fewer recurring process issues",
    description:
      "A fragmented service workflow was unified through control checklists, escalation matrices, and review cadences across departments.",
  },
  {
    title: "Operations Visibility Upgrade",
    outcome: "Real-time status tracking across teams",
    description:
      "We implemented dashboard-based monitoring to surface delivery blockers earlier and improve decision speed for leadership.",
  },
];

export default function OperationsPageContent() {
  return (
    <>
      <section className="bg-white text-black">
        <div className="container grid gap-12 py-block lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Operations Overview"
              title="Operational excellence designed for stable growth"
              description="Sidago’s operations strategy is built around disciplined execution, shared visibility, and repeatable systems that let teams move faster without losing control."
            />
          </div>
          <div className="bevel bg-gray-tradfi-horizon px-6 py-7 lg:px-8">
            <div className="flex items-center justify-between border-b border-black/10 pb-6">
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-[#1F8F4E]">
                  Workflow Control
                </div>
                <div className="mt-2 text-2xl font-semibold text-black">
                  Operational Command View
                </div>
              </div>
              <div className="text-[#1F8F4E]">
                <IconShell>
                  <FlowPattern />
                </IconShell>
              </div>
            </div>

            <div className="grid gap-6 pt-6 sm:grid-cols-2">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#5F6660]">
                  Active Streams
                </div>
                <div className="mt-3 text-3xl font-semibold text-black">12</div>
                <div className="mt-3 h-1.5 rounded-full bg-black/10">
                  <div className="h-1.5 w-[76%] rounded-full bg-[#1F8F4E]"></div>
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#5F6660]">
                  On-Time Delivery
                </div>
                <div className="mt-3 text-3xl font-semibold text-black">98%</div>
                <div className="mt-3 h-1.5 rounded-full bg-black/10">
                  <div className="h-1.5 w-[98%] rounded-full bg-[#71C98E]"></div>
                </div>
              </div>
              <div className="border-t border-black/10 pt-6 sm:col-span-2">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#5F6660]">
                  <span>Planning</span>
                  <span>Execution</span>
                  <span>Monitoring</span>
                  <span>Optimization</span>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#1F8F4E]"></div>
                  <div className="h-px flex-1 bg-black/15"></div>
                  <div className="h-3 w-3 rounded-full bg-[#71C98E]"></div>
                  <div className="h-px flex-1 bg-black/15"></div>
                  <div className="h-3 w-3 rounded-full bg-black/70"></div>
                  <div className="h-px flex-1 bg-black/15"></div>
                  <div className="h-3 w-3 rounded-full border border-black/40 bg-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-tradfi-horizon text-black">
        <div className="container grid gap-10 py-block lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <SectionHeading
            eyebrow="Operational Highlights"
            title="A simpler operating model with clearer control"
            description="The structure stays practical: less friction, easier oversight, and a delivery model that can expand without losing consistency."
          />
          <div className="group/cards grid gap-5 sm:grid-cols-2">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="bevel relative bg-white p-6 transition duration-300 hover:-translate-y-1 lg:group-hover/cards:[&:not(:hover)]:opacity-70"
              >
                <div className="pointer-events-none absolute inset-x-xl top-0 h-[0.18rem] bg-green-dark/45" />
                <IconShell>
                  <HighlightIcon type={item.icon} />
                </IconShell>
                <h3 className="mt-5 text-xl font-semibold text-black">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5F6660]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="container py-block">
          <div className="relative">
            <SectionHeading
              eyebrow="Operations In Motion"
              title="See how Sidago runs structured operational delivery"
              description="From workflow coordination to execution visibility, Sidago builds operations that stay reliable, measurable, and easier to scale."
            />

            <img
              alt="Operations watermark"
              loading="lazy"
              width="1152"
              height="1152"
              decoding="async"
              data-nimg="1"
              className="pointer-events-none absolute right-0 top-0 hidden w-[24%] opacity-60 lg:block"
              style={{ color: "transparent" }}
              src="images/WatermarkTailoredProd.svg"
            />
          </div>

          <div className="bevel overflow-hidden bg-gray-tradfi-horizon">
            <video
              playsInline
              preload="metadata"
              className="aspect-video w-full object-cover"
              controls
            >
              <source src="videos/overview.mp4" />
            </video>
          </div>

          <div className="pt-container flex">
            <a
              style={{ position: "relative" }}
              className="group/interactive inline-flex items-center justify-between gap-md bevel bevel-[0.25rem] bg-green-tradfi px-sm py-xs font-medium text-gray-night-green"
              href="/contact"
            >
              <span className="sr-only">Contact</span>
              Talk to Sidago
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="container py-block">
          <SectionHeading
            eyebrow="Core Operational Areas"
            title="Built around the functions that keep operations moving"
            description="Each delivery area is supported by structured ownership, measurable controls, and tools that make workflows easier to manage at scale."
          />
          <div className="mt-12 border-t border-black/10">
            {operationalAreas.map((area) => (
              <article
                key={area.title}
                className="group grid gap-6 border-b border-black/10 py-8 lg:grid-cols-[4.5rem_minmax(0,1fr)_minmax(0,28rem)] lg:items-start"
              >
                <IconShell>
                  <AreaIcon type={area.icon} />
                </IconShell>
                <h3 className="text-2xl font-semibold text-black lg:text-3xl">
                  {area.title}
                </h3>
                <p className="text-sm leading-6 text-[#5F6660] lg:text-base">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-tradfi-horizon text-black">
        <div className="container py-block">
          <SectionHeading
            eyebrow="Process Workflow"
            title="A clear operational rhythm from planning to optimization"
            description="The operating model is designed to keep every engagement measurable, adaptable, and visible across stakeholders."
          />
          <div className="mt-12 grid gap-0 border-y border-black/10 lg:grid-cols-4">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="relative border-b border-black/10 px-0 py-8 lg:border-b-0 lg:px-6 lg:py-10 lg:[&:not(:last-child)]:border-r lg:[&:not(:last-child)]:border-black/10"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1F8F4E]">
                    Step {item.step}
                  </div>
                  <div className="text-[#1F8F4E]">
                    <FlowPattern />
                  </div>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-black">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5F6660]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="container py-block">
          <SectionHeading
            eyebrow="Performance Metrics"
            title="Numbers that reflect delivery discipline"
            description="Operational performance is tracked against business outcomes, service quality, and improvement velocity."
          />
          <div className="mt-12">
            <OperationsMetrics
              metrics={metrics.map((metric) => ({
                ...metric,
                activeDotColor: "#168b50",
              }))}
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-tradfi-horizon text-black">
        <div className="container py-block">
          <SectionHeading
            eyebrow="Technology & Tools"
            title="Systems that support control, visibility, and speed"
            description="Sidago combines operations expertise with modern systems to standardize execution and reduce manual friction across business-critical workflows."
          />
          <div className="group/cards mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-5">
            {tools.map((tool) => (
              <article
                key={tool.name}
                className="bevel relative bg-white p-xl transition duration-300 hover:-translate-y-1 lg:group-hover/cards:[&:not(:hover)]:opacity-70"
              >
                <div className="pointer-events-none absolute inset-x-xl top-0 h-[0.18rem] bg-green-dark/45" />
                <IconShell>
                  <ToolGlyph type={tool.glyph} />
                </IconShell>
                <h3 className="mt-5 text-lg font-semibold text-black">
                  {tool.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5F6660]">
                  {tool.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="container py-block">
          <SectionHeading
            eyebrow="Case Studies"
            title="Examples of operational improvement in practice"
            description="Recent engagements focused on improving visibility, reducing delay points, and creating cleaner execution models for growing organizations."
          />
          <div className="group/cards mt-12 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <article
                key={study.title}
                className="bevel overflow-hidden bg-white transition duration-300 hover:-translate-y-1 lg:group-hover/cards:[&:not(:hover)]:opacity-70"
              >
                <div className="relative border-b border-black/10 bg-gray-tradfi-horizon p-6">
                  <div className="pointer-events-none absolute inset-x-xl top-0 h-[0.18rem] bg-green-dark/45" />
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1F8F4E]">
                      Success Story {index + 1}
                    </div>
                    <div className="px-0 py-1 text-xs font-medium text-black/70">
                      {study.outcome}
                    </div>
                  </div>
                  <div className="mt-8 p-2 text-[#1F8F4E]">
                    <GridPattern />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#3F6B4E]">
                    {study.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
