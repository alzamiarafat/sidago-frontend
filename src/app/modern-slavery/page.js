import LegalPolicyPageShell from "@/src/components/legal/LegalPolicyPageShell";
import CMSPageShell from "@/src/components/sections/v2/common/CMSPageShell";
import { getModernSlaveryPolicy } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.legalModernSlavery;


export default async function ModernSlaveryStatementPage() {
  const policy = await getModernSlaveryPolicy();

  if (!policy?.blocks) {
    return <CMSPageShell className="flex min-h-svh flex-col bg-[#1C211E] text-base" />;
  }

  return (
    <LegalPolicyPageShell
      title={policy.title}
      lastUpdated={policy.lastUpdated}
      blocks={policy.blocks}
      activePolicy={policy.activePolicy}
    />
  );
}
