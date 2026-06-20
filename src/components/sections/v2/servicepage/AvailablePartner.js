"use client";

import { useEffect, useRef } from "react";
import { ecosystemPartnerLogos } from "./ecosystemPartnersData";

export default function AvailablePartner({
  bgColor = "bg-gray-off-white",
  titleColor = "text-black",
}) {
  const trackRef = useRef(null);
  const speedRef = useRef(0.5);

  const isDarkSurface =
    typeof titleColor === "string" &&
    (titleColor.includes("text-white") || titleColor.includes("white"));

  const sectionBg = bgColor;
  const logos = ecosystemPartnerLogos;
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return undefined;
    }

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      speedRef.current = 0;
      return undefined;
    }

    let animationFrame;
    let position = 0;

    const scroll = () => {
      position += speedRef.current;

      if (position >= track.scrollWidth / 2) {
        position = 0;
      }

      track.style.transform = `translate3d(-${position}px,0,0)`;
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const cardClass = isDarkSurface
    ? "inline-flex h-[6.125rem] w-[10.5rem] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/[0.12] bg-white px-3 py-2 shadow-[0_6px_22px_rgba(0,0,0,0.35)] sm:w-[11rem] md:w-[11.5rem] lg:w-48"
    : "inline-flex h-[6.125rem] w-[10.5rem] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-black/[0.08] bg-white px-3 py-2 shadow-sm sm:w-[11rem] md:w-[11.5rem] lg:w-48";

  return (
    <section
      className={`relative overflow-hidden ${sectionBg}`}
      aria-labelledby="available-partners-heading"
    >
      <div className="container relative z-[1] py-10 md:py-14 lg:py-16">
        <div className="max-w-2xl">
          <p className="font-blender text-sm uppercase tracking-[0.22em] text-green-dark">
            Ecosystem
          </p>
          <h2
            id="available-partners-heading"
            className={`mt-3 text-balance text-2xl font-medium leading-snug tracking-tight sm:text-[1.85rem] lg:text-3xl ${titleColor}`}
          >
            Also available <span className="block sm:inline">via partners</span>
          </h2>
          <div
            className={`mt-4 h-0.5 w-14 rounded-full ${
              isDarkSurface ? "bg-[#E7512F]/80" : "bg-green-dark/70"
            }`}
            aria-hidden
          />
          {isDarkSurface ? (
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
              Execution and post-trade workflows through venues you already
              trust—no extra chrome, just continuity.
            </p>
          ) : null}
        </div>

        <div
          className={`relative mt-8 md:mt-10 ${
            isDarkSurface
              ? "border-t border-white/[0.07] bg-transparent pt-8 md:pt-10"
              : "rounded-2xl border border-black/[0.06] bg-black/[0.03] py-6 pl-0 pr-2 shadow-[0_12px_40px_rgba(0,0,0,0.06)] md:py-8 md:pr-3"
          }`}
        >
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => {
              speedRef.current = 0;
            }}
            onMouseLeave={() => {
              speedRef.current = 0.5;
            }}
          >
            <div
              ref={trackRef}
              className="flex w-max items-stretch gap-x-4 gap-y-3 will-change-transform sm:gap-x-5 md:gap-x-5 lg:gap-x-6"
            >
              {duplicatedLogos.map((item, i) => (
                <span key={`${item.src}-${i}`} className={cardClass}>
                  {/* Native img at source dimensions — no upscale, no Next.js compression */}
                  <img
                    src={item.src}
                    alt={i < logos.length ? item.alt : ""}
                    aria-hidden={i >= logos.length}
                    width={item.width}
                    height={item.height}
                    loading={i < logos.length ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                    className="block object-contain object-center"
                    style={{
                      width: `${Math.min(167, item.width)}px`,
                      height: "auto",
                      maxHeight: `${Math.min(98, Math.round((item.height / item.width) * Math.min(167, item.width)))}px`,
                    }}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
