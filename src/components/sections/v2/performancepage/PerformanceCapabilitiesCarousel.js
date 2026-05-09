"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

function ArrowIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ArrowLeftIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 12H6m5-5-5 5 5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CapabilityAmbient() {
  return (
    <div className="relative mx-auto flex h-full min-h-[13rem] w-full max-w-[19rem] items-center justify-center overflow-hidden rounded-[1.4rem]">
      <div className="absolute left-[10%] top-[18%] h-28 w-28 rounded-full bg-[#67f2d8]/18 blur-3xl animate-[pulse_2.4s_ease-in-out_infinite]" />
      <div className="absolute right-[10%] top-[22%] h-32 w-32 rounded-full bg-[#f075e4]/18 blur-3xl animate-[pulse_2.8s_ease-in-out_infinite]" />
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/20 shadow-[0_0_32px_rgba(255,255,255,0.1)] animate-[spin_7s_linear_infinite]" />
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#67f2d8]/65 shadow-[0_0_28px_rgba(103,242,216,0.38)] animate-[spin_5s_linear_infinite_reverse]" />
      <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/95 shadow-[0_0_28px_rgba(255,255,255,0.45)] animate-[pulse_1.6s_ease-in-out_infinite]" />

      <div className="absolute inset-x-[8%] top-1/2 h-[2px] -translate-y-1/2 bg-white/10" />
      <div className="absolute inset-x-[8%] top-1/2 h-[4px] -translate-y-1/2 overflow-hidden">
        <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#67f2d8] via-white to-[#f075e4] shadow-[0_0_22px_rgba(240,117,228,0.4)] animate-[spin_4.8s_linear_infinite]" />
      </div>

      <div className="absolute left-[14%] top-[34%] h-5 w-5 rounded-full bg-[#67f2d8] shadow-[0_0_20px_rgba(103,242,216,0.75)] animate-[floatPanelA_2.6s_ease-in-out_infinite]" />
      <div className="absolute right-[16%] top-[38%] h-5 w-5 rounded-full bg-[#f075e4] shadow-[0_0_20px_rgba(240,117,228,0.72)] animate-[floatPanelC_2.3s_ease-in-out_infinite]" />
      <div className="absolute left-[22%] bottom-[20%] h-14 w-14 rounded-[1rem] border-2 border-white/30 bg-white/8 shadow-[0_0_26px_rgba(255,255,255,0.16)] animate-[floatPanelB_2.9s_ease-in-out_infinite]" />
      <div className="absolute right-[18%] bottom-[18%] h-16 w-16 rounded-[1.15rem] border-2 border-[#67f2d8]/40 bg-[#67f2d8]/12 shadow-[0_0_28px_rgba(103,242,216,0.24)] animate-[floatPanelA_2.4s_ease-in-out_infinite]" />
      <div className="absolute left-1/2 top-[26%] h-3 w-3 -translate-x-1/2 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.8)] animate-[pulse_1.4s_ease-in-out_infinite]" />
    </div>
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
    <div className="mt-10 rounded-lg bg-[#101510] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.18)] ring-1 ring-white/[0.06] md:p-6">
      <div className="grid gap-6 lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.28fr)] lg:items-stretch">
        <div className="flex min-h-[30rem] flex-col rounded-md bg-white/[0.025] p-5 ring-1 ring-white/[0.05]">
          <div>
            <div className="font-blender text-[0.66rem] uppercase tracking-[0.24em] text-[#f075e4]/82">
              Sidago Performance
            </div>
            <h3 className="mt-4 max-w-[13ch] text-[1.75rem] leading-tight text-white sm:text-[1.9rem] md:text-[2rem]">
              {activeItem.title}
            </h3>
            <p className="mt-4 max-w-[28rem] text-sm leading-relaxed text-gray-off-white/64 md:text-base">
              {activeItem.description}
            </p>
          </div>

          <div className="flex flex-1 items-center justify-center py-4 sm:py-6">
            <CapabilityAmbient />
          </div>

          <div className="mt-auto flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div className="text-sm tracking-[0.08em] text-gray-off-white/66">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </div>

            <div className="flex w-full flex-col justify-end sm:min-w-[11rem] sm:flex-1">
              <div className="flex items-center justify-between gap-4">
                <div />

                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous capability"
                    onClick={prev}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/78 transition hover:border-white/[0.16] hover:bg-white/[0.07]"
                  >
                    <ArrowLeftIcon className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next capability"
                    onClick={next}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/78 transition hover:border-white/[0.16] hover:bg-white/[0.07]"
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
        </div>

        <div
          className="relative min-h-[18rem] overflow-hidden rounded-md bg-[#e8f1f0] ring-1 ring-white/[0.06] md:min-h-[24rem] lg:min-h-[30rem]"
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
            className="object-contain p-3 transition duration-500 md:p-5"
            sizes="(min-width: 1024px) 44rem, 100vw"
          />
        </div>
      </div>
    </div>
  );
}
