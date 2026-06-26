"use client";

import PageFooter from "@/src/components/sections/v2/common/PageFooter";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import AtAGlanceSection from "@/src/components/sections/v2/digital-support-services/AtAGlanceSection";
import ReportContentsSection from "@/src/components/sections/v2/digital-support-services/ReportContentsSection";
import SubscribeSection from "@/src/components/sections/v2/digital-support-services/SubscribeSection";
import SimilarInsightsSection from "@/src/components/sections/v2/digital-support-services/SimilarInsightsSection";

export default function DigitalSupportServicesView({
  footer,
  hero,
  atAGlance,
  reportContents,
  subscribe,
  similarInsights,
}) {
  if (!hero || !atAGlance || !reportContents || !subscribe || !similarInsights) {
    return null;
  }

  return (
    <div className="flex min-h-svh flex-col text-base">
      <Navigation />

      <div className="flex flex-1 flex-col">
        <main className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] relative flex-1">
          {hero}
          <AtAGlanceSection {...atAGlance} />
          <ReportContentsSection content={reportContents} />
          <SubscribeSection content={subscribe} />
          <SimilarInsightsSection
            content={similarInsights}
            sectionBgColor={similarInsights?.sectionBgColor}
          />
          <PageFooter footer={footer} />
        </main>
      </div>
    </div>
  );
}
