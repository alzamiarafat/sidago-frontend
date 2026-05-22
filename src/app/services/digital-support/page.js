import DigitalSupportServicesView from "@/src/components/sections/v2/digital-support-services/DigitalSupportServicesView";
import ReportInsightHero from "@/src/components/sections/v2/digital-support-services/ReportInsightHero";
import { getGlobalSettings } from "@/src/lib/api";
import { routeMetadata } from "@/src/lib/seo";

export const metadata = routeMetadata.digitalSupportServices;

const digitalSupportHero = {
  imageSrc: "/images/OTC-report-2025_svg.svg",
  imageAlt: "Digital Support Services",
  breadcrumbs: [
    {
      label: "Services",
      href: "/services",
      srText: "Services",
    },
    {
      label: "Digital Support",
      href: "/services/digital-support",
      srText: "Services › Digital Support",
    },
  ],
  title: "Digital Support Services",
  description:
    "Sidago delivers structured help desk, technical assistance, and customer operations so your organization stays responsive across channels—without overloading in-house staff.",
  date: "2026",
  category: "Support",
};

export default async function DigitalSupportPage() {
  const settings = await getGlobalSettings();

  return (
    <DigitalSupportServicesView
      footer={settings?.footer}
      hero={<ReportInsightHero {...digitalSupportHero} />}
    />
  );
}
