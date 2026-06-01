import { cache } from "react";
import {
  defaultBusinessProcessesPage,
  defaultExecutionPage,
  defaultGlobalSettings,
  defaultHomepage,
  defaultInfrastructurePage,
  defaultInsightsPage,
  defaultOperationsPage,
  defaultPerformancePage,
  defaultServicesPage,
} from "@/src/data/cms/defaults";
import { defaultCareersPage } from "@/src/data/cms/careers-page";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, "");
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

function unwrapEntity(entity) {
  if (!entity) {
    return null;
  }

  if (entity.data) {
    return unwrapEntity(entity.data);
  }

  if (entity.attributes) {
    return {
      id: entity.id,
      ...entity.attributes,
    };
  }

  return entity;
}

function resolveMedia(media) {
  const resolved = unwrapEntity(media);
  const url = resolved?.url;

  if (!url) {
    return null;
  }

  return {
    ...resolved,
    url: url.startsWith("http") ? url : `${STRAPI_URL}${url}`,
  };
}

function normalizeGlobalSettings(entry) {
  const item = unwrapEntity(entry);

  if (!item) {
    return defaultGlobalSettings;
  }

  const footer = item.footer;

  return {
    siteName: item.siteName || defaultGlobalSettings.siteName,
    siteContactEmail: item.siteContactEmail
      ? `mailto:${item.siteContactEmail.replace(/^mailto:/, "")}`
      : defaultGlobalSettings.siteContactEmail,
    siteLogo: resolveMedia(item.siteLogo) || defaultGlobalSettings.siteLogo,
    version: item.version || defaultGlobalSettings.version,
    socialLinks:
      item.socialLinks?.length > 0
        ? item.socialLinks
        : defaultGlobalSettings.socialLinks,
    footer: footer ? normalizeFooter(footer) : defaultGlobalSettings.footer,
  };
}

function normalizeHero(hero, fallbackHero = defaultHomepage.hero) {
  if (!hero) {
    return fallbackHero;
  }

  const titles =
    hero.titles
      ?.filter((title) => title?.title)
      .slice()
      .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0)) ||
    fallbackHero.titles;

  return {
    ...fallbackHero,
    ...hero,
    titles,
  };
}

function mergeHomepageHeroTitles(titles, canonicalTitles) {
  const pieces = (titles ?? [])
    .filter((item) => item?.title)
    .slice()
    .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0));

  if (!pieces.length) {
    return canonicalTitles;
  }

  const combined = pieces.map((item) => item.title).join(" ").toLowerCase();

  if (
    combined.includes("we understand") &&
    combined.includes("modern business landscape")
  ) {
    return canonicalTitles;
  }

  return pieces;
}

function resolveInsightNewsHref(itemHref, fallbackHref) {
  const trimmed = itemHref?.trim();
  if (!trimmed || trimmed === "#") {
    const fallback = fallbackHref?.trim();
    return fallback && fallback !== "#" ? fallback : "#";
  }
  return trimmed;
}

function normalizeInsightNewsItem(item, fallbackItem) {
  if (!item?.title) {
    return fallbackItem;
  }

  return {
    ...fallbackItem,
    ...item,
    href: resolveInsightNewsHref(item.href, fallbackItem.href),
    srText: item.srText?.trim() || item.title,
  };
}

function normalizeStatisticItem(item, fallbackItem) {
  if (!item?.label || !item?.stat) {
    return fallbackItem;
  }

  return {
    ...fallbackItem,
    ...item,
    stat: `${item.stat}`.trim() || fallbackItem.stat,
    label: item.label.trim(),
    activeDotColor: item.activeDotColor || fallbackItem.activeDotColor,
  };
}

function normalizeMarketTickerItem(item, fallbackItem) {
  if (!item?.title || !item?.price || !item?.avg) {
    return fallbackItem;
  }

  return {
    ...fallbackItem,
    ...item,
    title: item.title.trim(),
    price: item.price.trim(),
    avg: item.avg.trim(),
  };
}

function normalizeCapabilityItem(item, fallbackItem) {
  if (!item?.title || !item?.description || !item?.href || !item?.video) {
    return fallbackItem;
  }

  return {
    ...fallbackItem,
    ...item,
    title: item.title.trim(),
    description: item.description.trim(),
    href: item.href.trim(),
    video: item.video.trim(),
    rotate: item.rotate?.trim() || fallbackItem.rotate || "rotate(0deg)",
    sr: item.sr?.trim() || item.title,
  };
}

const CARDS_GRID_THEME_BY_ID = {
  "research-data": {
    bgClass: "bg-[#EC9B9B]",
    textClass: "text-black",
  },
  "marketing-growth": {
    bgClass: "bg-[#AEA9EA]",
    textClass: "text-black",
  },
  "support-compliance": {
    bgClass: "bg-[#7FB2F1]",
    textClass: "text-black",
  },
  "process-improvement": {
    bgClass: "bg-[#333935]",
  },
};

