import Link from "next/link";

function ExploreArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className="ml-[--arrow-offset] h-xl w-xl transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset]"
      style={{ "--arrow-offset": "0.4rem", width: "1rem" }}
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

function isInternalHref(href) {
  return href?.startsWith("/") && !href.startsWith("//");
}

export default function WhoWeServe({ title, description, ctaLabel, href }) {
  if (!title || !description || !ctaLabel || !href) {
    return null;
  }

  const LinkTag = isInternalHref(href) ? Link : "a";
  const linkProps = isInternalHref(href)
    ? { href }
    : {
        href,
        referrerPolicy: "no-referrer",
        rel: "nofollow",
        target: "_blank",
      };

  return (
    <section>
      <div className="container py-block pt-2xl">
        <section className="bg-gray-night-green text-gray-off-white">
          <div className="flex flex-col gap-[4rem]">
            <div className="relative flex flex-col gap-md overflow-hidden px-xl py-2xl bevel bg-gray-defi-charcoal">
              <div className="z-10 flex flex-col items-start md:w-[60%]">
                <div className="text-2xl">{title}</div>
                <div className="mt-10 text-sm md:text-base">{description}</div>
                <LinkTag
                  {...linkProps}
                  style={{ position: "relative" }}
                  className="group/interactive mt-6 inline-flex items-center justify-between gap-md bg-green-dark px-sm py-xs font-medium text-gray-night-green bevel bevel-[0.25rem] disabled:opacity-50"
                >
                  <span className="sr-only">{title}</span>
                  {ctaLabel}
                  <ExploreArrow />
                </LinkTag>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
