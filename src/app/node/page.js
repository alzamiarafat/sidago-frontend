import "../../app/globals.css";
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/Navbar";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import Statistics from "@/src/components/sections/v2/homepage/Statistics";
import PartnerBenefit from "@/src/components/sections/v2/strategypage/PartnerBenefit";
import Investment from "@/src/components/sections/v2/strategypage/Investment";
import BuildingProduct from "@/src/components/sections/v2/strategypage/BuildingProduct";
import WorkOverview from "@/src/components/sections/v2/strategypage/WorkOverview";
import { getContentPageBySlug } from "@/src/lib/cms";

const fallbackTitles = [
  { title: "Team up with an", color: "", className: "" },
  { title: "established builder", color: "#3c85dd", className: "" },
  { title: "of decentralized finance", color: "", className: "" },
];

const fallbackStats = [
  { stat: "50", label: "Annual OTC trading volume", width: 244, activeDotColor: "#3C85DD" },
  { stat: "35", label: "OTC trades per second", width: 248, activeDotColor: "#3C85DD" },
  { stat: "85", label: "Largest OTC trade execution", width: 198, activeDotColor: "#3C85DD" },
  { stat: "70", label: "Tokens traded via OTC", width: 192, activeDotColor: "#3C85DD" },
];

export default async function NodePage() {
  const pageData = await getContentPageBySlug("node", "node");
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
            videoSrc={hero?.videoSrc ?? "https://www.wintermute.com/videos/heroes/ventures.mp4"}
            titles={hero?.titles?.length ? hero.titles : fallbackTitles}
            subtitle={
              hero?.subtitle ??
              "Partner with a proven early-stage builder in the DeFi ecosystem to fuel long-term growth."
            }
            videoClass={hero?.videoClass}
            videoSectionClass={hero?.videoSectionClass}
            imageSrc={hero?.imageSrc}
            fontWeight={hero?.fontWeight}
            loop={hero?.loop ?? true}
          />
          <Statistics stats={stats} />
          <PartnerBenefit {...(customData.partnerBenefits ?? {})} />
          <Investment {...(customData.investments ?? {})} />
          <BuildingProduct {...(customData.incubations ?? {})} />
          <WorkOverview {...(customData.workOverview ?? {})} />
          <CTASection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
