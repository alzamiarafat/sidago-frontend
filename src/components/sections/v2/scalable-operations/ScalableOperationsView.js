"use client";

import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import ArticleShareSidebarSection from "@/src/components/sections/v2/digital-support-services/ArticleShareSidebarSection";
import ReportInsightHero from "@/src/components/sections/v2/digital-support-services/ReportInsightHero";
import SimilarInsightsSection from "@/src/components/sections/v2/digital-support-services/SimilarInsightsSection";
import SubscribeSection from "@/src/components/sections/v2/digital-support-services/SubscribeSection";
import {
  pressReleaseContent,
  reportInsightHero,
  similarInsightsContent,
  subscribeContent,
} from "@/src/components/sections/v2/scalable-operations/data";

export default function ScalableOperationsView({ footer, hero }) {
  const heroNode = hero ?? <ReportInsightHero {...reportInsightHero} />;

  return (
    <div className="flex min-h-svh flex-col text-base">
      <div className="flex flex-1 flex-col overflow-x-hidden">
        <Navigation />
        <main className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] relative flex-1">
          {heroNode}
          <ArticleShareSidebarSection content={pressReleaseContent} />
          <section className="bg-gray-defi-charcoal">
            <div className="container py-block">
              <div className="pb-container" />
            </div>
          </section>
          {/* <SubscribeSection content={subscribeContent} /> */}
          <SimilarInsightsSection
            content={similarInsightsContent}
            sectionBgColor="#070B09"
          />
          <Footer footer={footer} />
        </main>
      </div>
    </div>
  );
}
