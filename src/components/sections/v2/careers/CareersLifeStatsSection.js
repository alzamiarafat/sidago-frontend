"use client";

import { useState } from "react";
import { DotMatrixText } from "@/src/components/sections/v2/common/DotMatrixText";

function LifeStatRow({
  item,
  index,
  active,
  onActivate,
  onDeactivate,
  fontSizeMobile,
  fontSizeDesktop,
}) {
  const label =
    typeof item.label === "string"
      ? item.label
      : (item.labelLines ?? []).join(" ");

  return (
    <div className="flex flex-col gap-md">
      {index > 0 ? <hr className="border-current opacity-30" /> : null}
      <div
        className="stat group flex flex-col-reverse justify-between gap-xl lg:flex-row lg:items-center"
        onMouseEnter={onActivate}
        onMouseLeave={onDeactivate}
        onFocus={onActivate}
        onBlur={onDeactivate}
      >
        <div
          className="flex shrink-0 justify-start"
          style={{
            ["--stat-width"]: item.width ? `${item.width}px` : undefined,
            ["--active-color"]: item.activeDotColor,
          }}
        >
          <DotMatrixText
            text={item.stat}
            active={active}
            dotSize={1}
            dotSpacing={2}
            dotColor={item.dotColor ?? "#E9EEE9"}
            activeDotColor={item.activeDotColor ?? "#E7512F"}
            fontSizeMobile={item.fontSizeMobile ?? fontSizeMobile}
            fontSizeDesktop={item.fontSizeDesktop ?? fontSizeDesktop}
          />
        </div>
        <div
          className="font-blender text-xl uppercase text-gray-off-white transition-all duration-1000 lg:max-w-[50%] lg:text-right"
          style={{
            color: active ? item.activeDotColor : undefined,
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

/**
 * Vertical life/culture stats with animated dot-matrix numbers (careers page).
 */
export default function CareersLifeStatsSection({
  items = [],
  className = "bg-gray-defi-shadow text-gray-off-white",
  fontSizeMobile = 36,
  fontSizeDesktop = 48,
}) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const orderedItems = items
    .slice()
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));

  if (orderedItems.length === 0) {
    return null;
  }

  return (
    <section className={className}>
      <div className="flex flex-col gap-2xl">
        {orderedItems.map((item, index) => (
          <LifeStatRow
            key={item.stat + String(item.sortOrder ?? index)}
            item={item}
            index={index}
            active={activeIndex === index}
            fontSizeMobile={fontSizeMobile}
            fontSizeDesktop={fontSizeDesktop}
            onActivate={() => setActiveIndex(index)}
            onDeactivate={() => setActiveIndex(-1)}
          />
        ))}
      </div>
    </section>
  );
}
