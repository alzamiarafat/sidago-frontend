"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import BevelNavButton from "@/src/components/sections/v2/common/BevelNavButton";
import { insightsPartnerQuotes } from "@/src/components/sections/v2/insights/insightsPartnerQuotesData";
import { INSIGHTS_QUOTE_DECOR_PATH } from "@/src/components/sections/v2/insights/insightsQuoteDecorPath";

const PURPLE_MID = "#958dec";
const AUTO_ADVANCE_MS = 6000;
const PROGRESS_STEP_MS = 50;

function QuoteDecor() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      className="pointer-events-none absolute -right-[6rem] -top-[2rem] w-[18rem] rotate-[20deg] text-gray-defi-ash lg:-right-[4rem] lg:-top-[4rem] lg:w-[35rem]"
      aria-hidden
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d={INSIGHTS_QUOTE_DECOR_PATH}
        clipRule="evenodd"
      />
    </svg>
  );
}

function QuoteSlide({ quote }) {
  return (
    <div className="relative flex w-full flex-col gap-6 lg:gap-12">
      <span
        className="absolute -left-8 top-0 text-3xl text-gray-off-white lg:-left-10 lg:text-4xl"
        aria-hidden
      >
        “
      </span>
      <div className="text-xl leading-8 text-gray-off-white lg:text-2xl lg:leading-9">
        {quote.text}”
      </div>
      <div className="font-blender text-sm uppercase tracking-[0.04em] text-gray-tradfi-silver lg:text-xl">
        {quote.author}
        <div className="mt-4 h-[1.875rem] lg:mt-6">
          <Image
            alt={quote.alt}
            loading="lazy"
            width={320}
            height={48}
            className="h-full w-max"
            src={quote.logo}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Partner quote carousel (insights page) — matches service CarouselOverview layout.
 */
export default function InsightsPartnerQuotesSection({
  quotes = insightsPartnerQuotes,
  autoAdvanceMs = AUTO_ADVANCE_MS,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const total = quotes.length;

  const intervalRef = useRef(null);
  const progressRef = useRef(null);

  const goToIndex = useCallback(
    (index) => {
      if (total === 0) {
        return;
      }
      setProgress(0);
      setActiveIndex(((index % total) + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (total <= 1) {
      return undefined;
    }

    clearInterval(intervalRef.current);
    clearInterval(progressRef.current);

    let elapsed = 0;

    progressRef.current = setInterval(() => {
      elapsed += PROGRESS_STEP_MS;
      setProgress(Math.min((elapsed / autoAdvanceMs) * 100, 100));
    }, PROGRESS_STEP_MS);

    intervalRef.current = setInterval(() => {
      setProgress(0);
      setActiveIndex((index) => (index + 1) % total);
    }, autoAdvanceMs);

    return () => {
      clearInterval(intervalRef.current);
      clearInterval(progressRef.current);
    };
  }, [activeIndex, autoAdvanceMs, total]);

  if (total === 0) {
    return null;
  }

  return (
    <section className="overflow-hidden bg-gray-defi-slate text-gray-off-white">
      <div className="relative container py-block">
        <QuoteDecor />

        <div className="flex flex-col gap-lg pl-8 lg:gap-xl lg:pl-0">
          <QuoteSlide key={activeIndex} quote={quotes[activeIndex]} />

          <div className="relative">
            <div className="mb-3 font-blender">
              {activeIndex + 1} / {total}
            </div>
            <div className="relative h-[0.125rem] w-[calc(100%-8.25rem)] bg-gray-night-green">
              <div
                className="absolute h-full bg-purple-mid"
                style={{
                  width: `${progress}%`,
                  transitionDuration: `${PROGRESS_STEP_MS}ms`,
                  transitionTimingFunction: "linear",
                }}
              />
            </div>
            <div className="absolute bottom-0 right-0 flex w-max gap-md">
              <BevelNavButton
                direction="left"
                ariaLabel="Previous quote"
                bgColor={PURPLE_MID}
                iconClassName="text-gray-night-green"
                onClick={() => goToIndex(activeIndex - 1)}
              />
              <BevelNavButton
                direction="right"
                ariaLabel="Next quote"
                bgColor={PURPLE_MID}
                iconClassName="text-gray-night-green"
                onClick={() => goToIndex(activeIndex + 1)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
