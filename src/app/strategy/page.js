import "../../app/globals.css";
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
import Investment from "@/src/components/sections/v2/strategypage/Investment";
import MissionThesis from "@/src/components/sections/v2/strategypage/MissionThesis";
import PartnerBenefit from "@/src/components/sections/v2/strategypage/PartnerBenefit";

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

  const benefits = [
    {
      text: "Broad venue coverage: exchanges, aggregators, retail brokers, etc.",
      svgPath: (
        <>
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="m20.47 21.53.53-1.28h42v1.5H22.81l40.72 40.72-.53 1.28H21v-1.5h40.19z"
            clip-rule="evenodd"
          ></path>
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M42.75 10.5v63h-1.5v-63z"
            clip-rule="evenodd"
          ></path>
        </>
      ),
      viewBox: "0 0 40 40",
    },
    {
      text: "Expertise in top exchange listing requirements",
      svgPath: (
        <path
          stroke="currentColor"
          d="M14.331.5 17.5 3.669v10.662L14.331 17.5H3.67L.5 14.331V3.67L3.669.5z"
        />
      ),
      viewBox: "0 0 18 18",
    },
    {
      text: "Added exposure to institutional investors via Wintermute OTC",
      svgPath: (
        <>
          <path
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="0.7"
            d="M30.429 5H9v30h21.429z"
          />
          <path
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="0.7"
            d="M26.143 9.286H13.286v21.428h12.857z"
          />
          <path
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="0.7"
            d="M21.857 13.571h-4.285V26.43h4.285z"
          />
        </>
      ),
      viewBox: "0 0 40 40",
    },
    {
      text: "Best-in-class DeFi expertise",
      svgPath: (
        <>
          <path
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="0.7"
            d="m13.367 18.101 4.367 4.367 8.734-13.1M14.47 26.813V35l5.457-2.728L25.387 35v-8.187"
          />
          <path
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="0.7"
            d="M9 10.46 13.367 5h13.101l4.366 5.46v10.916l-4.366 5.458h-13.1L9 21.376z"
          />
        </>
      ),
      viewBox: "0 0 40 40",
    },
    {
      text: "24/7/365 uninterrupted liquidity provision",
      svgPath: (
        <>
          <path
            stroke="currentColor"
            strokeLinejoin="bevel"
            strokeWidth="0.7"
            d="M13 16H9v8h4zM15 20h4v-4h-4v8M23 20h-2M25 16h-4v8h4M31 16v8l-4-8v8"
          />
          <path
            stroke="currentColor"
            strokeLinejoin="bevel"
            strokeWidth="0.7"
            d="M13 28H9l-4-4v-8l4-4h14"
          />
          <path
            stroke="currentColor"
            strokeLinejoin="bevel"
            strokeWidth="0.7"
            d="M13 26v4l2-2zM13 28h2M27 12h4l4 4v8l-4 4H17"
          />
          <path
            stroke="currentColor"
            strokeLinejoin="bevel"
            strokeWidth="0.7"
            d="M27 14v-4l-2 2zM27 12h-2"
          />
        </>
      ),
      viewBox: "0 0 40 40",
    },
    {
      text: "Transparent liquidity reporting",
      svgPath: (
        <>
          <path
            stroke="currentColor"
            strokeLinejoin="bevel"
            strokeWidth="0.7"
            d="m21.238 6 5.564 2.223 2.223 5.563-2.223 5.564-5.564 2.222-5.563-2.222-2.223-5.564 2.223-5.563zM13.452 26.024h13.35"
          />
          <path
            stroke="currentColor"
            strokeLinejoin="bevel"
            strokeWidth="0.7"
            d="m27.695 17.12 1.33-3.334-2.223-5.563L21.238 6l-5.563 2.223-2.223 5.563 1.337 3.334H9v17.014h22.254V17.12z"
          />
        </>
      ),
      viewBox: "0 0 40 40",
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
