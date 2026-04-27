const fallbackCategories = [
  {
    title: "DeFi Applications",
    href: "#",
    accentClass: "text-blue-mid",
    logos: [
      { src: "/images/Ventures-Logo-–-Euler.svg", alt: "Euler" },
      { src: "/images/Ventures-Logo-–-OneBalance.svg", alt: "OneBalance" },
      { src: "/images/Ventures-Logo-–-1inch.svg", alt: "1inch" },
    ],
    span: "lg:col-span-2",
  },
  {
    title: "Data & Analytics",
    href: "#",
    accentClass: "text-blue-mid",
    logos: [
      { src: "/images/Ventures-Logo-–-Silicon-Data.svg", alt: "Silicon Data" },
      { src: "/images/Ventures-Logo-–-Stork.svg", alt: "Stork" },
      { src: "/images/Ventures-Logo-–-Arkham-1.svg", alt: "Arkham" },
    ],
  },
];

export default function Investment({
  title = "Venture investments",
  categories = fallbackCategories,
}) {
  const items = categories.length ? categories : fallbackCategories;

  return (
    <section>
      <div className="container py-block">
        <div className="pb-container">
          <div className="relative">
            <div className="flex flex-col gap-6 lg:gap-8">
              <h2 className="z-10 inline-block max-w-[60%] text-2xl lg:text-3xl">
                {title}
              </h2>
            </div>
          </div>
        </div>
        <section className="relative bg-gray-night-green text-gray-off-white">
          <div className="group/cards grid gap-md lg:grid-cols-3 lg:gap-xl">
            {items.map((category) => (
              <a
                key={category.title}
                className={`group/interactive flex h-[12.5rem] flex-col gap-[1.185rem] bevel bg-gray-defi-graphite p-xl transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70 ${category.span || ""}`}
                href={category.href || "#"}
              >
                <div className={`flex items-center justify-between font-blender text-xl uppercase ${category.accentClass || "text-blue-mid"}`}>
                  {category.title}
                </div>
                <div className="flex flex-wrap gap-x-[3.125rem] gap-y-2 overflow-hidden">
                  {(category.logos ?? []).map((logo) => (
                    <img
                      key={`${category.title}-${logo.src}`}
                      alt={logo.alt || "Logo"}
                      className="h-2xl w-auto"
                      src={logo.src}
                    />
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
