import "../../app/globals.css";
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/Navbar";
import Capabilities from "@/src/components/sections/v2/homepage/Capabilities";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import InsightNews from "@/src/components/sections/v2/homepage/InsightNews";
import Statistics from "@/src/components/sections/v2/homepage/Statistics";
import AccessWay from "@/src/components/sections/v2/servicepage/AccessWay";
import AvailablePartner from "@/src/components/sections/v2/servicepage/AvailablePartner";
import CarouselOverview from "@/src/components/sections/v2/servicepage/CarouselOverview";
import ContentTab from "@/src/components/sections/v2/servicepage/ContentTab";
import DelegateProfile from "@/src/components/sections/v2/servicepage/DelegateProfile";
import OurVision from "@/src/components/sections/v2/servicepage/OurVision";
import ServiceLatestInsight from "@/src/components/sections/v2/servicepage/ServiceLatestInsight";
import Support from "@/src/components/sections/v2/servicepage/Support";
import TradeOption from "@/src/components/sections/v2/servicepage/TradeOption";
import VideoOverview from "@/src/components/sections/v2/servicepage/VideoOverview";
import { getGlobalSettings, getOperationsPage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.spots;

const pageContent = {
  otc: {
    hero: {
      useVideo: true,
      lighterTheme: true,
      videoSrc: "https://www.wintermute.com/videos/heroes/otc.mp4",
      titles: [
        {
          title: "Institutional OTC liquidity",
          color: "",
          className: "text-green-dark",
        },
        {
          title: "at your fingertips",
          color: "",
          className: "",
        },
      ],
      subtitle:
        "Trade directly with the source of liquidity in digital markets",
      videoSectionClass: "bg-gray-tradfi-dust text-gray-night-green",
    },
  },
  governance: {
    hero: {
      useVideo: true,
      lighterTheme: false,
      videoSrc: "https://www.wintermute.com/videos/heroes/governance.mp4",
      titles: [
        {
          title: "Governance for a",
          color: "",
          className: "text-white",
        },
        {
          title: "truly decentralized",
          color: "#EC5B5B",
          className: "",
        },
        {
          title: "world",
          color: "",
          className: "text-white",
        },
      ],
      subtitle:
        "Sidago supports DAOs with governance solutions that drive transparency and long-term value",
      videoClass: "left-[500px] !w-3/4",
      bgColor: "bg-[#161917]",
    },
  },
};

export default async function OperationsPage({ variant = "otc", slug = "" }) {
  const [cmsPage, settings] = await Promise.all([
    getOperationsPage(),
    getGlobalSettings(),
  ]);
  const page = variant === "otc" ? cmsPage : (pageContent[variant] ?? cmsPage);
  const isGovernancePage = variant === "governance";

  return (
    <div className="flex min-h-svh flex-col text-base">
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
        <Navigation />

        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark flex-1 bg-gray-night-green text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection {...page.hero} />

          {isGovernancePage ? (
            <>
              <OurVision />
              <ContentTab slug={slug} />
              <Support />
              <DelegateProfile />
            </>
          ) : (
            <>
              <InsightNews
                items={cmsPage.insightNews}
                bgColor="bg-white"
                textColor="text-black"
              />
              <Statistics
                stats={cmsPage.statistics}
                bgColor="bg-gray-200"
                lighterTheme={true}
                dotColor="#4D4D4D"
              />
              <ContentTab slug={slug} />
              <VideoOverview />
              <Capabilities
                items={cmsPage.capabilities}
                bgColor="bg-[#E5E6E5]"
                textColor="text-black"
                hoverColor="bg-gray-tradfi-frost"
                borderColor="border-gray-tradfi-frost"
              />
              <TradeOption />
              <CarouselOverview />
              <AccessWay />
              <AvailablePartner />
              <ServiceLatestInsight />
            </>
          )}

          <CTASection items={cmsPage.cta} />
          <Footer footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
