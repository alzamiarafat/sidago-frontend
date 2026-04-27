import "../../app/globals.css";
import StrategyPageTemplate from "@/src/components/sections/v2/strategypage/StrategyPageTemplate";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.strategy;

export default function Strategy() {
  return <StrategyPageTemplate />;
}
