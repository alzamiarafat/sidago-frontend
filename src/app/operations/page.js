import PageFooter from "@/src/components/sections/v2/common/PageFooter";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import OperationsPageContent from "@/src/components/sections/v2/operationspage/OperationsPageContent";
import CMSPageUnavailable from "@/src/components/sections/v2/common/CMSPageUnavailable";
import "@/src/components/sections/v2/operationspage/operations-page.css";
import "@/src/components/sections/v2/operationspage/operations-hero-mobile.css";
import { getGlobalSettings, getOperationsPage } from "@/src/lib/api";
import { buildPageMetadata } from "@/src/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = buildPageMetadata({
  title: "Our Operations",
  description:
    "Explore Sidago's operations model, workflow, delivery metrics, and technology systems for efficient, reliable business execution.",
  path: "/operations",
  keywords: [
    "Sidago operations",
    "operational excellence",
    "workflow management",
    "logistics and distribution",
    "business operations",
  ],
});

export default async function OperationsPage() {
  const operationsPage = await getOperationsPage();
  const settings = await getGlobalSettings();

  if (!operationsPage?.hero) {
    return (
      <div className="flex min-h-svh flex-col bg-gray-night-green text-base">
        <Navigation />
        <CMSPageUnavailable className="min-h-[calc(100svh-var(--header-height))]" />
      </div>
    );
  }

  const heroTitles = operationsPage.hero?.titles?.map((title, index) =>
    index === 0 ? { ...title, className: "", color: "#168b50" } : title,
  );
  const hero = {
    ...operationsPage.hero,
    videoSrc:
      "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/19200719/Accordion-OTC.mp4#t=2",
    titles: heroTitles,
    videoClass: "operations-hero-video lg:left-[500px] lg:!w-3/4",
    lighterTheme: false,
    videoOverlay: true,
    fontWeight: 400,
    videoSectionClass: "operations-hero-section bg-gray-night-green text-gray-off-white",
    backgroundClassName: "bg-gray-night-green",
    lighterBgColor: "bg-gray-night-green",
  };

  return (
    <div className="flex min-h-svh flex-col bg-gray-night-green text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main
          className="relative isolate flex-1 overflow-x-hidden bg-gray-night-green text-gray-off-white [&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark"
          style={{ colorScheme: "dark" }}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-5%,rgba(22,139,80,0.1),transparent_56%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_18%,transparent_82%,rgba(255,255,255,0.02))]"
            aria-hidden
          />
          <div className="relative z-[1]">
            <HeroBannerSection {...hero} />
            <OperationsPageContent videoInMotion={operationsPage.videoInMotion} />
            <PageFooter footer={settings?.footer} />
          </div>
        </main>
      </div>
    </div>
  );
}
