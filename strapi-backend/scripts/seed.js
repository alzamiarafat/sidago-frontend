#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { compileStrapi, createStrapi } = require("@strapi/strapi");

function loadModuleExports(filePath, exportNames, scope = {}) {
  let source = fs.readFileSync(filePath, "utf8");

  source = source
    .replace(/^import .*$/gm, "")
    .replace(/export const /g, "const ")
    .replace(/export function /g, "function ");

  const factory = new Function(
    ...Object.keys(scope),
    `${source}\nreturn { ${exportNames.join(", ")} };`,
  );

  return factory(...Object.values(scope));
}

function normalizeHref(href = "") {
  if (!href) return "";
  return href.endsWith("/") && href !== "/" ? href.slice(0, -1) : href;
}

function slugFromHref(href = "") {
  return normalizeHref(href).split("/").filter(Boolean).at(-1) || "";
}

function toStrategyContentPages(strategyMenuItems) {
  return [
    ...strategyMenuItems.map((item, index) => ({
      title: item.title,
      slug: slugFromHref(item.href),
      pageType: "strategy",
      navLabel: item.title,
      menuGroup: item.title,
      parentSlug: "",
      menuOrder: index,
      showInNavigation: true,
      summary: item.description,
      introTitle: item.title,
      introDescription: item.description,
    })),
    ...strategyMenuItems.flatMap((item) =>
      (item.children || []).map((child, index) => ({
        title: child.title,
        slug: slugFromHref(child.href),
        pageType: "strategy",
        navLabel: child.title,
        menuGroup: item.title,
        parentSlug: slugFromHref(item.href),
        menuOrder: index,
        showInNavigation: true,
        summary: child.description,
        introTitle: child.title,
        introDescription: child.description,
      })),
    ),
  ];
}

function toServiceContentPages(mainMenu) {
  const servicesItem = mainMenu.find((item) => item.id === "services");
  const groups = servicesItem?.megaColumns ?? [];

  return groups.flatMap((group) => {
    const rootSlug = slugFromHref(group.href) || group.label.toLowerCase();

    return [
      {
        title: group.label,
        slug: rootSlug,
        pageType: "service",
        navLabel: group.label,
        menuGroup: group.label,
        parentSlug: "",
        menuOrder: 0,
        showInNavigation: true,
        summary: `${group.label} services from Sidago.`,
        introTitle: group.label,
        introDescription: `Explore ${group.label} services from Sidago.`,
      },
      ...(group.children ?? []).map((child, index) => ({
        title: child.label,
        slug: slugFromHref(child.href),
        pageType: "service",
        navLabel: child.label,
        menuGroup: group.label,
        parentSlug: rootSlug,
        menuOrder: index + 1,
        showInNavigation: true,
        summary: `Learn about ${child.label} services from Sidago.`,
        introTitle: child.label,
        introDescription: `Learn about ${child.label} services from Sidago.`,
      })),
    ];
  });
}

function toIndustryContentPages(getIndustryMenuGroups) {
  const groups = getIndustryMenuGroups();

  return groups.flatMap((group) => {
    const rootSlug = slugFromHref(group.href) || group.title.toLowerCase();

    return [
      {
        title: group.title,
        slug: rootSlug,
        pageType: "industry",
        navLabel: group.title,
        menuGroup: group.title,
        parentSlug: "",
        menuOrder: 0,
        showInNavigation: true,
        summary: `Explore Sidago solutions for the ${group.title} industry.`,
        introTitle: group.title,
        introDescription: `Explore Sidago solutions for the ${group.title} industry.`,
      },
      ...(group.children ?? []).map((child, index) => ({
        title: child.title,
        slug: slugFromHref(child.href),
        pageType: "industry",
        navLabel: child.title,
        menuGroup: group.title,
        parentSlug: rootSlug,
        menuOrder: index + 1,
        showInNavigation: true,
        summary: `Learn how Sidago supports ${child.title} within ${group.title}.`,
        introTitle: child.title,
        introDescription: `Learn how Sidago supports ${child.title} within ${group.title}.`,
      })),
    ];
  });
}

