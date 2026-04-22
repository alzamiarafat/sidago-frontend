"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getServiceMenuContext } from "@/src/utils/serviceUtils";
import {
  getIndustryMenuContext,
  getIndustryMenuGroups,
} from "@/src/utils/navigationTabUtils";

function getItemId(prefix, value, suffix) {
  return `${prefix}-${value.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${suffix}`;
}

function getServiceIntroContent(groupTitle = "") {
  const introByGroup = {
    "Development & IT": {
      introTitle: "Digital products built for scale and speed",
      introDescription:
        "From engineering delivery to technical execution, we support modern teams with dependable development services tailored to product growth, performance, and long-term scalability.",
    },
    "Administrative Support": {
      introTitle: "Operational support that keeps work moving",
      introDescription:
        "We help teams stay focused by streamlining daily operations through reliable administrative support, structured workflows, and efficient task execution across business functions.",
    },
    "Advertising & Marketing": {
      introTitle: "Growth-focused marketing support for modern brands",
      introDescription:
        "From audience reach to campaign execution, our marketing services help businesses improve visibility, generate demand, and build stronger customer engagement across channels.",
    },
    "Design & Multimedia": {
      introTitle: "Creative services that elevate every brand touchpoint",
      introDescription:
        "We deliver design and multimedia solutions that strengthen visual identity, improve communication, and create polished digital experiences across platforms and campaigns.",
    },
    "Business Services": {
      introTitle: "Business support designed for efficient execution",
      introDescription:
        "Our business services help organizations operate with more clarity and consistency through structured support across planning, analysis, customer operations, and back-office delivery.",
    },
  };

  return (
    introByGroup[groupTitle] ?? {
      introTitle: "Specialized services designed for execution",
      introDescription:
        "We provide practical service support across business-critical functions, helping teams improve delivery quality, operational consistency, and day-to-day execution.",
    }
  );
}

function resolveConfig(type, slug) {
  if (type === "industry") {
    return {
      menuContext: getIndustryMenuContext(slug),
      groups: getIndustryMenuGroups(),
      introTitle: "Specialized solutions for modern industries",
      introDescription:
        "Empowering industry-focused teams with adaptable service models, strategic execution, and dependable delivery across every business function.",
      imageSrc: "/images/Secondary-About.svg",
      imageAltPrefix: "industries",
      panelClassName: "bg-[#66ff9a]",
    };
  }

  const menuContext = getServiceMenuContext(slug);
  const { introTitle, introDescription } = getServiceIntroContent(
    menuContext?.group?.title,
  );

  return {
    menuContext,
    groups: null,
    introTitle,
    introDescription,
    imageSrc:
      "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/17212522/Governance-Pyth.svg",
    imageAltPrefix: "services",
    panelClassName: "bg-[#66ff9a]",
  };
}

