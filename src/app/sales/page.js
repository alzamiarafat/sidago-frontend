import PageFooter from "@/src/components/sections/v2/common/PageFooter";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import SalesLandingView from "@/src/components/sections/v2/salespage/SalesLandingView";
import CMSPageUnavailable from "@/src/components/sections/v2/common/CMSPageUnavailable";
import { getGlobalSettings, getSitePage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = routeMetadata.sales;

export default async function SalesPage() {
  const content = await getSitePage("sales");
  const settings = await getGlobalSettings();

  if (!content?.hero) {
    return (
      <div className="flex min-h-svh flex-col text-base">
        <Navigation />
        <CMSPageUnavailable className="min-h-[calc(100svh-var(--header-height))]" />
      </div>
    );
  }

  return (
    <div className="flex min-h-svh flex-col text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] flex-1 bg-[#07110d] text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection {...content.hero} />
          <SalesLandingView content={content} />
          <PageFooter footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