function getStaticContentPages() {
  const sharedStats = [
    { stat: "50", label: "Annual OTC trading volume", width: 244, activeDotColor: "#3C85DD" },
    { stat: "35", label: "OTC trades per second", width: 248, activeDotColor: "#3C85DD" },
    { stat: "85", label: "Largest OTC trade execution", width: 198, activeDotColor: "#3C85DD" },
    { stat: "70", label: "Tokens traded via OTC", width: 192, activeDotColor: "#3C85DD" },
  ];

  return [
    {
      title: "Home",
      slug: "home",
      pageType: "home",
      hero: {
        useVideo: true,
        videoSrc: "/videos/home2.mp4",
        subtitle: "Sidago makes digital asset markets liquid and efficient",
        titles: [
          { title: "We understand", color: "", className: "text-[#E7512F]" },
          { title: "the online world", color: "", className: "" },
        ],
      },
      stats: [
        { stat: "75", label: "Saving Costing", width: 244, activeDotColor: "#E7512F" },
        { stat: "81", label: "Token liquidity partners", width: 248, activeDotColor: "#E7512F" },
        { stat: "87", label: "Return on Investment", width: 198, activeDotColor: "#E7512F" },
        { stat: "92", label: "Client Retention", width: 192, activeDotColor: "#E7512F" },
      ],
      insightItems: [
        { title: "Digital asset OTC market 2026", href: "#" },
        { title: "Sidago Trader Assessment Day", href: "#" },
        { title: "Introducing NODE Insights", href: "#" },
      ],
      accordionItems: [
        {
          title: "Spot",
          description: "Trade spot or derivatives across the widest range of digital assets.",
          href: "/spots",
          video: "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/19200719/Accordion-OTC.mp4#t=2",
        },
      ],
      summary: "Digital services, strategy, and business solutions.",
      introTitle: "We understand the online world",
      introDescription: "Sidago makes digital asset markets liquid and efficient.",
      showInNavigation: false,
    },
    {
      title: "Options",
      slug: "options",
      pageType: "options",
      hero: {
        useVideo: true,
        videoSrc: "https://www.wintermute.com/videos/heroes/defi.mp4",
        lighterTheme: false,
        titles: [
          { title: "Operating at every level of", color: "", className: "" },
          { title: "decentralized finance", color: "#ed9b9b", className: "" },
        ],
        subtitle: "Deeply embedded into the ecosystem, we understand DeFi infrastructure and improve on-chain efficiency.",
      },
      stats: sharedStats,
      customData: {
        latestAbout: {
          title: "Latest Sidago Tx hash",
          hashes: [
            "0x3b8bd16df83aa4919256cc4dc8de916f1bf360eba921a2f708844359f9e36a54",
            "0x485fc2ebc8cb3646008f4fc72cf77562d55fb51dbb4c260d8c438ccadb9d5b32",
            "0x4622b369985bc8fb7eb9b250712148758faa0b40dc67aa140001c63bbd474d11",
          ],
        },
        buildChallenge: {
          title: "Building solutions for core challenges in DeFi",
          description: "Sidago's position in DeFi shapes where we focus to improve infrastructure, participation, and execution quality.",
          tabs: [
            {
              key: "liquidity",
              label: "Liquidity",
              panelClassName: "bg-blue-light",
              imageSrc: "/images/Defi-Tabs-Liquidity.svg",
              imageAlt: "Liquidity",
              content: "We actively research and develop solutions that bridge fragmented liquidity across chains and user environments.",
            },
            {
              key: "mev",
              label: "MEV",
              panelClassName: "bg-pink-light",
              imageSrc: "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/17212510/Defi-Tabs-MEV.svg",
              imageAlt: "MEV",
              content: "We study protocol implementations and updates to simplify complexity and align incentives for broader adoption.",
            },
          ],
        },
        chainActivity: {
          title: "Sidago chain activity index",
          description: "Make informed decisions with real-time insights into activity and costs across major chains.",
          columns: [
            "Name",
            "Dominant stablecoin",
            "Sector dominance",
            "Gas cost for staking",
            "Gas cost for swapping",
            "Price impact $10k trade",
            "Price impact $100k trade",
            "Price impact $1M trade",
            "Price impact $10M trade",
          ],
          rows: [
            {
              name: "Ethereum",
              stablecoin: "Tether",
              sectors: [
                { label: "Liquid Staking", value: 24, colorClass: "bg-green-light" },
                { label: "Lending", value: 22, colorClass: "bg-orange-light" },
                { label: "Restaking", value: 8, colorClass: "bg-green-dark" },
                { label: "Bridge", value: 7, colorClass: "bg-purple-light" },
                { label: "Other", value: 39, colorClass: "bg-gray-defi-graphite" },
              ],
              staking: "0.0182 USD",
              swapping: "0.0607 USD",
              impact10k: "9.09 bps",
              impact100k: "9.53 bps",
              impact1m: "11.70 bps",
              impact10m: "NaN bps",
            },
          ],
        },
        tradingMarket: {
          title: "Strengthening DeFi trading markets",
          description: "Sidago is deeply embedded across the DeFi ecosystem, providing liquidity across major chains and supporting a wide range of DEX models.",
          cards: [
            {
              title: "Automated market makers (AMMs)",
              description: "Keeping pool prices aligned with the market to maintain efficiency.",
              label: "Including on:",
              className: "bg-blue-mid text-gray-night-green",
              logos: [
                {
                  src: "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/07/07172233/Uniswap.svg",
                  alt: "Uniswap",
                },
              ],
            },
            {
              title: "Request for quote (RFQ) platforms",
              description: "Enabling optimal price execution through peer-to-peer liquidity provision.",
              label: "Including on:",
              className: "bg-pink-mid text-gray-night-green",
              logos: [
                {
                  src: "https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/07/07172232/Jupiter.svg",
                  alt: "Jupiter",
                },
              ],
            },
          ],
        },
        latestResearch: {
          title: "Latest DeFi research",
          items: [
            {
              href: "#",
              srLabel: "Insights research card",
              imageAlt: "Why delegation matters",
              imageSrc: "/images/digest-1.webp",
              category: "Case Studies",
              title: "Why delegation matters: Lessons from Compound’s governance model",
              date: "9 Oct 2025",
            },
          ],
        },
        discover: {
          title: "Discover more",
          cards: [
            {
              title: "Governance",
              description: "Build structured decision-making systems for modern digital organizations.",
              href: "/governance",
              className: "bg-orange-mid text-gray-night-green",
            },
            {
              title: "Marketplace",
              description: "Apply to take part in an accelerator built by proven operators.",
              href: "/marketplace",
              className: "bg-blue-mid text-gray-night-green",
            },
          ],
        },
      },
      showInNavigation: true,
      summary: "Options market and DeFi content.",
      introTitle: "Operating at every level of decentralized finance",
      introDescription: "Deeply embedded into the ecosystem, we understand DeFi infrastructure and improve on-chain efficiency.",
    },
    ...["marketplace", "node", "ventures"].map((slug) => ({
      title: slug === "ventures" ? "Ventures" : slug.charAt(0).toUpperCase() + slug.slice(1),
      slug,
      pageType: slug,
      hero: {
        useVideo: true,
        videoSrc: slug === "marketplace" ? "https://www.wintermute.com/videos/heroes/defi.mp4" : "https://www.wintermute.com/videos/heroes/ventures.mp4",
        lighterTheme: false,
        titles: [
          { title: "Team up with an", color: "", className: "" },
          { title: "established builder", color: "#3c85dd", className: "" },
          { title: "of decentralized finance", color: "", className: "" },
        ],
        subtitle: "Partner with a proven early-stage builder in the DeFi ecosystem to fuel long-term growth.",
      },
      stats: sharedStats,
      customData: {
        partnerBenefits: {
          title: "Partner with Sidago Ventures",
          items: [
            "Value-add first approach",
            "Investments using own capital",
            "Founded by operators",
            "Governance and DeFi expertise",
          ],
        },
        investments: {
          title: "Venture investments",
          categories: [
            {
              title: "DeFi Applications",
              href: "#",
              accentClass: "text-blue-mid",
              span: "lg:col-span-2",
              logos: [
                { src: "/images/Ventures-Logo-–-Euler.svg", alt: "Euler" },
                { src: "/images/Ventures-Logo-–-OneBalance.svg", alt: "OneBalance" },
                { src: "/images/Ventures-Logo-–-1inch.svg", alt: "1inch" },
              ],
            },
          ],
        },
        incubations: {
          title: "Building through incubation",
          description: "Sidago incubates and helps launch new businesses alongside trusted partners.",
          items: [
            {
              title: "Bebop",
              description: "A comprehensive app and API suite designed to bring efficient execution and enhanced liquidity to DeFi.",
              href: "https://bebop.xyz/",
              imageSrc: "/images/Venture-Incubation-Bebop-BG.svg",
              logoSrc: "/images/Ventures-Incubation-Bebop-logo.svg",
            },
            {
              title: "GMCI",
              description: "Provider of institutional-grade, transparent indices on digital assets.",
              href: "https://www.gmci.co/",
              imageSrc: "/images/Venture-Incubation-GMCI-BG.svg",
              logoSrc: "/images/Ventures-Incubation-GMCI-logo.svg",
            },
          ],
        },
        workOverview: {
          title: "How we work",
          description: "Sidago supports founders with practical operating experience, market context, and long-term partnership.",
          cards: [
            {
              title: "Founders-first support",
              description: "We work closely with teams from early validation through execution planning and market expansion.",
            },
            {
              title: "Operator insight",
              description: "Our perspective combines product, liquidity, governance, and infrastructure experience from the market itself.",
            },
          ],
        },
      },
      showInNavigation: true,
      summary: `${slug} content page.`,
      introTitle: slug,
      introDescription: `${slug} content page.`,
    })),
  ];
}

