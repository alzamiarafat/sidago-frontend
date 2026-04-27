import { cache } from "react";
import { buildApiPath, fetchAPI } from "./api";
import { getIndustryMenuGroups as getFallbackIndustryMenuGroups } from "../utils/navigationTabUtils";
import { mainMenu } from "../data/navigation";
import {
  getStrategyChildMenuItems,
  strategyMenuItems,
} from "../data/strategy-menu";
import { socialLinks as fallbackSocialLinks } from "../data/socialLinks";

function flattenStrapiEntry(entry) {
  if (!entry || typeof entry !== "object") {
    return entry;
  }

  if (Array.isArray(entry)) {
    return entry.map(flattenStrapiEntry);
  }

  const source = entry.attributes ?? entry;
  const result = {};

  for (const [key, value] of Object.entries(source)) {
    if (value && typeof value === "object" && "data" in value) {
      result[key] = flattenStrapiEntry(value.data);
      continue;
    }

    result[key] = flattenStrapiEntry(value);
  }

  if (entry.id && !result.id) {
    result.id = entry.id;
  }

  if (entry.documentId && !result.documentId) {
    result.documentId = entry.documentId;
  }

  return result;
}

function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  return [];
}

function normalizeMedia(media) {
  if (!media) {
    return null;
  }

  if (Array.isArray(media)) {
    return media.map(normalizeMedia).filter(Boolean);
  }

  const item = flattenStrapiEntry(media);

  if (!item?.url) {
    return item;
  }

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL ?? "";
  const normalizedUrl = item.url.startsWith("http")
    ? item.url
    : `${baseUrl}${item.url}`;

  return {
    ...item,
    url: normalizedUrl,
  };
}

function normalizeContentPage(page) {
  const item = flattenStrapiEntry(page);

  return {
    ...item,
    paragraphs: toArray(item?.paragraphs),
    stats: toArray(item?.stats),
    insightItems: toArray(item?.insightItems),
    accordionItems: toArray(item?.accordionItems),
    detailSections: toArray(item?.detailSections),
    partnerLogos: toArray(normalizeMedia(item?.partnerLogos)),
    featuredImage: normalizeMedia(item?.featuredImage),
    hero: item?.hero
      ? {
          ...item.hero,
          titles: toArray(item.hero.titles),
        }
      : null,
  };
}

function normalizeSiteConfig(config) {
  const item = flattenStrapiEntry(config);

  return {
    ...item,
    version: {
      label: item?.versionLabel ?? "v2",
    },
    socialLinks: toArray(item?.socialLinks),
    ctaCards: toArray(item?.ctaCards),
    primaryNavigation: toArray(item?.primaryNavigation),
    siteLogo: normalizeMedia(item?.siteLogo),
    partnerLogos: toArray(normalizeMedia(item?.partnerLogos)),
    footerPrimaryLinks: toArray(item?.footerPrimaryLinks),
    footerSecondaryLinks: toArray(item?.footerSecondaryLinks),
    footerLegalText: toArray(item?.footerLegalText),
  };
}

function getCollectionPath(path, searchParams = {}) {
  const query = new URLSearchParams();

  for (const [key, value] of Object.entries(searchParams)) {
    if (value === undefined || value === null || value === "") {
      continue;
    }

    query.set(key, String(value));
  }

  const queryString = query.toString();
  return queryString ? `${path}?${queryString}` : path;
}

const CONTENT_PAGE_QUERY = {
  populate: {
    hero: {
      populate: ["titles"],
    },
    stats: "*",
    insightItems: "*",
    accordionItems: "*",
    detailSections: "*",
    featuredImage: "*",
    partnerLogos: "*",
    seo: "*",
  },
  pagination: {
    pageSize: 200,
  },
  sort: ["menuOrder:asc"],
};

const SITE_CONFIG_QUERY = {
  populate: {
    defaultSeo: "*",
    socialLinks: "*",
    ctaCards: "*",
    primaryNavigation: "*",
    siteLogo: "*",
    partnerLogos: "*",
    footerPrimaryLinks: "*",
    footerSecondaryLinks: "*",
  },
};

