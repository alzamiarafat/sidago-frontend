import IndustryPageTemplate from "@/src/components/sections/v2/industriespage/IndustryPageTemplate";
import { getIndustriesPage } from "@/src/lib/api";
import { collectSlugsFromMenuGroups } from "@/src/lib/menu-static-slugs";
import { getIndustryMetadata } from "@/src/lib/seo";
import { getIndustryMenuGroups } from "@/src/utils/navigationTabUtils";

export async function generateStaticParams() {
  const slugs = new Set([
    ...collectSlugsFromMenuGroups(getIndustryMenuGroups(), "industries"),
  ]);

  const page = await getIndustriesPage();

  for (const slug of collectSlugsFromMenuGroups(
    page.menuGroups ?? [],
    "industries",
  )) {
    slugs.add(slug);
  }

  return [...slugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return getIndustryMetadata(slug);
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const variant = slug === "b2b-commercial" ? "b2b" : "default";
  const industriesPage = await getIndustriesPage();

  return (
    <IndustryPageTemplate
      slug={slug}
      variant={variant}
      industryGroups={industriesPage.menuGroups}
    />
  );
}
