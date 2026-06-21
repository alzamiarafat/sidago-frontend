import LegalPolicyPageShell from "@/src/components/legal/LegalPolicyPageShell";
import { getModernSlaveryPolicy } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.legalModernSlavery;

export default async function ModernSlaveryStatementPage() {
  const policy = await getModernSlaveryPolicy();

  return (
    <LegalPolicyPageShell
      title={policy.title}
      lastUpdated={policy.lastUpdated}
      blocks={policy.blocks}
      activePolicy={policy.activePolicy}
    />
  );
}
