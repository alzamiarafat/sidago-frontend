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
  imageWidth = 1152,
  imageHeight = 1152,
  breadcrumbs = [],
  title,
  description,
  descriptionParts,
  date,
  category,
  className = "",
  /** Meta row: green | off-white | mid | brand */
  metaTone = "green",
}) {
  const metaStyles = {
    "off-white": { text: "text-gray-off-white", divider: "bg-gray-off-white" },
    mid: { text: "text-green-mid", divider: "bg-green-mid" },
    brand: { text: "text-green-dark", divider: "bg-green-dark" },
    green: { text: "text-green-tradfi", divider: "bg-green-tradfi" },
  };
  const meta = metaStyles[metaTone] ?? metaStyles.green;
  const metaRowClass = meta.text;
  const metaDividerClass = meta.divider;

  const renderDescriptionPart = (part, index) => {
    if (part.type === "link") {
      const inner = part.strong ? <strong>{part.value}</strong> : part.value;
      return (
        <Link
          key={index}
          href={part.href}
          className="text-green-dark hover:opacity-80"
          target={part.external ? "_blank" : undefined}
          rel={part.external ? "noopener noreferrer" : undefined}
        >
          {inner}
        </Link>
      );
    }

    return <span key={index}>{part.value}</span>;
  };

  return (
    <section
      className={[
        "relative text-gray-defi-shadow",
        className || "bg-gray-tradfi-horizon",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        alt={imageAlt || title}
        loading="lazy"
        width={imageWidth}
        height={imageHeight}
        unoptimized={imageSrc.endsWith(".svg") || imageSrc.includes(".svg?")}
        className="right-0 top-0 -mt-block object-cover lg:absolute lg:mt-0 lg:h-full lg:w-1/2"
        style={{ color: "transparent" }}
        src={imageSrc}
      />
      <div className="container flex flex-col items-center gap-2xl pb-block lg:min-h-[75svh] lg:flex-row-reverse lg:gap-4xl lg:pt-block">
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

          {descriptionParts?.length ? (
            <p className="text-lg [&_a]:text-green-dark">
              {descriptionParts.map(renderDescriptionPart)}
            </p>
          ) : description ? (
            <p className="text-lg">{description}</p>
          ) : null}

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
