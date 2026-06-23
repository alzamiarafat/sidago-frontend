
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import Statistics from "@/src/components/sections/v2/homepage/Statistics";
import BuildingProduct from "@/src/components/sections/v2/strategypage/BuildingProduct";
import Investment from "@/src/components/sections/v2/strategypage/Investment";
import PartnerBenefit from "@/src/components/sections/v2/strategypage/PartnerBenefit";
import WorkOverview from "@/src/components/sections/v2/strategypage/WorkOverview";
import "@/src/components/sections/v2/businessprocesses/business-processes-hero-mobile.css";
import { getBusinessProcessesPage, getGlobalSettings } from "@/src/lib/api";

export default async function BusinessProcesses() {
  const [page, settings] = await Promise.all([
    getBusinessProcessesPage(),
    getGlobalSettings(),
  ]);
  const hero = {
    ...page.hero,
    videoClass:
      "business-processes-hero-video lg:left-[500px] lg:top-[70px] lg:!w-3/4 lg:!h-3/4",
    videoSectionClass: [
      "business-processes-hero-section",
      page.hero?.videoSectionClass,
    ]
      .filter(Boolean)
      .join(" "),
  };

  return (
    <div className="flex min-h-svh flex-col text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark bg-gray-night-green text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection {...hero} />
          <Statistics stats={page.statistics} compact />
          <PartnerBenefit
            title={page.partnerBenefit.title}
            benefits={page.partnerBenefit.benefits}
          />
          <Investment
            title={page.processes.title}
            subtitle={page.processes.subtitle}
            items={page.processes.items}
          />
          <BuildingProduct
            title={page.solutions.title}
            subtitle={page.solutions.subtitle}
            items={page.solutions.items}
          />
          <WorkOverview {...page.workOverview} />
          <CTASection />
          <Footer footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
