"use client";

import React, { useRef } from "react";
import WhoWeServe from "@/src/components/sections/v2/homepage/WhoWeServe";

const CAPABILITY_HOVER_BG = "#141816";

function getDividerClass(borderColor) {
  if (borderColor === "bg-gray-defi-shadow") {
    return "bg-white/8";
  }

  if (borderColor?.startsWith("border-")) {
    return borderColor.replace("border-", "bg-");
  }

  return borderColor || "bg-white/8";
}

export default function Capabilities({
  items,
  whoWeServe,
  bgColor = "bg-gray-night-green",
  textColor = "text-gray-off-white",
  borderColor = "border-gray-defi-shadow",
}) {
  const videoRefs = useRef([]);
  const dividerClass = getDividerClass(borderColor);

  return (
    <section className={`flex flex-col ${bgColor} ${textColor}`}>
      <div className="container flex flex-col gap-md py-block lg:hidden">
        {items?.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="group/interactive relative flex min-h-[352px] w-full flex-col justify-end overflow-hidden bevel bg-[#1e2423] p-lg transition-colors duration-500"
          >
            <span className="sr-only">{item.sr}</span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/interactive:opacity-100"
              style={{ backgroundColor: CAPABILITY_HOVER_BG }}
            />

            <div className="pointer-events-none absolute right-[-1.5rem] top-[-0.75rem] z-10 h-[58%] w-[76%] overflow-hidden">
              <div className="absolute inset-0 bg-[#1e2423]" />
              <video
                playsInline
                preload="metadata"
                autoPlay
                loop
                muted
                className="h-full w-full origin-center scale-[1.85] object-cover opacity-95"
              >
                <source src={item.video} />
              </video>
            </div>

            <div className="relative z-20 pr-2xl">
              <h3 className="text-[50px] leading-none text-gray-off-white">
                {item.title}
              </h3>
              <p className="mt-lg text-base leading-6 text-gray-off-white">
                {item.description}
              </p>
            </div>

            <div className="relative z-20 mt-xl flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 40 40"
                className="h-9 w-9 text-gray-off-white transition-transform group-hover/interactive:translate-x-1"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>

      <div className="hidden lg:block">
        {items?.map((item, index) => {
        // const videoRef = useRef(null);

        const handleMouseEnter = () => {
          videoRefs.current[index]?.play();
        };

        const handleMouseLeave = () => {
          const activeVideo = videoRefs.current[index];
          activeVideo?.pause();

          if (activeVideo) {
            activeVideo.currentTime = 0;
          }
        };

        return (
          <React.Fragment key={index}>
            <a
              href={item.href}
              className="group/motion-accordion relative block w-full overflow-hidden transition-colors duration-500"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="sr-only">{item.sr}</span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover/motion-accordion:opacity-100"
                style={{ backgroundColor: CAPABILITY_HOVER_BG }}
              />

              <div className="container relative z-10 my-xl flex gap-2xl overflow-hidden transition-all duration-500 group-hover/motion-accordion:my-4xl">
                {/* TEXT */}
                <div className="relative top-[3.3rem] flex flex-1 flex-col justify-between transition-all delay-500 group-hover/motion-accordion:top-0">
                  <div className="text-3xl transition-all delay-500 group-hover/motion-accordion:text-green-dark">
                    {item.title}
                  </div>

                  <div className="text-xl opacity-0 transition-all delay-500 group-hover/motion-accordion:opacity-100">
                    {item.description}
                  </div>
                </div>

                {/* VIDEO */}
                <div className="relative overflow-hidden bevel bg-[#1e2423]">
                  <div className="absolute h-full w-full bevel bg-[#1e2423]"></div>

                  <video
                    ref={(node) => {
                      videoRefs.current[index] = node;
                    }}
                    playsInline
                    preload="metadata"
                    loop
                    muted
                    className="aspect-video w-[17rem] origin-center scale-[2] object-cover bevel"
                    style={{ transform: item.rotate }}
                  >
                    <source src={item.video} />
                  </video>
                </div>

                {/* ARROW (UNCHANGED) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 40 40"
                  className="ml-[--arrow-offset] shrink-0 transition-all duration-500 group-hover/motion-accordion:ml-0 group-hover/motion-accordion:mr-[--arrow-offset]"
                  style={{
                    "--arrow-offset": "1rem",
                    width: "2.5rem",
                  }}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>

            {/* Divider */}
            {index !== items.length - 1 && (
              <div className={`hidden h-px lg:block ${dividerClass} opacity-80`} />
            )}
          </React.Fragment>
        );
      })}
      </div>

      <WhoWeServe {...whoWeServe} />
    </section>
  );
}
