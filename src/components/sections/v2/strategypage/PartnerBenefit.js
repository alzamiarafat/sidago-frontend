const defaultBenefits = [
  {
    title: "Results-Driven Operations",
    description:
      "We focus on measurable outcomes that improve efficiency, service quality, and operating cost.",
    iconPath: "M6 29h28M10 25l6-6 5 4 9-11M28 12h6v6",
  },
  {
    title: "Skilled Dedicated Teams",
    description:
      "Trained specialists support daily business tasks with accuracy, consistency, and clear ownership.",
    iconPath:
      "M13 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM27 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM5 33c1-6 4-10 8-10s7 4 8 10M19 33c1-5 4-8 8-8s7 3 8 8",
  },
  {
    title: "Flexible Scaling",
    description:
      "Scale capacity up or down based on demand without the overhead of constant hiring.",
    iconPath: "M7 29V11h6v18M17 29V7h6v22M27 29V15h6v14",
  },
  {
    title: "End-to-End Management",
    description:
      "From onboarding to execution, we manage workflows, handoffs, reporting, and continuous improvement.",
    iconPath: "M8 9h24v22H8zM13 15h14M13 20h14M13 25h8",
  },
  {
    title: "Cost Efficiency",
    description:
      "Optimize operational expenses while maintaining reliable, high-quality service delivery.",
    iconPath:
      "M20 6v28M26 12c-2-2-5-3-8-2-4 1-5 6-1 8l7 3c4 2 3 7-1 8-4 1-8-1-10-3",
  },
  {
    title: "Performance Reporting",
    description:
      "Track delivery with practical insights, regular reporting, and improvement plans your team can act on.",
    iconPath: "M7 31h26M11 27v-8M19 27V9M27 27V15",
  },
];

export default function PartnerBenefit({
  title = "Why Choose Our BPO Services",
  benefits = defaultBenefits,
}) {
  return (
    <section className="">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2 className="font-blender text-xl uppercase text-green-dark">
              {title}
            </h2>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>

        <section className="text-gray-off-white">
          <div className="grid gap-xl lg:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="flex min-h-[10.5rem] flex-row items-start gap-md bevel bg-gray-defi-charcoal p-xl transition-colors hover:bg-gray-defi-graphite lg:gap-2xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 40 40"
                  className="h-[3.5rem] w-[3.5rem] shrink-0 text-purple-mid lg:h-[6.5rem] lg:w-[6.5rem]"
                  aria-hidden="true"
                >
                  <path
                    stroke="currentColor"
                    strokeLinejoin="bevel"
                    strokeWidth="0.9"
                    d={benefit.iconPath}
                  />
                </svg>
                <div className="flex flex-col gap-xs">
                  <h3 className="text-lg lg:text-xl">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-off-white/70 lg:text-base">
                    {benefit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
