import "../../globals.css";
import IndustryPageTemplate from "@/src/components/sections/v2/industriespage/IndustryPageTemplate";

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const variant = slug === "b2b-commercial" ? "b2b" : "default";

  return <IndustryPageTemplate slug={slug} variant={variant} />;
}
