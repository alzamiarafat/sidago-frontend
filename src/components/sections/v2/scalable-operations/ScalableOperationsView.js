"use client";

import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import ArticleShareSidebarSection from "@/src/components/sections/v2/digital-support-services/ArticleShareSidebarSection";
import ReportInsightHero from "@/src/components/sections/v2/digital-support-services/ReportInsightHero";
import SimilarInsightsSection from "@/src/components/sections/v2/digital-support-services/SimilarInsightsSection";
import SidagoPerformanceCarousel from "@/src/components/sections/v2/scalable-operations/SidagoPerformanceCarousel";
import {
  pressReleaseContent,
  reportInsightHero,
  similarInsightsContent,
  subscribeContent,
} from "@/src/components/sections/v2/scalable-operations/data";

export default function ScalableOperationsView({
  footer,
  hero,
  pressRelease = pressReleaseContent,
  similarInsights = similarInsightsContent,
  includePerformanceCarousel = true,
}) {
  const heroNode = hero ?? <ReportInsightHero {...reportInsightHero} />;

  return (
    <div className="flex min-h-svh flex-col text-base">
      <Navigation />

      <div className="flex flex-1 flex-col">
        <main className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] relative flex-1">
          {heroNode}
          <ArticleShareSidebarSection content={pressRelease} />
          {includePerformanceCarousel ? <SidagoPerformanceCarousel /> : null}
          {/* <SubscribeSection content={subscribeContent} /> */}
          <SimilarInsightsSection
            content={similarInsights}
            sectionBgColor={similarInsights?.sectionBgColor || "#070B09"}
          />
          <Footer footer={footer} />
        </main>
      </div>
    </div>
  );
}
