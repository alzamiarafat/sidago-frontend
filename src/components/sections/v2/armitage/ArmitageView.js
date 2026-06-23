import ArmitageAbout from "./ArmitageAbout";
import ArmitageFaq from "./ArmitageFaq";
import ArmitageFooter from "./ArmitageFooter";
import ArmitageHero from "./ArmitageHero";
import ArmitageNavbar from "./ArmitageNavbar";
import ArmitageStats from "./ArmitageStats";
import ArmitageVaults from "./ArmitageVaults";
import "./armitage.css";

export default function ArmitageView({ content }) {
  if (
    !content?.navLinks?.length ||
    !content?.hero ||
    !content?.vaults?.length ||
    !content?.aboutTabs?.length ||
    !content?.stats?.length ||
    !content?.faq?.length ||
    !content?.footerLinks?.length ||
    !content?.footerDisclaimers?.length
  ) {
    return null;
  }

  return (
    <div className="armitage-page min-h-svh">
      <ArmitageNavbar links={content.navLinks} />
      <main>
        <ArmitageHero hero={content.hero} />
        <ArmitageVaults vaults={content.vaults} />
        <ArmitageAbout tabs={content.aboutTabs} />
        <ArmitageStats stats={content.stats} />
        <ArmitageFaq items={content.faq} />
      </main>
      <ArmitageFooter
        links={content.footerLinks}
        disclaimers={content.footerDisclaimers}
      />
    </div>
  );
}
