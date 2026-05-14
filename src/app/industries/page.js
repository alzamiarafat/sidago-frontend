import IndustryPageTemplate from "@/src/components/sections/v2/industriespage/IndustryPageTemplate";
import { getIndustriesPage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.industries;

export default async function Industries() {
  const industriesPage = await getIndustriesPage();

  return <IndustryPageTemplate industryGroups={industriesPage.menuGroups} />;
}
