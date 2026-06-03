"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import BevelNavButton, {
  BEVEL_NAV_BUTTON_CLASS,
} from "@/src/components/sections/v2/common/BevelNavButton";

function TestimonialTitle({ parts }) {
  return (
    <h2 className="text-2xl text-gray-off-white lg:text-3xl">
      {parts.map((part, index) =>
        part.highlight ? (
          <span key={index} className="text-green-dark">
            {part.text}
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        ),
      )}
    </h2>
  );
}

function TestimonialSlide({ item }) {
  const imageSrc = item.image?.src?.startsWith("/")
    ? item.image.src
    : `/${item.image?.src ?? ""}`.replace(/^\/\//, "/");

  return (
    <div className="flex w-full shrink-0 flex-col items-stretch gap-8 lg:flex-row-reverse lg:items-center lg:gap-16">
      <div className="min-w-0 lg:flex-1">
        {item.image?.src ? (
          <Image
            alt={item.image.alt ?? ""}
            src={imageSrc}
            width={item.image.width ?? 1100}
            height={item.image.height ?? 880}
            draggable={false}
            className="bevel h-auto w-full max-w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : null}
      </div>
      <div className="flex min-w-0 flex-col gap-xl text-gray-off-white lg:flex-1 lg:gap-2xl">
        <div className="flex flex-col gap-6 lg:gap-md">
          <TestimonialTitle parts={item.titleParts} />
          <p className="text-base leading-relaxed text-gray-tradfi-silver lg:text-lg">
            {item.quote}
          </p>
        </div>
        <div>
          <p className="font-blender text-xl font-medium uppercase">{item.name}</p>
          <p className="font-blender uppercase text-gray-defi-ash">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * “Hear from our team” testimonial carousel (careers page).
 */
export default function CareersTeamTestimonialsSection({
  title = "Hear from our team",
  headingId = "hear-from-our-team",
  dividerClassName = "border-[#006623]",
  headingClassName = "font-blender text-xl uppercase text-green-dark",
  items = [],
  className = "bg-[#070B09] text-gray-off-white",
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = items
    .slice()
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
  const total = slides.length;

  const goToIndex = useCallback(
    (index) => {
      if (total === 0) {
        return;
      }
      setActiveIndex(((index % total) + total) % total);
    },
    [total],
  );

  const handlePrev = () => goToIndex(activeIndex - 1);
  const handleNext = () => goToIndex(activeIndex + 1);

  const navButtonClass = `${BEVEL_NAV_BUTTON_CLASS} text-gray-night-green`;

  if (total === 0) {
    return null;
  }

  return (
    <section className={className}>
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2 id={headingId} className={headingClassName}>
              {title}
            </h2>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>

        <div className="flex flex-col gap-6 md:gap-8 lg:flex-col-reverse lg:gap-4xl">
          <div className="flex justify-between gap-3xl lg:items-center">
            <div className="relative flex h-8 flex-1 items-center lg:hidden">
              <div className="flex font-blender text-xl font-medium uppercase text-gray-defi-ash">
                <span className="min-w-md">{activeIndex + 1}</span>
                <span className="min-w-sm">/</span>
                <span className="min-w-md">{total}</span>
              </div>
            </div>
            <div className="flex gap-md">
              <BevelNavButton
                direction="left"
                ariaLabel="Previous testimonial"
                onClick={handlePrev}
                className={navButtonClass}
              />
              <BevelNavButton
                direction="right"
                ariaLabel="Next testimonial"
                onClick={handleNext}
                className={navButtonClass}
              />
            </div>
            <div className="hidden items-center gap-[0.125rem] lg:flex">
              {slides.map((slide, index) => (
                <button
                  key={slide.name}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => goToIndex(index)}
                  className={`h-[0.25rem] bg-green-dark transition-all ${index === activeIndex ? "w-sm" : "w-sm opacity-30"
                    }`}
                />
              ))}
            </div>
          </div>

          <div className="overflow-hidden" aria-live="polite">
            <div
              className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.name} className="w-full shrink-0">
                  <TestimonialSlide item={slide} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
