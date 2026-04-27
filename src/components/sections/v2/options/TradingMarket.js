const fallbackCards = [
  {
    title: "Automated market makers (AMMs)",
    description:
      "Keeping pool prices aligned with the market to maintain efficiency.",
    label: "Including on:",
    logos: [{ src: "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/07/07172233/Uniswap.svg", alt: "Uniswap" }],
    className: "bg-blue-mid text-gray-night-green",
  },
  {
    title: "Request for quote (RFQ) platforms",
    description:
      "Enabling optimal price execution through peer-to-peer liquidity provision.",
    label: "Including on:",
    logos: [
      { src: "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/07/07172232/Jupiter.svg", alt: "Jupiter" },
      { src: "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/07/07172232/Cow.svg", alt: "Cow" },
      { src: "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/07/07172231/1inch.svg", alt: "1inch" },
    ],
    className: "bg-pink-mid text-gray-night-green",
  },
];

export function TradingMarket({
  title = "Strengthening DeFi trading markets",
  description = "Sidago is deeply embedded across the DeFi ecosystem, providing liquidity across major chains and supporting a wide range of DEX models.",
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
            <div className="text-gray-off-white">{description}</div>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>
        <section className="bg-gray-night-green text-gray-off-white">
          <div className="group/cards grid grid-cols-1 gap-xl lg:grid-cols-2">
            {items.map((card) => (
              <div
                key={card.title}
                className={`group/interactive relative flex min-h-[18.75rem] items-end bevel p-xl ${card.className || "bg-blue-mid text-gray-night-green"}`}
              >
                <div className="flex h-full flex-1 flex-col justify-between gap-md">
                  <div className="z-10 flex flex-col gap-md">
                    <div className="flex flex-col gap-xs xl:w-2/3">
                      <div className="text-2xl">{card.title}</div>
                      <div className="text-xl">{card.description}</div>
                    </div>
                  </div>
                  <div className="z-10 flex flex-col gap-xs">
                    <div>{card.label || "Including on:"}</div>
                    <div className="flex flex-wrap gap-xs">
                      {(card.logos ?? []).map((logo) => (
                        <img
                          key={`${card.title}-${logo.src}`}
                          alt={logo.alt || "Logo"}
                          className="h-[2.625rem] w-auto"
                          src={logo.src}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
