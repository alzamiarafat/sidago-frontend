import dynamic from "next/dynamic";
import HeroBannerSection from "../sections/v2/homepage/HeroBanner";
import LazyNavigation from "../sections/v2/common/LazyNavigation";
import Feed from "../sections/v2/homepage/Feed";

const InsightNews = dynamic(() =>
  import("../sections/v2/homepage/InsightNews"),
);
const Statistics = dynamic(() =>
  import("../sections/v2/homepage/Statistics"),
);
const MarketTicker = dynamic(() => import("../sections/v2/homepage/Tracker"));
const Capabilities = dynamic(() =>
  import("../sections/v2/homepage/Capabilities"),
);
const CardsGrid = dynamic(() => import("../sections/v2/homepage/CardGrid"));
const AvailablePartner = dynamic(() =>
  import("../sections/v2/servicepage/AvailablePartner"),
);
const CTASection = dynamic(() => import("../sections/v2/common/CTA"));
const Footer = dynamic(() => import("../sections/v2/common/Footer"));

export default function Home({ homepage, settings }) {
  if (!homepage) return null;

  const hero = homepage.hero;
  const insightNews = homepage.insightNews;
  const statistics = homepage.statistics;
  const marketTicker = homepage.marketTicker;
  const capabilities = homepage.capabilities;
  const whoWeServe = homepage.whoWeServe;
  const cardsGrid = homepage.cardsGrid;
  const cta = homepage.cta;
  const footer = settings?.footer;

  return (
    <div className="flex min-h-svh flex-col text-base">
      <div hidden=""></div>
      <LazyNavigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main
          className="homepage-main [&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark bg-gray-night-green text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection {...hero} imageSrc="" />
          <InsightNews items={insightNews} />
          <Statistics stats={statistics} align="start" />
          <MarketTicker items={marketTicker} />
          <Capabilities
            items={capabilities}
            whoWeServe={whoWeServe}
            bgColor="bg-black"
            textColor="text-white"
            borderColor="bg-gray-defi-shadow"
          />
          <Feed />
          <CardsGrid items={cardsGrid} />
          <AvailablePartner bgColor="bg-[#1c2420]" titleColor="text-white" />
          <CTASection items={cta} />
          <Footer footer={footer} />
        </main>
      </div>
    </div>
  );
}
