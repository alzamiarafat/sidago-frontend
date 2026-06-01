import React from "react";

export default function PartnerBenefit({ benefits }) {
  return (
    <section>
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id="sidago-as-your-liquidity-partner"
              className="font-blender text-xl uppercase text-green-dark"
            >
              Sidago as your liquidity partner
            </h2>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>

        <section className="bg-gray-night-green text-gray-off-white">
          <div className="grid gap-xl lg:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-md bevel lg:gap-2xl lg:bg-gray-defi-charcoal lg:p-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox={benefit.viewBox}
                  className="h-[3.5rem] w-[3.5rem] shrink-0 lg:h-[6.5rem] lg:w-[6.5rem] text-purple-mid"
                >
                  {benefit.svgPath}
                </svg>
                <div className="text-lg lg:text-xl lg:text-gray-off-white">
                  {benefit.text}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
