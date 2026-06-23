"use client";

import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import AtAGlanceSection from "@/src/components/sections/v2/digital-support-services/AtAGlanceSection";
import ReportContentsSection from "@/src/components/sections/v2/digital-support-services/ReportContentsSection";
import SimilarInsightsSection from "@/src/components/sections/v2/digital-support-services/SimilarInsightsSection";
import SubscribeSection from "@/src/components/sections/v2/digital-support-services/SubscribeSection";

export default function GlobalWorkforceView({
  footer,
  hero,
  atAGlance,
  reportContents,
  subscribe,
  similarInsights,
}) {
  return (
    <div className="flex min-h-svh flex-col text-base">
      <Navigation />

      <div className="flex flex-1 flex-col">
        <main className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] relative flex-1">
          {hero}
          {atAGlance ? <AtAGlanceSection {...atAGlance} /> : null}
          {reportContents ? (
            <ReportContentsSection content={reportContents} />
          ) : null}
          {subscribe ? <SubscribeSection content={subscribe} /> : null}
          {similarInsights ? (
            <SimilarInsightsSection
              content={similarInsights}
              sectionBgColor={similarInsights.sectionBgColor || "#FFFFFF"}
            />
          ) : null}
          <CTASection />
          <Footer footer={footer} />
        </main>
      </div>
    </div>
  );
}
