import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import ContactUs from "@/src/components/sections/v2/contactpage/ContactUs";
import ContactPremiumHero from "@/src/components/sections/v2/contactpage/ContactPremiumHero";
import ContactLeadForm from "@/src/components/sections/v2/contactpage/ContactLeadForm";
import ContactOfficesMap from "@/src/components/sections/v2/contactpage/ContactOfficesMap";
import { defaultHomepage } from "@/src/data/cms/defaults";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.contact;

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

export default function ContactPage() {
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
            {/* <ContactPremiumHero /> */}
            {/* <ContactLeadForm /> */}
            {/* <ContactOfficesMap /> */}
            <ContactUs />
            <CTASection items={contactPageCta} />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
