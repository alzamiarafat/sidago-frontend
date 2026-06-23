import IndustryPageTemplate from "@/src/components/sections/v2/industriespage/IndustryPageTemplate";
import CMSPageShell from "@/src/components/sections/v2/common/CMSPageShell";
import { getIndustriesPage } from "@/src/lib/api";
import { collectSlugsFromMenuGroups } from "@/src/lib/menu-static-slugs";
import { getIndustryMetadata } from "@/src/lib/seo";
import { getIndustryMenuGroups } from "@/src/utils/navigationTabUtils";

export async function generateStaticParams() {
  const slugs = new Set([
    ...collectSlugsFromMenuGroups(getIndustryMenuGroups(), "industries"),
  ]);

  const page = await getIndustriesPage();

  if (page?.menuGroups) {
    for (const slug of collectSlugsFromMenuGroups(
      page.menuGroups,
      "industries",
    )) {
      slugs.add(slug);
    }
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

  if (!industriesPage?.menuGroups) {
    return <CMSPageShell className="flex min-h-svh flex-col bg-gray-night-green text-base" />;
  }

  return (
    <IndustryPageTemplate
      slug={slug}
      variant={variant}
      industryGroups={industriesPage.menuGroups}
    />
  );
}
