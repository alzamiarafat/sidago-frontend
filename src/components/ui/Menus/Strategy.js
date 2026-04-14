"use client";
import { useState } from "react";

export default function StrategyMenu() {
  const [openMega, setOpenMega] = useState(null);

  return (
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
          width: "max-content",
          display: openMega === "strategy" ? "block" : "none",
        }}
      >
        <ul className="sub-menu !flex flex-wrap">
          <li
            id="menu-item-3741"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children w-full md:w-1/3 hasChildren"
          >
            <p>
              <a href="/strategy/capabilities">
                <span>Capabilities</span>
              </a>
            </p>
            <ul className="sub-menu">
              <li
                id="menu-item-4040"
                className="menu-item menu-item-type-post_type menu-item-object-page"
              >
                <p>
                  <a href="/strategy/capabilities#core">
                    <span>Core Competencies</span>
                  </a>
                </p>
              </li>
              <li
                id="menu-item-4038"
                className="menu-item menu-item-type-post_type menu-item-object-page"
              >
                <p>
                  <a href="/strategy/capabilities#technical">
                    <span>Technical Skills</span>
                  </a>
                </p>
              </li>
              <li
                id="menu-item-4042"
                className="menu-item menu-item-type-post_type menu-item-object-page"
              >
                <p>
                  <a href="/strategy/capabilities#industry">
                    <span>Industry Expertise</span>
                  </a>
                </p>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-3742"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children w-full md:w-1/3 hasChildren"
          >
            <p>
              <a href="/strategy/employee-quality">
                <span>Employee Quality</span>
              </a>
            </p>
            <ul className="sub-menu">
              <li
                id="menu-item-3968"
                className="menu-item menu-item-type-post_type menu-item-object-page"
              >
                <p>
                  <a href="/strategy/employee-quality#benefits">
                    <span>Our Benefits</span>
                  </a>
                </p>
              </li>
              <li
                id="menu-item-3967"
                className="menu-item menu-item-type-post_type menu-item-object-page"
              >
                <p>
                  <a href="/strategy/employee-quality#process">
                    <span>The Process</span>
                  </a>
                </p>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-4036"
            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children w-full md:w-1/3 hasChildren"
          >
            <p>
              <a href="/strategy/our-benefits">
                <span>Our Benefits</span>
              </a>
            </p>
            <ul className="sub-menu">
              <li
                id="menu-item-4033"
                className="menu-item menu-item-type-post_type menu-item-object-page"
              >
                <p>
                  <a href="/strategy/our-benefits#advantages">
                    <span>Employee Advantages</span>
                  </a>
                </p>
              </li>
              <li
                id="menu-item-4032"
                className="menu-item menu-item-type-post_type menu-item-object-page"
              >
                <p>
                  <a href="/strategy/our-benefits#culture">
                    <span>Workplace Culture</span>
                  </a>
                </p>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-3744"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children w-full md:w-1/3 hasChildren"
          >
            <p>
              <a href="/strategy/the-process">
                <span>The Process</span>
              </a>
            </p>
            <ul className="sub-menu">
              <li
                id="menu-item-4044"
                className="menu-item menu-item-type-post_type menu-item-object-page"
              >
                <p>
                  <a href="/strategy/the-process#methodology">
                    <span>Methodology</span>
                  </a>
                </p>
              </li>
              <li
                id="menu-item-4045"
                className="menu-item menu-item-type-post_type menu-item-object-page"
              >
                <p>
                  <a href="/strategy/the-process#implementation">
                    <span>Implementation</span>
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
