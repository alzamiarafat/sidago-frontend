"use client";

import { useEffect, useRef } from "react";

export default function AvailablePartner({
  bgColor = "bg-gray-off-white",
  titleColor = "text-black",
}) {
  const trackRef = useRef(null);

  const logos = [
    "/images/OTC-Carousel-%E2%80%93-CME-Group.svg",
    "/images/OTC-Carousel-%E2%80%93-Talos.svg",
    "/images/OTC-Carousel-%E2%80%93-Elwood.svg",
    "/images/OTC-Carousel-%E2%80%93-Eurex.svg",
    "/images/OTC-Carousel-%E2%80%93-Wyden.svg",
    "/images/OTC-Carousel-%E2%80%93-Lucera.svg",
    "/images/OTC-Carousel-%E2%80%93-oneZero.svg",
    "/images/OTC-Carousel-%E2%80%93-Cypator.svg",
    "/images/OTC-Carousel-%E2%80%93-Crossover.svg",
    "/images/OTC-Carousel-%E2%80%93-Integral.svg",
  ];

  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return undefined;
    }

    let animationFrame;
    let position = 0;
    const speed = 0.9;

    const scroll = () => {
      position += speed;

      if (position >= track.scrollWidth / 2) {
        position = 0;
      }

      track.style.transform = `translateX(-${position}px)`;
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className={`${bgColor}`}>
      <div className="container py-8 md:py-10 lg:py-12">
        <div className="pb-5 md:pb-6 lg:pb-7">
          <div className="relative">
            <div className="flex flex-col gap-6 lg:gap-8">
              <h2
                className={`z-10 inline-block max-w-xl text-2xl ${titleColor} sm:text-[1.85rem] lg:text-3xl`}
                id="also-available-<br>via-partners"
              >
                Also available <br />
                via partners
              </h2>
            </div>
          </div>
        </div>

        <section className={`${bgColor} text-gray-night-green`}>
          <div className="relative flex flex-col overflow-hidden">
            <div
              className="relative flex overflow-hidden"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                maskImage:
                  "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              }}
            >
              <div
                ref={trackRef}
                className="flex w-max items-center gap-10 md:gap-16"
              >
                {duplicatedLogos.map((src, i) => (
                  <img
                    key={`${src}-${i}`}
                    src={src}
                    alt="Partner logo"
                    aria-hidden={i >= logos.length}
                    loading="eager"
                    width="1152"
                    height="1152"
                    decoding="async"
                    data-nimg="1"
                    className="h-[0.9rem] w-auto shrink-0 md:h-[1.32rem] lg:h-[1.56rem]"
                    style={{
                      color: "transparent",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
