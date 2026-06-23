import CTASection from "@/src/components/sections/v2/common/CTA";
import CMSPageShell from "@/src/components/sections/v2/common/CMSPageShell";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import DigitalSupportInquirySection from "@/src/components/sections/v2/contactpage/DigitalSupportInquirySection";
import { getContactPage } from "@/src/lib/api";
import { buildPageMetadata } from "@/src/lib/seo";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const contact = await getContactPage();
  if (!contact?.topics?.length) return [];
  return contact.topics.map((topic) => ({ topic: topic.slug }));
}

export async function generateMetadata({ params }) {
  const { topic: topicSlug } = await params;
  const contact = await getContactPage();
  const topic = contact?.topics?.find((item) => item.slug === topicSlug);

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
  const contact = await getContactPage();

  if (!contact) {
    return <CMSPageShell className="flex min-h-svh flex-col bg-[#1C211E] text-base" />;
  }

  const topic = contact.topics.find((item) => item.slug === topicSlug);

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
              services={contact.inquiryServices}
            />
            <CTASection items={contact.cta} />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
