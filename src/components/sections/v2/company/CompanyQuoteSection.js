export default function CompanyQuoteSection({ quoteSection }) {
  if (!quoteSection?.quote || !quoteSection?.attribution) {
    return null;
  }

  return (
    <section className="overflow-hidden bg-gray-defi-slate text-gray-off-white">
      <div className="container py-block">
        <div className="flex flex-col pl-8 lg:pl-0">
          <div className="relative flex w-full">
            <div className="relative flex flex-1 flex-col gap-6 opacity-100 lg:gap-12">
              <span
                className="absolute -left-8 top-0 text-3xl lg:-left-10 lg:text-4xl"
                aria-hidden
              >
                “
              </span>
              <p className="lg:text-2xl">{quoteSection.quote}”</p>
              <p className="font-blender text-sm uppercase lg:text-xl">
                {quoteSection.attribution}
              </p>
            </div>
          </div>
          <div className="relative" />
        </div>
      </div>
    </section>
  );
}
