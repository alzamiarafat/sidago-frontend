"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getServiceMenuContext } from "@/src/utils/serviceUtils";

export default function ContentTab({ slug = "" }) {
  const menuContext = getServiceMenuContext(slug);

  if (!menuContext || !menuContext.tabs?.length) {
    return null;
  }

  const { group, currentItem, tabs } = menuContext;
  const [activeHref, setActiveHref] = useState(currentItem?.href ?? tabs[0]?.href);
  const activeTab =
    tabs.find((item) => item.href === activeHref) ?? tabs[0] ?? currentItem;
  const activeTitle = activeTab?.title || group?.title;
  const activeDescription = `${activeTitle} is one of the child menu items under ${group?.title} in the navbar submenu.`;
  const getTabId = (item) =>
    `${group?.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${item.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")}-tab`;
  const getPanelId = (item) =>
    `${group?.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${item.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")}-panel`;

  return (
    <section className="bg-gray-defi-shadow">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id="a-decentralized-world-needs-strong-governance"
              className="font-blender text-xl uppercase text-green-dark"
            >
              A decentralized world needs strong governance
            </h2>
            <div className="text-gray-off-white">
              Advancing governance through strategic participation in crucial
              protocol decisions, combining our trading expertise with
              governance experience to drive sustainable progress
            </div>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>

        <section className="flex flex-col gap-5 md:flex-row md:items-stretch">
          <div className="md:h-[23.75rem] md:w-[16rem] md:shrink-0">
            <div
              role="tablist"
              aria-label={`${group?.title} child menu`}
              aria-orientation="vertical"
              className="flex h-full flex-col gap-2"
            >
              {tabs.map((item) => {
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
                    className={`relative flex min-h-[3.7rem] flex-1 cursor-pointer select-none items-center justify-start overflow-hidden bg-transparent px-5 py-3 text-left transition duration-300 ${
                      isActive
                        ? "text-gray-off-white"
                        : "hover:text-gray-tradfi-silver"
                    }`}
                  >
                    {isActive && (
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
                    )}
                    <motion.span
                      className="relative z-10"
                      animate={{
                        x: isActive ? 6 : 0,
                        opacity: isActive ? 1 : 0.82,
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
                key={activeTab.href}
                id={getPanelId(activeTab)}
                role="tabpanel"
                aria-labelledby={getTabId(activeTab)}
                initial={{ opacity: 0, scale: 0.992, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.996, filter: "blur(6px)" }}
                transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col overflow-hidden transition-all bevel md:h-full md:flex-row-reverse bg-purple-light shadow-[0_24px_50px_rgba(0,0,0,0.2)]"
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
                    src="https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/17212522/Governance-Pyth.svg"
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
