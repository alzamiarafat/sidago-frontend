export default function HeroBannerSection() {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-[70svh] lg:flex-row lg:items-center lg:justify-center text-gray-off-white lg:min-h-[calc(100svh - var(--header-height) - 6.125rem)]">
      {/* Content */}
      <div className="relative z-10 grid lg:grid-cols-4 items-center justify-center mx-auto py-12 text-center lg:text-left">
        <div className="col-span-2 flex flex-col items-center gap-8 lg:items-start lg:pr-16">
          <h1 className="text-3xl lg:text-5xl font-bold text-white">
            <span className="text-[#E7512F]">WE UNDERSTAND</span> THE ONLINE
            WORLD
          </h1>
          <p className="text-base lg:text-lg text-white">
            Wintermute makes digital asset markets liquid and efficient
          </p>
        </div>
      </div>
    </section>
  );
}
