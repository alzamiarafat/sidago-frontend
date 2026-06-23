import CareersView from "@/src/components/sections/v2/careers/CareersView";
import CMSPageShell from "@/src/components/sections/v2/common/CMSPageShell";
import { getCareersPage, getGlobalSettings } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.careers;


export default async function CareersPage() {
  const [settings, careers] = await Promise.all([
    getGlobalSettings(),
    getCareersPage(),
  ]);

  if (!careers?.hero) {
    return <CMSPageShell className="flex min-h-svh flex-col bg-gray-night-green text-base" />;
  }

  return (
    <CareersView
      footer={settings?.footer}
      hero={careers.hero}
      statistics={careers.statistics}
      quoteSection={careers.quoteSection}
      valuesFlipSection={careers.valuesFlipSection}
      teamsSection={careers.teamsSection}
      teamTestimonialsSection={careers.teamTestimonialsSection}
      lifeSection={careers.lifeSection}
    />
  );
}
