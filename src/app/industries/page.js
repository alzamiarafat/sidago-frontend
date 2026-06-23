import IndustryPageTemplate from "@/src/components/sections/v2/industriespage/IndustryPageTemplate";
import CMSPageShell from "@/src/components/sections/v2/common/CMSPageShell";
import { getIndustriesPage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.industries;


export default async function Industries() {
  const industriesPage = await getIndustriesPage();

  if (!industriesPage?.menuGroups) {
    return <CMSPageShell className="flex min-h-svh flex-col bg-gray-night-green text-base" />;
  }

  return <IndustryPageTemplate industryGroups={industriesPage.menuGroups} />;
}
