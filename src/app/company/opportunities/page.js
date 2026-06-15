import CareersOpenRolesView from "@/src/components/sections/v2/careers/CareersOpenRolesView";
import { getGlobalSettings } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.careersOpportunities;

export default async function CareersOpportunitiesPage() {
  const settings = await getGlobalSettings();

  return <CareersOpenRolesView footer={settings?.footer} />;
}
