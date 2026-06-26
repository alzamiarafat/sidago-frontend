import PageFooter from "@/src/components/sections/v2/common/PageFooter";
import CMSPageShell from "@/src/components/sections/v2/common/CMSPageShell";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import SimilarInsightsSection from "@/src/components/sections/v2/digital-support-services/SimilarInsightsSection";
import WhoWeServeAudienceSection from "@/src/components/sections/v2/whoweserve/WhoWeServeAudienceSection";
import WhoWeServeIntroSection from "@/src/components/sections/v2/whoweserve/WhoWeServeIntroSection";
import { BRAND_COLORS } from "@/src/data/brand-colors";
import { getGlobalSettings, getSitePage } from "@/src/lib/api";
import { buildPageMetadata } from "@/src/lib/seo";

export const metadata = buildPageMetadata({
  title: "Who we serve",
  description:
    "Sidago Who we serve is a great way to stay up to date with the latest news and updates from Sidago.",
  path: "/who-we-serve",
  keywords: [
    "Sidago who we serve",
    "who we serve",
    "who we serve guidelines",
    "who we serve resources",
  ],
});


export default async function WhoWeServePage() {
  const [settings, content] = await Promise.all([
    getGlobalSettings(),
    getSitePage("who-we-serve"),
  ]);

  if (!content) {
    return <CMSPageShell className="flex min-h-svh flex-col bg-gray-night-green text-base" />;
  }

  return (
    <div className="flex min-h-svh flex-col bg-[#151B17] text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark flex-1 bg-[#151B17] text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <WhoWeServeIntroSection intro={content.intro} />
          <WhoWeServeAudienceSection segments={content.audienceSegments} />
          <SimilarInsightsSection
            content={content.latestInsights}
            sectionClassName="bg-gray-defi-shadow text-gray-off-white"
            cardClassName="bg-gray-defi-charcoal"
            navAccentColor={BRAND_COLORS.orange}
            navMutedColor="#333935"
            showDescription={false}
          />
          <PageFooter footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
