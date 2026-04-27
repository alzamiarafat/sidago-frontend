const fallbackItems = [
  "Value-add first approach",
  "Investments using own capital",
  "Founded by web3 founders",
  "In-house builders across web3",
  "Governance and DeFi expertise",
  "Deep liquidity understanding",
];

export default function PartnerBenefit({
  title = "Partner with Sidago Ventures",
  items = fallbackItems,
}) {
  const benefits = items.length ? items : fallbackItems;

  return (
    <section className="bg-gray-defi-shadow">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2 className="font-blender text-xl uppercase text-green-dark">
              {title}
            </h2>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>
        <section className="bg-gray-defi-shadow text-gray-off-white">
          <div className="grid gap-xl lg:grid-cols-2">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex flex-row items-center gap-md bevel lg:gap-2xl lg:bg-gray-defi-charcoal lg:p-xl"
              >
                <div className="flex h-[3.5rem] w-[3.5rem] shrink-0 items-center justify-center border border-purple-mid text-lg text-purple-mid lg:h-[6.5rem] lg:w-[6.5rem] lg:text-2xl">
                  +
                </div>
                <div className="text-lg lg:text-xl lg:text-gray-off-white">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
