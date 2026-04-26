const INSIGHT_CARDS = [
  {
    href: "#",
    srLabel: "Insights › Market color › Reports › Sidago otc flow 1h25",
    title: "Sidago OTC Market Review 1H25",
    category: "Reports",
    date: "14 Jul 2025",
    alt: "Sidago OTC Market Review 1H25",
    bgClass: "bg-gray-tradfi-horizon text-gray-night-green",
    src: "images/image_8.png",
    srcSet: "images/image_20.png 1x, images/image_8.png 2x",
  },
  {
    href: "#",
    srLabel: "Insights › News › Announcements › Sidago launches construct",
    title: "Sidago launches Construct accelerator",
    category: "Announcements",
    date: "27 Jun 2025",
    alt: "Sidago launches Construct accelerator",
    bgClass: "bg-purple-dark text-gray-night-green",
    src: "images/image_9.png",
    srcSet: "images/image_18.png 1x, images/image_9.png 2x",
  },
  {
    href: "#",
    srLabel: "Insights › Views › Opinions › Sidago rebrand",
    title: "The story behind Sidago rebrand",
    category: "Opinions",
    date: "27 Mar 2025",
    alt: "The story behind Sidago's rebrand",
    bgClass: "bg-gray-defi-graphite text-gray-off-white",
    src: "images/image_4.png",
    srcSet: "images/image_31.png 1x, images/image_4.png 2x",
  },
  {
    href: "#",
    srLabel:
      "Insights › News › Announcements › Gmusa trade the made in usa narrative with wintermute",
    title: "GMUSA: Trade the 'Made in USA' narrative with Sidago",
    category: "Announcements",
    date: "27 Jan 2025",
    alt: "GMUSA: Trade the 'Made in USA' narrative with Sidago",
    bgClass: "bg-gray-tradfi-frost text-gray-night-green",
    src: "images/image_14.png",
    srcSet: "images/image_27.png 1x, images/image_14.png 2x",
  },
  {
    href: "#",
    srLabel:
      "Insights › Views › Case studies › Comparing liquid staking tokens native token vs fiat as collateral alternatives when selling call options",
    title:
      "Comparing LSTs, native tokens & fiat as collateral for call options",
    category: "Case Studies",
    date: "10 Oct 2024",
    alt: "Comparing LSTs, native tokens & fiat as collateral for call options",
    bgClass: "bg-purple-light text-gray-night-green",
    src: "images/image_2.png",
    srcSet: "images/image_22.png 1x, images/image_2.png 2x",
  },
  {
    href: "#",
    srLabel:
      "Insights › News › Announcements › Sidago becomes a eurex member expanding its derivatives offering and presence in tradfi 2",
    title:
      "Sidago becomes a Eurex member, expanding its derivatives offering and presence in TradFi",
    category: "Announcements",
    date: "3 Oct 2024",
    alt: "Sidago becomes a Eurex member, expanding its derivatives offering and presence in TradFi",
    bgClass: "bg-gray-tradfi-steel text-gray-night-green",
    src: "images/image_12.png",
    srcSet: "images/image_16.png 1x, images/image_12.png 2x",
  },
  {
    href: "#",
    srLabel:
      "Insights › Research › Defi research › Suave reimagining the transaction supply chain",
    title: "SUAVE, Reimagining the Transaction Supply Chain",
    category: "DeFi Research",
    date: "9 May 2024",
    alt: "SUAVE, Reimagining the Transaction Supply Chain",
    bgClass: "bg-orange-light text-gray-night-green",
    src: "images/image_1.png",
    srcSet: "images/image_25.png 1x, images/image_1.png 2x",
  },
  {
    href: "#",
    srLabel: "Insights › News › Announcements › Sidago alpha challenge",
    title: "Sidago Alpha Challenge",
    category: "Announcements",
    date: "21 Aug 2024",
    alt: "Sidago Alpha Challenge",
    bgClass: "bg-pink-light text-gray-night-green",
    src: "images/image_5.png",
    srcSet: "images/image_17.png 1x, images/image_5.png 2x",
  },
  {
    href: "#",
    srLabel:
      "Insights › News › Announcements › Sidago develops smart contract for multi chain us election prediction market utilizing chaos labs edge proofs oracle",
    title:
      "Sidago utilizes Chaos Labs Edge Proofs Oracle for US election prediction market",
    category: "Announcements",
    date: "17 Sept 2024",
    alt: "Sidago utilizes Chaos Labs' Edge Proofs Oracle for US election prediction market",
    bgClass: "bg-purple-light text-gray-night-green",
    src: "images/image_11.png",
    srcSet: "images/image_26.png 1x, images/image_11.png 2x",
  },
  {
    href: "#",
    srLabel:
      "Insights › Views › Case studies › Taking a directional view on btc price movements with binary or one touch options",
    title:
      "Taking a Directional View on BTC Price Movements with Binary or One-touch Options",
    category: "Case Studies",
    date: "5 Sept 2024",
    alt: "Taking a Directional View on BTC Price Movements with Binary or One-touch Options",
    bgClass: "bg-gray-tradfi-frost text-gray-night-green",
    src: "images/image.png",
    srcSet: "images/image_23.png 1x, images/image.png 2x",
  },
];

