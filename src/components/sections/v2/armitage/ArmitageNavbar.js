"use client";

import Link from "next/link";
import { useState } from "react";
import ArmitageButton from "./ArmitageButton";
import ArmitageLogo from "./ArmitageLogo";
import { ARMITAGE_NAV_LINKS } from "./data";

export default function ArmitageNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="armitage-navbar">
      <div className="armitage-navbar__inner armitage-container">
        <div className="armitage-navbar__brand">
          <Link href="/armitage" aria-label="Armitage home" onClick={() => setOpen(false)}>
            <ArmitageLogo />
          </Link>
        </div>

        <div className={`armitage-navbar__panel ${open ? "armitage-navbar__panel--open" : ""}`}>
          <nav className="armitage-navbar__links" aria-label="Primary">
            {ARMITAGE_NAV_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              ),
            )}
          </nav>

          <div className="armitage-navbar__actions">
            <ArmitageButton href="#vault" size="md" onClick={() => setOpen(false)}>
              Deposit
            </ArmitageButton>
          </div>
        </div>

        <button
          type="button"
          className="armitage-navbar__hamburger armitage-bevel-lg"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 40 41" fill="none" width="20" height="20" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0595 12.8422H30.0595V14.0326H10.0595V12.8422Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0595 20.342H30.0595V21.5325H10.0595V20.342Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0595 27.842H29.9999V29.0325H10.0595V27.842Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
