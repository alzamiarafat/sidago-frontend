import ArmitageAbout from "./ArmitageAbout";
import ArmitageFaq from "./ArmitageFaq";
import ArmitageFooter from "./ArmitageFooter";
import ArmitageHero from "./ArmitageHero";
import ArmitageNavbar from "./ArmitageNavbar";
import ArmitageStats from "./ArmitageStats";
import ArmitageVaults from "./ArmitageVaults";
import {
  ARMITAGE_ABOUT_TABS,
  ARMITAGE_FAQ,
  ARMITAGE_FOOTER_DISCLAIMERS,
  ARMITAGE_FOOTER_LINKS,
  ARMITAGE_NAV_LINKS,
  ARMITAGE_STATS,
  ARMITAGE_VAULTS,
} from "./data";
import "./armitage.css";

const defaultArmitageContent = {
  navLinks: ARMITAGE_NAV_LINKS,
  hero: {
    titleLead: "A new standard",
    titleAccent: "vault curation",
    subtitle:
      "Armitage curates onchain vaults, managing risk and earning yield for depositors backed by 9 years of active trading.",
    videoSrc: "/media/hero-matrix.mp4",
  },
  vaults: ARMITAGE_VAULTS,
  aboutTabs: ARMITAGE_ABOUT_TABS,
  stats: ARMITAGE_STATS,
  faq: ARMITAGE_FAQ,
  footerLinks: ARMITAGE_FOOTER_LINKS,
  footerDisclaimers: ARMITAGE_FOOTER_DISCLAIMERS,
};

export default function ArmitageView({ content = {} }) {
  const page = { ...defaultArmitageContent, ...content };

  return (
    <div className="armitage-page min-h-svh">
      <ArmitageNavbar links={page.navLinks} />
      <main>
        <ArmitageHero hero={page.hero} />
        <ArmitageVaults vaults={page.vaults} />
        <ArmitageAbout tabs={page.aboutTabs} />
        <ArmitageStats stats={page.stats} />
        <ArmitageFaq items={page.faq} />
      </main>
      <ArmitageFooter
        links={page.footerLinks}
        disclaimers={page.footerDisclaimers}
      />
    </div>
  );
}
