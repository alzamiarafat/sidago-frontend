"use client";
import Link from "next/link";
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
              <Link href="/strategy/capabilities">
                <span>Capabilities</span>
              </Link>
            </p>
            <ul className="sub-menu">
              <li
                id="menu-item-4040"
                className="menu-item menu-item-type-post_type menu-item-object-page"
              >
                <p>
                  <Link href="/strategy/core-competencies">
                    <span>Core Competencies</span>
                  </Link>
                </p>
              </li>
              <li
                id="menu-item-4038"
                className="menu-item menu-item-type-post_type menu-item-object-page"
              >
                <p>
                  <Link href="/strategy/technical-skills">
                    <span>Technical Skills</span>
                  </Link>
                </p>
              </li>
              <li
                id="menu-item-4042"
                className="menu-item menu-item-type-post_type menu-item-object-page"
              >
                <p>
                  <Link href="/strategy/industry-expertise">
                    <span>Industry Expertise</span>
                  </Link>
                </p>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-3742"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children w-full md:w-1/3 hasChildren"
          >
            <p>
              <Link href="/strategy/employee-quality">
                <span>Employee Quality</span>
              </Link>
            </p>
            <ul className="sub-menu">
              <li
                id="menu-item-3968"
                className="menu-item menu-item-type-post_type menu-item-object-page"
              >
                <p>
                  <Link href="/strategy/our-benefits">
                    <span>Our Benefits</span>
                  </Link>
                </p>
              </li>
              <li
                id="menu-item-3967"
                className="menu-item menu-item-type-post_type menu-item-object-page"
              >
                <p>
                  <Link href="/strategy/the-process">
                    <span>The Process</span>
                  </Link>
                </p>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-4036"
            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children w-full md:w-1/3 hasChildren"
          >
            <p>
              <Link href="/strategy/our-benefits">
                <span>Our Benefits</span>
              </Link>
            </p>
            <ul className="sub-menu">
              <li
                id="menu-item-4033"
                className="menu-item menu-item-type-post_type menu-item-object-page"
              >
                <p>
                  <Link href="/strategy/employee-advantages">
                    <span>Employee Advantages</span>
                  </Link>
                </p>
              </li>
              <li
                id="menu-item-4032"
                className="menu-item menu-item-type-post_type menu-item-object-page"
              >
                <p>
                  <Link href="/strategy/workplace-culture">
                    <span>Workplace Culture</span>
                  </Link>
                </p>
              </li>
            </ul>
          </li>
          <li
            id="menu-item-3744"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children w-full md:w-1/3 hasChildren"
          >
            <p>
              <Link href="/strategy/the-process">
                <span>The Process</span>
              </Link>
            </p>
            <ul className="sub-menu">
              <li
                id="menu-item-4044"
                className="menu-item menu-item-type-post_type menu-item-object-page"
              >
                <p>
                  <Link href="/strategy/methodology">
                    <span>Methodology</span>
                  </Link>
                </p>
              </li>
              <li
                id="menu-item-4045"
                className="menu-item menu-item-type-post_type menu-item-object-page"
              >
                <p>
                  <Link href="/strategy/implementation">
                    <span>Implementation</span>
                  </Link>
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </li>
  );
}
