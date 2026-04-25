"use client";
import "../../app/globals.css";

import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/Navbar";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import Statistics from "@/src/components/sections/v2/homepage/Statistics";
import BuildingProduct from "@/src/components/sections/v2/strategypage/BuildingProduct";
import Investment from "@/src/components/sections/v2/strategypage/Investment";
import PartnerBenefit from "@/src/components/sections/v2/strategypage/PartnerBenefit";
import WorkOverview from "@/src/components/sections/v2/strategypage/WorkOverview";
import VerticalTab from "@/src/components/sections/v2/strategypage/VerticalTab";
import {
  getActiveStrategyItem,
  normalizeStrategyPath,
  strategyMenuItems,
} from "@/src/data/strategy-menu";
import { usePathname } from "next/navigation";
import { LatestAbout } from "@/src/components/sections/v2/options/LatestAbout";
import { BuildChallenge } from "@/src/components/sections/v2/options/BuildChallenge";
import { ChainActivity } from "@/src/components/sections/v2/options/ChainActivity";
import { TradingMarket } from "@/src/components/sections/v2/options/TradingMarket";
import { Initiatives } from "@/src/components/sections/v2/options/Initiatives";
import { LatestResearch } from "@/src/components/sections/v2/options/LatestResearch";
import { Discover } from "@/src/components/sections/v2/options/Discover";

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
    title: "Operating at every level of",
    color: "",
    className: "",
  },
  {
    title: "decentralized finance",
    color: "#ed9b9b",
    className: "",
  },
];

const tabAssets = [
  {
    backgroundClassName: "bg-purple-light",
    imageSrc: "/images/Secondary-About.svg",
  },
  {
    backgroundClassName: "bg-blue-dark",
    imageSrc: "/images/Secondary-Vision.svg",
  },
  {
    backgroundClassName: "bg-purple-light",
    imageSrc: "/images/image_1.png",
    imageSrcSet: "/images/image_1.png 1x",
    imageWidth: 4800,
  },
  {
    backgroundClassName: "bg-purple-dark",
    imageSrc: "/images/Secondary-Strategy-1.svg",
  },
  {
    backgroundClassName: "bg-blue-dark",
    imageSrc: "/images/Secondary-Focus-1.svg",
  },
];

function buildVerticalTabs(items) {
  return items.map((item, index) => {
    const asset = tabAssets[index % tabAssets.length];

    return {
      key: item.key,
      label: item.title,
      href: item.href,
      imageAlt: `${item.title}: ${item.description}`,
      content: item.description,
      ...asset,
    };
  });
}

export default function Market() {
  const pathname = usePathname();
  const currentPath = normalizeStrategyPath(pathname);
  const activeStrategyItem =
    getActiveStrategyItem(pathname) ?? strategyMenuItems[0];
  const tabSource = activeStrategyItem?.children ?? [];
  const strategyTabs = buildVerticalTabs(tabSource);
  const initialActiveKey =
    tabSource.find((item) => normalizeStrategyPath(item.href) === currentPath)
      ?.key ?? tabSource[0]?.key;

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
            videoSrc="https://www.wintermute.com/videos/heroes/defi.mp4"
            titles={titles}
            subtitle="Deeply embedded into the ecosystem, we understand DeFi’s infrastructure and improve its on-chain efficiency"
            // videoClass="left-[500px] top-[70px] !w-3/4 !h-3/4"
          />
          <Statistics stats={stats} bgColor="bg-[#333935]" />
          <LatestAbout />
          <BuildChallenge />
          <ChainActivity />
          <TradingMarket />
          {/* <Initiatives /> */}
          <LatestResearch />
          <Discover />

          {/* <PartnerBenefit />

          <Investment />
          <BuildingProduct />
          <WorkOverview /> */}
          <CTASection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
