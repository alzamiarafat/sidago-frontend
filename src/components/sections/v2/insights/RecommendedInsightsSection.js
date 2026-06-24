"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import BevelNavButton from "@/src/components/sections/v2/common/BevelNavButton";

const MOBILE_INITIAL_COUNT = 2;
const MOBILE_LOAD_STEP = 2;
const BRAND_ORANGE = "#E7512F";
const NAV_BUTTON_CLASS =
  "group/interactive inline-flex items-center justify-center gap-md font-medium bevel bevel-[0.25rem] p-[0.625rem] text-gray-night-green hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100 disabled:opacity-50";

function CardArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className="ml-[--arrow-offset] shrink-0 transition-all group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0"
      style={{ "--arrow-offset": "1rem", width: "2.5rem" }}
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
        d="M30.53 22.016V9.147L20.496 4 10.46 9.147v2.574M14.92 22.016H6l4.46-4.504z"
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
        d="M30.53 22.016V9.147L20.496 4 10.46 9.147v2.574"
      />
    </svg>
  );
}

function NewsInsightCard({
  card,
  desktopColumns,
  className = "",
  layout = "carousel",
  linkable = true,
}) {
  const cardWidthStyle =
    layout === "carousel"
      ? {
          "--link-card-desktop-width": `calc(100% / ${desktopColumns} + 1rem)`,
        }
      : undefined;

  const wrapperClassName =
    layout === "carousel"
      ? `w-[calc(100%-1rem)] shrink-0 pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem] ${className}`.trim()
      : className;

  const cardClassName =
    "flex h-full flex-col bg-gray-defi-charcoal transition-all bevel lg:group-hover/cards:[&:not(:hover)]:opacity-70";

  const body = (
    <>
      {linkable ? <span className="sr-only">{card.srText}</span> : null}
      <Image
        alt={card.imageAlt}
        src={card.imageSrc}
        width={800}
        height={600}
        className="bevel aspect-[1.66] w-full object-cover"
        sizes="(max-width: 1024px) 100vw, 25vw"
      />
      <div className="z-10 flex flex-1 justify-between p-xl">
        <div className="flex flex-col justify-between gap-xs">
          <div className="flex flex-col gap-xs">
            <div className="font-blender text-xs uppercase">{card.category}</div>
            <div className="ellipsis-3 max-h-[3lh] text-lg">{card.title}</div>
          </div>
          <div className="font-blender text-xs uppercase">
            <span>{card.date}</span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div
      data-insight-slide={layout === "carousel" ? true : undefined}
      className={wrapperClassName}
      style={cardWidthStyle}
    >
      {!linkable ? (
        <div className={cardClassName} style={{ position: "relative" }}>
          {body}
        </div>
      ) : card.external ? (
        <a
          href={card.href}
          target="_blank"
          rel="nofollow noopener noreferrer"
          referrerPolicy="no-referrer"
          className={cardClassName}
          style={{ position: "relative" }}
        >
          {body}
        </a>
      ) : (
        <Link href={card.href} className={cardClassName} style={{ position: "relative" }}>
          {body}
        </Link>
      )}
    </div>
  );
}

function FeaturedInsightCard({ card, desktopColumns, className = "", layout = "carousel" }) {
  const cardWidthStyle =
    layout === "carousel"
      ? {
          "--link-card-desktop-width": `calc(100% / ${desktopColumns} + 1rem)`,
        }
      : undefined;

  const wrapperClassName =
    layout === "carousel"
      ? `w-[calc(100%-1rem)] shrink-0 snap-start pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem] ${className}`.trim()
      : className;

  const cardClassName = [
    "group/interactive relative flex h-full min-h-[18.75rem] flex-col justify-end bevel transition-all hover:opacity-90 lg:min-h-[23.25rem] lg:group-hover/cards:[&:not(:hover)]:opacity-70 xl:min-h-[28.125rem]",
    card.cardClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      data-insight-slide={layout === "carousel" ? true : undefined}
      className={wrapperClassName}
      style={cardWidthStyle}
    >
      <div style={{ position: "relative" }} className={cardClassName}>
        <Image
          alt={card.imageAlt}
          src={card.imageSrc}
          width={800}
          height={600}
          className="absolute top-0 h-[60%] w-full object-cover"
        />
        <div className="z-10 flex items-end justify-between p-xl">
          <div className="flex flex-col justify-between gap-xs">
            <div className="flex flex-col gap-xs">
              <div className="font-blender text-sm uppercase">{card.category}</div>
              <div className="ellipsis-3 h-[3lh] text-lg lg:text-xl">{card.title}</div>
            </div>
            <div className="font-blender text-sm uppercase">
              <span>{card.date}</span>
            </div>
          </div>
          <CardArrow />
        </div>
      </div>
    </div>
  );
}

