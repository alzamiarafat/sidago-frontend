"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  insightsDiscoverCards,
  insightsFilterGroups,
} from "@/src/components/sections/v2/insights/data";

const MOBILE_INITIAL_VISIBLE = 3;

function PlusToggle({ open, className = "" }) {
  return (
    <div
      className={`relative flex h-3xl w-3xl items-center justify-center text-gray-off-white ${className}`.trim()}
      aria-hidden
    >
      <div
        className={`absolute h-[3.75%] w-[50%] bg-gray-off-white transition-all duration-500 ${
          open ? "" : ""
        }`}
      />
      <div
        className={`absolute h-[50%] w-[3.75%] bg-gray-off-white transition-all duration-500 ${
          open ? "rotate-90" : "rotate-0"
        }`}
      />
    </div>
  );
}

function FilterDiamondIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 18"
      className="h-[1.125rem] min-h-[1.125rem] w-[1.125rem] min-w-[1.125rem] group-hover:text-gray-defi-ash"
      aria-hidden
    >
      <path
        stroke="currentColor"
        d="M14.331.5 17.5 3.669v10.662L14.331 17.5H3.67L.5 14.331V3.67L3.669.5z"
      />
    </svg>
  );
}

function FilterLink({ href, label }) {
  return (
    <Link
      href={href}
      style={{ position: "relative" }}
      className="group flex items-center gap-sm text-sm lg:text-lg"
    >
      <span className="sr-only">Insights</span>
      <FilterDiamondIcon />
      {label}
    </Link>
  );
}

function MobileFilterGroup({ group }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="flex w-full flex-row-reverse items-center gap-2xl lg:gap-lg"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <PlusToggle open={open} />
        <div className="flex-1 text-left">
          <div className="font-semibold">{group.title}</div>
        </div>
      </button>
      <div
        className="flex gap-2xl overflow-hidden transition-[height] duration-500 lg:gap-lg"
        style={{ height: open ? "auto" : 0 }}
      >
        <div className="flex-1">
          <div className="flex flex-col gap-md pt-xl transition-all">
            {group.items.map((item) => (
              <FilterLink key={item.href} href={item.href} label={item.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function InsightsFilterPanel({ filterGroups = insightsFilterGroups }) {
  const [desktopOpen, setDesktopOpen] = useState(false);

  return (
    <section className="bg-gray-night-green text-gray-off-white">
      {/* Mobile */}
      <div className="flex flex-col gap-2xl bg-gray-defi-graphite p-md text-sm bevel lg:hidden">
        <div className="font-blender text-sm uppercase">Filter By</div>
        <div className="flex flex-col gap-xl">
          {filterGroups.map((group) => (
            <MobileFilterGroup key={group.title} group={group} />
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden cursor-pointer lg:block">
        <button
          type="button"
          className="w-full text-left"
          aria-expanded={desktopOpen}
          onClick={() => setDesktopOpen((value) => !value)}
        >
          <div className="flex items-center gap-2xl lg:gap-lg">
            <PlusToggle open={desktopOpen} />
            <div className="flex-1">
              <div className="font-blender text-xl uppercase">Filter By</div>
            </div>
          </div>
        </button>
        <hr className="mb-10 mt-10 h-[0.0625rem] w-full border-0 bg-gray-off-white" />
        <div
          className="overflow-hidden transition-[height] duration-500"
          style={{ height: desktopOpen ? "auto" : 0 }}
        >
          <div className="grid grid-cols-4 gap-xl">
            {filterGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-6 text-xl">
                <div className="h-7 font-semibold">{group.title}</div>
                <div className="grid gap-x-10 gap-y-4">
                  {group.items.map((item) => (
                    <FilterLink key={item.href} href={item.href} label={item.label} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DiscoverCard({ card }) {
  const cardClassName =
    "flex h-full flex-col bevel bg-gray-defi-charcoal transition-all hover:opacity-90 lg:group-hover/cards:[&:not(:hover)]:opacity-70";

  return (
    <div style={{ position: "relative" }} className={cardClassName}>
      <Image
        alt={card.imageAlt}
        src={card.imageSrc}
        width={800}
        height={600}
        unoptimized={card.imageSrc.endsWith(".svg")}
        className="aspect-[1.66] w-full object-cover bevel"
      />
      <div className="z-10 flex flex-1 justify-between p-xl">
        <div className="flex flex-col justify-between gap-xs">
          <div className="flex flex-col gap-xs">
            <div className="font-blender text-xs uppercase">{card.category}</div>
            <div className="ellipsis-3 max-h-[3lh] text-lg">{card.title}</div>
            {card.description ? (
              <div className="ellipsis-4 max-h-[4lh] text-sm text-gray-tradfi-silver">
                {card.description}
              </div>
            ) : null}
          </div>
          <div className="font-blender text-xs uppercase">
            <span>{card.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiscoverAllLink() {
  return (
    <div className="flex pb-none pt-container">
      <Link
        href="/insights"
        style={{ position: "relative" }}
        className="group/interactive inline-flex w-max items-center justify-between gap-md bevel bevel-[0.25rem] bg-green-tradfi px-sm py-xs font-medium text-gray-night-green disabled:opacity-50"
      >
        <span className="sr-only">Insights › Discover</span>
        Discover all insights
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 40 40"
          className="ml-[--arrow-offset] h-4 w-4 transition-all group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0"
          style={{ "--arrow-offset": "0.4rem" }}
          aria-hidden
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
}

export default function InsightsDiscoverSection({
  cards = insightsDiscoverCards,
  filterGroups = insightsFilterGroups,
}) {
  return (
    <section className="bg-gray-night-green text-gray-off-white">
      <div className="container py-block">
        <div className="pb-container">
          <InsightsFilterPanel filterGroups={filterGroups} />
        </div>

        <section className="bg-gray-night-green text-gray-off-white">
          <div className="flex flex-col gap-2xl lg:flex">
            <div className="group/cards grid grid-cols-1 gap-xl lg:grid-cols-4">
              {cards.map((card, index) => (
                <div
                  key={card.href}
                  className={
                    index < MOBILE_INITIAL_VISIBLE ? "" : "hidden lg:block"
                  }
                >
                  <DiscoverCard card={card} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <DiscoverAllLink />
      </div>
    </section>
  );
}
