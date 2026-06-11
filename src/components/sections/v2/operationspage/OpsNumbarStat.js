"use client";

import { useState } from "react";
import { DotMatrixText } from "@/src/components/sections/v2/common/DotMatrixText";

const DOT_IDLE = "#5A615E";
const OPS_GREEN = "#168B50";

export default function OpsNumbarStat({ item }) {
  const [hovered, setHovered] = useState(false);
  const activeDotColor = item.activeDotColor ?? OPS_GREEN;

  return (
    <div
      className="ops-nstat"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="ops-nstat-matrix">
        <DotMatrixText
          text={item.big}
          active={hovered}
          dotSize={1}
          dotSpacing={2}
          dotColor={DOT_IDLE}
          activeDotColor={activeDotColor}
          fontSizeMobile={48}
          fontSizeDesktop={64}
        />
        <DotMatrixText
          text={item.suffix}
          active={hovered}
          dotSize={1}
          dotSpacing={2}
          dotColor={DOT_IDLE}
          activeDotColor={activeDotColor}
          fontSizeMobile={32}
          fontSizeDesktop={44}
        />
      </div>
      <div className="ops-nstat-label font-blender text-base uppercase tracking-wide text-gray-off-white lg:text-lg">
        {item.label}
      </div>
      <div className="ops-nstat-sub text-base text-gray-off-white/70">{item.sub}</div>
    </div>
  );
}
