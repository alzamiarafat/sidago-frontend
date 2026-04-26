const meetUsEvents = [
  {
    href: "#",
    srLabel: "2026.B.Tc",
    imageSrc:
      "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2026/03/23094419/BTC-2026-Light.svg",
    imageAlt: "Meet us at Bitcoin 2026",
    location: "Attending | Las Vegas | USA",
    title: "Meet us at Bitcoin 2026",
    dateRange: ["27 Apr 2026", "29 Apr 2026"],
    cardClassName: "bg-purple-light",
  },
  {
    href: "#",
    srLabel: "Consensus.Coindesk.Com",
    imageSrc:
      "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2026/03/23104933/Consensus-2026-Mid.svg",
    imageAlt: "We’re going to Consensus Miami",
    location: "Attending | Miami | USA",
    title: "We’re going to Consensus Miami",
    dateRange: ["5 May 2026", "7 May 2026"],
    cardClassName: "bg-purple-mid",
  },
];

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className="ml-[--arrow-offset] w-10 shrink-0 transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset]"
      style={{ "--arrow-offset": "1rem" }}
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

function EventCard({ event }) {
  return (
    <a
      referrerPolicy="no-referrer"
      rel="nofollow"
      style={{ position: "relative" }}
      target="_blank"
      href={event.href}
      className={`group/interactive relative flex h-full min-h-[18.75rem] flex-col justify-end bevel ${event.cardClassName} text-gray-night-green transition-all lg:min-h-[23.25rem] xl:min-h-[28.125rem] lg:group-hover/cards:[&:not(:hover)]:opacity-70`}
    >
      <span className="sr-only">{event.srLabel}</span>
      <img
        alt={event.imageAlt}
        loading="lazy"
        width="800"
        height="600"
        decoding="async"
        data-nimg="1"
        className="absolute top-0 h-[60%] w-full object-cover"
        style={{ color: "transparent" }}
        src={event.imageSrc}
      />
      <div className="z-10 flex items-end justify-between p-xl">
        <div className="flex flex-col justify-between gap-xs">
          <div className="flex flex-col gap-xs">
            <div className="font-blender text-sm uppercase">
              {event.location}
            </div>
            <div className="ellipsis-3 h-[3lh] text-lg lg:text-xl">
              {event.title}
            </div>
          </div>
          <div className="font-blender text-sm uppercase">
            <span>{event.dateRange[0]}</span>
            <span> - {event.dateRange[1]}</span>
          </div>
        </div>
        <ArrowIcon />
      </div>
    </a>
  );
}

export function MeetUs() {
  return (
    <section>
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id="meet-us-at-what-s-next"
              className="font-blender text-xl uppercase text-green-dark"
            >
              Meet us at what&apos;s next
            </h2>
          </div>
          <hr className="!border-[#ab290d]" />
        </div>

        <section className="bg-gray-night-green text-gray-off-white">
          <div>
            <div className="flex flex-col gap-2xl lg:hidden">
              <div className="group/cards grid grid-cols-1 gap-xl lg:grid-cols-4">
                {meetUsEvents.map((event) => (
                  <div key={event.href}>
                    <EventCard event={event} />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="hidden flex-col gap-2xl lg:flex lg:flex-col-reverse lg:gap-4xl"
              style={{ clipPath: "inset(-100rem -100rem -100rem -100rem)" }}
            >
              <div className="flex justify-between gap-3xl lg:items-center">
                <div className="relative flex flex-1 gap-md lg:hidden">
                  {meetUsEvents.map((event, index) => (
                    <button
                      key={event.href}
                      className={`absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash ${
                        index === 0 ? "" : "opacity-0"
                      }`}
                      type="button"
                    >
                      <div className="flex w-full items-center justify-between text-lg">
                        <div className="flex font-blender text-xl font-medium uppercase text-gray-defi-ash">
                          <span className="min-w-md">{index + 1}</span>
                          <span className="min-w-sm">/</span>
                          <span className="min-w-md">
                            {meetUsEvents.length}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex gap-md">
                  {["Previous", "Next"].map((label, index) => (
                    <button
                      key={label}
                      type="button"
                      aria-label={label}
                      className="group/interactive inline-flex items-center justify-between gap-md bevel bevel-[0.25rem] bg-pink-mid p-[0.625rem] font-medium text-gray-night-green disabled:opacity-50 hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 40 40"
                        className={`h-lg w-lg ${index === 0 ? "rotate-180" : ""}`}
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  ))}
                </div>

                <div className="hidden lg:flex">
                  <div className="h-[0.25rem] w-0 bg-pink-mid opacity-30 transition-all" />
                  <div className="h-[0.25rem] w-0 bg-pink-mid opacity-30 transition-all" />
                  <div
                    className="h-[0.25rem] w-sm bg-pink-mid transition-all"
                    style={{ width: "calc(0.75rem * 0)" }}
                  />
                  <div className="ml-[0.125rem] h-[0.25rem] w-sm bg-pink-mid opacity-30 transition-all" />
                  <div className="ml-[0.125rem] h-[0.25rem] w-sm bg-pink-mid opacity-30 transition-all" />
                </div>
              </div>

              <div className="group/cards relative -mx-[100rem] flex overflow-x-auto px-[100rem] scrollbar-none">
                {meetUsEvents.map((event) => (
                  <div
                    key={event.href}
                    className="w-[calc(100%-1rem)] shrink-0 pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem]"
                    style={{
                      "--link-card-desktop-width": "calc(100% / 3 + 1rem)",
                    }}
                  >
                    <EventCard event={event} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
