import "../../globals.css";
import ServicePageTemplate from "@/src/components/sections/v2/servicepage/ServicePageTemplate";
import { getServiceTemplateVariant } from "@/src/utils/serviceUtils";

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  return <ServicePageTemplate variant={getServiceTemplateVariant(slug)} />;
}
