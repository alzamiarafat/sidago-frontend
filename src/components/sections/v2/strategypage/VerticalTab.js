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
  const activeTab = tabs.find((tab) => tab.key === activeKey) ?? tabs[0];

  const tabBase =
    "group relative flex w-full shrink-0 cursor-pointer select-none items-center justify-start overflow-hidden px-4 py-3 text-left transition md:min-h-[4.75rem] md:rounded-none";
  const tabActive =
    "bg-purple-light text-gray-night-green md:border-l-[0.2rem] md:border-[#e7512f]";
  const tabInactive =
    "bg-gray-defi-graphite text-gray-tradfi-steel hover:text-gray-off-white";

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

        <section className="flex flex-col gap-6 md:h-[23.75rem] md:flex-row md:items-stretch">
          <div className="md:h-full md:w-[18rem] md:shrink-0">
            <div className="overflow-x-auto pb-2 md:h-full md:overflow-hidden md:pb-0">
              <div
                role="tablist"
                aria-label={`${title} tabs`}
                aria-orientation="vertical"
                className="flex min-w-max max-w-full gap-3 md:h-full md:min-w-0 md:flex-col md:gap-2 md:overflow-y-scroll md:pr-2"
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    id={`${tab.key}-tab`}
                    type="button"
                    role="tab"
                    aria-selected={activeKey === tab.key}
                    aria-controls={`${tab.key}-panel`}
                    tabIndex={activeKey === tab.key ? 0 : -1}
                    onClick={() => setActive(tab.key)}
                    onKeyDown={(e) => {
                      const currentIndex = tabs.findIndex(
                        (item) => item.key === activeKey,
                      );

                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActive(tab.key);
                      }

                      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                        e.preventDefault();
                        setActive(
                          tabs[(currentIndex + 1) % tabs.length]?.key ?? tab.key,
                        );
                      }

                      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                        e.preventDefault();
                        setActive(
                          tabs[(currentIndex - 1 + tabs.length) % tabs.length]
                            ?.key ?? tab.key,
                        );
                      }
                    }}
                    className={[
                      tabBase,
                      activeKey === tab.key ? tabActive : tabInactive,
                      "bevel bevel-2 md:w-full",
                    ].join(" ")}
                  >
                    <span className="font-blender text-sm uppercase leading-none md:text-base">
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-w-0 flex-1">
            <div
              id={`${activeTab.key}-panel`}
              role="tabpanel"
              aria-labelledby={`${activeTab.key}-tab`}
              className={[
                "flex flex-col overflow-hidden bevel md:h-full md:flex-row-reverse",
                activeTab.backgroundClassName,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="h-[15.75rem] md:h-full md:flex-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={activeTab.imageAlt}
                  width={activeTab.imageWidth ?? 1152}
                  height={activeTab.imageHeight ?? 1152}
                  decoding="async"
                  className="h-full w-full object-cover"
                  style={{ color: "transparent" }}
                  srcSet={activeTab.imageSrcSet}
                  src={activeTab.imageSrc}
                />
              </div>
              <div
                className={[
                  "flex flex-col justify-end px-4 py-6 md:flex-1 md:px-6",
                  activeTab.contentClassName ?? "text-gray-night-green",
                ].join(" ")}
              >
                <div className="text-sm md:text-xl">{activeTab.content}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
