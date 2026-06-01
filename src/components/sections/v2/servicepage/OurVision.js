"use client";

import { useState } from "react";

const visionItems = [
  {
    title: "Reliable uptime",
    description:
      "Build resilient systems with stable hosting, proactive monitoring, and rapid issue response to keep operations running without interruption.",
    iconType: "uptime",
  },
  {
    title: "Secure by design",
    description:
      "Protect business-critical systems through controlled access, hardened environments, backup discipline, and continuous risk awareness.",
    iconType: "security",
  },
  {
    title: "Scalable architecture",
    description:
      "Design infrastructure that can grow with demand, support expansion, and adapt to new workflows without creating operational friction.",
    iconType: "architecture",
  },
  {
    title: "Operational visibility",
    description:
      "Give teams clear insight into system health, performance, and dependencies so decisions can be made faster and with confidence.",
    iconType: "visibility",
  },
];

const THEMES = {
  orange: {
    iconClass: "text-orange-dark",
    backClass: "bg-orange-mid",
    dividerClass: "!border-[#AB290E]",
    expandIconClass: "",
    sectionClass: "",
    cardsSectionClass: "bg-gray-night-green text-gray-off-white",
  },
  green: {
    iconClass: "text-green-dark",
    backClass: "bg-green-light",
    dividerClass: "border-[#006623]",
    expandIconClass: "text-gray-off-white tio-6",
    sectionClass: "bg-[#070B09]",
    cardsSectionClass: "bg-[#070B09] text-gray-off-white",
  },
};

