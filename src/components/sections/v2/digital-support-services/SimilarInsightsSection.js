"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import BevelNavButton, {
  BEVEL_NAV_BUTTON_CLASS,
} from "@/src/components/sections/v2/common/BevelNavButton";
import { BRAND_COLORS } from "@/src/data/brand-colors";
import { similarInsightsContent } from "@/src/components/sections/v2/digital-support-services/data";

function InsightCardLink({ card, className, style, children }) {
  const linkStyle = { position: "relative", ...style };

  if (card.external) {
    return (
      <a
        href={card.href}
        target="_blank"
        rel="nofollow noopener noreferrer"
        referrerPolicy="no-referrer"
        style={linkStyle}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={card.href} style={linkStyle} className={className}>
      {children}
    </Link>
  );
}

function InsightCard({
  card,
  desktopColumns = 4,
  wrapperClassName = "",
  cardBgColor = "#FFFFFF",
  cardClassName = "",
  isLightCard = true,
  showDescription = true,
}) {
  const cardWidthStyle = {
    "--link-card-desktop-width": `calc(100% / ${desktopColumns} + 1rem)`,
  };

  const linkClassName =
    `flex h-full flex-col transition-all bevel lg:group-hover/cards:[&:not(:hover)]:opacity-70 ${cardClassName}`.trim();
  const textPrimaryClass = isLightCard
    ? "text-gray-night-green"
    : "text-gray-off-white";
  const textMutedClass = isLightCard
    ? "text-gray-defi-ash"
    : "text-gray-tradfi-silver";

  return (
    <div
      data-insight-slide
      className={`w-[calc(100%-1rem)] shrink-0 snap-start pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem] ${wrapperClassName}`.trim()}
      style={cardWidthStyle}
    >
      <InsightCardLink
        card={card}
        className={linkClassName}
        style={cardClassName ? undefined : { backgroundColor: cardBgColor }}
      >
        <span className="sr-only">{card.srText}</span>
        <Image
          alt={card.imageAlt}
          src={card.imageSrc}
          width={card.imageSrc?.endsWith(".svg") ? 557 : 800}
          height={card.imageSrc?.endsWith(".svg") ? 291 : 600}
          unoptimized={card.imageSrc?.endsWith(".svg")}
          className="aspect-[1.66] w-full object-cover bevel"
        />
        <div className="z-10 flex flex-1 justify-between p-xl">
          <div className="flex flex-col justify-between gap-xs">
            <div className="flex flex-col gap-xs">
              <div
                className={`font-blender text-xs uppercase ${textPrimaryClass}`}
              >
                {card.category}
              </div>
              <div
                className={`ellipsis-3 max-h-[3lh] text-lg ${textPrimaryClass}`}
              >
                {card.title}
              </div>
              {showDescription && card.description ? (
                <div
                  className={`ellipsis-4 max-h-[4lh] text-sm ${textMutedClass}`}
                >
                  {card.description}
                </div>
              ) : null}
            </div>
            <div className={`font-blender text-xs uppercase ${textPrimaryClass}`}>
              <span>{card.date}</span>
            </div>
          </div>
        </div>
      </InsightCardLink>
    </div>
  );
}

const INSIGHT_CARD_BG = {
  light: "#E5E6E5",
  dark: "#1C211E",
};

function isLightSectionBg(color) {
  const normalized = (color || "").toLowerCase().replace(/\s/g, "");
  return (
    normalized === "#ffffff" ||
    normalized === "#fff" ||
    normalized === "white" ||
    normalized === ""
  );
}

function isLightCardBg(color) {
  const normalized = (color || "").toLowerCase().replace(/\s/g, "");
  return isLightSectionBg(color) || normalized === INSIGHT_CARD_BG.light.toLowerCase();
}

const NAV_BUTTON_CLASS = `${BEVEL_NAV_BUTTON_CLASS} text-gray-night-green`;

export default function SimilarInsightsSection({
  content = similarInsightsContent,
  /** Passed from parent page — e.g. #070B09 (dark) or #FFFFFF (light). */
  sectionBgColor = "#FFFFFF",
  /** Tailwind classes for section background (overrides sectionBgColor when set). */
  sectionClassName,
  /** Override card background; defaults to #E5E6E5 (light) or #1C211E (dark). */
  cardBgColor,
  /** Tailwind classes for card background (overrides cardBgColor when set). */
  cardClassName,
  /** Accent for nav buttons and desktop progress dots. */
  navAccentColor = BRAND_COLORS.orange,
  /** Muted accent for disabled nav buttons and inactive progress dots. */
  navMutedColor = BRAND_COLORS.greenMuted,
  /** Show optional description line on cards. */
  showDescription = true,
}) {
  const isLightSection = sectionClassName
    ? sectionClassName.includes("bg-white") ||
    sectionClassName.includes("bg-[#FFFFFF") ||
    sectionClassName.includes("bg-[#fff")
    : isLightSectionBg(sectionBgColor);
  const resolvedCardBgColor =
    cardBgColor ??
    (isLightSection ? INSIGHT_CARD_BG.light : INSIGHT_CARD_BG.dark);
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const desktopColumns = content.desktopColumns ?? 4;
  const cards = content.cards ?? [];
  const total = cards.length;
  const headingClassName =
    content.headingClassName ?? "font-blender text-xl uppercase text-green-dark";
  const dividerClassName = content.dividerClassName ?? "!border-[#AB290D]";

  const cardWidthStyle = useMemo(
    () => ({
      "--link-card-desktop-width": `calc(100% / ${desktopColumns} + 1rem)`,
    }),
    [desktopColumns],
  );

  const scrollToIndex = useCallback(
    (index) => {
      const track = scrollRef.current;
      if (!track || total === 0) {
        return;
      }

      const slide = track.querySelector("[data-insight-slide]");
      if (!slide) {
        return;
      }

      const next = Math.min(Math.max(index, 0), total - 1);
      track.scrollTo({
        left: slide.offsetWidth * next,
        behavior: "smooth",
      });
      setActiveIndex(next);
    },
    [total],
  );

  const syncIndexFromScroll = useCallback(() => {
    const track = scrollRef.current;
    if (!track || total === 0) {
      return;
    }

    const slide = track.querySelector("[data-insight-slide]");
    if (!slide) {
      return;
    }

    const nextIndex = Math.round(track.scrollLeft / slide.offsetWidth);
    setActiveIndex(Math.min(Math.max(nextIndex, 0), total - 1));
  }, [total]);

  useEffect(() => {
    const track = scrollRef.current;
    if (!track) {
      return undefined;
    }

    track.addEventListener("scroll", syncIndexFromScroll, { passive: true });
    return () => track.removeEventListener("scroll", syncIndexFromScroll);
  }, [syncIndexFromScroll]);

  const handlePrev = () => scrollToIndex(activeIndex - 1);
  const handleNext = () => scrollToIndex(activeIndex + 1);

  const navButtonClass = NAV_BUTTON_CLASS;

  const isLightBg = isLightSection;
  const isLightCard = isLightCardBg(resolvedCardBgColor);
  const carouselTextClass = isLightBg
    ? "text-gray-night-green"
    : "text-gray-off-white";
  const mobileCounterClass = isLightBg
    ? "text-gray-defi-ash"
    : "text-gray-defi-ash";

  return (
    <section
      className={sectionClassName}
      style={sectionClassName ? undefined : { backgroundColor: sectionBgColor }}
    >
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2 id={content.headingId} className={headingClassName}>
              {content.heading}
            </h2>
          </div>
          <hr className={`!border-[#AB290D]`} />
        </div>

        <section className={`${carouselTextClass} overflow-hidden`}>
          <div>
            <div className="flex flex-col gap-2xl lg:flex-col-reverse lg:gap-4xl">
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
                  <BevelNavButton
                    direction="left"
                    ariaLabel="Previous"
                    bgColor={navAccentColor}
                    disabled={activeIndex === 0}
                    onClick={handlePrev}
                    className={navButtonClass}
                  />
                  <BevelNavButton
                    direction="right"
                    ariaLabel="Next"
                    bgColor={navAccentColor}
                    disabled={activeIndex >= total - 1}
                    onClick={handleNext}
                    className={navButtonClass}
                  />
                </div>
                <div className="hidden lg:flex">
                  {cards.map((_, index) => (
                    <div
                      key={index}
                      className={`h-[0.25rem] transition-all first:ml-0 ${index === activeIndex
                          ? "ml-[0.125rem] w-sm"
                          : "ml-[0.125rem] w-sm opacity-30"
                        }`}
                      style={{
                        backgroundColor:
                          index === activeIndex ? navAccentColor : navMutedColor,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div
                ref={scrollRef}
                className="group/cards flex snap-x snap-mandatory overflow-x-auto scrollbar-none"
                style={cardWidthStyle}
              >
                {cards.map((card) => (
                  <InsightCard
                    key={card.href}
                    card={card}
                    desktopColumns={desktopColumns}
                    cardBgColor={resolvedCardBgColor}
                    cardClassName={cardClassName}
                    isLightCard={isLightCard}
                    showDescription={showDescription}
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
