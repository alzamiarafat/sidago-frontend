"use client";

import React, { useState } from "react";
import { DotMatrixText } from "../common/DotMatrixText";

export default function Statistics({
  stats,
  bgColor = "bg-gray-defi-shadow",
  lighterTheme = false,
  dotColor = "#E9EEE9",
  compact = false,
  fontSizeMobile,
  fontSizeDesktop,
  labelClassName,
  /** "center" (default) or "start" for left-aligned stat blocks */
  align = "center",
}) {
  const [active, setActive] = useState(-1);
  const dense = !compact && stats?.length > 5;
  const matrixFontSizeMobile =
    fontSizeMobile ?? (compact || dense ? 60 : 68);
  const matrixFontSizeDesktop =
    fontSizeDesktop ?? (compact ? 84 : dense ? 76 : 115);
  const defaultLabelClass = compact || dense
    ? "text-[0.72rem] leading-snug tracking-wide lg:text-[0.78rem]"
    : "text-sm leading-snug tracking-wide text-xl lg:text-base";
  const isStartAlign = align === "start";
  const itemAlignClass = isStartAlign
    ? "items-start text-left"
    : "items-center text-center";

  return (
    <section className={`${bgColor} text-green-500`} style={{ width: "full" }}>
      <div
        className={
          compact
            ? "container grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6 lg:py-14"
            : dense
              ? "container grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-7 lg:py-14"
              : "container flex flex-col gap-2xl py-10 sm:py-11 lg:flex-row lg:py-12"
        }
      >
        {stats.map((s, i) => {
          const labelLines =
            s.labelLines ??
            (Array.isArray(s.label) ? s.label : [s.label].filter(Boolean));
          const statKey = s.sortOrder ?? labelLines.join("-") ?? i;

          return (
          <div
            key={statKey}
            className={`group stat flex min-w-0 flex-col ${itemAlignClass} ${
              compact || dense
                ? isStartAlign
                  ? ""
                  : "overflow-hidden"
                : "lg:flex-1 lg:py-16"
            }`}
            style={{
              ["--stat-width"]: s.width ? `${s.width}px` : undefined,
              "--active-color": s.activeDotColor,
            }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(-1)}
          >
            <div
              className={`flex w-full ${isStartAlign ? "justify-start" : "justify-center"}`}
            >
              <DotMatrixText
                text={s.stat}
                active={active === i}
                dotSize={1}
                dotSpacing={2}
                dotColor={dotColor}
                activeDotColor={s.activeDotColor}
                fontSizeMobile={matrixFontSizeMobile}
                fontSizeDesktop={matrixFontSizeDesktop}
              />
            </div>
            <div
              className={`mt-4 max-w-full uppercase transition-all duration-1000 ${
                labelClassName ?? defaultLabelClass
              } ${!lighterTheme ? "text-white" : "text-black"}`}
              style={{
                color: active === i ? "var(--active-color)" : undefined,
              }}
            >
              {labelLines.length > 1 ? (
                labelLines.map((line, lineIndex) => (
                  <span
                    key={lineIndex}
                    className={`block ${isStartAlign ? "whitespace-nowrap" : ""}`}
                  >
                    {line}
                  </span>
                ))
              ) : (
                <span className="block whitespace-nowrap">{labelLines[0]}</span>
              )}
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}
