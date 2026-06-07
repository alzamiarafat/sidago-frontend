"use client";

import { useState } from "react";
import { DotMatrixText } from "@/src/components/sections/v2/common/DotMatrixText";

const DOT_IDLE = "#000000";
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
          dotSize={1}
          dotSpacing={2}
          dotColor={DOT_IDLE}
          activeDotColor={BRAND_GREEN}
          fontSizeMobile={56}
          fontSizeDesktop={80}
        />
        <DotMatrixText
          text={item.suffix}
          active={hovered}
          dotSize={1}
          dotSpacing={2}
          dotColor={DOT_IDLE}
          activeDotColor={BRAND_GREEN}
          fontSizeMobile={32}
          fontSizeDesktop={46}
        />
      </div>
      <div className="ops-nstat-label">{item.label}</div>
      <div className="ops-nstat-sub">{item.sub}</div>
    </div>
  );
}
