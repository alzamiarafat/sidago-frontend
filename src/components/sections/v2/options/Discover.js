const fallbackCards = [
  {
    title: "Governance",
    description: "Build structured decision-making systems for modern digital organizations.",
    href: "/governance",
    className: "bg-orange-mid text-gray-night-green",
  },
  {
    title: "Marketplace",
    description: "Apply to take part in an accelerator built by proven operators.",
    href: "/marketplace",
    className: "bg-blue-mid text-gray-night-green",
  },
];

export function Discover({
  title = "Discover more",
  cards = fallbackCards,
}) {
  const items = cards.length ? cards : fallbackCards;

  return (
    <section>
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2 className="font-blender text-xl uppercase text-green-dark">
              {title}
            </h2>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>
        <section className="bg-gray-night-green text-gray-night-green">
          <div className="grid grid-cols-1 gap-xl lg:grid-cols-2">
            {items.map((card) => (
              <a
                key={card.title}
                className={`group/interactive pointer-events-auto h-[14.5rem] transition-all lg:h-[18.75rem] ${card.className || "bg-orange-mid text-gray-night-green"} bevel p-lg`}
                href={card.href}
              >
                <div className="relative flex h-full flex-col justify-between overflow-hidden">
                  <div />
                  <div className="z-10 flex items-end justify-between gap-md">
                    <div className="flex flex-col gap-md">
                      <div className="text-xl">{card.title}</div>
                      <div className="mr-4xl text-sm lg:text-base">
                        {card.description}
                      </div>
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
