import EventsIntroBlock from "@/src/components/sections/v2/events/shared/EventsIntroBlock";
import EventsMediaCarousel from "@/src/components/sections/v2/events/EventsMediaCarousel";
import { pastConversationsSection } from "@/src/components/sections/v2/events/content";

export default function EventsPastConversationsSection({
  content = pastConversationsSection,
}) {
  return (
    <section className="bg-[#070B09] text-gray-off-white">
      <div className="container pt-block pb-0">
        <EventsIntroBlock
          headingId={content.headingId}
          title={
            <>
              <span className="text-pink-mid">{content.titleHighlight}</span>
              {content.titleAfter}
            </>
          }
          description={content.description}
        />

        <EventsMediaCarousel items={content.items} />
      </div>
    </section>
  );
}
