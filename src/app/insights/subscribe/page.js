import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import CTASection from "@/src/components/sections/v2/common/CTA";
import InsightsDiscoverSection from "@/src/components/sections/v2/insights/InsightsDiscoverSection";
import InsightsSeriesSection from "@/src/components/sections/v2/insights/InsightsSeriesSection";
import RecommendedInsightsSection from "@/src/components/sections/v2/insights/RecommendedInsightsSection";
import SubscribeSection from "@/src/components/sections/v2/digital-support-services/SubscribeSection";
import InsightsSubscribeHero from "@/src/components/sections/v2/insights/InsightsSubscribeHero";
import { getGlobalSettings, getSitePage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";
import { notFound } from "next/navigation";

export const metadata = routeMetadata.insightsSubscribe;

export default async function InsightsSubscribePage() {
  const [settings, content] = await Promise.all([
    getGlobalSettings(),
    getSitePage("insights-subscribe"),
  ]);

  if (!content) {
    notFound();
  }

  return (
    <div className="flex min-h-svh flex-col text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] relative flex-1">
          <InsightsSubscribeHero hero={content.subscribeHero} />
          <RecommendedInsightsSection content={content.recommendedInsightsContent} />
          <InsightsDiscoverSection
            cards={content.insightsDiscoverCards}
            filterGroups={content.insightsFilterGroups}
          />
          <InsightsSeriesSection content={content.insightsSeriesContent} />
          <SubscribeSection
            content={content.subscribePageContent}
            className="v2-subscribe--dark v2-subscribe--narrow"
          />
          <CTASection />
          <Footer footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