export default function ContentTab({ slug = "", type = "service" }) {
  const {
    menuContext,
    groups,
    introTitle,
    introDescription,
    imageSrc,
    imageAltPrefix,
    panelClassName,
  } =
    resolveConfig(type, slug);

  const [expandedGroup, setExpandedGroup] = useState(
    menuContext?.group?.title ?? groups?.[0]?.title ?? "",
  );
  const [activeHref, setActiveHref] = useState(() => {
    if (menuContext?.currentItem?.href) {
      return menuContext.currentItem.href;
    }

    if (groups?.length) {
      return groups[0]?.children?.[0]?.href ?? groups[0]?.href ?? "";
    }

    return menuContext?.tabs?.[0]?.href ?? "";
  });

  const activeEntry = useMemo(() => {
    if (groups?.length) {
      for (const group of groups) {
        if (group.href === activeHref) {
          return { group, item: group };
        }

        for (const child of group.children ?? []) {
          if (child.href === activeHref) {
            return { group, item: child };
          }
        }
      }

      const fallbackGroup = groups[0];
      const fallbackItem = fallbackGroup?.children?.[0] ?? fallbackGroup;

      return fallbackGroup && fallbackItem
        ? { group: fallbackGroup, item: fallbackItem }
        : null;
    }

    if (!menuContext || !menuContext.tabs?.length) {
      return null;
    }

    const activeTab =
      menuContext.tabs.find((item) => item.href === activeHref) ??
      menuContext.tabs[0] ??
      menuContext.currentItem;

    return {
      group: menuContext.group,
      item: activeTab,
    };
  }, [activeHref, groups, menuContext]);

  if (!activeEntry) {
    return null;
  }

  const group = activeEntry.group;
  const activeItem = activeEntry.item;
  const activeTitle = activeItem?.title || group?.title;
  const activeDescription =
    type === "industry" &&
    (activeItem?.href === group?.href || !(group?.children ?? []).length)
      ? `${activeTitle} is one of the industries submenu items in the navbar.`
      : `${activeTitle} is one of the child menu items under ${group?.title} in the navbar submenu.`;
  const getTabId = (item) => getItemId(imageAltPrefix, item.title, "tab");
  const getPanelId = (item) => getItemId(imageAltPrefix, item.title, "panel");

  const tabButtonClass = (isActive) =>
    `group relative flex min-h-[3.7rem] w-full cursor-pointer select-none items-center justify-start overflow-hidden bg-transparent px-5 py-3 text-left transition duration-300 ${
      isActive
        ? "text-gray-off-white"
        : "text-gray-off-white/82 hover:text-gray-tradfi-silver"
    }`;

  return (
    <section className="bg-gray-defi-shadow">
      <div className="container py-block">
        {introTitle ? (
          <div className="mb-3xl flex flex-col gap-xl">
            <div className="flex flex-col gap-xs">
              <h2
                id="a-decentralized-world-needs-strong-governance"
                className="font-blender text-xl uppercase text-green-dark"
              >
                {introTitle}
              </h2>
              <div className="text-gray-off-white">{introDescription}</div>
            </div>
            <hr className="!border-[#AB290E]" />
          </div>
        ) : null}

        <section className="flex flex-col gap-5 md:flex-row md:items-stretch">
          <div className="md:h-[23.75rem] md:w-[18rem] md:shrink-0">
            <div
              role="tablist"
              aria-label={`${group?.title} child menu`}
              aria-orientation="vertical"
              className="flex h-full flex-col gap-2"
            >
              {groups?.length
                ? groups.map((menuGroup) => {
                    const hasChildren = (menuGroup.children ?? []).length > 0;
                    const isExpanded = expandedGroup === menuGroup.title;
                    const isGroupActive = activeHref === menuGroup.href;

                    return (
                      <div
                        key={menuGroup.title}
                        className="overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() => {
                            if (hasChildren) {
                              setExpandedGroup((current) =>
                                current === menuGroup.title ? "" : menuGroup.title,
                              );
                              return;
                            }

                            setExpandedGroup(menuGroup.title);
                            setActiveHref(menuGroup.href);
                          }}
                          className={`${tabButtonClass(isGroupActive)} justify-between`}
                        >
                          {isGroupActive ? (
                            <motion.span
                              layoutId="content-tab-active-pill"
                              className="absolute inset-0 bg-[#e7512f]"
                              transition={{
                                type: "spring",
                                stiffness: 240,
                                damping: 26,
                                mass: 0.9,
                              }}
                            />
                          ) : null}
                          <span className="relative z-10">{menuGroup.title}</span>
                          {hasChildren ? (
                            <motion.span
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.24, ease: "easeOut" }}
                              className="relative z-10 text-[0.7rem] opacity-75"
                            >
                              ▼
                            </motion.span>
                          ) : null}
                        </button>

                        <AnimatePresence initial={false}>
                          {hasChildren && isExpanded ? (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.28,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-2 pl-4">
                                {menuGroup.children.map((item) => {
                                  const isActive = item.href === activeHref;

                                  return (
                                    <button
                                      key={item.href}
                                      id={getTabId(item)}
                                      type="button"
                                      role="tab"
                                      aria-selected={isActive}
                                      aria-controls={getPanelId(item)}
                                      tabIndex={isActive ? 0 : -1}
                                      onClick={() => setActiveHref(item.href)}
                                      className={tabButtonClass(isActive)}
                                    >
                                      {isActive ? (
                                        <motion.span
                                          layoutId="content-tab-active-pill"
                                          className="absolute inset-0 bg-[#e7512f]"
                                          transition={{
                                            type: "spring",
                                            stiffness: 240,
                                            damping: 26,
                                            mass: 0.9,
                                          }}
                                        />
                                      ) : null}
                                      <span
                                        className={`relative z-10 mr-3 h-[1px] w-3 transition ${
                                          isActive
                                            ? "bg-white/90"
                                            : "bg-white/35 group-hover:bg-white/55"
                                        }`}
                                      />
                                      <motion.span
                                        className="relative z-10"
                                        animate={{
                                          x: isActive ? 6 : 0,
                                          opacity: isActive ? 1 : 0.84,
                                        }}
                                        transition={{
                                          duration: 0.22,
                                          ease: "easeOut",
                                        }}
                                      >
                                        {item.title}
                                      </motion.span>
                                    </button>
                                  );
                                })}
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    );
                  })
                : menuContext.tabs.map((item) => {
                    const isActive = item.href === activeHref;
                    const tabId = getTabId(item);
                    const panelId = getPanelId(item);

                    return (
                      <button
                        key={item.href}
                        id={tabId}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={panelId}
                        tabIndex={isActive ? 0 : -1}
                        onClick={() => setActiveHref(item.href)}
                        className={tabButtonClass(isActive)}
                      >
                        {isActive ? (
                          <motion.span
                            layoutId="content-tab-active-pill"
                            className="absolute inset-0 bg-[#e7512f]"
                            transition={{
                              type: "spring",
                              stiffness: 240,
                              damping: 26,
                              mass: 0.9,
                            }}
                          />
                        ) : null}
                        <motion.span
                          className="relative z-10"
                          animate={{
                            x: isActive ? 6 : 0,
                            opacity: isActive ? 1 : 0.84,
                          }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                        >
                          {item.title}
                        </motion.span>
                      </button>
                    );
                  })}
            </div>
          </div>

          <div className="relative min-w-0 flex-1 md:h-[23.75rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.href}
                id={getPanelId(activeItem)}
                role="tabpanel"
                aria-labelledby={getTabId(activeItem)}
                initial={{ opacity: 0, scale: 0.992, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.996, filter: "blur(6px)" }}
                transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col overflow-hidden transition-all bevel md:h-full md:flex-row-reverse ${panelClassName} shadow-[0_24px_50px_rgba(0,0,0,0.2)]`}
              >
                <div className="h-[15.75rem] bevel md:h-full md:flex-1">
                  <img
                    alt={activeDescription}
                    width="1152"
                    height="1152"
                    decoding="async"
                    data-nimg="1"
                    className="h-full w-full object-cover"
                    style={{ color: "transparent" }}
                    src={imageSrc}
                  />
                </div>
                <motion.div
                  className="flex flex-col justify-end px-4 py-6 md:flex-1 md:px-6 text-gray-night-green"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.08, delayChildren: 0.06 },
                    },
                  }}
                >
                  <motion.div
                    className="text-sm md:text-xl"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  >
                    {activeDescription}
                  </motion.div>
                  <motion.div
                    className="mt-4 text-xs uppercase tracking-[0.18em] opacity-80"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                  >
                    {group?.title}
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </div>
    </section>
  );
}
