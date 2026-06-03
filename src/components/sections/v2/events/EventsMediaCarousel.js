"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import EventsMediaCard from "@/src/components/sections/v2/events/EventsMediaCard";
import BevelNavButton, {
  BEVEL_NAV_BUTTON_CLASS,
} from "@/src/components/sections/v2/common/BevelNavButton";
import { BRAND_COLORS } from "@/src/data/brand-colors";

const DESKTOP_COLUMNS = 3;
const CARD_WIDTH_STYLE = {
  "--link-card-desktop-width": `calc(100% / ${DESKTOP_COLUMNS} + 1rem)`,
};

const NAV_BUTTON_CLASS = `${BEVEL_NAV_BUTTON_CLASS} text-gray-night-green`;

export default function EventsMediaCarousel({ items = [] }) {
  const trackRef = useRef(null);
  const [pageIndex, setPageIndex] = useState(0);

  const pageCount = Math.max(1, items.length - DESKTOP_COLUMNS + 1);

  const syncPageFromScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const slide = track.querySelector("[data-media-slide]");
    if (!slide) return;

    const nextIndex = Math.round(track.scrollLeft / slide.offsetWidth);
    setPageIndex(Math.min(Math.max(nextIndex, 0), pageCount - 1));
  }, [pageCount]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    track.addEventListener("scroll", syncPageFromScroll, { passive: true });
    return () => track.removeEventListener("scroll", syncPageFromScroll);
  }, [syncPageFromScroll]);

  const scrollToPage = (index) => {
    const track = trackRef.current;
    if (!track) return;

    const slide = track.querySelector("[data-media-slide]");
    if (!slide) return;

    const clamped = Math.min(Math.max(index, 0), pageCount - 1);
    track.scrollTo({
      left: slide.offsetWidth * clamped,
      behavior: "smooth",
    });
    setPageIndex(clamped);
  };

  if (!items.length) {
    return null;
  }

  return (
    <div
      className="flex flex-col gap-2xl lg:flex-col-reverse lg:gap-4xl"
      style={{ clipPath: "inset(-100rem -100rem -100rem -100rem)" }}
    >
      <div className="flex items-center justify-between gap-3xl lg:items-center">
        <div className="flex gap-md">
          <BevelNavButton
            direction="left"
            ariaLabel="Previous conversations"
            bgColor={BRAND_COLORS.pinkMid}
            disabled={pageIndex === 0}
            onClick={() => scrollToPage(pageIndex - 1)}
            className={NAV_BUTTON_CLASS}
          />
          <BevelNavButton
            direction="right"
            ariaLabel="Next conversations"
            bgColor={BRAND_COLORS.pinkMid}
            disabled={pageIndex >= pageCount - 1}
            onClick={() => scrollToPage(pageIndex + 1)}
            className={NAV_BUTTON_CLASS}
          />
        </div>

        <div className="hidden lg:flex" aria-hidden>
          {Array.from({ length: pageCount }).map((_, index) => (
            <div
              key={index}
              className={`ml-[0.125rem] h-[0.25rem] transition-all first:ml-0 ${
                index === pageIndex
                  ? "w-sm bg-pink-mid"
                  : "w-sm bg-pink-mid opacity-30"
              }`}
            />
          ))}
        </div>
      </div>

      <div
        ref={trackRef}
        className="group/cards relative -mx-[100rem] flex overflow-x-auto px-[100rem] scrollbar-none"
        style={CARD_WIDTH_STYLE}
      >
        {items.map((item) => (
          <div
            key={item.id}
            data-media-slide
            className="w-[calc(100%-1rem)] shrink-0 pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem]"
          >
            <EventsMediaCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
