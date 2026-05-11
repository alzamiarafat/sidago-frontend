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
    "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/19200844/Accordion-Governance-DeFi.mp4#t=1",
  titles: [
    { title: "Operating with", color: "", className: "" },
    { title: "support & compliance", color: "#168b50", className: "" },
    { title: "at enterprise scale", color: "", className: "" },
  ],
  subtitle:
    "Structured assistance, documentation, and controls so your organization can serve customers, satisfy oversight, and keep delivery moving.",
  videoClass: "left-[500px] top-[50px] !w-3/4",
};

export default async function SupportCompliancePage() {
  const settings = await getGlobalSettings();

  return (
    <div className="flex h-svh flex-col text-base">
      <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
        <Navigation />

        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark bg-gray-night-green text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection {...supportComplianceHero} />
          <SupportComplianceView footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