async function upsertSiteConfig(strapi, data) {
  const uid = "api::site-config.site-config";
  const existing = await strapi.db.query(uid).findOne({});

  if (existing) {
    await strapi.documents(uid).update({
      documentId: existing.documentId,
      data,
      status: "published",
    });
    return "updated";
  }

  await strapi.documents(uid).create({
    data,
    status: "published",
  });
  return "created";
}

async function upsertContentPage(strapi, data) {
  const uid = "api::content-page.content-page";
  const existing = await strapi.db.query(uid).findOne({
    where: {
      slug: data.slug,
      pageType: data.pageType,
    },
  });

  if (existing) {
    await strapi.documents(uid).update({
      documentId: existing.documentId,
      data,
      status: "published",
    });
    return "updated";
  }

  await strapi.documents(uid).create({
    data,
    status: "published",
  });
  return "created";
}

async function main() {
  const appDir = path.resolve(__dirname, "..");
  process.chdir(appDir);

  const navigationFile = path.resolve(appDir, "../src/data/navigation.js");
  const strategyFile = path.resolve(appDir, "../src/data/strategy-menu.js");
  const socialLinksFile = path.resolve(appDir, "../src/data/socialLinks.js");
  const industryFile = path.resolve(appDir, "../src/utils/navigationTabUtils.js");

  const { mainMenu } = loadModuleExports(navigationFile, ["mainMenu"]);
  const { strategyMenuItems } = loadModuleExports(strategyFile, [
    "strategyMenuItems",
  ]);
  const { socialLinks } = loadModuleExports(socialLinksFile, ["socialLinks"]);
  const { getIndustryMenuGroups } = loadModuleExports(
    industryFile,
    ["getIndustryMenuGroups"],
    { mainMenu },
  );

  const appContext = await compileStrapi({ appDir });
  const strapi = createStrapi(appContext);

  await strapi.load();

  try {
    const siteConfigPayload = {
      siteName: "Sidago",
      siteUrl: "https://www.sidago.com",
      siteContactEmail: "mailto:info@sidago.com",
      versionLabel: "v2",
      socialLinks: socialLinks.map((item) => ({
        platform: item.title,
        href: item.href,
        iconKey: item.icon,
      })),
      footerPrimaryLinks: [
        { label: "Contact", href: "/contact" },
        { label: "Careers", href: "/contact" },
        { label: "Events", href: "/events" },
      ],
      footerSecondaryLinks: [
        { label: "Privacy Policy", href: "#" },
        { label: "Cookies Policy", href: "#" },
        { label: "Modern Slavery Statement", href: "#" },
      ],
      footerLegalText: [
        "Sidago Trading Ltd. and its related entities provide digital-asset-focused trading, research, and strategic support.",
        "Content on this website is for information purposes only and does not constitute investment or regulatory advice.",
      ],
    };

    const siteConfigResult = await upsertSiteConfig(strapi, siteConfigPayload);

    const contentPages = [
      ...getStaticContentPages(),
      ...toServiceContentPages(mainMenu),
      ...toIndustryContentPages(getIndustryMenuGroups),
      ...toStrategyContentPages(strategyMenuItems),
    ];

    let created = 0;
    let updated = 0;

    for (const page of contentPages) {
      const result = await upsertContentPage(strapi, page);
      if (result === "created") {
        created += 1;
      } else {
        updated += 1;
      }
    }

    console.log(
      `Seed complete: site-config ${siteConfigResult}, content-pages created=${created}, updated=${updated}`,
    );
    process.exit(0);
  } finally {
    try {
      await strapi.destroy();
    } catch (error) {
      console.warn("Strapi shutdown warning:", error.message);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
