"use client";

import { useState } from "react";
import { ARMITAGE_FAQ } from "./data";

function FaqIcon({ open }) {
  return (
    <span className="armitage-faq__icon" aria-hidden="true">
      <span className="armitage-faq__icon-bar armitage-faq__icon-bar--h" />
      <span
        className={`armitage-faq__icon-bar armitage-faq__icon-bar--v ${
          open ? "armitage-faq__icon-bar--v-hidden" : ""
        }`}
      />
    </span>
  );
}

export default function ArmitageFaq() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="armitage-faq">
      <section className="armitage-container armitage-faq__inner" id="faq">
        <h2 className="armitage-faq__title">Frequently Asked Questions</h2>

        <div className="armitage-faq__list">
          {ARMITAGE_FAQ.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="armitage-faq__item">
                <h3 className="armitage-faq__header">
                  <button
                    type="button"
                    className="armitage-faq__trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <FaqIcon open={isOpen} />
                    {item.question}
                  </button>
                </h3>

                <div
                  className={`armitage-faq__content ${
                    isOpen ? "armitage-faq__content--open" : ""
                  }`}
                  role="region"
                  hidden={!isOpen}
                >
                  <div>
                    <p className="armitage-faq__answer">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
