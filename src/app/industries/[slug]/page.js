import "../../globals.css";
import IndustryPageTemplate from "@/src/components/sections/v2/industriespage/IndustryPageTemplate";
import { getIndustriesPage } from "@/src/lib/api";
import { getIndustryMetadata } from "@/src/lib/seo";

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
