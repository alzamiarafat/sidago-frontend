"use client";

import { useState } from "react";

export default function VerticalTab({
  title = "Our mission & Investment thesis",
  titleId = "our-mission-&-investment-thesis",
  initialActiveKey,
  tabs = [],
}) {
  const [active, setActive] = useState(initialActiveKey ?? tabs[0]?.key ?? "");
  const activeKey = tabs.some((tab) => tab.key === active)
    ? active
    : tabs[0]?.key;

  const tabBase =
    "flex cursor-pointer select-none justify-center whitespace-nowrap px-[1.375rem] py-3.5 bevel bevel-2 w-[8.8125rem] md:w-auto";
  const tabActive = "bg-purple-light text-gray-night-green";
  const tabInactive = "hover:text-gray-tradfi-silver";

  const panelVisible =
    "flex flex-col overflow-hidden transition-all bevel md:flex-row-reverse";
  const panelHidden =
    "flex-col overflow-hidden transition-all bevel md:flex-row-reverse pointer-events-none hidden opacity-0";

  if (!tabs.length) {
    return null;
  }

  return (
    <section>
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id={titleId}
              className="font-blender text-xl uppercase text-green-dark"
            >
              {title}
            </h2>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>

        <section>
          <div className="overflow-x-auto scrollbar-none">
            <div className="bevel inline-flex bg-gray-defi-graphite scrollbar-none bevel-2 md:gap-4 md:bg-transparent">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  id={`${tab.key}-tab`}
                  type="button"
                  role="tab"
                  aria-selected={activeKey === tab.key}
                  aria-controls={`${tab.key}-panel`}
                  tabIndex={0}
                  onClick={() => setActive(tab.key)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActive(tab.key);
                    }
                  }}
                  className={[
                    tabBase,
                    activeKey === tab.key ? tabActive : tabInactive,
                  ].join(" ")}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative mt-8 flex md:h-[23.75rem] md:flex-row">
            {tabs.map((tab) => (
              <div
                key={tab.key}
                id={`${tab.key}-panel`}
                role="tabpanel"
                aria-labelledby={`${tab.key}-tab`}
                className={[
                  activeKey === tab.key ? panelVisible : panelHidden,
                  tab.backgroundClassName,
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="h-[15.75rem] bevel md:h-full md:flex-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={tab.imageAlt}
                    width={tab.imageWidth ?? 1152}
                    height={tab.imageHeight ?? 1152}
                    decoding="async"
                    className="h-full w-full object-cover"
                    style={{ color: "transparent" }}
                    srcSet={tab.imageSrcSet}
                    src={tab.imageSrc}
                  />
                </div>
                <div
                  className={[
                    "flex flex-col justify-end px-4 py-6 md:flex-1 md:px-6",
                    tab.contentClassName ?? "text-gray-night-green",
                  ].join(" ")}
                >
                  <div className="text-sm md:text-xl">{tab.content}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
