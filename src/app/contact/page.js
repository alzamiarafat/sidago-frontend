import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import ContactUs from "@/src/components/sections/v2/contactpage/ContactUs";
import { getContactPage } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";
import { notFound } from "next/navigation";

export const metadata = routeMetadata.contact;

export default async function ContactPage() {
  const contact = await getContactPage();

  if (!contact) {
    notFound();
  }

  return (
    <div className="flex min-h-svh flex-col bg-[#1C211E] text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main
          className="relative isolate overflow-x-hidden bg-[#1C211E] text-gray-off-white [&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)] dark"
          style={{ colorScheme: "dark" }}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-5%,rgba(231,81,47,0.08),transparent_56%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_18%,transparent_82%,rgba(255,255,255,0.02))]"
            aria-hidden
          />
          <div className="relative z-[1]">
            <ContactUs
              eyebrow={contact.eyebrow}
              heading={contact.heading}
              subheading={contact.subheading}
              sidebarImageSrc={contact.sidebarImageSrc}
              topics={contact.topics}
            />
            <CTASection items={contact.cta} />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
