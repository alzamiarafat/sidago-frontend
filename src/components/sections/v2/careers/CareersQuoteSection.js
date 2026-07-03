import CareersSectionDotLogo from "@/src/components/sections/v2/careers/CareersSectionDotLogo";

const DEFAULT_QUOTE_DECOR = {
  src: "/images/sidago-gray-logo.svg",
  alt: "",
  width: 156,
  height: 224,
};

/**
 * Quote block (careers / culture pages).
 */
export default function CareersQuoteSection({
  quote,
  attribution,
  decor = DEFAULT_QUOTE_DECOR,
  className = "overflow-hidden bg-gray-defi-graphite text-gray-off-white",
  quoteClassName = "lg:text-2xl",
  attributionClassName = "font-blender text-sm uppercase lg:text-xl",
}) {
  const decorSrc = decor?.src ?? DEFAULT_QUOTE_DECOR.src;

  if (!quote) {
    return null;
  }

  return (
    <section className={className}>
      <div className="container py-block">
        <div className="flex flex-col pl-8 lg:pl-0">
          <div className="relative w-full">
            <CareersSectionDotLogo src={decorSrc} overlay />

            <div className="relative z-10 flex flex-col gap-6 lg:gap-12">
              <span
                className="absolute -left-8 top-0 text-3xl lg:-left-10 lg:text-4xl"
                aria-hidden
              >
                “
              </span>
              <p className={quoteClassName}>{quote}</p>
              {attribution ? (
                <p className={attributionClassName}>{attribution}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
