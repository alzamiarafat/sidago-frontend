import { cookiesBlocks } from "@/src/data/legal/cookiesBlocks";
import LegalPolicyPageShell from "@/src/components/legal/LegalPolicyPageShell";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.legalCookies;

export default function CookiesPolicyPage() {
  return (
    <LegalPolicyPageShell
      title="Cookies Policy"
      lastUpdated="14 May 2026"
      blocks={cookiesBlocks}
      activePolicy="cookies"
    />
  );
}
