export default function VideoOverview() {
  return (
    <section className="bg-gray-tradfi-horizon">
      <div className="container py-block">
        <div className="relative">
          <div className="flex flex-col gap-6 lg:gap-8">
            <h2
              className="z-10 inline-block max-w-[60%] text-2xl lg:text-3xl text-black"
              id="trade-otc"
            >
              Trade OTC
            </h2>
            <div className="z-10 max-w-[85%] md:max-w-[70%] text-black">
              Access deep digital asset liquidity reliably, in any market
              condition.
            </div>
          </div>
          <img
            alt="Trade OTC"
            loading="lazy"
            width="1152"
            height="1152"
            decoding="async"
            data-nimg="1"
            className="absolute -top-block right-0 w-[50%] md:w-[40%] lg:w-[28%]"
            style={{ color: "transparent" }}
            src="images/WatermarkTailoredProd.svg"
          />
        </div>
        <div className="pt-container">
          <video
            playsInline
            autoPlay={false}
            preload="metadata"
            className="bevel w-full"
            controls
          >
            <source src="videos/overview.mp4" />
          </video>
        </div>
        <div className="pt-container flex">
          <a
            style={{ position: "relative" }}
            className="group/interactive gap-md inline-flex items-center justify-between font-medium disabled:opacity-50 bevel bevel-[0.25rem] px-sm py-xs bg-green-tradfi text-gray-night-green"
            href="/contact"
          >
            <span className="sr-only">Contact</span>Get in touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 40 40"
              className="ml-[--arrow-offset] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset]"
              style={{
                "--arrow-offset": "0.4rem",
                width: "1rem",
              }}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
