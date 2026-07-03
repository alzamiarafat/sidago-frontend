const fallbackProfiles = [
  {
    eyebrow: "Infrastructure Visibility",
    title: "Operations Control Dashboard",
    description:
      "Track workflow health, delivery coverage, issue queues, and execution trends through a clear operational view built for day-to-day management.",
    cta: "Explore dashboard",
    href: "/performance",
    visualType: "dashboard",
    srText: "Sidago infrastructure - Operations Control Dashboard",
  },
  {
    eyebrow: "Infrastructure Updates",
    title: "Weekly Operations Brief",
    description:
      "Receive structured updates on performance trends, delivery priorities, support risks, and system changes that affect business continuity.",
    cta: "View brief",
    href: "/operations",
    visualType: "brief",
    srText: "Sidago infrastructure - Weekly Operations Brief",
  },
  {
    eyebrow: "Infrastructure Partnership",
    title: "Build a more reliable operating foundation",
    description:
      "Sidago works with businesses that need stronger delivery structure, clearer visibility, and operational systems that can scale without losing control.",
    cta: "Talk to Sidago",
    href: "/contact",
    visualType: "partnership",
    srText: "Sidago infrastructure partnership",
  },
];

function DashboardVisual() {
  return (
      <div className="sidago-ops-visual relative h-full overflow-hidden bg-[#494d48]">
        <div className="sidago-ops-glow absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_42%)]" />
        <div className="sidago-scan-line" />
        <div className="absolute inset-x-8 top-8 h-10 rounded-md border border-white/10 bg-black/20" />
        <div className="sidago-mini-panel absolute left-8 top-24 h-44 w-[34%] rounded-md border border-white/10 bg-[#d9ddd8]/90 p-4 text-black transition-transform duration-500 group-hover/card:-translate-y-1">
          <div className="text-[0.65rem] uppercase tracking-[0.18em] text-black/55">
            Live status
          </div>
          <div className="mt-4 text-4xl">94%</div>
          <div className="mt-2 h-2 rounded-full bg-black/10">
            <div className="sidago-live-bar h-2 w-[78%] origin-left rounded-full bg-[#168b50]" />
          </div>
        </div>
        <div className="absolute right-8 top-24 h-20 w-[46%] rounded-md border border-white/10 bg-black/20 p-4">
          <div className="text-[0.65rem] uppercase tracking-[0.18em] text-white/50">
            Service coverage
          </div>
          <div className="mt-4 grid grid-cols-6 gap-2">
            {Array.from({ length: 18 }).map((_, index) => (
              <div
                key={index}
                className={`h-3 rounded-sm ${index % 4 === 0 ? "sidago-cell-blink bg-[#168b50]" : "bg-white/14"}`}
                style={{ animationDelay: `${index * 90}ms` }}
              />
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-3">
          {["Escalations", "Throughput", "Support load"].map((item, index) => (
            <div
              key={item}
              className="rounded-md border border-white/10 bg-black/20 p-4"
            >
              <div className="text-[0.65rem] uppercase tracking-[0.18em] text-white/45">
                {item}
              </div>
              <div className="mt-3 h-12 rounded bg-white/6">
                <div
                  className="sidago-load-wave h-full origin-left rounded bg-[#168b50]/70"
                  style={{ width: `${48 + index * 16}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

function BriefVisual() {
  return (
      <div className="sidago-ops-visual relative h-full overflow-hidden bg-[#dfe5df] text-black">
        <div className="sidago-ops-glow absolute inset-0 bg-[linear-gradient(135deg,_rgba(22,139,80,0.12),_transparent_55%)]" />
        <div className="sidago-scan-line sidago-scan-line--dark" />
        <div className="sidago-brief-panel absolute inset-x-8 top-8 rounded-md border border-black/10 bg-white/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.2em] text-black/45">
                This week
              </div>
              <div className="mt-2 text-3xl">Operations snapshot</div>
            </div>
            <div className="sidago-status-badge rounded-full bg-[#168b50] px-3 py-1 text-xs uppercase tracking-[0.18em] text-white">
              Stable
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {[
              "Workflow turnaround improved across active accounts",
              "Support coverage remained stable during peak periods",
              "System and reporting updates cleared without disruption",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-md bg-black/4 px-4 py-3 transition-transform duration-300 group-hover/card:translate-x-1"
              >
                <div className="mt-1 h-2 w-2 rounded-full bg-[#168b50]" />
                <div className="text-sm leading-relaxed text-black/75">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

function CardVisual({ type }) {
  if (type === "brief") {
    return <BriefVisual />;
  }

  return <DashboardVisual />;
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className="h-6 w-6"
      style={{ "--arrow-offset": "0.4rem", width: "1rem" }}
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

function Button({ href, children, srText }) {
  return (
    <a
      href={href}
      className="group/interactive relative inline-flex items-center justify-between gap-md overflow-hidden bevel bevel-[0.25rem] bg-[#EC5B5B] px-sm py-xs font-medium text-gray-night-green shadow-[0_0_0_rgba(236,91,91,0)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#f26b6b] hover:shadow-[0_12px_34px_rgba(236,91,91,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EC5B5B] active:translate-y-0 md:w-max motion-safe:animate-[sidago-cta-breathe_3.6s_ease-in-out_infinite]"
    >
      <span className="pointer-events-none absolute inset-y-0 -left-10 w-8 skew-x-[-18deg] bg-white/35 opacity-0 blur-[1px] transition-all duration-700 group-hover/interactive:left-[calc(100%+2.5rem)] group-hover/interactive:opacity-100" />
      <span className="sr-only">{srText}</span>
      <span className="relative z-10">{children}</span>
      <span className="ml-[--arrow-offset] transition-all group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset]">
        <ArrowIcon />
      </span>
    </a>
  );
}

export default function DelegateProfile({
  title = "Explore Sidago infrastructure",
  description =
    "See how Sidago turns operational infrastructure into clearer execution, stronger visibility, and more dependable business support.",
  profiles = fallbackProfiles,
}) {
  const orderedProfiles =
    profiles?.length > 0
      ? profiles
          .slice()
          .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0))
      : fallbackProfiles;
  const topCards = orderedProfiles
    .filter((profile) => profile.visualType !== "partnership")
    .slice(0, 2);
  const partnership =
    orderedProfiles.find((profile) => profile.visualType === "partnership") ||
    fallbackProfiles[2];

  return (
    <section className="bg-gray-defi-shadow">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id="stay-updated-on-sidago-infrastructure"
              className="font-blender text-xl uppercase text-green-dark"
            >
              {title}
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-[#A7ACA8] md:text-lg">
              {description}
            </p>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>

        <div className="flex flex-col gap-x-lg gap-y-lg pb-container lg:flex-row">
          {topCards.map((card) => (
            <div
              key={card.title}
              className="core-column--stacked-on-mobile"
              style={{ "--core-column-width": "50%" }}
            >
              <section className="sidago-feature-card group/card flex flex-col bevel md:h-[29.1875rem]">
                <div className="max-h-[15.75rem] flex-1">
                  <CardVisual type={card.visualType} />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-gray-defi-charcoal p-6">
                  <div>
                    <div className="mb-3 font-blender text-xs font-semibold uppercase tracking-[0.18em] text-[#EC5B5B]">
                      {card.eyebrow}
                    </div>
                    <p className="mb-4 text-2xl">{card.title}</p>
                    <p className="mb-6 max-w-[34rem] text-sm text-gray-off-white/78">
                      {card.description}
                    </p>
                  </div>
                  <Button
                    href={card.href}
                    srText={card.srText || `Sidago infrastructure - ${card.title}`}
                  >
                    {card.cta}
                  </Button>
                </div>
              </section>
            </div>
          ))}
        </div>

        <section className="bg-gray-defi-shadow text-gray-off-white">
          <div className="flex flex-col gap-[4rem]">
            <div className="relative flex flex-col gap-md overflow-hidden bevel bg-gray-defi-charcoal px-xl py-2xl">
              <div className="absolute inset-y-0 right-0 w-[42%] bg-[radial-gradient(circle_at_center,_rgba(22,139,80,0.26),_transparent_62%)]" />
              <div className="sidago-orbit absolute right-10 top-8 hidden h-24 w-24 rounded-full border border-[#168b50]/25 lg:block" />
              <div className="sidago-orbit-line absolute right-20 top-20 hidden h-2 w-20 bg-[#168b50]/40 lg:block" />
              <div className="relative z-10 flex flex-col items-start md:w-[62%]">
                <div className="font-blender text-xs font-semibold uppercase tracking-[0.18em] text-[#EC5B5B]">
                  {partnership.eyebrow}
                </div>
                <div className="mt-3 text-2xl">
                  {partnership.title}
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-off-white/78 md:text-base">
                  {partnership.description}
                </p>
                <div className="mt-6">
                  <Button
                    href={partnership.href}
                    srText={
                      partnership.srText ||
                      `Sidago infrastructure - ${partnership.title}`
                    }
                  >
                    {partnership.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
