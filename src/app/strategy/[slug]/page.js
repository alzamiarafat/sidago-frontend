import "../../globals.css";
import StrategyPageTemplate from "@/src/components/sections/v2/strategypage/StrategyPageTemplate";
import { getStrategySlugs } from "@/src/data/strategy-menu";

export function generateStaticParams() {
  return [...new Set(getStrategySlugs())].map((slug) => ({ slug }));
}

export default function StrategyDetailPage() {
  return <StrategyPageTemplate />;
}
