/**
 * Quote block (careers / culture pages).
 */
export default function CareersQuoteSection({
  quote,
  attribution,
  className = "overflow-hidden bg-gray-defi-graphite text-gray-off-white",
  quoteClassName = "lg:text-2xl",
  attributionClassName = "font-blender text-sm uppercase lg:text-xl",
}) {
  if (!quote) {
    return null;
  }

  return (
    <section className={className}>
      <div className="relative container py-block">
        <div className="flex flex-col pl-8 lg:pl-0">
          <div className="relative flex w-full">
            <div className="relative flex flex-1 flex-col gap-6 opacity-100 lg:gap-12">
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
