import EventsPromoBanner from "@/src/components/sections/v2/common/EventsPromoBanner";
import RecommendedInsightsSection from "@/src/components/sections/v2/insights/RecommendedInsightsSection";

const ACCENT_MINT = "#A8F5C2";
const SECTION_BG = "bg-[#333935]";
const BANNER_BG = "bg-[#1C211E]";
const PROMO_CTA_CLASS =
  "group/interactive mt-6 inline-flex items-center justify-between gap-md bg-[#00F554] px-sm py-xs font-medium text-gray-night-green bevel bevel-[0.25rem] hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100";

export default function CompanyLatestNewsSection({ content, eventsPromo }) {
  if (!content?.heading || !content?.cards?.length) {
    return null;
  }

  return (
    <RecommendedInsightsSection
      content={content}
      variant="news"
      mobileLayout="carousel"
      navBgColor={ACCENT_MINT}
      progressBarClassName="bg-[#A8F5C2]"
      sectionClassName={SECTION_BG}
      footerClassName={SECTION_BG}
      navButtonsPlacement="start"
      showPaginationCounter={false}
      linkableCards={false}
      footer={
        eventsPromo?.title && eventsPromo?.description ? (
          <EventsPromoBanner
            title={eventsPromo.title}
            description={eventsPromo.description}
            ctaHref={eventsPromo.ctaHref}
            ctaLabel={eventsPromo.ctaLabel}
            ctaSrText={eventsPromo.ctaSrText}
            className={SECTION_BG}
            cardClassName={BANNER_BG}
            ctaClassName={PROMO_CTA_CLASS}
          />
        ) : null
      }
    />
  );
}
