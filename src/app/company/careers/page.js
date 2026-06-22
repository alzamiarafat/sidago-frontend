import CareersView from "@/src/components/sections/v2/careers/CareersView";
import { getCareersPage, getGlobalSettings } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.careers;

export default async function CareersPage() {
  const [settings, careers] = await Promise.all([
    getGlobalSettings(),
    getCareersPage(),
  ]);

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
