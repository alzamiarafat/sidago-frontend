"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";

/** Sidago office list + detail copy. Chicago address from published Sidago USA footer; others route via hello@sidago.com for full postal details. */
const OFFICES = [
  {
    id: "chicago",
    label: "Chicago, USA",
    addressLines: [
      "Sidago USA, Chicago",
      "111 West Jackson, Suite 34450",
      "Chicago, IL 60604, United States",
    ],
    email: "contact+chicago@sidago.com",
    mapBbox: "-87.85%2C41.72%2C-87.55%2C41.92",
    mapLabel: "Chicago, United States",
  },
  {
    id: "dhaka",
    label: "Dhaka, Bangladesh",
    addressLines: [
      "Sidago Bangladesh — Dhaka",
      "Client delivery & operations hub.",
      "Request the full mailing address via email below.",
    ],
    email: "hello@sidago.com",
    mapBbox: "90.32%2C23.68%2C90.52%2C23.82",
    mapLabel: "Dhaka, Bangladesh",
  },
  {
    id: "bogra",
    label: "Bogra, Bangladesh",
    addressLines: [
      "Sidago Bangladesh — Bogra",
      "Regional delivery centre.",
      "Request the full mailing address via email below.",
    ],
    email: "hello@sidago.com",
    mapBbox: "88.98%2C24.83%2C89.06%2C24.89",
    mapLabel: "Bogra, Bangladesh",
  },
  {
    id: "bharatpur",
    label: "Bharatpur, India",
    addressLines: [
      "Sidago India — Bharatpur",
      "Operations support for partners in the region.",
      "Request the full mailing address via email below.",
    ],
    email: "hello@sidago.com",
    mapBbox: "77.86%2C27.18%2C77.96%2C27.26",
    mapLabel: "Bharatpur, India",
  },
  {
    id: "lucknow",
    label: "Lucknow, India",
    addressLines: [
      "Sidago India — Lucknow",
      "Delivery and coordination office.",
      "Request the full mailing address via email below.",
    ],
    email: "hello@sidago.com",
    mapBbox: "80.88%2C26.78%2C81.04%2C26.92",
    mapLabel: "Lucknow, India",
  },
  {
    id: "bucharest",
    label: "Bucharest, Romania",
    addressLines: [
      "Sidago — Bucharest",
      "European coverage and partner support.",
      "Request the full mailing address via email below.",
    ],
    email: "hello@sidago.com",
    mapBbox: "25.98%2C44.38%2C26.18%2C44.50",
    mapLabel: "Bucharest, Romania",
  },
  {
    id: "manila",
    label: "Manila, Philippines",
    addressLines: [
      "Sidago — Manila",
      "Asia-Pacific client operations.",
      "Request the full mailing address via email below.",
    ],
    email: "hello@sidago.com",
    mapBbox: "120.94%2C14.54%2C121.06%2C14.64",
    mapLabel: "Manila, Philippines",
  },
  {
    id: "cavite",
    label: "Cavite, Philippines",
    addressLines: [
      "Sidago — Cavite",
      "Regional delivery & support.",
      "Request the full mailing address via email below.",
    ],
    email: "hello@sidago.com",
    mapBbox: "120.82%2C14.32%2C121.02%2C14.42",
    mapLabel: "Cavite, Philippines",
  },
];

const tabButtonClass = (isActive) =>
  isActive
    ? "group relative flex w-full cursor-pointer select-none items-center rounded-2xl bg-white/[0.1] px-4 py-3 text-left text-[0.9375rem] font-medium leading-snug text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-[background-color,color,transform] duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-night-green"
    : "group relative flex w-full cursor-pointer select-none items-center rounded-2xl px-4 py-3 text-left text-[0.9375rem] font-normal leading-snug text-white/60 transition-[background-color,color,transform] duration-200 ease-out hover:bg-white/[0.04] hover:text-white/82 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-night-green";

export default function ContactOfficesMap() {
  const headingId = useId();
  const listId = useId();
  const [activeId, setActiveId] = useState(OFFICES[0].id);
  const active = OFFICES.find((o) => o.id === activeId) ?? OFFICES[0];

  return (
    <section
      className="bg-[linear-gradient(180deg,#393f3c_0%,#313634_100%)] py-block text-white"
      aria-labelledby={headingId}
    >
      <div className="container">
        <div className="max-w-[44rem]">
          <p className="text-sm uppercase tracking-[0.2em] text-[#e7512f]">
            Locations
          </p>
          <h2
            id={headingId}
            className="mt-2 text-2xl uppercase tracking-wide text-white sm:text-3xl"
          >
            Sidago office locations
          </h2>
          <p className="mt-4 text-base leading-8 text-white/76">
            Pick an office from the list; address, contact, and map update
            instantly. Sidago also collaborates with remote teams worldwide.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,18rem)_1fr] lg:items-start lg:gap-10">
          <div
            className="rounded-[1.5rem] bg-white/[0.035] p-3 ring-1 ring-white/[0.06] backdrop-blur-sm"
            role="tablist"
            aria-label="Office locations"
            aria-orientation="vertical"
            id={listId}
          >
            <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
              {OFFICES.map((office, index) => {
                const selected = office.id === activeId;
                return (
                  <li key={office.id} className="list-none">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-controls={`${listId}-panel`}
                      id={`${listId}-tab-${office.id}`}
                      tabIndex={selected ? 0 : -1}
                      onClick={() => setActiveId(office.id)}
                      onKeyDown={(e) => {
                        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                          e.preventDefault();
                          setActiveId(
                            OFFICES[(index + 1) % OFFICES.length].id,
                          );
                        }
                        if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                          e.preventDefault();
                          setActiveId(
                            OFFICES[(index - 1 + OFFICES.length) % OFFICES.length]
                              .id,
                          );
                        }
                      }}
                      className={tabButtonClass(selected)}
                    >
                      <span className="min-w-0 flex-1 tracking-tight">
                        {office.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Tab panel */}
          <motion.div
            key={active.id}
            id={`${listId}-panel`}
            role="tabpanel"
            aria-labelledby={`${listId}-tab-${active.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-0 flex-col gap-6 rounded-[1.5rem] bg-white/[0.035] p-5 shadow-[0_24px_64px_rgba(0,0,0,0.16)] ring-1 ring-white/[0.06] backdrop-blur-sm md:p-7"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#e7512f]">
                Address
              </p>
              <h3 className="mt-2 text-xl uppercase tracking-wide text-white sm:text-2xl">
                {active.label}
              </h3>
              <div className="mt-4 space-y-2 text-base leading-8 text-white/84">
                {active.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className="mt-5 text-sm text-white/72">
                Email:{" "}
                <a
                  href={`mailto:${active.email}`}
                  className="font-medium text-[#ff6b47] underline decoration-[#ff6b47]/50 underline-offset-2 hover:text-[#ff8566] hover:decoration-[#ff8566]"
                >
                  {active.email}
                </a>
              </p>
            </div>

            <div className="overflow-hidden rounded-xl bg-white/[0.08]">
              <div className="aspect-[16/10] min-h-[13rem] w-full sm:min-h-[15rem]">
                <iframe
                  title={`Map preview — ${active.mapLabel}`}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${active.mapBbox}&amp;layer=mapnik`}
                />
              </div>
              <p className="px-4 py-3 text-center text-xs leading-snug text-white/65">
                Map data © OpenStreetMap contributors · Preview for{" "}
                {active.mapLabel}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
