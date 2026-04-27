import "../globals.css";
import ServicePageTemplate from "@/src/components/sections/v2/servicepage/ServicePageTemplate";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.services;

export default function ServicePage() {
  return <ServicePageTemplate variant="otc" />;
}
