"use client";

import { useState } from "react";
import EventCard from "@/src/components/sections/v2/events/EventCard";
import EventsSpeakerCard from "@/src/components/sections/v2/events/EventsSpeakerCard";
import EventsMediaCard from "@/src/components/sections/v2/events/EventsMediaCard";

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

function renderCard(cardType, item) {
  switch (cardType) {
    case "speaker":
      return <EventsSpeakerCard speaker={item} />;
    case "media":
      return <EventsMediaCard item={item} />;
    case "upcoming":
    default:
      return <EventCard event={item} layout="grid" />;
  }
}

export default function EventsCardGrid({
  items,
  cardType = "upcoming",
  mobileInitialCount = 3,
  mobileGridClassName = "group/cards grid grid-cols-1 gap-xl",
  desktopGridClassName = "group/cards hidden grid-cols-3 gap-xl lg:grid",
}) {
  const [visibleCount, setVisibleCount] = useState(mobileInitialCount);
  const total = items.length;
  const hasMore = visibleCount < total;
  const mobileItems = items.slice(0, visibleCount);

  return (
    <>
      <div className="flex flex-col gap-2xl lg:hidden">
        <div className={mobileGridClassName}>
          {mobileItems.map((item) => (
            <div key={item.id}>{renderCard(cardType, item)}</div>
          ))}
        </div>
        {hasMore ? (
          <button
            type="button"
            onClick={() => setVisibleCount(total)}
            className="flex justify-between bg-green-dark p-md font-medium text-gray-night-green bevel bevel-[0.25rem]"
          >
            Load more
            <LoadMoreIcon />
          </button>
        ) : null}
      </div>

      <div className={desktopGridClassName}>
        {items.map((item) => (
          <div key={item.id}>{renderCard(cardType, item)}</div>
        ))}
      </div>
    </>
  );
}
