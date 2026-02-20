"use client";

import { useScrollToTop } from "@/src/hooks/userScrollToTop";

export default function ScrollToTop() {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <div
      id="to-top"
      className={`main-bg ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      style={{ cursor: "pointer" }}
    >
      <span className="fa fa-chevron-up"></span>
    </div>
  );
}
