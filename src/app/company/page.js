import CompanyView from "@/src/components/sections/v2/company/CompanyView";
import CMSPageShell from "@/src/components/sections/v2/common/CMSPageShell";
import { getCompanyPage, getGlobalSettings } from "@/src/lib/api";
import { buildPageMetadata } from "@/src/lib/seo";

export const metadata = buildPageMetadata({
  title: "Company",
  description:
    "Learn about Sidago, a leading algorithmic trading firm and builder advancing the decentralized world.",
  path: "/company",
  keywords: [
    "Sidago company",
    "decentralized finance",
    "algorithmic trading",
    "Sidago about",
  ],
});

export default async function CompanyPage() {
  const [settings, company] = await Promise.all([
    getGlobalSettings(),
    getCompanyPage(),
  ]);

  if (!company?.hero) {
    return (
      <CMSPageShell className="flex min-h-svh flex-col bg-gray-night-green text-base" />
    );
  }

  return (
    <CompanyView
      footer={settings?.footer}
      hero={company.hero}
      whatWeDo={company.whatWeDo}
      quoteSection={company.quoteSection}
      executiveTeam={company.executiveTeam}
      exploreCareers={company.exploreCareers}
      latestNews={company.latestNews}
      eventsPromo={company.eventsPromo}
      cta={company.cta ?? []}
    />
  );
}
