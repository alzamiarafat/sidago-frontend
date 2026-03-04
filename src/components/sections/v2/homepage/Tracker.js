"use client";
import { useEffect, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

export default function MarketTicker() {
  const coins = [
    { title: "BTC", price: "$ 0.097", avg: "-6.21%" },
    { title: "ETH", price: "$ 0.097", avg: "-6.21%" },
    { title: "DGE", price: "$ 0.097", avg: "-6.21%" },
    { title: "DYX", price: "$ 0.097", avg: "-6.21%" },
    { title: "OPC", price: "$ 0.097", avg: "-6.21%" },
    { title: "AVE", price: "$ 0.097", avg: "-6.21%" },
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-26">
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
                      className="absolute inset-0 w-full flex justify-start [backface-visibility:hidden]"
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

    // <section className="relative overflow-hidden font-blender uppercase bg-gray-defi-graphite text-gray-off-white">
    //         <div className="container h-[calc(3rem+4rem)] py-2xl lg:h-[calc(5.625rem+4rem)]">
    //           <div className="ticker__scene h-full">
    //             <div
    //               className="ticker__coin absolute inset-0 flex items-center gap-md duration-500"
    //               style={{
    //                 transform:
    //                   "translateZ(-121px) rotateX(-0.7853981633974483rad) translateZ(121px)",
    //               }}
    //             >
    //               <div className="flex-1 text-3xl text-gray-tradfi-silver lg:text-[5.625rem]">
    //                 BTС
    //               </div>
    //             </div>
    //             <div
    //               className="ticker__coin absolute inset-0 flex items-center gap-md duration-500"
    //               style={{
    //                 transform:
    //                   "translateZ(-121px) rotateX(-1.5707963267948966rad) translateZ(121px)",
    //               }}
    //             >
    //               <div className="flex-1 text-3xl text-gray-tradfi-silver lg:text-[5.625rem]">
    //                 ETH
    //               </div>
    //             </div>
    //             <div
    //               className="ticker__coin absolute inset-0 flex items-center gap-md duration-500"
    //               style={{
    //                 transform:
    //                   "translateZ(-121px) rotateX(-2.356194490192345rad) translateZ(121px)",
    //               }}
    //             >
    //               <div className="flex-1 text-3xl text-gray-tradfi-silver lg:text-[5.625rem]">
    //                 DOGE
    //               </div>
    //             </div>
    //             <div
    //               className="ticker__coin absolute inset-0 flex items-center gap-md duration-500"
    //               style={{
    //                 transform:
    //                   "translateZ(-121px) rotateX(-3.141592653589793rad) translateZ(121px)",
    //               }}
    //             >
    //               <div className="flex-1 text-3xl text-gray-tradfi-silver lg:text-[5.625rem]">
    //                 DYDX
    //               </div>
    //             </div>
    //             <div
    //               className="ticker__coin absolute inset-0 flex items-center gap-md duration-500"
    //               style={{
    //                 transform:
    //                   "translateZ(-121px) rotateX(-3.9269908169872414rad) translateZ(121px)",
    //               }}
    //             >
    //               <div className="flex-1 text-3xl text-gray-tradfi-silver lg:text-[5.625rem]">
    //                 OP
    //               </div>
    //             </div>
    //             <div
    //               className="ticker__coin absolute inset-0 flex items-center gap-md duration-500"
    //               style={{
    //                 transform:
    //                   "translateZ(-121px) rotateX(-4.71238898038469rad) translateZ(121px)",
    //               }}
    //             >
    //               <div className="flex-1 text-3xl text-gray-tradfi-silver lg:text-[5.625rem]">
    //                 AAVE
    //               </div>
    //             </div>
    //             <div
    //               className="ticker__coin absolute inset-0 flex items-center gap-md duration-500"
    //               style={{
    //                 transform:
    //                   "translateZ(-121px) rotateX(-5.497787143782138rad) translateZ(121px)",
    //               }}
    //             >
    //               <div className="flex-1 text-3xl text-gray-tradfi-silver lg:text-[5.625rem]">
    //                 UNI
    //               </div>
    //             </div>
    //             <div
    //               className="ticker__coin absolute inset-0 flex items-center gap-md duration-500"
    //               style={{
    //                 transform:
    //                   "translateZ(-121px) rotateX(-6.283185307179586rad) translateZ(121px)",
    //               }}
    //             >
    //               <div className="flex-1 text-3xl text-gray-tradfi-silver lg:text-[5.625rem]">
    //                 SOL
    //               </div>
    //             </div>
    //           </div>
    //           <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-15% via-transparent via-30% from-gray-defi-graphite"></div>
    //           <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-15% via-transparent via-30% from-gray-defi-graphite"></div>
    //         </div>
    //       </section>
  );
}
