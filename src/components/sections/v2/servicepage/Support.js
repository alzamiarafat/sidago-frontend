"use client";

import { useState } from "react";

const supportItems = [
  {
    title: "Business infrastructure setup",
    expandedClassName: "bg-green-light",
    description:
      "Sidago helps businesses set up the operational infrastructure behind daily execution, from core systems and workflow design to the stable foundations teams need to work efficiently at scale.",
  },
  {
    title: "Process continuity",
    expandedClassName: "bg-orange-light",
    description:
      "We build dependable operating rhythms, fallback processes, and support structures that reduce disruption and keep business-critical work moving even as demand changes.",
  },
  {
    title: "Visibility and support",
    expandedClassName: "bg-purple-light",
    description:
      "Sidago gives clients clearer visibility into performance, bottlenecks, and operational risk through structured oversight, responsive support, and consistent day-to-day management.",
  },
  {
    title: "Control and reliability",
    expandedClassName: "bg-blue-light",
    description:
      "Our infrastructure approach focuses on control, consistency, and reliability so businesses can scale service delivery, protect essential workflows, and maintain confidence in execution.",
  },
];

function ToggleIcon({ open, dark }) {
  const tone = dark ? "bg-gray-night-green" : "bg-orange-dark";

  return (
    <div
      className={`relative flex h-3xl w-3xl items-center justify-center transition-all ${
        dark ? "text-gray-night-green" : "text-orange-dark"
      }`}
    >
      <div className={`absolute h-[3.75%] w-[50%] ${tone}`} />
      <div
        className={`absolute h-[50%] w-[3.75%] transition-all duration-500 ${tone} ${
          open ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
        }`}
      />
    </div>
  );
}

function SupportAccordionItem({
  item,
  open,
  onMouseEnter,
  onMouseLeave,
  desktop = false,
}) {
  const textTone = open ? "text-gray-night-green" : "text-gray-off-white";
  const sectionTone = open ? item.expandedClassName : "bg-gray-night-green";
  const copyTone = open ? "text-gray-night-green/90" : "text-gray-off-white/0";

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`w-full border-t border-white/10 text-left transition-all duration-500 ${sectionTone}`}
    >
      <div
        className={`container overflow-hidden py-xl transition-all duration-500 ${
          open ? "lg:py-3xl" : "lg:py-xl"
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2xl lg:gap-lg">
            <ToggleIcon open={open} dark={open} />
            <div
              className={`flex-1 text-xl transition-colors duration-500 lg:text-2xl ${textTone}`}
            >
              {item.title}
            </div>
          </div>

          <div
            className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
              open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0">
              <div className="flex gap-2xl lg:gap-lg">
                {desktop ? <div className="hidden w-3xl lg:block" /> : null}
                <div className="flex-1">
                  <div
                    className={`max-w-[61rem] text-sm transition-all duration-500 lg:text-lg ${copyTone} ${
                      open ? "translate-y-0 pt-2 lg:pt-3" : "translate-y-8"
                    }`}
                  >
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Support() {
  const [desktopActiveIndex, setDesktopActiveIndex] = useState(null);

  return (
    <>
      <section>
        <div className="container py-block pb-xl">
          <div className="relative">
            <div className="flex flex-col gap-6 lg:gap-8">
              <h2
                className="z-10 inline-block max-w-[60%] text-2xl lg:text-3xl"
                id="supporting-<alt>at-every-stage</alt>"
              >
                Supporting infrastructure
                <span className="text-orange-dark"> at every stage</span>
              </h2>
              <div className="z-10 max-w-[85%] md:max-w-[70%]">
                Sidago builds the operational infrastructure that helps
                businesses run with more control, consistency, and confidence
                as they grow.
              </div>
            </div>
            <img
              alt="Supporting <alt>at every stage</alt>"
              loading="lazy"
              width="1152"
              height="1152"
              decoding="async"
              data-nimg="1"
              className="absolute -top-block right-0 w-[50%] md:w-[40%] lg:w-[28%]"
              style={{ color: "transparent" }}
              src="https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/18223135/Governance-Watermark2.svg"
            />
          </div>
        </div>
      </section>

      <section className="hidden bg-gray-night-green text-gray-off-white lg:flex lg:flex-col">
        {supportItems.map((item, index) => (
          <SupportAccordionItem
            key={item.title}
            item={item}
            open={desktopActiveIndex === index}
            onMouseEnter={() => setDesktopActiveIndex(index)}
            onMouseLeave={() => setDesktopActiveIndex(null)}
            desktop
          />
        ))}
      </section>

      <section className="flex flex-col bg-gray-night-green text-gray-off-white lg:hidden">
        {supportItems.map((item, index) => (
          <SupportAccordionItem
            key={item.title}
            item={item}
            open={false}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
          />
        ))}
      </section>
    </>
  );
}
