"use client";
import { useEffect, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

export default function MarketTicker() {
  const coins = [
    { title: "BTC", price: "$ 0.097", avg: "-6.21%" },
    { title: "ETH", price: "$ 0.097", avg: "-6.21%" },
    { title: "DOGE", price: "$ 0.097", avg: "-6.21%" },
    { title: "DYDX", price: "$ 0.097", avg: "-6.21%" },
    { title: "OP", price: "$ 0.097", avg: "-6.21%" },
    { title: "AAVE", price: "$ 0.097", avg: "-6.21%" },
    { title: "UNI", price: "$ 0.097", avg: "-6.21%" },
    { title: "SOL", price: "$ 0.097", avg: "-6.21%" },
  ];
  const total = coins.length;

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev - 360 / total);
    }, 2000);

    return () => clearInterval(interval);
  }, [total]);

  const radius = 120;

  return (
    <div style={{ backgroundColor: "rgb(50 57 53 / var(--tw-bg-opacity, 1))" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <section>
          <div className="relative text-gray-off-white w-full py-3">
            <div className="relative h-[140px] sm:h-[140px] md:h-[150px] lg:h-[120px] perspective-[1000px] overflow-hidden">
              <div
                className="absolute inset-0 transition-transform duration-700 ease-in-out"
                style={{
                  transform: `rotateX(${rotation}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {coins.map((coin, index) => {
                  const angle = (360 / total) * index;

                  return (
                    <div
                      key={coin.title}
                      className="absolute inset-0 w-full left-1/2 -translate-x-1/2 flex items-center justify-center [backface-visibility:hidden]"
                      style={{
                        transform: `rotateX(${angle}deg) translateZ(${radius}px)`,
                      }}
                    >
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 w-full max-w-full sm:max-w-full lg:max-w-5xl text-center px-2 sm:px-3 lg:px-0">
                        {/* Title */}
                        <div className="flex flex-col text-gray-300">
                          <span className="text-3xl sm:text-4xl lg:text-[5.625rem] font-blender uppercase text-gray-tradfi-silver">
                            {coin.title}
                          </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-center text-gray-300">
                          <span className="text-lg sm:text-2xl lg:text-2xl font-blender uppercase text-gray-tradfi-silver">
                            {coin.price}
                          </span>
                        </div>

                        {/* Average */}
                        <div className="flex items-center justify-center gap-1 sm:gap-2 lg:gap-2">
                          <span
                            className="text-lg sm:text-2xl lg:text-2xl font-blender uppercase text-gray-tradfi-silver"
                            style={{
                              color: "rgb(236 91 91/var(--tw-text-opacity,1))",
                            }}
                          >
                            {coin.avg}
                          </span>
                          <TiArrowSortedDown
                            style={{
                              color: "rgb(236 91 91/var(--tw-text-opacity,1))",
                            }}
                            className="text-lg sm:text-xl lg:text-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Top fade */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-defi-graphite via-transparent to-transparent"></div>

              {/* Bottom fade */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-defi-graphite via-transparent to-transparent"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
