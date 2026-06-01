"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ARROW_PATH =
  "M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z";

/** Hover panel backgrounds — one color per team. */
export const TEAM_HOVER_COLORS = ["#958DEC", "#EC9BE5", "#EF7B7B", "#7FB2F1"];

const ITEM_GAP_REM = 3.5;

function getTeamHoverColor(item, index) {
  if (item.hoverColor) return item.hoverColor;
  return TEAM_HOVER_COLORS[index % TEAM_HOVER_COLORS.length];
}

function PlusIcon({ hovered }) {
  const barClass = hovered ? "bg-gray-night-green" : "bg-green-dark";

  return (
    <div className="relative flex h-3xl w-3xl shrink-0 items-center justify-center text-green-dark">
      <div className={`absolute h-[3.75%] w-[50%] transition-all duration-500 ${barClass}`} />
      <div
        className={`absolute h-[50%] w-[3.75%] rotate-0 transition-all duration-500 ${barClass} ${hovered ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
          }`}
      />
    </div>
  );
}

function TeamCtaLink({ href, label, srText, visible }) {
  return (
    <Link
      href={href}
      style={{ position: "relative" }}
      className={`group/interactive gap-md inline-flex items-center justify-between font-medium disabled:opacity-50 bevel bevel-[0.25rem] px-sm py-xs text-base bg-gray-defi-charcoal text-green-dark transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"
        }`}
    >
      {srText ? <span className="sr-only">{srText}</span> : null}
      {label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        className="ml-[--arrow-offset] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset]"
        style={{ "--arrow-offset": "0.4rem", width: "1rem" }}
        aria-hidden
      >
        <path fill="currentColor" fillRule="evenodd" d={ARROW_PATH} clipRule="evenodd" />
      </svg>
    </Link>
  );
}

function TeamAccordionItem({ item, index, isLast }) {
  const [hovered, setHovered] = useState(false);
  const hoverColor = getTeamHoverColor(item, index);
  const imageSrc = item.image?.src?.startsWith("/")
    ? item.image.src
    : `/${item.image?.src ?? ""}`.replace(/^\/\//, "/");

  return (
    <div
      className="group/accordion w-full transition-colors duration-500"
      data-index={index}
      data-hover-color={hoverColor}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? hoverColor : "transparent",
        marginBottom: isLast ? undefined : `${ITEM_GAP_REM}rem`,
      }}
    >
      <div
        className="teams-accordion-inner container overflow-hidden transition-[padding] duration-500"
        style={{
          paddingTop: hovered ? "2.5rem" : 0,
          paddingBottom: hovered ? "2.5rem" : "2rem",
        }}
      >
        <div className="teams-accordion-header flex items-center gap-2xl lg:gap-lg">
          <PlusIcon hovered={hovered} />
          <div
            className={`teams-accordion-title flex-1 text-xl transition-colors duration-500 lg:text-2xl ${hovered ? "text-gray-night-green" : "text-gray-off-white"
              }`}
          >
            {item.title}
          </div>
        </div>

        <div
          className="grid transition-[grid-template-rows] duration-500 ease-in-out"
          style={{ gridTemplateRows: hovered ? "1fr" : "0fr" }}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="teams-accordion-panel flex flex-col-reverse gap-6 lg:flex-row lg:gap-20">
              <div className="min-w-0 flex-1">
                <div className="flex gap-2xl lg:gap-lg">
                  <div className="hidden w-3xl shrink-0 lg:block" aria-hidden />
                  <div className="min-w-0 flex-1 lg:text-lg">
                    <p
                      className={`teams-accordion-description mt-6 max-w-[61rem] leading-relaxed text-gray-night-green transition-opacity delay-250 duration-700 ${hovered ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      {item.description}
                    </p>
                    {item.links?.length ? (
                      <div className="mt-lg flex flex-wrap gap-lg">
                        {item.links.map((link) => (
                          <TeamCtaLink
                            key={`${link.href}-${link.label}`}
                            href={link.href}
                            label={link.label}
                            srText={link.srText}
                            visible={hovered}
                          />
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              {item.image?.src ? (
                <div
                  className={`hidden w-[17.125rem] shrink-0 overflow-hidden transition-all duration-500 lg:block ${hovered ? "h-[14.8125rem] opacity-100" : "h-0 opacity-0"
                    }`}
                >
                  <div className="bevel relative h-[14.8125rem] overflow-hidden">
                    <Image
                      alt={item.image.alt ?? item.title}
                      src={imageSrc}
                      width={item.image.width ?? 1152}
                      height={item.image.height ?? 1182}
                      className="h-full w-full min-w-[17.125rem] object-cover"
                      sizes="17rem"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Careers teams: compact list + hover expand (per-item panel color).
 */
export default function CareersTeamsSection({
  lead = "Sidago",
  highlight = "teams",
  headingId = "sidago-teams",
  items = [],
  className = "bg-gray-defi-shadow text-gray-off-white",
  titleClassName = "z-10 inline-block max-w-[60%] text-2xl text-white lg:text-3xl",
  highlightClassName = "text-green-dark",
}) {
  const orderedItems = items
    .slice()
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));

  return (
    <section className={className}>
      <div className="container flex flex-col gap-none py-block pb-xl">
        <div className="relative">
          <div className="flex flex-col gap-6 lg:gap-8">
            <h2 id={headingId} className={titleClassName}>
              {lead ? <>{lead} </> : null}
              {highlight ? (
                <span className={highlightClassName}>{highlight}</span>
              ) : null}
            </h2>
          </div>
        </div>
      </div>
      <div className="hidden w-full flex-col lg:flex">
        {orderedItems.map((item, index) => (
          <TeamAccordionItem
            key={item.title}
            item={item}
            index={index}
            isLast={index === orderedItems.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
