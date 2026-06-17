"use client";

import { useCallback, useEffect, useState } from "react";
import BrandLogoPreview from "@/src/components/sections/v2/brand/BrandLogoPreview";
import "@/src/components/sections/v2/brand/brand-logo-carousel.css";

const SLIDE_DURATION_MS = 4000;

const SLIDES = [
  {
    id: "horizontal",
    label: "Horizontal",
    caption:
      "Use the horizontal lockup where space allows, keeping clear space equal to the height of the logo mark.",
  },
  {
    id: "vertical",
    label: "Vertical",
    caption:
      "Use the vertical lockup in tighter layouts, keeping clear space equal to the height of the logo mark.",
  },
  {
    id: "symbol",
    label: "Symbol",
    caption:
      "Use the symbol only when full lockups aren't viable, with equal clear space on all sides.",
  },
  {
    id: "color",
    label: "Color",
    caption:
      "A) Default brand orange. B) Brand orange on white. C/D) Use only as a last resort when A/B aren't viable.",
  },
];

function CarouselArrow({ direction = "next", onClick }) {
  return (
    <button
      type="button"
      aria-label={direction === "next" ? "Next" : "Previous"}
      onClick={onClick}
      className="group/interactive gap-md inline-flex items-center justify-between font-medium disabled:opacity-50 bevel bevel-[0.25rem] p-[0.625rem] hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100 text-gray-night-green bg-green-dark"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        className={`h-lg w-lg ${direction === "prev" ? "rotate-180" : ""}`}
        aria-hidden
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}

function ProgressBar({ active, cycleKey }) {
  return (
    <div
      className={`relative h-[0.125rem] w-full shrink-0 bg-gray-defi-ash bg-opacity-30 ${
        active ? "" : "opacity-0"
      }`}
    >
      {active ? (
        <div
          key={cycleKey}
          className="brand-logo-carousel__progress absolute h-full bg-green-dark"
        />
      ) : null}
    </div>
  );
}

function LogoSlideCard({ slide }) {
  return (
    <div
      className={`brand-logo-carousel__card bevel bg-gray-defi-ash ${
        slide.id === "color" ? "brand-logo-carousel__card--color" : ""
      }`}
    >
      <BrandLogoPreview variant={slide.id} />
      <div className="brand-logo-carousel__card-caption">{slide.caption}</div>
    </div>
  );
}

function DesktopMenuItem({ slide, index, activeIndex, cycleKey, onSelect }) {
  const isActive = index === activeIndex;

  return (
    <button
      type="button"
      className="flex w-full flex-col gap-md text-left text-gray-off-white transition-colors hover:text-gray-defi-ash"
      onClick={() => onSelect(index)}
      aria-current={isActive ? "true" : undefined}
    >
      <div className="text-xl">{slide.label}</div>
      <ProgressBar active={isActive} cycleKey={cycleKey} />
    </button>
  );
}

export default function BrandLogoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);

  const goTo = useCallback((index) => {
    const nextIndex = (index + SLIDES.length) % SLIDES.length;
    setActiveIndex(nextIndex);
    setCycleKey((key) => key + 1);
  }, []);

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDES.length);
      setCycleKey((key) => key + 1);
    }, SLIDE_DURATION_MS);

    return () => window.clearInterval(timer);
  }, [activeIndex]);

  return (
    <div className="flex flex-col justify-between gap-2xl overflow-hidden text-gray-off-white lg:flex-row lg:gap-[5rem] xl:gap-[10.75rem]">
      <div className="flex justify-between gap-3xl lg:items-center lg:hidden">
        <div className="brand-logo-carousel__mobile-label">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash ${
                index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              onClick={() => goTo(index)}
              aria-hidden={index !== activeIndex}
              tabIndex={index === activeIndex ? 0 : -1}
            >
              <div className="flex w-full items-center justify-between text-lg">
                <div>{slide.label}</div>
                <div className="flex font-blender text-sm font-medium uppercase text-gray-defi-ash">
                  <span className="min-w-md">{index + 1}</span>
                  <span className="min-w-sm">/</span>
                  <span className="min-w-md">{SLIDES.length}</span>
                </div>
              </div>
              <ProgressBar active cycleKey={cycleKey} />
            </button>
          ))}
        </div>

        <div className="flex shrink-0 gap-md">
          <CarouselArrow direction="prev" onClick={goPrev} />
          <CarouselArrow direction="next" onClick={goNext} />
        </div>
      </div>

      <div className="brand-logo-carousel__desktop-nav">
        {SLIDES.map((slide, index) => (
          <DesktopMenuItem
            key={slide.id}
            slide={slide}
            index={index}
            activeIndex={activeIndex}
            cycleKey={cycleKey}
            onSelect={goTo}
          />
        ))}
      </div>

      <div className="brand-logo-carousel__panel">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`brand-logo-carousel__slide ${
              index === activeIndex ? "" : "pointer-events-none opacity-0"
            }`}
            style={{ left: `calc(-100% * ${index})` }}
            aria-hidden={index !== activeIndex}
          >
            <LogoSlideCard slide={slide} />
          </div>
        ))}
      </div>
    </div>
  );
}
