"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMega, setOpenMega] = useState(null);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const searchRef = useRef();

  const toggleSearch = () => setIsOpenSearch((prev) => !prev);

  return (
    <header className="sticky">
      <div className="container mx-auto">
        {/* Logo */}
        <div className="flex w-full px-20 justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="/images/logo1.png" alt="logo" className="h-10 w-auto" />
            </Link>
          </div>
          <div className="flex top-menu right justify-center items-center space-x-2">
            <div id="mnu-eft" className="effect-1">
              <nav className="top-nav">
                <ul id="menu-main-menu" className="mega-menu">
                  <li
                    id="menu-item-2927"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-11 current_page_item"
                  >
                    <p>
                      <a href="#">
                        <span>Home</span>
                      </a>
                    </p>
                  </li>
                  <li
                    id="menu-item-3100"
                    onMouseEnter={() => setOpenMega("services")}
                    onMouseLeave={() => setOpenMega(null)}
                    className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mega-2 megamenu  ${openMega === "services" ? "hasChildren selected" : ""}`}
                  >
                    <p>
                      <a href="#">
                        <span>Services</span>
                      </a>
                    </p>
                    <div
                      className="div-mega main-bg animated fadeIn"
                      style={{
                        padding: "25px 10px",
                        width: "max-content",
                        display: openMega === "services" ? "block" : "none",
                      }}
                    >
                      <ul className="sub-menu !flex flex-wrap">
                        <li
                          id="menu-item-3192"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children w-full md:w-1/3 hasChildren"
                        >
                          <p>
                            <a href="/services/e-commerce/">
                              <span>Development & IT</span>
                            </a>
                          </p>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-3869"
                              className="menu-item menu-item-type-custom menu-item-object-custom"
                            >
                              <p>
                                <a href="/services/amazon-aws-administration/">
                                  <span>System Administration</span>
                                </a>
                              </p>
                            </li>
                            <li
                              id="menu-item-3204"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/services/e-commerce/">
                                  <span>E-Commerce</span>
                                </a>
                              </p>
                            </li>
                            <li
                              id="menu-item-3811"
                              className="menu-item menu-item-type-custom menu-item-object-custom"
                            >
                              <p>
                                <a href="/services/application-interface-design/">
                                  <i className="fa fa-plus-square-o selectedI"></i>
                                  <span>More</span>
                                </a>
                              </p>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-3230"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children w-full md:w-1/3 hasChildren"
                        >
                          <p>
                            <a href="/services/administrative-service/">
                              <span>Administrative Support</span>
                            </a>
                          </p>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-3231"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/services/administrative-services/">
                                  <span>Administrative Services</span>
                                </a>
                              </p>
                            </li>
                            <li
                              id="menu-item-3233"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/services/email-response-handling/">
                                  <span>Email Response Handling</span>
                                </a>
                              </p>
                            </li>
                            <li
                              id="menu-item-3812"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/services/transcription/">
                                  <span>Transcription</span>
                                </a>
                              </p>
                            </li>
                            <li
                              id="menu-item-3817"
                              className="menu-item menu-item-type-custom menu-item-object-custom"
                            >
                              <p>
                                <a href="/services/administrative-service/">
                                  <i className="fa fa-plus-square-o selectedI"></i>
                                  <span>More</span>
                                </a>
                              </p>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-3290"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children w-full md:w-1/3 hasChildren"
                        >
                          <p>
                            <a href="/services/advertising/">
                              <span>Advertising & Marketing</span>
                            </a>
                          </p>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-3291"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/services/advertising/">
                                  <span>Advertising</span>
                                </a>
                              </p>
                            </li>
                            <li
                              id="menu-item-3293"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/services/email-marketing/">
                                  <span>Email Marketing</span>
                                </a>
                              </p>
                            </li>
                            <li
                              id="menu-item-3297"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/services/online-marketing-strategy/">
                                  <span>Online Marketing Strategy</span>
                                </a>
                              </p>
                            </li>
                            <li
                              id="menu-item-3815"
                              className="menu-item menu-item-type-custom menu-item-object-custom"
                            >
                              <p>
                                <a href="/services/advertising/">
                                  <i className="fa fa-plus-square-o selectedI"></i>
                                  <span>More</span>
                                </a>
                              </p>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-3590"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children w-full md:w-1/3 hasChildren"
                        >
                          <p>
                            <a href="/services/design-multimedia">
                              <span>Design & Multimedia</span>
                            </a>
                          </p>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-3591"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/services/3d-modelling/">
                                  <span>3D Modelling</span>
                                </a>
                              </p>
                            </li>
                            <li
                              id="menu-item-3593"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/services/animation/">
                                  <span>Animation</span>
                                </a>
                              </p>
                            </li>
                            <li
                              id="menu-item-3594"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/services/design-multimedia/">
                                  <span>Design & Multimedia</span>
                                </a>
                              </p>
                            </li>
                            <li
                              id="menu-item-3816"
                              className="menu-item menu-item-type-custom menu-item-object-custom"
                            >
                              <p>
                                <a href="/services/3d-modelling/">
                                  <i className="fa fa-plus-square-o selectedI"></i>
                                  <span>More</span>
                                </a>
                              </p>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-3933"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children w-full md:w-1/3 hasChildren"
                        >
                          <p>
                            <a href="/services/business-services/">
                              <span>Business Services</span>
                            </a>
                          </p>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-3934"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/services/accounting/">
                                  <span>Accounting</span>
                                </a>
                              </p>
                            </li>
                            <li
                              id="menu-item-3935"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/services/bookkeeping/">
                                  <span>Bookkeeping</span>
                                </a>
                              </p>
                            </li>
                            <li
                              id="menu-item-3936"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/services/business-consulting/">
                                  <span>Business Consulting</span>
                                </a>
                              </p>
                            </li>
                            <li
                              id="menu-item-5569"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/services/construction-supply">
                                  <span>Construction Supply</span>
                                </a>
                              </p>
                            </li>
                            <li
                              id="menu-item-3937"
                              className="menu-item menu-item-type-custom menu-item-object-custom"
                            >
                              <p>
                                <a href="/services/business-services-main-point/">
                                  <i className="fa fa-plus-square-o selectedI"></i>
                                  <span>More</span>
                                </a>
                              </p>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    id="menu-item-3668"
                    onMouseEnter={() => setOpenMega("industries")}
                    onMouseLeave={() => setOpenMega(null)}
                    className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children ${openMega === "industries" ? "hasChildren selected" : ""}`}
                  >
                    <p>
                      <a href="/industries/">
                        <span>Industries</span>
                      </a>
                    </p>
                    <ul className="sub-menu">
                      <li
                        id="menu-item-3895"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                      >
                        <p>
                          <a href="#" className="">
                            <span>
                              B2B Commercial
                              <FaChevronRight className="w-4 h-4 inline ml-18 justify-end" />
                            </span>
                          </a>
                        </p>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-3899"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <p>
                              <a href="/law-firms/">
                                <span>Law Firms</span>
                              </a>
                            </p>
                          </li>
                          <li
                            id="menu-item-3900"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <p>
                              <a href="/manufacturing-industrial-products/">
                                <span>Manufacturing Industrial Products</span>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-3896"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                      >
                        <p>
                          <a href="#">
                            <span>
                              Financial
                              <FaChevronRight className="w-4 h-4 inline ml-30 justify-end" />
                            </span>
                          </a>
                          {/* <a href="#">
                          <span>Financial</span>
                        </a> */}
                        </p>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-3901"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <p>
                              <a href="/accounting-firms/">
                                <span>Accounting Firms</span>
                              </a>
                            </p>
                          </li>
                          <li
                            id="menu-item-3902"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <p>
                              <a href="/banking/">
                                <span>Banking</span>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-3907"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                      >
                        <p>
                          <a href="/technology/">
                            <span>Technology</span>
                            <FaChevronRight className="w-4 h-4 inline ml-26 justify-end" />
                          </a>
                        </p>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-3904"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <p>
                              <a href="/ad-networks/">
                                <span>Ad Networks</span>
                              </a>
                            </p>
                          </li>
                          <li
                            id="menu-item-3905"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <p>
                              <a href="/affiliate-networks/">
                                <span>Affiliate Networks</span>
                              </a>
                            </p>
                          </li>
                          <li
                            id="menu-item-3906"
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <p>
                              <a href="/affiliates/">
                                <span>Affiliates</span>
                              </a>
                            </p>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-3903"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <p>
                          <a href="/healthcare/">
                            <span>Health Care</span>
                          </a>
                        </p>
                      </li>
                      <li
                        id="menu-item-3912"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <p>
                          <a href="/aerospace-defense/">
                            <span>Aerospace / Defense</span>
                          </a>
                        </p>
                      </li>
                      <li
                        id="menu-item-3911"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <p>
                          <a href="/automotive/">
                            <span>Automotive</span>
                          </a>
                        </p>
                      </li>
                      <li
                        id="menu-item-3910"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <p>
                          <a href="/consumer-product-and-retail/">
                            <span>Consumer Product and Retail</span>
                          </a>
                        </p>
                      </li>
                      <li
                        id="menu-item-3938"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <p>
                          <a href="/distribution-and-transportation/">
                            <span>Distribution and Transportation</span>
                          </a>
                        </p>
                      </li>
                      <li
                        id="menu-item-3909"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <p>
                          <a href="/insurance/">
                            <span>Insurance</span>
                          </a>
                        </p>
                      </li>
                      <li
                        id="menu-item-3908"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <p>
                          <a href="/restaurants/">
                            <span>Restaurants</span>
                          </a>
                        </p>
                      </li>
                      <li
                        id="menu-item-5570"
                        className="menu-item menu-item-type-post_type menu-item-object-page"
                      >
                        <p>
                          <a href="/construction/">
                            <span>Construction</span>
                          </a>
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-3673"
                    onMouseEnter={() => setOpenMega("strategy")}
                    onMouseLeave={() => setOpenMega(null)}
                    className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-2 megamenu ${openMega === "strategy" ? "hasChildren selected" : ""}`}
                  >
                    <p>
                      <a href="#">
                        <span>Our Strategy</span>
                      </a>
                    </p>
                    <div
                      className="div-mega main-bg animated fadeIn"
                      style={{
                        padding: "25px 10px",
                        width: "80%",
                        display: openMega === "strategy" ? "block" : "none",
                      }}
                    >
                      <ul className="sub-menu">
                        <li
                          id="menu-item-3741"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children hasChildren"
                        >
                          <p>
                            <a href="/capabilities">
                              <span>Capabilities</span>
                            </a>
                          </p>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-4040"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/case-study-main-point/">
                                  <span>Case study</span>
                                </a>
                              </p>
                            </li>
                            <li
                              id="menu-item-4038"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/b2b-solutions/">
                                  <span>B2B Solutions</span>
                                </a>
                              </p>
                            </li>
                            <li
                              id="menu-item-4042"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/entire-plan/">
                                  <span>Entire plan</span>
                                </a>
                              </p>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-3742"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children hasChildren"
                        >
                          <p>
                            <a href="/employee-quality">
                              <span>Employee Advantage</span>
                            </a>
                          </p>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-3968"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/employee-quality/">
                                  <span>Employee Quality</span>
                                </a>
                              </p>
                            </li>
                            <li
                              id="menu-item-3967"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/established-management/">
                                  <span>Established Management</span>
                                </a>
                              </p>
                            </li>
                            <li
                              id="menu-item-3966"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/our-strategy/employee-advantage/hiring-model/">
                                  <span>Hiring Model</span>
                                </a>
                              </p>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-4036"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children hasChildren"
                        >
                          <p>
                            <a href="/our-benefits/">
                              <span>Our Benefits</span>
                            </a>
                          </p>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-4033"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/benefit-savings/">
                                  <span>Benefit Savings</span>
                                </a>
                              </p>
                            </li>
                            <li
                              id="menu-item-4032"
                              className="menu-item menu-item-type-post_type menu-item-object-page"
                            >
                              <p>
                                <a href="/employee-reassignment/">
                                  <span>Employee Reassignment</span>
                                </a>
                              </p>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-3744"
                          className="menu-item menu-item-type-custom menu-item-object-custom col-md-12"
                        >
                          <p>
                            <a href="#">
                              <span>The Process</span>
                            </a>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    id="menu-item-3669"
                    className="menu-item menu-item-type-post_type menu-item-object-page"
                  >
                    <p>
                      <a href="/sales/">
                        <span>Sales</span>
                      </a>
                    </p>
                  </li>
                  <li
                    id="menu-item-3746"
                    className="menu-item menu-item-type-post_type menu-item-object-page"
                  >
                    <p>
                      <a href="/contact/">
                        <span>Contact</span>
                      </a>
                    </p>
                  </li>
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
