import "../../globals.css";
import StrategyPageTemplate from "@/src/components/sections/v2/strategypage/StrategyPageTemplate";

const strategySlugs = [
  "capabilities",
  "core-competencies",
  "technical-skills",
  "industry-expertise",
  "employee-quality",
  "training-and-development",
  "career-growth",
  "work-life-balance",
  "our-benefits",
  "health-and-wellness",
  "financial-benefits",
  "team-perks",
  "the-process",
  "discovery-phase",
  "planning",
  "execution",
  "review",
  "employee-advantages",
  "workplace-culture",
  "methodology",
  "implementation",
];

export function generateStaticParams() {
  return strategySlugs.map((slug) => ({ slug }));
}

export default function StrategyDetailPage() {
  return <StrategyPageTemplate />;
}
