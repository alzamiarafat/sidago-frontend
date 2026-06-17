"use client";

import React, { useState } from "react";
import { DotMatrixText } from "../common/DotMatrixText";
import "@/src/components/sections/v2/homepage/statistics.css";

export default function Statistics({
  stats,
  bgColor = "bg-gray-defi-shadow",
  lighterTheme = false,
  dotColor = "#E9EEE9",
  compact = false,
  fontSizeMobile,
  fontSizeDesktop,
  labelClassName,
  /** "start" (default) aligns copy with the container edge; use "center" to center each stat */
  align = "start",
}) {
  const [active, setActive] = useState(-1);
  const itemCount = stats?.length ?? 0;
  const dense = !compact && itemCount > 5;
  const isStartAlign = align === "start";
  const useEvenLayout =
    compact || dense || itemCount === 4 || itemCount === 5 || itemCount === 6;
  const matrixFontSizeMobile =
    fontSizeMobile ?? (compact || dense ? 60 : 68);
  const matrixFontSizeDesktop =
    fontSizeDesktop ?? (compact ? 84 : dense ? 76 : 115);
  const defaultLabelClass = compact || dense
    ? "text-[0.72rem] leading-snug tracking-wide lg:text-[0.78rem]"
    : "text-sm leading-snug tracking-wide text-xl lg:text-base";
  const hasSubCopy = stats?.some((s) => s.sub);
  const itemAlignClass = isStartAlign
    ? "items-start text-left"
    : "items-center text-center";
  const suffixFontSizeMobile = Math.round(matrixFontSizeMobile * 0.67);
  const suffixFontSizeDesktop = Math.round(matrixFontSizeDesktop * 0.69);

  const evenColsClass = dense
    ? "statistics-even--cols-6"
    : itemCount === 4
      ? "statistics-even--cols-4"
      : "statistics-even--cols-5";

  const containerClassName = useEvenLayout
    ? `statistics-even container ${evenColsClass}${
        !isStartAlign ? " statistics-even--center" : ""
      } ${compact || dense ? "py-12 lg:py-14" : "py-10 lg:py-12"}`
    : "container flex flex-col gap-2xl py-10 sm:py-11 lg:flex-row lg:justify-between lg:py-12";

  return (
    <section className={`${bgColor} text-green-500`}>
      <div className={containerClassName}>
        {stats.map((s, i) => {
          const labelLines =
            s.labelLines ??
            (Array.isArray(s.label) ? s.label : [s.label].filter(Boolean));
          const statKey = s.sortOrder ?? labelLines.join("-") ?? i;

          return (
            <div
              key={statKey}
              className={`group stat flex min-w-0 flex-col ${itemAlignClass} ${
                useEvenLayout ? "w-full" : "lg:flex-1 lg:py-16"
              }`}
              style={{
                ["--stat-width"]:
                  useEvenLayout || !s.width ? undefined : `${s.width}px`,
                "--active-color": s.activeDotColor,
              }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(-1)}
            >
              <div
                className={`flex w-full items-end gap-0.5 ${
                  isStartAlign ? "justify-start" : "justify-center"
                }`}
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
                {s.statSuffix ? (
                  <DotMatrixText
                    text={s.statSuffix}
                    active={active === i}
                    dotSize={1}
                    dotSpacing={2}
                    dotColor={dotColor}
                    activeDotColor={s.activeDotColor}
                    fontSizeMobile={suffixFontSizeMobile}
                    fontSizeDesktop={suffixFontSizeDesktop}
                  />
                ) : null}
              </div>
              <div
                className={`mt-4 max-w-full uppercase transition-all duration-1000 ${
                  labelClassName ?? defaultLabelClass
                } ${!lighterTheme ? "text-white" : "text-black"} ${
                  hasSubCopy ? "min-h-[2.75em] leading-tight" : ""
                }`}
                style={{
                  color: active === i ? "var(--active-color)" : undefined,
                }}
              >
                {labelLines.length > 1 ? (
                  labelLines.map((line, lineIndex) => (
                    <span
                      key={lineIndex}
                      className={`block ${isStartAlign || hasSubCopy ? "" : "whitespace-nowrap"}`}
                    >
                      {line}
                    </span>
                  ))
                ) : (
                  <span
                    className={`block ${isStartAlign || hasSubCopy ? "" : "whitespace-nowrap"}`}
                  >
                    {labelLines[0]}
                  </span>
                )}
              </div>
              {s.sub ? (
                <p
                  className={`mt-3 max-w-full text-base normal-case leading-snug ${
                    !lighterTheme ? "text-white/70" : "text-black/70"
                  } ${hasSubCopy ? "min-h-[4.2em]" : ""}`}
                >
                  {s.sub}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
