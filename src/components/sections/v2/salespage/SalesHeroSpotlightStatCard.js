"use client";

import { useState } from "react";
import CursorSpotlightShell from "@/src/components/sections/v2/common/CursorSpotlightShell";
import { DotMatrixText } from "@/src/components/sections/v2/common/DotMatrixText";

/**
 * Hero stat tile: dotted matrix figures (same visual language as Statistics) + cursor spotlight.
 */
export default function SalesHeroSpotlightStatCard({ item, reduce }) {
  const [active, setActive] = useState(false);
  const statText = `${item.value}${item.suffix}`;

  return (
    <CursorSpotlightShell
      reduce={reduce}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="rounded-[1.75rem] border border-white/[0.07] bg-white/[0.05] px-4 py-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-shadow duration-300 hover:border-white/[0.12] hover:shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:px-5"
    >
      <div className="min-w-0">
        <DotMatrixText
          text={statText}
          active={active}
          dotSize={1}
          dotSpacing={2}
          dotColor="#8a9e94"
          activeDotColor={item.activeDotColor ?? "#5cf0a5"}
          fontSizeMobile={26}
          fontSizeDesktop={40}
        />
      </div>
      <p className="mt-2 text-sm leading-6 text-[#bad0c4]">{item.label}</p>
    </CursorSpotlightShell>
  );
}
