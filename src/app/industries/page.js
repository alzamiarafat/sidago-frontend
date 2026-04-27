import "../../app/globals.css";
import IndustryPageTemplate from "@/src/components/sections/v2/industriespage/IndustryPageTemplate";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.industries;

export default function Industries() {
  return <IndustryPageTemplate />;
}
