import "../../app/globals.css";
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/Navbar";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import Statistics from "@/src/components/sections/v2/homepage/Statistics";
import { LatestAbout } from "@/src/components/sections/v2/options/LatestAbout";
import { BuildChallenge } from "@/src/components/sections/v2/options/BuildChallenge";
import { ChainActivity } from "@/src/components/sections/v2/options/ChainActivity";
import { TradingMarket } from "@/src/components/sections/v2/options/TradingMarket";
import { LatestResearch } from "@/src/components/sections/v2/options/LatestResearch";
import { Discover } from "@/src/components/sections/v2/options/Discover";
import { getContentPageBySlug } from "@/src/lib/cms";

const fallbackTitles = [
  { title: "Operating at every level of", color: "", className: "" },
  { title: "decentralized finance", color: "#ed9b9b", className: "" },
];

const fallbackStats = [
  { stat: "50", label: "Annual OTC trading volume", width: 244, activeDotColor: "#3C85DD" },
  { stat: "35", label: "OTC trades per second", width: 248, activeDotColor: "#3C85DD" },
  { stat: "85", label: "Largest OTC trade execution", width: 198, activeDotColor: "#3C85DD" },
  { stat: "70", label: "Tokens traded via OTC", width: 192, activeDotColor: "#3C85DD" },
];

export default async function OptionsPage() {
  const pageData = await getContentPageBySlug("options", "options");
  const customData = pageData?.customData ?? {};
  const hero = pageData?.hero;
  const stats = pageData?.stats?.length ? pageData.stats : fallbackStats;

  return (
    <div className="flex h-svh flex-col text-base">
      <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
        <Navigation />
        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark bg-gray-night-green text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection
            useVideo={hero?.useVideo ?? true}
            lighterTheme={hero?.lighterTheme ?? false}
            videoSrc={hero?.videoSrc ?? "https://www.wintermute.com/videos/heroes/defi.mp4"}
            titles={hero?.titles?.length ? hero.titles : fallbackTitles}
            subtitle={
              hero?.subtitle ??
              "Deeply embedded into the ecosystem, we understand DeFi infrastructure and improve on-chain efficiency."
            }
            videoClass={hero?.videoClass}
            videoSectionClass={hero?.videoSectionClass}
            imageSrc={hero?.imageSrc}
            fontWeight={hero?.fontWeight}
            loop={hero?.loop ?? true}
          />
          <Statistics stats={stats} bgColor="bg-[#333935]" />
          <LatestAbout {...(customData.latestAbout ?? {})} />
          <BuildChallenge {...(customData.buildChallenge ?? {})} />
          <ChainActivity {...(customData.chainActivity ?? {})} />
          <TradingMarket {...(customData.tradingMarket ?? {})} />
          <LatestResearch {...(customData.latestResearch ?? {})} />
          <Discover {...(customData.discover ?? {})} />
          <CTASection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
