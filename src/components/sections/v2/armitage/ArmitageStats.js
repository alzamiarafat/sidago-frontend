"use client";

import { useState } from "react";
import { DotMatrixText } from "../common/DotMatrixText";

const DOT_COLORS = ["#0dcfcf", "#3c85dd", "#7fb2f1", "#66ff9a"];

export default function ArmitageStats({ stats }) {
  const [active, setActive] = useState(-1);

  if (!stats?.length) {
    return null;
  }

  return (
    <div className="armitage-stats">
      <section className="armitage-container armitage-stats__inner" id="stats">
        <h2 className="armitage-stats__title">Built by Sidago</h2>
        <p className="armitage-stats__intro">
          From OTC desks to onchain lending, Sidago has been active across every
          corner of crypto
        </p>

        <div className="armitage-stats__group">
          <div className="armitage-stats__grid">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className="armitage-stats__item"
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(-1)}
              >
                <div className="armitage-stats__matrix">
                  <DotMatrixText
                    text={item.stat}
                    active={active === index}
                    dotSize={1}
                    dotSpacing={2}
                    dotColor="#5c6b6b"
                    activeDotColor={item.activeDotColor ?? DOT_COLORS[index % DOT_COLORS.length]}
                    fontSizeMobile={80}
                    fontSizeDesktop={96}
                  />
                </div>
                <div className="armitage-stats__label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
