import Image from "next/image";
import Link from "next/link";
import HeroVideoBackground from "./HeroVideoBackground";

function groupHeroTitleLines(titles = []) {
  const sorted = [...titles].sort(
    (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
  );

  if (!sorted.length) {
    return [];
  }

  if (sorted.length === 1) {
    return [[sorted[0]]];
  }

  const hasExplicitLine = sorted.some(
    (item) => item?.line != null && `${item.line}`.trim() !== "",
  );

  if (hasExplicitLine) {
    const lineNumbers = [
      ...new Set(
        sorted
          .map((item) => Number(item.line))
          .filter((line) => !Number.isNaN(line)),
      ),
    ].sort((left, right) => left - right);

    return lineNumbers
      .map((lineNumber) =>
        sorted.filter((item) => Number(item.line) === lineNumber),
      )
      .filter((line) => line.length > 0);
  }

  // Always two lines: first phrase on line 1, everything else on line 2.
  return [[sorted[0]], sorted.slice(1)];
}

const DEFAULT_CTA_BUTTON_CLASS =
  "group/interactive mt-6 inline-flex items-center justify-between gap-md bevel bevel-[0.25rem] bg-[#E3502E] px-md py-sm text-sm font-medium text-gray-night-green transition-opacity hover:opacity-90";
const DEFAULT_CTA_FOCUS_CLASS =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E3502E]";

function HeroCtaButton({ label, href, buttonClassName, focusClassName, srText }) {
  const isAccentCta = buttonClassName?.includes("bg-[#958dec]");
  const textToneClass = isAccentCta
    ? "!text-black hover:!text-black"
    : "";

  return (
    <Link
      href={href}
      style={{ position: "relative", color: isAccentCta ? "#000" : undefined }}
      className={`${buttonClassName || DEFAULT_CTA_BUTTON_CLASS} ${focusClassName || DEFAULT_CTA_FOCUS_CLASS} ${textToneClass}`}
    >
      {srText ? <span className="sr-only">{srText}</span> : null}
      <span className={isAccentCta ? "text-black" : undefined}>{label}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        className={`ml-[--arrow-offset] h-4 w-4 shrink-0 text-current transition-all group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] ${isAccentCta ? "!text-black" : ""}`}
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

const DEFAULT_SIDE_LOGO_CLASS =
  "h-auto w-full max-w-[9.5rem] sm:max-w-[10.5rem] md:max-w-[12rem] lg:max-w-[14rem]";

function HeroSideLogoImage({ sideLogo }) {
  const size = sideLogo.size;

  return (
    <Image
      alt={sideLogo.alt ?? "Sidago"}
      src={sideLogo.src}
      width={sideLogo.width ?? 560}
      height={sideLogo.height ?? 446}
      unoptimized
      priority
      style={
        size
          ? { width: size, height: "auto", maxWidth: size }
          : undefined
      }
      className={
        size
          ? "h-auto object-contain"
          : sideLogo.className ?? DEFAULT_SIDE_LOGO_CLASS
      }
    />
  );
}

export default function HeroBannerSection({
  videoSrc,
  imageSrc,
  titles,
  subtitle,
  ctaLabel,
  ctaHref,
  ctaSrText,
  ctaButtonClass,
  ctaFocusClassName,
  useVideo = false,
  videoPoster = "",
  videoSectionClass,
  videoClass,
  fontWeight,
  lighterTheme = false,
  loop = false,
  lighterBgColor = "bg-[#f0f1f1]",
  backgroundClassName,
  videoOverlay,
  syncBackgroundColor = false,
  sideLogo,
}) {
  const backgroundClass =
    backgroundClassName ??
    (lighterTheme ? lighterBgColor : "bg-[#020405]");

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
    //         Sidago makes digital asset markets liquid and efficient
    //       </p>
    //     </div>
    //   </div>
    // </section>

    <section
      className={`relative flex min-h-svh flex-col justify-end lg:flex-row lg:items-center ${videoSectionClass} lg:min-h-[calc(100svh-var(--header-height)-6.125rem)]`}
    >
      <div
        className={`absolute inset-0 ${syncBackgroundColor ? "" : backgroundClass}`}
        {...(syncBackgroundColor ? { "data-hero-bg-sync": "" } : {})}
      >
        {/* Keep your exact structure */}
        {useVideo && (
          <HeroVideoBackground
            videoSrc={videoSrc}
            videoPoster={videoPoster}
            videoClass={videoClass}
            lighterTheme={lighterTheme}
            loop={loop}
            showOverlay={videoOverlay}
            syncBackgroundColor={syncBackgroundColor}
          />
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

      <div className="container relative z-10 py-block">
        <div className="relative lg:grid lg:grid-cols-4 lg:items-center">
          {sideLogo?.src && sideLogo.position !== "left" ? (
            <div
              className="pointer-events-none absolute inset-y-0 flex w-[40%] items-center justify-end md:w-[32%] lg:w-[22%]"
              style={{ right: sideLogo.offsetRight ?? 0 }}
            >
              <HeroSideLogoImage sideLogo={sideLogo} />
            </div>
          ) : null}
          <div className="col-span-2 flex flex-col items-start gap-2xl lg:pr-2xl">
          {sideLogo?.src && sideLogo.position === "left" ? (
            <HeroSideLogoImage sideLogo={sideLogo} />
          ) : null}
          <h1
            className="max-w-2xl text-2xl leading-[1.15] tracking-[-0.02em] lg:text-3xl"
            style={{ fontWeight }}
          >
            {groupHeroTitleLines(titles).map((lineItems, lineIndex) => (
              <span
                key={lineIndex}
                className="block lg:whitespace-nowrap"
              >
                {lineItems.map((item, index) => (
                  <span
                    key={`${lineIndex}-${index}`}
                    className={item.className}
                    style={item.color ? { color: item.color } : undefined}
                  >
                    {index > 0 ? " " : null}
                    {item.title}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <div
            className={`text-base ${lighterTheme ? "text-black" : ""} lg:text-lg`}
          >
            {subtitle}
          </div>

          {ctaLabel && ctaHref ? (
            <HeroCtaButton
              label={ctaLabel}
              href={ctaHref}
              srText={ctaSrText}
              buttonClassName={ctaButtonClass}
              focusClassName={ctaFocusClassName}
            />
          ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
