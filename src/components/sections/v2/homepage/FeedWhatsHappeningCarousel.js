"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import FeedEventCard from "@/src/components/sections/v2/homepage/FeedEventCard";
import BevelNavButton, {
  BEVEL_NAV_BUTTON_CLASS,
} from "@/src/components/sections/v2/common/BevelNavButton";
import { BRAND_COLORS } from "@/src/data/brand-colors";

const DESKTOP_COLUMNS = 2;
const NAV_BUTTON_CLASS = `${BEVEL_NAV_BUTTON_CLASS} text-gray-off-white`;

export default function FeedWhatsHappeningCarousel({ items = [] }) {
  const trackRef = useRef(null);
  const [pageIndex, setPageIndex] = useState(0);

  const pageCount = Math.max(1, items.length - DESKTOP_COLUMNS + 1);

  const syncPageFromScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const slide = track.querySelector("[data-feed-event-slide]");
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

    const slide = track.querySelector("[data-feed-event-slide]");
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
    <div className="flex flex-col gap-xl overflow-hidden">
      <div
        ref={trackRef}
        className="group/cards flex snap-x snap-mandatory overflow-x-auto scrollbar-none"
      >
        {items.map((event) => (
          <div
            key={event.id}
            data-feed-event-slide
            className="w-[88%] shrink-0 snap-start pr-md sm:w-[78%] lg:w-1/2 lg:pr-[1.5rem]"
          >
            <FeedEventCard event={event} />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3xl">
        <div className="flex gap-md">
          <BevelNavButton
            direction="left"
            ariaLabel="Previous events"
            bgColor={BRAND_COLORS.orange}
            disabled={pageIndex === 0}
            onClick={() => scrollToPage(pageIndex - 1)}
            className={NAV_BUTTON_CLASS}
          />
          <BevelNavButton
            direction="right"
            ariaLabel="Next events"
            bgColor={BRAND_COLORS.orange}
            disabled={pageIndex >= pageCount - 1}
            onClick={() => scrollToPage(pageIndex + 1)}
            className={NAV_BUTTON_CLASS}
          />
        </div>

        <div className="flex" aria-hidden>
          {Array.from({ length: pageCount }).map((_, index) => (
            <div
              key={index}
              className={`ml-[0.125rem] h-[0.25rem] w-sm transition-all first:ml-0 ${
                index === pageIndex
                  ? "bg-[#E7512F]"
                  : "bg-[#E7512F] opacity-30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
