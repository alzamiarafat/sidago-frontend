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
  const dense = !compact && stats?.length > 5;

  return (
    <section className={`${bgColor} text-green-500`} style={{ width: "full" }}>
      <div
        className={
          compact
            ? "container grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6 lg:py-14"
            : dense
              ? "container grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-7 lg:py-14"
              : "container flex flex-col gap-2xl py-block lg:flex-row lg:py-0"
        }
      >
        {stats.map((s, i) => {
          const isHomeStat = !compact && !dense;
          const matrixIdleColor = s.matrixDotColor ?? dotColor;
          const matrixActiveColor = s.activeDotColor ?? matrixIdleColor;
          const labelTint = s.labelColor;

          return (
            <div
              key={s.label}
              className={`group stat flex min-w-0 flex-col ${
                compact || dense
                  ? "items-start overflow-hidden"
                  : "w-[220px] shrink-0 lg:flex-1 lg:py-block"
              }`}
              style={{
                ["--stat-width"]: s.width ? `${s.width}px` : undefined,
                "--active-color": matrixActiveColor,
              }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(-1)}
            >
              <DotMatrixText
                text={s.stat}
                active={active === i}
                dotSize={1}
                dotSpacing={2}
                dotColor={matrixIdleColor}
                activeDotColor={matrixActiveColor}
                fontSizeMobile={compact || dense ? 52 : 56}
                fontSizeDesktop={compact || dense ? 72 : dense ? 64 : 97}
                displayWidth={isHomeStat ? 220 : undefined}
                displayHeight={isHomeStat ? 97 : undefined}
              />
              <div
                className={
                  compact || dense
                    ? `mt-4 max-w-full font-blender text-[0.72rem] uppercase leading-snug tracking-[0.16em] transition-all duration-1000 lg:text-[0.78rem] lg:tracking-[0.18em] ${
                        !lighterTheme ? "text-gray-tradfi-frost" : "text-black/60"
                      }`
                    : `mt-4 max-w-[220px] font-blender text-xl uppercase leading-tight tracking-wide transition-all duration-1000 lg:text-sm ${
                        !lighterTheme && !labelTint ? "text-gray-off-white" : ""
                      } ${lighterTheme && !labelTint ? "text-black" : ""}`
                }
                style={
                  labelTint
                    ? { color: labelTint }
                    : isHomeStat
                      ? undefined
                      : {
                          color: active === i ? "var(--active-color)" : undefined,
                        }
                }
              >
                {s.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
