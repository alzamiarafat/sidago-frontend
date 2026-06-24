"use client";

import HeroVideoBackground from "@/src/components/sections/v2/homepage/HeroVideoBackground";

export default function CompanyHero({ hero }) {
  if (!hero?.titles?.length || !hero?.subtitle) {
    return null;
  }

  return (
    <section className="company-hero-section relative flex min-h-svh flex-col justify-end bg-gray-night-green text-gray-off-white lg:min-h-[75svh] lg:flex-row lg:items-center">
      <div className="absolute inset-0">
        <HeroVideoBackground
          videoSrc={hero.videoSrc}
          videoClass={hero.videoClass ?? "company-hero-video"}
          loop={hero.loop ?? true}
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-opacity-70 bg-gradient-to-t from-gray-night-green to-transparent to-50% lg:bg-gradient-to-r lg:to-100%" />
      <div className="container relative z-10 grid grid-cols-4 items-center py-block">
        <div className="col-span-2 flex flex-col items-start gap-2xl lg:pr-2xl">
          <h1 className="text-2xl lg:text-3xl">
            {hero.titles.map((piece) => (
              <span key={`${piece.sortOrder}-${piece.title}`} className={piece.className}>
                {piece.title}
              </span>
            ))}
          </h1>
          <div className="text-base lg:text-lg">{hero.subtitle}</div>
        </div>
      </div>
    </section>
  );
}
