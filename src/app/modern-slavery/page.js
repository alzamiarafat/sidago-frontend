import LegalPolicyPageShell from "@/src/components/legal/LegalPolicyPageShell";
import { getModernSlaveryPolicy } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";
import { notFound } from "next/navigation";

export const metadata = routeMetadata.legalModernSlavery;

export default async function ModernSlaveryStatementPage() {
  const policy = await getModernSlaveryPolicy();

  if (!policy?.blocks) {
    notFound();
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