function ArrowIcon({ className = "", style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className={className}
      style={style}
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

function InsightCard({ card, className = "" }) {
  return (
    <a
      href={card.href}
      className={`group/interactive relative flex h-full min-h-[18.75rem] flex-col justify-end bevel transition-all lg:min-h-[23.25rem] xl:min-h-[28.125rem] ${card.bgClass} ${className}`}
      style={{ position: "relative" }}
    >
      <span className="sr-only">{card.srLabel}</span>
      <img
        alt={card.alt}
        loading="lazy"
        width="800"
        height="600"
        decoding="async"
        data-nimg="1"
        className="absolute top-0 h-[60%] w-full object-cover"
        style={{ color: "transparent" }}
        srcSet={card.srcSet}
        src={card.src}
      />
      <div className="z-10 flex items-end justify-between p-xl">
        <div className="flex flex-col justify-between gap-xs">
          <div className="flex flex-col gap-xs">
            <div className="font-blender text-sm uppercase">
              {card.category}
            </div>
            <div className="ellipsis-3 h-[3lh] text-lg lg:text-xl">
              {card.title}
            </div>
          </div>
          <div className="font-blender text-sm uppercase">
            <span>{card.date}</span>
          </div>
        </div>
        <ArrowIcon
          className="ml-[--arrow-offset] shrink-0 transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset]"
          style={{ "--arrow-offset": "1rem", width: "2.5rem" }}
        />
      </div>
    </a>
  );
}

export default function RecommendedInsight() {
  const mobileCards = INSIGHT_CARDS.slice(0, 2);

  return (
    <section className="bg-gray-defi-charcoal">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl font-blender text-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id="recommended-insights"
              className="font-blender text-xl uppercase text-green-dark"
            >
              Recommended insights
            </h2>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>

        <section className="bg-gray-defi-charcoal text-gray-off-white">
          <div className="flex flex-col gap-2xl lg:hidden">
            <div className="group/cards grid grid-cols-1 gap-xl">
              {mobileCards.map((card) => (
                <InsightCard
                  key={card.href}
                  card={card}
                  className="lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                />
              ))}
            </div>

            <button
              className="flex justify-between bevel bevel-[0.25rem] bg-green-dark p-md font-medium text-gray-night-green"
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
            className="hidden flex-col-reverse gap-4xl lg:flex"
            style={{ clipPath: "inset(-100rem -100rem -100rem -100rem)" }}
          >
            <div className="flex items-center justify-between gap-3xl">
              <div className="flex gap-md">
                <button
                  type="button"
                  aria-label="Previous"
                  className="group/interactive inline-flex items-center justify-between gap-md bevel bevel-[0.25rem] bg-green-mid p-[0.625rem] font-medium text-gray-night-green disabled:opacity-50 hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100"
                >
                  <ArrowIcon className="h-lg w-lg rotate-180" />
                </button>
                <button
                  type="button"
                  aria-label="Next"
                  className="group/interactive inline-flex items-center justify-between gap-md bevel bevel-[0.25rem] bg-green-mid p-[0.625rem] font-medium text-gray-night-green disabled:opacity-50 hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100"
                >
                  <ArrowIcon className="h-lg w-lg" />
                </button>
              </div>

              <div className="hidden lg:flex">
                {INSIGHT_CARDS.map((card, index) => (
                  <div
                    key={card.href}
                    className={`h-[0.25rem] bg-green-mid transition-all ${
                      index === 0 ? "w-sm" : "ml-[0.125rem] w-sm opacity-30"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="relative -mx-[100rem] flex overflow-x-auto px-[100rem] scrollbar-none group/cards">
              {INSIGHT_CARDS.map((card) => (
                <div
                  key={card.href}
                  className="w-[calc(100%-1rem)] shrink-0 pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem]"
                  style={{
                    "--link-card-desktop-width": "calc(100% / 3 + 1rem)",
                  }}
                >
                  <InsightCard
                    card={card}
                    className="lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
