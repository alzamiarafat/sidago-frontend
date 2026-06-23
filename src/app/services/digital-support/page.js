import DigitalSupportServicesView from "@/src/components/sections/v2/digital-support-services/DigitalSupportServicesView";
import ReportInsightHero from "@/src/components/sections/v2/digital-support-services/ReportInsightHero";
import { getGlobalSettings, getServiceLandingPage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";
import { notFound } from "next/navigation";

export const metadata = routeMetadata.digitalSupportServices;

export default async function DigitalSupportPage() {
  const [settings, page] = await Promise.all([
    getGlobalSettings(),
    getServiceLandingPage("digital-support"),
  ]);

  if (!page?.hero) {
    notFound();
  }

  return (
    <DigitalSupportServicesView
      footer={settings?.footer}
      hero={<ReportInsightHero {...page.hero} />}
      atAGlance={page.atAGlance}
      reportContents={page.reportContents}
      subscribe={page.subscribe}
      similarInsights={page.similarInsights}
    />
  );
}
