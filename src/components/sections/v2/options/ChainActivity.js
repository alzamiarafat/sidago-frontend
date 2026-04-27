const fallbackColumns = [
  "Name",
  "Dominant stablecoin",
  "Sector dominance",
  "Gas cost for staking",
  "Gas cost for swapping",
  "Price impact $10k trade",
  "Price impact $100k trade",
  "Price impact $1M trade",
  "Price impact $10M trade",
];

const fallbackRows = [
  {
    name: "Ethereum",
    stablecoin: "Tether",
    sectors: [
      { label: "Liquid Staking", value: 24, colorClass: "bg-green-light" },
      { label: "Lending", value: 22, colorClass: "bg-orange-light" },
      { label: "Restaking", value: 8, colorClass: "bg-green-dark" },
      { label: "Bridge", value: 7, colorClass: "bg-purple-light" },
      { label: "Other", value: 39, colorClass: "bg-gray-defi-graphite" },
    ],
    staking: "0.0182 USD",
    swapping: "0.0607 USD",
    impact10k: "9.09 bps",
    impact100k: "9.53 bps",
    impact1m: "11.70 bps",
    impact10m: "NaN bps",
  },
  {
    name: "Base",
    stablecoin: "USD Coin",
    sectors: [
      { label: "Lending", value: 49, colorClass: "bg-orange-light" },
      { label: "Risk Curators", value: 15, colorClass: "bg-purple-light" },
      { label: "DEXs", value: 15, colorClass: "bg-orange-mid" },
      { label: "Capital Allocator", value: 6, colorClass: "bg-green-dark" },
      { label: "Other", value: 15, colorClass: "bg-gray-defi-graphite" },
    ],
    staking: "0.0009 USD",
    swapping: "0.0034 USD",
    impact10k: "1.91 bps",
    impact100k: "4.53 bps",
    impact1m: "7.90 bps",
    impact10m: "18.4 bps",
  },
];

function SectorBar({ sectors = [] }) {
  return (
    <div className="flex min-w-[12rem]">
      {sectors.map((sector) => (
        <div key={sector.label} style={{ flex: `0 0 ${sector.value}%` }}>
          <div className="py-2">
            <div className={`h-1 ${sector.colorClass || "bg-gray-defi-graphite"}`} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ChainActivity({
  title = "Sidago chain activity index",
  description = "Make informed decisions with real-time insights into activity and costs across major chains.",
  columns = fallbackColumns,
  rows = fallbackRows,
}) {
  const items = rows.length ? rows : fallbackRows;

  return (
    <section className="bg-gray-defi-charcoal">
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
        <section>
          <div className="left-bevel relative w-full overflow-hidden bg-gray-defi-charcoal text-gray-off-white">
            <div className="overflow-x-auto scrollbar-none">
              <table className="min-w-full bevel shadow-md">
                <thead>
                  <tr>
                    {columns.map((column, index) => (
                      <th
                        key={column}
                        className={`whitespace-nowrap px-6 py-4 text-left font-medium ${
                          index === 0
                            ? "sticky left-0 z-10 bg-gray-defi-graphite shadow-md"
                            : index % 2 === 0
                              ? "bg-gray-defi-graphite"
                              : "bg-gray-defi-slate"
                        }`}
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {items.map((row, index) => (
                    <tr key={row.name}>
                      <td className="sticky left-0 z-10 bg-gray-defi-slate px-6 py-5 shadow-[4px_0_16px_0_rgba(20,20,20,0.16)]">
                        {row.name}
                      </td>
                      <td className="bg-gray-defi-ash px-6 py-5">{row.stablecoin}</td>
                      <td className="bg-gray-defi-slate px-6 py-5">
                        <SectorBar sectors={row.sectors} />
                      </td>
                      <td className="bg-gray-defi-ash px-6 py-5">{row.staking}</td>
                      <td className="bg-gray-defi-slate px-6 py-5">{row.swapping}</td>
                      <td className="bg-gray-defi-ash px-6 py-5">{row.impact10k}</td>
                      <td className="bg-gray-defi-slate px-6 py-5">{row.impact100k}</td>
                      <td className="bg-gray-defi-ash px-6 py-5">{row.impact1m}</td>
                      <td className="bg-gray-defi-slate px-6 py-5">{row.impact10m}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
