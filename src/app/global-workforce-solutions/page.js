import GlobalWorkforceView from "@/src/components/sections/v2/global-workforce/GlobalWorkforceView";
import CMSPageShell from "@/src/components/sections/v2/common/CMSPageShell";
import ReportInsightHero from "@/src/components/sections/v2/digital-support-services/ReportInsightHero";
import { getGlobalSettings, getServiceLandingPage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.globalWorkforceSolutions;


export default async function GlobalWorkforceSolutionsPage() {
  const [settings, page] = await Promise.all([
    getGlobalSettings(),
    getServiceLandingPage("global-workforce-solutions"),
  ]);

  if (!page?.hero) {
    return <CMSPageShell className="flex min-h-svh flex-col bg-gray-night-green text-base" />;
  }

  return (
    <GlobalWorkforceView
      footer={settings?.footer}
      hero={<ReportInsightHero {...page.hero} />}
      atAGlance={page.atAGlance}
      reportContents={page.reportContents}
      subscribe={page.subscribe}
      similarInsights={page.similarInsights}
    />
  );
}
