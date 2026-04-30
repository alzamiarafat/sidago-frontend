"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const EventsDecoration = dynamic(() => import("../../../ui/EventDecoration"), {
  ssr: false,
});

const ArrowIcon = ({ size = "mobile" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    className={`ml-[--arrow-offset] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] shrink-0 ${
      size === "mobile" ? "lg:hidden" : "hidden lg:block"
    }`}
    style={{
      "--arrow-offset": size === "mobile" ? "0.9rem" : "1.1rem",
      width: size === "mobile" ? "2.25rem" : "2.75rem",
    }}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
      clipRule="evenodd"
    />
  </svg>
);

const NodeDecoration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 200 200"
    className="absolute origin-top-left text-green-500 opacity-40 w-[21.125rem] -right-[6.875rem] -top-[11.625rem] rotate-[27.31deg] pointer-events-none"
  >
    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" />
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * Math.PI * 2) / 12;
      const cx = +(100 + 80 * Math.cos(angle)).toFixed(2);
      const cy = +(100 + 80 * Math.sin(angle)).toFixed(2);

      return (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="3"
          fill="currentColor"
          opacity="0.6"
        />
      );
    })}
  </svg>
);

const ResearchDecoration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 41"
    className="w-[4rem] lg:w-[5.25rem] text-green-800"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M38.724 20.735 20 1.987 1.243 20.727 20 39.483zm.837.276-19.28 19.305h-.561L.406 21.004v-.553L19.72 1.153h.56L39.562 20.46z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M33.382 34.117V7.337H6.594v26.78zm.396.787H6.203l-.397-.396V6.94l.391-.39h27.576l.396.396v27.567z"
      clipRule="evenodd"
    />
  </svg>
);

const MarketDecoration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 201"
    fill="none"
    className="absolute origin-top-left text-orange-200 opacity-30 w-[30rem] -right-[10rem] -top-[15rem] pointer-events-none"
    aria-hidden="true"
  >
    {[...Array(8)].map((_, i) => (
      <g key={i} transform={`rotate(${i * 45} 100 100)`}>
        <line
          x1="100"
          y1="10"
          x2="100"
          y2="190"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.5"
        />
      </g>
    ))}
    <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

function resolveDecoration(type) {
  if (type === "node") {
    return <NodeDecoration />;
  }

  if (type === "events") {
    return <EventsDecoration />;
  }

  if (type === "market") {
    return <MarketDecoration />;
  }

  return null;
}

function resolveTop(type) {
  if (type === "research") {
    return <ResearchDecoration />;
  }

  return null;
}

function Card({ card }) {
  return (
    <Link
      href={card.href}
      style={{ position: "relative" }}
      className={`group/interactive pointer-events-auto h-[14.5rem] transition-all lg:h-[18.75rem] lg:group-hover/cards:[&:not(:hover)]:opacity-70 ${card.colSpan}`}
    >
      <span className="sr-only">{card.srLabel}</span>

      <div
        className={`relative flex h-full flex-col justify-between overflow-hidden p-lg bevel ${card.bgClass} ${card.textClass}`}
      >
        {resolveDecoration(card.decorationType)}
        <div>{resolveTop(card.topType)}</div>

        <div className="z-10 flex items-end justify-between gap-md">
          <div className="flex flex-col gap-md">
            <div className="text-2xl">{card.title}</div>
            {card.subtitle ? (
              <div className="text-sm opacity-70">{card.subtitle}</div>
            ) : null}
          </div>

          <div className="shrink-0">
            <ArrowIcon size="mobile" />
            <ArrowIcon size="desktop" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function CardsGrid({ items = [] }) {
  const cards = items?.filter((item) => item?.cardId && item?.href && item?.title) || [];

  if (cards.length === 0) {
    return null;
  }

  return (
    <>
      <div className="h-lg bg-gray-defi-charcoal"></div>
      <section className="bg-gray-defi-charcoal text-gray-off-white">
        <div className="container py-block group/cards grid-rows-auto pointer-events-none relative flex grid-cols-12 flex-col gap-2xl lg:grid lg:gap-md">
          {cards.map((card) => (
            <Card key={card.cardId} card={card} />
          ))}
        </div>
      </section>
    </>
  );
}
