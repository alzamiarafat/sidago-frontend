import LegalPolicyPageShell from "@/src/components/legal/LegalPolicyPageShell";
import { getPrivacyPolicy } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.legalPrivacy;

export default async function PrivacyPolicyPage() {
  const policy = await getPrivacyPolicy();

  return (
    <LegalPolicyPageShell
      title={policy.title}
      lastUpdated={policy.lastUpdated}
      blocks={policy.blocks}
      activePolicy={policy.activePolicy}
    />
  );
}
