import Image from "next/image";
import Link from "next/link";

function BreadcrumbSeparator() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className="w-xl"
      aria-hidden
    >
      <path
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeWidth="1.19"
        d="m15 29.999 12.5-10-12.5-10"
      />
    </svg>
  );
}

/**
 * Report / insight article hero (Wintermute-style split layout).
 */
export default function ReportInsightHero({
  imageSrc = "/images/OTC-report-2025_svg.svg",
  imageAlt = "",
  breadcrumbs = [],
  title,
  description,
  date,
  category,
  className = "",
  /** "green" (default) or "off-white" for market-update style meta row */
  metaTone = "green",
}) {
  const metaRowClass =
    metaTone === "off-white" ? "text-gray-off-white" : "text-green-tradfi";
  const metaDividerClass =
    metaTone === "off-white" ? "bg-gray-off-white" : "bg-green-tradfi";

  return (
    <section
      className={[
        "relative text-gray-night-green",
        className || "bg-gray-tradfi-horizon",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        alt={imageAlt || title}
        loading="lazy"
        width={1152}
        height={1152}
        className="right-0 top-0 -mt-4xl object-cover lg:absolute lg:mt-0 lg:h-full lg:w-1/2"
        style={{ color: "transparent" }}
        src={imageSrc}
      />
      <div className="container flex flex-col items-center gap-2xl pb-4xl lg:flex-row-reverse lg:gap-4xl lg:pt-4xl">
        <div className="hidden lg:block lg:flex-1" />
        <div className="flex flex-1 flex-col gap-2xl lg:gap-3xl">
          {breadcrumbs?.length > 0 ? (
            <div className="flex flex-wrap gap-xs font-blender text-sm uppercase">
              {breadcrumbs.map((crumb, index) => (
                <div key={`${crumb.href}-${index}`} className="flex items-center gap-xs">
                  {index > 0 ? <BreadcrumbSeparator /> : null}
                  <Link
                    style={{ position: "relative" }}
                    className="hover:opacity-80"
                    href={crumb.href}
                  >
                    <span className="sr-only">{crumb.srText || crumb.label}</span>
                    {crumb.label}
                  </Link>
                </div>
              ))}
            </div>
          ) : null}

          {title ? <p className="text-2xl lg:text-3xl">{title}</p> : null}

          {description ? <p className="text-lg">{description}</p> : null}

          {date || category ? (
            <div
              className={`flex font-blender text-sm uppercase ${metaRowClass}`}
            >
              {date ? <p>{date}</p> : null}
              {date && category ? (
                <div
                  className={`mx-2.5 mt-[0.1875rem] h-[0.75rem] w-[0.0625rem] ${metaDividerClass}`}
                />
              ) : null}
              {category ? <p>{category}</p> : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
