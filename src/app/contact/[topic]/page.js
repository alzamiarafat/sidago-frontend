import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import DigitalSupportInquirySection from "@/src/components/sections/v2/contactpage/DigitalSupportInquirySection";
import {
  CONTACT_TOPICS,
  getContactTopic,
} from "@/src/components/sections/v2/contactpage/contactTopics";
import { defaultHomepage } from "@/src/data/cms/defaults";
import { buildPageMetadata } from "@/src/lib/seo";
import { notFound } from "next/navigation";

const contactPageCta = [
  {
    ...defaultHomepage.cta[0],
    title: "Explore",
    description: "To find tailored liquidity solutions",
    href: "/who-we-serve",
    srLabel: "Explore tailored liquidity solutions",
  },
  ...defaultHomepage.cta.slice(1),
];

export function generateStaticParams() {
  return CONTACT_TOPICS.map((topic) => ({ topic: topic.slug }));
}

export async function generateMetadata({ params }) {
  const { topic: topicSlug } = await params;
  const topic = getContactTopic(topicSlug);

  if (!topic) {
    return {};
  }

  return buildPageMetadata({
    title: `Contact — ${topic.label}`,
    description: topic.description,
    path: `/contact/${topic.slug}`,
  });
}

export default async function ContactTopicPage({ params }) {
  const { topic: topicSlug } = await params;
  const topic = getContactTopic(topicSlug);

  if (!topic) {
    notFound();
  }

  return (
    <div className="flex min-h-svh flex-col bg-[#1C211E] text-base">
      <Navigation />

      <div className="flex flex-1 flex-col">
        <main
          className="relative isolate bg-[#1C211E] text-gray-off-white [&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark"
          style={{ colorScheme: "dark" }}
        >
          <div className="relative z-[1]">
            <DigitalSupportInquirySection
              topicLabel={topic.label}
              showServicesField={Boolean(topic.showServicesField)}
            />
            <CTASection items={contactPageCta} />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
