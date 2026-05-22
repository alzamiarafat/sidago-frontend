"use client";

import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import AtAGlanceSection from "@/src/components/sections/v2/digital-support-services/AtAGlanceSection";
import ReportContentsSection from "@/src/components/sections/v2/digital-support-services/ReportContentsSection";
import ReportInsightHero from "@/src/components/sections/v2/digital-support-services/ReportInsightHero";
import SimilarInsightsSection from "@/src/components/sections/v2/digital-support-services/SimilarInsightsSection";
import SubscribeSection from "@/src/components/sections/v2/digital-support-services/SubscribeSection";
import {
  atAGlanceContent,
  reportContentsContent,
  reportInsightHero,
  similarInsightsContent,
  subscribeContent,
} from "@/src/components/sections/v2/global-workforce/data";

export default function GlobalWorkforceView({ footer, hero }) {
  const heroNode = hero ?? <ReportInsightHero {...reportInsightHero} />;

  return (
    <div className="flex min-h-svh flex-col text-base">
      <div className="flex flex-1 flex-col overflow-x-hidden">
        <Navigation />
        <main className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] relative flex-1">
          {heroNode}
          <AtAGlanceSection {...atAGlanceContent} />
          <ReportContentsSection content={reportContentsContent} />
          <SubscribeSection content={subscribeContent} />
          <SimilarInsightsSection content={similarInsightsContent} />
          <Footer footer={footer} />
        </main>
      </div>
    </div>
  );
}
