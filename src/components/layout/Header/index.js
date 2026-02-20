import Link from "next/link";
import TopBar from "./TopBar";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div id="headWrapper" className="head-style1 clearfix">
      <TopBar />
      <header className="top-head" data-sticky="true">
        <div className="container">
          <div className="logo left">
            <Link href="/" rel="home" className="logo-img">
              <img alt="logo" src="/images/logo1.png" />
            </Link>
          </div>
          <Navigation />
        </div>
      </header>
    </div>
  );
}
