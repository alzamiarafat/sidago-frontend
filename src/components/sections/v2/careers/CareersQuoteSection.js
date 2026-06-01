import { CAREERS_QUOTE_DECOR_PATH } from "@/src/components/sections/v2/careers/quoteSectionDecor";

const DEFAULT_DECOR_CLASS =
  "text-gray-defi-charcoal absolute -right-[6rem] -top-[2rem] w-[18rem] rotate-[20deg] lg:-right-[4rem] lg:-top-[4rem] lg:w-[35rem]";

/**
 * Quote block with decorative pattern (careers / culture pages).
 */
export default function CareersQuoteSection({
  quote,
  attribution,
  className = "overflow-hidden bg-gray-defi-graphite text-gray-off-white",
  decorClassName = DEFAULT_DECOR_CLASS,
  quoteClassName = "lg:text-2xl",
  attributionClassName = "font-blender text-sm uppercase lg:text-xl",
}) {
  if (!quote) {
    return null;
  }

  return (
    <section className={className}>
      <div className="relative container py-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 200 200"
          className={decorClassName}
          aria-hidden
        >
          <path fill="currentColor" d={CAREERS_QUOTE_DECOR_PATH} />
        </svg>
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
