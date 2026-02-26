"use client";

import { motion, wrap } from "framer-motion";
import Capabilities from "../sections/v2/homepage/Capabilities";
import CardsGrid from "../sections/v2/homepage/CardGrid";
import CTASection from "../sections/v2/homepage/CTA";
import Footer from "../sections/v2/homepage/Footer";
import HeroBannerSection from "../sections/v2/homepage/HeroBanner";
import InsightNews from "../sections/v2/homepage/InsightNews";
import LatestInsight from "../sections/v2/homepage/LatestInsight";
import Navigation from "../sections/v2/homepage/Navbar";
import Statistics from "../sections/v2/homepage/Statistics";
import MarketTicker from "../sections/v2/homepage/Tracker";

// ============ CONSTANTS ============
const SCROLL_MT = "[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)]";
const BASE_TEXT = "text-gray-off-white dark:bg-gray-night-green";

// ============ SECTIONS CONFIG ============
const sections = [
  { id: "hero", wrapper: true, components: [HeroBannerSection] },
  { id: "insight-news", bg: "bg-stone-900",wrapper:false, components: [InsightNews] },
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
    <>
      <Navigation />
      {sections.map((section) => (
        <Section key={section.id} {...section} />
      ))}
      <Footer />
    </>
  );
}
