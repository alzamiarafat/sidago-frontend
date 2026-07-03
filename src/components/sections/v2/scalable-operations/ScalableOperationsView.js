"use client";

import PageFooter from "@/src/components/sections/v2/common/PageFooter";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import ArticleShareSidebarSection from "@/src/components/sections/v2/digital-support-services/ArticleShareSidebarSection";
import SimilarInsightsSection from "@/src/components/sections/v2/digital-support-services/SimilarInsightsSection";
import SidagoPerformanceCarousel from "@/src/components/sections/v2/scalable-operations/SidagoPerformanceCarousel";

export default function ScalableOperationsView({
  footer,
  hero,
  pressRelease,
  similarInsights,
  performanceCarousel,
  includePerformanceCarousel = true,
}) {
  if (!hero || !pressRelease || !similarInsights) {
    return null;
  }

  return (
    <div className="flex min-h-svh flex-col text-base">
      <Navigation />

      <div className="flex flex-1 flex-col">
        <main className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] relative flex-1">
          {hero}
          <ArticleShareSidebarSection content={pressRelease} />
          {includePerformanceCarousel ? (
            <SidagoPerformanceCarousel section={performanceCarousel} />
          ) : null}
          {/* <SubscribeSection content={subscribeContent} /> */}
          <SimilarInsightsSection
            content={similarInsights}
            sectionBgColor={similarInsights?.sectionBgColor || "#151916"}
          />
          <PageFooter footer={footer} />
        </main>
      </div>
    </div>
  );
}
