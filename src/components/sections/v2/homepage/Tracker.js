"use client";

import { useEffect, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

function TrackerRow({ coin, dimmed = false }) {
  return (
    <div
      className={`grid h-[var(--ticker-row-height)] w-full grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)_minmax(0,0.95fr)] items-center gap-4 ${
        dimmed ? "opacity-35" : "opacity-100"
      }`}
    >
      <div className="min-w-0 text-left">
        <span className="font-blender text-[4.5rem] uppercase leading-none tracking-[0.08em] text-gray-tradfi-silver sm:text-[5.2rem] md:text-[5.8rem] lg:text-[6.6rem]">
          {coin.title}
        </span>
      </div>

      <div className="flex items-center justify-center">
        <span className="font-blender text-2xl uppercase tracking-[0.18em] text-gray-tradfi-silver sm:text-3xl md:text-[2.75rem] lg:text-[3.5rem]">
          {coin.price}
        </span>
      </div>

      <div className="flex items-center justify-end gap-1 sm:gap-2">
        <span className="font-blender text-2xl uppercase tracking-[0.14em] text-[#ec5b5b] sm:text-3xl md:text-[2.65rem] lg:text-[3.35rem]">
          {coin.avg}
        </span>
        <TiArrowSortedDown className="text-3xl text-[#ec5b5b] sm:text-[2.75rem] lg:text-[3.5rem]" />
      </div>
    </div>
  );
}

export default function MarketTicker({ items = [] }) {
  const coins = items?.filter(
    (item) => item?.title && item?.price && item?.avg,
  ) || [];
  const tickerRows = coins.length > 0 ? [...coins, coins[0]] : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    if (coins.length <= 1) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
      setAnimate(true);
    }, 2200);

    return () => clearInterval(interval);
  }, [coins.length]);

  useEffect(() => {
    if (coins.length <= 1 || activeIndex !== coins.length) return undefined;

    const timeout = setTimeout(() => {
      setAnimate(false);
      setActiveIndex(0);
    }, 750);

    return () => clearTimeout(timeout);
  }, [activeIndex, coins.length]);

  if (tickerRows.length === 0) {
    return null;
  }

  return (
    <section
      className="overflow-hidden bg-gray-defi-graphite text-gray-off-white"
      style={{ backgroundColor: "rgb(50 57 53 / var(--tw-bg-opacity, 1))" }}
    >
      <div className="container mx-auto">
        <div className="relative py-2">
          <div
            className="relative overflow-hidden"
            style={{
              "--ticker-row-height": "clamp(7.6rem, 6.9rem + 1.9vw, 9.6rem)",
              height: "calc(var(--ticker-row-height) * 1.08)",
            }}
          >
            <div
              className={`${
                animate ? "transition-transform duration-700 ease-in-out" : ""
              }`}
              style={{
                transform: `translateY(calc(var(--ticker-row-height) * -${activeIndex}))`,
              }}
            >
              {tickerRows.map((coin, index) => (
                <TrackerRow
                  key={`${coin.title}-${index}`}
                  coin={coin}
                  dimmed={index === activeIndex + 1}
                />
              ))}
            </div>

            <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-gray-defi-graphite to-transparent"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-defi-graphite via-gray-defi-graphite to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