export default function RecommendedInsightsSection({
  content,
  variant = "recommended",
  mobileLayout = "grid",
  navBgColor = BRAND_ORANGE,
  progressBarClassName = "bg-[#E7512F]",
  sectionClassName = "bg-gray-defi-charcoal",
  footerClassName = "bg-gray-defi-graphite",
  navButtonsPlacement = "between",
  showPaginationCounter = true,
  linkableCards = true,
  footer = null,
}) {
  if (!content?.heading || !content?.cards?.length) {
    return null;
  }

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileVisibleCount, setMobileVisibleCount] = useState(MOBILE_INITIAL_COUNT);

  const desktopColumns = content.desktopColumns ?? 3;
  const cards = content.cards ?? [];
  const total = cards.length;
  const isNewsVariant = variant === "news";
  const useCarouselOnMobile = mobileLayout === "carousel";
  const InsightCard = isNewsVariant ? NewsInsightCard : FeaturedInsightCard;

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

  const handleLoadMore = () => {
    setMobileVisibleCount((count) => Math.min(count + MOBILE_LOAD_STEP, total));
  };

  const showLoadMore = mobileVisibleCount < total && !useCarouselOnMobile;
  const navButtonsOnLeft = navButtonsPlacement === "start";

  const paginationCounter = (
    <div
      className={`relative flex gap-md ${
        navButtonsOnLeft
          ? "min-w-[5.5rem] self-center"
          : `flex-1 ${useCarouselOnMobile ? "" : "lg:hidden"}`
      }`}
    >
        {cards.map((card, index) => (
          <button
            key={`${card.title}-${index}`}
          type="button"
          onClick={() => scrollToIndex(index)}
          className={`absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash ${
            index === activeIndex ? "" : "opacity-0"
          }`}
        >
          <div className="flex w-full items-center justify-between text-lg">
            <div className="flex font-blender text-xl font-medium uppercase text-gray-defi-ash">
              <span className="min-w-md">{index + 1}</span>
              <span className="min-w-sm">/</span>
              <span className="min-w-md">{total}</span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );

  const navButtons = (
    <div className="flex gap-md">
      <BevelNavButton
        direction="left"
        ariaLabel="Previous"
        bgColor={navBgColor}
        className={NAV_BUTTON_CLASS}
        disabled={activeIndex === 0}
        onClick={() => scrollToIndex(activeIndex - 1)}
      />
      <BevelNavButton
        direction="right"
        ariaLabel="Next"
        bgColor={navBgColor}
        className={NAV_BUTTON_CLASS}
        disabled={activeIndex >= total - 1}
        onClick={() => scrollToIndex(activeIndex + 1)}
      />
    </div>
  );

  const progressBars = (
    <div className={`${useCarouselOnMobile ? "flex" : "hidden lg:flex"}`}>
        {cards.map((card, index) => (
          <button
            key={`${card.title}-${index}`}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          onClick={() => scrollToIndex(index)}
          className={`ml-[0.125rem] h-[0.25rem] transition-all first:ml-0 ${progressBarClassName} ${
            index === activeIndex
              ? "w-sm"
              : "w-sm opacity-30"
          }`}
        />
      ))}
    </div>
  );

  const carouselControls = (
    <div className="flex justify-between gap-3xl lg:items-center">
      {navButtonsOnLeft ? (
        <>
          {navButtons}
          <div className="flex items-center gap-3xl">
            {showPaginationCounter ? paginationCounter : null}
            {progressBars}
          </div>
        </>
      ) : (
        <>
          {showPaginationCounter ? paginationCounter : null}
          {navButtons}
          {progressBars}
        </>
      )}
    </div>
  );

  const carouselTrack = (
    <div
      ref={scrollRef}
      className="group/cards relative -mx-[100rem] flex overflow-x-auto px-[100rem] scrollbar-none"
      style={cardWidthStyle}
    >
      {cards.map((card, index) => (
        <InsightCard
          key={`${card.title}-${index}`}
          card={card}
          desktopColumns={desktopColumns}
          linkable={linkableCards}
        />
      ))}
    </div>
  );

  return (
    <section className={sectionClassName}>
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl font-blender text-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id={content.headingId}
              className={
                content.headingClassName ??
                "font-blender text-xl uppercase text-green-dark"
              }
            >
              {content.heading}
            </h2>
          </div>
          <hr className={content.dividerClassName ?? "!border-[#E7512F]"} />
        </div>

        <section className={`${sectionClassName} text-gray-off-white`}>
          <div>
            {useCarouselOnMobile ? (
              <div
                className="flex flex-col gap-2xl lg:flex-col-reverse lg:gap-4xl"
                style={{ clipPath: "inset(-100rem -100rem -100rem -100rem)" }}
              >
                {carouselControls}
                {carouselTrack}
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-2xl lg:hidden">
                  <div className="group/cards grid grid-cols-1 gap-xl">
                    {cards.map((card, index) => (
                      <div
                        key={`${card.title}-${index}`}
                        className={index < mobileVisibleCount ? "" : "hidden"}
                      >
                        <InsightCard
                          card={card}
                          desktopColumns={desktopColumns}
                          layout="grid"
                          linkable={linkableCards}
                        />
                      </div>
                    ))}
                  </div>
                  {showLoadMore ? (
                    <button
                      type="button"
                      onClick={handleLoadMore}
                      className="flex justify-between bg-green-dark p-md font-medium text-gray-night-green bevel bevel-[0.25rem] lg:hidden"
                    >
                      Load more
                      <LoadMoreIcon />
                    </button>
                  ) : null}
                </div>

                <div
                  className="hidden flex-col gap-2xl lg:flex lg:flex-col-reverse lg:gap-4xl"
                  style={{ clipPath: "inset(-100rem -100rem -100rem -100rem)" }}
                >
                  {carouselControls}
                  {carouselTrack}
                </div>
              </>
            )}
          </div>
        </section>

        {footer ? (
          <div className={`${footerClassName} pt-container`}>{footer}</div>
        ) : null}
      </div>
    </section>
  );
}
