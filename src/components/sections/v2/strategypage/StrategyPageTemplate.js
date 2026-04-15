"use client";

import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/Navbar";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import Statistics from "@/src/components/sections/v2/homepage/Statistics";
import BuildingProduct from "@/src/components/sections/v2/strategypage/BuildingProduct";
import Investment from "@/src/components/sections/v2/strategypage/Investment";
import MissionThesis from "@/src/components/sections/v2/strategypage/MissionThesis";
import PartnerBenefit from "@/src/components/sections/v2/strategypage/PartnerBenefit";
import WorkOverview from "@/src/components/sections/v2/strategypage/WorkOverview";

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
  return (
    <div className="flex h-svh flex-col text-base">
      <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
        <Navigation />

        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark bg-gray-night-green text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection
            useVideo={true}
            lighterTheme={false}
            videoSrc="https://www.wintermute.com/videos/heroes/ventures.mp4"
            titles={titles}
            subtitle="Partner with the leading early-stage investor in the DeFi ecosystem to fuel your long-term growth"
            videoClass="left-[500px] top-[70px] !w-3/4 !h-3/4"
          />
          <Statistics stats={stats} />
          <PartnerBenefit />
          <MissionThesis />
          <Investment />
          <BuildingProduct />
          <WorkOverview />
          <CTASection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