function VisionIcon({ type, className }) {
  if (type === "ambitious") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        className={className}
      >
        <path
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeWidth="0.7"
          d="M5 35V25h10V15h10V5h10"
        />
      </svg>
    );
  }

  if (type === "collaborative") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        className={className}
      >
        <path
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeWidth="0.7"
          d="M13.333 5 20 7.5l2.667 6.25L20 20l-6.667 2.5L6.667 20 4 13.75 6.667 7.5zM26.667 17.5l6.666 2.5L36 26.25l-2.666 6.25-6.667 2.5L20 32.5l-2.666-6.25L20 20z"
        />
        <path
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeWidth="0.7"
          d="M26.667 5 20 7.5l-2.666 6.25L20 20l6.667 2.5 6.666-2.5L36 13.75 33.334 7.5zM13.333 17.5 6.667 20 4 26.25l2.667 6.25 6.666 2.5L20 32.5l2.667-6.25L20 20z"
        />
      </svg>
    );
  }

  if (type === "entrepreneurial") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        className={className}
      >
        <path
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeWidth="0.7"
          d="M32.5 31.063v-5l2.5-2.5v-10l-5-5M28.906 33.563v-7.5h-12.5l-5-5"
        />
        <path
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeWidth="0.7"
          d="M32.5 21.063h-15l-5-5H5v-5l2.5-2.5M17.5 13.094H10M31.25 17l-7.5-10h-10l-2.5 2.5M25.469 18.563l-3.75-5"
        />
      </svg>
    );
  }

  if (type === "meritocratic") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        className={className}
      >
        <path
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeWidth="0.7"
          d="M5 14h30M5 26.857h30"
        />
      </svg>
    );
  }

  if (type === "security") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        className={className}
      >
        <path
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="0.7"
          d="M5 35V5h30v30L10 10h20z"
        />
      </svg>
    );
  }

  if (type === "architecture") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        className={className}
      >
        <path
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeWidth="0.7"
          d="M13.571 16H5v8.571h8.571zM24.286 16h-8.572v8.571h8.572zM35 16h-8.571v8.571h8.57z"
        />
      </svg>
    );
  }

  if (type === "visibility") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        className={className}
      >
        <path
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="0.7"
          d="m19.61 36 6.573-4.8V24l-6.574-4.8-6.573 4.8v7.2z"
        />
        <path
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="0.7"
          d="M19.61 36v-7.2l6.573-4.8M13.036 24l6.573 4.8M28.375 21.6l6.574-4.8V9.6l-6.574-4.8L21.8 9.6v7.2z"
        />
        <path
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="0.7"
          d="M28.375 21.599V14.4l6.574-4.8M21.8 9.6l6.575 4.8M11.574 20.8l6.575-4.8V8.8L11.573 4 5 8.8V16z"
        />
        <path
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="0.7"
          d="M11.574 20.8v-7.201L18.149 8.8M5 8.8l6.573 4.799"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 84 84"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m20.47 21.53.53-1.28h42v1.5H22.81l40.72 40.72-.53 1.28H21v-1.5h40.19z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M42.75 10.5v63h-1.5v-63z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ExpandIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 41"
      className={`absolute right-6 top-6 z-10 h-[3.5rem] w-[3.5rem] ${className}`.trim()}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.405 30.937v-20h1.19v20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M30 21.532H10v-1.19h20z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CollapseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 -1 40 40"
      className="absolute right-6 top-6 z-10 h-[3.5rem] w-[3.5rem]"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M30 20.595H10v-1.19h20z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CardBody({ item }) {
  if (item.bullets?.length) {
    return (
      <ul>
        {item.bullets.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    );
  }

  return item.description;
}

function VisionCard({ item, isFlipped, onToggle, onEnter, onLeave, theme }) {
  const iconClass = `h-[5.25rem] w-[5.25rem] ${theme.iconClass}`;

  return (
    <button
      type="button"
      onClick={onToggle}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className={`flipper card relative col-span-1 flex h-[15.625rem] w-full shrink-0 justify-center overflow-visible text-left transition-all md:h-[17.8125rem] ${isFlipped ? "flipper--flipped" : ""
        }`}
      aria-pressed={isFlipped}
    >
      <div className="front bevel bg-gray-defi-charcoal">
        <div className="relative flex h-full flex-col justify-between p-6">
          <div>
            <VisionIcon type={item.iconType} className={iconClass} />
          </div>
          <div className="text-xl text-gray-off-white md:text-2xl">
            {item.title}
          </div>
          <ExpandIcon className={theme.expandIconClass} />
        </div>
      </div>

      <div className={`back bevel ${theme.backClass}`}>
        <div className="flex h-full flex-col justify-end text-gray-night-green md:flex-row md:justify-start">
          <div className="flex flex-col justify-end gap-4 p-4 md:p-6">
            <p className="text-xl md:text-2xl">{item.title}</p>
            <div className="removePaddingList removeSpacesList bullet-text-gray-night-green text-sm">
              <CardBody item={item} />
            </div>
          </div>
          <CollapseIcon />
        </div>
      </div>
    </button>
  );
}

export default function OurVision({
  title = "Principles that guide our vision",
  description,
  items = visionItems,
  headingId = "principles-that-guide-our-vision",
  variant = "orange",
  dividerClassName,
}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const theme = THEMES[variant] ?? THEMES.orange;
  const dividerClass = dividerClassName ?? theme.dividerClass;
  const orderedItems =
    items?.length > 0
      ? items
        .slice()
        .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0))
      : visionItems;

  return (
    <section className={theme.sectionClass}>
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id={headingId}
              className="font-blender text-xl uppercase text-green-dark"
            >
              {title}
            </h2>
            {description ? (
              <p className="max-w-3xl text-base leading-relaxed text-[#A7ACA8] md:text-lg">
                {description}
              </p>
            ) : null}
          </div>
          <hr className="!border-[#AB290E]" />
        </div>
        <section className={theme.cardsSectionClass}>
          <div className="flex flex-col gap-6 gap-y-8 overflow-hidden md:grid md:grid-cols-2">
            {orderedItems.map((item, index) => (
              <VisionCard
                key={item.title}
                item={item}
                theme={theme}
                isFlipped={activeIndex === index}
                onToggle={() =>
                  setActiveIndex((current) =>
                    current === index ? null : index,
                  )
                }
                onEnter={() => setActiveIndex(index)}
                onLeave={() =>
                  setActiveIndex((current) =>
                    current === index ? null : current,
                  )
                }
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
