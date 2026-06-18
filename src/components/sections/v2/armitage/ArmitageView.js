import ArmitageAbout from "./ArmitageAbout";
import ArmitageFaq from "./ArmitageFaq";
import ArmitageFooter from "./ArmitageFooter";
import ArmitageHero from "./ArmitageHero";
import ArmitageNavbar from "./ArmitageNavbar";
import ArmitageStats from "./ArmitageStats";
import ArmitageVaults from "./ArmitageVaults";
import "./armitage.css";

export default function ArmitageView() {
  return (
    <div className="armitage-page min-h-svh">
      <ArmitageNavbar />
      <main>
        <ArmitageHero />
        <ArmitageVaults />
        <ArmitageAbout />
        <ArmitageStats />
        <ArmitageFaq />
      </main>
      <ArmitageFooter />
    </div>
  );
}
