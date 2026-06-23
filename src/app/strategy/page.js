import StrategyPageTemplate from "@/src/components/sections/v2/strategypage/StrategyPageTemplate";
import { getStrategyPage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";
import { notFound } from "next/navigation";

export const metadata = routeMetadata.strategy;

export default async function Strategy() {
  const strategyPage = await getStrategyPage();

  if (!strategyPage?.menuGroups) {
    notFound();
  }

  return <StrategyPageTemplate strategyGroups={strategyPage.menuGroups} />;
}
