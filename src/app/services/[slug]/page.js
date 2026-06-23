import ServicePageTemplate from "@/src/components/sections/v2/servicepage/ServicePageTemplate";
import { getServicesPage } from "@/src/lib/api";
import { collectSlugsFromMenuGroups } from "@/src/lib/menu-static-slugs";
import { getServiceMetadata } from "@/src/lib/seo";
import { getServicesMenuGroups } from "@/src/utils/navigationTabUtils";
import { getServiceTemplateVariant } from "@/src/utils/serviceUtils";

export async function generateStaticParams() {
  const slugs = new Set([
    ...collectSlugsFromMenuGroups(getServicesMenuGroups(), "services"),
  ]);

  const page = await getServicesPage();

  for (const slug of collectSlugsFromMenuGroups(
    page.serviceGroups ?? [],
    "services",
  )) {
    slugs.add(slug);
  }

  if (slugs.size === 0) {
    return [];
  }

  return [...slugs].map((slug) => ({ slug }));
}

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
