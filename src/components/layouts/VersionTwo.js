"use client";

import { motion, wrap } from "framer-motion";
import Capabilities from "../sections/v2/homepage/Capabilities";
import CardsGrid from "../sections/v2/homepage/CardGrid";
import CTASection from "../sections/v2/common/CTA";
import Footer from "../sections/v2/common/Footer";
import HeroBannerSection from "../sections/v2/homepage/HeroBanner";
import InsightNews from "../sections/v2/homepage/InsightNews";
import LatestInsight from "../sections/v2/homepage/LatestInsight";
import Navigation from "../sections/v2/common/Navbar";
import Statistics from "../sections/v2/homepage/Statistics";
import MarketTicker from "../sections/v2/homepage/Tracker";
import LiquidStats from "../ui/TextAnimation";
import PartnerTrading from "../sections/v2/industriespage/PartnerTrading";

// ============ CONSTANTS ============
const SCROLL_MT = "[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)]";
const BASE_TEXT = "text-gray-off-white dark:bg-gray-night-green";

const items = [
  {
    title: "Digital asset OTC market 2026",
    href: "#",
    srText:
      "Insights › Market color › Reports › Digital asset otc markets 2026",
  },
  {
    title: "Sidago Trader Assessment Day",
    href: "#",
    srText: "Insights › News › Announcements › Sidago trader assessment day",
  },
  {
    title: "Introducing NODE Insights",
    href: "",
    srText: "Insights › News › Announcements › Introducing node insights",
  },
];

const stats = [
  {
    stat: "75",
    label: "Saving Costing",
    width: 244,
    activeDotColor: "#E7512F",
  },
  {
    stat: "81",
    label: "Token liquidity partners",
    width: 248,
    activeDotColor: "#E7512F",
  },
  {
    stat: "87",
    label: "Return on Investment",
    width: 198,
    activeDotColor: "#E7512F",
  },
  {
    stat: "92",
    label: "Client Retention",
    width: 192,
    activeDotColor: "#E7512F",
  },
  {
    stat: "88",
    label: "Client Retention",
    width: 192,
    activeDotColor: "#E7512F",
  },
];
const titles = [
  {
    title: "We understand",
    color: "",
    className: "text-[#E7512F]",
  },
  {
    title: "the online world",
    color: "",
    className: "",
  },
];
// ============ SECTIONS CONFIG ============
const sections = [
  { id: "hero", wrapper: true, components: [HeroBannerSection] },
  {
    id: "insight-news",
    bg: "bg-stone-900",
    wrapper: false,
    components: [InsightNews],
  },
  { id: "statistics", bg: "bg-stone-800", components: [Statistics] },
  { id: "ticker", bg: "bg-stone-200", components: [MarketTicker] },
  { id: "capabilities", bg: "bg-stone-700", components: [Capabilities] },
  // { id: "latest-insight", bg: "", components: [LatestInsight] },
  { id: "cards", bg: "", components: [CardsGrid] },
  { id: "cta", bg: "", components: [CTASection] },
];

// ============ SECTION WRAPPER ============
// function Section({ id, bg, wrapper, components }) {
//   const isHero = id === "hero";

//   return (
//     <section
//       id={id}
//       className={`${SCROLL_MT} ${BASE_TEXT} ${bg} ${
//         isHero
//           ? "h-screen w-full relative flex items-center justify-center overflow-hidden"
//           : ""
//       }`}
//     >
//       {isHero && (
//         <motion.div
//           className="absolute inset-0 bg-cover bg-center"
//           // style={{ backgroundImage: "url('/images/banner.png')" }}
//           // initial={{ scale: 1 }}
//           // animate={{ scale: 1.1 }}
//           // transition={{
//           //   duration: 20,
//           //   repeat: Infinity,
//           //   repeatType: "reverse",
//           //   ease: "easeInOut",
//           // }}
//         />
//       )}

//       {wrapper ? (
//         <div className="relative z-10 container mx-auto px-6 lg:px-20">
//           {components.map((Component) => (
//             <Component key={Component.name} />
//           ))}
//         </div>
//       ) : (
//         components.map((Component) => <Component key={Component.name} />)
//       )}
//     </section>
//   );
// }

function Section({ id, bg, wrapper, components }) {
  const isHero = id === "hero";

  return (
    <section
      id={id}
      className={`${SCROLL_MT} ${BASE_TEXT} ${bg} ${
        isHero
          ? "h-screen w-full relative flex items-center justify-center overflow-hidden"
          : ""
      }`}
    >
      {/* Video background for hero */}
      {isHero && (
        <>
          <video
            className="absolute inset-0 w-full h-full object-cover -translate-y-10"
            autoPlay
            muted
            loop
            playsInline
            src="/videos/home2.mp4"
          />

          {/* Dark gradient overlay: dark on left, transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>

          {/* Optional additional gradient for style */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-night-green to-transparent opacity-30 lg:bg-gradient-to-r lg:from-gray-night-green lg:to-transparent"></div>
        </>
      )}

      {wrapper ? (
        <div className="relative z-10 container mx-auto px-6 lg:px-20">
          {components.map((Component) => (
            <Component key={Component.name} />
          ))}
        </div>
      ) : (
        components.map((Component) => <Component key={Component.name} />)
      )}
    </section>
  );
}

// ============ PAGE ============
export default function Home() {
  return (
    <div class="flex h-svh flex-col text-base">
      <div hidden=""></div>
      <div class="flex flex-1 flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
        <Navigation />
        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark bg-gray-night-green text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection
            useVideo={true}
            videoSrc="/videos/home2.mp4"
            titles={titles}
            subtitle="Sidago makes digital asset markets liquid and efficient"
          />

          <InsightNews items={items} />
          <Statistics stats={stats} />
          <MarketTicker />
          <Capabilities />
          {/* <LatestInsight /> */}
          <CardsGrid />
          <PartnerTrading titleColor="text-[#e7512f]" />
          <CTASection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
