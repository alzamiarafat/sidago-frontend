import Image from "next/image";

const CONTACT_TOPICS = [
  {
    label: "Digital Support Services",
    href: "/contact#digital-support-inquiry",
    srLabel: "Contact › Digital Support Services",
    cardClassName: "bg-gray-tradfi-silver text-gray-night-green",
    spanClassName: "col-span-4 xl:col-span-3",
  },
  {
    label: "Global Workforce Solutions",
    href: "/contact",
    srLabel: "Contact › Global Workforce Solutions",
    cardClassName: "bg-gray-night-green text-gray-off-white",
    spanClassName: "col-span-4 xl:col-span-3",
  },
  {
    label: "Scalable Operations",
    href: "/contact",
    srLabel: "Contact › Scalable Operations",
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

function topicHref(topic) {
  if (topic.href.includes("#")) {
    return topic.href;
  }
  const q = new URLSearchParams({ topic: topic.label });
  return `${topic.href}?${q.toString()}#contact-form`;
}

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
      />
    </svg>
  );
}

function ContactTopicCard({ topic }) {
  return (
    <a
      href={topicHref(topic)}
      className={`group/interactive pointer-events-auto h-[14.5rem] transition-opacity lg:h-[11.375rem] lg:group-hover/cards:[&:not(:hover)]:opacity-70 ${topic.spanClassName}`}
      style={{ position: "relative" }}
    >
      <span className="sr-only">{topic.srLabel}</span>
      <div
        className={`relative flex h-full flex-col justify-between overflow-hidden p-lg bevel ${topic.cardClassName}`}
      >
        <div />
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
    <section
      id="contact-topics"
      className="bg-[linear-gradient(180deg,#1a211e_0%,#111715_100%)] py-block"
      aria-labelledby="contact-topics-heading"
    >
      <div className="container">
        <div className="flex items-stretch gap-4 sm:gap-6 lg:gap-8">
          <div
            className="core-column--stacked-on-mobile relative w-11 shrink-0 self-stretch sm:w-12 lg:w-[9.5rem] lg:max-w-[min(100%,16rem)]"
            style={{ "--core-column-width": "9.5rem" }}
            aria-hidden
          >
            <div className="bevel absolute inset-0 overflow-hidden bg-[#454A47]">
              <Image
                alt=""
                loading="lazy"
                fill
                unoptimized
                sizes="(max-width: 1024px) 3rem, 9.5rem"
                className="h-full w-full object-cover object-center"
                src="https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/26202946/Contact-graphic.svg"
              />
            </div>
          </div>

          <div
            className="core-column--stacked-on-mobile flex min-w-0 flex-1 flex-col"
            style={{ "--core-column-width": "85%" }}
          >
            <div className="max-w-[44rem]">
              <p className="text-sm uppercase tracking-[0.2em] text-green-dark">
                Contact us
              </p>

              <h2
                className="mt-2 text-3xl text-gray-off-white sm:text-4xl"
                id="contact-topics-heading"
              >
                Get in touch with Sidago
              </h2>

              <p className="mt-4 text-base leading-8 text-gray-off-white/75">
                Choose a topic below to reach the right Sidago team quickly and
                keep the enquiry aligned with your needs.
              </p>

              <div className="pt-6 text-green-dark">
                <p className="text-sm tracking-[0.18em] text-gray-tradfi-frost">
                  What topic would you like to contact Sidago about?
                </p>
              </div>
            </div>

            <div className="group/cards pointer-events-none relative mt-8 flex grid-cols-12 flex-col gap-5 text-gray-off-white lg:grid lg:grid-rows-auto lg:gap-4">
              {CONTACT_TOPICS.map((topic) => (
                <ContactTopicCard key={topic.label} topic={topic} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