function normalizeCardsGridItem(item, fallbackItem) {
  if (!item?.cardId || !item?.href || !item?.title) {
    return fallbackItem;
  }

  const cardId = item.cardId.trim();
  const theme = CARDS_GRID_THEME_BY_ID[cardId];
  const bgClass =
    theme?.bgClass || item.bgClass?.trim() || fallbackItem.bgClass;
  const textClass =
    theme?.textClass || item.textClass?.trim() || fallbackItem.textClass;

  return {
    ...fallbackItem,
    ...item,
    cardId,
    href: item.href.trim(),
    srLabel: item.srLabel?.trim() || fallbackItem.srLabel || item.title,
    bgClass,
    textClass,
    colSpan: item.colSpan?.trim() || fallbackItem.colSpan,
    title: item.title.trim(),
    subtitle: item.subtitle?.trim() || "",
    decorationType:
      item.decorationType || fallbackItem.decorationType || "none",
    topType: item.topType || fallbackItem.topType || "none",
    leadingIcon:
      item.leadingIcon != null && `${item.leadingIcon}`.trim() !== ""
        ? `${item.leadingIcon}`.trim()
        : fallbackItem.leadingIcon,
  };
}

const FOOTER_POLICY_HREF_BY_LABEL = {
  "Privacy Policy": "/privacy",
  "Cookies Policy": "/cookies",
  "Modern Slavery Statement": "/modern-slavery",
};

const FOOTER_NAV_HREF_BY_LABEL = {
  Contact: "/contact",
  Careers: "/company/careers",
  Events: "/events",
  Brand: "/brand",
};

function normalizeFooterLink(item, fallbackItem) {
  if (!item?.label) {
    return fallbackItem;
  }

  const label = item.label.trim();
  let href = (item.href ?? "").trim();
  const navHref = FOOTER_NAV_HREF_BY_LABEL[label];
  const policyHref = FOOTER_POLICY_HREF_BY_LABEL[label];

  if (navHref) {
    href = navHref;
  } else if (!href || href === "#") {
    if (policyHref) {
      href = policyHref;
    }
  }
  if (!href) {
    href = fallbackItem.href;
  }

  return {
    ...fallbackItem,
    ...item,
    label,
    href,
    srLabel: item.srLabel?.trim() || label,
  };
}

function normalizeFooterSocialLink(item, fallbackItem) {
  if (!item?.label || !item?.href || !item?.platform) {
    return fallbackItem;
  }

  return {
    ...fallbackItem,
    ...item,
    label: item.label.trim(),
    href: item.href.trim(),
    platform: item.platform,
  };
}

function normalizeFooterLegalBlock(item, fallbackItem) {
  if (!item?.text) {
    return fallbackItem;
  }

  return {
    ...fallbackItem,
    ...item,
    text: item.text.trim(),
  };
}

function normalizeFooterNavLinks(navLinks) {
  const brandFallback = defaultGlobalSettings.footer.navLinks.find(
    (link) => link.label === "Brand",
  );

  const mapped = navLinks
    .slice()
    .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0))
    .map((link, index) =>
      normalizeFooterLink(
        link,
        defaultGlobalSettings.footer.navLinks[index] ||
          defaultGlobalSettings.footer.navLinks[0],
      ),
    );

  const hasBrand = mapped.some(
    (link) => link.label?.trim().toLowerCase() === "brand",
  );

  if (!hasBrand && brandFallback) {
    return [...mapped, brandFallback];
  }

  return mapped;
}

function normalizeFooter(footer) {
  return {
    navLinks:
      footer.navLinks?.length > 0
        ? normalizeFooterNavLinks(footer.navLinks)
        : defaultGlobalSettings.footer.navLinks,
    socialLinks:
      footer.socialLinks?.length > 0
        ? footer.socialLinks
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((link, index) =>
              normalizeFooterSocialLink(
                link,
                defaultGlobalSettings.footer.socialLinks[index] ||
                  defaultGlobalSettings.footer.socialLinks[0],
              ),
            )
        : defaultGlobalSettings.footer.socialLinks,
    legalBlocks:
      footer.legalBlocks?.length > 0
        ? footer.legalBlocks
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((block, index) =>
              normalizeFooterLegalBlock(
                block,
                defaultGlobalSettings.footer.legalBlocks[index] ||
                  defaultGlobalSettings.footer.legalBlocks[0],
              ),
            )
        : defaultGlobalSettings.footer.legalBlocks,
    policyLinks:
      footer.policyLinks?.length > 0
        ? footer.policyLinks
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((link, index) =>
              normalizeFooterLink(
                link,
                defaultGlobalSettings.footer.policyLinks[index] ||
                  defaultGlobalSettings.footer.policyLinks[0],
              ),
            )
        : defaultGlobalSettings.footer.policyLinks,
  };
}

function normalizeCtaItem(item, fallbackItem) {
  if (!item?.title || !item?.description || !item?.href) {
    return fallbackItem;
  }

  return {
    ...fallbackItem,
    ...item,
    title: item.title.trim(),
    description: item.description.trim(),
    href: item.href.trim(),
    srLabel: item.srLabel?.trim() || item.title,
    backgroundColor:
      item.backgroundColor?.trim() || fallbackItem.backgroundColor,
  };
}

function normalizeInfrastructureProfileItem(item, fallbackItem) {
  if (
    !item?.eyebrow ||
    !item?.title ||
    !item?.description ||
    !item?.cta ||
    !item?.href
  ) {
    return fallbackItem;
  }

  return {
    ...fallbackItem,
    ...item,
    eyebrow: item.eyebrow.trim(),
    title: item.title.trim(),
    description: item.description.trim(),
    cta: item.cta.trim(),
    href: item.href.trim(),
    visualType: item.visualType || fallbackItem.visualType || "dashboard",
    srText: item.srText?.trim() || item.title,
  };
}

function normalizeInfrastructureVisionItem(item, fallbackItem) {
  if (!item?.title || !item?.description) {
    return fallbackItem;
  }

  return {
    ...fallbackItem,
    ...item,
    title: item.title.trim(),
    description: item.description.trim(),
    iconType: item.iconType || fallbackItem.iconType || "uptime",
  };
}

