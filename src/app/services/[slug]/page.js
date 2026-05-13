import "../../globals.css";
import ServicePageTemplate from "@/src/components/sections/v2/servicepage/ServicePageTemplate";
import { getServicesPage } from "@/src/lib/api";
import { getServiceTemplateVariant } from "@/src/utils/serviceUtils";
import { getServiceMetadata } from "@/src/lib/seo";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return getServiceMetadata(slug);
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const servicesPage = await getServicesPage();

  return (
    <ServicePageTemplate
      slug={slug}
      variant={getServiceTemplateVariant(slug)}
      serviceGroups={servicesPage.serviceGroups}
    />
  );
}
