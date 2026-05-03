const defaultMetrics = [
    { value: "60%", label: "Cost reduction" },
    { value: "3X", label: "Faster execution" },
    { value: "24/7", label: "Operational support" },
  ];

export default function WorkOverview({
  eyebrow = "Ready to streamline operations?",
  title = "Focus on Growth. We Handle the Operations.",
  description = "Partner with Sidago to streamline business processes, reduce operating costs, and scale your team with confidence.",
  buttonText = "Get Started",
  href = "/contact",
  metrics = defaultMetrics,
}) {
  return (
    <section className="bg-gray-night-green">
      <div className="container pb-block pt-8 md:pt-10 lg:pt-12">
        <section className="bg-gray-night-green text-gray-off-white">
          <div className="relative overflow-hidden bevel bg-gray-defi-charcoal">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[0.2rem] bg-blue-mid/55" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(60,133,221,0.14),transparent_30%)]" />

            <div className="relative grid gap-xl px-xl py-xl md:px-2xl md:py-2xl lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="z-10 flex max-w-4xl flex-col items-start">
                <div className="mb-sm font-blender text-lg uppercase text-green-dark">
                  {eyebrow}
                </div>
                <h2 className="max-w-4xl text-xl md:text-2xl lg:text-[2.35rem]">
                  {title}
                </h2>
                <p className="mt-md max-w-3xl text-sm leading-relaxed text-gray-off-white/75 md:text-base">
                  {description}
                </p>
                <a
                  style={{ position: "relative" }}
                  className="group/interactive mt-lg inline-flex items-center justify-between gap-md bevel bevel-[0.25rem] bg-green-dark px-sm py-xs font-medium text-gray-night-green transition-colors hover:bg-blue-mid"
                  href={href}
                >
                  <span className="sr-only">Contact Sidago</span>
                  {buttonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 40 40"
                    className="ml-[--arrow-offset] h-xl w-xl transition-all group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset]"
                    style={{
                      "--arrow-offset": "0.4rem",
                      width: "1rem",
                    }}
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <div className="relative z-10 grid gap-sm sm:grid-cols-3 lg:w-[31rem]">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="bevel bg-gray-night-green/65 px-md py-sm"
                  >
                    <div className="font-blender text-xl text-blue-mid">
                      {metric.value}
                    </div>
                    <div className="mt-xs text-sm leading-tight text-gray-off-white/65">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
