import PageFooter from "@/src/components/sections/v2/common/PageFooter";
import CMSPageShell from "@/src/components/sections/v2/common/CMSPageShell";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import BrandColorIntroSection from "@/src/components/sections/v2/brand/BrandColorIntroSection";
import BrandColorSystemSection from "@/src/components/sections/v2/brand/BrandColorSystemSection";
import BrandHarnessingSection from "@/src/components/sections/v2/brand/BrandHarnessingSection";
import BrandIntroSection from "@/src/components/sections/v2/brand/BrandIntroSection";
import BrandLogoSection from "@/src/components/sections/v2/brand/BrandLogoSection";
import BrandMediaResourcesSection from "@/src/components/sections/v2/brand/BrandMediaResourcesSection";
import BrandSubBrandsSection from "@/src/components/sections/v2/brand/BrandSubBrandsSection";
import { getBrandPage, getGlobalSettings } from "@/src/lib/api";
import { buildPageMetadata } from "@/src/lib/seo";

export const metadata = buildPageMetadata({
  title: "Brand",
  description:
    "Sidago Brand is a great way to stay up to date with the latest news and updates from Sidago.",
  path: "/brand",
  keywords: [
    "Sidago brand",
    "brand",
    "branding",
    "branding guidelines",
    "branding resources",
  ],
});


export default async function BrandPage() {
  const [settings, brand] = await Promise.all([
    getGlobalSettings(),
    getBrandPage(),
  ]);

  if (!brand?.pageContent) {
    return <CMSPageShell className="flex min-h-svh flex-col bg-[#151B17] text-base" />;
  }

  const content = brand.pageContent;

  return (
    <div className="flex min-h-svh flex-col bg-[#151B17] text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark flex-1 bg-[#151B17] text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <BrandIntroSection content={content.intro} />
          <BrandHarnessingSection content={content.harnessing} />
          <BrandLogoSection content={content.logo} />
          <BrandColorIntroSection content={content.colorIntro} />
          <BrandColorSystemSection />
          <BrandMediaResourcesSection content={content.media} />
          <BrandSubBrandsSection content={content.subBrands} />
          <PageFooter footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
