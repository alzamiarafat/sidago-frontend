import "../../globals.css";
import StrategyPageTemplate from "@/src/components/sections/v2/strategypage/StrategyPageTemplate";
import { getStrategyMetadata } from "@/src/lib/seo";
import {
  getContentPageBySlug,
  getStrategySlugsFromCms,
  getTypedContentPages,
} from "@/src/lib/cms";
import { getStrategySlugs } from "@/src/data/strategy-menu";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return await getStrategyMetadata(slug);
}

export async function generateStaticParams() {
  const slugs = await getStrategySlugsFromCms();

  return [...new Set(slugs.length ? slugs : getStrategySlugs())].map((slug) => ({
    slug,
  }));
}

export default async function StrategyDetailPage({ params }) {
  const { slug } = await params;
  const pages = await getTypedContentPages("strategy");
  const pageData = await getContentPageBySlug("strategy", slug);

  return <StrategyPageTemplate slug={slug} pages={pages} pageData={pageData} />;
}
