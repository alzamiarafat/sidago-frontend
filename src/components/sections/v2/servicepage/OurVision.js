"use client";

import { useState } from "react";

const visionItems = [
  {
    title: "Reliable uptime",
    description:
      "Build resilient systems with stable hosting, proactive monitoring, and rapid issue response to keep operations running without interruption.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 84 84"
        className="h-[5.25rem] w-[5.25rem] text-orange-dark"
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
    ),
  },
  {
    title: "Secure by design",
    description:
      "Protect business-critical systems through controlled access, hardened environments, backup discipline, and continuous risk awareness.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        className="h-[5.25rem] w-[5.25rem] text-orange-dark"
      >
        <path
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="0.7"
          d="M5 35V5h30v30L10 10h20z"
        />
      </svg>
    ),
  },
  {
    title: "Scalable architecture",
    description:
      "Design infrastructure that can grow with demand, support expansion, and adapt to new workflows without creating operational friction.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        className="h-[5.25rem] w-[5.25rem] text-orange-dark"
      >
        <path
          stroke="currentColor"
          strokeLinejoin="bevel"
          strokeWidth="0.7"
          d="M13.571 16H5v8.571h8.571zM24.286 16h-8.572v8.571h8.572zM35 16h-8.571v8.571h8.57z"
        />
      </svg>
    ),
  },
  {
    title: "Operational visibility",
    description:
      "Give teams clear insight into system health, performance, and dependencies so decisions can be made faster and with confidence.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        className="h-[5.25rem] w-[5.25rem] text-orange-dark"
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
    ),
  },
];

function ExpandIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 41"
      className="absolute right-6 top-6 z-10 h-[3.5rem] w-[3.5rem]"
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

function VisionCard({ item, isFlipped, onToggle, onEnter, onLeave }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className={`flipper card relative col-span-1 flex h-[15.625rem] w-full shrink-0 justify-center overflow-visible text-left transition-all md:h-[17.8125rem] ${
        isFlipped ? "flipper--flipped" : ""
      }`}
      aria-pressed={isFlipped}
    >
      <div className="front bevel bg-gray-defi-charcoal">
        <div className="relative flex h-full flex-col justify-between p-6">
          <div>{item.icon}</div>
          <div className="text-xl text-gray-off-white md:text-2xl">
            {item.title}
          </div>
          <div className="text-gray-off-white">
            <ExpandIcon />
          </div>
        </div>
      </div>

      <div className="back bevel bg-orange-mid">
        <div className="flex h-full flex-col justify-end text-gray-night-green md:flex-row md:justify-start">
          <div className="flex flex-col justify-end gap-4 p-4 md:p-6">
            <p className="text-xl md:text-2xl">{item.title}</p>
            <div className="removePaddingList removeSpacesList bullet-text-gray-night-green text-sm">
              {item.description}
            </div>
          </div>
          <CollapseIcon />
        </div>
      </div>
    </button>
  );
}

export default function OurVision() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section>
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id="principles-that-guide-our-vision"
              className="font-blender text-xl uppercase text-green-dark"
            >
              Principles that guide our vision
            </h2>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>
        <section className="bg-gray-night-green text-gray-off-white">
          <div className="flex flex-col gap-6 gap-y-8 overflow-hidden md:grid md:grid-cols-2">
            {visionItems.map((item, index) => (
              <VisionCard
                key={item.title}
                item={item}
                isFlipped={activeIndex === index}
                onToggle={() =>
                  setActiveIndex((current) =>
                    current === index ? null : index,
                  )
                }
                onEnter={() => setActiveIndex(index)}
                onLeave={() => setActiveIndex((current) => (current === index ? null : current))}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
