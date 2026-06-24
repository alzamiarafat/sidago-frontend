"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import BevelNavButton, {
  BEVEL_NAV_BUTTON_CLASS,
} from "@/src/components/sections/v2/common/BevelNavButton";
import ExecutiveTeamCard from "@/src/components/sections/v2/company/ExecutiveTeamCard";

const ACCENT_MINT = "#A8F5C2";
const NAV_BUTTON_CLASS = `${BEVEL_NAV_BUTTON_CLASS} text-gray-night-green`;

function useVisibleColumns() {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setColumns(3);
        return;
      }
      if (window.matchMedia("(min-width: 768px)").matches) {
        setColumns(2);
        return;
      }
      setColumns(1);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return columns;
}

export default function CompanyExecutiveTeamSection({
  title,
  headingId = "meet-the-executive-team",
  items,
}) {
  if (!title || !items?.length) {
    return null;
  }
  const trackRef = useRef(null);
  const [pageIndex, setPageIndex] = useState(0);
  const visibleColumns = useVisibleColumns();
  const total = items.length;
  const pageCount = Math.max(1, total - visibleColumns + 1);

  const syncPageFromScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const slide = track.querySelector("[data-team-slide]");
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

  useEffect(() => {
    setPageIndex((index) => Math.min(index, pageCount - 1));
  }, [pageCount]);

  const scrollToPage = (index) => {
    const track = trackRef.current;
    if (!track) return;

    const slide = track.querySelector("[data-team-slide]");
    if (!slide) return;

    const clamped = Math.min(Math.max(index, 0), pageCount - 1);
    track.scrollTo({
      left: slide.offsetWidth * clamped,
      behavior: "smooth",
    });
    setPageIndex(clamped);
  };

  if (!total) {
    return null;
  }

  return (
    <section>
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id={headingId}
              className="font-blender text-xl uppercase text-[#00F554]"
            >
              {title}
            </h2>
          </div>
          <hr className="border-[#006623]" />
        </div>

        <section className="bg-gray-night-green text-gray-off-white">
          <div
            className="flex flex-col gap-2xl lg:flex-col-reverse lg:gap-4xl"
            style={{ clipPath: "inset(-100rem -100rem -100rem -100rem)" }}
          >
            <div className="flex justify-between gap-3xl lg:items-center">
              <div className="relative flex flex-1 gap-md lg:hidden">
                {items.map((member, index) => (
                  <button
                    key={member.name}
                    type="button"
                    onClick={() => scrollToPage(index)}
                    className={`absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash ${
                      index === pageIndex ? "opacity-100" : "opacity-0"
                    }`}
                    tabIndex={index === pageIndex ? 0 : -1}
                    aria-hidden={index !== pageIndex}
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

              <div className="flex gap-md">
                <BevelNavButton
                  direction="left"
                  ariaLabel="Previous team member"
                  bgColor={ACCENT_MINT}
                  disabled={pageIndex === 0}
                  onClick={() => scrollToPage(pageIndex - 1)}
                  className={NAV_BUTTON_CLASS}
                />
                <BevelNavButton
                  direction="right"
                  ariaLabel="Next team member"
                  bgColor={ACCENT_MINT}
                  disabled={pageIndex >= pageCount - 1}
                  onClick={() => scrollToPage(pageIndex + 1)}
                  className={NAV_BUTTON_CLASS}
                />
              </div>

              <div className="hidden lg:flex" aria-hidden>
                {Array.from({ length: pageCount }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to team slide ${index + 1}`}
                    onClick={() => scrollToPage(index)}
                    className={`ml-[0.125rem] h-[0.25rem] transition-all first:ml-0 ${
                      index === pageIndex
                        ? "w-sm bg-[#A8F5C2]"
                        : "w-sm bg-[#A8F5C2] opacity-30"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div
              ref={trackRef}
              className="group/cards relative -mx-[100rem] flex overflow-x-auto px-[100rem] scrollbar-none"
            >
              {items.map((member) => (
                <div
                  key={member.name}
                  data-team-slide
                  className="aspect-[0.85] w-[calc(100%-1rem)] shrink-0 pl-md md:w-[calc(100%/2+1rem)] lg:w-[calc(100%/3+1rem)] lg:pl-0 lg:pr-[3rem]"
                >
                  <ExecutiveTeamCard member={member} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
