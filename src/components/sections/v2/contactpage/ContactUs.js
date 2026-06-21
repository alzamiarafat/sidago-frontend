import Image from "next/image";
import {
  CONTACT_TOPICS,
  getContactTopicHref,
} from "@/src/components/sections/v2/contactpage/contactTopics";

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
      href={getContactTopicHref(topic.slug)}
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

export default function ContactUs({
  eyebrow = "Contact us",
  heading = "Get in touch with Sidago",
  subheading = "What topic would you like to contact Sidago about?",
  sidebarImageSrc = "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/26202946/Contact-graphic.svg",
  topics = CONTACT_TOPICS,
}) {
  return (
    <section
      id="contact-topics"
      className="bg-[#1C211E] py-block"
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
                src={sidebarImageSrc}
              />
            </div>
          </div>

          <div
            className="core-column--stacked-on-mobile flex min-w-0 flex-1 flex-col"
            style={{ "--core-column-width": "85%" }}
          >
            <div className="max-w-[44rem]">
              <p className="text-sm uppercase tracking-[0.2em] text-green-dark">
                {eyebrow}
              </p>

              <h2
                className="mt-2 text-3xl text-gray-off-white sm:text-4xl"
                id="contact-topics-heading"
              >
                {heading}
              </h2>

              <div className="pt-6 text-green-dark">
                <p className="text-sm tracking-[0.18em] text-gray-tradfi-frost">
                  {subheading}
                </p>
              </div>
            </div>

            <div className="group/cards pointer-events-none relative mt-8 flex grid-cols-12 flex-col gap-5 text-gray-off-white lg:grid lg:grid-rows-auto lg:gap-4">
              {topics.map((topic) => (
                <ContactTopicCard key={topic.slug} topic={topic} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
