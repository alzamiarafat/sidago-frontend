import { privacyBlocks } from "@/src/data/legal/privacyBlocks";
import LegalPolicyPageShell from "@/src/components/legal/LegalPolicyPageShell";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.legalPrivacy;

export default function PrivacyPolicyPage() {
  return (
    <LegalPolicyPageShell
      title="Privacy Policy"
      lastUpdated="14 May 2026"
      blocks={privacyBlocks}
      activePolicy="privacy"
    />
  );
}
