import ServicePageTemplate from "@/src/components/sections/v2/servicepage/ServicePageTemplate";
import CMSPageShell from "@/src/components/sections/v2/common/CMSPageShell";
import { getServicesPage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.services;


export default async function ServicePage() {
  const servicesPage = await getServicesPage();

  if (!servicesPage?.serviceGroups) {
    return <CMSPageShell className="flex min-h-svh flex-col bg-gray-night-green text-base" />;
  }

  return (
    <ServicePageTemplate
      variant="otc"
      serviceGroups={servicesPage.serviceGroups}
    />
  );
}
