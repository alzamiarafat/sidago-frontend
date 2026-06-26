import PageFooter from "@/src/components/sections/v2/common/PageFooter";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import CompanyHero from "@/src/components/sections/v2/company/CompanyHero";
import CompanyWhatWeDoSection from "@/src/components/sections/v2/company/CompanyWhatWeDoSection";
import CompanyQuoteSection from "@/src/components/sections/v2/company/CompanyQuoteSection";
import CompanyExecutiveTeamSection from "@/src/components/sections/v2/company/CompanyExecutiveTeamSection";
import CompanyExploreCareersSection from "@/src/components/sections/v2/company/CompanyExploreCareersSection";
import CompanyLatestNewsSection from "@/src/components/sections/v2/company/CompanyLatestNewsSection";

export default function CompanyView({
  footer,
  hero,
  whatWeDo,
  quoteSection,
  executiveTeam,
  exploreCareers,
  latestNews,
  eventsPromo,
  cta = [],
}) {
  return (
    <div className="flex min-h-svh flex-col text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] relative flex-1 bg-gray-night-green text-gray-off-white">
          <CompanyHero hero={hero} />
          <CompanyWhatWeDoSection whatWeDo={whatWeDo} />
          <CompanyQuoteSection quoteSection={quoteSection} />
          <CompanyExecutiveTeamSection
            title={executiveTeam?.title}
            headingId={executiveTeam?.headingId}
            items={executiveTeam?.items}
          />
          <CompanyExploreCareersSection
            title={exploreCareers?.title}
            headingId={exploreCareers?.headingId}
            images={exploreCareers?.images}
            links={exploreCareers?.links}
          />
          <CompanyLatestNewsSection
            content={latestNews}
            eventsPromo={eventsPromo}
          />
          <PageFooter ctaItems={cta} footer={footer} />
        </main>
      </div>
    </div>
  );
}
