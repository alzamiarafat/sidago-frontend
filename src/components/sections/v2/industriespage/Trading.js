"use client";

import { useState } from "react";

const tradingItems = [
  {
    title: "CeFi Trading",
    description:
      "CeFi traders devise innovative trading algorithms that capitalize on short term opportunities and arbitrage in a delta neutral capacity. Sidago traders work as one team across all tokens, products and strategies, well positioned to take advantage of a large variety of signals.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        className="h-[5.25rem] w-[5.25rem] text-green-mid"
      >
        <path
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="0.7"
          d="M3.21 33.6V23.4M9.926 13.2V37M16.642 30.2V16.6M23.358 20v-6.8M30.074 23.4v-6.8M36.79 23.4V3"
        />
      </svg>
    ),
  },
  {
    title: "DeFi Trading",
    description:
      "DeFi traders work across all DeFi venues and opportunities, designing a diverse set of trading strategies. They harness deep on-chain insights and develop new connectivity and trading algorithms across all major chains and liquidity pools.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        className="h-[5.25rem] w-[5.25rem] text-green-mid"
      >
        <path
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="0.7"
          d="M14 5H8v12l-3 3 3 3v12h6M26 5h6v12l3 3-3 3v12h-6"
        />
      </svg>
    ),
  },
  {
    title: "Quant",
    description:
      "The Quant team uses advanced statistical and ML methods to analyze crypto and traditional financial market data, to develop signals and design the most efficient pricing models. The team also develops its own strategies that range from latency sensitive short-term horizon to mid-term holding time strategies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 41"
        className="h-[5.25rem] w-[5.25rem] text-green-mid"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M38.724 20.735 20 1.987 1.243 20.727 20 39.483zm.837.276-19.28 19.305h-.561L.406 21.004v-.553L19.72 1.153h.56L39.562 20.46z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M33.382 34.117V7.337H6.594v26.78zm.396.787H6.203l-.397-.396V6.94l.391-.39h27.576l.396.396v27.567z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Technology",
    description:
      "Technology drives our edge in proprietary trading. While using the best-in-class HFT technology expertise, we apply it in a way that’s specific to digital asset market structure. All Sidago technology is proprietary and built in house using low-level programming languages and advanced networking infrastructure.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        className="h-[5.25rem] w-[5.25rem] text-green-mid"
      >
        <path
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeWidth="0.7"
          d="m12.501 12.5-7.5 7.5 7.5 7.5M17.501 30l5-20M27.5 12.5 35 20l-7.5 7.5"
        />
      </svg>
    ),
  },
];

function ExpandIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 41"
      className="absolute right-6 top-6 z-10 h-[3.5rem] w-[3.5rem]"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.405 30.937v-20h1.19v20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M30 21.532H10v-1.19h20z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CollapseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 -1 40 40"
      className="absolute right-6 top-6 z-10 h-[3.5rem] w-[3.5rem]"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M30 20.595H10v-1.19h20z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function TradingCard({ item, isFlipped, onToggle, onEnter, onLeave }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className={`flipper card relative col-span-1 flex h-[15.625rem] w-full shrink-0 justify-center overflow-visible text-left transition-all md:h-[17.8125rem] ${isFlipped ? "flipper--flipped" : ""
        }`}
      aria-pressed={isFlipped}
    >
      <div className="front bevel bg-gray-defi-slate">
        <div className="relative flex h-full flex-col justify-between p-6">
          <div>{item.icon}</div>
          <div className="text-xl md:text-2xl">{item.title}</div>
          <ExpandIcon />
        </div>
      </div>
      <div className="back bevel bg-green-mid">
        <div className="flex h-full flex-col justify-end text-gray-night-green md:flex-row md:justify-start">
          <div className="flex flex-col justify-end gap-4 p-4 md:p-6">
            <p className="text-xl md:text-2xl">{item.title}</p>
            <div className="removePaddingList removeSpacesList bullet-text-gray-night-green text-sm">
              {item.description}
            </div>
          </div>
          <CollapseIcon />
        </div>
      </div>
    </button>
  );
}

export default function Trading() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-gray-defi-shadow">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id="what-powers-the-trading-engine"
              className="font-blender text-xl uppercase text-green-dark"
            >
              What powers the trading engine
            </h2>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>
        <section className="bg-gray-defi-shadow text-gray-off-white">
          <div className="flex flex-col gap-6 gap-y-8 overflow-hidden md:grid md:grid-cols-2">
            {tradingItems.map((item, index) => (
              <TradingCard
                key={item.title}
                item={item}
                isFlipped={activeIndex === index}
                onToggle={() =>
                  setActiveIndex((current) =>
                    current === index ? null : index,
                  )
                }
                onEnter={() => setActiveIndex(index)}
                onLeave={() =>
                  setActiveIndex((current) =>
                    current === index ? null : current,
                  )
                }
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
