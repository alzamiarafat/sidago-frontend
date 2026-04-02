import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/Navbar";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import RecommendedInsight from "@/src/components/sections/v2/sales/RecommendedInsight";

const titles = [
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
            lighterTheme={false}
            videoSrc="https://www.wintermute.com/videos/heroes/liquidity.mp4"
            titles={titles}
            subtitle="Trade directly with the source of liquidity in digital markets"
            videoClass="left-[500px] top-[70px] !w-3/4 !h-3/4"
          />

          <RecommendedInsight />
          <Footer />
        </main>
      </div>
    </div>
  );
}
