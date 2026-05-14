"use client";

import { useCallback, useRef } from "react";
import { useReducedMotion } from "framer-motion";

function applySpotlightGradient(glowEl, x, y) {
  glowEl.style.background = `radial-gradient(420px circle at ${x}px ${y}px, rgba(122,168,255,0.22), rgba(92,240,165,0.14) 38%, rgba(255,122,89,0.1) 52%, transparent 68%)`;
}

/**
 * Cursor-following radial glow on hover (shared sales hero + dot-matrix stats).
 */
export default function CursorSpotlightShell({
  children,
  className = "",
  style,
  reduce: reduceProp,
  blendMode = "screen",
  onMouseEnter,
  onMouseLeave,
}) {
  const prefersReduced = useReducedMotion();
  const reduce = reduceProp !== undefined ? reduceProp : Boolean(prefersReduced);
  const glowRef = useRef(null);

  const onMouseMove = useCallback(
    (e) => {
      if (reduce) return;
      const glow = glowRef.current;
      if (!glow) return;
      const r = e.currentTarget.getBoundingClientRect();
      applySpotlightGradient(glow, e.clientX - r.left, e.clientY - r.top);
    },
    [reduce],
  );

  return (
    <div
      style={style}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group relative overflow-hidden ${className}`}
    >
      <div
        ref={glowRef}
        aria-hidden
        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out ${
          reduce ? "" : "group-hover:opacity-100"
        }`}
        style={
          reduce
            ? undefined
            : {
                mixBlendMode: blendMode,
              }
        }
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
