"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function AvailablePartner({
  bgColor = "bg-gray-off-white",
  titleColor = "text-black",
}) {
  const trackRef = useRef(null);
  const speedRef = useRef(0.5);

  const isDarkSurface =
    typeof titleColor === "string" &&
    (titleColor.includes("text-white") || titleColor.includes("white"));

  const sectionBg = isDarkSurface ? "bg-transparent" : bgColor;

  /** Legacy WordPress / site client marks (raster, typically on white) */
  const logos = [
    {
      src: "https://sidago.com/wp-content/uploads/2016/01/our-client2.jpg",
      alt: "Client logo",
    },
    {
      src: "https://sidago.com/wp-content/uploads/2016/01/our-client4.jpg",
      alt: "Client logo",
    },
    {
      src: "https://sidago.com/wp-content/uploads/2016/01/our-client5.jpg",
      alt: "Client logo",
    },
    {
      src: "https://sidago.com/wp-content/uploads/2016/01/our-client6.jpg",
      alt: "Client logo",
    },
    {
      src: "https://sidago.com/wp-content/uploads/2016/01/our-client11.jpg",
      alt: "Client logo",
    },
    {
      src: "https://sidago.com/images/daiichi-sanko.png",
      alt: "Daiichi-Sankyo logo",
    },
    {
      src: "https://sidago.com/wp-content/uploads/2016/01/our-client1.jpg",
      alt: "Client logo",
    },
  ];

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

  /** Smaller cards; contain = no side crop; padding avoids hard edge clipping */
  const cardClass = isDarkSurface
    ? "inline-flex h-[5.35rem] w-[9rem] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/[0.12] bg-white p-2 shadow-[0_6px_22px_rgba(0,0,0,0.35)] sm:h-[5.65rem] sm:w-[9.75rem] sm:p-2.5 md:h-[5.9rem] md:w-[10.5rem] lg:h-24 lg:w-[11.25rem]"
    : "inline-flex h-[5.35rem] w-[9rem] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-black/[0.08] bg-white p-2 shadow-sm sm:h-[5.65rem] sm:w-[9.75rem] sm:p-2.5 md:h-[5.9rem] md:w-[10.5rem] lg:h-24 lg:w-[11.25rem]";

  const logoClass =
    "max-h-full max-w-full h-auto w-auto object-contain object-center opacity-[0.98] transition-opacity duration-200 hover:opacity-100";

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
              : "rounded-2xl border border-black/[0.06] bg-black/[0.03] px-2 py-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] md:px-3 md:py-8"
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
              className="flex w-max items-stretch gap-x-4 gap-y-3 pl-1 will-change-transform sm:gap-x-5 md:gap-x-5 md:pl-2 lg:gap-x-6"
            >
              {duplicatedLogos.map((item, i) => (
                <span key={`${item.src}-${i}`} className={cardClass}>
                <Image
                  src={item.src}
                  alt={i < logos.length ? item.alt : ""}
                  aria-hidden={i >= logos.length}
                  priority={i < logos.length}
                  width={400}
                  height={240}
                  className={logoClass}
                  referrerPolicy="no-referrer-when-downgrade"
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
