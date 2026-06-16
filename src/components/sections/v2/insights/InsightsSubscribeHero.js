import Image from "next/image";
import Link from "next/link";
import { subscribeHero as defaultHero } from "@/src/components/sections/v2/insights/data";

function ReadArticleArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className="ml-[--arrow-offset] h-4 w-4 transition-all group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0"
      style={{ "--arrow-offset": "0.4rem" }}
      aria-hidden
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function InsightsSubscribeHero({
  imageSrc = defaultHero.imageSrc,
  imageAlt = defaultHero.imageAlt,
  imageWidth = defaultHero.imageWidth ?? 1152,
  imageHeight = defaultHero.imageHeight ?? 1152,
  titleLead = defaultHero.titleLead,
  titleAccent = defaultHero.titleAccent,
  description = defaultHero.description,
  date = defaultHero.date,
  category = defaultHero.category,
  ctaLabel = defaultHero.cta.label,
  ctaHref = defaultHero.cta.href,
  ctaSrText = defaultHero.cta.srText,
}) {
  return (
    <section className="relative bg-gray-tradfi-horizon text-gray-defi-shadow">
      <Image
        alt={imageAlt}
        loading="lazy"
        width={imageWidth}
        height={imageHeight}
        unoptimized={imageSrc.endsWith(".svg")}
        className="right-0 top-0 -mt-block object-cover lg:absolute lg:mt-0 lg:h-full lg:w-1/2"
        style={{ color: "transparent" }}
        src={imageSrc}
      />
      <div className="container flex flex-col items-center gap-2xl pb-block lg:min-h-[75svh] lg:flex-row-reverse lg:gap-4xl lg:pt-block">
        <div className="hidden lg:block lg:flex-1" />
        <div className="flex-1">
          <h1 className="text-2xl lg:text-3xl">
            {titleLead}
            <br />
            <span className="text-green-tradfi">{titleAccent}</span>
          </h1>
          <p className="mt-4 lg:text-lg">{description}</p>
          <div className="my-3xl flex items-center font-blender text-sm uppercase lg:text-base">
            <div>{date}</div>
            <div
              className="mx-4 mb-[0.125rem] h-[0.8em] w-[0.125rem] bg-gray-defi-graphite"
              aria-hidden
            />
            <p className="text-green-tradfi">{category}</p>
          </div>
          <Link
            href={ctaHref}
            style={{ position: "relative" }}
            className="group/interactive inline-flex w-max items-center justify-between gap-md bevel bevel-[0.25rem] bg-green-tradfi px-sm py-xs font-medium text-gray-night-green disabled:opacity-50"
          >
            <span className="sr-only">{ctaSrText}</span>
            {ctaLabel}
            <ReadArticleArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