export const getSiteConfig = cache(async () => {
  const data = await fetchAPI(buildApiPath("site-config", SITE_CONFIG_QUERY), {
    silent404: true,
  });
  return data?.data ? normalizeSiteConfig(data.data) : null;
});

export const getGlobalSiteSettings = cache(async () => {
  const [siteConfig, serviceNavigation, industryNavigation, strategyNavigation] =
    await Promise.all([
      getSiteConfig(),
      getContentPageNavigation("service"),
      getContentPageNavigation("industry"),
      getContentPageNavigation("strategy"),
    ]);

  return {
    siteName: siteConfig?.siteName ?? "Sidago",
    siteUrl: siteConfig?.siteUrl ?? "https://www.sidago.com",
    siteContactEmail: siteConfig?.siteContactEmail ?? "mailto:info@sidago.com",
    siteLogo: siteConfig?.siteLogo ?? null,
    version: siteConfig?.version ?? { label: "v2" },
    socialLinks: siteConfig?.socialLinks?.length
      ? siteConfig.socialLinks
      : fallbackSocialLinks.map((link) => ({
          platform: link.title,
          href: link.href,
          iconKey: link.icon,
          title: link.title,
        })),
    ctaCards: siteConfig?.ctaCards ?? [],
    primaryNavigation: siteConfig?.primaryNavigation ?? [],
    partnerLogos: siteConfig?.partnerLogos ?? [],
    footerPrimaryLinks: siteConfig?.footerPrimaryLinks ?? [],
    footerSecondaryLinks: siteConfig?.footerSecondaryLinks ?? [],
    footerLegalText: siteConfig?.footerLegalText ?? [],
    serviceNavigation,
    industryNavigation,
    strategyNavigation,
  };
});

export const getContentPages = cache(async (pageType) => {
  const path = buildApiPath("content-pages", {
    ...CONTENT_PAGE_QUERY,
    ...(pageType
      ? {
          filters: {
            pageType: {
              $eq: pageType,
            },
          },
        }
      : {}),
  });
  const data = await fetchAPI(path, { silent404: true });
  return toArray(data?.data).map(normalizeContentPage);
});

export const getContentPageBySlug = cache(async (pageType, slug) => {
  const path = buildApiPath("content-pages", {
    ...CONTENT_PAGE_QUERY,
    pagination: {
      pageSize: 1,
    },
    filters: {
      ...(pageType
        ? {
            pageType: {
              $eq: pageType,
            },
          }
        : {}),
      slug: {
        $eq: slug,
      },
    },
  });
  const data = await fetchAPI(path, { silent404: true });
  const directHit = toArray(data?.data).map(normalizeContentPage)[0] ?? null;

  if (directHit) {
    return directHit;
  }

  const pages = await getContentPages(pageType);
  return pages.find((page) => page.slug === slug) ?? null;
});

function buildHref(pageType, slug) {
  if (pageType === "home") {
    return "/";
  }

  if (["service", "industry", "strategy"].includes(pageType)) {
    return `/${pageType === "service" ? "services" : `${pageType}s`}/${slug}`;
  }

  return `/${slug}`;
}

function buildGroupedNavigation(pages) {
  const visiblePages = pages
    .filter((page) => page.showInNavigation !== false)
    .sort((a, b) => (a.menuOrder ?? 0) - (b.menuOrder ?? 0));

  const bySlug = new Map(visiblePages.map((page) => [page.slug, page]));
  const roots = visiblePages.filter((page) => !page.parentSlug);

  return roots.map((root) => ({
    title: root.navLabel || root.title,
    href: buildHref(root.pageType, root.slug),
    subtitle: root.summary || root.introDescription || "",
    children: visiblePages
      .filter((page) => page.parentSlug === root.slug)
      .map((child) => ({
        title: child.navLabel || child.title,
        href: buildHref(child.pageType, child.slug),
        parent: bySlug.get(child.parentSlug)?.slug ?? null,
      })),
  }));
}

