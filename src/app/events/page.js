import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import HeroBannerSection from "@/src/components/sections/v2/homepage/HeroBanner";
import EventsUpcomingSection from "@/src/components/sections/v2/events/EventsUpcomingSection";
import EventsEndpointSection from "@/src/components/sections/v2/events/EventsEndpointSection";
import EventsPastConversationsSection from "@/src/components/sections/v2/events/EventsPastConversationsSection";
import EventsBootcampSection from "@/src/components/sections/v2/events/EventsBootcampSection";
import { getEventsHeroProps } from "@/src/components/sections/v2/events/data";
import { getGlobalSettings } from "@/src/lib/api";
import { buildPageMetadata } from "@/src/lib/seo";

export const metadata = buildPageMetadata({
  title: "Events",
  description:
    "Sidago Events are a great way to stay up to date with the latest news and updates from Sidago.",
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
  const settings = await getGlobalSettings();

  return (
    <div className="flex min-h-svh flex-col bg-[#151B17] text-base">
      <div className="flex flex-1 flex-col overflow-x-hidden">
        <Navigation />

        <main
          className="[&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark flex-1 bg-[#151B17] text-gray-off-white"
          style={{ colorScheme: "dark" }}
        >
          <HeroBannerSection {...getEventsHeroProps()} />
          <EventsUpcomingSection />
          <EventsEndpointSection />
          <EventsPastConversationsSection />
          <EventsBootcampSection />
          <CTASection />
          <Footer footer={settings?.footer} />
        </main>
      </div>
    </div>
  );
}
