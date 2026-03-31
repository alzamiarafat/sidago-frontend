"use client";

import { useEffect, useRef } from "react";

export default function PartnerTrading() {
  const rowOneRef = useRef(null);
  const rowTwoRef = useRef(null);

  const rowOne = [
    "Coinbase-1",
    "Deribit-1",
    "Uniswap-1",
    "Kraken-1",
    "Orca-2",
    "1inch",
    "Vertex-1",
    "Arkham",
    "Coinbase-1",
    "Deribit-1",
    "Uniswap-1",
    "Kraken-1",
    "Orca-2",
    "1inch",
    "Vertex-1",
    "Arkham",
  ];

  const rowTwo = [
    "dYdX-1",
    "Binance-1",
    "Backpack-2",
    "Bitstamp-1",
    "Okx-1",
    "Raydium-1",
    "Hashflow-1",
    "dYdX-1",
    "Binance-1",
    "Backpack-2",
    "Bitstamp-1",
    "Okx-1",
    "Raydium-1",
    "Hashflow-1",
  ];

  useEffect(() => {
    let animationFrame;
    let position = 0;
    const speed = 0.9;

    const scroll = () => {
      const track1 = rowOneRef.current;
      const track2 = rowTwoRef.current;
      if (!track1 || !track2) return;

      position += speed;
      const halfWidth = track1.scrollWidth / 2;

      if (position >= halfWidth) {
        position = 0;
      }

      // Row 1: Right to Left
      track1.style.transform = `translateX(-${position}px)`;

      // Row 2: Left to Right
      track2.style.transform = `translateX(${-halfWidth + position}px)`;

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Shared Mask Style
  const maskStyle = {
    WebkitMaskImage:
      "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
    maskImage:
      "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
  };

  return (
    <section className="bg-gray-defi-shadow">
      <div className="container py-block">
        <div className="pb-xl">
          <div className="relative">
            <div className="flex flex-col gap-6 lg:gap-8">
              <h2
                className="z-10 inline-block max-w-[60%] text-2xl lg:text-3xl"
                id="our-partner-trading-venues"
              >
                Our <span className="text-purple-mid"> partner trading</span>{" "}
                venues
              </h2>
            </div>
          </div>
        </div>

        <section className="bg-gray-defi-shadow text-gray-off-white">
          {/* Apply the mask here to cover both rows */}
          <div
            className="relative flex flex-col overflow-hidden"
            style={maskStyle}
          >
            {/* Row 1: Right to Left */}
            <div ref={rowOneRef} className="flex w-max">
              {rowOne.map((logo, index) => (
                <img
                  key={`row1-${index}`}
                  alt="Logo"
                  className="pr-[6.25rem] shrink-0"
                  style={{ color: "transparent", height: "100px" }}
                  src={`images/partner-trading/Liquidity-–-${logo}.svg`}
                />
              ))}
            </div>

            {/* Row 2: Left to Right */}
            <div ref={rowTwoRef} className="flex w-max">
              {rowTwo.map((logo, index) => (
                <img
                  key={`row2-${index}`}
                  alt="Logo"
                  className="pr-[6.25rem] shrink-0"
                  style={{ color: "transparent", height: "100px" }}
                  src={`images/partner-trading/Liquidity-–-${logo}.svg`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
