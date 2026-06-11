"use client";

import { useEffect, useState } from "react";

const CONNECTOR_LINES = [
  { x: 60, y: 30, color: "rgba(22, 139, 80, 0.2)" },
  { x: 440, y: 30, color: "rgba(43, 111, 207, 0.2)" },
  { x: 455, y: 340, color: "rgba(45, 158, 82, 0.2)" },
  { x: 60, y: 340, color: "rgba(127, 90, 240, 0.2)" },
  { x: 480, y: 187, color: "rgba(255, 255, 255, 0.12)" },
];

const REGION_TAGS = [
  { label: "South Asia", dot: "#168b50", className: "ops-reach-rtag--1" },
  { label: "Europe", dot: "#2b6fcf", className: "ops-reach-rtag--2" },
  { label: "SE Asia", dot: "#2d9e52", className: "ops-reach-rtag--3" },
  { label: "Middle East", dot: "#7f5af0", className: "ops-reach-rtag--4" },
  { label: "Americas", dot: "#f4f6f5", className: "ops-reach-rtag--5" },
];

function NodeAnchor({ style, children }) {
  return (
    <div className="ops-reach-node-anchor" style={style}>
      {children}
    </div>
  );
}

export default function OpsReachGlobe() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const delay = window.setTimeout(() => {
      const target = 40;
      const duration = 1400;
      let start = null;

      const tick = (timestamp) => {
        if (start === null) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    }, 400);

    return () => window.clearTimeout(delay);
  }, []);

  return (
    <div className="ops-reach-globe-box">
      <div className="ops-reach-grid-bg" aria-hidden />

      <div className="ops-reach-orbit-stage" aria-hidden>
        <div className="ops-reach-ring ops-reach-ring--1" />
        <div className="ops-reach-ring ops-reach-ring--2" />
        <div className="ops-reach-ring ops-reach-ring--3" />
        <div className="ops-reach-ring ops-reach-ring--4" />

        <div className="ops-reach-spin ops-reach-spin--a">
          <div className="ops-reach-spin-inner">
            <NodeAnchor style={{ top: 0, left: "50%" }}>
              <div className="ops-reach-node ops-reach-node--lg" />
            </NodeAnchor>
            <NodeAnchor style={{ top: "50%", left: "100%" }}>
              <div className="ops-reach-node ops-reach-node--md" />
            </NodeAnchor>
            <NodeAnchor style={{ top: "100%", left: "50%" }}>
              <div className="ops-reach-node ops-reach-node--sm" />
            </NodeAnchor>
            <NodeAnchor style={{ top: "50%", left: 0 }}>
              <div className="ops-reach-node ops-reach-node--sm" />
            </NodeAnchor>
          </div>
        </div>

        <div className="ops-reach-spin ops-reach-spin--b">
          <div className="ops-reach-spin-inner ops-reach-spin-inner--reverse">
            <NodeAnchor style={{ top: 0, left: "50%" }}>
              <div className="ops-reach-node ops-reach-node--blue" />
            </NodeAnchor>
            <NodeAnchor style={{ top: "25%", left: "100%" }}>
              <div className="ops-reach-node ops-reach-node--green" />
            </NodeAnchor>
            <NodeAnchor style={{ top: "100%", left: "35%" }}>
              <div className="ops-reach-node ops-reach-node--sm" />
            </NodeAnchor>
            <NodeAnchor style={{ top: "65%", left: 0 }}>
              <div className="ops-reach-node ops-reach-node--md" />
            </NodeAnchor>
            <NodeAnchor style={{ top: "100%", left: "65%" }}>
              <div className="ops-reach-node ops-reach-node--pu" />
            </NodeAnchor>
          </div>
        </div>

        <div className="ops-reach-spin ops-reach-spin--c">
          <div className="ops-reach-spin-inner">
            <NodeAnchor style={{ top: 0, left: "50%" }}>
              <div className="ops-reach-node ops-reach-node--sm" />
            </NodeAnchor>
            <NodeAnchor style={{ top: "100%", left: "50%" }}>
              <div className="ops-reach-node ops-reach-node--accent-fade" />
            </NodeAnchor>
          </div>
        </div>

        <div className="ops-reach-center">
          <div className="ops-reach-center-num">
            <span>{count}</span>
            <span className="ops-reach-center-plus">+</span>
          </div>
          <div className="ops-reach-center-label">Countries</div>
        </div>
      </div>

      <svg
        className="ops-reach-lines"
        viewBox="0 0 500 375"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        {CONNECTOR_LINES.map((line) => (
          <line
            key={`${line.x}-${line.y}`}
            x1={250}
            y1={187}
            x2={line.x}
            y2={line.y}
            stroke={line.color}
            strokeWidth={1}
            strokeDasharray="4 4"
          />
        ))}
      </svg>

      {REGION_TAGS.map((tag) => (
        <div key={tag.label} className={`ops-reach-rtag ${tag.className}`}>
          <span className="ops-reach-rtag-dot" style={{ background: tag.dot }} />
          {tag.label}
        </div>
      ))}
    </div>
  );
}
