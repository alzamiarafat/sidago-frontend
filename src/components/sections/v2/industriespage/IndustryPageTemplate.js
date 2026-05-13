import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/Navbar";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import Statistics from "@/src/components/sections/v2/homepage/Statistics";
import Algorithmic from "@/src/components/sections/v2/industriespage/Algorithmic";
import DiscoverMore from "@/src/components/sections/v2/industriespage/DiscoverMore";
import LearnMore from "@/src/components/sections/v2/industriespage/LearnMore";
import PartnerBenefit from "@/src/components/sections/v2/industriespage/PartnerBenefit";
import PartnerTrading from "@/src/components/sections/v2/industriespage/PartnerTrading";
import TrackPerformance from "@/src/components/sections/v2/industriespage/TrackPerformance";
import Trading from "@/src/components/sections/v2/industriespage/Trading";
import ContentTab from "@/src/components/sections/v2/servicepage/ContentTab";
import CarouselOverview from "@/src/components/sections/v2/servicepage/CarouselOverview";
import AvailablePartner from "../servicepage/AvailablePartner";

const defaultStats = [
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

const b2bStats = [
  {
    stat: "$15B",
    label: "Annual OTC trading volume",
    width: 244,
    activeDotColor: "#E7512F",
  },
  {
    stat: "10M",
    label: "OTC trades per second",
    width: 248,
    activeDotColor: "#B48CFF",
  },
  {
    stat: "70",
    label: "Largest OTC trade execution",
    width: 198,
    activeDotColor: "#E7512F",
  },
  {
    stat: "70K",
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

const defaultTitles = [
  {
    title: "Building",
    color: "",
    className: "",
  },
  {
    title: "deep, scalable liquidity",
    color: "#958dec",
    className: "",
  },
  {
    title: "for your token",
    color: "",
    className: "",
  },
];

const b2bTitles = [
  {
    title: "Unlocking",
    color: "",
    className: "",
  },
  {
    title: "sustainable alpha",
    color: "#66ff9a",
    className: "",
  },
  {
    title: "in digital assets",
    color: "",
    className: "",
  },
];

const benefits = [
  {
    text: "Broad venue coverage: exchanges, aggregators, retail brokers, etc.",
    svgPath: (
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="0.7"
        d="M36 12.571V4h-8.571zM36 4 21.714 18.286M4 4v8.571L12.571 4zM18.286 18.286 4 4M27.429 36h8.57v-8.571zM36 36 21.714 21.714M12.571 36H4v-8.571zM4 36l14.286-14.286"
      />
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
    text: "Added exposure to institutional investors via SIDAGO OTC",
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

export default function IndustryPageTemplate({
  variant = "default",
  slug = "",
  industryGroups = [],
}) {
  const isB2B = variant === "b2b";

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
            videoSrc={
              isB2B
                ? "https://www.wintermute.com/videos/heroes/prop-trading.mp4"
                : "https://www.wintermute.com/videos/heroes/liquidity.mp4"
            }
            titles={isB2B ? b2bTitles : defaultTitles}
            subtitle="Trade directly with the source of liquidity in digital markets"
            videoClass={
              isB2B
                ? "left-[500px] !w-3/4"
                : "left-[500px] top-[70px] !w-3/4 !h-3/4"
            }
          /> */}
          {isB2B ? (
            <>
              {/* <Statistics stats={b2bStats} bgColor="bg-black" /> */}
              <ContentTab
                slug={slug}
                type="industry"
                industryGroups={industryGroups}
                hideMenuOnMobile={true}
              />
              {/* <CarouselOverview
                bgColor="bg-[#454a47]"
                textColor="text-white"
                svgColor="text-[#606663]"
              />
              <PartnerTrading /> */}
              {/* <Algorithmic /> */}
              {/* <Trading /> */}
            </>
          ) : (
            <>
              {/* <Statistics stats={defaultStats} /> */}
              <ContentTab
                slug={slug}
                type="industry"
                industryGroups={industryGroups}
                hideMenuOnMobile={true}
              />
              <AvailablePartner
                bgColor="bg-[#151916]"
                titleColor="text-white"
              />
              {/* <PartnerBenefit benefits={benefits} /> */}
              {/* <TrackPerformance /> */}
              {/* <CarouselOverview
                bgColor="bg-[#454a47]"
                textColor="text-white"
                svgColor="text-[#606663]"
              />
              <PartnerTrading /> */}
              {/* <LearnMore /> */}
              {/* <DiscoverMore /> */}
            </>
          )}
          <CTASection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
