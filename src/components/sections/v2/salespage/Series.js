const SERIES_LINKS = [
  {
    label: "Market Color",
    href: "#",
  },
  {
    label: "Governance Digest",
    href: "#",
  },
  {
    label: "Views",
    href: "#",
  },
];

function SeriesArrow({ mobile = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className={`ml-[--arrow-offset] shrink-0 text-[#e7512e] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] ${
        mobile ? "lg:hidden" : "hidden lg:inline"
      }`}
      style={{
        "--arrow-offset": mobile ? "1.2rem" : "1.6rem",
        width: mobile ? "3rem" : "4rem",
      }}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function SeriesLink({ href, label, showDivider = true }) {
  return (
    <>
      <a
        href={href}
        className="group/interactive flex justify-between gap-xl"
        style={{ position: "relative" }}
      >
        <span className="sr-only">Insights › Discover</span>
        <div className="text-2xl transition-all group-hover/interactive:opacity-80 group-active/interactive:opacity-80 group-active/interactive:lg:opacity-100 lg:text-3xl">
          {label}
        </div>
        <SeriesArrow mobile />
        <SeriesArrow />
      </a>
      {showDivider ? <hr className="border-gray-defi-graphite" /> : null}
    </>
  );
}

export default function Series() {
  return (
    <section className="bg-gray-defi-shadow">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl font-blender text-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id="series"
              className="font-blender text-xl uppercase text-green-dark"
            >
              Series
            </h2>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>

        <section className="bg-gray-defi-shadow text-gray-off-white">
          <div className="flex flex-col gap-xl">
            {SERIES_LINKS.map((item, index) => (
              <SeriesLink
                key={item.label}
                {...item}
                showDivider={index !== SERIES_LINKS.length - 1}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
