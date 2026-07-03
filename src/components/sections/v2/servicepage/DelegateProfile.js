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

function StatusPing() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="sidago-status-ping absolute inline-flex h-full w-full rounded-full bg-[#168b50] opacity-70" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#168b50]" />
    </span>
  );
}

function DashboardVisual() {
  const bars = [
    { label: "Escalations", heights: [3, 5, 4, 7, 5, 8, 6] },
    { label: "Throughput", heights: [7, 5, 8, 4, 7, 6, 9] },
    { label: "Support load", heights: [5, 7, 4, 8, 6, 5, 7] },
  ];

  return (
    <div
      className="sidago-delegate-vis relative h-full overflow-hidden"
      style={{ background: "linear-gradient(150deg, #0e1410 0%, #0b1009 100%)" }}
    >
      {/* Dot grid texture */}
      <div className="sidago-delegate-dot-grid absolute inset-0 opacity-40" />
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_25%_5%,rgba(22,139,80,0.16),transparent_70%)]" />

      {/* Top bar */}
      <div className="absolute inset-x-5 top-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <StatusPing />
          <span className="font-blender text-[0.56rem] uppercase tracking-[0.22em] text-white/40">Live</span>
        </div>
        <div className="rounded bg-[#168b50]/10 px-2 py-0.5 font-blender text-[0.56rem] uppercase tracking-[0.2em] text-[#168b50]/65">
          Active
        </div>
      </div>

      {/* Main KPI */}
      <div className="absolute left-5 top-11">
        <div className="font-blender text-[3rem] font-light leading-none tracking-tight text-white">
          94<span className="text-[#168b50]">%</span>
        </div>
        <div className="mt-1 font-blender text-[0.56rem] uppercase tracking-[0.2em] text-white/35">
          Coverage
        </div>
        <div className="mt-1.5 h-[3px] w-14 rounded-full bg-white/8">
          <div className="sidago-live-bar h-[3px] w-[94%] rounded-full bg-[#168b50]" />
        </div>
      </div>

      {/* Right metric column */}
      <div className="absolute right-5 top-10 flex w-28 flex-col gap-1.5">
        {[
          { label: "SLA Met", val: "98.4%" },
          { label: "Open Items", val: "14" },
          { label: "Avg Close", val: "4.2h" },
        ].map((m) => (
          <div
            key={m.label}
            className="flex items-center justify-between rounded-sm border-l-2 border-[#168b50]/35 bg-white/[0.04] py-1.5 pl-2.5 pr-2"
          >
            <span className="text-[0.52rem] uppercase tracking-[0.14em] text-white/32">
              {m.label}
            </span>
            <span className="font-blender text-[0.72rem] text-white/75">{m.val}</span>
          </div>
        ))}
      </div>

      {/* Bottom mini charts */}
      <div className="absolute inset-x-5 bottom-4 grid grid-cols-3 gap-2">
        {bars.map((chart, ci) => (
          <div
            key={chart.label}
            className="overflow-hidden rounded-md bg-white/[0.03] p-2.5"
            style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)" }}
          >
            <div className="font-blender text-[0.5rem] uppercase tracking-[0.14em] text-white/30">
              {chart.label}
            </div>
            <div className="mt-1.5 flex h-7 items-end gap-px">
              {chart.heights.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 overflow-hidden rounded-t-[1px] bg-white/6"
                >
                  <div
                    className="sidago-metric-bar origin-bottom rounded-t-[1px]"
                    style={{
                      height: `${(h / 9) * 100}%`,
                      background: `rgba(22,139,80,${0.42 + ci * 0.1})`,
                      animationDelay: `${i * 80 + ci * 40}ms`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BriefVisual() {
  const items = [
    "Workflow turnaround improved across active accounts",
    "Support coverage remained stable during peak periods",
    "Reporting updates cleared without disruption",
  ];

  return (
    <div
      className="sidago-delegate-vis relative h-full overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f5f6f4 0%, #e5ebe4 100%)" }}
    >
      {/* Top green accent bar */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#168b50] via-[#168b50]/55 to-transparent" />

      {/* Document panel */}
      <div className="sidago-brief-panel absolute inset-x-5 top-5 rounded-xl bg-white p-5 shadow-[0_8px_28px_rgba(0,0,0,0.09),0_1px_4px_rgba(0,0,0,0.06)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-blender text-[0.56rem] uppercase tracking-[0.22em] text-black/38">
              This week
            </div>
            <div className="mt-1.5 text-[1.35rem] font-light leading-tight text-black">
              Operations
              <br />
              snapshot
            </div>
          </div>
          <div className="sidago-status-badge mt-1 shrink-0 rounded-full bg-[#168b50] px-3 py-1 font-blender text-[0.56rem] uppercase tracking-[0.2em] text-white">
            Stable
          </div>
        </div>

        <div className="mt-4 space-y-1.5">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 rounded-md bg-black/[0.035] px-3 py-2 transition-transform duration-300 group-hover/card:translate-x-1"
            >
              <div className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#168b50]" />
              <span className="text-[0.7rem] leading-relaxed text-black/62">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CardVisual({ type }) {
  if (type === "brief") return <BriefVisual />;
  return <DashboardVisual />;
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      style={{ "--arrow-offset": "0.4rem", width: "1rem" }}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
        clipRule="evenodd"
      />
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
    .filter((p) => p.visualType !== "partnership")
    .slice(0, 2);
  const partnership =
    orderedProfiles.find((p) => p.visualType === "partnership") ||
    fallbackProfiles[2];

  return (
    <section className="relative overflow-hidden bg-gray-defi-shadow">
      {/* Background dot texture */}
      <div className="sidago-delegate-bg-dots pointer-events-none absolute inset-0" />

      <div className="container relative z-10 py-block">

        {/* ── Section header ── */}
        <div className="mb-3xl">
          <div className="flex flex-col gap-lg md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="h-px w-8 bg-[#EC5B5B]" />
                <span className="font-blender text-xs uppercase tracking-[0.26em] text-[#EC5B5B]">
                  Infrastructure
                </span>
              </div>
              <h2
                id="stay-updated-on-sidago-infrastructure"
                className="font-blender text-3xl uppercase leading-tight text-gray-off-white md:text-4xl"
              >
                {title}
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-[#8d9490] md:text-right md:text-base">
              {description}
            </p>
          </div>
          {/* Gradient divider */}
          <div className="mt-xl h-px bg-gradient-to-r from-[#EC5B5B]/55 via-[#EC5B5B]/18 to-transparent" />
        </div>

        {/* ── Top cards ── */}
        <div className="grid gap-4 md:grid-cols-2">
          {topCards.map((card, index) => (
            <article
              key={card.title}
              className="sidago-delegate-card group/card relative flex flex-col bevel"
              style={{
                background: "rgb(28 33 30)",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.045), 0 4px 20px rgba(0,0,0,0.35)",
              }}
            >
              {/* Card index badge */}
              <div className="absolute right-4 top-4 z-20 font-blender text-[0.6rem] font-bold tracking-[0.18em] text-white/18">
                0{index + 1}
              </div>

              {/* Visual area */}
              <div className="h-[15.5rem] w-full overflow-hidden">
                <CardVisual type={card.visualType} />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  {/* Eyebrow pill */}
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#EC5B5B]/10 px-3 py-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#EC5B5B]" />
                    <span className="font-blender text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[#EC5B5B]">
                      {card.eyebrow}
                    </span>
                  </div>

                  <h3 className="mb-3 text-[1.35rem] font-normal leading-snug text-gray-off-white">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-off-white/55">
                    {card.description}
                  </p>
                </div>

                {/* Footer row */}
                <div className="mt-6 flex items-center justify-between border-t border-white/[0.055] pt-5">
                  <Button
                    href={card.href}
                    srText={card.srText || `Sidago infrastructure - ${card.title}`}
                  >
                    {card.cta}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Partnership CTA ── */}
        <div
          className="sidago-partner-banner mt-4 relative bevel overflow-hidden"
          style={{ background: "rgb(18 22 19)" }}
        >
          {/* Deep green glow — bottom right */}
          <div className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] translate-x-1/3 translate-y-1/3 rounded-full bg-[#168b50] opacity-[0.10] blur-[90px]" />
          {/* Faint red glow — top left */}
          <div className="pointer-events-none absolute -left-16 -top-8 h-48 w-48 rounded-full bg-[#EC5B5B] opacity-[0.07] blur-[60px]" />
          {/* Dot grid texture */}
          <div className="sidago-delegate-dot-grid pointer-events-none absolute inset-0 opacity-20" />
          {/* Top accent bar */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#EC5B5B]/60 via-[#EC5B5B]/20 to-transparent" />

          <div className="relative z-10 px-8 py-10 md:px-12 md:py-12">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-[#EC5B5B]" />
              <span className="font-blender text-xs uppercase tracking-[0.28em] text-[#EC5B5B]">
                {partnership.eyebrow}
              </span>
            </div>

            {/* Main grid: heading + stats + CTA */}
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

              {/* Left: heading + description */}
              <div>
                <h3 className="mb-5 max-w-2xl text-[1.85rem] font-light leading-[1.18] text-gray-off-white md:text-[2.25rem]">
                  {partnership.title}
                </h3>

                {/* Stats row */}
                <div className="mb-7 grid grid-cols-3 gap-3 sm:max-w-lg">
                  {[
                    { value: "99.9%", label: "Uptime SLA" },
                    { value: "<48h", label: "Onboarding" },
                    { value: "100%", label: "Coverage" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col gap-1 border-l-2 border-[#168b50]/40 pl-3"
                    >
                      <span className="font-blender text-xl text-gray-off-white md:text-2xl">
                        {stat.value}
                      </span>
                      <span className="font-blender text-[0.58rem] uppercase tracking-[0.2em] text-gray-off-white/40">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="max-w-lg text-sm leading-relaxed text-gray-off-white/52 md:text-base">
                  {partnership.description}
                </p>
              </div>

              {/* Right: CTA block */}
              <div className="flex shrink-0 flex-col items-start gap-4 lg:items-end">
                <Button
                  href={partnership.href}
                  srText={
                    partnership.srText ||
                    `Sidago infrastructure - ${partnership.title}`
                  }
                >
                  {partnership.cta}
                </Button>
                <span className="font-blender text-[0.6rem] uppercase tracking-[0.22em] text-gray-off-white/28">
                  No commitment required
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
