
import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import DelegateProfile from "@/src/components/sections/v2/servicepage/DelegateProfile";
import OurVision from "@/src/components/sections/v2/servicepage/OurVision";
import Support from "@/src/components/sections/v2/servicepage/Support";
import "@/src/components/sections/v2/infrastructure/infrastructure-hero-mobile.css";
import { getInfrastructurePage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";
import { notFound } from "next/navigation";

export const metadata = routeMetadata.forwards;

export default async function InfrastructurePage() {
  const infrastructurePage = await getInfrastructurePage();

  if (!infrastructurePage?.hero) {
    notFound();
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

  return (
    <div className="flex min-h-svh flex-col bg-gray-night-green text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark flex-1 bg-gray-night-green text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection {...hero} />

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

          <CTASection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
