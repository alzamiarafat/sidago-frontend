import { cache } from "react";
import {
  defaultBusinessProcessesPage,
  defaultExecutionPage,
  defaultGlobalSettings,
  defaultHomepage,
  defaultInsightsPage,
  defaultOperationsPage,
} from "@/src/data/cms/defaults";

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

function normalizeInsightNewsItem(item, fallbackItem) {
  if (!item?.title) {
    return fallbackItem;
  }

  return {
    ...fallbackItem,
    ...item,
    href: item.href?.trim() || fallbackItem.href || "#",
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

function normalizeCardsGridItem(item, fallbackItem) {
  if (!item?.cardId || !item?.href || !item?.title) {
    return fallbackItem;
  }

  return {
    ...fallbackItem,
    ...item,
    cardId: item.cardId.trim(),
    href: item.href.trim(),
    srLabel: item.srLabel?.trim() || fallbackItem.srLabel || item.title,
    bgClass: item.bgClass?.trim() || fallbackItem.bgClass,
    textClass: item.textClass?.trim() || fallbackItem.textClass,
    colSpan: item.colSpan?.trim() || fallbackItem.colSpan,
    title: item.title.trim(),
    subtitle: item.subtitle?.trim() || "",
    decorationType:
      item.decorationType || fallbackItem.decorationType || "none",
    topType: item.topType || fallbackItem.topType || "none",
  };
}

function normalizeFooterLink(item, fallbackItem) {
  if (!item?.label || !item?.href) {
    return fallbackItem;
  }

  return {
    ...fallbackItem,
    ...item,
    label: item.label.trim(),
    href: item.href.trim(),
    srLabel: item.srLabel?.trim() || item.label,
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

function normalizeFooter(footer) {
  return {
    navLinks:
      footer.navLinks?.length > 0
        ? footer.navLinks
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((link, index) =>
              normalizeFooterLink(
                link,
                defaultGlobalSettings.footer.navLinks[index] ||
                  defaultGlobalSettings.footer.navLinks[0],
              ),
            )
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

  return {
    hero: normalizeHero(hero),
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
            .map((cardItem, index) =>
              normalizeCardsGridItem(
                cardItem,
                defaultHomepage.cardsGrid[index] ||
                  defaultHomepage.cardsGrid[0],
              ),
            )
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
    infrastructureProfiles:
      item.infrastructureProfiles?.length > 0
        ? item.infrastructureProfiles
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
                defaultOperationsPage.infrastructureProfiles[index] ||
                  defaultOperationsPage.infrastructureProfiles[0],
              ),
            )
        : defaultOperationsPage.infrastructureProfiles,
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

function normalizeInsightsPage(entry) {
  const item = unwrapEntity(entry);

  if (!item) {
    return defaultInsightsPage;
  }

  return {
    hero: normalizeHero(item.hero, defaultInsightsPage.hero),
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
    revalidate = 60,
    ...fetchOptions
  } = options;

  try {
    const res = await fetch(`${STRAPI_URL}/api/${path}`, {
      headers: {
        "Content-Type": "application/json",
        ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
        ...headers,
      },
      next: { revalidate },
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
  );
  return normalizeGlobalSettings(data?.data);
});

export const getHomepage = cache(async () => {
  const data = await fetchAPI(
    "homepage?populate[hero][populate][titles]=*&populate[insightNews]=*&populate[statistics]=*&populate[marketTicker]=*&populate[capabilities]=*&populate[cardsGrid]=*&populate[cta]=*",
  );
  return normalizeHomepage(data?.data);
});

export const getBusinessProcessesPage = cache(async () => {
  const data = await fetchAPI(
    "business-process?populate[hero][populate][titles]=*&populate[statistics]=*",
  );
  return normalizeBusinessProcessesPage(data?.data);
});

export const getOperationsPage = cache(async () => {
  const dataWithInfrastructure = await fetchAPI(
    "operation?populate[hero][populate][titles]=*&populate[insightNews]=*&populate[statistics]=*&populate[capabilities]=*&populate[infrastructureProfiles]=*&populate[cta]=*",
    { logErrors: false },
  );
  const data =
    dataWithInfrastructure ||
    (await fetchAPI(
      "operation?populate[hero][populate][titles]=*&populate[insightNews]=*&populate[statistics]=*&populate[capabilities]=*&populate[cta]=*",
    ));
  return normalizeOperationsPage(data?.data);
});

export const getInsightsPage = cache(async () => {
  const data = await fetchAPI(
    "insight?populate[hero][populate][titles]=*&populate[statistics]=*",
  );
  return normalizeInsightsPage(data?.data);
});

export const getExecutionPage = cache(async () => {
  const data = await fetchAPI(
    "execution?populate[hero][populate][titles]=*&populate[cta]=*",
  );
  return normalizeExecutionPage(data?.data);
});