function getFallbackServicePages() {
  const serviceItem = mainMenu.find((item) => item.id === "services");
  const groups = serviceItem?.megaColumns ?? [];

  return groups.flatMap((group) => {
    const rootSlug = group.href?.split("/").filter(Boolean).at(-1) ?? group.label;

    return [
      {
        title: group.label,
        navLabel: group.label,
        slug: rootSlug,
        pageType: "service",
        menuGroup: group.label,
        parentSlug: "",
        href: group.href,
        showInNavigation: true,
        menuOrder: 0,
      },
      ...(group.children ?? []).map((child, index) => ({
        title: child.label,
        navLabel: child.label,
        slug: child.href?.split("/").filter(Boolean).at(-1) ?? child.label,
        pageType: "service",
        menuGroup: group.label,
        parentSlug: rootSlug,
        href: child.href,
        showInNavigation: true,
        menuOrder: index + 1,
      })),
    ];
  });
}

function getFallbackIndustryPages() {
  return getFallbackIndustryMenuGroups().flatMap((group) => {
    const rootSlug = group.href?.split("/").filter(Boolean).at(-1) ?? group.title;

    return [
      {
        title: group.title,
        navLabel: group.title,
        slug: rootSlug,
        pageType: "industry",
        menuGroup: group.title,
        parentSlug: "",
        href: group.href,
        showInNavigation: true,
        menuOrder: 0,
      },
      ...(group.children ?? []).map((child, index) => ({
        title: child.title,
        navLabel: child.title,
        slug: child.href?.split("/").filter(Boolean).at(-1) ?? child.title,
        pageType: "industry",
        menuGroup: group.title,
        parentSlug: rootSlug,
        href: child.href,
        showInNavigation: true,
        menuOrder: index + 1,
      })),
    ];
  });
}

function getFallbackStrategyPages() {
  return [
    ...strategyMenuItems.map((item, index) => ({
      title: item.title,
      navLabel: item.title,
      slug: item.href?.split("/").filter(Boolean).at(-1) ?? item.title,
      pageType: "strategy",
      menuGroup: item.title,
      parentSlug: "",
      href: item.href,
      showInNavigation: true,
      menuOrder: index,
    })),
    ...getStrategyChildMenuItems().map((item, index) => ({
      title: item.title,
      navLabel: item.title,
      slug: item.href?.split("/").filter(Boolean).at(-1) ?? item.title,
      pageType: "strategy",
      menuGroup: item.groupTitle ?? "Strategy",
      parentSlug: item.parentSlug ?? "",
      href: item.href,
      showInNavigation: true,
      menuOrder: index,
    })),
  ];
}

export async function getTypedContentPages(pageType) {
  const pages = await getContentPages(pageType);

  if (pages.length) {
    return pages;
  }

  if (pageType === "service") {
    return getFallbackServicePages();
  }

  if (pageType === "industry") {
    return getFallbackIndustryPages();
  }

  if (pageType === "strategy") {
    return getFallbackStrategyPages();
  }

  return [];
}

export async function getContentPageNavigation(pageType) {
  const pages = await getTypedContentPages(pageType);
  return buildGroupedNavigation(pages);
}

export async function getStrategySlugsFromCms() {
  const pages = await getTypedContentPages("strategy");
  return [...new Set(pages.map((page) => page.slug).filter(Boolean))];
}

export function getPageMetadataFromContent(page, fallback) {
  if (!page) {
    return fallback;
  }

  return {
    title: page?.seo?.metaTitle || page.title,
    description:
      page?.seo?.metaDescription ||
      page.summary ||
      page.introDescription ||
      fallback.description,
    path: page?.seo?.canonicalPath || buildHref(page.pageType, page.slug),
    keywords: toArray(page?.seo?.keywords),
  };
}
