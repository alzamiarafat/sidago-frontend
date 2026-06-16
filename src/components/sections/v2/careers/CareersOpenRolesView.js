"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import CTASection from "@/src/components/sections/v2/common/CTA";
import BevelNavArrow from "@/src/components/sections/v2/common/BevelNavArrow";
import {
  openRolesPage as defaultOpenRolesPage,
  openRolesPageCta,
} from "@/src/components/sections/v2/careers/data";
import "@/src/components/sections/v2/careers/careers-open-roles.css";

function ChevronIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      fill="none"
      className="careers-open-roles-filter__chevron"
      aria-hidden
    >
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FilterDropdown({ filter, value, onChange, isOpen, onToggle, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointer = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  return (
    <div className="careers-open-roles-filter" ref={ref}>
      <button
        type="button"
        className="careers-open-roles-filter__btn"
        style={{ backgroundColor: filter.color }}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={onToggle}
      >
        <span className="careers-open-roles-filter__label">{filter.label}</span>
        <ChevronIcon />
      </button>
      {isOpen ? (
        <div
          className="careers-open-roles-filter__menu"
          role="listbox"
          aria-label={filter.label}
        >
          {filter.options.map((option) => (
            <button
              key={option}
              type="button"
              role="option"
              aria-selected={value === option}
              className={`careers-open-roles-filter__option${
                value === option ? " careers-open-roles-filter__option--selected" : ""
              }`}
              onClick={() => {
                onChange(option);
                onClose();
              }}
            >
              {option}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function groupRolesByDepartment(roles) {
  const groups = new Map();

  for (const role of roles) {
    const dept = role.department || "OTHER";
    if (!groups.has(dept)) groups.set(dept, []);
    groups.get(dept).push(role);
  }

  return Array.from(groups.entries()).map(([department, items]) => ({
    department,
    items,
  }));
}

function roleMatchesFilters(role, filters) {
  return (
    (filters.locationType === "All" ||
      role.locationType === filters.locationType) &&
    (filters.location === "All" || role.location === filters.location) &&
    (filters.team === "All" || role.team === filters.team) &&
    (filters.workType === "All" || role.workType === filters.workType)
  );
}

export default function CareersOpenRolesView({
  footer,
  page = defaultOpenRolesPage,
}) {
  const { hero, filters, roles } = page;
  const [openFilterKey, setOpenFilterKey] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState(() =>
    Object.fromEntries(filters.map((filter) => [filter.key, "All"])),
  );

  const closeFilter = useCallback(() => setOpenFilterKey(null), []);

  const filteredRoles = useMemo(
    () => roles.filter((role) => roleMatchesFilters(role, selectedFilters)),
    [roles, selectedFilters],
  );

  const groupedRoles = useMemo(
    () => groupRolesByDepartment(filteredRoles),
    [filteredRoles],
  );

  const handleFilterChange = (key, value) => {
    setSelectedFilters((current) => ({ ...current, [key]: value }));
  };

  return (
    <div className="careers-open-roles-page flex min-h-svh flex-col text-base">
      <Navigation />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <main className="relative flex-1 [&_*]:scroll-mt-[calc(var(--header-height)+1.5rem)]">
          <section className="careers-open-roles-hero">
            <div className="container py-block">
              <div className="relative">
                <div className="flex flex-col gap-6 lg:gap-8">
                  <h1
                    className="z-10 inline-block max-w-[60%] text-2xl lg:text-3xl"
                    id="careers-opportunities-heading"
                  >
                    {hero.titlePrefix}{" "}
                    <span className="text-green-dark">{hero.titleHighlight}</span>
                  </h1>
                  <p className="z-10 max-w-[85%] text-base md:max-w-[70%]">
                    {hero.subtitlePrefix} {hero.openApplicationLabel}
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex w-[40%] items-center justify-end md:w-[32%] lg:w-[22%]">
                  <Image
                    alt=""
                    src="/images/navbar-logo-icon.png"
                    width={560}
                    height={446}
                    unoptimized
                    className="h-auto w-full max-w-[9.5rem] sm:max-w-[10.5rem] md:max-w-[12rem] lg:max-w-[14rem]"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="careers-open-roles-content">
            <div className="container careers-open-roles-content__inner">
              <div className="careers-open-roles-filters">
              {filters.map((filter) => (
                <FilterDropdown
                  key={filter.key}
                  filter={filter}
                  value={selectedFilters[filter.key]}
                  isOpen={openFilterKey === filter.key}
                  onToggle={() =>
                    setOpenFilterKey((current) =>
                      current === filter.key ? null : filter.key,
                    )
                  }
                  onClose={closeFilter}
                  onChange={(value) => handleFilterChange(filter.key, value)}
                />
              ))}
            </div>

            <div className="careers-open-roles-list">
              {groupedRoles.length === 0 ? (
                <p className="careers-open-roles-empty">
                  No roles match your filters. Try adjusting your selection.
                </p>
              ) : (
                groupedRoles.map(({ department, items }) => (
                  <section
                    key={department}
                    className="careers-open-roles-dept"
                    aria-label={department}
                  >
                    <h2 className="careers-open-roles-dept__label">
                      {department}
                    </h2>
                    <hr className="careers-open-roles-dept__rule" />
                    {items.map((role) => (
                      <Link
                        key={role.id}
                        href={role.href}
                        className="careers-open-roles-job group/interactive"
                      >
                        <div className="careers-open-roles-job__row">
                          <span className="careers-open-roles-job__arrow">
                            <BevelNavArrow className="careers-open-roles-job__arrow-icon ml-[--arrow-offset] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset]" />
                          </span>
                          <div>
                            <h3 className="careers-open-roles-job__title">
                              {role.title}
                            </h3>
                            <div className="careers-open-roles-job__tags">
                              <span className="careers-open-roles-job__tag">
                                {role.locationType}
                              </span>
                              <span className="careers-open-roles-job__tag">
                                {role.location}
                              </span>
                              <span className="careers-open-roles-job__tag">
                                {role.workType}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </section>
                ))
              )}
            </div>
            </div>
          </section>

          <CTASection items={openRolesPageCta} />
          <Footer footer={footer} />
        </main>
      </div>
    </div>
  );
}
