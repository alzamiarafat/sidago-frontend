import "../../app/globals.css";
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/Navbar";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import Statistics from "@/src/components/sections/v2/homepage/Statistics";
import LearnMore from "@/src/components/sections/v2/industriespage/LearnMore";
import PartnerBenefit from "@/src/components/sections/v2/industriespage/PartnerBenefit";
import PartnerTrading from "@/src/components/sections/v2/industriespage/PartnerTrading";
import TrackPerformance from "@/src/components/sections/v2/industriespage/TrackPerformance";
import CarouselOverview from "@/src/components/sections/v2/servicepage/CarouselOverview";

export default function Industries() {
  const stats = [
    { label: "Annual OTC trading volume", value: "65B" },
    { label: "OTC trades per second", value: "1K" },
    { label: "Largest OTC trade execution", value: "$0.5" },
    { label: "Tokens traded via OTC", value: "700" },
    { label: "OTC volume growth YoY", value: "4x" },
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
