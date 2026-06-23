import CareersOpenRolesView from "@/src/components/sections/v2/careers/CareersOpenRolesView";
import { getGlobalSettings, getSitePage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";
import { notFound } from "next/navigation";

export const metadata = routeMetadata.careersOpportunities;

export default async function CareersOpportunitiesPage() {
  const [settings, content] = await Promise.all([
    getGlobalSettings(),
    getSitePage("careers-opportunities"),
  ]);

  if (!content) {
    notFound();
  }

  return (
    <CareersOpenRolesView footer={settings?.footer} content={content} />
  );
}
