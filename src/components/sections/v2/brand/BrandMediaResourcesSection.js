import BrandDownloadLink from "@/src/components/sections/v2/brand/BrandDownloadLink";
import { defaultBrandPage } from "@/src/data/cms/brand-page.mjs";

function MediaImageGrid({ items }) {
  return (
    <div className="flex flex-wrap gap-md lg:gap-2xl">
      {items.map(({ src, alt }) => (
        <div key={src} className="bevel h-[6.75rem] bevel-1 lg:h-[11.25rem]">
          <img
            alt={alt}
            loading="lazy"
            width={1152}
            height={648}
            decoding="async"
            className="h-full w-full object-cover"
            style={{ color: "transparent" }}
            src={src}
          />
        </div>
      ))}
    </div>
  );
}

export default function BrandMediaResourcesSection({
  content = defaultBrandPage.pageContent.media,
}) {
  return (
    <section className="bg-gray-defi-shadow">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id="media-resources"
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
        <MediaImageGrid items={content.headshots} />
        <div className="pt-container pb-container flex">
          <BrandDownloadLink
            href={content.headshotsDownload.href}
            srLabel={content.headshotsDownload.srLabel}
          >
            {content.headshotsDownload.label}
          </BrandDownloadLink>
        </div>
        <MediaImageGrid items={content.backdrops} />
        <div className="pt-container flex">
          <BrandDownloadLink
            href={content.backdropsDownload.href}
            srLabel={content.backdropsDownload.srLabel}
          >
            {content.backdropsDownload.label}
          </BrandDownloadLink>
        </div>
      </div>
    </section>
  );
}
