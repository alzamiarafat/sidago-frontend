"use client";

import { useState } from "react";
import { TEAM_HOVER_COLORS } from "@/src/components/sections/v2/careers/CareersTeamsSection";
import WhoWeServeLinkPill from "./WhoWeServeLinkPill";
import WhoWeServePlusIcon from "./WhoWeServePlusIcon";

const ITEM_GAP_REM = 1.5;

function getAudienceHoverColor(item, index) {
  if (item.hoverColor) {
    return item.hoverColor;
  }
  return TEAM_HOVER_COLORS[index % TEAM_HOVER_COLORS.length];
}

function AccordionPanel({ item, isOpen, isDesktop }) {
  return (
    <div
      className="grid transition-[grid-template-rows] duration-500 ease-in-out"
      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
    >
      <div className="min-h-0 overflow-hidden">
        <div className={`flex gap-2xl ${isDesktop ? "lg:gap-lg" : ""}`}>
          {isDesktop ? (
            <div className="hidden w-3xl shrink-0 lg:block" aria-hidden />
          ) : null}
          <div
            className={`min-w-0 flex-1 transition-transform delay-250 duration-500 ${
              isDesktop ? "lg:text-lg" : ""
            } ${isOpen ? "translate-y-0" : "translate-y-[4rem]"}`}
          >
            <p
              className={`mt-6 max-w-[61rem] leading-relaxed text-gray-night-green transition-opacity delay-250 duration-700 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.description}
            </p>
            {item.links?.length ? (
              <div className="mt-lg flex flex-wrap gap-lg">
                {item.links.map((link) => (
                  <WhoWeServeLinkPill
                    key={`${link.href}-${link.label}`}
                    href={link.href}
                    label={link.label}
                    srText={link.srText}
                    visible={isOpen}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhoWeServeAccordionItem({
  item,
  index,
  isLast = false,
  variant = "desktop",
}) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const isDesktop = variant === "desktop";
  const isOpen = isDesktop ? hovered : expanded;
  const hoverColor = getAudienceHoverColor(item, index);

  const headerProps = isDesktop
    ? {}
    : {
        role: "button",
        tabIndex: 0,
        "aria-expanded": expanded,
        onClick: () => setExpanded((open) => !open),
        onKeyDown: (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setExpanded((open) => !open);
          }
        },
      };

  return (
    <div
      className="group/accordion w-full transition-colors duration-500"
      data-index={index}
      data-hover-color={hoverColor}
      onMouseEnter={isDesktop ? () => setHovered(true) : undefined}
      onMouseLeave={isDesktop ? () => setHovered(false) : undefined}
      style={{
        backgroundColor: isOpen ? hoverColor : "transparent",
        marginBottom: isLast ? undefined : `${ITEM_GAP_REM}rem`,
      }}
    >
      <div
        className={`container overflow-hidden transition-[padding] duration-500 ${
          isDesktop ? "lg:py-0" : ""
        }`}
        style={{
          paddingTop: isOpen ? "2rem" : 0,
          paddingBottom: isOpen ? "2rem" : "1rem",
        }}
      >
        <div
          className={`flex items-center gap-2xl ${isDesktop ? "lg:gap-lg" : "cursor-pointer"}`}
          {...headerProps}
        >
          <WhoWeServePlusIcon hovered={isOpen} />
          <div
            className={`flex-1 transition-colors duration-500 ${
              isDesktop ? "text-xl lg:text-2xl" : "text-xl"
            } ${isOpen ? "text-gray-night-green" : "text-gray-off-white"}`}
          >
            {item.title}
          </div>
        </div>

        <AccordionPanel item={item} isOpen={isOpen} isDesktop={isDesktop} />
      </div>
    </div>
  );
}
