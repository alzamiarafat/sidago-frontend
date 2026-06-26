"use client";

import Link from "next/link";
import PageFooter from "@/src/components/sections/v2/common/PageFooter";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import CareersTeamsSection from "@/src/components/sections/v2/careers/CareersTeamsSection";
import CareersLifeSection from "@/src/components/sections/v2/careers/CareersLifeSection";
import CareersTeamTestimonialsSection from "@/src/components/sections/v2/careers/CareersTeamTestimonialsSection";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import Statistics from "@/src/components/sections/v2/homepage/Statistics";
import CareersQuoteSection from "@/src/components/sections/v2/careers/CareersQuoteSection";
import OurVision from "@/src/components/sections/v2/servicepage/OurVision";
import { careersCta, heroBanner as careersHeroDefaults } from "@/src/components/sections/v2/careers/data.js";

export default function CareersView({
  footer,
  hero,
  statistics,
  quoteSection,
  valuesFlipSection,
  teamsSection,
  teamTestimonialsSection,
  lifeSection,
  lifeStatsSection,
  cta,
}) {
  if (
    !hero ||
    !statistics ||
    !quoteSection ||
    !valuesFlipSection ||
    !teamsSection ||
    !teamTestimonialsSection ||
    !lifeSection
  ) {
    return null;
  }

  return (
    <div className="flex min-h-svh flex-col text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] relative flex-1">
          <HeroBannerSection
            {...hero}
            compactMobile
            sideLogo={hero.sideLogo ?? careersHeroDefaults.sideLogo}
          />
          <Statistics
            stats={statistics}
            compact
            align="start"
            bgColor="bg-[#151916]"
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







          <PageFooter ctaItems={cta?.length ? cta : careersCta} footer={footer} />
        </main>
      </div>
    </div>
  );
}