function normalizeInfrastructureSupportItem(item, fallbackItem) {
  if (!item?.title || !item?.description) {
    return fallbackItem;
  }

  return {
    ...fallbackItem,
    ...item,
    title: item.title.trim(),
    description: item.description.trim(),
    expandedClassName:
      item.expandedClassName?.trim() ||
      fallbackItem.expandedClassName ||
      "bg-green-light",
  };
}

function normalizeHomepage(entry) {
  const item = unwrapEntity(entry);
  const hero = item?.hero;
  const insightNews = item?.insightNews;
  const statistics = item?.statistics;
  const marketTicker = item?.marketTicker;
  const capabilities = item?.capabilities;
  const cardsGrid = item?.cardsGrid;
  const cta = item?.cta;

  if (
    !hero &&
    !insightNews &&
    !statistics &&
    !marketTicker &&
    !capabilities &&
    !cardsGrid &&
    !cta
  ) {
    return defaultHomepage;
  }

  const normalizedHero = normalizeHero(hero, defaultHomepage.hero);

  return {
    hero: {
      ...normalizedHero,
      titles: mergeHomepageHeroTitles(
        normalizedHero.titles,
        defaultHomepage.hero.titles,
      ),
    },
    insightNews:
      insightNews?.length > 0
        ? insightNews
            .filter((newsItem) => newsItem?.title)
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((newsItem, index) =>
              normalizeInsightNewsItem(
                newsItem,
                defaultHomepage.insightNews[index] ||
                  defaultHomepage.insightNews[0],
              ),
            )
        : defaultHomepage.insightNews,
    statistics:
      statistics?.length > 0
        ? statistics
            .filter((statItem) => statItem?.label && statItem?.stat)
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((statItem, index) =>
              normalizeStatisticItem(
                statItem,
                defaultHomepage.statistics[index] ||
                  defaultHomepage.statistics[0],
              ),
            )
        : defaultHomepage.statistics,
    marketTicker:
      marketTicker?.length > 0
        ? marketTicker
            .filter(
              (tickerItem) =>
                tickerItem?.title && tickerItem?.price && tickerItem?.avg,
            )
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((tickerItem, index) =>
              normalizeMarketTickerItem(
                tickerItem,
                defaultHomepage.marketTicker[index] ||
                  defaultHomepage.marketTicker[0],
              ),
            )
        : defaultHomepage.marketTicker,
    capabilities:
      capabilities?.length > 0
        ? capabilities
            .filter(
              (capabilityItem) =>
                capabilityItem?.title &&
                capabilityItem?.description &&
                capabilityItem?.href &&
                capabilityItem?.video,
            )
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((capabilityItem, index) =>
              normalizeCapabilityItem(
                capabilityItem,
                defaultHomepage.capabilities[index] ||
                  defaultHomepage.capabilities[0],
              ),
            )
        : defaultHomepage.capabilities,
    cardsGrid:
      cardsGrid?.length > 0
        ? cardsGrid
            .filter(
              (cardItem) =>
                cardItem?.cardId && cardItem?.href && cardItem?.title,
            )
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((cardItem, index) => {
              const cardFallback =
                defaultHomepage.cardsGrid.find(
                  (row) => row.cardId === cardItem.cardId,
                ) ||
                defaultHomepage.cardsGrid[index] ||
                defaultHomepage.cardsGrid[0];
              return normalizeCardsGridItem(cardItem, cardFallback);
            })
        : defaultHomepage.cardsGrid,
    cta:
      cta?.length > 0
        ? cta
            .filter(
              (ctaItem) =>
                ctaItem?.title && ctaItem?.description && ctaItem?.href,
            )
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((ctaItem, index) =>
              normalizeCtaItem(
                ctaItem,
                defaultHomepage.cta[index] || defaultHomepage.cta[0],
              ),
            )
        : defaultHomepage.cta,
  };
}

function normalizeServiceGroupItem(item) {
  if (!item?.title || !item?.href) {
    return null;
  }

  const children = Array.isArray(item.children)
    ? item.children
        .slice()
        .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0))
        .map(normalizeServiceGroupItem)
        .filter(Boolean)
    : [];
  const paragraphs = Array.isArray(item.paragraphs)
    ? item.paragraphs
        .slice()
        .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0))
        .map((paragraph) => paragraph?.text?.trim())
        .filter(Boolean)
    : [];

  return {
    ...item,
    title: item.title.trim(),
    label: item.label?.trim() || item.title.trim(),
    href: item.href.trim(),
    description: item.description?.trim() || "",
    paragraphs,
    children,
  };
}

function normalizeServicesPage(entry) {
  const item = unwrapEntity(entry);
  const groups = Array.isArray(item?.serviceGroups)
    ? item.serviceGroups
        .slice()
        .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0))
        .map(normalizeServiceGroupItem)
        .filter(Boolean)
    : [];

  return {
    serviceGroups:
      groups.length > 0 ? groups : defaultServicesPage.serviceGroups,
  };
}

function normalizeMenuGroupsPage(entry) {
  const item = unwrapEntity(entry);
  const groups = Array.isArray(item?.menuGroups)
    ? item.menuGroups
        .slice()
        .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0))
        .map(normalizeServiceGroupItem)
        .filter(Boolean)
    : [];

  return {
    menuGroups: groups,
  };
}

