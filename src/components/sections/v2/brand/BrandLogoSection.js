import BrandDownloadLink from "@/src/components/sections/v2/brand/BrandDownloadLink";
import BrandLogoCarousel from "@/src/components/sections/v2/brand/BrandLogoCarousel";
import { defaultBrandPage } from "@/src/data/cms/brand-page.mjs";

export default function BrandLogoSection({
  content = defaultBrandPage.pageContent.logo,
}) {
  return (
    <section className="bg-gray-defi-shadow">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id="logo"
              className="font-blender text-xl uppercase text-green-dark"
            >
              {content.eyebrow}
            </h2>
            <div className="text-gray-off-white">
              {content.description}
            </div>
          </div>
          <hr className="!border-[#AB290D]" />
        </div>
        <BrandLogoCarousel slides={content.slides} />
        <div className="pt-container flex">
          <BrandDownloadLink
            href={content.download.href}
            srLabel={content.download.srLabel}
          >
            {content.download.label}
          </BrandDownloadLink>
        </div>
      </div>
    </section>
  );
}
