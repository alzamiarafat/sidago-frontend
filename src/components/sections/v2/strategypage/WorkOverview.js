const fallbackCards = [
  {
    title: "Founders-first support",
    description:
      "We work closely with teams from early validation through execution planning and market expansion.",
  },
  {
    title: "Operator insight",
    description:
      "Our perspective combines product, liquidity, governance, and infrastructure experience from the market itself.",
  },
  {
    title: "Long-term partnership",
    description:
      "We back projects where we can contribute durable strategic value beyond capital alone.",
  },
];

export default function WorkOverview({
  title = "How we work",
  description = "Sidago supports founders with practical operating experience, market context, and long-term partnership across critical growth decisions.",
  cards = fallbackCards,
}) {
  const items = cards.length ? cards : fallbackCards;

  return (
    <section className="bg-gray-night-green">
      <div className="container pb-block pt-10 md:pt-12 lg:pt-14">
        <section className="bg-gray-night-green text-gray-off-white">
          <div className="flex flex-col gap-3xl lg:gap-[4rem]">
            <div className="relative flex flex-col gap-md overflow-hidden bevel bg-gray-defi-charcoal px-xl py-2xl">
              <div className="text-2xl lg:text-3xl">{title}</div>
              <div className="max-w-3xl text-base text-gray-defi-ash">
                {description}
              </div>
            </div>
            <div className="grid gap-xl lg:grid-cols-3">
              {items.map((card) => (
                <div
                  key={card.title}
                  className="bevel bg-gray-defi-charcoal p-xl"
                >
                  <div className="mb-md text-xl text-blue-mid">{card.title}</div>
                  <div className="text-gray-off-white">{card.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
