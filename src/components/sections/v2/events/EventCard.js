import Image from "next/image";

const THEME_CLASS = {
  mid: "bg-purple-mid",
  dark: "bg-purple-dark",
  light: "bg-purple-light",
};

function CardArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className="ml-[--arrow-offset] shrink-0 transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset]"
      style={{ "--arrow-offset": "1rem", width: "2.5rem" }}
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

export function formatEventDateRange(dateStart, dateEnd) {
  const format = (value) => value?.toUpperCase() ?? "";

  if (!dateEnd || dateStart === dateEnd) {
    return format(dateStart);
  }

  return `${format(dateStart)} - ${format(dateEnd)}`;
}

export default function EventCard({ event, layout = "carousel" }) {
  const themeClass = THEME_CLASS[event.theme] ?? THEME_CLASS.mid;
  const sizeClass =
    layout === "carousel"
      ? "h-[18.75rem] w-full lg:h-[23.25rem] xl:h-[28.125rem]"
      : "min-h-[18.75rem] lg:min-h-[23.25rem] xl:min-h-[28.125rem]";
  const linkClassName = `flex flex-col bevel group/interactive relative justify-end ${sizeClass} ${themeClass} text-gray-night-green transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70`;

  const card = (
    <a
      href={event.href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      referrerPolicy="no-referrer"
      className={linkClassName}
      style={{ position: "relative" }}
    >
      <span className="sr-only">{event.srText}</span>
      <Image
        alt={event.imageAlt}
        src={event.imageSrc}
        width={800}
        height={600}
        className="absolute top-0 h-[60%] w-full object-cover"
      />
      <div className="z-10 flex items-end justify-between p-xl">
        <div className="flex flex-col justify-between gap-xs">
          <div className="flex flex-col gap-xs">
            <div className="font-blender text-sm uppercase">
              {event.role.toUpperCase()} | {event.location.toUpperCase()}
            </div>
            <div className="ellipsis-3 h-[3lh] text-lg lg:text-xl">
              {event.title}
            </div>
          </div>
          <div className="font-blender text-sm uppercase">
            {formatEventDateRange(event.dateStart, event.dateEnd)}
          </div>
        </div>
        <CardArrow />
      </div>
    </a>
  );

  if (layout === "grid") {
    return <div className="h-full">{card}</div>;
  }

  return card;
}
