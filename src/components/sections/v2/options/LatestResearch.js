const fallbackItems = [
  {
    href: "#",
    srLabel: "Insights research card",
    imageAlt: "Why delegation matters",
    imageSrc: "/images/digest-1.webp",
    category: "Case Studies",
    title: "Why delegation matters: Lessons from Compound’s governance model",
    date: "9 Oct 2025",
  },
  {
    href: "#",
    srLabel: "Insights research card",
    imageAlt: "DeFi Governance Digest",
    imageSrc: "/images/digest-2.webp",
    category: "Governance Digest",
    title: "DeFi Governance Digest: 17 Mar 2025",
    date: "17 Mar 2025",
  },
  {
    href: "#",
    srLabel: "Insights research card",
    imageAlt: "Owning their AMM curve",
    imageSrc: "/images/digest-3.webp",
    category: "DeFi Research",
    title: "Why Protocols Could Benefit From Owning Their AMM Curve",
    date: "19 Jun 2024",
  },
];

function ResearchCard({ item }) {
  return (
    <a
      className="flex h-full flex-col bevel bg-gray-defi-charcoal transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
      href={item.href}
    >
      <span className="sr-only">{item.srLabel || item.title}</span>
      <img
        alt={item.imageAlt || item.title}
        className="aspect-[1.66] w-full object-cover bevel"
        src={item.imageSrc}
      />
      <div className="z-10 flex flex-1 justify-between p-xl">
        <div className="flex flex-col justify-between gap-xs">
          <div className="flex flex-col gap-xs">
            <div className="font-blender text-xs uppercase">{item.category}</div>
            <div className="ellipsis-3 max-h-[3lh] text-lg">{item.title}</div>
          </div>
          <div className="font-blender text-xs uppercase">{item.date}</div>
        </div>
      </div>
    </a>
  );
}

export function LatestResearch({
  title = "Latest DeFi research",
  items = fallbackItems,
}) {
  const cards = items.length ? items : fallbackItems;

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
          <div className="group/cards grid grid-cols-1 gap-xl lg:grid-cols-3">
            {cards.map((item) => (
              <ResearchCard key={`${item.title}-${item.date}`} item={item} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
