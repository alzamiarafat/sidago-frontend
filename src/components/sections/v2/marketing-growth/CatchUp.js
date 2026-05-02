const catchUpItems = [
  {
    href: "https://youtu.be/RJ3NVTmqZ94?t=827",
    srLabel: "RJ3NVTmqZ94",
    imageSrc: "images/Fortune-Mid.svg",
    imageAlt:
      "Fortune's Crypto Playbook: Has Crypto Gone Cold? Sidago CEO Explains",
    type: "Podcast",
    title:
      "Fortunes Crypto Playbook: Has Crypto Gone Cold? Sidago CEO Explains",
    date: "17 Feb 2026",
  },
  {
    href: "https://fintech.tv/wintermute-ceo-says-etf-flows-reshaped-crypto-as-bitcoin-tests-key-support/",
    srLabel:
      "Sidago ceo says etf flows reshaped crypto as bitcoin tests key support",
    imageSrc: "images/Fintech-TV-Dark.svg",
    imageAlt:
      "Fintech TV: Sidago CEO Says ETF Flows Reshaped Crypto as Bitcoin Tests Key Support",
    type: "Panel",
    title:
      "Fintech TV: Sidago CEO Says ETF Flows Reshaped Crypto as Bitcoin Tests Key Support",
    date: "13 Feb 2026",
  },
  {
    href: "https://www.cnbc.com/video/2026/02/12/gaevoy-this-is-a-crisis-of-faith-in-prices-not-technology.html",
    srLabel:
      "Video 2026 02 12 Gaevoy this is a crisis of faith in prices not technology",
    imageSrc: "images/CNBC-Mid.svg",
    imageAlt: "CNBC: This is a crisis of faith in prices, not technology",
    type: "Panel",
    title: "CNBC: This is a crisis of faith in prices, not technology",
    date: "12 Feb 2026",
  },
  {
    href: "https://youtu.be/QCMtlEM6I68?t=21852",
    srLabel: "QCMtlEM6I68",
    imageSrc: "images/BTC-Investor-Week-Light.svg",
    imageAlt:
      "Bitcoin Investor Week: Evgeny talks the evolving crypto landscape",
    type: "Panel",
    title: "Bitcoin Investor Week: Evgeny talks the evolving crypto landscape",
    date: "11 Feb 2026",
  },
  {
    href: "https://unchainedcrypto.com/bits-bips/bits-bips-the-most-dangerous-type-of-asset-to-trade-on-weekends/",
    srLabel: "Bits bips the most dangerous type of asset to trade on weekends",
    imageSrc: "images/Unchained-Mid.svg",
    imageAlt:
      "Unchained (Bits + Bips): The Most Dangerous Type of Asset to Trade on Weekends",
    type: "Podcast",
    title:
      "Unchained (Bits + Bips): The Most Dangerous Type of Asset to Trade on Weekends",
    date: "31 Jan 2026",
  },
  {
    href: "https://fortune.com/videos/watch/the-rise-and-stall-of-the-clarity-act-%7C-fortune%27s-crypto-playbook/f2ad2f8e-94d5-41e0-94e0-c1c3b25a166f",
    srLabel: "Fortunes Crypto Playbook The Rise and Stall of the Clarity Act",
    imageSrc: "images/Fortune-Dark.svg",
    imageAlt:
      "Fortune's Crypto Playbook: The Rise and Stall of the Clarity Act",
    type: "Podcast",
    title: "Fortunes Crypto Playbook: The Rise and Stall of the Clarity Act",
    date: "22 Jan 2026",
  },
  {
    href: "https://www.youtube.com/watch?v=XCEMD5r5ZY8",
    srLabel: "Watch",
    imageSrc: "images/CfC-Mid.svg",
    imageAlt: "CfC St. Moritz: Reimagining Private Markets",
    type: "Panel",
    title: "CfC St. Moritz: Reimagining Private Markets",
    date: "15 Jan 2026",
  },
  {
    href: "https://youtu.be/ZeNZpngn1Rw?t=1822",
    srLabel: "ZeNZpngn1Rw",
    imageSrc: "images/CoinDesk-Light.svg",
    imageAlt:
      "CoinDesk Live: Yoann on the evolution of global market infrastructure",
    type: "Panel",
    title:
      "CoinDesk Live: Yoann on the evolution of global market infrastructure",
    date: "23 Sept 2025",
  },
  {
    href: "https://unchainedcrypto.com/bits-bips/bits-bips-eth-makes-a-comeback-while-cryptos-animal-spirits-revive/",
    srLabel:
      "Bits bips eth makes a comeback while cryptos animal spirits revive",
    imageSrc: "images/Unchained-Mid.svg",
    imageAlt:
      "Unchained (Bits + Bips): ETH Makes a Comeback While Crypto’s Animal Spirits Revive",
    type: "Podcast",
    title:
      "Unchained (Bits + Bips): ETH Makes a Comeback While Crypto’s Animal Spirits Revive",
    date: "29 Jul 2025",
  },
  {
    href: "https://www.cnbc.com/video/2025/07/18/genius-act-is-the-green-light-institutions-have-been-waiting-for-says-wintermutes-gaevoy.html",
    srLabel:
      "Genius act is the green light institutions have been waiting for says gaevoy",
    imageSrc: "images/CNBC-Dark.svg",
    imageAlt:
      "CNBC: Genius Act is the green light institutions have been waiting for, says Sidago Gaevoy",
    type: "Podcast",
    title:
      "CNBC: Genius Act is the green light institutions have been waiting for, says Sidago Gaevoy",
    date: "18 Jul 2025",
  },
  {
    href: "https://www.youtube.com/watch?v=SoH-we0zKfQ",
    srLabel: "Watch",
    imageSrc: "images/Talking-Tokens-Light.svg",
    imageAlt:
      "Talking Tokens: Why This Crypto Fund Is Doubling Down While Others Panic",
    type: "Podcast",
    title:
      "Talking Tokens: Why This Crypto Fund Is Doubling Down While Others Panic",
    date: "8 Jul 2025",
  },
  {
    href: "https://x.com/therollupco/status/1935831458834174080",
    srLabel: "The Rollup status",
    imageSrc: "images/The-Rollup-Mid.svg",
    imageAlt: "The Rollup: Jake Ostrovskis on Market Liquidity",
    type: "Podcast",
    title: "The Rollup: Jake Ostrovskis on Market Liquidity",
    date: "19 Jun 2025",
  },
];

