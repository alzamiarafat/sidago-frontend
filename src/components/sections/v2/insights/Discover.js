import Image from "next/image";

const discoverItems = [
  {
    title: "Research & Data Insights",
    text: "Explore how Sidago turns market research, web data, competitor tracking, and source validation into clear decision support.",
    href: "/research-data",
  },
  {
    title: "Workflow & Support Insights",
    text: "See how Sidago structures admin support, reporting, documentation, and back-office workflows for dependable business execution.",
    href: "/operations",
  },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className={className}
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

function BackgroundMark({ className = "", variant = "dots" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 160 160"
      className={className}
      aria-hidden="true"
    >
      {variant === "rings" ? (
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 80 80"
            to="360 80 80"
            dur="24s"
            repeatCount="indefinite"
          />
          <circle cx="80" cy="80" r="54" stroke="currentColor" strokeWidth="3" />
          <circle cx="80" cy="80" r="34" stroke="currentColor" strokeWidth="3" />
          <path
            stroke="currentColor"
            strokeWidth="3"
            d="M25 80h110M80 25v110M41 41l78 78M119 41l-78 78"
          />
          {Array.from({ length: 24 }).map((_, index) => {
            const angle = (index / 24) * Math.PI * 2;
            const radius = index % 2 === 0 ? 64 : 46;

            return (
              <circle
                key={index}
                cx={80 + Math.cos(angle) * radius}
                cy={80 + Math.sin(angle) * radius}
                r="2.4"
                fill="currentColor"
              >
                <animate
                  attributeName="opacity"
                  values="0.35;1;0.35"
                  dur={`${2.2 + (index % 4) * 0.2}s`}
                  begin={`${index * 0.04}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
        </g>
      ) : (
        Array.from({ length: 120 }).map((_, index) => {
          const row = Math.floor(index / 12);
          const col = index % 12;

          return (
            <circle
              key={index}
              cx={14 + col * 11}
              cy={8 + row * 10}
              r={2 + ((row + col) % 3) * 0.35}
              fill="currentColor"
            >
              <animate
                attributeName="opacity"
                values="0.25;1;0.25"
                dur={`${2.4 + (row % 4) * 0.25}s`}
                begin={`${(row + col) * 0.035}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })
      )}
    </svg>
  );
}

export function Discover({ section }) {
  const title = section?.title || "Discover More";
  const items = section?.items?.length > 0 ? section.items : discoverItems;
  const variant = section?.variant || "animated-svg";

  return (
    <section className="bg-gray-night-green text-gray-off-white">
      <div className="container py-block">
        <div className="mb-xl flex flex-col gap-xl">
          <h2
            id="discover-more"
            className="font-blender text-xl uppercase text-green-dark"
          >
            {title}
          </h2>
          <hr className="!border-[#AB290E]" />
        </div>

        <div className="group/cards grid gap-xl lg:grid-cols-2">
          {items.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              className="group/interactive relative flex min-h-[15rem] overflow-hidden bevel bg-gray-defi-charcoal p-xl transition-colors hover:bg-[#202725] lg:group-hover/cards:[&:not(:hover)]:opacity-70"
              style={{ position: "relative" }}
            >
              {variant === "image" ? (
                <>
                  <Image
                    src={item.image || "/images/Market-Research2.jpg"}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                    className="pointer-events-none object-cover opacity-45 grayscale transition-all duration-500 group-hover/interactive:scale-[1.04] group-hover/interactive:opacity-65 group-hover/interactive:grayscale-0"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-gray-defi-charcoal via-gray-defi-charcoal/90 to-[#958dec]/20" />
                  <div className="pointer-events-none absolute inset-0 bg-gray-night-green/25" />
                </>
              ) : (
                <BackgroundMark
                  variant={index === 0 ? "dots" : "rings"}
                  className={`pointer-events-none absolute text-[#958dec] opacity-90 transition-transform duration-500 group-hover/interactive:scale-110 ${
                    index === 0
                      ? "right-[-0.5rem] top-[-1rem] h-44 w-44 rotate-12"
                      : "right-[-1.5rem] top-[-1.75rem] h-48 w-48 rotate-[-18deg]"
                  }`}
                />
              )}

              <div className="relative z-10 mt-auto flex w-full items-end justify-between gap-xl">
                <div className="max-w-md">
                  <h3 className="text-xl leading-tight">{item.title}</h3>
                  <p className="mt-md text-sm leading-6 text-gray-tradfi-silver">
                    {item.text}
                  </p>
                </div>
                <ArrowIcon className="h-7 w-7 shrink-0 text-gray-off-white transition-transform duration-300 group-hover/interactive:translate-x-2" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
