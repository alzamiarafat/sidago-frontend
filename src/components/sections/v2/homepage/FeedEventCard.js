import Image from "next/image";
import { formatEventDateRange } from "@/src/components/sections/v2/events/EventCard";

const THEME_CLASS = {
  mid: "bg-purple-mid",
  dark: "bg-purple-dark",
  light: "bg-purple-light",
};

export default function FeedEventCard({ event }) {
  const themeClass = THEME_CLASS[event.theme] ?? THEME_CLASS.mid;

  return (
    <a
      href={event.href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      referrerPolicy="no-referrer"
      className="group/interactive flex h-[22rem] flex-col overflow-hidden bevel transition-opacity lg:h-[28.125rem] lg:group-hover/cards:[&:not(:hover)]:opacity-70"
      style={{ position: "relative" }}
    >
      <span className="sr-only">{event.srText}</span>
      <div className={`relative min-h-0 flex-[0.42] ${themeClass}`}>
        <Image
          alt={event.imageAlt}
          src={event.imageSrc}
          width={800}
          height={600}
          className="absolute inset-0 h-full w-full object-contain p-xl"
        />
      </div>
      <div className="flex min-h-0 flex-[0.58] flex-col justify-between bg-gray-defi-charcoal p-lg text-gray-off-white lg:p-xl">
        <div className="font-blender text-xs uppercase tracking-wide text-gray-defi-ash lg:text-sm">
          {event.role.toUpperCase()} | {event.location.toUpperCase()}
        </div>
        <div className="text-lg leading-snug lg:text-xl">{event.title}</div>
        <div className="font-blender text-xs uppercase tracking-wide text-gray-defi-ash lg:text-sm">
          {formatEventDateRange(event.dateStart, event.dateEnd)}
        </div>
      </div>
    </a>
  );
}
