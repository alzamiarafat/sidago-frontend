import StrategyPageTemplate from "@/src/components/sections/v2/strategypage/StrategyPageTemplate";
import CMSPageShell from "@/src/components/sections/v2/common/CMSPageShell";
import { getStrategySlugs } from "@/src/data/strategy-menu";
import { getStrategyPage } from "@/src/lib/api";
import { getStrategyMetadata } from "@/src/lib/seo";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return getStrategyMetadata(slug);
}

export function generateStaticParams() {
  return [...new Set(getStrategySlugs())].map((slug) => ({ slug }));
}


export default async function StrategyDetailPage() {
  const strategyPage = await getStrategyPage();

  if (!strategyPage?.menuGroups) {
    return <CMSPageShell className="flex min-h-svh flex-col bg-gray-night-green text-base" />;
  }

  return <StrategyPageTemplate strategyGroups={strategyPage.menuGroups} />;
}
