import GlobalWorkforceView from "@/src/components/sections/v2/global-workforce/GlobalWorkforceView";
import { getGlobalSettings } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.globalWorkforceSolutions;

export default async function GlobalWorkforceSolutionsPage() {
  const settings = await getGlobalSettings();

  return <GlobalWorkforceView footer={settings?.footer} />;
}
