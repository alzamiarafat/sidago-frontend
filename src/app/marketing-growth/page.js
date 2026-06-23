
import MarketingGrowthView from "@/src/components/sections/v2/marketing-growth/MarketingGrowthView";
import CMSPageShell from "@/src/components/sections/v2/common/CMSPageShell";
import { getGlobalSettings, getSitePage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.marketingGrowth;


export default async function MarketingGrowthPage() {
  const [settings, content] = await Promise.all([
    getGlobalSettings(),
    getSitePage("marketing-growth"),
  ]);

  if (!content) {
    return <CMSPageShell className="flex min-h-svh flex-col bg-gray-night-green text-base" />;
  }

  return <MarketingGrowthView footer={settings?.footer} content={content} />;
}
