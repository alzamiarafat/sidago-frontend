import "../../../app/globals.css";
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/Navbar";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import Statistics from "@/src/components/sections/v2/homepage/Statistics";
import DiscoverMore from "@/src/components/sections/v2/industriespage/DiscoverMore";
import LearnMore from "@/src/components/sections/v2/industriespage/LearnMore";
import PartnerTrading from "@/src/components/sections/v2/industriespage/PartnerTrading";
import TrackPerformance from "@/src/components/sections/v2/industriespage/TrackPerformance";
import CarouselOverview from "@/src/components/sections/v2/servicepage/CarouselOverview";
import BuildingProduct from "@/src/components/sections/v2/strategypage/BuildingProduct";
import Investment from "@/src/components/sections/v2/strategypage/Investment";
import MissionThesis from "@/src/components/sections/v2/strategypage/MissionThesis";
import PartnerBenefit from "@/src/components/sections/v2/strategypage/PartnerBenefit";
import WorkOverview from "@/src/components/sections/v2/strategypage/WorkOverview";

export default function Strategy() {
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
          {/* <TrackPerformance />
          <CarouselOverview
            bgColor="bg-[#454a47]"
            textColor="text-white"
            svgColor="text-[#606663]"
          />
          <PartnerTrading />
          <LearnMore />
          <DiscoverMore /> */}
          <CTASection />
          <Footer />

          {/* <InsightNews
               items={items}
               bgColor="bg-white"
               textColor="text-black"
             />
             <Statistics
               stats={stats}
               bgColor="bg-gray-200"
               textColor="text-black"
             />
             <VideoOverview />
   
             <Capabilities
               items={accordionItems}
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
             <CTASection />
             <Footer /> */}
        </main>
      </div>
    </div>
  );
}
