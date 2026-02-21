"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { fetchAPI } from "@/src/lib/api";
import HomeMenu from "../../ui/Menus/Single";
import ServicesMenu from "../../ui/Menus/Services";
import IndustriesMenu from "../../ui/Menus/Industries";
import StrategyMenu from "../../ui/Menus/Strategy";
import SingleMenu from "../../ui/Menus/Single";

export default function Navbar({ settings }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [openMega, setOpenMega] = useState(null);
  const [menus, setMenus] = useState([]);
  const searchRef = useRef();

  const toggleSearch = () => setIsOpenSearch((prev) => !prev);

  useEffect(() => {
    // Async function inside useEffect
    const getSettings = async () => {
      try {
        const data = await fetchAPI("menus?populate=*&sort=createdAt:asc"); // your API call
        setMenus(data.data);
      } catch (err) {
        console.error("Failed to fetch settings:", err);
      }
    };

    getSettings();
  }, []);

  return (
    <header className="sticky top-head">
      <div className="container mx-auto">
        {/* Logo */}
        <div className="flex w-full px-20 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src={`/images/${settings.siteLogo.name}`}
                alt="logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="flex top-menu right justify-center items-center space-x-2">
            <div id="mnu-eft" className="effect-1">
              <nav className="top-nav">
                <ul id="menu-main-menu" className="mega-menu">
                  {menus.map((menu, index) => {
                    if (menu.slug === "services") {
                      return <ServicesMenu key={index} menu={menu} />;
                    }
                    if (menu.slug === "industries") {
                      return <IndustriesMenu key={index} menu={menu} />;
                    }
                    if (menu.slug === "our-strategy") {
                      return <StrategyMenu key={index} menu={menu} />;
                    } else {
                      return <SingleMenu key={index} menu={menu} />;
                    }
                  })}
                </ul>
              </nav>
            </div>
            <div
              className={`top-search ${isOpenSearch ? "selected" : ""}`}
              ref={searchRef}
            >
              <a
                href="#"
                onClick={toggleSearch}
                className="group !flex !items-center !justify-center w-12 h-12 rounded-full text-[#e7512f] hover:bg-[#e7512f]"
              >
                <FaSearch className="w-4 h-4 group-hover:text-white" />
              </a>

              <div
                className={`search-box ${isOpenSearch ? "!block" : "!hidden"}`}
              >
                <form method="get" action="/">
                  <input
                    title="Enter search keyword here..."
                    type="text"
                    value=""
                    name="s"
                    className="txt-box"
                    placeholder="Enter search keyword here..."
                  />
                  <button type="submit" className="btn main-bg" data-text="GO">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
