"use client";

import React, { useState } from "react";
import { DotMatrixText } from "../common/DotMatrixText";

export default function Statistics({
  stats,
  bgColor = "bg-gray-defi-shadow",
  lighterTheme = false,
  dotColor = "#E9EEE9",
  compact = false,
}) {
  const [active, setActive] = useState(-1);

  return (
    <section className={`${bgColor} text-green-500`} style={{ width: "full" }}>
      <div
        className={
          compact
            ? "container grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6 lg:py-14"
            : "flex flex-col gap-2xl container py-block lg:flex-row lg:py-0"
        }
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`group stat flex min-w-0 flex-col ${compact ? "items-start overflow-hidden" : "lg:flex-1 lg:py-16"}`}
            style={{
              ["--stat-width"]: s.width ? `${s.width}px` : undefined,
              "--active-color": s.activeDotColor,
            }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(-1)}
          >
            <DotMatrixText
              text={s.stat}
              active={active === i}
              dotSize={1}
              dotSpacing={2}
              dotColor={dotColor}
              activeDotColor={s.activeDotColor}
              fontSizeMobile={compact ? 46 : 56}
              fontSizeDesktop={compact ? 58 : 97}
            />
            <div
              className={`mt-4 max-w-full text-sm uppercase leading-snug tracking-wide transition-all duration-1000 lg:text-base ${compact ? "text-[0.72rem] lg:text-[0.78rem]" : "text-xl"} ${!lighterTheme ? "text-white" : "text-black"}`}
              style={{
                color: active === i ? "var(--active-color)" : undefined,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
