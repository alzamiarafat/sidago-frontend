import dynamic from "next/dynamic";
import HeroBannerSection from "../sections/v2/homepage/HeroBanner";
import LazyNavigation from "../sections/v2/common/LazyNavigation";
import { defaultHomepage } from "@/src/data/cms/defaults";
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

export default function Home({ homepage = defaultHomepage, settings }) {
  const hero = homepage?.hero || defaultHomepage.hero;
  const insightNews = homepage?.insightNews || defaultHomepage.insightNews;
  const statistics = homepage?.statistics || defaultHomepage.statistics;
  const marketTicker = homepage?.marketTicker || defaultHomepage.marketTicker;
  const capabilities = homepage?.capabilities || defaultHomepage.capabilities;
  const whoWeServe = homepage?.whoWeServe || defaultHomepage.whoWeServe;
  const cardsGrid = homepage?.cardsGrid || defaultHomepage.cardsGrid;
  const cta = homepage?.cta || defaultHomepage.cta;
  const footer = settings?.footer;

  return (
    <div className="flex min-h-svh flex-col text-base">
      <div hidden=""></div>
      <div className="flex flex-1 flex-col overflow-x-hidden">
        <LazyNavigation />
        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark bg-gray-night-green text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection {...hero} imageSrc="" />
          <InsightNews items={insightNews} />
          <Statistics stats={statistics} />
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
