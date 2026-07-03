"use client";

import SidagoDotMatrixLogo from "@/src/components/sections/v2/common/SidagoDotMatrixLogo";

/**
 * Background dot-matrix Sidago mark for careers quote / life headings.
 */
export default function CareersSectionDotLogo({
  src,
  dotSpacing = 2,
  dotSize = 1,
  dotColor = "#E9EEE9",
  overlay = true,
}) {
  if (!src) return null;

  const renderWidth = overlay ? 256 : 176;
  const renderHeight = Math.round(renderWidth * (112 / 78));

  const logoClassName = overlay
    ? "opacity-35 max-w-[10rem] sm:max-w-[12rem] md:max-w-[14rem] lg:max-w-[16rem]"
    : "max-w-[8.5rem] sm:max-w-[9.5rem] md:max-w-[10.5rem] lg:max-w-[11rem]";

  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 z-0 flex w-[40%] items-center justify-end md:w-[32%] lg:w-[22%]">
      <SidagoDotMatrixLogo
        src={src}
        width={renderWidth}
        height={renderHeight}
        dotSpacing={dotSpacing}
        dotSize={dotSize}
        dotColor={dotColor}
        className={logoClassName}
      />
    </div>
  );
}
