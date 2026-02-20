"use client";

import { useState } from "react";

export default function SearchBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="top-search">
      <a
        href="#"
        // onClick={(e) => {
        //   e.preventDefault();
        //   setIsOpen(!isOpen);
        // }}
      >
        <span className="fa fa-search"></span>
      </a>
      <div className={`search-box ${isOpen ? "open" : ""}`}>
        <form method="get" action="/">
          <input
            title="Enter search keyword here..."
            type="text"
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
  );
}
