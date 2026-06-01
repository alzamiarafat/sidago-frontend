import EventsSectionHeading from "@/src/components/sections/v2/events/shared/EventsSectionHeading";
import EventsUpcomingCarousel from "@/src/components/sections/v2/events/EventsUpcomingCarousel";
import {
  upcomingEvents,
  upcomingEventsSection,
} from "@/src/components/sections/v2/events/data";

export default function EventsUpcomingSection({
  events = upcomingEvents,
  content = upcomingEventsSection,
}) {
  return (
    <section className="bg-[#070B09] text-gray-off-white">
      <div className="container py-block">
        <EventsSectionHeading
          id={content.headingId}
          title={content.heading}
          className={content.headingClassName}
          dividerClassName={content.dividerClassName}
        />

        <EventsUpcomingCarousel items={events} />
      </div>
    </section>
  );
}