function CatchUpCard({ item }) {
  return (
    <a
      referrerPolicy="no-referrer"
      rel="nofollow"
      style={{ position: "relative" }}
      target="_blank"
      href={item.href}
      className="flex h-full flex-col bevel bg-gray-defi-charcoal transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
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
        src={item.imageSrc}
      />
      <div className="z-10 flex flex-1 justify-between p-xl">
        <div className="flex flex-col justify-between gap-xs">
          <div className="flex flex-col gap-xs">
            <div className="font-blender text-xs uppercase">{item.type}</div>
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

export function Catchup() {
  return (
    <section>
      <div className="container py-block">
        <div className="pb-container">
          <div className="relative">
            <div className="flex flex-col gap-6 lg:gap-8">
              <h2
                className="z-10 inline-block max-w-[60%] text-2xl lg:text-3xl"
                id="catch-up-on-past-conversations"
              >
                <span className="text-pink-mid">Catch up</span> on past
                conversations
              </h2>
              <div className="z-10 max-w-[85%] md:max-w-[70%]">
                Revisit panels and talks where we share what we&apos;ve learned,
                and dive into the topics shaping crypto today.
              </div>
            </div>
          </div>
        </div>

        <section className="bg-gray-night-green text-gray-off-white">
          <div>
            <div className="flex flex-col gap-2xl lg:hidden">
              <div className="group/cards grid grid-cols-1 gap-xl lg:grid-cols-4">
                {catchUpItems.slice(0, 3).map((item) => (
                  <div key={item.href}>
                    <CatchUpCard item={item} />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="hidden flex-col gap-2xl lg:flex lg:flex-col-reverse lg:gap-4xl"
              style={{ clipPath: "inset(-100rem -100rem -100rem -100rem)" }}
            >
              <div className="flex justify-between gap-3xl lg:items-center">
                <div className="relative flex flex-1 gap-md lg:hidden">
                  {catchUpItems.map((item, index) => (
                    <button
                      key={item.href}
                      className={`absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash ${
                        index === 0 ? "" : "opacity-0"
                      }`}
                      type="button"
                    >
                      <div className="flex w-full items-center justify-between text-lg">
                        <div className="flex font-blender text-xl font-medium uppercase text-gray-defi-ash">
                          <span className="min-w-md">{index + 1}</span>
                          <span className="min-w-sm">/</span>
                          <span className="min-w-md">
                            {catchUpItems.length}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex gap-md">
                  {["Previous", "Next"].map((label, index) => (
                    <button
                      key={label}
                      type="button"
                      aria-label={label}
                      className="group/interactive inline-flex items-center justify-between gap-md bevel bevel-[0.25rem] bg-pink-mid p-[0.625rem] font-medium text-gray-night-green disabled:opacity-50 hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 40 40"
                        className={`h-lg w-lg ${index === 0 ? "rotate-180" : ""}`}
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  ))}
                </div>

                <div className="hidden lg:flex">
                  {Array.from({ length: catchUpItems.length }).map(
                    (_, index) => (
                      <div
                        key={`progress-empty-${index}`}
                        className="h-[0.25rem] w-0 bg-pink-mid opacity-30 transition-all"
                      />
                    ),
                  )}
                  <div
                    className="h-[0.25rem] w-sm bg-pink-mid transition-all"
                    style={{ width: "calc(0.75rem * 0)" }}
                  />
                  {Array.from({ length: catchUpItems.length }).map(
                    (_, index) => (
                      <div
                        key={`progress-fill-${index}`}
                        className="ml-[0.125rem] h-[0.25rem] w-sm bg-pink-mid opacity-30 transition-all"
                      />
                    ),
                  )}
                </div>
              </div>

              <div className="group/cards relative -mx-[100rem] flex overflow-x-auto px-[100rem] scrollbar-none">
                {catchUpItems.map((item) => (
                  <div
                    key={item.href}
                    className="w-[calc(100%-1rem)] shrink-0 pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem]"
                    style={{
                      "--link-card-desktop-width": "calc(100% / 4 + 1rem)",
                    }}
                  >
                    <CatchUpCard item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
