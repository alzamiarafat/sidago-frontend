"use client";

import { useState } from "react";

const supportItems = [
  {
    title: "Protocol design",
    expandedClassName: "bg-green-light",
    description:
      "From adjusting inflation schedules to redesigning reward programs and token utility, the Sidago Governance team can help to ensure that your protocol’s incentives are well-balanced, promote key growth objectives, and align key stakeholders.",
  },
  {
    title: "Governance structures",
    expandedClassName: "bg-orange-light",
    description:
      "Sidago can help you select and set up the highest quality and industry-leading on-chain and off-chain governance architecture solutions, from initialising your voting parameters on OpenZeppelin’s Governor Bravo smart contracts to setting up voting strategies for your off-chain Snapshots.",
  },
  {
    title: "Active DAO contribution",
    expandedClassName: "bg-purple-light",
    description:
      "Sidago sits on large multisigs for DAOs, ensuring the safekeeping of treasury funds and closely overseeing smart contract upgrades, while participating in councils that are mandated with incentive expenditure, treasury management, and grants on behalf of DAOs.",
  },
  {
    title: "Delegate duties",
    expandedClassName: "bg-blue-light",
    description:
      "As an active delegate, Sidago contributes proposals and casts votes, deploys on-chain/off-chain proposals, assesses risk and growth objectives, and streams coverage and analysis of key votes and proposals to our institutional and corporate channels.",
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
                Supporting
                <span className="text-orange-dark"> at every stage</span>
              </h2>
              <div className="z-10 max-w-[85%] md:max-w-[70%]">
                Sidago supports protocols across various stages of growth
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
