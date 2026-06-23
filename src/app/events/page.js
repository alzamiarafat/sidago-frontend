import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import EventsUpcomingSection from "@/src/components/sections/v2/events/EventsUpcomingSection";
import EventsEndpointSection from "@/src/components/sections/v2/events/EventsEndpointSection";
import EventsPastConversationsSection from "@/src/components/sections/v2/events/EventsPastConversationsSection";
import EventsBootcampSection from "@/src/components/sections/v2/events/EventsBootcampSection";
import "@/src/components/sections/v2/events/events-hero-mobile.css";
import { getEventsPage, getGlobalSettings } from "@/src/lib/api";
import { buildPageMetadata } from "@/src/lib/seo";
import { notFound } from "next/navigation";

export const metadata = buildPageMetadata({
  title: "Events",
  description:
    "Sidago Events are a great way to stay up to date with the news and updates from Sidago.",
  path: "/events",
  keywords: [
    "Sidago events",
    "events",
    "meetups",
    "speakers",
    "industry conversations",
  ],
});

export default async function EventsPage() {
  const [settings, events] = await Promise.all([
    getGlobalSettings(),
    getEventsPage(),
  ]);

  if (!events?.pageContent || !events?.heroProps) {
    notFound();
  }

  const { pageContent } = events;
  const heroProps = {
    ...events.heroProps,
    videoClass: "events-hero-video",
    backgroundClassName: events.backgroundClassName || events.heroProps?.backgroundClassName,
    syncBackgroundColor: true,
    videoOverlay: false,
    videoSectionClass: [
      "events-hero-section",
      events.heroProps?.videoSectionClass,
    ]
      .filter(Boolean)
      .join(" "),
  };

  return (
    <div className="flex min-h-svh flex-col bg-[#070807] text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark flex-1 bg-[#070807] text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection {...heroProps} />
          <EventsUpcomingSection
            events={pageContent.upcomingEvents}
            content={pageContent.upcomingEventsSection}
          />
          <EventsEndpointSection
            content={pageContent.endpointSection}
            speakers={pageContent.pastSpeakers}
          />
          <EventsPastConversationsSection
            content={pageContent.pastConversationsSection}
          />
          <EventsBootcampSection content={pageContent.bootcampSection} />
          <CTASection items={pageContent.cta} />
          <Footer footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
