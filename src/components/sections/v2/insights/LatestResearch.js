const researchItems = [
  {
    href: "#",
    srLabel:
      "Insights › Views › Case studies › Why delegation matters lessons from compounds governance model",
    imageAlt:
      "Why delegation matters: Lessons from Compound’s governance model",
    imageSrc: "/images/digest-1.webp",
    category: "Case Studies",
    title: "Why delegation matters: Lessons from Compound’s governance model",
    date: "9 Oct 2025",
  },
  {
    href: "#",
    srLabel:
      "Insights › Research › Governance digest › Defi governance digest 17 mar 2025",
    imageAlt: "DeFi Governance Digest: 17 Mar 2025",
    imageSrc: "/images/digest-2.webp",
    category: "Governance Digest",
    title: "DeFi Governance Digest: 17 Mar 2025",
    date: "17 Mar 2025",
  },
  {
    href: "#",
    srLabel:
      "Insights › Research › Governance digest › Defi governance digest 10 mar 2025",
    imageAlt: "DeFi Governance Digest: 10 Mar 2025",
    imageSrc: "/images/digest-2.webp",
    category: "Governance Digest",
    title: "DeFi Governance Digest: 10 Mar 2025",
    date: "10 Mar 2025",
  },
  {
    href: "#",
    srLabel:
      "Insights › Research › Defi research › Why protocols could benefit from owning their amm curve",
    imageAlt: "Why Protocols Could Benefit From Owning Their AMM Curve",
    imageSrc: "/images/digest-3.webp",
    category: "DeFi Research",
    title: "Why Protocols Could Benefit From Owning Their AMM Curve",
    date: "19 Jun 2024",
  },
  {
    href: "#",
    srLabel:
      "Insights › Research › Defi research › Suave reimagining the transaction supply chain",
    imageAlt: "SUAVE, Reimagining the Transaction Supply Chain",
    imageSrc: "/images/digest-4.webp",
    category: "DeFi Research",
    title: "SUAVE, Reimagining the Transaction Supply Chain",
    date: "9 May 2024",
  },
];

const desktopIndicatorCount = 5;

function ResearchCard({ item }) {
  return (
    <a
      style={{ position: "relative" }}
      className="flex h-full flex-col bevel bg-gray-defi-charcoal transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
      href={item.href}
    >
      <span className="sr-only">{item.srLabel}</span>
      <img
        alt={item.imageAlt}
        loading="lazy"
        width="800"
        height="600"
        decoding="async"
        data-nimg="1"
        className="bevel aspect-[1.66] w-full object-cover"
        style={{ color: "transparent" }}
        srcSet={`${item.imageSrc} 1x, ${item.imageSrc} 2x`}
        src={item.imageSrc}
      />
      <div className="z-10 flex flex-1 justify-between p-xl">
        <div className="flex flex-col justify-between gap-xs">
          <div className="flex flex-col gap-xs">
            <div className="font-blender text-xs uppercase">
              {item.category}
            </div>
            <div className="ellipsis-3 max-h-[3lh] text-lg">{item.title}</div>
          </div>
          <div className="font-blender text-xs uppercase">
            <span>{item.date}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

function MobilePagination() {
  return (
    <div className="relative flex flex-1 gap-md lg:hidden">
      {researchItems.map((_, index) => (
        <button
          key={index}
          className={`absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash ${
            index === 0 ? "" : "opacity-0"
          }`}
          type="button"
        >
          <div className="flex w-full items-center justify-between text-lg">
            <div className="flex font-blender text-xl font-medium uppercase text-gray-defi-ash">
              <span className="min-w-md">{index + 1}</span>
              <span className="min-w-sm">/</span>
              <span className="min-w-md">{researchItems.length}</span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

function DesktopProgress() {
  return (
    <div className="hidden lg:flex">
      {Array.from({ length: desktopIndicatorCount }).map((_, index) => (
        <div
          key={`progress-empty-${index}`}
          className="h-[0.25rem] w-0 bg-purple-light opacity-30 transition-all"
        />
      ))}
      <div
        className="h-[0.25rem] w-sm bg-purple-light transition-all"
        style={{ width: "calc(0.75rem * 0)" }}
      />
      {Array.from({ length: desktopIndicatorCount }).map((_, index) => (
        <div
          key={`progress-fill-${index}`}
          className="ml-[0.125rem] h-[0.25rem] w-sm bg-purple-light opacity-30 transition-all"
        />
      ))}
    </div>
  );
}

function CarouselCard({ item }) {
  return (
    <div
      className="w-[calc(100%-1rem)] shrink-0 pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem]"
      style={{
        "--link-card-desktop-width": "calc(100% / 4 + 1rem)",
      }}
    >
      <ResearchCard item={item} />
    </div>
  );
}

export function LatestResearch() {
  const featuredItems = researchItems.slice(0, 3);
  const carouselItems = researchItems;

  return (
    <section className="bg-gray-defi-shadow">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id="latest-defi-research"
              className="font-blender text-xl uppercase text-green-dark"
            >
              Latest DeFi research
            </h2>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>
        <section className="bg-gray-defi-shadow text-gray-off-white">
          <div>
            <div className="hidden flex-col gap-2xl lg:hidden">
              <div className="group/cards grid grid-cols-1 gap-xl lg:grid-cols-4">
                {featuredItems.map((item) => (
                  <div key={item.href}>
                    <ResearchCard item={item} />
                  </div>
                ))}
                {researchItems.slice(3).map((item) => (
                  <div key={item.href} className="hidden lg:block">
                    <ResearchCard item={item} />
                  </div>
                ))}
              </div>
              <button
                className="flex justify-between bevel bevel-[0.25rem] bg-green-dark p-md font-medium text-gray-night-green lg:hidden"
                type="button"
              >
                Load more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 40 40"
                  className="h-6 w-6"
                >
                  <path
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="0.7"
                    d="M26.07 17.512h8.92l-4.46 4.503z"
                  />
                  <path
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="0.7"
                    d="M30.53 22.016V9.147L20.496 4 10.46 9.147v2.574M14.92 22.016H6l4.46-4.504z"
                  />
                  <path
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="0.7"
                    d="M10.46 17.512V30.38l10.035 5.147 10.036-5.147v-2.573M26.07 17.512h8.92l-4.46 4.503z"
                  />
                  <path
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="0.7"
                    d="M30.53 22.016V9.147L20.496 4 10.46 9.147v2.574"
                  />
                </svg>
              </button>
            </div>
            <div
              className="flex flex-col gap-2xl lg:flex-col-reverse lg:gap-4xl"
              style={{ clipPath: "inset(-100rem -100rem -100rem -100rem)" }}
            >
              <div className="flex justify-between gap-3xl lg:items-center">
                <MobilePagination />
                <div className="flex gap-md">
                  <button
                    type="button"
                    aria-label="Previous"
                    className="group/interactive inline-flex items-center justify-between gap-md bevel bevel-[0.25rem] bg-purple-light p-[0.625rem] font-medium text-gray-night-green disabled:opacity-50 hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 40 40"
                      className="h-lg w-lg rotate-180"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next"
                    className="group/interactive inline-flex items-center justify-between gap-md bevel bevel-[0.25rem] bg-purple-light p-[0.625rem] font-medium text-gray-night-green disabled:opacity-50 hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 40 40"
                      className="h-lg w-lg"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <DesktopProgress />
              </div>
              <div className="group/cards relative -mx-[100rem] flex overflow-x-auto px-[100rem] scrollbar-none">
                {carouselItems.map((item) => (
                  <CarouselCard key={item.href} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
