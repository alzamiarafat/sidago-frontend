
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import SupportComplianceView from "@/src/components/sections/v2/support-compliance/SupportComplianceView";
import { getGlobalSettings, getSitePage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.supportCompliance;

export default async function SupportCompliancePage() {
  const [settings, content] = await Promise.all([
    getGlobalSettings(),
    getSitePage("support-compliance"),
  ]);

  return (
    <div className="flex min-h-svh flex-col text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark flex-1 bg-[#151916] text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection {...content.hero} />
          <SupportComplianceView footer={settings?.footer} content={content} />
        </main>
      </div>
    </div>
  );
}
