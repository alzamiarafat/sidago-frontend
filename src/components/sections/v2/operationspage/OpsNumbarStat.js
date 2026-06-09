"use client";

import { useState } from "react";
import { DotMatrixText } from "@/src/components/sections/v2/common/DotMatrixText";

const DOT_IDLE = "#000000";
const BRAND_GREEN = "#168B50";

export default function OpsNumbarStat({ item }) {
  const [hovered, setHovered] = useState(false);
  const [matrixReady, setMatrixReady] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    setMatrixReady(true);
  };

  return (
    <div
      className="ops-nstat"
      onMouseEnter={handleEnter}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="ops-nstat-matrix">
        {matrixReady ? (
          <>
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
          </>
        ) : (
          <div className="ops-nstat-static" aria-hidden="true">
            <span className="ops-nstat-static-big">{item.big}</span>
            <span className="ops-nstat-static-suffix">{item.suffix}</span>
          </div>
        )}
      </div>
      <div className="ops-nstat-label">{item.label}</div>
      <div className="ops-nstat-sub">{item.sub}</div>
    </div>
  );
}
