"use client";

import { useState } from "react";

const challengeTabs = [
  {
    key: "liquidity",
    label: "Liquidity",
    panelClassName: "bg-blue-light",
    imageSrc: "/images/Defi-Tabs-Liquidity.svg",
    imageAlt:
      "The diversity of blockchain networks, while largely advantageous, can also divide resources and negatively impact user experience. We actively research and develop innovative solutions to bridge this gap, not only between chains but also between the centralized and decentralized worlds.",
    content:
      "The diversity of blockchain networks, while largely advantageous, can also divide resources and negatively impact user experience. We actively research and develop innovative solutions to bridge this gap, not only between chains but also between the centralized and decentralized worlds.",
  },
  {
    key: "mev",
    label: "MEV",
    panelClassName: "bg-pink-light",
    imageSrc:
      "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/17212510/Defi-Tabs-MEV.svg",
    imageAlt:
      "Protocol design choices can create unintended consequences for users, particularly around MEV (Maximal Extractable Value). We study how protocol implementations and updates affect user outcomes, focusing on simplifying complex mechanisms and aligning incentives to foster broader DeFi adoption.",
    content:
      "Protocol design choices can create unintended consequences for users, particularly around MEV (Maximal Extractable Value). We study how protocol implementations and updates affect user outcomes, focusing on simplifying complex mechanisms and aligning incentives to foster broader DeFi adoption.",
  },
  {
    key: "centralization",
    label: "Centralization",
    panelClassName: "bg-purple-light",
    imageSrc:
      "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/17212510/Defi-Tabs-Centralization.svg",
    imageAlt:
      "As DeFi scales, balancing decentralization with security and efficiency becomes increasingly complex. We focus on developing solutions that maintain decentralization principles while supporting institutional-grade infrastructure, promoting a more resilient and accessible ecosystem for all participants.",
    content:
      "As DeFi scales, balancing decentralization with security and efficiency becomes increasingly complex. We focus on developing solutions that maintain decentralization principles while supporting institutional-grade infrastructure, promoting a more resilient and accessible ecosystem for all participants.",
  },
  {
    key: "defi-adoption",
    label: "DeFi adoption",
    panelClassName: "bg-orange-light",
    imageSrc:
      "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/17212510/Defi-Tabs-DeFi-adoption.svg",
    imageAlt:
      "The perception of DeFi is often limited to speculative trading or privacy-focused applications. We demonstrate how DeFi's innovations in investment access, capital efficiency, and financial services can drive meaningful participation from both institutions and individuals.",
    content:
      "The perception of DeFi is often limited to speculative trading or privacy-focused applications. We demonstrate how DeFi's innovations in investment access, capital efficiency, and financial services can drive meaningful participation from both institutions and individuals.",
  },
];

export function BuildChallenge() {
  const [activeTab, setActiveTab] = useState(challengeTabs[0].key);
  const activeItem =
    challengeTabs.find((item) => item.key === activeTab) ?? challengeTabs[0];

  return (
    <section>
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id="building-solutions-for-core-challenges-in-defi"
              className="font-blender text-xl uppercase text-green-dark"
            >
              Building solutions for core challenges in DeFi
            </h2>
            <div className="text-gray-off-white">
              Wintermute&apos;s unique position defines how we view DeFi&apos;s
              biggest challenges and where we focus on improving its systems.
            </div>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>
        <section>
          <div className="overflow-x-auto scrollbar-none">
            <div className="inline-flex bevel bevel-2 bg-gray-defi-graphite scrollbar-none md:gap-4 md:bg-transparent">
              {challengeTabs.map((item) => {
                const isActive = item.key === activeTab;

                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setActiveTab(item.key)}
                    className={`flex w-[8.8125rem] cursor-pointer select-none justify-center whitespace-nowrap px-[1.375rem] py-3.5 bevel bevel-2 transition-colors md:w-auto ${
                      isActive
                        ? `${item.panelClassName} text-gray-night-green`
                        : "hover:text-gray-tradfi-silver"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative mt-8 flex md:h-[23.75rem] md:flex-row">
            <div
              className={`flex flex-col overflow-hidden transition-all bevel md:flex-row-reverse ${activeItem.panelClassName}`}
            >
              <div className="h-[15.75rem] bevel md:h-full md:flex-1">
                <img
                  alt={activeItem.imageAlt}
                  width="1152"
                  height="1152"
                  decoding="async"
                  data-nimg="1"
                  className="h-full w-full object-cover"
                  style={{ color: "transparent" }}
                  src={activeItem.imageSrc}
                />
              </div>
              <div className="flex flex-col justify-end px-4 py-6 text-gray-night-green md:flex-1 md:px-6">
                <div className="text-sm md:text-xl">{activeItem.content}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
