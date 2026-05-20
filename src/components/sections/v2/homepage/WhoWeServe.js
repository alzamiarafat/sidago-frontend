import Link from "next/link";
import { defaultHomepage } from "@/src/data/cms/defaults";

const defaults = defaultHomepage.whoWeServe;

function ExploreArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className="h-4 w-4 shrink-0 transition-transform group-hover/interactive:translate-x-0.5"
      aria-hidden="true"
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

export default function WhoWeServe({
  title = defaults.title,
  description = defaults.description,
  ctaLabel = defaults.ctaLabel,
  href = defaults.href,
}) {
  return (
    <section>
      <div className="container py-block pt-2xl">
        <section className="bg-gray-night-green text-gray-off-white">
          <div className="flex flex-col gap-[4rem]">
            <div
              className="relative flex flex-col gap-md overflow-hidden px-xl py-2xl bevel bg-gray-defi-charcoal"
            >
              <div className="z-10 flex flex-col items-start md:w-[60%]">
                <div className="text-2xl">Who we serve</div>
                <div className="mt-10 text-sm md:text-base">
                  Dedicated trading and liquidity solutions built around the
                  needs of market participants across global markets.
                </div>
                <a
                  referrerPolicy="no-referrer"
                  rel="nofollow"
                  style={{ position: "relative" }}
                  target="_blank"
                  className="group/interactive gap-md inline-flex items-center justify-between font-medium disabled:opacity-50 bevel bevel-[0.25rem] px-sm py-xs bg-green-dark mt-6 text-gray-night-green"
                  href="https://www.wintermute.com/who-we-serve"
                ><span className="sr-only">Who we serve</span>Explore<svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 40 40"
                  className="ml-[--arrow-offset] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] h-xl w-xl"
                  style={{ "--arrow-offset": "0.4rem", width: "1rem" }}
                >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                      clipRule="evenodd"
                    ></path></svg
                  ></a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

