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
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.forwards;

const insightItems = [
  {
    title: "Report: Digital asset OTC market 2025",
    href: "#",
    srText:
      "Insights › Market color › Reports › Digital asset otc markets 2025",
  },
  {
    title: "Discover NODE Insights: trader curated market insights",
    href: "#",
    srText: "Insights › News › Announcements › Sidago trader assessment day",
  },
  {
    title: "Trade crypto indexes via CFDs on Node",
    href: "#",
    srText: "Insights › News › Announcements › Introducing node insights",
  },
];

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
    activeDotColor: "#E7512F",
  },
  {
    stat: "$0.5",
    label: "Largest OTC trade execution",
    width: 198,
    activeDotColor: "#E7512F",
  },
  {
    stat: "700",
    label: "Tokens traded via OTC",
    width: 192,
    activeDotColor: "#E7512F",
  },
  {
    stat: "4K",
    label: "OTC volume growth YoY",
    width: 192,
    activeDotColor: "#E7512F",
  },
];

const accordionItems = [
  {
    title: "Spot",
    description:
      "Trade spot or derivatives across the widest range of digital assets, with an OTC desk that sits at the source of liquidity.",
    href: "otc",
    video: "/media/Accordion-Spot.mp4#t=2",
    rotate: "rotate(30deg)",
    sr: "Otc",
  },
  {
    title: "Options",
    description:
      "Create liquid and efficient markets for your token globally, with the partner of choice for top-tier protocols.",
    href: "liquidity",
    video: "/media/Accordion-Options.mp4#t=3.15",
    rotate: "rotate(-25deg)",
    sr: "Liquidity",
  },
  {
    title: "Forwards",
    description:
      "Partner with a leading builder, liquidity provider, blockchain researcher, and governance contributor in DeFi.",
    href: "defi",
    video: "/media/Accordion-Forwards.mp4#t=1",
    rotate: "rotate(0deg)",
    sr: "Defi",
  },
  {
    title: "CFDs",
    description:
      "Partner with a leading builder, liquidity provider, blockchain researcher, and governance contributor in DeFi.",
    href: "defi",
    video: "/media/Accordion-CFDs.mp4#t=1",
    rotate: "rotate(0deg)",
    sr: "Defi",
  },
  {
    title: "Tailored products",
    description:
      "Partner with a leading builder, liquidity provider, blockchain researcher, and governance contributor in DeFi.",
    href: "defi",
    video: "/media/Accordion-Tailored-products.mp4#t=1",
    rotate: "rotate(0deg)",
    sr: "Defi",
  },
];

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
          title: "Infrastructure for a truly",
          color: "",
          className: "text-white",
        },
        {
          title: "scalable",
          color: "#EC5B5B",
          className: "",
        },
        {
          title: "business-driven world",
          color: "",
          className: "text-white",
        },
      ],
      subtitle:
        "Sidago delivers reliable systems and global support to ensure performance, security, and continuous growth",
      videoClass: "left-[500px] !w-3/4",
      bgColor: "bg-[#161917]",
    },
  },
};

export default function SupportPage({ variant = "governance", slug = "" }) {
  const page = pageContent[variant] ?? pageContent.otc;
  const isGovernancePage = variant === "governance";

  return (
    <div className="flex min-h-svh flex-col bg-gray-night-green text-base">
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
              {/* <ContentTab slug={slug} /> */}
              <Support />
              <DelegateProfile />
            </>
          ) : (
            <>
              <InsightNews
                items={insightItems}
                bgColor="bg-white"
                textColor="text-black"
              />
              <Statistics
                stats={stats}
                bgColor="bg-gray-200"
                lighterTheme={true}
                dotColor="#4D4D4D"
              />
              <ContentTab slug={slug} />
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
            </>
          )}

          <CTASection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
