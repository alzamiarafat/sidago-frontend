import { useEffect, useRef } from "react";

export default function AvailablePartner() {
  const trackRef = useRef(null);

  const logos = [
    "images/OTC-Carousel-%E2%80%93-CME-Group.svg",
    "images/OTC-Carousel-%E2%80%93-Talos.svg",
    "images/OTC-Carousel-%E2%80%93-Elwood.svg",
    "images/OTC-Carousel-%E2%80%93-Eurex.svg",
    "images/OTC-Carousel-%E2%80%93-Wyden.svg",
    "images/OTC-Carousel-%E2%80%93-Lucera.svg",
    "images/OTC-Carousel-%E2%80%93-oneZero.svg",
    "images/OTC-Carousel-%E2%80%93-Cypator.svg",
    "images/OTC-Carousel-%E2%80%93-Crossover.svg",
    "images/OTC-Carousel-%E2%80%93-Integral.svg",
  ];

  useEffect(() => {
    const track = trackRef.current;
    let animationFrame;
    let position = 0;
    const speed = 0.9; // adjust speed here

    const scroll = () => {
      position += speed;

      // when half passed, reset WITHOUT visible jump
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
    <section className="bg-gray-off-white">
      <div className="container py-block">
        <div className="pb-xl">
          <div className="relative">
            <div className="flex flex-col gap-6 lg:gap-8">
              <h2
                className="z-10 inline-block max-w-[60%] text-2xl lg:text-3xl text-black"
                id="also-available-<br>via-partners"
              >
                Also available <br />
                via partners
              </h2>
            </div>
          </div>
        </div>

        <section className="bg-gray-off-white text-gray-night-green">
          <div className="relative flex flex-col overflow-hidden">
            {/* CAROUSEL WITH INNER FADE */}
            <div
              className="relative flex overflow-hidden"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                maskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <div ref={trackRef} className="flex w-max">
                {/* ORIGINAL */}
                {logos.map((src, i) => (
                  <img
                    key={`logo1-${i}`}
                    src={src}
                    alt="Logo"
                    loading="eager"
                    width="1152"
                    height="1152"
                    decoding="async"
                    data-nimg="1"
                    className="pr-[6.25rem]"
                    style={{
                      color: "transparent",
                      height: "100px",
                    }}
                  />
                ))}

                {/* DUPLICATE */}
                {logos.map((src, i) => (
                  <img
                    key={`logo2-${i}`}
                    src={src}
                    alt="Logo"
                    loading="eager"
                    width="1152"
                    height="1152"
                    decoding="async"
                    data-nimg="1"
                    className="pr-[6.25rem]"
                    style={{
                      color: "transparent",
                      height: "100px",
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
