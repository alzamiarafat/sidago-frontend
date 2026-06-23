import StrategyPageTemplate from "@/src/components/sections/v2/strategypage/StrategyPageTemplate";
import CMSPageShell from "@/src/components/sections/v2/common/CMSPageShell";
import { getStrategyPage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.strategy;


export default async function Strategy() {
  const strategyPage = await getStrategyPage();

  if (!strategyPage?.menuGroups) {
    return <CMSPageShell className="flex min-h-svh flex-col bg-gray-night-green text-base" />;
  }

  return <StrategyPageTemplate strategyGroups={strategyPage.menuGroups} />;
}