function normalizeJsonSection(section, fallbackSection, childKey = "items") {
  if (!section?.title) {
    return fallbackSection;
  }

  const children = Array.isArray(section[childKey])
    ? section[childKey].filter((item) => item?.title)
    : fallbackSection[childKey];

  return {
    ...fallbackSection,
    ...section,
    [childKey]: children?.length > 0 ? children : fallbackSection[childKey],
  };
}

function normalizeBusinessProcessesPage(entry) {
  const item = unwrapEntity(entry);

  if (!item) {
    return defaultBusinessProcessesPage;
  }

  return {
    hero: normalizeHero(item.hero, defaultBusinessProcessesPage.hero),
    statistics:
      item.statistics?.length > 0
        ? item.statistics
            .filter((statItem) => statItem?.label && statItem?.stat)
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((statItem, index) =>
              normalizeStatisticItem(
                statItem,
                defaultBusinessProcessesPage.statistics[index] ||
                  defaultBusinessProcessesPage.statistics[0],
              ),
            )
        : defaultBusinessProcessesPage.statistics,
    partnerBenefit: normalizeJsonSection(
      item.partnerBenefit,
      defaultBusinessProcessesPage.partnerBenefit,
      "benefits",
    ),
    processes: normalizeJsonSection(
      item.processes,
      defaultBusinessProcessesPage.processes,
    ),
    solutions: normalizeJsonSection(
      item.solutions,
      defaultBusinessProcessesPage.solutions,
    ),
    workOverview: item.workOverview?.title
      ? {
          ...defaultBusinessProcessesPage.workOverview,
          ...item.workOverview,
          metrics:
            item.workOverview.metrics?.length > 0
              ? item.workOverview.metrics
              : defaultBusinessProcessesPage.workOverview.metrics,
        }
      : defaultBusinessProcessesPage.workOverview,
  };
}

function normalizeOperationsPage(entry) {
  const item = unwrapEntity(entry);

  if (!item) {
    return defaultOperationsPage;
  }

  return {
    hero: normalizeHero(item.hero, defaultOperationsPage.hero),
    videoInMotion: {
      videoSrc:
        item.videoInMotion?.videoSrc?.trim() ||
        defaultOperationsPage.videoInMotion.videoSrc,
      posterSrc:
        item.videoInMotion?.posterSrc?.trim() ||
        defaultOperationsPage.videoInMotion.posterSrc,
      posterAlt:
        item.videoInMotion?.posterAlt?.trim() ||
        defaultOperationsPage.videoInMotion.posterAlt,
    },
    insightNews:
      item.insightNews?.length > 0
        ? item.insightNews
            .filter((newsItem) => newsItem?.title)
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((newsItem, index) =>
              normalizeInsightNewsItem(
                newsItem,
                defaultOperationsPage.insightNews[index] ||
                  defaultOperationsPage.insightNews[0],
              ),
            )
        : defaultOperationsPage.insightNews,
    statistics:
      item.statistics?.length > 0
        ? item.statistics
            .filter((statItem) => statItem?.label && statItem?.stat)
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((statItem, index) =>
              normalizeStatisticItem(
                statItem,
                defaultOperationsPage.statistics[index] ||
                  defaultOperationsPage.statistics[0],
              ),
            )
        : defaultOperationsPage.statistics,
    capabilities:
      item.capabilities?.length > 0
        ? item.capabilities
            .filter(
              (capabilityItem) =>
                capabilityItem?.title &&
                capabilityItem?.description &&
                capabilityItem?.href &&
                capabilityItem?.video,
            )
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((capabilityItem, index) =>
              normalizeCapabilityItem(
                capabilityItem,
                defaultOperationsPage.capabilities[index] ||
                  defaultOperationsPage.capabilities[0],
              ),
            )
        : defaultOperationsPage.capabilities,
    cta:
      item.cta?.length > 0
        ? item.cta
            .filter(
              (ctaItem) =>
                ctaItem?.title && ctaItem?.description && ctaItem?.href,
            )
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((ctaItem, index) =>
              normalizeCtaItem(
                ctaItem,
                defaultOperationsPage.cta[index] ||
                  defaultOperationsPage.cta[0],
              ),
            )
        : defaultOperationsPage.cta,
  };
}

function normalizeCareersStatisticItem(item, fallbackItem) {
  const labelLines = Array.isArray(item?.labelLines)
    ? item.labelLines.filter((line) => `${line}`.trim())
    : null;

  if (!item?.stat || !labelLines?.length) {
    return fallbackItem;
  }

  return {
    ...fallbackItem,
    stat: `${item.stat}`.trim() || fallbackItem.stat,
    labelLines,
    width: item.width ?? fallbackItem.width,
    activeDotColor: item.activeDotColor || fallbackItem.activeDotColor,
    sortOrder: item.sortOrder ?? fallbackItem.sortOrder,
  };
}

function normalizeCareersTeamLink(item, fallbackItem) {
  if (!item?.href || !item?.label) {
    return fallbackItem;
  }

  return {
    ...fallbackItem,
    href: item.href.trim(),
    label: item.label.trim(),
    srText: item.srText?.trim() || item.label.trim(),
    sortOrder: item.sortOrder ?? fallbackItem.sortOrder,
  };
}

