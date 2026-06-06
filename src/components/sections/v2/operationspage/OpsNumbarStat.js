"use client";

import { useState } from "react";
import { DotMatrixText } from "@/src/components/sections/v2/common/DotMatrixText";

const DOT_IDLE = "#4F4E49";
const BRAND_GREEN = "#168B50";

export default function OpsNumbarStat({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="ops-nstat ops-reveal"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="ops-nstat-matrix">
        <DotMatrixText
          text={item.big}
          active={hovered}
          dotSize={2}
          dotSpacing={2}
          dotColor={DOT_IDLE}
          activeDotColor={BRAND_GREEN}
          fontSizeMobile={42}
          fontSizeDesktop={60}
          fontFamily="blender, blender Fallback, sans-serif"
        />
        <DotMatrixText
          text={item.suffix}
          active={hovered}
          dotSize={2}
          dotSpacing={2}
          dotColor={DOT_IDLE}
          activeDotColor={BRAND_GREEN}
          fontSizeMobile={24}
          fontSizeDesktop={34}
          fontFamily="blender, blender Fallback, sans-serif"
        />
      </div>
      <div className="ops-nstat-label font-blender">{item.label}</div>
      <div className="ops-nstat-sub">{item.sub}</div>
    </div>
  );
}
