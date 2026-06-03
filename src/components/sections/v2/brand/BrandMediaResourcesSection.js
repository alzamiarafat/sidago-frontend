import BrandDownloadLink from "@/src/components/sections/v2/brand/BrandDownloadLink";

const HEADSHOTS = [
  {
    src: "/images/brand-headshot-evgeny.png",
    alt: "Evgeny — headshot backdrop",
  },
  {
    src: "/images/brand-headshot-marina.png",
    alt: "Marina — headshot backdrop",
  },
  {
    src: "/images/brand-headshot-yoann.png",
    alt: "Yoann — headshot backdrop",
  },
];

const BACKDROPS = [
  {
    src: "/images/brand-backdrop-1.png",
    alt: "Media backdrop — network pattern",
  },
  {
    src: "/images/brand-backdrop-2.png",
    alt: "Media backdrop — 2024",
  },
  {
    src: "/images/brand-backdrop-3.png",
    alt: "Media backdrop — 1H25",
  },
  {
    src: "/images/brand-backdrop-4.png",
    alt: "Media backdrop — 2025",
  },
];

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

export default function BrandMediaResourcesSection() {
  return (
    <section className="bg-gray-defi-shadow">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id="media-resources"
              className="font-blender text-xl uppercase text-green-dark"
            >
              Media resources
            </h2>
            <div className="text-gray-off-white">
              Download headshots and use these backdrops when you need
              something that looks like Sidago
            </div>
          </div>
          <hr className="!border-[#AB290D]" />
        </div>
        <MediaImageGrid items={HEADSHOTS} />
        <div className="pt-container pb-container flex">
          <BrandDownloadLink
            href="https://docsend.com/view/iibf68mib7htjh5q"
            srLabel="View › Iibf68mib7htjh5q"
          >
            Download all
          </BrandDownloadLink>
        </div>
        <MediaImageGrid items={BACKDROPS} />
        <div className="pt-container flex">
          <BrandDownloadLink
            href="https://docsend.com/view/qvfbtisjy5uzkpzd"
            srLabel="View › Qvfbtisjy5uzkpzd"
          >
            Download all
          </BrandDownloadLink>
        </div>
      </div>
    </section>
  );
}
