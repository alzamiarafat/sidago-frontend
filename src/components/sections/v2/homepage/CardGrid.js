"use client"; // ensure client-side for decorations using randomness

import Link from "next/link";
import { useMemo } from "react";
import dynamic from "next/dynamic";

const EventsDecoration = dynamic(() => import("../../../ui/EventDecoration"), {
  ssr: false,
});
// ============ ICONS ============

const ArrowIcon = ({ size = "mobile" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    className={`
      ml-[--arrow-offset] transition-all 
      group-active/interactive:ml-0 
      group-active/interactive:mr-[--arrow-offset] 
      group-active/interactive:lg:ml-[--arrow-offset] 
      group-active/interactive:lg:mr-0 
      group-hover/interactive:ml-0 
      group-hover/interactive:mr-[--arrow-offset] 
      shrink-0
      ${size === "mobile" ? "lg:hidden" : "hidden lg:block"}
    `}
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

// ============ SVG DECORATIONS ============

const NodeDecoration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 200 200"
    className="absolute origin-top-left text-green-500 opacity-40 
               w-[21.125rem] -right-[6.875rem] -top-[11.625rem] 
               rotate-[27.31deg] pointer-events-none"
  >
    <circle
      cx="100"
      cy="100"
      r="80"
      stroke="currentColor"
      strokeWidth="0.5"
      fill="none"
    />
    <circle
      cx="100"
      cy="100"
      r="60"
      stroke="currentColor"
      strokeWidth="0.5"
      fill="none"
    />
    <circle
      cx="100"
      cy="100"
      r="40"
      stroke="currentColor"
      strokeWidth="0.5"
      fill="none"
    />

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

// ============ CLIENT-SIDE EVENTS DECORATION ============

// const EventsDecoration = () => {
//   const dots = useMemo(
//     () =>
//       Array.from({ length: 20 }).map(() => ({
//         left: `${Math.random() * 100}%`,
//         top: `${Math.random() * 100}%`,
//         scale: 0.5 + Math.random(),
//       })),
//     [],
//   );

//   return (
//     <div
//       className="absolute inset-0 pointer-events-none overflow-hidden"
//       aria-hidden="true"
//     >
//       {dots.map((dot, i) => (
//         <div
//           key={i}
//           className="absolute w-1 h-1 rounded-full bg-pink-400 opacity-50"
//           style={{
//             left: dot.left,
//             top: dot.top,
//             transform: `scale(${dot.scale})`,
//           }}
//         />
//       ))}

//       <div className="absolute -right-8 -top-8 w-48 h-48 border border-pink-400/30 rounded-full" />
//       <div className="absolute -right-4 -top-4 w-32 h-32 border border-pink-400/20 rounded-full" />
//     </div>
//   );
// };

const MarketDecoration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 201"
    fill="none"
    className="absolute origin-top-left text-orange-200 opacity-30
               w-[30rem] -right-[10rem] -top-[15rem] pointer-events-none"
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
    <circle
      cx="100"
      cy="100"
      r="90"
      stroke="currentColor"
      strokeWidth="0.5"
      fill="none"
    />
    <circle
      cx="100"
      cy="100"
      r="60"
      stroke="currentColor"
      strokeWidth="0.5"
      fill="none"
    />
    <circle
      cx="100"
      cy="100"
      r="30"
      stroke="currentColor"
      strokeWidth="0.5"
      fill="none"
    />
  </svg>
);

// ============ CARD COMPONENT ============

function Card({
  href,
  srLabel,
  bgClass,
  textClass,
  colSpan,
  children,
  decoration,
}) {
  return (
    <Link
      href={href}
      style={{ position: "relative" }}
      className={`
        group/interactive pointer-events-auto 
        h-[14.5rem] lg:h-[18.75rem]
        transition-all duration-300
        lg:group-hover/cards:[&:not(:hover)]:opacity-60
        ${colSpan}
      `}
    >
      <span className="sr-only">{srLabel}</span>

      <div
        className={`
          relative flex h-full flex-col justify-between 
          overflow-hidden rounded-2xl p-6 lg:p-8
          border border-white/10
          ${bgClass} ${textClass}
        `}
      >
        {decoration}

        <div className="relative z-10">{children.top}</div>

        <div className="relative z-10 flex items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <p className="text-xl lg:text-2xl font-medium tracking-tight">
              {children.title}
            </p>
            {children.subtitle && (
              <p className="text-sm opacity-70">{children.subtitle}</p>
            )}
          </div>

          <div className="flex-shrink-0">
            <ArrowIcon size="mobile" />
            <ArrowIcon size="desktop" />
          </div>
        </div>
      </div>
    </Link>
  );
}

// ============ CARDS DATA ============

const cards = [
  {
    id: "node",
    href: "/node",
    srLabel: "Node",
    bgClass: "bg-gray-800",
    textClass: "text-gray-100",
    colSpan: "col-span-12 lg:col-span-6",
    title: "Node",
    subtitle: "Decentralized infrastructure at scale",
    decoration: <NodeDecoration />,
    top: null,
  },
  {
    id: "research",
    href: "/insights/discover?category=defi-research&category=governance-digest",
    srLabel: "Insights › Discover",
    bgClass: "bg-orange-100",
    textClass: "text-gray-900",
    colSpan: "col-span-12 lg:col-span-6",
    title: "Wintermute Research",
    subtitle: "Deep dives into DeFi & governance",
    decoration: null,
    top: <ResearchDecoration />,
  },
  {
    id: "events",
    href: "/events",
    srLabel: "Events",
    bgClass: "bg-purple-100",
    textClass: "text-gray-900",
    colSpan: "col-span-12 xl:col-span-4",
    title: "Wintermute Events",
    subtitle: "Conferences, meetups & more",
    decoration: <EventsDecoration />,
    top: null,
  },
  {
    id: "governance",
    href: "/defi/governance",
    srLabel: "DeFi › Governance",
    bgClass: "bg-blue-100",
    textClass: "text-gray-900",
    colSpan: "col-span-5 xl:col-span-4",
    title: "Governance",
    subtitle: "Protocol governance insights",
    decoration: null,
    top: null,
  },
  {
    id: "market",
    href: "/insights/discover?category=reports&category=market-update",
    srLabel: "Insights › Discover",
    bgClass: "bg-gray-700",
    textClass: "text-gray-100",
    colSpan: "col-span-7 xl:col-span-4",
    title: "Market Color",
    subtitle: "Real-time market intelligence",
    decoration: <MarketDecoration />,
    top: null,
  },
];

// ============ MAIN COMPONENT ============

export default function CardsGrid() {
  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
      style={{ backgroundColor: "rgb(28 33 30 / var(--tw-bg-opacity, 1))" }}
    >
      <div className="max-w-7xl mx-auto mb-8 lg:mb-12">
        <h2 className="text-white text-3xl lg:text-4xl font-semibold tracking-tight">
          Explore
        </h2>
        <p className="text-gray-400 mt-2 text-base lg:text-lg">
          Discover our suite of products and research
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="group/cards grid grid-cols-12 gap-3 lg:gap-4 pointer-events-none">
          {cards.map((card) => (
            <Card
              key={card.id}
              href={card.href}
              srLabel={card.srLabel}
              bgClass={card.bgClass}
              textClass={card.textClass}
              colSpan={card.colSpan}
              decoration={card.decoration}
            >
              {{
                top: card.top,
                title: card.title,
                subtitle: card.subtitle,
              }}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
