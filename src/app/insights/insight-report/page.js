import InsightReportView from "@/src/components/sections/v2/insights/InsightReportView";
import { getGlobalSettings } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.insightsReport;

export default async function InsightReportPage() {
  const settings = await getGlobalSettings();

  return <InsightReportView footer={settings?.footer} />;
}
