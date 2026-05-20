import Image from "next/image";
import Link from "next/link";

function HeroCtaButton({ label, href }) {
  return (
    <Link
      href={href}
      style={{ position: "relative" }}
      className="group/interactive mt-6 inline-flex items-center justify-between gap-md bevel bevel-[0.25rem] bg-[#E3502E] px-md py-sm text-sm font-medium text-gray-night-green transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E3502E]"
    >
      {label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        className="ml-[--arrow-offset] h-4 w-4 shrink-0 transition-all group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset]"
        style={{ "--arrow-offset": "0.4rem" }}
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
}

export default function HeroBannerSection({
  videoSrc,
  imageSrc,
  titles,
  subtitle,
  ctaLabel,
  ctaHref,
  useVideo = false,
  videoPoster = "",
  videoSectionClass,
  videoClass,
  fontWeight,
  lighterTheme = false,
  loop = false,
  lighterBgColor = "bg-[#f0f1f1]",
}) {
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
    //         SIDAGO makes digital asset markets liquid and efficient
    //       </p>
    //     </div>
    //   </div>
    // </section>

    <section
      className={`relative flex min-h-svh flex-col justify-end lg:flex-row lg:items-center ${videoSectionClass} lg:min-h-[calc(100svh-var(--header-height)-6.125rem)]`}
    >
      <div
        className={`absolute inset-0 ${lighterTheme ? lighterBgColor : "bg-[#020405]"}`}
      >
        {/* Keep your exact structure */}
        {useVideo && (
          <div
            className={`video-wrapper ${videoClass} ${lighterTheme ? "video-light-overlay" : "video-dark-overlay"}`}
          >
            <video
              className="h-full w-full lg:object-cover object-cover text-green-dark"
              autoPlay
              muted
              loop={false}
              playsInline
              preload="auto"
              {...(videoPoster?.trim() ? { poster: videoPoster.trim() } : {})}
              src={videoSrc}
            />
          </div>
        )}

        {!useVideo && imageSrc && (
          <div className="absolute top-0 right-0 w-3/4 h-full overflow-hidden">
            <Image
              src={imageSrc}
              alt="Report Focus"
              fill
              sizes="75vw"
              priority
              className="object-scale-down object-right opacity-60 grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
        )}

        {!useVideo && (
          <div className="h-full w-full lg:object-cover object-cover text-green-dark"></div>
        )}

        <div
          className={`absolute inset-0 ${lighterTheme
              ? "bg-gradient-to-r from-white/0 to-white/0 opacity-0"
              : "bg-gradient-to-r from-black to-transparent opacity-10"
            }`}
        ></div>

        {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-night-green to-transparent opacity-30 lg:bg-gradient-to-r lg:from-gray-night-green lg:to-transparent"></div> */}

        {/* <div className="h-full w-full lg:object-cover object-cover text-green-dark"></div> */}
      </div>

      {/* <div className="absolute inset-0 bg-opacity-90 bg-gradient-to-t to-transparent to-50% lg:bg-gradient-to-r lg:to-100% from-gray-night-green"></div> */}

      <div className="z-10 grid-cols-4 items-center lg:grid container py-block">
        <div className="col-span-2 flex flex-col items-start gap-2xl lg:pr-2xl">
          <h1 className="text-2xl lg:text-3xl" style={{ fontWeight }}>
            {titles.map((item, index) => (
              <span
                key={index}
                className={item.className}
                style={item.color ? { color: item.color } : undefined}
              >
                {" "}
                {item.title}{" "}
              </span>
            ))}
          </h1>

          <div
            className={`text-base ${lighterTheme ? "text-black" : ""} lg:text-lg`}
          >
            {subtitle}
          </div>

          {ctaLabel && ctaHref ? (
            <HeroCtaButton label={ctaLabel} href={ctaHref} />
          ) : null}
        </div>
      </div>
    </section>
  );
}
