import DigitalSupportServicesView from "@/src/components/sections/v2/digital-support-services/DigitalSupportServicesView";
import { getGlobalSettings } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.digitalSupportServices;

export default async function DigitalSupportServicesPage() {
  const settings = await getGlobalSettings();

  return <DigitalSupportServicesView footer={settings?.footer} />;
}
