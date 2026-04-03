// components/MissionInvestmentThesisExact.js
"use client";

import { useState } from "react";

const TABS = [
  { key: "about", label: "About" },
  { key: "vision", label: "Vision" },
  { key: "mission", label: "Mission" },
  { key: "strategy", label: "Strategy" },
  { key: "focus", label: "Focus" },
];

export default function MissionInvestmentThesisExact() {
  const [active, setActive] = useState("about");

  const tabBase =
    "flex cursor-pointer select-none justify-center whitespace-nowrap px-[1.375rem] py-3.5 bevel bevel-2 w-[8.8125rem] md:w-auto";
  const tabActive = "bg-purple-light text-gray-night-green";
  const tabInactive = "hover:text-gray-tradfi-silver";

  const panelVisible =
    "flex flex-col overflow-hidden transition-all bevel md:flex-row-reverse";
  const panelHidden =
    "flex-col overflow-hidden transition-all bevel md:flex-row-reverse pointer-events-none hidden opacity-0";

  return (
    <section>
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id="our-mission-&-investment-thesis"
              className="font-blender text-xl uppercase text-green-dark"
            >
              Our mission & Investment thesis
            </h2>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>

        <section>
          <div className="overflow-x-auto scrollbar-none">
            <div className="bevel inline-flex bg-gray-defi-graphite scrollbar-none bevel-2 md:gap-4 md:bg-transparent">
              {TABS.map((t) => (
                <div
                  key={t.key}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActive(t.key)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActive(t.key);
                  }}
                  className={[
                    tabBase,
                    active === t.key ? tabActive : tabInactive,
                  ].join(" ")}
                >
                  {t.label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 flex md:h-[23.75rem] md:flex-row">
            <div
              className={[
                active === "about" ? panelVisible : panelHidden,
                "bg-purple-light",
              ].join(" ")}
            >
              <div className="h-[15.75rem] bevel md:h-full md:flex-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Wintermute Ventures, the strategic investment arm of Wintermute, focuses on early-stage startups across the crypto value chain, having backed over 100 companies and protocols since 2020. Unlike traditional VCs, Wintermute Ventures exclusively invests its own funds, ensuring full alignment with founders and a focus on long-term growth."
                  width="1152"
                  height="1152"
                  decoding="async"
                  data-nimg="1"
                  className="h-full w-full object-cover"
                  style={{ color: "transparent" }}
                  src="/images/Secondary-About.svg"
                />
              </div>
              <div className="flex flex-col justify-end px-4 py-6 md:flex-1 md:px-6 text-gray-night-green">
                <div className="text-sm md:text-xl">
                  Wintermute Ventures, the strategic investment arm of
                  Wintermute, focuses on early-stage startups across the crypto
                  value chain, having backed over 100 companies and protocols
                  since 2020. Unlike traditional VCs, Wintermute Ventures
                  exclusively invests its own funds, ensuring full alignment
                  with founders and a focus on long-term growth.
                </div>
              </div>
            </div>

            <div
              className={[
                active === "vision" ? panelVisible : panelHidden,
                "bg-blue-dark",
              ].join(" ")}
            >
              <div className="h-[15.75rem] bevel md:h-full md:flex-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Wintermute Ventures envisions a truly diverse and decentralized future, where no single entity or ecosystem dominates. Instead, various trading platforms and financial applications coexist harmoniously, powered by blockchain technology. Our ultimate goal is to transform the world of finance by leveraging crypto and blockchain to drive innovation."
                  width="1152"
                  height="1152"
                  decoding="async"
                  data-nimg="1"
                  className="h-full w-full object-cover"
                  style={{ color: "transparent" }}
                  src="/images/Secondary-Vision.svg"
                />
              </div>
              <div className="flex flex-col justify-end px-4 py-6 md:flex-1 md:px-6 text-gray-night-green">
                <div className="text-sm md:text-xl">
                  Wintermute Ventures envisions a truly diverse and
                  decentralized future, where no single entity or ecosystem
                  dominates. Instead, various trading platforms and financial
                  applications coexist harmoniously, powered by blockchain
                  technology. Our ultimate goal is to transform the world of
                  finance by leveraging crypto and blockchain to drive
                  innovation.
                </div>
              </div>
            </div>

            <div
              className={[
                active === "mission" ? panelVisible : panelHidden,
                "bg-purple-light",
              ].join(" ")}
            >
              <div className="h-[15.75rem] bevel md:h-full md:flex-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Wintermute Ventures is more than an investor – we’re a strategic partner, providing capital, expertise, and hands-on support to help founders shape the future of finance. As one of the largest crypto trading firms across centralized and decentralized venues, we help founders achieve their goals by sharing our successes and lessons learned along the way."
                  width="4800"
                  height="1152"
                  decoding="async"
                  data-nimg="1"
                  className="h-full w-full object-cover"
                  style={{ color: "transparent" }}
                  srcSet="/images/image_1.png 1x"
                  src="/images/image_1.png"
                />
              </div>
              <div className="flex flex-col justify-end px-4 py-6 md:flex-1 md:px-6 text-gray-night-green">
                <div className="text-sm md:text-xl">
                  Wintermute Ventures is more than an investor – we’re a
                  strategic partner, providing capital, expertise, and hands-on
                  support to help founders shape the future of finance. As one
                  of the largest crypto trading firms across centralized and
                  decentralized venues, we help founders achieve their goals by
                  sharing our successes and lessons learned along the way.
                </div>
              </div>
            </div>

            <div
              className={[
                active === "strategy" ? panelVisible : panelHidden,
                "bg-purple-dark",
              ].join(" ")}
            >
              <div className="h-[15.75rem] bevel md:h-full md:flex-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="We take a flexible approach to ownership targets, aligning with our belief in decentralized ownership. We invest $0.5M to $5M+ across Seed and Series A stages globally, focusing where we can add the most value in the long term. By exclusively using proprietary funds, we maintain the freedom to invest at our own pace and seize the best opportunities in all markets."
                  width="1152"
                  height="1152"
                  decoding="async"
                  data-nimg="1"
                  className="h-full w-full object-cover"
                  style={{ color: "transparent" }}
                  src="/images/Secondary-Strategy-1.svg"
                />
              </div>
              <div className="flex flex-col justify-end px-4 py-6 md:flex-1 md:px-6 text-gray-night-green">
                <div className="text-sm md:text-xl">
                  We take a flexible approach to ownership targets, aligning
                  with our belief in decentralized ownership. We invest $0.5M to
                  $5M+ across Seed and Series A stages globally, focusing where
                  we can add the most value in the long term. By exclusively
                  using proprietary funds, we maintain the freedom to invest at
                  our own pace and seize the best opportunities in all markets.
                </div>
              </div>
            </div>

            <div
              className={[
                active === "focus" ? panelVisible : panelHidden,
                "bg-blue-dark",
              ].join(" ")}
            >
              <div className="h-[15.75rem] bevel md:h-full md:flex-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="We focus on investing in companies and protocols at the intersection of financial and enterprise technology – aiming to expand crypto adoption. Our portfolio includes DeFi and CeFi solutions, such as self-custody, exchanges, tokenization, and stablecoins; as well as blockchain infrastructure like cybersecurity, data oracles, compliance, and analytics."
                  width="1152"
                  height="1152"
                  decoding="async"
                  data-nimg="1"
                  className="h-full w-full object-cover"
                  style={{ color: "transparent" }}
                  src="/images/Secondary-Focus-1.svg"
                />
              </div>
              <div className="flex flex-col justify-end px-4 py-6 md:flex-1 md:px-6 text-gray-night-green">
                <div className="text-sm md:text-xl">
                  We focus on investing in companies and protocols at the
                  intersection of financial and enterprise technology – aiming
                  to expand crypto adoption. Our portfolio includes DeFi and
                  CeFi solutions, such as self-custody, exchanges, tokenization,
                  and stablecoins; as well as blockchain infrastructure like
                  cybersecurity, data oracles, compliance, and analytics.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
