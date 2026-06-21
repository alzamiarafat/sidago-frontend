"use client";

import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import ReportInsightHero from "@/src/components/sections/v2/digital-support-services/ReportInsightHero";
import AtAGlanceSection from "@/src/components/sections/v2/digital-support-services/AtAGlanceSection";
import ReportContentsSection from "@/src/components/sections/v2/digital-support-services/ReportContentsSection";
import SubscribeSection from "@/src/components/sections/v2/digital-support-services/SubscribeSection";
import SimilarInsightsSection from "@/src/components/sections/v2/digital-support-services/SimilarInsightsSection";
import {
  atAGlanceContent,
  reportContentsContent,
  reportInsightHero,
  similarInsightsContent,
  subscribeContent,
} from "@/src/components/sections/v2/insights/insightReportData";

export default function InsightReportView({
  footer,
  hero,
  atAGlance = atAGlanceContent,
  reportContents = reportContentsContent,
  subscribe = subscribeContent,
  similarInsights = similarInsightsContent,
}) {
  const heroNode = hero ?? <ReportInsightHero {...reportInsightHero} />;

  return (
    <div className="flex min-h-svh flex-col text-base">
      <Navigation />

      <div className="flex flex-1 flex-col">
        <main className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] relative flex-1">
          {heroNode}
          <AtAGlanceSection {...atAGlance} />
          <ReportContentsSection content={reportContents} />
          <SubscribeSection content={subscribe} />
          <SimilarInsightsSection
            content={similarInsights}
            sectionBgColor={similarInsights?.sectionBgColor || "#FFFFFF"}
          />
          <CTASection />
          <Footer footer={footer} />
        </main>
      </div>
    </div>
  );
}
