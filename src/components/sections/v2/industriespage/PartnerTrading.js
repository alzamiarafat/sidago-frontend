"use client";

import { useEffect, useRef } from "react";

const LOGO_HEIGHT_PX = 100;

function PartnerLogo({ logo }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt="Partner trading venue logo"
      loading="eager"
      decoding="async"
      className="block w-auto shrink-0 pr-[6.25rem]"
      style={{ height: `${LOGO_HEIGHT_PX}px`, width: "auto" }}
      src={`/images/partner-trading/Liquidity-–-${logo}.svg`}
    />
  );
}

export default function PartnerTrading({ titleColor = "text-purple-mid" }) {
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

  const duplicatedRowOne = [...rowOne, ...rowOne];
  const duplicatedRowTwo = [...rowTwo, ...rowTwo];

  useEffect(() => {
    const track1 = rowOneRef.current;
    const track2 = rowTwoRef.current;
    if (!track1 || !track2) {
      return undefined;
    }

    let animationFrame;
    let position = 0;
    const speed = 0.9;

    const scroll = () => {
      position += speed;
      const halfWidth = track1.scrollWidth / 2;

      if (position >= halfWidth) {
        position = 0;
      }

      track1.style.transform = `translateX(-${position}px)`;
      track2.style.transform = `translateX(${-halfWidth + position}px)`;

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const maskStyle = {
    WebkitMaskImage:
      "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
    maskImage:
      "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
  };

  return (
    <section className="bg-gray-defi-shadow">
      <div className="container py-9 md:py-11 lg:py-12">
        <div className="pb-5 md:pb-6">
          <div className="relative">
            <div className="flex flex-col gap-4 lg:gap-5">
              <h2
                className="z-10 inline-block max-w-xl text-xl sm:text-[1.5rem] lg:text-2xl"
                id="our-partner-trading-venues"
              >
                Our <span className={titleColor}> partner trading</span> venues
              </h2>
            </div>
          </div>
        </div>

        <section className="bg-gray-defi-shadow text-gray-off-white">
          <div
            className="relative flex flex-col overflow-hidden"
            style={maskStyle}
          >
            <div ref={rowOneRef} className="flex w-max items-center">
              {duplicatedRowOne.map((logo, index) => (
                <span
                  key={`row1-${index}`}
                  aria-hidden={index >= rowOne.length}
                  className="inline-flex shrink-0"
                >
                  <PartnerLogo logo={logo} />
                </span>
              ))}
            </div>

            <div
              ref={rowTwoRef}
              className="mt-1 flex w-max items-center md:mt-1.5"
            >
              {duplicatedRowTwo.map((logo, index) => (
                <span
                  key={`row2-${index}`}
                  aria-hidden={index >= rowTwo.length}
                  className="inline-flex shrink-0"
                >
                  <PartnerLogo logo={logo} />
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
