import Image from "next/image";
import Topbar from "../components/Topbar";
import "../app/globals.css";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Solutions from "../components/Solutions";
import HeroBanner from "../components/HeroBanner";
import Overview from "../components/Overview";
import Portfolio from "../components/Portfolio";
import Work from "../components/Work";
import Client from "../components/Client";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home wp-singular page-template page-template-home-template page-template-home-template-php page page-id-11 page-parent custom-background wp-theme-exception wp-child-theme-exception-child wpb-js-composer js-comp-ver-4.12.1 vc_responsive">
      <div className="pageWrapper">
        <div id="headWrapper" className="head-style1 clearfix">
          <Topbar />
          <Navbar />
          <div id="contentWrapper">
            <Banner />
            <Solutions />
            <Overview />
            <HeroBanner />
            <Portfolio />
            <Work />
            <Client />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
