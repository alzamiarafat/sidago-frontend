import "../../globals.css";
import ServicePageTemplate from "@/src/components/sections/v2/servicepage/ServicePageTemplate";
import { getServiceTemplateVariant } from "@/src/utils/serviceUtils";
import { getServiceMetadata } from "@/src/lib/seo";
import { getContentPageBySlug, getTypedContentPages } from "@/src/lib/cms";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return await getServiceMetadata(slug);
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const pages = await getTypedContentPages("service");
  const pageData = await getContentPageBySlug("service", slug);
  return (
    <ServicePageTemplate
      slug={slug}
      variant={getServiceTemplateVariant(slug)}
      pages={pages}
      pageData={pageData}
    />
  );
}
