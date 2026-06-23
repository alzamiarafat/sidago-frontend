import BrandDownloadLink from "@/src/components/sections/v2/brand/BrandDownloadLink";

export default function BrandHarnessingSection({ content }) {
  if (!content) return null;
  return (
    <section className="bg-gray-defi-graphite">
      <div className="container py-block">
        <div className="relative">
          <div className="flex flex-col gap-6 lg:gap-8">
            <h2
              className="z-10 inline-block max-w-[60%] text-2xl lg:text-3xl"
              id="harnessing-chaos"
            >
              <span className="text-green-dark">{content.titleHighlight}</span>{" "}
              {content.titleAfter}
            </h2>
            <div className="z-10 max-w-[85%] md:max-w-[70%]">
              {content.body}
            </div>
          </div>
        </div>
        <div className="pt-container">
          <div className="flex flex-wrap gap-md lg:gap-2xl">
            {content.images.map((image) => (
              <div key={image.src} className="bevel h-[6.75rem] bevel-1 lg:h-[11.25rem]">
                <img
                  alt={image.alt}
                  loading="lazy"
                  width="1152"
                  height="1152"
                  decoding="async"
                  className="h-full w-full object-cover"
                  style={{ color: "transparent" }}
                  src={image.src}
                />
              </div>
            ))}
          </div>
        </div>
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
