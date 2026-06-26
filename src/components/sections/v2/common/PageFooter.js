import CTASection from "@/src/components/sections/v2/common/CTA";
import Footer from "@/src/components/sections/v2/common/Footer";
import { DEFAULT_SITE_CTA } from "@/src/data/defaultSiteCta";

export default function PageFooter({ footer, ctaItems, showCta = true }) {
  const items = ctaItems?.length ? ctaItems : DEFAULT_SITE_CTA;

  return (
    <>
      {showCta ? <CTASection items={items} /> : null}
      <Footer footer={footer} />
    </>
  );
}
