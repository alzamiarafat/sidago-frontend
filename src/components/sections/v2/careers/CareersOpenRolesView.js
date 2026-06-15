"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Footer from "@/src/components/sections/v2/common/Footer";
import Navigation from "@/src/components/sections/v2/common/LazyNavigation";
import { DotMatrixText } from "@/src/components/sections/v2/common/DotMatrixText";
import {
  openRolesPage as defaultOpenRolesPage,
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

function JobArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className="h-5 w-5"
      aria-hidden
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
        clipRule="evenodd"
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
        {filter.label}
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
              className="careers-open-roles-filter__option"
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
            <div className="container careers-open-roles-hero__inner">
              <div>
                <h1 className="careers-open-roles-hero__title text-gray-off-white">
                  {hero.titlePrefix}{" "}
                  <span className="text-green-dark">{hero.titleHighlight}</span>
                </h1>
                <p className="careers-open-roles-hero__subtitle">
                  {hero.subtitlePrefix}{" "}
                  <Link href={hero.openApplicationHref}>
                    {hero.openApplicationLabel}
                  </Link>
                </p>
              </div>

              <div className="careers-open-roles-hero__decor" aria-hidden>
                <DotMatrixText
                  text="S"
                  active
                  dotSize={2}
                  dotSpacing={4}
                  dotColor="#E9EEE9"
                  activeDotColor="#E9EEE9"
                  fontSizeMobile={120}
                  fontSizeDesktop={280}
                  displayWidth={280}
                  displayHeight={280}
                />
              </div>
            </div>
          </section>

          <section className="container">
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
                        className="careers-open-roles-job"
                      >
                        <div className="careers-open-roles-job__row">
                          <span className="careers-open-roles-job__arrow">
                            <JobArrowIcon />
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
                                {role.workType}
                              </span>
                              <span className="careers-open-roles-job__tag">
                                {role.location}
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
          </section>

          <Footer footer={footer} />
        </main>
      </div>
    </div>
  );
}
