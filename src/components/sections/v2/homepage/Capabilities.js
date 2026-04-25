import React, { useRef } from "react";

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
  bgColor = "bg-gray-night-green",
  textColor = "text-gray-off-white",
  hoverColor = "bg-gray-defi-shadow",
  borderColor = "border-gray-defi-shadow",
}) {
  const videoRefs = useRef([]);
  const dividerClass = getDividerClass(borderColor);

  return (
    <section className={`hidden flex-col lg:flex ${bgColor} ${textColor}`}>
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
              style={{ position: "relative" }}
              className={`group/motion-accordion transition-all duration-500 hover:${hoverColor}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="sr-only">{item.sr}</span>

              <div className="relative my-xl flex gap-2xl overflow-hidden transition-all duration-500 group-hover/motion-accordion:my-4xl container">
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
                  className="ml-[--arrow-offset] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] duration-500"
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
    </section>
  );
}
