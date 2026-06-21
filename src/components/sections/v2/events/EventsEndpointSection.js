import Link from "next/link";
import EventsEndpointExperience from "@/src/components/sections/v2/events/EventsEndpointExperience";
import EventsIntroBlock from "@/src/components/sections/v2/events/shared/EventsIntroBlock";
import EventsSectionHeading from "@/src/components/sections/v2/events/shared/EventsSectionHeading";
import EventsStatsSection from "@/src/components/sections/v2/events/EventsStatsSection";
import EventsCardGrid from "@/src/components/sections/v2/events/shared/EventsCardGrid";
import InteractiveArrow from "@/src/components/sections/v2/events/shared/InteractiveArrow";
import EventsCoHostDiamondPattern from "@/src/components/sections/v2/events/EventsCoHostDiamondPattern";
import {
  endpointSection,
  pastSpeakers,
} from "@/src/components/sections/v2/events/content";

export default function EventsEndpointSection({
  content = endpointSection,
  speakers = pastSpeakers,
}) {
  const { intro, stats, showcase, coHost } = content;

  return (
    <section className="bg-gray-defi-shadow">
      <div className="container py-block">
        <div className="relative">
          <EventsIntroBlock
            headingId={intro.headingId}
            title={
              <>
                {intro.titleBefore}
                <span className="text-pink-mid">{intro.titleHighlight}</span>
              </>
            }
            description={intro.description}
            logoSrc={intro.logoSrc}
            logoAlt={intro.logoAlt}
          />
          <EventsStatsSection
            stats={stats}
            fontSizeMobile={48}
            fontSizeDesktop={64}
          />
        </div>

        <div className="relative overflow-hidden pt-container pb-xs">
          <EventsSectionHeading
            id="past-speakers"
            title="Past speakers"
          />
          <section className="bg-gray-defi-shadow text-gray-off-white">
            <EventsCardGrid
              items={speakers}
              cardType="speaker"
              mobileInitialCount={4}
              mobileGridClassName="group/cards grid grid-cols-1 gap-xl"
              desktopGridClassName="group/cards hidden grid-cols-4 gap-x-lg gap-y-2xl lg:grid"
            />
          </section>
        </div>

        <div className="bg-gray-defi-shadow pt-4xl">
          <EventsIntroBlock
            headingId={showcase.headingId}
            title={
              <>
                {showcase.titleBefore}
                <span className="text-pink-mid">{showcase.titleHighlight}</span>
              </>
            }
          />
          <div className="pt-lg pb-lg">
            <EventsEndpointExperience
              panels={showcase.panels}
              eyebrow={showcase.eyebrow}
              subtitle={showcase.subtitle}
            />
          </div>
        </div>

        <div className="pt-container">
          <section className="bg-gray-defi-shadow text-gray-off-white">
            <div className="relative flex flex-col gap-md overflow-hidden px-xl py-2xl bevel bg-gray-defi-charcoal">
              <EventsCoHostDiamondPattern />
              <div className="z-10 flex flex-col items-start md:w-[60%]">
                <div className="text-2xl">{coHost.title}</div>
                <div className="mt-10 text-sm md:text-base">
                  {coHost.description}
                </div>
                <Link
                  href={coHost.ctaHref}
                  className="group/interactive mt-6 inline-flex items-center justify-between gap-md bg-pink-mid px-sm py-xs font-medium text-gray-night-green bevel bevel-[0.25rem]"
                  style={{ position: "relative" }}
                >
                  <span className="sr-only">{coHost.ctaLabel}</span>
                  {coHost.ctaLabel}
                  <InteractiveArrow size="1rem" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
