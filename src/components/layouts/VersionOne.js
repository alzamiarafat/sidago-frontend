import Navbar from "../sections/homepage/Navbar";
import Banner from "../sections/homepage/Banner";
import LogoBanner from "../sections/homepage/LogoBanner";
import Portfolio from "../sections/homepage/Portfolio";
import Footer from "../sections/homepage/Footer";
import ServicesGrid from "../sections/homepage/ServicesGrid";
import AboutSection from "../sections/homepage/AboutSection";
import ContactSection from "../sections/homepage/ContactSection";
import ClientsCarousel from "../sections/homepage/ClientsCarousel";
import Topbar from "../sections/homepage/Topbar";

export default async function VersionOneLayout({ settings }) {
  return (
    <div className="home wp-singular page-template page-template-home-template page-template-home-template-php page page-id-11 page-parent custom-background wp-theme-exception wp-child-theme-exception-child wpb-js-composer js-comp-ver-4.12.1 vc_responsive">
      <div className="pageWrapper">
        <div id="headWrapper" className="head-style1 clearfix">
          <Topbar settings={settings} />
          <Navbar settings={settings} />
          <div id="contentWrapper">
            <Banner />
            <ServicesGrid />
            <AboutSection />
            <LogoBanner />
            <Portfolio />
            <ContactSection />
            <ClientsCarousel />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
