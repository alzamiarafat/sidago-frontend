import "../app/globals.css";
import Banner from "../components/sections/homepage/Banner";
import LogoBanner from "../components/sections/homepage/LogoBanner";
import Portfolio from "../components/sections/homepage/Portfolio";
import Footer from "../components/sections/homepage/Footer";
import ServicesGrid from "../components/sections/homepage/ServicesGrid";
import AboutSection from "../components/sections/homepage/AboutSection";
import ContactSection from "../components/sections/homepage/ContactSection";
import ClientsCarousel from "../components/sections/homepage/ClientsCarousel";

export default function Home() {
  return (
    <>
      <Banner />
      <ServicesGrid />
      <AboutSection />
      <LogoBanner />
      <Portfolio />
      <ContactSection />
    </>
  );
}
