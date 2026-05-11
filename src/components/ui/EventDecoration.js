// EventsDecoration.jsx — subtle grid motif (homepage cards)
"use client";

import { useMemo } from "react";

export default function EventDecoration() {
  const dots = useMemo(
    () =>
      Array.from({ length: 18 }).map(() => ({
        left: `${8 + Math.random() * 84}%`,
        top: `${8 + Math.random() * 84}%`,
        scale: 0.65 + Math.random() * 0.65,
      })),
    [],
  );

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#E7512F]/70 shadow-[0_0_6px_rgba(231,81,47,0.55)]"
          style={{
            left: dot.left,
            top: dot.top,
            transform: `scale(${dot.scale})`,
          }}
        />
      ))}
      <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/15" />
      <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border border-white/12" />
    </div>
  );
}
