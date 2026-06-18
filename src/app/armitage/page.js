import ArmitageView from "@/src/components/sections/v2/armitage/ArmitageView";
import { buildPageMetadata } from "@/src/lib/seo";

export const metadata = buildPageMetadata({
  title: "Armitage by Sidago",
  description:
    "Armitage is Sidago's onchain vault curation arm, applying institutional-grade risk management and trading infrastructure to DeFi yield.",
  path: "/armitage",
  keywords: [
    "Armitage",
    "Sidago",
    "DeFi vault curation",
    "Morpho",
    "onchain yield",
    "USDC vaults",
  ],
});

export default function ArmitagePage() {
  return <ArmitageView />;
}
