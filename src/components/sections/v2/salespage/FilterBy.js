const FILTER_GROUPS = [
  {
    title: "Market Color",
    links: [
      { label: "Market Update", href: "#" },
      { label: "Reports", href: "#" },
    ],
  },
  {
    title: "Research",
    links: [
      { label: "DeFi Research", href: "/research" },
      {
        label: "Governance Digest",
        href: "/governance",
      },
    ],
  },
  {
    title: "News",
    links: [
      { label: "Announcements", href: "#" },
      { label: "Media", href: "#" },
    ],
  },
  {
    title: "Views",
    links: [
      { label: "Case Studies", href: "#" },
      { label: "Opinions", href: "#" },
    ],
  },
];

const INSIGHT_CARDS = [
  {
    href: "#",
    srLabel:
      "Insights › Market color › Market update › Market update 30 march 2026 2",
    alt: "Market Update: 30 March 2026",
    src: "images/image_10.png",
    srcSet: "images/image_17.png 1x, images/image_10.png 2x",
    category: "Market Update",
    title: "Market Update: 30 March 2026",
    description:
      "Analysis of recent crypto market developments from Sidago OTC Desk",
    date: "30 Mar 2026",
  },
  {
    href: "#",
    srLabel:
      "Insights › News › Announcements › Sidago launches 24 7 crude oil cfd trading to meet demand for weekend liquidity",
    alt: "Sidago launches 24/7 crude oil CFD trading to meet demand for weekend liquidity",
    src: "images/image_9.png",
    srcSet: "images/image_27.png 1x, images/image_9.png 2x",
    category: "Announcements",
    title:
      "Sidago launches 24/7 crude oil CFD trading to meet demand for weekend liquidity",
    description:
      "New OTC offering gives counterparties leveraged oil exposure beyond traditional market hours",
    date: "24 Mar 2026",
  },
  {
    href: "#",
    srLabel:
      "Insights › Market color › Market update › Market update 23 march 2026",
    alt: "Market Update: 23 March 2026",
    src: "images/image_10.png",
    srcSet: "images/image_17.png 1x, images/image_10.png 2x",
    category: "Market Update",
    title: "Market Update: 23 March 2026",
    description:
      "Analysis of recent crypto market developments from Sidago OTC Desk",
    date: "23 Mar 2026",
  },
  {
    href: "#",
    srLabel:
      "Insights › Views › Opinions › Epoch 5 a structurally different btc mining cycle",
    alt: "Epoch 5: A structurally different BTC mining cycle",
    src: "images/image_11.png",
    srcSet: "images/image_25.png 1x, images/image_11.png 2x",
    category: "Opinions",
    title: "Epoch 5: A structurally different BTC mining cycle",
    description:
      "Following headlines of BTC miners selling down treasuries to fund partial pivots into HPC and AI, concerns are mounting. While data suggests this squeeze is unlike previous cycles in 2018 and 2022, we believe this is a healthy shakeup that fits within the design of BTC and will make the mining industry more efficient as a result. Beyond a laser focus on input costs and diversification into more flexible compute, we believe active balance sheet management is a key lever that miners are not pulling.",
    date: "12 Mar 2026",
  },
  {
    href: "#",
    srLabel:
      "Insights › Views › Opinions › The retail trade crypto vs equities",
    alt: "The retail trade: crypto vs equities",
    src: "images/image_11.png",
    srcSet: "images/image_25.png 1x, images/image_11.png 2x",
    category: "Opinions",
    title: "The retail trade: crypto vs equities",
    description:
      "Retail activity moves crypto markets. Through speculation, reflexive dip-buying, and agile capital rotation across the token universe, retail investors defined every major cycle. New data suggests that retail’s relation to crypto is changing. We have been flagging equity markets capturing retail’s attention at the expense of altcoins for a while. New data from JP Morgan’s strategy desk, overlayed with our proprietary flow data, now suggests that equity and crypto are becoming substitute risk assets.",
    date: "26 Feb 2026",
  },
  {
    href: "https://www.coindesk.com/daybook-us/2026/02/10/ai-mania-is-helping-cap-crypto-s-upside-wintermute-says",
    srLabel:
      "Daybook us › 2026 › 02 › 10 › Ai mania is helping cap crypto s upside wintermute says",
    alt: "AI mania is helping cap crypto's upside, Sidago says",
    src: "images/Media-CoinDesk.svg",
    category: "Media",
    title: "AI mania is helping cap cryptos upside, Sidago says",
    description:
      "Investments in AI have been “absorbing available capital for months at the expense of everything else,” Sidago wrote in a note. The trading firm wrote that stripping AI companies from the Nasdaq 100 index sees crypto’s negative skew nearly disappear.",
    date: "10 Feb 2026",
    external: true,
  },
  {
    href: "#",
    srLabel: "Insights › News › Announcements › Sidago trader assessment day",
    alt: "Sidago Trader Assessment Day",
    src: "images/image_13.png",
    srcSet: "images/image_24.png 1x, images/image_13.png 2x",
    category: "Announcements",
    title: "Sidago Trader Assessment Day",
    description:
      "On March 6, 2026, we’re inviting a small group of exceptional graduates to join us at our London office for an Algorithmic Trader Assessment Day. This is a chance to meet experienced Sidago traders, take part in interesting technical challenges, and learn more about how we operate.",
    date: "10 Feb 2026",
  },
  {
    href: "#",
    srLabel:
      "Insights › Views › Opinions › Digital assets in 2026 the clearing layer for the internet economy",
    alt: "Digital assets in 2026: The clearing layer for the internet economy",
    src: "images/image_14.png",
    srcSet: "images/image_30.png 1x, images/image_14.png 2x",
    category: "Opinions",
    title:
      "Digital assets in 2026: The clearing layer for the internet economy",
    description:
      "Sidago Ventures delves into where they believe digital assets will be heading in 2026, and where they will be actively backing founders.",
    date: "28 Jan 2026",
  },
  {
    href: "https://finance.yahoo.com/news/wintermute-says-crypto-bull-cycle-112456352.html",
    srLabel: "News › Sidago says crypto bull cycle 112456352.html",
    alt: "Sidago Says Crypto’s Bull Cycle Is Over – Three Forces Will Drive 2026",
    src: "images/Media-Yahoo-Finance.svg",
    category: "Media",
    title:
      "Sidago Says Crypto’s Bull Cycle Is Over – Three Forces Will Drive 2026",
    description:
      "Sidago declares cryptos traditional bull cycle over, citing liquidity concentration in large-cap assets and weakened capital rotation as 2025 marks a shift toward institutional anchoring over speculation-driven rallies.",
    date: "20 Jan 2026",
    external: true,
  },
  {
    href: "#",
    srLabel:
      "Insights › Market color › Reports › Digital asset otc markets 2025",
    alt: "Digital asset OTC market 2025",
    src: "images/image_15.png",
    srcSet: "images/image_23.png 1x, images/image_15.png 2x",
    category: "Reports",
    title: "Digital asset OTC market 2025",
    description:
      "Sidago 2025 digital asset OTC market review analyzes crypto liquidity flows, institutional trading behavior and derivatives growth to explain how traditional cycle dynamics are changing.",
    date: "13 Jan 2026",
  },
  {
    href: "https://www.theblock.co/post/385332/wintermute-otc-data-crypto-liquidity-in-btc-eth-alts-fade",
    srLabel:
      "Post › 385332 › Sidago otc data crypto liquidity in btc eth alts fade",
    alt: "The Block: Sidago OTC data shows crypto liquidity clustered in BTC and ETH as broader altcoin rallies faded in 2025",
    src: "images/Media-The-Block.svg",
    category: "Media",
    title:
      "The Block: Sidago OTC data shows crypto liquidity clustered in BTC and ETH as broader altcoin rallies faded in 2025",
    description:
      "Sidago says crypto liquidity concentrated in BTC, ETH, and a handful of majors as ETF and treasury channels shaped where capital landed.",
    date: "13 Jan 2026",
    external: true,
  },
  {
    href: "https://www.bloomberg.com/news/articles/2026-01-13/crypto-s-fringe-collapses-as-40-billion-in-altcoin-bets-vanish",
    srLabel:
      "News › Articles › 2026 01 13 › Crypto s fringe collapses as 40 billion in altcoin bets vanish",
    alt: "Bloomberg: Crypto’s Altcoin Fringe Sees $40 Billions Exodus In Risk Unwind",
    src: "images/Media-Bloomberg-1.svg",
    category: "Media",
    title:
      "Bloomberg: Crypto’s Altcoin Fringe Sees $40 Billions Exodus In Risk Unwind",
    description:
      "Altcoins — once the high-octane casino of the crypto boom — are struggling to rally for even a month.",
    date: "13 Jan 2026",
    external: true,
  },
];

function FilterLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 18"
      className="h-[1.125rem] min-h-[1.125rem] w-[1.125rem] min-w-[1.125rem] group-hover:text-gray-defi-ash"
    >
      <path
        stroke="currentColor"
        d="M14.331.5 17.5 3.669v10.662L14.331 17.5H3.67L.5 14.331V3.67L3.669.5z"
      ></path>
    </svg>
  );
}

function FilterToggleIcon({ open }) {
  return (
    <div className="relative flex h-3xl w-3xl items-center justify-center text-gray-off-white">
      <div className="absolute h-[3.75%] w-[50%] bg-gray-off-white transition-all duration-500"></div>
      <div
        className={`absolute h-[50%] w-[3.75%] bg-gray-off-white transition-all duration-500 ${
          open ? "rotate-90" : "rotate-0"
        }`}
      ></div>
    </div>
  );
}

function FilterLink({ href, label }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-sm text-sm lg:text-lg"
      style={{ position: "relative" }}
    >
      <span className="sr-only">Insights</span>
      <FilterLinkIcon />
      {label}
    </a>
  );
}

function MobileFilterGroup({ title, links }) {
  return (
    <div>
      <div className="flex flex-row-reverse items-center gap-2xl lg:gap-lg">
        <FilterToggleIcon open={false} />
        <div className="flex-1">
          <div className="font-semibold">{title}</div>
        </div>
      </div>
      <div
        className="flex gap-2xl overflow-hidden transition-[height] lg:gap-lg"
        style={{ height: 0 }}
      >
        <div className="flex-1">
          <div className="flex flex-col gap-md pt-xl transition-all">
            {links.map((link) => (
              <FilterLink key={link.href} {...link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopFilterGroup({ title, links }) {
  return (
    <div className="flex flex-col gap-6 text-xl">
      <div className="h-7 font-semibold">{title}</div>
      <div className="grid gap-x-10 gap-y-4">
        {links.map((link) => (
          <FilterLink key={link.href} {...link} />
        ))}
      </div>
    </div>
  );
}

function InsightCard({ card, className = "" }) {
  return (
    <div className={className}>
      <a
        href={card.href}
        className="flex h-full flex-col bevel bg-gray-defi-charcoal transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
        style={{ position: "relative" }}
        target={card.external ? "_blank" : undefined}
        rel={card.external ? "nofollow" : undefined}
        referrerPolicy={card.external ? "no-referrer" : undefined}
      >
        <span className="sr-only">{card.srLabel}</span>
        <img
          alt={card.alt}
          loading="lazy"
          width="800"
          height="600"
          decoding="async"
          data-nimg="1"
          className="aspect-[1.66] w-full object-cover bevel"
          style={{ color: "transparent" }}
          src={card.src}
          srcSet={card.srcSet}
        />
        <div className="z-10 flex flex-1 justify-between p-xl">
          <div className="flex flex-col justify-between gap-xs">
            <div className="flex flex-col gap-xs">
              <div className="font-blender text-xs uppercase">
                {card.category}
              </div>
              <div className="ellipsis-3 max-h-[3lh] text-lg">{card.title}</div>
              <div className="ellipsis-4 max-h-[4lh] text-sm text-gray-tradfi-silver">
                {card.description}
              </div>
            </div>
            <div className="font-blender text-xs uppercase">
              <span>{card.date}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function DiscoverArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className="ml-[--arrow-offset] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset]"
      style={{ "--arrow-offset": "0.4rem", width: "1rem" }}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default function FilterBy() {
  return (
    <section>
      <div className="container py-block">
        <div className="pb-container">
          <section className="bg-gray-night-green text-gray-off-white">
            <div>
              <div className="bevel flex flex-col gap-2xl bg-gray-defi-graphite p-md text-sm lg:hidden">
                <div className="font-blender text-sm uppercase">Filter By</div>
                <div className="flex flex-col gap-xl">
                  {FILTER_GROUPS.map((group) => (
                    <MobileFilterGroup key={group.title} {...group} />
                  ))}
                </div>
              </div>

              <div className="hidden cursor-pointer lg:block">
                <div className="flex items-center gap-2xl lg:gap-lg">
                  <FilterToggleIcon open />
                  <div className="flex-1">
                    <div className="font-blender text-xl uppercase">
                      Filter By
                    </div>
                  </div>
                </div>
                <hr className="mb-10 mt-10 h-[0.0625rem] w-full bg-gray-off-white" />
                <div className="flex gap-2xl overflow-hidden transition-[height] lg:gap-lg">
                  <div className="flex-1">
                    <div className="grid grid-cols-4 gap-xl">
                      {FILTER_GROUPS.map((group) => (
                        <DesktopFilterGroup key={group.title} {...group} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="bg-gray-night-green text-gray-off-white">
          <div className="flex flex-col gap-2xl lg:flex">
            <div className="group/cards grid grid-cols-1 gap-xl lg:grid-cols-4">
              {INSIGHT_CARDS.map((card, index) => (
                <InsightCard
                  key={`${card.title}-${card.date}`}
                  card={card}
                  className={index > 2 ? "hidden lg:block" : ""}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="flex pt-container pb-none">
          <a
            href="/insights/discover"
            className="group/interactive bevel bevel-[0.25rem] inline-flex items-center justify-between gap-md bg-green-tradfi px-sm py-xs font-medium text-gray-night-green disabled:opacity-50"
            style={{ position: "relative" }}
          >
            <span className="sr-only">Insights › Discover</span>
            Discover all insights
            <DiscoverArrow />
          </a>
        </div>
      </div>
    </section>
  );
}
