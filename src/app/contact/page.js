import "../../app/globals.css";
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/Navbar";
import About from "@/src/components/sections/v2/contactpage/About";
import Overview from "@/src/components/sections/v2/contactpage/Overview";
import TeamMeet from "@/src/components/sections/v2/contactpage/TeamMeet";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import ExploreCareer from "@/src/components/sections/v2/contactpage/ExploreCareer";
import ContactUs from "@/src/components/sections/v2/contactpage/ContactUs";

const titles = [
  {
    title: "Building the future of",
    color: "",
    className: "",
  },
  {
    title: "decentralized finance",
    color: "#e7512e",
    className: "",
  },
];
export default function ContactPage() {
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
            loop={false}
            videoSrc="https://www.wintermute.com/videos/heroes/company-1280w.mp4"
            titles={titles}
            subtitle="Trade directly with the source of liquidity in digital markets"
            videoClass=""
          />
          <About />
          <Overview />
          <TeamMeet />
          <ExploreCareer />
          <ContactUs />
          {/* <RecommendedInsight />
                    <FilterBy />
                    <Series />
                    <Subscribe /> */}
          <CTASection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