function normalizeCareersTeamItem(item, fallbackItem) {
  if (!item?.title || !item?.description || !item?.imageSrc) {
    return fallbackItem;
  }

  return {
    ...fallbackItem,
    title: item.title.trim(),
    description: item.description.trim(),
    hoverColor: item.hoverColor?.trim() || fallbackItem.hoverColor,
    sortOrder: item.sortOrder ?? fallbackItem.sortOrder,
    image: {
      src: item.imageSrc.trim(),
      width: item.imageWidth ?? fallbackItem.image?.width ?? 1152,
      height: item.imageHeight ?? fallbackItem.image?.height ?? 1182,
    },
    links:
      item.links?.length > 0
        ? item.links
            .filter((link) => link?.href && link?.label)
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((link, index) =>
              normalizeCareersTeamLink(
                link,
                fallbackItem.links[index] || fallbackItem.links[0],
              ),
            )
        : fallbackItem.links,
  };
}

function normalizeCareersValuesItem(item, fallbackItem) {
  const bullets = Array.isArray(item?.bullets)
    ? item.bullets.filter((line) => `${line}`.trim())
    : null;

  if (!item?.title || !bullets?.length) {
    return fallbackItem;
  }

  return {
    ...fallbackItem,
    title: item.title.trim(),
    iconType: item.iconType || fallbackItem.iconType,
    bullets,
    sortOrder: item.sortOrder ?? fallbackItem.sortOrder,
  };
}

function normalizeCareersTestimonialItem(item, fallbackItem) {
  const titleParts = Array.isArray(item?.titleParts)
    ? item.titleParts.filter((part) => part?.text)
    : null;

  if (!item?.name || !item?.role || !item?.quote || !item?.imageSrc) {
    return fallbackItem;
  }

  return {
    ...fallbackItem,
    name: item.name.trim(),
    role: item.role.trim(),
    quote: item.quote.trim(),
    titleParts: titleParts?.length ? titleParts : fallbackItem.titleParts,
    sortOrder: item.sortOrder ?? fallbackItem.sortOrder,
    image: {
      src: item.imageSrc.trim(),
      width: item.imageWidth ?? fallbackItem.image?.width ?? 1100,
      height: item.imageHeight ?? fallbackItem.image?.height ?? 880,
      alt: item.imageAlt?.trim() || fallbackItem.image?.alt || item.name,
    },
  };
}

