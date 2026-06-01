import Image from "next/image";
import Link from "next/link";
import EventsSectionHeading from "@/src/components/sections/v2/events/shared/EventsSectionHeading";
import InteractiveArrow from "@/src/components/sections/v2/events/shared/InteractiveArrow";
import { bootcampSection } from "@/src/components/sections/v2/events/content";

export default function EventsBootcampSection({
  content = bootcampSection,
}) {
  return (
    <section className="bg-[#070B09] text-gray-off-white">
      <div className="container pb-block pt-container">
        <EventsSectionHeading id={content.headingId} title={content.heading} />
        <div className="flex flex-col-reverse justify-between gap-6 bg-gray-defi-graphite bevel bevel-1 md:h-[18.75rem] md:flex-row md:bevel-2.5">
        <div className="relative flex flex-1 flex-col justify-between gap-6 px-6 pt-6 md:pb-6">
          <div className="flex flex-col gap-6">
            <p className="text-2xl">{content.title}</p>
            <p className="text-base">{content.description}</p>
          </div>
          <Link
            href={content.ctaHref}
            target="_blank"
            rel="nofollow noopener noreferrer"
            referrerPolicy="no-referrer"
            className="group/interactive -ml-8 inline-flex w-[calc(100%+4rem)] items-center justify-between gap-md bg-green-tradfi px-[1.75rem] py-xs font-medium text-gray-night-green bevel bevel-[0.25rem] md:ml-0 md:w-max md:px-sm"
            style={{ position: "relative" }}
          >
            <span className="sr-only">{content.ctaLabel}</span>
            {content.ctaLabel}
            <InteractiveArrow size="1rem" />
          </Link>
        </div>
        <div className="flex-1 bevel">
          <Image
            alt={content.imageAlt}
            src={content.imageSrc}
            width={1130}
            height={760}
            className="block h-full w-full object-cover"
          />
        </div>
        </div>
      </div>
    </section>
  );
}
