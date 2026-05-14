import { modernSlaveryBlocks } from "@/src/data/legal/modernSlaveryBlocks";
import LegalPolicyPageShell from "@/src/components/legal/LegalPolicyPageShell";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.legalModernSlavery;

export default function ModernSlaveryStatementPage() {
  return (
    <LegalPolicyPageShell
      title="Modern Slavery Statement"
      lastUpdated="14 May 2026"
      blocks={modernSlaveryBlocks}
      activePolicy="modern-slavery"
    />
  );
}
