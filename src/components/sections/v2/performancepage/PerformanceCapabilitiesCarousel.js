"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

function ArrowIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function PerformanceCapabilitiesCarousel({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = items.length;
  const activeItem = items[activeIndex];

  const progressWidth = useMemo(() => {
    if (!total) {
      return "0%";
    }

    return `${((activeIndex + 1) / total) * 100}%`;
  }, [activeIndex, total]);

  if (!activeItem) {
    return null;
  }

  const prev = () => setActiveIndex((current) => (current - 1 + total) % total);
  const next = () => setActiveIndex((current) => (current + 1) % total);

  return (
    <div className="mt-10 rounded-[1.75rem] bg-[#101510] px-6 py-6 shadow-[0_24px_60px_rgba(0,0,0,0.22)] ring-1 ring-white/[0.04] md:px-8 md:py-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-center">
        <div className="flex flex-col justify-between lg:min-h-[27rem]">
          <div className="max-w-[30rem]">
            <div className="font-blender text-[0.66rem] uppercase tracking-[0.24em] text-[#f075e4]/82">
              Sidago Performance
            </div>
            <h3 className="mt-5 max-w-[9ch] text-[2rem] leading-[1] text-white md:text-[2.7rem]">
              {activeItem.title}
            </h3>
            <p className="mt-6 max-w-[28rem] text-[1rem] leading-[1.75] text-gray-off-white/64 md:text-[1.02rem]">
              {activeItem.description}
            </p>
          </div>

          <div className="mt-10 max-w-[28rem]">
            <div className="flex items-center justify-between gap-5">
              <div className="text-sm tracking-[0.08em] text-gray-off-white/66">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous capability"
                  onClick={prev}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-transparent text-white/78 transition hover:bg-white/[0.05]"
                >
                  <ArrowIcon className="h-4 w-4 rotate-180" />
                </button>
                <button
                  type="button"
                  aria-label="Next capability"
                  onClick={next}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f075e4] text-[#111511] transition hover:bg-[#f38ae9]"
                >
                  <ArrowIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-5">
              <div className="relative h-px w-full bg-white/8">
                <div
                  className="absolute inset-y-0 left-0 bg-[#f075e4] transition-all duration-500"
                  style={{ width: progressWidth }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative min-h-[18rem] overflow-hidden rounded-[1.5rem] bg-[#0d120e] ring-1 ring-white/[0.05] lg:min-h-[27rem]"
          style={
            activeItem.imageBackground
              ? { backgroundColor: activeItem.imageBackground }
              : undefined
          }
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_24%)]" />
          <Image
            key={`${activeItem.image}-${activeItem.imageFit || "cover"}`}
            src={activeItem.image}
            alt={`${activeItem.title} visual`}
            fill
            className={`transition duration-500 ${
              activeItem.imageFit === "contain"
                ? "object-contain p-4 md:p-6"
                : "object-cover object-center"
            }`}
            sizes="(min-width: 1024px) 34rem, 100vw"
          />
          {activeItem.imageFit === "contain" ? null : (
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0c]/42 via-transparent to-transparent" />
          )}
        </div>
      </div>
    </div>
  );
}
