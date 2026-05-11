"use client";

import { useReducedMotion } from "framer-motion";
import { FiBook, FiFileText, FiMinus, FiPlus, FiShield } from "react-icons/fi";

/** All-corner chamfer — “trading engine” style silhouette */
const CLIP =
  "[clip-path:polygon(18px_0,calc(100%-18px)_0,100%_18px,100%_calc(100%-18px),calc(100%-18px)_100%,18px_100%,0_calc(100%-18px),0_18px)]";

const complianceIcons = [FiFileText, FiShield, FiBook];

export default function ComplianceStandardsFlipCard({ card, index }) {
  const reduce = useReducedMotion();
  const Icon = complianceIcons[index] ?? FiShield;

  if (reduce) {
    return (
      <article
        className={`flex min-h-[280px] flex-col justify-between bg-[#323935] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.42)] ${CLIP} md:min-h-[300px]`}
      >
        <div className="flex items-start justify-between">
          <Icon className="h-8 w-8 shrink-0 text-[#6ee7b7]" aria-hidden />
          <FiPlus className="h-5 w-5 text-[#6ee7b7]" aria-hidden />
        </div>
        <div>
          <h3 className="font-blender text-xl leading-snug tracking-tight text-white md:text-2xl">
            {card.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-gray-tradfi-silver md:text-base">
            {card.body}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article
      tabIndex={0}
      aria-label={`${card.title}. Focus or hover to flip for full description.`}
      className="group relative min-h-[280px] cursor-default outline-none [perspective:1400px] md:min-h-[300px]"
    >
      <div className="relative h-full min-h-[inherit]">
        <div
          className="relative h-full min-h-[280px] transition-[transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)] md:min-h-[300px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front — dark chamfered */}
          <div
            className={`absolute inset-0 flex flex-col justify-between bg-[#323935] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.45)] ${CLIP} [backface-visibility:hidden] [-webkit-backface-visibility:hidden]`}
          >
            <div className="flex items-start justify-between">
              <Icon className="h-8 w-8 shrink-0 text-[#6ee7b7]" aria-hidden />
              <span className="flex h-9 w-9 items-center justify-center text-[#6ee7b7]">
                <FiPlus className="h-5 w-5" strokeWidth={2} aria-hidden />
              </span>
            </div>
            <h3 className="pr-4 font-blender text-xl leading-snug tracking-tight text-white md:text-2xl">
              {card.title}
            </h3>
          </div>

          {/* Back — mint, full copy */}
          <div
            className={`absolute inset-0 flex flex-col bg-[#8af5d0] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.35)] ${CLIP} [backface-visibility:hidden] [transform:rotateY(180deg)]`}
          >
            <div className="flex shrink-0 justify-end">
              <span className="flex h-9 w-9 items-center justify-center text-black/80">
                <FiMinus className="h-5 w-5" strokeWidth={2} aria-hidden />
              </span>
            </div>
            <div className="flex min-h-0 flex-1 flex-col justify-center">
              <h3 className="font-blender text-xl leading-snug tracking-tight text-black md:text-2xl">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-black/80 md:text-base">
                {card.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
