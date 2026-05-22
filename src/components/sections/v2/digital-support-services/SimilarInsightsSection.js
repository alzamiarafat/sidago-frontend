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

function LoadMoreIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className="h-6 w-6"
      aria-hidden
    >
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="0.7"
        d="M26.07 17.512h8.92l-4.46 4.503z"
      />
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="0.7"
        d="M30.53 22.016V9.147 20.496 4 10.46 9.147v2.574M14.92 22.016H6l4.46-4.504z"
      />
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="0.7"
        d="M10.46 17.512V30.38l10.035 5.147 10.036-5.147v-2.573M26.07 17.512h8.92l-4.46 4.503z"
      />
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="0.7"
        d="M30.53 22.016V9.147 20.496 4 10.46 9.147v2.574"
      />
    </svg>
  );
}

function InsightCard({ card, desktopColumns = 4 }) {
  const cardWidthStyle = {
    "--link-card-desktop-width": `calc(100% / ${desktopColumns} + 1rem)`,
  };

  return (
    <div
      className="w-[calc(100%-1rem)] shrink-0 pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem]"
      style={cardWidthStyle}
    >
      <Link
        href={card.href}
        style={{ position: "relative" }}
        className="group/interactive flex h-full flex-col bg-gray-tradfi-dust transition-all bevel lg:group-hover/cards:[&:not(:hover)]:opacity-70"
      >
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
              <div className="font-blender text-xs uppercase text-gray-night-green">
                {card.category}
              </div>
              <div className="ellipsis-3 max-h-[3lh] text-lg text-gray-night-green">
                {card.title}
              </div>
              <div className="ellipsis-4 max-h-[4lh] text-sm text-gray-defi-ash">
                {card.description}
              </div>
            </div>
            <div className="font-blender text-xs uppercase text-gray-night-green">
              <span>{card.date}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function SimilarInsightsSection({
  content = similarInsightsContent,
}) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const desktopColumns = content.desktopColumns ?? 4;
  const cards = content.cards ?? [];
  const total = cards.length;
  const mobileVisibleCards = mobileExpanded ? cards : cards.slice(0, 3);

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

  return (
    <section>
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id={content.headingId}
              className="font-blender text-xl uppercase text-gray-night-green"
            >
              {content.heading}
            </h2>
          </div>
          <hr className="border-gray-tradfi-steel" />
        </div>

        <section className="text-gray-night-green">
          <div
            className="flex flex-col gap-2xl lg:flex-col-reverse lg:gap-4xl"
            style={{ clipPath: "inset(-100rem -100rem -100rem -100rem)" }}
          >
            {/* Mobile: stacked grid + load more */}
            <div className="flex flex-col gap-2xl lg:hidden">
              <div className="group/cards grid grid-cols-1 gap-xl">
                {mobileVisibleCards.map((card) => (
                  <InsightCard
                    key={card.href}
                    card={card}
                    desktopColumns={desktopColumns}
                  />
                ))}
              </div>
              {!mobileExpanded && cards.length > 3 ? (
                <button
                  type="button"
                  onClick={() => setMobileExpanded(true)}
                  className="flex w-full justify-between bg-green-dark p-md font-medium text-gray-night-green bevel bevel-[0.25rem]"
                >
                  Load more
                  <LoadMoreIcon />
                </button>
              ) : null}
            </div>

            {/* Desktop / tablet: carousel controls */}
            <div className="hidden flex-col gap-2xl lg:flex lg:flex-col-reverse lg:gap-4xl">
              <div className="flex justify-between gap-3xl lg:items-center">
                <div className="relative flex flex-1 gap-md lg:hidden">
                  <div className="flex w-full items-center justify-between text-lg">
                    <div className="flex font-blender text-xl font-medium uppercase text-gray-defi-ash">
                      <span className="min-w-md">{activeIndex + 1}</span>
                      <span className="min-w-sm">/</span>
                      <span className="min-w-md">{total}</span>
                    </div>
                  </div>
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
                      className={`ml-[0.125rem] h-[0.25rem] w-sm transition-all bg-green-dark first:ml-0 ${
                        index === activeIndex ? "" : "opacity-30"
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
