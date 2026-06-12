"use client";

import { useReducedMotion } from "framer-motion";
import { useState } from "react";

function ExpandIcon() {
  return (
    <span
      className="flex h-7 w-7 shrink-0 items-center justify-center font-blender text-lg leading-none text-green-mid"
      aria-hidden
    >
      +
    </span>
  );
}

function CollapseIcon() {
  return (
    <span
      className="flex h-7 w-7 shrink-0 items-center justify-center font-blender text-lg leading-none text-gray-night-green/60"
      aria-hidden
    >
      −
    </span>
  );
}

export default function OpsVerticalFlipCard({ vertical }) {
  const reduce = useReducedMotion();
  const [flipped, setFlipped] = useState(false);

  if (reduce) {
    return (
      <div className="ops-card-shell ops-reveal">
        <article className="bevel ops-vcard ops-vcard--front ops-vcard--static overflow-hidden bg-gray-defi-graphite">
          <div className="flex h-full flex-col justify-between p-6">
            <div className="ops-vcard-icon">
              <svg viewBox="0 0 24 24" aria-hidden>
                {vertical.icon}
              </svg>
            </div>
            <div>
              <h3 className="ops-vcard-name">{vertical.name}</h3>
              <p className="ops-vcard-desc mt-4">{vertical.desc}</p>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="ops-card-shell ops-reveal">
      <button
        type="button"
        className={`flipper card ops-vcard-flip-btn relative flex h-full min-h-[12.5rem] w-full shrink-0 justify-center overflow-hidden text-left outline-none transition-all md:min-h-[13.5rem] ${
          flipped ? "flipper--flipped" : ""
        }`}
        aria-pressed={flipped}
        aria-label={`${vertical.name}. Hover or focus to view details.`}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onFocus={() => setFlipped(true)}
        onBlur={() => setFlipped(false)}
      >
        <div className="front bevel ops-vcard ops-vcard--front bg-gray-defi-graphite">
          <div className="relative flex h-full flex-col justify-between p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="ops-vcard-icon">
                <svg viewBox="0 0 24 24" aria-hidden>
                  {vertical.icon}
                </svg>
              </div>
              <ExpandIcon />
            </div>
            <h3 className="ops-vcard-name pr-2">{vertical.name}</h3>
          </div>
        </div>

        <div className="back bevel ops-vcard ops-vcard--back">
          <div className="flex h-full flex-col p-4">
            <div className="flex shrink-0 justify-end">
              <CollapseIcon />
            </div>
            <div className="flex min-h-0 flex-1 flex-col justify-center gap-3">
              <h3 className="ops-vcard-name ops-vcard-name--back">{vertical.name}</h3>
              <p className="ops-vcard-desc ops-vcard-desc--back">{vertical.desc}</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
