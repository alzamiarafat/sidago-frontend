"use client";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function IndustriesMenu() {
  const [openMega, setOpenMega] = useState(null);

  return (
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
  );
}
