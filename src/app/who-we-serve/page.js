import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import CTASection from "@/src/components/sections/v2/common/CTA";
import SimilarInsightsSection from "@/src/components/sections/v2/digital-support-services/SimilarInsightsSection";
import { latestInsightsContent } from "@/src/components/sections/v2/insights/data";
import WhoWeServeAudienceSection from "@/src/components/sections/v2/whoweserve/WhoWeServeAudienceSection";
import WhoWeServeIntroSection from "@/src/components/sections/v2/whoweserve/WhoWeServeIntroSection";
import { BRAND_COLORS } from "@/src/data/brand-colors";
import { getGlobalSettings } from "@/src/lib/api";
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
  const settings = await getGlobalSettings();

  return (
    <div className="flex min-h-svh flex-col bg-[#151B17] text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark flex-1 bg-[#151B17] text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <WhoWeServeIntroSection />
          <WhoWeServeAudienceSection />
          <SimilarInsightsSection
            content={latestInsightsContent}
            sectionClassName="bg-gray-defi-shadow text-gray-off-white"
            cardClassName="bg-gray-defi-charcoal"
            navAccentColor={BRAND_COLORS.orange}
            navMutedColor="#333935"
            showDescription={false}
          />
          <CTASection />
          <Footer footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
