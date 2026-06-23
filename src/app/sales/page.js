import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import SalesLandingView from "@/src/components/sections/v2/salespage/SalesLandingView";
import { getGlobalSettings, getSitePage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";
import { notFound } from "next/navigation";

export const metadata = routeMetadata.sales;

export default async function SalesPage() {
  const [settings, content] = await Promise.all([
    getGlobalSettings(),
    getSitePage("sales"),
  ]);

  if (!content?.hero) {
    notFound();
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
          <CTASection />
          <Footer footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
