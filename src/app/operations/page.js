import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import OperationsPageContent from "@/src/components/sections/v2/operationspage/OperationsPageContent";
import { getGlobalSettings, getOperationsPage } from "@/src/lib/api";
import { buildPageMetadata } from "@/src/lib/seo";

export const metadata = buildPageMetadata({
  title: "Our Operations",
  description:
    "Explore Sidago's operations model, workflow, delivery metrics, and technology systems for efficient, reliable business execution.",
  path: "/operations",
  keywords: [
    "Sidago operations",
    "operational excellence",
    "workflow management",
    "logistics and distribution",
    "business operations",
  ],
});

export default async function OperationsPage() {
  const [settings, operationsPage] = await Promise.all([
    getGlobalSettings(),
    getOperationsPage(),
  ]);
  const heroTitles = operationsPage.hero?.titles?.map((title, index) =>
    index === 0 ? { ...title, className: "", color: "#168b50" } : title,
  );
  const hero = {
    ...operationsPage.hero,
    titles: heroTitles,
    videoClass: `${operationsPage.hero?.videoClass} operations-hero-video`,
  };

  return (
    <div className="flex min-h-svh flex-col text-base">
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
        <Navigation />

        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] flex-1 bg-white text-black"
          style={{ colorScheme: "light" }}
        >
          <HeroBannerSection {...hero} />
          <OperationsPageContent />
          <CTASection />
          <Footer footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
