import CareersOpenRolesView from "@/src/components/sections/v2/careers/CareersOpenRolesView";
import CMSPageUnavailable from "@/src/components/sections/v2/common/CMSPageUnavailable";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import { getGlobalSettings, getSitePage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.careersOpportunities;

export default async function CareersOpportunitiesPage() {
  const [settings, content] = await Promise.all([
    getGlobalSettings(),
    getSitePage("careers-opportunities"),
  ]);

  const page = content?.openRolesPage;
  const cta = content?.openRolesPageCta;

  if (!page?.hero || !page?.filters?.length || !page?.roles?.length) {
    return (
      <div className="flex min-h-svh flex-col bg-gray-night-green text-base">
        <Navigation />
        <CMSPageUnavailable className="min-h-[calc(100svh-var(--header-height))]" />
      </div>
    );
  }

  return (
    <CareersOpenRolesView footer={settings?.footer} page={page} cta={cta} />
  );
}
