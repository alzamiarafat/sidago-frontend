import InsightReportView from "@/src/components/sections/v2/insights/InsightReportView";
import CMSPageShell from "@/src/components/sections/v2/common/CMSPageShell";
import ReportInsightHero from "@/src/components/sections/v2/digital-support-services/ReportInsightHero";
import { getGlobalSettings, getServiceLandingPage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.insightsReport;


export default async function InsightReportPage() {
  const [settings, page] = await Promise.all([
    getGlobalSettings(),
    getServiceLandingPage("insight-report"),
  ]);

  if (!page?.hero) {
    return <CMSPageShell className="flex min-h-svh flex-col bg-gray-night-green text-base" />;
  }

  return (
    <InsightReportView
      footer={settings?.footer}
      hero={<ReportInsightHero {...page.hero} />}
      atAGlance={page.atAGlance}
      reportContents={page.reportContents}
      subscribe={page.subscribe}
      similarInsights={page.similarInsights}
    />
  );
}
