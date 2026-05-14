
import MarketingGrowthView from "@/src/components/sections/v2/marketing-growth/MarketingGrowthView";
import { getGlobalSettings } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.marketingGrowth;

export default async function MarketingGrowthPage() {
  const settings = await getGlobalSettings();

  return <MarketingGrowthView footer={settings?.footer} />;
}
