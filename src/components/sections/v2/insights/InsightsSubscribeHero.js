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
  hero,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  titleLead,
  titleAccent,
  description,
  date,
  category,
  ctaLabel,
  ctaHref,
  ctaSrText,
}) {
  const source = hero ?? defaultHero;

  const resolvedImageSrc = imageSrc ?? source.imageSrc ?? defaultHero.imageSrc;
  const resolvedImageAlt = imageAlt ?? source.imageAlt ?? defaultHero.imageAlt;
  const resolvedImageWidth = imageWidth ?? source.imageWidth ?? 1152;
  const resolvedImageHeight = imageHeight ?? source.imageHeight ?? 1152;
  const resolvedTitleLead = titleLead ?? source.titleLead ?? defaultHero.titleLead;
  const resolvedTitleAccent =
    titleAccent ?? source.titleAccent ?? defaultHero.titleAccent;
  const resolvedDescription =
    description ?? source.description ?? defaultHero.description;
  const resolvedDate = date ?? source.date ?? defaultHero.date;
  const resolvedCategory = category ?? source.category ?? defaultHero.category;
  const resolvedCtaLabel =
    ctaLabel ?? source.cta?.label ?? defaultHero.cta.label;
  const resolvedCtaHref = ctaHref ?? source.cta?.href ?? defaultHero.cta.href;
  const resolvedCtaSrText =
    ctaSrText ?? source.cta?.srText ?? defaultHero.cta.srText;

  return (
    <section className="relative bg-gray-tradfi-horizon text-gray-defi-shadow">
      <Image
        alt={resolvedImageAlt}
        loading="lazy"
        width={resolvedImageWidth}
        height={resolvedImageHeight}
        unoptimized={resolvedImageSrc.endsWith(".svg")}
        className="right-0 top-0 -mt-block object-cover lg:absolute lg:mt-0 lg:h-full lg:w-1/2"
        style={{ color: "transparent" }}
        src={resolvedImageSrc}
      />
      <div className="container flex flex-col items-center gap-2xl pb-block lg:min-h-[75svh] lg:flex-row-reverse lg:gap-4xl lg:pt-block">
        <div className="hidden lg:block lg:flex-1" />
        <div className="flex-1">
          <h1 className="text-2xl lg:text-3xl">
            {resolvedTitleLead}
            <br />
            <span className="text-green-tradfi">{resolvedTitleAccent}</span>
          </h1>
          <p className="mt-4 lg:text-lg">{resolvedDescription}</p>
          <div className="my-3xl flex items-center font-blender text-sm uppercase lg:text-base">
            <div>{resolvedDate}</div>
            <div
              className="mx-4 mb-[0.125rem] h-[0.8em] w-[0.125rem] bg-gray-defi-graphite"
              aria-hidden
            />
            <p className="text-green-tradfi">{resolvedCategory}</p>
          </div>
          <Link
            href={resolvedCtaHref}
            style={{ position: "relative" }}
            className="group/interactive inline-flex w-max items-center justify-between gap-md bevel bevel-[0.25rem] bg-green-tradfi px-sm py-xs font-medium text-gray-night-green disabled:opacity-50"
          >
            <span className="sr-only">{resolvedCtaSrText}</span>
            {resolvedCtaLabel}
            <ReadArticleArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
