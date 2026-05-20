"use client";

import { Children, useEffect, useState } from "react";

const SLIDE_MASK = "linear-gradient(to top, transparent, white 4rem)";
const SLIDE_CLASS =
  "group/postBody scrollbar-minimal absolute inset-0 h-full w-full overflow-hidden transition-opacity duration-500 hover:text-gray-tradfi-silver";

export default function FeedPostCarousel({
  children,
  intervalMs = 5000,
}) {
  const slides = Children.toArray(children).filter(Boolean);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [slides.length, intervalMs]);

  return (
    <div className="relative h-[20rem] lg:h-[21.25rem]">
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            className={SLIDE_CLASS}
            style={{
              opacity: isActive ? 1 : 0,
              mask: SLIDE_MASK,
              pointerEvents: isActive ? "auto" : "none",
            }}
            aria-hidden={!isActive}
          >
            {slide}
          </div>
        );
      })}
    </div>
  );
}
