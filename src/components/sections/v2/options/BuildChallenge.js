"use client";

import { useState } from "react";

const fallbackTabs = [
  {
    key: "liquidity",
    label: "Liquidity",
    panelClassName: "bg-blue-light",
    imageSrc: "/images/Defi-Tabs-Liquidity.svg",
    imageAlt:
      "The diversity of blockchain networks can divide resources and negatively impact user experience.",
    content:
      "We actively research and develop solutions that bridge fragmented liquidity across chains and user environments.",
  },
  {
    key: "mev",
    label: "MEV",
    panelClassName: "bg-pink-light",
    imageSrc:
      "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/17212510/Defi-Tabs-MEV.svg",
    imageAlt:
      "Protocol design choices can create unintended consequences for users around MEV.",
    content:
      "We study protocol implementations and updates to simplify complexity and align incentives for broader adoption.",
  },
  {
    key: "centralization",
    label: "Centralization",
    panelClassName: "bg-purple-light",
    imageSrc:
      "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/17212510/Defi-Tabs-Centralization.svg",
    imageAlt:
      "Balancing decentralization with security and efficiency becomes increasingly complex as DeFi scales.",
    content:
      "We focus on resilient institutional-grade infrastructure without compromising decentralization principles.",
  },
];

export function BuildChallenge({
  title = "Building solutions for core challenges in DeFi",
  description = "Sidago's position in DeFi shapes where we focus to improve infrastructure, participation, and execution quality.",
  tabs = fallbackTabs,
}) {
  const items = tabs.length ? tabs : fallbackTabs;
  const [activeTab, setActiveTab] = useState(items[0].key);
  const activeItem = items.find((item) => item.key === activeTab) ?? items[0];

  return (
    <section>
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
          <div className="overflow-x-auto scrollbar-none">
            <div className="inline-flex bevel bevel-2 bg-gray-defi-graphite md:gap-4 md:bg-transparent">
              {items.map((item) => {
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
              className={`flex flex-col overflow-hidden bevel transition-all md:flex-row-reverse ${activeItem.panelClassName}`}
            >
              <div className="h-[15.75rem] bevel md:h-full md:flex-1">
                <img
                  alt={activeItem.imageAlt || activeItem.label}
                  className="h-full w-full object-cover"
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
