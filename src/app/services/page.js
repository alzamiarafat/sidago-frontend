import ServicePageTemplate from "@/src/components/sections/v2/servicepage/ServicePageTemplate";
import { getServicesPage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.services;

export default async function ServicePage() {
  const servicesPage = await getServicesPage();

  return (
    <ServicePageTemplate
      variant="otc"
      serviceGroups={servicesPage.serviceGroups}
    />
  );
}
