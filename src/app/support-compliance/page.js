import "../../app/globals.css";

import Navigation from "@/src/components/sections/v2/common/Navbar";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import SupportComplianceView from "@/src/components/sections/v2/support-compliance/SupportComplianceView";
import { getGlobalSettings } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.supportCompliance;

const supportComplianceHero = {
  useVideo: true,
  videoSrc:
    "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/05/23163720/Accordion-Forwards.mp4#t=2",
  titles: [
    { title: "Operating with", color: "", className: "" },
    { title: "support & compliance", color: "#168b50", className: "" },
    { title: "at enterprise scale", color: "", className: "" },
  ],
  subtitle:
    "Structured assistance, documentation, and controls so your organization can serve customers, satisfy oversight, and keep delivery moving.",
  videoClass: "left-[500px] !w-3/4",
};

export default async function SupportCompliancePage() {
  const settings = await getGlobalSettings();

  return (
    <div className="flex h-svh flex-col text-base">
      <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
        <Navigation />

        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark flex-1 bg-[#151916] text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection
            useVideo={supportComplianceHero.useVideo}
            lighterTheme={false}
            videoSrc={supportComplianceHero.videoSrc}
            titles={supportComplianceHero.titles}
            subtitle={supportComplianceHero.subtitle}
            videoClass={supportComplianceHero.videoClass}
            videoSectionClass="after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-[1] after:h-[min(32vh,14rem)] after:bg-[#151916]"
          />
          <SupportComplianceView footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
