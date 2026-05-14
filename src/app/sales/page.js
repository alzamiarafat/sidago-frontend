import "../../app/globals.css";

import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import SalesLandingView from "@/src/components/sections/v2/salespage/SalesLandingView";
import { getGlobalSettings } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.sales;
const titles = [
  {
    title: "Helping companies build",
    color: "",
    className: "text-black",
  },
  {
    title: "stronger sales relationships",
    color: "#4f8b66",
    className: "block mt-1",
  },
];

export default async function SalesPage() {
  const settings = await getGlobalSettings();

  return (
    <div className="flex min-h-svh flex-col text-base">
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
        <Navigation />

        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] flex-1 bg-[#07110d] text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection
            useVideo={true}
            lighterTheme={true}
            videoSrc="https://www.wintermute.com/videos/heroes/cfds.mp4"
            titles={titles}
            subtitle="Strengthen employee teamwork, customer service, and external business relationships with SIDAGO to create more reliable sales growth and stronger long-term business value."
            videoClass={"left-[500px] !w-3/4"}
            lighterBgColor="bg-[#f8f8f8]"
          />
          <SalesLandingView />
          <CTASection />
          <Footer footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
