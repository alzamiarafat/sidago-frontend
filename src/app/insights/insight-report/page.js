import InsightReportView from "@/src/components/sections/v2/insights/InsightReportView";
import ReportInsightHero from "@/src/components/sections/v2/digital-support-services/ReportInsightHero";
import { getGlobalSettings, getServiceLandingPage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";
import { notFound } from "next/navigation";

export const metadata = routeMetadata.insightsReport;

export default async function InsightReportPage() {
  const [settings, page] = await Promise.all([
    getGlobalSettings(),
    getServiceLandingPage("insight-report"),
  ]);

  if (!page?.hero) {
    notFound();
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
