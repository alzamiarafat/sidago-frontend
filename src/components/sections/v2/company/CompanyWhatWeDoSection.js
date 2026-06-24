import Link from "next/link";
import {
  ALGORITHMIC_TRADING_PATH,
  OTC_PATH_PRIMARY,
  OTC_PATH_SECONDARY,
} from "@/src/components/sections/v2/company/companyBusinessLinePaths";

const ARROW_PATH =
  "M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z";

function ArrowIcon({ size = "mobile" }) {
  const isMobile = size === "mobile";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className={`ml-[--arrow-offset] shrink-0 transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] ${
        isMobile ? "lg:hidden" : "hidden lg:block"
      }`}
      style={{
        "--arrow-offset": isMobile ? "0.9rem" : "1.1rem",
        width: isMobile ? "2.25rem" : "2.75rem",
      }}
      aria-hidden
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d={ARROW_PATH}
        clipRule="evenodd"
      />
    </svg>
  );
}

function CardDecoration({ type }) {
  if (type === "algorithmic") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 200 200"
        className="absolute origin-top-left text-pink-mid w-[22.625rem] -right-[1.875rem] -top-[10.5rem]"
        aria-hidden
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d={ALGORITHMIC_TRADING_PATH}
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === "otc") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 200 200"
        className="absolute origin-top-left text-green-dark w-[15.625rem] right-[2.625rem] -rotate-[19.65deg]"
        aria-hidden
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d={OTC_PATH_PRIMARY}
          clipRule="evenodd"
        />
        <path fill="currentColor" d={OTC_PATH_SECONDARY} />
      </svg>
    );
  }

  return null;
}

function BusinessLineCard({
  srOnly,
  href,
  colSpan,
  cardClassName,
  title,
  description,
  decoration,
}) {
  return (
    <Link
      href={href}
      style={{ position: "relative" }}
      className={`group/interactive pointer-events-auto h-[14.5rem] transition-all lg:h-[18.75rem] lg:group-hover/cards:[&:not(:hover)]:opacity-70 ${colSpan}`}
    >
      <span className="sr-only">{srOnly}</span>
      <div
        className={`relative flex h-full flex-col justify-between overflow-hidden p-lg bevel ${cardClassName}`}
      >
        <CardDecoration type={decoration} />
        <div />
        <div className="z-10 flex items-end justify-between gap-md">
          <div className="flex flex-col gap-md">
            <div className="text-xl">{title}</div>
            <div className="mr-4xl text-sm lg:text-base">{description}</div>
          </div>
          <ArrowIcon size="mobile" />
          <ArrowIcon size="desktop" />
        </div>
      </div>
    </Link>
  );
}

export default function CompanyWhatWeDoSection({ whatWeDo }) {
  if (
    !whatWeDo?.headingBefore ||
    !whatWeDo?.headingHighlight ||
    !whatWeDo?.intro ||
    !whatWeDo?.businessLines?.length
  ) {
    return null;
  }

  return (
    <section>
      <div className="container py-block">
        <div className="pb-container">
          <div className="relative">
            <div className="flex flex-col gap-6 lg:gap-8">
              <h2
                className="z-10 inline-block max-w-[60%] text-2xl lg:text-3xl"
                id={whatWeDo.headingId}
              >
                {whatWeDo.headingBefore}
                <span className="text-[#00F554]">{whatWeDo.headingHighlight}</span>
                {whatWeDo.headingAfter}
              </h2>
              <div className="z-10 max-w-[85%] md:max-w-[70%]">{whatWeDo.intro}</div>
            </div>
          </div>
        </div>

        <section className="bg-gray-night-green text-gray-off-white">
          <div className="group/cards grid-rows-auto pointer-events-none relative flex grid-cols-12 flex-col gap-2xl lg:grid lg:gap-md">
            {whatWeDo.businessLines.map((line) => (
              <BusinessLineCard key={line.id} {...line} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
