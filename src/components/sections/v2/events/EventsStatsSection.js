"use client";

import { useState } from "react";
import { DotMatrixText } from "@/src/components/sections/v2/common/DotMatrixText";

const DOT_IDLE = "#5A615E";
const DOT_ACTIVE_DEFAULT = "#E9EEE9";

function EventsStatRow({
  stat,
  active,
  onActivate,
  onDeactivate,
  fontSizeMobile,
  fontSizeDesktop,
}) {
  const activeDotColor = stat.activeDotColor ?? DOT_ACTIVE_DEFAULT;

  return (
    <div
      className="stat group flex flex-row items-center justify-between gap-lg py-6 lg:py-8"
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
    >
      <div
        className="flex shrink-0 justify-start"
        style={{
          width: stat.width ? `${stat.width}px` : undefined,
        }}
      >
        <DotMatrixText
          text={stat.value}
          active={active}
          dotSize={1}
          dotSpacing={2}
          dotColor={stat.dotColor ?? DOT_IDLE}
          activeDotColor={activeDotColor}
          fontSizeMobile={fontSizeMobile}
          fontSizeDesktop={fontSizeDesktop}
        />
      </div>
      <div className="font-blender text-base uppercase tracking-wide text-gray-off-white lg:max-w-[50%] lg:text-lg lg:text-right">
        {stat.label}
      </div>
    </div>
  );
}

export default function EventsStatsSection({
  stats,
  fontSizeMobile = 32,
  fontSizeDesktop = 44,
}) {
  const [activeIndex, setActiveIndex] = useState(-1);

  if (!stats?.length) {
    return null;
  }

  return (
    <div className="border-y border-[#595C5A] text-gray-off-white">
      {stats.map((stat, index) => (
        <div key={stat.id}>
          {index > 0 ? <hr className="!border-[#595C5A]" /> : null}
          <EventsStatRow
            stat={stat}
            active={activeIndex === index}
            fontSizeMobile={fontSizeMobile}
            fontSizeDesktop={fontSizeDesktop}
            onActivate={() => setActiveIndex(index)}
            onDeactivate={() => setActiveIndex(-1)}
          />
        </div>
      ))}
    </div>
  );
}
