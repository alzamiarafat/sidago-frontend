import ArmitageView from "@/src/components/sections/v2/armitage/ArmitageView";
import CMSPageShell from "@/src/components/sections/v2/common/CMSPageShell";
import { getSitePage } from "@/src/lib/api";
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


export default async function ArmitagePage() {
  const content = await getSitePage("armitage");

  if (!content) {
    return <CMSPageShell className="flex min-h-svh flex-col bg-gray-night-green text-base" />;
  }

  return <ArmitageView content={content} />;
}
