"use client";

import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/Navbar";
import AvailablePartner from "@/src/components/sections/v2/servicepage/AvailablePartner";

import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import Statistics from "@/src/components/sections/v2/homepage/Statistics";
import BuildingProduct from "@/src/components/sections/v2/strategypage/BuildingProduct";
import Investment from "@/src/components/sections/v2/strategypage/Investment";
import PartnerBenefit from "@/src/components/sections/v2/strategypage/PartnerBenefit";
import WorkOverview from "@/src/components/sections/v2/strategypage/WorkOverview";
import ContentTab from "@/src/components/sections/v2/servicepage/ContentTab";
import { normalizeStrategyPath } from "@/src/data/strategy-menu";
import { usePathname } from "next/navigation";

const stats = [
  {
    stat: "50",
    label: "Annual OTC trading volume",
    width: 244,
    activeDotColor: "#3C85DD",
  },
  {
    stat: "35",
    label: "OTC trades per second",
    width: 248,
    activeDotColor: "#3C85DD",
  },
  {
    stat: "85",
    label: "Largest OTC trade execution",
    width: 198,
    activeDotColor: "#3C85DD",
  },
  {
    stat: "70",
    label: "Tokens traded via OTC",
    width: 192,
    activeDotColor: "#3C85DD",
  },
  {
    stat: "50",
    label: "OTC volume growth YoY",
    width: 192,
    activeDotColor: "#3C85DD",
  },
];

const titles = [
  {
    title: "Team up with an",
    color: "",
    className: "",
  },
  {
    title: "established builder",
    color: "#3c85dd",
    className: "",
  },
  {
    title: "of decentralized finance",
    color: "",
    className: "",
  },
];

export default function StrategyPageTemplate() {
  const pathname = usePathname();
  const currentPath = normalizeStrategyPath(pathname);
  const currentSlug =
    currentPath.split("/").filter(Boolean).at(-1) ?? "capabilities";

  return (
    <div className="flex min-h-svh flex-col text-base">
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
        <Navigation />

        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark flex-1 bg-gray-night-green text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          {/* <HeroBannerSection
            useVideo={true}
            lighterTheme={false}
            videoSrc="https://www.wintermute.com/videos/heroes/ventures.mp4"
            titles={titles}
            subtitle="Partner with the leading early-stage investor in the DeFi ecosystem to fuel your long-term growth"
            videoClass="left-[500px] top-[70px] !w-3/4 !h-3/4"
          /> */}
          {/* <Statistics stats={stats} /> */}
          {/* <PartnerBenefit /> */}
          <ContentTab
            key={currentPath}
            slug={currentSlug}
            type="strategy"
            hideMenuOnMobile={true}
          />
          {/* <Investment /> */}
          {/* <BuildingProduct /> */}
          {/* <WorkOverview /> */}
          <AvailablePartner bgColor="bg-[#151916]" titleColor="text-white" />
          <CTASection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
