"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

const tabs = [
  {
    label: "Speed",
    title: "Sidago Performance shortens delivery loops without losing control.",
    description:
      "Sidago Performance tracks cycle time, blocker age, handoff delay, and decision queues so teams know where speed is being lost.",
    image: "/images/sidago-performance-dashboard.png",
    stats: [
      ["32%", "less idle time"],
      ["18h", "average cycle"],
      ["7", "active blockers"],
    ],
  },
  {
    label: "Quality",
    title: "Sidago Performance keeps standards cleaner across repeated work.",
    description:
      "Sidago Performance connects checklists, review points, escalation rules, and exception trends to reduce avoidable rework.",
    image: "/images/sidago-performance-dashboard.png",
    stats: [
      ["28%", "less rework"],
      ["94%", "standard coverage"],
      ["11", "quality checks"],
    ],
  },
  {
    label: "Capacity",
    title: "Sidago Performance gives teams a practical view of workload.",
    description:
      "Sidago Performance uses capacity signals to balance teams, plan support coverage, and prevent silent overload before it slows delivery.",
    image: "/images/sidago-performance-dashboard.png",
    stats: [
      ["86%", "owner coverage"],
      ["4.2x", "review cadence"],
      ["15", "open queues"],
    ],
  },
];

export default function PerformanceTabsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[activeIndex];
  const progressWidth = useMemo(
    () => `${((activeIndex + 1) / tabs.length) * 100}%`,
    [activeIndex],
  );

  return (
    <section className="bg-[#e9ece9] text-[#111511]">
      <div className="container py-16 md:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="font-blender text-sm uppercase tracking-[0.24em] text-[#E7512F] md:text-base">
              Sidago Performance Lens
            </div>
            <h2 className="mt-5 text-3xl font-normal leading-[1.06] text-[#111511] md:text-5xl">
              Choose the Sidago Performance lens your team needs.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#3d463f] md:text-lg">
              Sidago Performance can focus on speed, quality, or capacity while
              keeping each view tied to the same operating rhythm.
            </p>
          </div>

          <div className="flex w-full gap-1 rounded-[1rem] bg-white px-3 py-1 shadow-[0_12px_34px_rgba(17,21,17,0.08)] sm:w-auto sm:min-w-[23rem] sm:px-3">
            {tabs.map((tab, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={tab.label}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex min-h-10 flex-1 items-center justify-center px-2 py-1 text-center text-sm transition-colors duration-300 sm:flex-none sm:min-w-[6.1rem] md:text-[0.95rem] ${
                    isActive
                      ? "font-semibold text-[#f075e4]"
                      : "text-[#3d463f] hover:text-[#111511]"
                  }`}
                >
                  <span
                    className={`flex flex-col items-center justify-center gap-1.5 ${
                      isActive ? "text-[#f075e4]" : ""
                    }`}
                  >
                    {tab.label}
                    <span className="relative h-1 w-10">
                      {isActive ? (
                        <motion.span
                          layoutId="performance-tab-underline"
                          className="absolute inset-0 rounded-full bg-[#f075e4]"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-stretch">
          <div className="relative min-h-[15.5rem] overflow-hidden rounded-lg bg-white shadow-[0_24px_70px_rgba(17,21,17,0.12)] md:min-h-[21rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab.label}-image`}
                initial={{ opacity: 0, x: 18, scale: 1.02 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -18, scale: 0.98 }}
                transition={{ duration: 0.32, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={activeTab.image}
                  alt={activeTab.title}
                  fill
                  className="performance-tab-image object-cover"
                  sizes="(min-width: 1024px) 43rem, 100vw"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111511]/34 via-transparent to-transparent" />
            <div className="absolute left-5 top-5 rounded-full bg-white/84 px-4 py-2 font-blender text-xs uppercase tracking-[0.18em] text-[#111511] shadow-[0_12px_30px_rgba(17,21,17,0.12)] backdrop-blur">
              {activeTab.label} view
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-lg bg-[#111511] p-5 text-white shadow-[0_24px_70px_rgba(17,21,17,0.14)] md:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="flex h-full flex-col justify-between"
              >
                <div>
                  <div className="font-blender text-xs uppercase tracking-[0.22em] text-[#f075e4]">
                    {activeTab.label} performance
                  </div>
                  <h3 className="mt-3 text-2xl leading-tight text-white md:text-[2rem]">
                    {activeTab.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-off-white/68 md:text-base">
                    {activeTab.description}
                  </p>
                </div>

                <div className="mt-4 divide-y divide-white/10">
                  {activeTab.stats.map(([value, label]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-5 py-2.5"
                    >
                      <div className="text-sm uppercase tracking-[0.16em] text-gray-off-white/48">
                        {label}
                      </div>
                      <div className="font-blender text-3xl leading-none text-[#f075e4] md:text-4xl">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-[#f075e4]"
                    animate={{ width: progressWidth }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
