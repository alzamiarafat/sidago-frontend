"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getServiceMenuContext } from "@/src/utils/serviceUtils";
import {
  getIndustryMenuContext,
  getIndustryMenuGroups,
  getServiceMenuGroups,
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

function getDescriptionContent(title = "") {
  const contentByTitle = {
    "E-Commerce": {
      title: "E-Commerce",
      eyebrow: "Digital commerce delivery",
      paragraphs: [
        "Having an online business has become a great opportunity for many people all around the world. This is thanks to a few things which includes the growth in ecommerce and the advancement in technology. Not to mention, the overhead is less with a digital business than with a traditional storefront.",
        "Once you get your domain registered, your next goal should be getting the necessary e-commerce services needed to set up a secure payment system and online storefront that provides your customers with the most enjoyable shopping experience possible. This is the key to achieving success through your digital efforts.",
        "Another aspect that you have to keep in mind is the safety of your customers' information. With growing concern in the area of internet security, we thought it was only right that we develop our own internal team, software, and processes dedicated to helping eliminate that concern among our clients. Sidago offers secure payment platforms and solutions to a wide array of industries. Whether you need to make your current e-commerce store more secure or you need a complete design, we have the experts needed to get the job done right the first time.",
        "Here at Sidago Integrated Solutions, we're determined to help you overcome any issues that may arise and help you make the most of the modernized era that we've found ourselves doing business in.",
      ],
      highlights: [
        {
          value: "01",
          label: "Storefront design",
        },
        {
          value: "02",
          label: "Secure payments",
        },
        {
          value: "03",
          label: "Customer data protection",
        },
      ],
      callout: "Get in touch with one of our e-commerce experts today!",
    },
  };

  return contentByTitle[title] ?? null;
}

const systemAdministrationMenu = {
  title: "System Administration",
  href: "/services/server-administration/",
  children: [
    {
      title: "Amazon AWS Administration",
      href: "/services/amazon-aws-administration/",
    },
    {
      title: "Cloud Server Administration",
      href: "/services/cloud-server-administration/",
    },
    {
      title: "cPanel/ DirectAdmin/ LAMP Administration",
      href: "/services/cpanel-directadmin-lamp-administration/",
    },
    { title: "DNS Services", href: "/services/dns-services/" },
    { title: "Email Servers", href: "/services/email-servers/" },
    {
      title: "Enterprise Email Solutions",
      href: "/services/enterprise-email-solutions/",
    },
    { title: "Enterprise Solutions", href: "/services/enterprise-solutions/" },
    {
      title: "Hosting Infrastructure",
      href: "/services/hosting-infrastructure/",
    },
    {
      title: "International Server Structures",
      href: "/services/international-server-structures/",
    },
    { title: "Server Scalability", href: "/services/server-scalability/" },
    {
      title: "Servers & System Administration",
      href: "/services/servers-system-administration/",
    },
    { title: "Troubleshooting", href: "/services/troubleshooting/" },
    {
      title: "Search Engine Optimization",
      href: "/services/search-engine-optimization/",
    },
  ],
};

function getSystemAdministrationContext(slug = "", menuContext = null) {
  const currentPath = `/services/${slug}`;
  const activeChild = systemAdministrationMenu.children.find(
    (item) => item.href.replace(/\/$/, "") === currentPath,
  );
  const parentContext =
    menuContext ?? getServiceMenuContext("server-administration");
  const isParent =
    systemAdministrationMenu.href.replace(/\/$/, "") === currentPath ||
    menuContext?.currentItem?.title === systemAdministrationMenu.title;

  if (!activeChild && !isParent) {
    return null;
  }

  return {
    group: parentContext?.group ?? systemAdministrationMenu,
    currentItem:
      activeChild ?? parentContext?.currentItem ?? systemAdministrationMenu,
    tabs: parentContext?.tabs ?? systemAdministrationMenu.children,
  };
}

function getNestedServiceMenu(item) {
  if (
    item?.href === systemAdministrationMenu.href ||
    item?.title === systemAdministrationMenu.title
  ) {
    return systemAdministrationMenu;
  }

  return null;
}

function getServiceTabsWithNestedMenus(tabs = []) {
  const hasSystemAdministration = tabs.some(
    (item) =>
      item.href === systemAdministrationMenu.href ||
      item.title === systemAdministrationMenu.title,
  );

  if (hasSystemAdministration) {
    return tabs.map((item) =>
      item.href === systemAdministrationMenu.href ||
      item.title === systemAdministrationMenu.title
        ? { ...item, ...systemAdministrationMenu }
        : item,
    );
  }

  return [systemAdministrationMenu, ...tabs];
}

function getServiceMenuGroupsWithNestedMenus() {
  return getServiceMenuGroups().map((group) => ({
    ...group,
    children: (group.children ?? []).map((item) =>
      item.href === systemAdministrationMenu.href ||
      item.title === systemAdministrationMenu.title
        ? { ...item, ...systemAdministrationMenu }
        : item,
    ),
  }));
}

function findEntryInGroups(groups = [], activeHref = "") {
  const findInItems = (items = [], group) => {
    for (const item of items) {
      if (item.href === activeHref) {
        return { group, item };
      }

      const nestedMatch = findInItems(item.children ?? [], group);

      if (nestedMatch) {
        return nestedMatch;
      }
    }

    return null;
  };

  for (const group of groups) {
    if (group.href === activeHref) {
      return { group, item: group };
    }

    const itemMatch = findInItems(group.children ?? [], group);

    if (itemMatch) {
      return itemMatch;
    }
  }

  return null;
}

function hasActiveDescendant(item, activeHref) {
  return (item.children ?? []).some(
    (child) =>
      child.href === activeHref || hasActiveDescendant(child, activeHref),
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
      panelClassName: "",
      panelStyle: { backgroundColor: "#66ff9a" },
    };
  }

  const baseMenuContext = getServiceMenuContext(slug);
  const menuContext =
    getSystemAdministrationContext(slug, baseMenuContext) ?? baseMenuContext;
  const { introTitle, introDescription } = getServiceIntroContent(
    menuContext?.group?.title,
  );

  return {
    menuContext,
    groups: getServiceMenuGroupsWithNestedMenus(),
    introTitle,
    introDescription,
    imageSrc:
      "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/17212522/Governance-Pyth.svg",
    imageAltPrefix: "services",
    panelClassName: "bg-purple-light",
    panelStyle: undefined,
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
    panelStyle,
  } = resolveConfig(type, slug);

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
  const [expandedServiceMenu, setExpandedServiceMenu] = useState("");

  const activeEntry = useMemo(() => {
    if (groups?.length) {
      const activeMatch = findEntryInGroups(groups, activeHref);

      if (activeMatch) {
        return activeMatch;
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
      systemAdministrationMenu.children.find(
        (item) => item.href === activeHref,
      ) ??
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
  const serviceTabs = getServiceTabsWithNestedMenus(menuContext?.tabs ?? []);
  const activeTitle = activeItem?.title || group?.title;
  const descriptionContent = getDescriptionContent(activeTitle);
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

  const renderNestedTabItem = (item, level = 1) => {
    const hasChildren = (item.children ?? []).length > 0;
    const isExpanded = expandedServiceMenu === item.href;
    const isActive =
      item.href === activeHref || hasActiveDescendant(item, activeHref);

    if (hasChildren) {
      return (
        <div key={item.href} className="overflow-hidden">
          <button
            type="button"
            aria-expanded={isExpanded}
            onClick={() =>
              setExpandedServiceMenu((current) =>
                current === item.href ? "" : item.href,
              )
            }
            className={`${tabButtonClass(isActive)} justify-between`}
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
            <span className="relative z-10">{item.title}</span>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="relative z-10 text-[0.7rem] opacity-75"
            >
              ▼
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {isExpanded ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: {
                      transition: {
                        staggerChildren: 0.025,
                        delayChildren: 0.04,
                      },
                    },
                    collapsed: {},
                  }}
                  className={`flex flex-col gap-2 ${level ? "pl-4" : ""}`}
                >
                  {item.children.map((child) =>
                    renderNestedTabItem(child, level + 1),
                  )}
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <motion.button
        key={item.href}
        id={getTabId(item)}
        type="button"
        role="tab"
        aria-selected={isActive}
        aria-controls={getPanelId(item)}
        tabIndex={isActive ? 0 : -1}
        onClick={() => setActiveHref(item.href)}
        className={tabButtonClass(isActive)}
        variants={{
          open: { opacity: 1, y: 0 },
          collapsed: { opacity: 0, y: -6 },
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
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
        {level > 1 ? (
          <span
            className={`relative z-10 mr-3 h-[1px] w-3 transition ${
              isActive ? "bg-white/90" : "bg-white/35 group-hover:bg-white/55"
            }`}
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
      </motion.button>
    );
  };

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
          <div className="min-h-0 md:w-[18rem] md:shrink-0">
            <div
              role="tablist"
              aria-label={`${group?.title} child menu`}
              aria-orientation="vertical"
              className="sidago-content-scroll flex min-h-0 max-h-[34rem] flex-col gap-2 overflow-y-auto pr-2"
              style={{
                scrollbarColor: "#e7512f rgba(255, 255, 255, 0.16)",
              }}
            >
              {groups?.length
                ? groups.map((menuGroup) => {
                    const hasChildren = (menuGroup.children ?? []).length > 0;
                    const isExpanded = expandedGroup === menuGroup.title;
                    const isGroupActive =
                      activeHref === menuGroup.href ||
                      hasActiveDescendant(menuGroup, activeHref);

                    return (
                      <div key={menuGroup.title} className="overflow-hidden">
                        <button
                          type="button"
                          onClick={() => {
                            if (hasChildren) {
                              setExpandedGroup((current) =>
                                current === menuGroup.title
                                  ? ""
                                  : menuGroup.title,
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
                          <span className="relative z-10">
                            {menuGroup.title}
                          </span>
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
                                {menuGroup.children.map((item) =>
                                  renderNestedTabItem(item, 1),
                                )}
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    );
                  })
                : serviceTabs.map((item) => {
                    const nestedMenu = getNestedServiceMenu(item);
                    const isNestedExpanded =
                      nestedMenu?.href === expandedServiceMenu;
                    const activeSystemChild =
                      nestedMenu?.children.some(
                        (child) => child.href === activeHref,
                      ) ?? false;
                    const isActive =
                      item.href === activeHref || activeSystemChild;
                    const tabId = getTabId(item);
                    const panelId = getPanelId(item);

                    if (nestedMenu) {
                      return (
                        <div key={item.href} className="overflow-hidden">
                          <button
                            id={tabId}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            aria-controls={panelId}
                            aria-expanded={isNestedExpanded}
                            tabIndex={isActive ? 0 : -1}
                            onClick={() =>
                              setExpandedServiceMenu((current) =>
                                current === nestedMenu.href
                                  ? ""
                                  : nestedMenu.href,
                              )
                            }
                            className={`${tabButtonClass(isActive)} justify-between`}
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
                            <motion.span
                              animate={{
                                rotate: isNestedExpanded ? 180 : 0,
                              }}
                              transition={{ duration: 0.24, ease: "easeOut" }}
                              className="relative z-10 text-[0.7rem] opacity-90"
                            >
                              ▼
                            </motion.span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isNestedExpanded ? (
                              <motion.div
                                id={`${getItemId(
                                  imageAltPrefix,
                                  nestedMenu.title,
                                  "menu",
                                )}`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.3,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                                className="overflow-hidden"
                              >
                                <motion.div
                                  initial="collapsed"
                                  animate="open"
                                  exit="collapsed"
                                  variants={{
                                    open: {
                                      transition: {
                                        staggerChildren: 0.025,
                                        delayChildren: 0.04,
                                      },
                                    },
                                    collapsed: {},
                                  }}
                                  className="flex flex-col gap-2 pl-4"
                                >
                                  {nestedMenu.children.map((child) => {
                                    const isChildActive =
                                      child.href === activeHref;

                                    return (
                                      <motion.button
                                        key={child.href}
                                        id={getTabId(child)}
                                        type="button"
                                        role="tab"
                                        aria-selected={isChildActive}
                                        aria-controls={getPanelId(child)}
                                        tabIndex={isChildActive ? 0 : -1}
                                        onClick={() =>
                                          setActiveHref(child.href)
                                        }
                                        className={tabButtonClass(
                                          isChildActive,
                                        )}
                                        variants={{
                                          open: { opacity: 1, y: 0 },
                                          collapsed: { opacity: 0, y: -6 },
                                        }}
                                        transition={{
                                          duration: 0.2,
                                          ease: "easeOut",
                                        }}
                                      >
                                        {isChildActive ? (
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
                                            isChildActive
                                              ? "bg-white/90"
                                              : "bg-white/35 group-hover:bg-white/55"
                                          }`}
                                        />
                                        <motion.span
                                          className="relative z-10"
                                          animate={{
                                            x: isChildActive ? 6 : 0,
                                            opacity: isChildActive ? 1 : 0.84,
                                          }}
                                          transition={{
                                            duration: 0.22,
                                            ease: "easeOut",
                                          }}
                                        >
                                          {child.title}
                                        </motion.span>
                                      </motion.button>
                                    );
                                  })}
                                </motion.div>
                              </motion.div>
                            ) : null}
                          </AnimatePresence>
                        </div>
                      );
                    }

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

          <div className="relative min-w-0 flex-1 h-[34rem]">
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
                className={`flex h-full flex-col overflow-hidden transition-all bevel ${
                  descriptionContent
                    ? "bg-[#b9b6f0] text-gray-night-green shadow-[0_28px_70px_rgba(0,0,0,0.28)] md:flex-row"
                    : `${panelClassName} shadow-[0_24px_50px_rgba(0,0,0,0.2)] md:flex-row-reverse`
                }`}
                style={descriptionContent ? undefined : panelStyle}
              >
                {descriptionContent ? null : (
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
                )}
                <motion.div
                  className={`flex min-w-0 flex-col ${
                    descriptionContent
                      ? "h-full px-4 py-5 md:px-8 md:py-7"
                      : "justify-end px-4 py-6 text-gray-night-green md:flex-1 md:px-6"
                  }`}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.06,
                      },
                    },
                  }}
                >
                  {descriptionContent ? (
                    <motion.article
                      className="relative flex h-full min-h-0 flex-1 flex-col overflow-hidden px-6 py-8 md:px-10 md:py-11"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                    >
                      <div className="shrink-0">
                        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.06em] text-[#191e1b]">
                          Industry Focus
                        </div>
                        <h3 className="mt-3 font-blender text-4xl font-light uppercase leading-none tracking-[0.28em] text-[#191e1b] md:text-5xl">
                          {descriptionContent.title}
                        </h3>
                      </div>

                      <div className="mt-7 min-h-0 flex-1">
                        <div
                          className="sidago-content-scroll h-full overflow-y-auto pr-4 text-[0.95rem] font-medium leading-[1.52] tracking-[0.01em] text-black md:pr-8 md:text-[1.08rem]"
                          style={{
                            scrollbarColor: "#4c5260 rgba(255, 255, 255, 0.2)",
                          }}
                        >
                          <div className="flex flex-col gap-4">
                            {descriptionContent.paragraphs.map(
                              (paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                              ),
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="mt-7 shrink-0 text-[0.96rem] font-bold italic tracking-[0.02em] text-[#e7512f] md:text-lg">
                        {descriptionContent.callout}
                      </p>
                    </motion.article>
                  ) : (
                    <>
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
                    </>
                  )}
                </motion.div>
                {descriptionContent ? (
                  <div className="relative hidden w-[7.5rem] shrink-0 overflow-hidden bg-[#756cf1] md:block">
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, rgba(255,255,255,0.72) 0 3px, transparent 3px)",
                        backgroundSize: "24px 24px",
                        transform: "skewY(10deg) translateX(8px)",
                      }}
                    />
                    <div className="absolute inset-x-0 top-0 h-20 bg-[#7d75f4]" />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-[#7d75f4]" />
                    <div className="absolute inset-y-0 right-0 w-8 bg-[#6e65e7]" />
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[4.3rem] font-light leading-none tracking-[0.03em] text-white">
                      PY
                    </div>
                  </div>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </div>
    </section>
  );
}
