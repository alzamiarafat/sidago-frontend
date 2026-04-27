import CTASection from "@/src/components/sections/v2/common/CTA";
import "../../app/globals.css";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/Navbar";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import FilterBy from "@/src/components/sections/v2/salespage/FilterBy";
import RecommendedInsight from "@/src/components/sections/v2/salespage/RecommendedInsight";
import Series from "@/src/components/sections/v2/salespage/Series";
import Subscribe from "@/src/components/sections/v2/salespage/Subscribe";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.sales;

const titles = [
  {
    title: "Digital asset",
    color: "",
    className: "text-black",
  },
  {
    title: "OTC market 2025",
    color: "#00d64a",
    className: "block mt-1",
  },
];
export default function SalesPage() {
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
            lighterTheme={true}
            videoSrc="https://www.wintermute.com/videos/heroes/cfds.mp4"
            titles={titles}
            subtitle="Partner with the leading early-stage investor in the DeFi ecosystem to fuel your long-term growth"
            videoClass={"left-[500px] !w-3/4"}
            lighterBgColor="bg-[#f8f8f8]"
          />
          <RecommendedInsight />
          <FilterBy />
          <Series />
          <CTASection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
