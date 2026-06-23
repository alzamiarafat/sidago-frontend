import ScalableOperationsView from "@/src/components/sections/v2/scalable-operations/ScalableOperationsView";
import CMSPageShell from "@/src/components/sections/v2/common/CMSPageShell";
import ReportInsightHero from "@/src/components/sections/v2/digital-support-services/ReportInsightHero";
import { getGlobalSettings, getServiceLandingPage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.scalableOperationsManagement;


export default async function ScalableOperationsManagementPage() {
  const [settings, page] = await Promise.all([
    getGlobalSettings(),
    getServiceLandingPage("scalable-operations-management"),
  ]);

  if (!page?.hero) {
    return <CMSPageShell className="flex min-h-svh flex-col bg-gray-night-green text-base" />;
  }

  return (
    <ScalableOperationsView
      footer={settings?.footer}
      hero={<ReportInsightHero {...page.hero} />}
      pressRelease={page.pressRelease}
      similarInsights={page.similarInsights}
      includePerformanceCarousel={page.includePerformanceCarousel}
    />
  );
}
