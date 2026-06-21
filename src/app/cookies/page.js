import LegalPolicyPageShell from "@/src/components/legal/LegalPolicyPageShell";
import { getCookiesPolicy } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.legalCookies;

export default async function CookiesPolicyPage() {
  const policy = await getCookiesPolicy();

  return (
    <LegalPolicyPageShell
      title={policy.title}
      lastUpdated={policy.lastUpdated}
      blocks={policy.blocks}
      activePolicy={policy.activePolicy}
    />
  );
}
