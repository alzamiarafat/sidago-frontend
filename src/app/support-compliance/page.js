
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import CMSPageShell from "@/src/components/sections/v2/common/CMSPageShell";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import SupportComplianceView from "@/src/components/sections/v2/support-compliance/SupportComplianceView";
import "@/src/components/sections/v2/support-compliance/support-compliance-hero-mobile.css";
import { getGlobalSettings, getSitePage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.supportCompliance;


export default async function SupportCompliancePage() {
  const [settings, content] = await Promise.all([
    getGlobalSettings(),
    getSitePage("support-compliance"),
  ]);

  if (!content?.hero) {
    return <CMSPageShell className="flex min-h-svh flex-col bg-gray-night-green text-base" />;
  }

  const hero = {
    ...content.hero,
    videoClass: "support-compliance-hero-video lg:left-[500px] lg:!w-3/4",
    videoSectionClass: [
      "support-compliance-hero-section",
      content.hero?.videoSectionClass,
    ]
      .filter(Boolean)
      .join(" "),
  };

  return (
    <div className="flex min-h-svh flex-col text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark flex-1 bg-[#151916] text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection {...hero} />
          <SupportComplianceView footer={settings?.footer} content={content} />
        </main>
      </div>
    </div>
  );
}
