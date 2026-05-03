const defaultSolutions = [
  {
    title: "Customer Support Solutions",
    description:
      "End-to-end support operations designed to improve response quality, customer satisfaction, and retention.",
  },
  {
    title: "Back-Office Management",
    description:
      "Reliable administrative and operational support that keeps daily workflows accurate and organized.",
  },
  {
    title: "Process Optimization",
    description:
      "Practical workflow improvements that reduce friction, speed up execution, and make performance easier to track.",
  },
];

export default function BuildingProduct({
  title = "Solutions We Deliver",
  subtitle = "Dedicated support models built around the daily workflows your business needs to run smoothly and scale confidently.",
  items = defaultSolutions,
}) {
  return (
    <section>
      <div className="container py-block pt-none">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex max-w-4xl flex-col gap-xs">
            <h2 className="font-blender text-xl uppercase text-green-dark">
              {title}
            </h2>
            <p className="text-sm leading-relaxed text-gray-off-white/70 lg:text-base">
              {subtitle}
            </p>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>

        <section className="bg-gray-night-green text-gray-off-white">
          <div className="group/cards grid grid-cols-1 gap-xl lg:grid-cols-3">
            {items.map((solution) => (
              <a
                key={solution.title}
                style={{ position: "relative" }}
                className="group/interactive relative flex min-h-[16rem] overflow-hidden bevel bg-purple-light px-xl py-xl text-gray-night-green transition-all hover:-translate-y-1 lg:min-h-[18rem] lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                href="#"
              >
                <span className="sr-only">{solution.title}</span>
                <div className="absolute inset-x-xl top-0 h-[0.18rem] bg-gray-night-green/25 transition-colors group-hover/interactive:bg-blue-mid" />
                <div className="flex h-full min-h-[11.5rem] flex-1 flex-col justify-between gap-xl">
                  <div className="w-max bevel border border-gray-night-green/20 bg-gray-night-green/10 px-xs py-[0.35rem] font-blender text-sm uppercase text-gray-night-green/65">
                    {solution.label || "Solution"}
                  </div>
                  <div className="flex flex-col gap-md">
                    <div className="text-xl lg:text-2xl">{solution.title}</div>
                    <div className="text-sm leading-relaxed text-gray-night-green/80 lg:text-base">
                      {solution.description}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
