import BrandDownloadLink from "@/src/components/sections/v2/brand/BrandDownloadLink";

export default function BrandHarnessingSection() {
  return (
    <section className="bg-gray-defi-graphite">
      <div className="container py-block">
        <div className="relative">
          <div className="flex flex-col gap-6 lg:gap-8">
            <h2
              className="z-10 inline-block max-w-[60%] text-2xl lg:text-3xl"
              id="harnessing-chaos"
            >
              <span className="text-green-dark">Harnessing</span> chaos
            </h2>
            <div className="z-10 max-w-[85%] md:max-w-[70%]">
              Sidago’s design system is inspired by technical systems
              and data flows. It shifts between chaos and harnessed states,
              embracing the complexity of the crypto landscape and visually
              harnessing it for our audiences. It creates moments of calm
              and sophistication, while also allowing for expression and
              drama.
            </div>
          </div>
        </div>
        <div className="pt-container">
          <div className="flex flex-wrap gap-md lg:gap-2xl">
            <div className="bevel h-[6.75rem] bevel-1 lg:h-[11.25rem]">
              <img
                alt="Chaos — particle cluster"
                loading="lazy"
                width="1152"
                height="1152"
                decoding="async"
                className="h-full w-full object-cover"
                style={{ color: "transparent" }}
                src="/images/Frame-1739328787.webp"
              />
            </div>
            <div className="bevel h-[6.75rem] bevel-1 lg:h-[11.25rem]">
              <img
                alt="Harnessed — structured particle flow"
                loading="lazy"
                width="1152"
                height="1152"
                decoding="async"
                className="h-full w-full object-cover"
                style={{ color: "transparent" }}
                src="/images/Frame-1739328788.webp"
              />
            </div>
            <div className="bevel h-[6.75rem] bevel-1 lg:h-[11.25rem]">
              <img
                alt="Drama — layered dot frames"
                loading="lazy"
                width="1152"
                height="1152"
                decoding="async"
                className="h-full w-full object-cover"
                style={{ color: "transparent" }}
                src="/images/Frame-1739328789-2.webp"
              />
            </div>
          </div>
        </div>
        <div className="pt-container flex">
          <BrandDownloadLink
            href="https://docsend.com/view/hngjtz6f7rue4xxj"
            srLabel="View › Hngjtz6f7rue4xxj"
          >
            Download brand kit
          </BrandDownloadLink>
        </div>
      </div>
    </section>
  );
}
