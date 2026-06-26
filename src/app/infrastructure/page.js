
import CMSPageShell from "@/src/components/sections/v2/common/CMSPageShell";
import PageFooter from "@/src/components/sections/v2/common/PageFooter";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import Statistics from "@/src/components/sections/v2/homepage/Statistics";
import DelegateProfile from "@/src/components/sections/v2/servicepage/DelegateProfile";
import OurVision from "@/src/components/sections/v2/servicepage/OurVision";
import Support from "@/src/components/sections/v2/servicepage/Support";
import "@/src/components/sections/v2/infrastructure/infrastructure-hero-mobile.css";
import { getGlobalSettings, getInfrastructurePage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.forwards;

const INFRASTRUCTURE_STATISTICS = [
  {
    stat: "2B",
    label: "Daily DeFi Trading Volume",
    width: 244,
    activeDotColor: "#E7512F",
    sortOrder: 1,
  },
  {
    stat: "45",
    label: "DeFi Venues Integrated",
    width: 248,
    activeDotColor: "#E7512F",
    sortOrder: 2,
  },
  {
    stat: "10",
    label: "Chains Covered",
    width: 198,
    activeDotColor: "#E7512F",
    sortOrder: 3,
  },
  {
    stat: "2K",
    label: "Governance Votes",
    width: 192,
    activeDotColor: "#E7512F",
    sortOrder: 4,
  },
  {
    stat: "5",
    label: "Incubated Projects",
    width: 192,
    activeDotColor: "#E7512F",
    sortOrder: 5,
  },
];

export default async function InfrastructurePage() {
  const [infrastructurePage, settings] = await Promise.all([
    getInfrastructurePage(),
    getGlobalSettings(),
  ]);

  if (!infrastructurePage?.hero) {
    return <CMSPageShell className="flex min-h-svh flex-col bg-gray-night-green text-base" />;
  }

  const hero = {
    ...infrastructurePage.hero,
    videoClass: "infrastructure-hero-video lg:left-[500px] lg:!w-3/4",
    videoSectionClass: [
      "infrastructure-hero-section",
      infrastructurePage.hero?.videoSectionClass,
    ]
      .filter(Boolean)
      .join(" "),
  };

  const statistics =
    infrastructurePage.statistics?.length > 0
      ? infrastructurePage.statistics
      : INFRASTRUCTURE_STATISTICS;

  return (
    <div className="flex min-h-svh flex-col bg-gray-night-green text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark flex-1 bg-gray-night-green text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection {...hero} />

          {statistics.length ? (
            <Statistics stats={statistics} align="center" />
          ) : null}

          <OurVision
            title={infrastructurePage.visionTitle}
            description={infrastructurePage.visionDescription}
            items={infrastructurePage.vision}
          />
          <Support
            title={infrastructurePage.supportTitle}
            highlight={infrastructurePage.supportHighlight}
            description={infrastructurePage.supportDescription}
            imageSrc={infrastructurePage.supportImageSrc}
            items={infrastructurePage.support}
          />
          <DelegateProfile
            title={infrastructurePage.profilesTitle}
            description={infrastructurePage.profilesDescription}
            profiles={infrastructurePage.profiles}
          />
          <PageFooter footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
