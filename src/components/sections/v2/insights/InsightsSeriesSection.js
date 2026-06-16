import Link from "next/link";
import { insightsSeriesContent } from "@/src/components/sections/v2/insights/data";

function SeriesArrow({ mobile = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className={`ml-[--arrow-offset] shrink-0 transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] text-green-dark ${
        mobile ? "lg:hidden" : "hidden lg:inline"
      }`}
      style={{
        "--arrow-offset": mobile ? "1.2rem" : "1.6rem",
        width: mobile ? "3rem" : "4rem",
      }}
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

function SeriesLink({ item }) {
  return (
    <>
      <Link
        href={item.href}
        style={{ position: "relative" }}
        className="group/interactive flex justify-between gap-xl"
      >
        <span className="sr-only">{item.srText}</span>
        <div className="text-2xl transition-all group-hover/interactive:opacity-80 group-active/interactive:opacity-80 group-active/interactive:lg:opacity-100 lg:text-3xl">
          {item.label}
        </div>
        <SeriesArrow mobile />
        <SeriesArrow />
      </Link>
      <hr className="border-gray-defi-graphite" />
    </>
  );
}

export default function InsightsSeriesSection() {
  const { heading, headingId, dividerClassName, items } = insightsSeriesContent;

  return (
    <section className="bg-gray-defi-shadow">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl font-blender text-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id={headingId}
              className="font-blender text-xl uppercase text-green-dark"
            >
              {heading}
            </h2>
          </div>
          <hr className={dividerClassName} />
        </div>

        <section className="bg-gray-defi-shadow text-gray-off-white">
          <div className="flex flex-col gap-xl">
            {items.map((item) => (
              <SeriesLink key={item.label} item={item} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
