"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useRef, useState } from "react";
import { similarInsightsContent } from "@/src/components/sections/v2/digital-support-services/data";

function NavArrow({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className={`h-lg w-lg ${className}`}
      aria-hidden
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function InsightCardLink({ card, className, children }) {
  if (card.external) {
    return (
      <a
        href={card.href}
        target="_blank"
        rel="nofollow noopener noreferrer"
        referrerPolicy="no-referrer"
        style={{ position: "relative" }}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={card.href} style={{ position: "relative" }} className={className}>
      {children}
    </Link>
  );
}

function InsightCard({ card, desktopColumns = 4, wrapperClassName = "" }) {
  const cardWidthStyle = {
    "--link-card-desktop-width": `calc(100% / ${desktopColumns} + 1rem)`,
  };

  const linkClassName =
    "flex h-full flex-col bg-gray-defi-charcoal transition-all bevel lg:group-hover/cards:[&:not(:hover)]:opacity-70";

  return (
    <div
      className={`w-[calc(100%-1rem)] shrink-0 pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem] ${wrapperClassName}`.trim()}
      style={cardWidthStyle}
    >
      <InsightCardLink card={card} className={linkClassName}>
        <span className="sr-only">{card.srText}</span>
        <Image
          alt={card.imageAlt}
          src={card.imageSrc}
          width={800}
          height={600}
          className="aspect-[1.66] w-full object-cover bevel"
        />
        <div className="z-10 flex flex-1 justify-between p-xl">
          <div className="flex flex-col justify-between gap-xs">
            <div className="flex flex-col gap-xs">
              <div className="font-blender text-xs uppercase">{card.category}</div>
              <div className="ellipsis-3 max-h-[3lh] text-lg">{card.title}</div>
              <div className="ellipsis-4 max-h-[4lh] text-sm text-gray-tradfi-silver">
                {card.description}
              </div>
            </div>
            <div className="font-blender text-xs uppercase">
              <span>{card.date}</span>
            </div>
          </div>
        </div>
      </InsightCardLink>
    </div>
  );
}

function isLightSectionBg(color) {
  const normalized = (color || "").toLowerCase().replace(/\s/g, "");
  return (
    normalized === "#ffffff" ||
    normalized === "#fff" ||
    normalized === "white" ||
    normalized === ""
  );
}

export default function SimilarInsightsSection({
  content = similarInsightsContent,
  /** Passed from parent page — e.g. #070B09 (dark) or #FFFFFF (light). */
  sectionBgColor = "#FFFFFF",
}) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const desktopColumns = content.desktopColumns ?? 4;
  const cards = content.cards ?? [];
  const total = cards.length;
  const headingClassName =
    content.headingClassName ?? "font-blender text-xl uppercase text-green-dark";
  const dividerClassName = content.dividerClassName ?? "border-[#AB290D]";

  const cardWidthStyle = useMemo(
    () => ({
      "--link-card-desktop-width": `calc(100% / ${desktopColumns} + 1rem)`,
    }),
    [desktopColumns],
  );

  const scrollToIndex = useCallback(
    (index) => {
      const el = scrollRef.current;
      if (!el || total === 0) {
        return;
      }
      const next = ((index % total) + total) % total;
      const card = el.children[next];
      if (card) {
        card.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "nearest",
        });
      }
      setActiveIndex(next);
    },
    [total],
  );

  const handlePrev = () => scrollToIndex(activeIndex - 1);
  const handleNext = () => scrollToIndex(activeIndex + 1);

  const navButtonClass =
    "group/interactive inline-flex items-center justify-between gap-md bg-green-dark p-[0.625rem] font-medium text-gray-night-green bevel bevel-[0.25rem] hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100 disabled:opacity-50";

  const isLightBg = isLightSectionBg(sectionBgColor);
  const carouselTextClass = isLightBg
    ? "text-gray-night-green"
    : "text-gray-off-white";
  const mobileCounterClass = isLightBg
    ? "text-gray-defi-ash"
    : "text-gray-defi-ash";

  return (
    <section style={{ backgroundColor: sectionBgColor }}>
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2 id={content.headingId} className={headingClassName}>
              {content.heading}
            </h2>
          </div>
          <hr className={dividerClassName} />
        </div>

        <section className={carouselTextClass}>
          <div>
            <div
              className="flex flex-col gap-2xl lg:flex-col-reverse lg:gap-4xl"
              style={{ clipPath: "inset(-100rem -100rem -100rem -100rem)" }}
            >
              <div className="flex justify-between gap-3xl lg:items-center">
                <div className="relative flex flex-1 gap-md lg:hidden">
                  {cards.map((card, index) => (
                    <button
                      key={card.href}
                      type="button"
                      onClick={() => scrollToIndex(index)}
                      className={`absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash ${index === activeIndex ? "" : "opacity-0"
                        }`}
                    >
                      <div className="flex w-full items-center justify-between text-lg">
                        <div
                          className={`flex font-blender text-xl font-medium uppercase ${mobileCounterClass}`}
                        >
                          <span className="min-w-md">{index + 1}</span>
                          <span className="min-w-sm">/</span>
                          <span className="min-w-md">{total}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex gap-md">
                  <button
                    type="button"
                    aria-label="Previous"
                    onClick={handlePrev}
                    className={navButtonClass}
                  >
                    <NavArrow className="rotate-180" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next"
                    onClick={handleNext}
                    className={navButtonClass}
                  >
                    <NavArrow />
                  </button>
                </div>
                <div className="hidden lg:flex">
                  {cards.map((_, index) => (
                    <div
                      key={index}
                      className={`h-[0.25rem] transition-all bg-green-dark first:ml-0 ${index === activeIndex
                          ? "ml-[0.125rem] w-sm"
                          : "ml-[0.125rem] w-sm opacity-30"
                        }`}
                    />
                  ))}
                </div>
              </div>

              <div
                ref={scrollRef}
                className="group/cards relative -mx-[100rem] flex overflow-x-auto px-[100rem] scrollbar-none"
                style={cardWidthStyle}
              >
                {cards.map((card) => (
                  <InsightCard
                    key={card.href}
                    card={card}
                    desktopColumns={desktopColumns}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
