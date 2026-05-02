import "../../app/globals.css";
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
import { MeetUs } from "@/src/components/sections/v2/marketing-growth/MeetUs";
import { MeetBuilders } from "@/src/components/sections/v2/marketing-growth/MeetBuliders";
import { Catchup } from "@/src/components/sections/v2/marketing-growth/CatchUp";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.events;

const defaultTitles = [
  {
    title: "Igniting",
    color: "",
    className: "",
  },
  {
    title: "meaningful conversations",
    color: "#f075e4",
    className: "",
  },
  {
    title: "to spark great ideas",
    color: "",
    className: "",
  },
];

export default function Events({ variant = "default", slug = "" }) {
  const isB2B = true;

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
            videoSrc={
              "https://www.wintermute.com/videos/heroes/marketing-growth.mp4"
            }
            titles={defaultTitles}
            subtitle="Find out where to meet, talk, and build with us next"
            videoClass={
              isB2B
                ? "left-[500px] !w-3/4"
                : "left-[500px] top-[70px] !w-3/4 !h-3/4"
            }
          />
          <MeetUs />
          <MeetBuilders />
          <Catchup />
          <CTASection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
