import "../../globals.css";
import IndustryPageTemplate from "@/src/components/sections/v2/industriespage/IndustryPageTemplate";
import { getIndustryMetadata } from "@/src/lib/seo";
import { getContentPageBySlug, getTypedContentPages } from "@/src/lib/cms";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return await getIndustryMetadata(slug);
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const variant = slug === "b2b-commercial" ? "b2b" : "default";
  const pages = await getTypedContentPages("industry");
  const pageData = await getContentPageBySlug("industry", slug);

  return (
    <IndustryPageTemplate
      slug={slug}
      variant={variant}
      pages={pages}
      pageData={pageData}
    />
  );
}
