import CTASection from "@/src/components/sections/v2/common/CTA";
import "../../app/globals.css";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/Navbar";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import FilterBy from "@/src/components/sections/v2/salespage/FilterBy";
import RecommendedInsight from "@/src/components/sections/v2/salespage/RecommendedInsight";
import Series from "@/src/components/sections/v2/salespage/Series";
import Subscribe from "@/src/components/sections/v2/salespage/Subscribe";

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
            useVideo={false}
            lighterTheme={true}
            imageSrc="images/OTC-report-2025_svg.svg"
            titles={titles}
            subtitle="Sidago 2025 digital asset OTC market review analyzes crypto liquidity flows, institutional trading behavior and derivatives growth to explain how traditional cycle dynamics are changing."
            videoClass="left-[500px] top-[70px] !w-3/4 !h-3/4"
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
