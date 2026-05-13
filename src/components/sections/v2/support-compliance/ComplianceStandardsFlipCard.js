"use client";

import { useReducedMotion } from "framer-motion";
import { FiBook, FiFileText, FiMinus, FiPlus, FiShield } from "react-icons/fi";

const GLASS =
  "rounded-3xl bg-white/[0.055] shadow-[0_28px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl";
const GLASS_BACK =
  "rounded-3xl bg-white/[0.09] shadow-[0_28px_90px_rgba(0,0,0,0.4)] backdrop-blur-2xl";

const complianceIcons = [FiFileText, FiShield, FiBook];

export default function ComplianceStandardsFlipCard({ card, index }) {
  const reduce = useReducedMotion();
  const Icon = complianceIcons[index] ?? FiShield;

  if (reduce) {
    return (
      <article
        className={`flex min-h-[280px] flex-col justify-between p-8 md:min-h-[300px] ${GLASS}`}
      >
        <div className="flex items-start justify-between">
          <Icon className="h-8 w-8 shrink-0 text-emerald-300/90" aria-hidden />
          <FiPlus className="h-5 w-5 text-emerald-300/80" aria-hidden />
        </div>
        <div>
          <h3 className="font-saans text-xl leading-snug tracking-tight text-white md:text-2xl">
            {card.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
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
          {/* Front — frosted */}
          <div
            className={`absolute inset-0 flex flex-col justify-between p-8 ${GLASS} [backface-visibility:hidden] [-webkit-backface-visibility:hidden]`}
          >
            <div className="flex items-start justify-between">
              <Icon className="h-8 w-8 shrink-0 text-emerald-300/90" aria-hidden />
              <span className="flex h-9 w-9 items-center justify-center text-emerald-300/80">
                <FiPlus className="h-5 w-5" strokeWidth={2} aria-hidden />
              </span>
            </div>
            <h3 className="pr-4 font-saans text-xl leading-snug tracking-tight text-white md:text-2xl">
              {card.title}
            </h3>
          </div>

          {/* Back — lighter glass, full copy */}
          <div
            className={`absolute inset-0 flex flex-col p-8 ${GLASS_BACK} [backface-visibility:hidden] [transform:rotateY(180deg)]`}
          >
            <div className="flex shrink-0 justify-end">
              <span className="flex h-9 w-9 items-center justify-center text-white/70">
                <FiMinus className="h-5 w-5" strokeWidth={2} aria-hidden />
              </span>
            </div>
            <div className="flex min-h-0 flex-1 flex-col justify-center">
              <h3 className="font-saans text-xl leading-snug tracking-tight text-white md:text-2xl">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
                {card.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
