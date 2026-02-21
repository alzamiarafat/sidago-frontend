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
  );
}
