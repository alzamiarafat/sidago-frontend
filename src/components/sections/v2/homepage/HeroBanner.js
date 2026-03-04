export default function HeroBannerSection() {
  return (
    // <section className="relative flex flex-col justify-center items-center min-h-[70svh] lg:flex-row lg:items-center lg:justify-center text-gray-off-white lg:min-h-[calc(100svh - var(--header-height) - 6.125rem)]">
    //   {/* Content */}
    //   <div className="relative z-10 grid lg:grid-cols-4 items-center justify-center mx-auto py-12 text-center lg:text-left">
    //     <div className="col-span-2 flex flex-col items-center gap-8 lg:items-start lg:pr-16">
    //       <h1 className="text-3xl lg:text-5xl font-bold text-white">
    //         <span className="text-[#E7512F]">WE UNDERSTAND</span> THE ONLINE
    //         WORLD
    //       </h1>
    //       <p className="text-base lg:text-lg text-white">
    //         Wintermute makes digital asset markets liquid and efficient
    //       </p>
    //     </div>
    //   </div>
    // </section>

    <section className="relative flex min-h-svh flex-col justify-end lg:flex-row lg:items-center bg-gray-night-green text-gray-off-white lg:min-h-[calc(100svh-var(--header-height)-6.125rem)]">
      <div className="absolute inset-0">
        <div class="video-wrapper">
          <video
            className="h-full w-full lg:object-cover object-cover text-green-dark"
            autoPlay
            muted
            loop
            playsInline
            src="/videos/home2.mp4"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>

        {/* Optional additional gradient for style */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-night-green to-transparent opacity-30 lg:bg-gradient-to-r lg:from-gray-night-green lg:to-transparent"></div>
        <div className="h-full w-full lg:object-cover object-cover text-green-dark"></div>
      </div>
      <div className="absolute inset-0 bg-opacity-70 bg-gradient-to-t to-transparent to-50% lg:bg-gradient-to-r lg:to-100% from-gray-night-green"></div>
      <div className="z-10 grid-cols-4 items-center lg:grid container py-block">
        <div className="col-span-2 flex flex-col items-start gap-2xl lg:pr-2xl">
          <h1 className="text-2xl lg:text-3xl" style={{ fontWeight: 500 }}>
            <span className="text-green-dark">WE UNDERSTAND </span>
            THE ONLINE WORLD
          </h1>
          <div className="text-base lg:text-lg">
            Sidago makes digital asset markets liquid and efficient
          </div>
        </div>
      </div>
    </section>
  );
}
