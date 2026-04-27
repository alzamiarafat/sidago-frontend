const fallbackItems = [
  {
    title: "Bebop",
    description:
      "A comprehensive app and API suite designed to bring efficient execution and enhanced liquidity to DeFi.",
    href: "https://bebop.xyz/",
    imageSrc: "/images/Venture-Incubation-Bebop-BG.svg",
    logoSrc: "/images/Ventures-Incubation-Bebop-logo.svg",
  },
  {
    title: "GMCI",
    description:
      "Provider of institutional-grade, transparent indices on digital assets. Built in partnership with The Block.",
    href: "https://www.gmci.co/",
    imageSrc: "/images/Venture-Incubation-GMCI-BG.svg",
    logoSrc: "/images/Ventures-Incubation-GMCI-logo.svg",
  },
  {
    title: "Wildcat",
    description:
      "An Ethereum protocol that unlocks undercollateralized, bespoke on-chain credit solutions.",
    href: "https://wildcat.finance/",
    imageSrc: "/images/Venture-Incubation-Wildcat-BG.svg",
    logoSrc: "/images/Ventures-Incubation-Wildcat-logo.svg",
  },
];

export default function BuildingProduct({
  title = "Building through incubation",
  description = "Building products is central to Sidago’s operating model. We incubate and help launch new businesses alongside trusted partners.",
  items = fallbackItems,
}) {
  const cards = items.length ? items : fallbackItems;

  return (
    <section>
      <div className="container py-block pt-none">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2 className="font-blender text-xl uppercase text-green-dark">
              {title}
            </h2>
            <div className="text-gray-off-white">{description}</div>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>
        <section className="bg-gray-night-green text-gray-off-white">
          <div className="group/cards grid grid-cols-1 gap-xl lg:grid-cols-3">
            {cards.map((item) => (
              <a
                key={item.title}
                rel="nofollow"
                target="_blank"
                className="group/interactive relative flex min-h-[18.75rem] items-end bevel bg-purple-light px-xl py-2xl text-gray-night-green transition-all lg:min-h-[20.75rem] lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                href={item.href}
              >
                <div className="flex h-full flex-1 flex-col justify-between gap-md">
                  <img
                    alt={item.title}
                    className="absolute left-0 top-0 h-full w-full object-cover"
                    src={item.imageSrc}
                  />
                  <div className="z-10 flex flex-col gap-xs">
                    {item.logoSrc ? (
                      <img
                        alt={`${item.title} logo`}
                        className="h-[2.625rem] w-auto"
                        src={item.logoSrc}
                      />
                    ) : null}
                  </div>
                  <div className="z-10 flex flex-col gap-xs">
                    <div className="flex flex-col gap-xs xl:w-2/3">
                      <div className="text-2xl">{item.title}</div>
                    </div>
                    <div>{item.description}</div>
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
