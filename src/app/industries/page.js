import "../../app/globals.css";
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/Navbar";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import Statistics from "@/src/components/sections/v2/homepage/Statistics";
import DiscoverMore from "@/src/components/sections/v2/industriespage/DiscoverMore";
import LearnMore from "@/src/components/sections/v2/industriespage/LearnMore";
import PartnerBenefit from "@/src/components/sections/v2/industriespage/PartnerBenefit";
import PartnerTrading from "@/src/components/sections/v2/industriespage/PartnerTrading";
import TrackPerformance from "@/src/components/sections/v2/industriespage/TrackPerformance";
import CarouselOverview from "@/src/components/sections/v2/servicepage/CarouselOverview";

export default function Industries() {
  const stats = [
    {
      stat: "$65B",
      label: "Annual OTC trading volume",
      width: 244,
      activeDotColor: "#E7512F",
    },
    {
      stat: "1K",
      label: "OTC trades per second",
      width: 248,
      activeDotColor: "#B48CFF",
    },
    {
      stat: "$0.5",
      label: "Largest OTC trade execution",
      width: 198,
      activeDotColor: "#E7512F",
    },
    {
      stat: "70",
      label: "Tokens traded via OTC",
      width: 192,
      activeDotColor: "#3C85DD",
    },
    {
      stat: "4K",
      label: "OTC volume growth YoY",
      width: 192,
      activeDotColor: "#F075E4",
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
            videoSrc="https://www.wintermute.com/videos/heroes/liquidity.mp4"
            firstTitle="Institutional OTC liquidity"
            secondTitle="at your fingertips"
            subtitle="Trade directly with the source of liquidity in digital markets"
            videoClass="left-[350px]"
          />
          <Statistics stats={stats} />
          <PartnerBenefit />
          <TrackPerformance />
          <CarouselOverview
            bgColor="bg-[#454a47]"
            textColor="text-white"
            svgColor="text-[#606663]"
          />
          <PartnerTrading />
          <LearnMore />
          <DiscoverMore />
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