function normalizeCareersPage(entry) {
  const item = unwrapEntity(entry);

  if (!item) {
    return defaultCareersPage;
  }

  const hero = normalizeHero(item.hero, defaultCareersPage.hero);

  return {
    hero: {
      ...hero,
      ctaLabel:
        item.heroCtaLabel?.trim() ||
        defaultCareersPage.hero.ctaLabel,
      ctaHref:
        item.heroCtaHref?.trim() || defaultCareersPage.hero.ctaHref,
      ctaSrText:
        item.heroCtaSrText?.trim() ||
        defaultCareersPage.hero.ctaSrText,
      ctaButtonClass:
        item.heroCtaButtonClass?.trim() ||
        defaultCareersPage.hero.ctaButtonClass,
    },
    statistics:
      item.statistics?.length > 0
        ? item.statistics
            .filter((stat) => stat?.stat && stat?.labelLines?.length)
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((stat, index) =>
              normalizeCareersStatisticItem(
                stat,
                defaultCareersPage.statistics[index] ||
                  defaultCareersPage.statistics[0],
              ),
            )
        : defaultCareersPage.statistics,
    quoteSection: {
      quote:
        item.quoteSection?.quote?.trim() ||
        defaultCareersPage.quoteSection.quote,
      attribution:
        item.quoteSection?.attribution?.trim() ||
        defaultCareersPage.quoteSection.attribution,
    },
    valuesFlipSection: {
      title:
        item.valuesTitle?.trim() || defaultCareersPage.valuesFlipSection.title,
      headingId:
        item.valuesHeadingId?.trim() ||
        defaultCareersPage.valuesFlipSection.headingId,
      items:
        item.valuesItems?.length > 0
          ? item.valuesItems
              .filter((value) => value?.title && value?.bullets?.length)
              .slice()
              .sort(
                (left, right) =>
                  (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
              )
              .map((value, index) =>
                normalizeCareersValuesItem(
                  value,
                  defaultCareersPage.valuesFlipSection.items[index] ||
                    defaultCareersPage.valuesFlipSection.items[0],
                ),
              )
          : defaultCareersPage.valuesFlipSection.items,
    },
    teamsSection: {
      lead:
        item.teamsLead?.trim() || defaultCareersPage.teamsSection.lead,
      highlight:
        item.teamsHighlight?.trim() ||
        defaultCareersPage.teamsSection.highlight,
      headingId:
        item.teamsHeadingId?.trim() ||
        defaultCareersPage.teamsSection.headingId,
      items:
        item.teamsItems?.length > 0
          ? item.teamsItems
              .filter(
                (team) => team?.title && team?.description && team?.imageSrc,
              )
              .slice()
              .sort(
                (left, right) =>
                  (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
              )
              .map((team, index) =>
                normalizeCareersTeamItem(
                  team,
                  defaultCareersPage.teamsSection.items[index] ||
                    defaultCareersPage.teamsSection.items[0],
                ),
              )
          : defaultCareersPage.teamsSection.items,
    },
    teamTestimonialsSection: {
      title:
        item.testimonialsTitle?.trim() ||
        defaultCareersPage.teamTestimonialsSection.title,
      headingId:
        item.testimonialsHeadingId?.trim() ||
        defaultCareersPage.teamTestimonialsSection.headingId,
      className:
        item.testimonialsClassName?.trim() ||
        defaultCareersPage.teamTestimonialsSection.className,
      items:
        item.testimonialsItems?.length > 0
          ? item.testimonialsItems
              .filter(
                (testimonial) =>
                  testimonial?.name &&
                  testimonial?.role &&
                  testimonial?.quote &&
                  testimonial?.imageSrc,
              )
              .slice()
              .sort(
                (left, right) =>
                  (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
              )
              .map((testimonial, index) =>
                normalizeCareersTestimonialItem(
                  testimonial,
                  defaultCareersPage.teamTestimonialsSection.items[index] ||
                    defaultCareersPage.teamTestimonialsSection.items[0],
                ),
              )
          : defaultCareersPage.teamTestimonialsSection.items,
    },
    lifeSection: {
      lead: item.lifeLead?.trim() || defaultCareersPage.lifeSection.lead,
      highlight:
        item.lifeHighlight?.trim() ||
        defaultCareersPage.lifeSection.highlight,
      headingId:
        item.lifeHeadingId?.trim() ||
        defaultCareersPage.lifeSection.headingId,
      description:
        item.lifeDescription?.trim() ||
        defaultCareersPage.lifeSection.description,
      decorImage: {
        src:
          item.lifeDecorImageSrc?.trim() ||
          defaultCareersPage.lifeSection.decorImage.src,
        alt:
          item.lifeDecorImageAlt?.trim() ||
          defaultCareersPage.lifeSection.decorImage.alt,
        width:
          item.lifeDecorImageWidth ??
          defaultCareersPage.lifeSection.decorImage.width,
        height:
          item.lifeDecorImageHeight ??
          defaultCareersPage.lifeSection.decorImage.height,
      },
      video: {
        src:
          item.lifeVideoSrc?.trim() ||
          defaultCareersPage.lifeSection.video.src,
        preload:
          item.lifeVideoPreload?.trim() ||
          defaultCareersPage.lifeSection.video.preload,
      },
    },
    lifeStatsSection: {
      fontSizeMobile:
        item.lifeStatsFontSizeMobile ??
        defaultCareersPage.lifeStatsSection.fontSizeMobile,
      fontSizeDesktop:
        item.lifeStatsFontSizeDesktop ??
        defaultCareersPage.lifeStatsSection.fontSizeDesktop,
      items:
        item.lifeStatsItems?.length > 0
          ? item.lifeStatsItems
              .filter((stat) => stat?.stat && stat?.label)
              .slice()
              .sort(
                (left, right) =>
                  (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
              )
              .map((stat, index) =>
                normalizeStatisticItem(
                  stat,
                  defaultCareersPage.lifeStatsSection.items[index] ||
                    defaultCareersPage.lifeStatsSection.items[0],
                ),
              )
          : defaultCareersPage.lifeStatsSection.items,
    },
  };
}

function normalizeInfrastructurePage(entry) {
  const item = unwrapEntity(entry);

  if (!item) {
    return defaultInfrastructurePage;
  }

  return {
    hero: normalizeHero(item.hero, defaultInfrastructurePage.hero),
    visionTitle:
      item.visionTitle?.trim() || defaultInfrastructurePage.visionTitle,
    visionDescription:
      item.visionDescription?.trim() ||
      defaultInfrastructurePage.visionDescription,
    vision:
      item.vision?.length > 0
        ? item.vision
            .filter((visionItem) => visionItem?.title && visionItem?.description)
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((visionItem, index) =>
              normalizeInfrastructureVisionItem(
                visionItem,
                defaultInfrastructurePage.vision[index] ||
                  defaultInfrastructurePage.vision[0],
              ),
            )
        : defaultInfrastructurePage.vision,
    supportTitle:
      item.supportTitle?.trim() || defaultInfrastructurePage.supportTitle,
    supportHighlight:
      item.supportHighlight?.trim() ||
      defaultInfrastructurePage.supportHighlight,
    supportDescription:
      item.supportDescription?.trim() ||
      defaultInfrastructurePage.supportDescription,
    supportImageSrc:
      item.supportImageSrc?.trim() ||
      defaultInfrastructurePage.supportImageSrc,
    support:
      item.support?.length > 0
        ? item.support
            .filter(
              (supportItem) => supportItem?.title && supportItem?.description,
            )
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((supportItem, index) =>
              normalizeInfrastructureSupportItem(
                supportItem,
                defaultInfrastructurePage.support[index] ||
                  defaultInfrastructurePage.support[0],
              ),
            )
        : defaultInfrastructurePage.support,
    profilesTitle:
      item.profilesTitle?.trim() || defaultInfrastructurePage.profilesTitle,
    profilesDescription:
      item.profilesDescription?.trim() ||
      defaultInfrastructurePage.profilesDescription,
    profiles:
      item.profiles?.length > 0
        ? item.profiles
            .filter(
              (profileItem) =>
                profileItem?.eyebrow &&
                profileItem?.title &&
                profileItem?.description &&
                profileItem?.cta &&
                profileItem?.href,
            )
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((profileItem, index) =>
              normalizeInfrastructureProfileItem(
                profileItem,
                defaultInfrastructurePage.profiles[index] ||
                  defaultInfrastructurePage.profiles[0],
              ),
            )
        : defaultInfrastructurePage.profiles,
  };
}

function normalizePerformancePage(entry) {
  const item = unwrapEntity(entry);

  if (!item) {
    return defaultPerformancePage;
  }

  return {
    hero: normalizeHero(item.hero, defaultPerformancePage.hero),
    stats:
      Array.isArray(item.stats) && item.stats.length > 0
        ? item.stats
        : defaultPerformancePage.stats,
    dashboardSection: {
      ...defaultPerformancePage.dashboardSection,
      ...(item.dashboardSection || {}),
    },
    tabsSection: {
      ...defaultPerformancePage.tabsSection,
      ...(item.tabsSection || {}),
    },
    imageCarouselSection: {
      ...defaultPerformancePage.imageCarouselSection,
      ...(item.imageCarouselSection || {}),
    },
    capabilitiesSection: {
      ...defaultPerformancePage.capabilitiesSection,
      ...(item.capabilitiesSection || {}),
    },
    methodSection: {
      ...defaultPerformancePage.methodSection,
      ...(item.methodSection || {}),
    },
    cta:
      item.cta?.length > 0
        ? item.cta
            .filter(
              (ctaItem) =>
                ctaItem?.title && ctaItem?.description && ctaItem?.href,
            )
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((ctaItem, index) =>
              normalizeCtaItem(
                ctaItem,
                defaultPerformancePage.cta[index] ||
                  defaultPerformancePage.cta[0],
              ),
            )
        : defaultPerformancePage.cta,
  };
}

function normalizeInsightsSection(section, fallbackSection) {
  if (!section?.title) {
    return fallbackSection;
  }

  const items = Array.isArray(section.items)
    ? section.items.filter((item) => item?.title)
    : fallbackSection.items;

  return {
    ...fallbackSection,
    ...section,
    items: items?.length > 0 ? items : fallbackSection.items,
  };
}

function normalizeExecutionPage(entry) {
  const item = unwrapEntity(entry);

  if (!item) {
    return defaultExecutionPage;
  }

  const normalizeSection = (section, fallbackSection, arrayKeys = []) => {
    const normalized = {
      ...fallbackSection,
      ...(section || {}),
    };

    arrayKeys.forEach((key) => {
      normalized[key] =
        Array.isArray(section?.[key]) && section[key].length > 0
          ? section[key]
          : fallbackSection[key];
    });

    return normalized;
  };

  const aboutSection = normalizeSection(
    item.aboutSection,
    defaultExecutionPage.aboutSection,
    ["supportChips", "overviewItems"],
  );
  aboutSection.visual = {
    ...defaultExecutionPage.aboutSection.visual,
    ...(item.aboutSection?.visual || {}),
  };

  return {
    hero: normalizeHero(item.hero, defaultExecutionPage.hero),
    aboutSection,
    coreSection: normalizeSection(
      item.coreSection,
      defaultExecutionPage.coreSection,
      ["cards"],
    ),
    workflowSection: normalizeSection(
      item.workflowSection,
      defaultExecutionPage.workflowSection,
      ["steps"],
    ),
    resultsSection: normalizeSection(
      item.resultsSection,
      defaultExecutionPage.resultsSection,
      ["metrics"],
    ),
    cta:
      item.cta?.length > 0
        ? item.cta
            .filter(
              (ctaItem) =>
                ctaItem?.title && ctaItem?.description && ctaItem?.href,
            )
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((ctaItem, index) =>
              normalizeCtaItem(
                ctaItem,
                defaultExecutionPage.cta[index] || defaultExecutionPage.cta[0],
              ),
            )
        : defaultExecutionPage.cta,
  };
}

function mergeInsightsHeroTitles(titles, canonicalTitles) {
  const pieces = (titles ?? [])
    .filter((item) => item?.title)
    .slice()
    .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0));

  if (!pieces.length) {
    return canonicalTitles;
  }

  const findPiece = (pattern) =>
    pieces.find((item) => pattern.test(`${item.title}`.trim()));

  const lineOne = findPiece(/^turning data into$/i) || pieces[0];
  const actionable =
    findPiece(/^actionable$/i) || findPiece(/actionable/i) || canonicalTitles[1];
  const business =
    findPiece(/business insights/i) ||
    pieces[pieces.length - 1] ||
    canonicalTitles[2];

  return [
    {
      ...canonicalTitles[0],
      ...lineOne,
      title: "Turning data into",
      color: lineOne.color || "",
      line: 1,
      sortOrder: 1,
    },
    {
      ...canonicalTitles[1],
      ...actionable,
      title: "actionable",
      color: actionable.color || "#958dec",
      line: 1,
      sortOrder: 2,
    },
    {
      ...canonicalTitles[2],
      ...business,
      title: "business insights",
      color: business.color || "#958dec",
      line: 2,
      sortOrder: 3,
    },
  ];
}

function normalizeInsightsPage(entry) {
  const item = unwrapEntity(entry);

  if (!item) {
    return defaultInsightsPage;
  }

  const hero = normalizeHero(item.hero, defaultInsightsPage.hero);

  return {
    hero: {
      ...hero,
      titles: mergeInsightsHeroTitles(hero.titles, defaultInsightsPage.hero.titles),
    },
    statistics:
      item.statistics?.length > 0
        ? item.statistics
            .filter((statItem) => statItem?.label && statItem?.stat)
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((statItem, index) =>
              normalizeStatisticItem(
                statItem,
                defaultInsightsPage.statistics[index] ||
                  defaultInsightsPage.statistics[0],
              ),
            )
        : defaultInsightsPage.statistics,
    benefits: normalizeInsightsSection(
      item.benefits,
      defaultInsightsPage.benefits,
    ),
    featuredInsights: normalizeInsightsSection(
      item.featuredInsights,
      defaultInsightsPage.featuredInsights,
    ),
    coverageMatrix: normalizeInsightsSection(
      item.coverageMatrix,
      defaultInsightsPage.coverageMatrix,
    ),
    timeline: normalizeInsightsSection(
      item.timeline,
      defaultInsightsPage.timeline,
    ),
    discover: normalizeInsightsSection(
      item.discover,
      defaultInsightsPage.discover,
    ),
  };
}

export async function fetchAPI(path, options = {}) {
  if (!STRAPI_URL) {
    return null;
  }

  const {
    headers = {},
    logErrors = true,
    revalidate = 120,
    next: nextFromUser,
    ...fetchOptions
  } = options;

  const nextConfig = {
    tags: ["strapi"],
    revalidate,
    ...(nextFromUser && typeof nextFromUser === "object" ? nextFromUser : {}),
  };

  try {
    const res = await fetch(`${STRAPI_URL}/api/${path}`, {
      headers: {
        "Content-Type": "application/json",
        ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
        ...headers,
      },
      next: nextConfig,
      ...fetchOptions,
    });

    if (!res.ok) {
      if (logErrors) {
        console.error("API Error:", res.status, path);
      }
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Fetch failed:", error);
    return null;
  }
}

export const getGlobalSettings = cache(async () => {
  const data = await fetchAPI(
    "global?populate[siteLogo][fields][0]=url&populate[siteLogo][fields][1]=alternativeText&populate[socialLinks]=*&populate[version]=*&populate[footer][populate][navLinks]=*&populate[footer][populate][socialLinks]=*&populate[footer][populate][legalBlocks]=*&populate[footer][populate][policyLinks]=*",
    { revalidate: 900 },
  );
  return normalizeGlobalSettings(data?.data);
});

export const getHomepage = cache(async () => {
  const data = await fetchAPI(
    "homepage?populate[hero][populate][titles]=*&populate[insightNews]=*&populate[statistics]=*&populate[marketTicker]=*&populate[capabilities]=*&populate[cardsGrid]=*&populate[cta]=*",
    { revalidate: 180 },
  );
  return normalizeHomepage(data?.data);
});

export const getServicesPage = cache(async () => {
  const data = await fetchAPI(
    "services-page?populate[serviceGroups][populate][children][populate][paragraphs]=*&populate[serviceGroups][populate][children][populate][children][populate]=*",
    { revalidate: 180 },
  );
  return normalizeServicesPage(data?.data);
});

export const getIndustriesPage = cache(async () => {
  const data = await fetchAPI(
    "industries-page?populate[menuGroups][populate][paragraphs]=*&populate[menuGroups][populate][children][populate][paragraphs]=*&populate[menuGroups][populate][children][populate][children][populate]=*",
    { revalidate: 180 },
  );
  return normalizeMenuGroupsPage(data?.data);
});

export const getStrategyPage = cache(async () => {
  const data = await fetchAPI(
    "strategy-page?populate[menuGroups][populate][paragraphs]=*&populate[menuGroups][populate][children][populate][paragraphs]=*&populate[menuGroups][populate][children][populate][children][populate]=*",
    { revalidate: 180 },
  );
  return normalizeMenuGroupsPage(data?.data);
});

export const getBusinessProcessesPage = cache(async () => {
  const data = await fetchAPI(
    "business-process?populate[hero][populate][titles]=*&populate[statistics]=*",
    { revalidate: 180 },
  );
  return normalizeBusinessProcessesPage(data?.data);
});

export const getOperationsPage = cache(async () => {
  const dataWithInfrastructure = await fetchAPI(
    "operation?populate[hero][populate][titles]=*&populate[insightNews]=*&populate[statistics]=*&populate[capabilities]=*&populate[cta]=*",
    { logErrors: false, revalidate: 180 },
  );
  const data =
    dataWithInfrastructure ||
    (await fetchAPI(
      "operation?populate[hero][populate][titles]=*&populate[insightNews]=*&populate[statistics]=*&populate[capabilities]=*&populate[cta]=*",
      { revalidate: 180 },
    ));
  return normalizeOperationsPage(data?.data);
});

export const getInfrastructurePage = cache(async () => {
  const data = await fetchAPI(
    "infrastructure?populate[hero][populate][titles]=*&populate[vision]=*&populate[support]=*&populate[profiles]=*",
    { revalidate: 180 },
  );
  return normalizeInfrastructurePage(data?.data);
});

export const getInsightsPage = cache(async () => {
  const data = await fetchAPI(
    "insight?populate[hero][populate][titles]=*&populate[statistics]=*",
    { revalidate: 180 },
  );
  return normalizeInsightsPage(data?.data);
});

export const getExecutionPage = cache(async () => {
  const data = await fetchAPI(
    "execution?populate[hero][populate][titles]=*&populate[cta]=*",
    { revalidate: 180 },
  );
  return normalizeExecutionPage(data?.data);
});

export const getPerformancePage = cache(async () => {
  const data = await fetchAPI(
    "performance?populate[hero][populate][titles]=*&populate[cta]=*",
    { revalidate: 180 },
  );
  return normalizePerformancePage(data?.data);
});

export const getCareersPage = cache(async () => {
  const data = await fetchAPI(
    "careers-page?populate[hero][populate][titles]=*&populate[statistics]=*&populate[quoteSection]=*&populate[valuesItems]=*&populate[teamsItems][populate][links]=*&populate[testimonialsItems]=*&populate[lifeStatsItems]=*",
    { revalidate: 180 },
  );
  return normalizeCareersPage(data?.data);
});
