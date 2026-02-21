"use client";
import { useState } from "react";

export default function ServicesMenu({ menu }) {
  const [openMega, setOpenMega] = useState(null);

  return (
    <li
      id="menu-item-3100"
      onMouseEnter={() => setOpenMega("services")}
      onMouseLeave={() => setOpenMega(null)}
      className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mega-2 megamenu  ${openMega === "services" ? "hasChildren selected" : ""}`}
    >
      <p>
        <a href={menu.href}>
          <span>{menu.label}</span>
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
  );
}
