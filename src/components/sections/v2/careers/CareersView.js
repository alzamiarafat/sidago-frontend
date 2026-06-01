"use client";

import Link from "next/link";
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import CareersTeamsSection from "@/src/components/sections/v2/careers/CareersTeamsSection";
import CareersLifeSection from "@/src/components/sections/v2/careers/CareersLifeSection";
import CareersTeamTestimonialsSection from "@/src/components/sections/v2/careers/CareersTeamTestimonialsSection";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import Statistics from "@/src/components/sections/v2/homepage/Statistics";
import CareersQuoteSection from "@/src/components/sections/v2/careers/CareersQuoteSection";
import OurVision from "@/src/components/sections/v2/servicepage/OurVision";
import {
  benefits,
  heroBanner as defaultHeroBanner,
  hiringSteps,
  openRoles,
  quoteSection as defaultQuoteSection,
  statistics as defaultStatistics,
  values,
  teamsSection as defaultTeamsSection,
  lifeSection as defaultLifeSection,
  lifeStatsSection as defaultLifeStatsSection,
  teamTestimonialsSection as defaultTeamTestimonialsSection,
  valuesFlipSection as defaultValuesFlipSection,
} from "@/src/components/sections/v2/careers/data";

const BG = {
  deep: "bg-[#070B09]",
  mid: "bg-[#151916]",
  light: "bg-white",
  horizon: "bg-gray-tradfi-horizon",
};

function SectionHeader({ eyebrow, title, description, light = false }) {
  return (
    <div className="mb-10 max-w-3xl md:mb-14">
      {eyebrow ? (
        <p className="font-blender text-sm tracking-[0.22em] text-green-dark">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-2xl font-normal leading-tight md:text-4xl ${light ? "text-black" : "text-gray-off-white"}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${light ? "text-[#5F6660]" : "text-gray-tradfi-silver"}`}
        >
          {description}
        </p>
      ) : null}
      <hr
        className={`mt-8 border-t ${light ? "border-green-dark/30" : "border-green-dark/40"}`}
      />
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className="h-4 w-4"
      aria-hidden
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function CareersView({
  footer,
  hero = defaultHeroBanner,
  statistics = defaultStatistics,
  quoteSection = defaultQuoteSection,
  valuesFlipSection = defaultValuesFlipSection,
  teamsSection = defaultTeamsSection,
  teamTestimonialsSection = defaultTeamTestimonialsSection,
  lifeSection = defaultLifeSection,
  lifeStatsSection = defaultLifeStatsSection,
}) {
  return (
    <div className="flex min-h-svh flex-col text-base">
      <div className="flex flex-1 flex-col overflow-x-hidden">
        <Navigation />
        <main className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] relative flex-1">
          <HeroBannerSection {...hero} />
          <Statistics
            stats={statistics}
            compact
            align="start"
            bgColor="bg-gray-night-green"
            fontSizeMobile={72}
            fontSizeDesktop={100}
            labelClassName="font-blender text-sm leading-[1.12] tracking-[0.1em] sm:text-[0.9375rem] lg:text-base"
          />
          <CareersQuoteSection {...quoteSection} />
          <OurVision
            variant="green"
            title={valuesFlipSection.title}
            headingId={valuesFlipSection.headingId}
            items={valuesFlipSection.items}
          />
          <CareersTeamsSection {...teamsSection} />
          <CareersTeamTestimonialsSection {...teamTestimonialsSection} />
          <CareersLifeSection {...lifeSection} statsSection={lifeStatsSection} />







          <CTASection />
          <Footer footer={footer} />
        </main>
      </div>
    </div>
  );
}
