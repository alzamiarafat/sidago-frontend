import ScalableOperationsView from "@/src/components/sections/v2/scalable-operations/ScalableOperationsView";
import { getGlobalSettings } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.scalableOperationsManagement;

export default async function ScalableOperationsManagementPage() {
  const settings = await getGlobalSettings();

  return <ScalableOperationsView footer={settings?.footer} />;
}
