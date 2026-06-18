"use client";

import { useRef } from "react";
import ArmitageFooterAsciiCanvas from "./ArmitageFooterAsciiCanvas";
import { ARMITAGE_FOOTER_DISCLAIMERS, ARMITAGE_FOOTER_LINKS } from "./data";
import "./armitage-footer.css";

export default function ArmitageFooter() {
  const wrapperRef = useRef(null);

  return (
    <div className="armitage-footer-wrapper" ref={wrapperRef}>
      <div className="armitage-footer-backdrop" aria-hidden="true">
        <ArmitageFooterAsciiCanvas containerRef={wrapperRef} />
      </div>

      <footer className="armitage-footer">
        <div className="armitage-footer__inner armitage-container">
          <div className="armitage-footer__ascii-mobile">
            <img
              src="/images/armitage-ascii.svg"
              alt=""
              aria-hidden="true"
              className="armitage-footer__ascii-image"
            />
          </div>

          <div className="armitage-footer__brand">
            <span className="armitage-footer__powered">Powered by</span>
            <a
              href="https://www.sidago.com"
              target="_blank"
              rel="noopener noreferrer"
              className="armitage-footer__brand-link"
            >
              <div className="armitage-footer__logo">
                <div className="armitage-footer__logo-symbol" aria-hidden="true">
                  <img
                    src="/images/navbar-logo-icon.png"
                    alt=""
                    width="33"
                    height="24"
                    className="armitage-footer__logo-icon"
                  />
                </div>
                <span className="armitage-footer__logo-wordmark">SIDAGO</span>
              </div>
            </a>
          </div>

          <hr className="armitage-footer-divider" />

          <div className="armitage-footer__row">
            <nav className="armitage-footer__nav">
              {ARMITAGE_FOOTER_LINKS.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ),
              )}
            </nav>

            <div className="armitage-footer__socials">
              <a
                href="https://x.com/sidago"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="armitage-footer-social"
              >
                <svg
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path
                    d="M31.5105 3.17322H37.1329L24.8495 17.2124L39.3 36.3165H27.9854L19.1234 24.7299L8.98326 36.3165H3.3574L16.4957 21.3L2.63335 3.17322H14.2352L22.2457 13.7638L31.5105 3.17322ZM29.5372 32.9512H32.6527L12.5423 6.36177H9.19912L29.5372 32.9512Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/sidago"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="armitage-footer-social"
              >
                <svg
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path
                    d="M35.1333 3.33337H6.79999C6.13695 3.33337 5.50106 3.59677 5.03222 4.06561C4.56338 4.53445 4.29999 5.17033 4.29999 5.83337V34.1667C4.29999 34.8297 4.56338 35.4656 5.03222 35.9345C5.50106 36.4033 6.13695 36.6667 6.79999 36.6667H35.1333C35.7964 36.6667 36.4322 36.4033 36.9011 35.9345C37.3699 35.4656 37.6333 34.8297 37.6333 34.1667V5.83337C37.6333 5.17033 37.3699 4.53445 36.9011 4.06561C36.4322 3.59677 35.7964 3.33337 35.1333 3.33337ZM14.3 31.6667H9.29999V16.6667H14.3V31.6667ZM11.8 13.75C11.227 13.7337 10.6715 13.5488 10.2029 13.2185C9.73435 12.8882 9.37351 12.4272 9.16548 11.893C8.95745 11.3588 8.91144 10.7752 9.03322 10.215C9.155 9.65481 9.43915 9.14294 9.85018 8.74333C10.2612 8.34372 10.7809 8.0741 11.3443 7.96815C11.9076 7.86219 12.4898 7.92462 13.0179 8.14761C13.546 8.37061 13.9967 8.74428 14.3136 9.22196C14.6306 9.69963 14.7998 10.2601 14.8 10.8334C14.7868 11.6173 14.4639 12.3641 13.9017 12.9107C13.3396 13.4572 12.584 13.759 11.8 13.75ZM32.6333 31.6667H27.6333V23.7667C27.6333 21.4 26.6333 20.55 25.3333 20.55C24.9522 20.5754 24.5798 20.6758 24.2376 20.8456C23.8953 21.0153 23.59 21.2509 23.3391 21.539C23.0882 21.827 22.8967 22.1618 22.7756 22.5241C22.6545 22.8864 22.6061 23.269 22.6333 23.65C22.625 23.7276 22.625 23.8058 22.6333 23.8834V31.6667H17.6333V16.6667H22.4667V18.8334C22.9542 18.0917 23.624 17.4877 24.412 17.0791C25.1999 16.6705 26.0796 16.4712 26.9667 16.5C29.55 16.5 32.5667 17.9334 32.5667 22.6L32.6333 31.6667Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          <hr className="armitage-footer-divider" />

          <div className="armitage-footer__legal">
            {ARMITAGE_FOOTER_DISCLAIMERS.map((text) => (
              <p key={text.slice(0, 48)} className="armitage-footer__disclaimer">
                {text}
              </p>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
