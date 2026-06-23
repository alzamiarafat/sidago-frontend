
import MarketingGrowthView from "@/src/components/sections/v2/marketing-growth/MarketingGrowthView";
import { getGlobalSettings, getSitePage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";
import { notFound } from "next/navigation";

export const metadata = routeMetadata.marketingGrowth;

export default async function MarketingGrowthPage() {
  const [settings, content] = await Promise.all([
    getGlobalSettings(),
    getSitePage("marketing-growth"),
  ]);

  if (!content) {
    notFound();
  }

  return <MarketingGrowthView footer={settings?.footer} content={content} />;
}
