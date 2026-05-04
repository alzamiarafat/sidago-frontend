const featureCards = [
  {
    eyebrow: "Infrastructure Visibility",
    title: "Operations Control Dashboard",
    description:
      "Track workflow health, delivery coverage, issue queues, and execution trends through a clear operational view built for day-to-day management.",
    cta: "Explore dashboard",
    href: "/contact",
    visual: (
      <div className="relative h-full overflow-hidden bg-[#494d48]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_42%)]" />
        <div className="absolute inset-x-8 top-8 h-10 rounded-md border border-white/10 bg-black/20" />
        <div className="absolute left-8 top-24 h-44 w-[34%] rounded-md border border-white/10 bg-[#d9ddd8]/90 p-4 text-black">
          <div className="text-[0.65rem] uppercase tracking-[0.18em] text-black/55">
            Live status
          </div>
          <div className="mt-4 text-4xl">94%</div>
          <div className="mt-2 h-2 rounded-full bg-black/10">
            <div className="h-2 w-[78%] rounded-full bg-[#168b50]" />
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
                className={`h-3 rounded-sm ${index % 4 === 0 ? "bg-[#168b50]" : "bg-white/14"}`}
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
                  className="h-full rounded bg-[#168b50]/70"
                  style={{ width: `${48 + index * 16}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    eyebrow: "Infrastructure Updates",
    title: "Weekly Operations Brief",
    description:
      "Receive structured updates on performance trends, delivery priorities, support risks, and system changes that affect business continuity.",
    cta: "View brief",
    href: "/contact",
    visual: (
      <div className="relative h-full overflow-hidden bg-[#dfe5df] text-black">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(22,139,80,0.12),_transparent_55%)]" />
        <div className="absolute inset-x-8 top-8 rounded-md border border-black/10 bg-white/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.2em] text-black/45">
                This week
              </div>
              <div className="mt-2 text-3xl">Operations snapshot</div>
            </div>
            <div className="rounded-full bg-[#168b50] px-3 py-1 text-xs uppercase tracking-[0.18em] text-white">
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
                className="flex items-start gap-3 rounded-md bg-black/4 px-4 py-3"
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
    ),
  },
];

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

function Button({ href, children, srText, tone = "green" }) {
  const toneClass =
    tone === "purple"
      ? "bg-purple-dark text-gray-night-green"
      : "bg-green-tradfi text-gray-night-green";

  return (
    <a
      href={href}
      className={`group/interactive inline-flex items-center justify-between gap-md bevel bevel-[0.25rem] px-sm py-xs font-medium ${toneClass} md:w-max`}
    >
      <span className="sr-only">{srText}</span>
      {children}
      <span className="ml-[--arrow-offset] transition-all group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset]">
        <ArrowIcon />
      </span>
    </a>
  );
}

export default function DelegateProfile() {
  return (
    <section className="bg-gray-defi-shadow">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id="stay-updated-on-sidago-infrastructure"
              className="font-blender text-xl uppercase text-green-dark"
            >
              Explore Sidago infrastructure
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-[#A7ACA8] md:text-lg">
              See how Sidago turns operational infrastructure into clearer
              execution, stronger visibility, and more dependable business
              support.
            </p>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>

        <div className="flex flex-col gap-x-lg gap-y-lg pb-container lg:flex-row">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="core-column--stacked-on-mobile"
              style={{ "--core-column-width": "50%" }}
            >
              <section className="flex flex-col bevel md:h-[29.1875rem]">
                <div className="max-h-[15.75rem] flex-1">{card.visual}</div>
                <div className="flex flex-1 flex-col justify-between bg-gray-defi-charcoal p-6">
                  <div>
                    <div className="mb-3 font-blender text-xs uppercase tracking-[0.18em] text-[#AB290E]">
                      {card.eyebrow}
                    </div>
                    <p className="mb-4 text-2xl">{card.title}</p>
                    <p className="mb-6 max-w-[34rem] text-sm text-gray-off-white/78">
                      {card.description}
                    </p>
                  </div>
                  <Button
                    href={card.href}
                    srText={`Sidago infrastructure › ${card.title}`}
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
              <div className="absolute right-10 top-8 hidden h-24 w-24 rounded-full border border-[#168b50]/25 lg:block" />
              <div className="absolute right-20 top-20 hidden h-2 w-20 bg-[#168b50]/40 lg:block" />
              <div className="relative z-10 flex flex-col items-start md:w-[62%]">
                <div className="font-blender text-xs uppercase tracking-[0.18em] text-[#AB290E]">
                  Infrastructure Partnership
                </div>
                <div className="mt-3 text-2xl">
                  Build a more reliable operating foundation
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-off-white/78 md:text-base">
                  Sidago works with businesses that need stronger delivery
                  structure, clearer visibility, and operational systems that
                  can scale without losing control.
                </p>
                <div className="mt-6">
                  <Button
                    href="/contact"
                    srText="Sidago infrastructure partnership"
                    tone="purple"
                  >
                    Talk to Sidago
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
