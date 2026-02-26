// EventsDecoration.jsx
"use client";
import { useMemo } from "react";

export default function EventsDecoration() {
  const dots = useMemo(
    () =>
      Array.from({ length: 20 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        scale: 0.5 + Math.random(),
      })),
    [],
  );

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-pink-400 opacity-50"
          style={{
            left: dot.left,
            top: dot.top,
            transform: `scale(${dot.scale})`,
          }}
        />
      ))}

      <div className="absolute -right-8 -top-8 w-48 h-48 border border-pink-400/30 rounded-full" />
      <div className="absolute -right-4 -top-4 w-32 h-32 border border-pink-400/20 rounded-full" />
    </div>
  );
}
