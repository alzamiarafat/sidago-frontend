import Link from "next/link";
import EventsCoHostDiamondPattern from "@/src/components/sections/v2/events/EventsCoHostDiamondPattern";
import InteractiveArrow from "@/src/components/sections/v2/events/shared/InteractiveArrow";

export default function EventsPromoBanner({
  title = "Meet the Sidago team",
  description = "Join us at industry conferences and Sidago's exclusive events near you.",
  ctaHref = "/events",
  ctaLabel = "Explore events",
  ctaSrText = "Events",
  ctaClassName = "group/interactive mt-6 inline-flex items-center justify-between gap-md bg-green-dark px-sm py-xs font-medium text-gray-night-green bevel bevel-[0.25rem] hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100",
  arrowSize = "1rem",
  className = "bg-gray-defi-graphite text-gray-off-white",
  cardClassName = "bg-gray-defi-charcoal",
}) {
  return (
    <section className={className}>
      <div className="flex flex-col gap-[4rem]">
        <div
          className={`relative flex flex-col gap-md overflow-hidden px-xl py-2xl bevel ${cardClassName}`}
        >
          <EventsCoHostDiamondPattern />
          <div className="z-10 flex flex-col items-start md:w-[60%]">
            <div className="text-2xl">{title}</div>
            <div className="mt-10 text-sm md:text-base">{description}</div>
            <Link
              href={ctaHref}
              className={ctaClassName}
              style={{ position: "relative" }}
            >
              <span className="sr-only">{ctaSrText}</span>
              {ctaLabel}
              <InteractiveArrow size={arrowSize} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
