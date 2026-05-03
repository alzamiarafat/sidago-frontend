"use client";

import { useState } from "react";
import { DotMatrixText } from "../common/DotMatrixText";

function MetricCard({ metric, index, active, setActive }) {
  return (
    <div
      className="min-w-0 py-10 lg:flex-1 lg:px-4 lg:py-16 xl:px-6"
      onMouseEnter={() => setActive(index)}
      onMouseLeave={() => setActive(-1)}
    >
      <div
        className="group stat flex min-w-0 flex-col"
        style={{
          ["--stat-width"]: metric.width ? `${metric.width}px` : undefined,
          "--active-color": metric.activeDotColor,
        }}
      >
        <DotMatrixText
          text={metric.stat}
          active={active === index}
          dotSize={1}
          dotSpacing={2}
          dotColor="#111111"
          activeDotColor={metric.activeDotColor}
          fontSizeMobile={46}
          fontSizeDesktop={97}
        />
        <div
          className="mt-5 max-w-full font-blender text-sm uppercase leading-snug tracking-wide transition-all duration-1000 lg:text-base"
          style={{
            color: active === index ? "var(--active-color)" : "#111111",
          }}
        >
          {metric.label}
        </div>
        <p className="mt-7 max-w-[18rem] text-sm leading-relaxed text-[#5F6660] lg:text-base">
          {metric.description}
        </p>
      </div>
    </div>
  );
}

export default function OperationsMetrics({ metrics }) {
  const [active, setActive] = useState(-1);

  return (
    <div className="grid gap-0 border-t border-black/10 md:grid-cols-2 lg:flex lg:flex-row lg:border-b xl:grid xl:grid-cols-4">
      {metrics.map((metric, index) => (
        <MetricCard
          key={metric.label}
          metric={metric}
          index={index}
          active={active}
          setActive={setActive}
        />
      ))}
    </div>
  );
}
