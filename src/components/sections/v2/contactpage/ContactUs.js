const CONTACT_TOPICS = [
  {
    label: "OTC trading",
    href: "/contact",
    srLabel: "Contact › Otc",
    cardClassName: "bg-gray-tradfi-silver text-gray-night-green",
    spanClassName: "col-span-4 xl:col-span-3",
  },
  {
    label: "Liquidity provision",
    href: "/contact",
    srLabel: "Contact › Liquidity",
    cardClassName: "bg-gray-night-green text-gray-off-white",
    spanClassName: "col-span-4 xl:col-span-3",
  },
  {
    label: "Ventures",
    href: "/contact",
    srLabel: "Contact › Ventures",
    cardClassName: "bg-blue-dark text-gray-night-green",
    spanClassName: "col-span-4 xl:col-span-3",
  },
  {
    label: "Recruitment",
    href: "/contact",
    srLabel: "Contact › Recruiting",
    cardClassName: "bg-green-light text-gray-night-green",
    spanClassName: "col-span-6 xl:col-span-3",
  },
  {
    label: "Events",
    href: "/contact",
    srLabel: "Contact › Events",
    cardClassName: "bg-pink-light text-gray-night-green",
    spanClassName: "col-span-6 xl:col-span-3",
  },
  {
    label: "Media",
    href: "/contact",
    srLabel: "Contact › Media",
    cardClassName: "bg-gray-defi-ash text-gray-off-white",
    spanClassName: "col-span-4 xl:col-span-3",
  },
  {
    label: "Legal and Compliance",
    href: "/contact",
    srLabel: "Contact › Legal compliance",
    cardClassName: "bg-orange-light text-gray-night-green",
    spanClassName: "col-span-4 xl:col-span-3",
  },
  {
    label: "Other",
    href: "/contact",
    srLabel: "Contact › Other",
    cardClassName: "bg-gray-defi-graphite text-gray-off-white",
    spanClassName: "col-span-4 xl:col-span-3",
  },
];

function ArrowIcon({ mobile = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className={`ml-[--arrow-offset] shrink-0 transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] ${
        mobile ? "lg:hidden" : "hidden lg:block"
      }`}
      style={{
        "--arrow-offset": mobile ? "0.9rem" : "1.1rem",
        width: mobile ? "2.25rem" : "2.75rem",
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

function ContactTopicCard({ topic }) {
  return (
    <a
      href={topic.href}
      className={`group/interactive pointer-events-auto h-[14.5rem] transition-all lg:h-[11.375rem] lg:group-hover/cards:[&:not(:hover)]:opacity-70 ${topic.spanClassName}`}
      style={{ position: "relative" }}
    >
      <span className="sr-only">{topic.srLabel}</span>
      <div
        className={`relative flex h-full flex-col justify-between overflow-hidden p-lg bevel ${topic.cardClassName}`}
      >
        <div></div>
        <div className="z-10 flex items-end justify-between gap-md">
          <div className="flex flex-col gap-md">
            <div className="text-xl">{topic.label}</div>
          </div>
          <ArrowIcon mobile />
          <ArrowIcon />
        </div>
      </div>
    </a>
  );
}

export default function ContactUs() {
  return (
    <section className="bg-stone-800">
      <div className="container flex flex-col gap-x-3xl gap-y-container py-block lg:flex-row">
        <div
          className="core-column--stacked-on-mobile"
          style={{ "--core-column-width": "15%" }}
        >
          <img
            alt=""
            loading="lazy"
            width="1152"
            height="1152"
            decoding="async"
            data-nimg="1"
            className="aspect-video object-cover bevel lg:h-full lg:aspect-auto"
            style={{ color: "transparent" }}
            src="https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/26202946/Contact-graphic.svg"
          />
        </div>

        <div
          className="core-column--stacked-on-mobile"
          style={{ "--core-column-width": "85%" }}
        >
          <div className="text-green-dark">
            <p className="font-blender text-xl text-gray-off-white">
              CONTACT US
            </p>
          </div>

          <div className="pt-lg pb-container">
            <h2 className="text-3xl" id="get-in-touch-with-wintermute">
              Get in touch with Sidago
            </h2>
          </div>

          <div className="pb-xl text-green-dark">
            <p className="font-blender text-gray-tradfi-frost">
              WHAT TOPIC WOULD YOU LIKE TO CONTACT SIDAGO ABOUT?
            </p>
          </div>

          <section className="bg-stone-800 text-gray-off-white">
            <div className="group/cards pointer-events-none relative flex grid-cols-12 flex-col gap-2xl lg:grid lg:grid-rows-auto lg:gap-md">
              {CONTACT_TOPICS.map((topic) => (
                <ContactTopicCard key={topic.href} topic={topic} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
