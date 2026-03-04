import Link from "next/link";

// Arrow Icon
const ArrowIcon = ({ size = "2rem", offset = "0.5rem" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 40 40"
    className="ml-[--arrow-offset] transition-all duration-300 shrink-0"
    style={{ "--arrow-offset": offset, width: size, height: size }}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
    />
  </svg>
);

// Cards data with new red-orange theme
const cards = [
  {
    id: "contact",
    title: "Contact",
    text: "To access top crypto liquidity",
    href: "/contact",
    bg: "bg-[#E7512F]", // left/middle red-orange
    text_color: "text-white",
    divider_color: "bg-[#C84722]",
    hover_bg: "hover:bg-[#D94E2B]",
    arrowOffset: "0.5rem",
    arrowSize: "2rem",
  },
  {
    id: "subscribe",
    title: "Subscribe",
    text: "To get the latest insights",
    href: "/insights#subscribe",
    bg: "bg-[#E06339]", // middle card
    text_color: "text-white",
    divider_color: "bg-[#C84722]",
    hover_bg: "hover:bg-[#E7512F]",
    arrowOffset: "0.5rem",
    arrowSize: "2rem",
  },
  {
    id: "apply",
    title: "Apply",
    text: "To join the Wintermute team",
    href: "/company/opportunities",
    bg: "bg-[#D94E2B]", // right side color matches right background
    text_color: "text-white",
    divider_color: "bg-[#C84722]",
    hover_bg: "hover:bg-[#E7512F]",
    arrowOffset: "0.5rem",
    arrowSize: "2rem",
  },
];
// CTACard component
function CTACard({ card, isLast }) {
  return (
    <>
      <Link
        href={card.href}
        className={`
          group/interactive
          relative flex-1
          flex flex-col justify-center
          px-0 py-4 sm:px-0 sm:py-5
          ${card.bg} 
          ${card.text_color} 
          ${card.hover_bg} 
          transition-all duration-300
          min-h-[6rem]
        `}
      >
        {/* Top Row - Title + Arrow */}
        <div className="flex items-center justify-between sm:px-6">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold tracking-tight transition-opacity duration-200 group-hover/interactive:opacity-80">
            {card.title}
          </h3>
          <ArrowIcon size={card.arrowSize} offset={card.arrowOffset} />
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm uppercase tracking-wide font-medium opacity-70 transition-opacity duration-200 group-hover/interactive:opacity-60 mt-1 sm:mt-2 px-4 sm:px-6 text-left">
          {card.text}
        </p>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] scale-x-0 group-hover/interactive:scale-x-100 transition-transform duration-300 origin-left bg-current opacity-20" />
      </Link>

      {/* Divider */}
      {!isLast && (
        <div
          className={`hidden lg:block w-px self-stretch opacity-20 ${card.divider_color}`}
        />
      )}
    </>
  );
}

// Main CTASection
export default function CTASection() {
  return (
    // <section className="relative text-white">
    //   {/* Background Split */}
    //   <div
    //     className="absolute inset-0 flex flex-col lg:flex-row"
    //     aria-hidden="true"
    //   >
    //     {/* Left side */}
    //     <div className="flex-1 bg-[#E7512F]" />
    //     {/* Right side */}
    //     <div className="flex-1 bg-[#D94E2B]" />
    //   </div>

    //   {/* Cards Container */}
    //   <div className="relative z-10 flex justify-center">
    //     <div className="flex flex-col lg:flex-row gap-2 sm:gap-3 lg:gap-2 w-full max-w-7xl px-0 lg:px-8">
    //       {cards.map((card, idx) => (
    //         <CTACard
    //           key={card.id}
    //           card={card}
    //           isLast={idx === cards.length - 1}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section className="relative bg-gray-night-green text-gray-night-green">
      <div className="absolute inset-0 flex">
        <div className="flex-1 bg-green-dark"></div>
        <div className="flex-1 bg-green-light"></div>
      </div>
      <div className="relative z-10 flex flex-col lg:flex-row lg:container">
        <a
          style={{ position: "relative" }}
          className="group/interactive flex-1 bg-green-dark"
          href="/contact"
        >
          <span className="sr-only">Contact</span>
          <div className="container flex h-full flex-col gap-sm py-md lg:px-md lg:py-xl">
            <div className="flex flex-1 items-center justify-between gap-xs">
              <div className="text-xl lg:text-xl group-hover/interactive:opacity-80 group-active/interactive:opacity-80 group-active/interactive:lg:opacity-100">
                Contact
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 40 40"
                className="ml-[--arrow-offset] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] shrink-0 lg:hidden text-gray-night-green"
                style={{
                  "--arrow-offset": "1rem",
                  width: "2.5rem",
                }}
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 40 40"
                className="ml-[--arrow-offset] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] hidden shrink-0 lg:inline text-gray-night-green"
                style={{
                  "--arrow-offset": "0.6rem",
                  width: "1.5rem",
                }}
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="font-blender text-sm uppercase group-hover/interactive:opacity-80 group-active/interactive:opacity-80 group-active/interactive:lg:opacity-100">
              To access top crypto liquidity
            </div>
          </div>
        </a>
        <div className="-mx-[0.0625rem] w-[0.125rem] lg:my-xl"></div>
        <a
          style={{ position: "relative" }}
          className="group/interactive flex-1 bg-green-mid"
          href="/insights#subscribe"
        >
          <span className="sr-only">Insights</span>
          <div className="container flex h-full flex-col gap-sm py-md lg:px-md lg:py-xl">
            <div className="flex flex-1 items-center justify-between gap-xs">
              <div className="text-xl lg:text-xl group-hover/interactive:opacity-80 group-active/interactive:opacity-80 group-active/interactive:lg:opacity-100">
                Subscribe
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 40 40"
                className="ml-[--arrow-offset] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] shrink-0 lg:hidden text-gray-night-green"
                style={{
                  "--arrow-offset": "1rem",
                  width: "2.5rem",
                }}
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 40 40"
                className="ml-[--arrow-offset] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] hidden shrink-0 lg:inline text-gray-night-green"
                style={{
                  "--arrow-offset": "0.6rem",
                  width: "1.5rem",
                }}
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="font-blender text-sm uppercase group-hover/interactive:opacity-80 group-active/interactive:opacity-80 group-active/interactive:lg:opacity-100">
              To get the latest insights
            </div>
          </div>
        </a>
        <div className="-mx-[0.0625rem] w-[0.125rem] lg:my-xl"></div>
        <a
          style={{ position: "relative" }}
          className="group/interactive flex-1 bg-green-light"
          href="/company/opportunities"
        >
          <span className="sr-only">Company › Opportunities</span>
          <div className="container flex h-full flex-col gap-sm py-md lg:px-md lg:py-xl">
            <div className="flex flex-1 items-center justify-between gap-xs">
              <div className="text-xl lg:text-xl group-hover/interactive:opacity-80 group-active/interactive:opacity-80 group-active/interactive:lg:opacity-100">
                Apply
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 40 40"
                className="ml-[--arrow-offset] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] shrink-0 lg:hidden text-gray-night-green"
                style={{
                  "--arrow-offset": "1rem",
                  width: "2.5rem",
                }}
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 40 40"
                className="ml-[--arrow-offset] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] hidden shrink-0 lg:inline text-gray-night-green"
                style={{
                  "--arrow-offset": "0.6rem",
                  width: "1.5rem",
                }}
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="font-blender text-sm uppercase group-hover/interactive:opacity-80 group-active/interactive:opacity-80 group-active/interactive:lg:opacity-100">
              To join the Wintermute team
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
