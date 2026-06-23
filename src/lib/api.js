import { cache } from "react";
import {
  normalizeBrandPageFromStrapi,
  normalizeEventsPageFromStrapi,
  normalizeLegalBlocksFromStrapi,
  normalizeLegalDocumentsFromStrapi,
  normalizeServiceLandingPageFromStrapi,
} from "@/src/lib/cms-transforms.mjs";
import { buildMainNavigation } from "@/src/lib/navigation-build.js";

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
    return null;
  }

  const footer = item.footer;

  return {
    siteName: item.siteName || "",
    siteContactEmail: item.siteContactEmail
      ? `mailto:${item.siteContactEmail.replace(/^mailto:/, "")}`
      : null,
    siteLogo: resolveMedia(item.siteLogo),
    version: item.version,
    socialLinks:
      item.socialLinks?.length > 0
        ? item.socialLinks
        : null,
    footer: footer ? normalizeFooter(footer) : null,
  };
}

function normalizeHero(hero) {
  if (!hero) {
    return null;
  }

  const titles =
    hero.titles
      ?.filter((title) => title?.title)
      .slice()
      .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0)) ||
    [];

  return {
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

function resolveInsightNewsHref(itemHref) {
  const trimmed = itemHref?.trim();
  return trimmed && trimmed !== "#" ? trimmed : "#";
}

function normalizeInsightNewsItem(item) {
  if (!item?.title) return null;
  return {
    ...item,
    href: resolveInsightNewsHref(item.href),
    srText: item.srText?.trim() || item.title,
  };
}

function normalizeStatisticItem(item) {
  if (!item?.label || !item?.stat) return null;
  return {
    ...item,
    stat: `${item.stat}`.trim(),
    label: item.label.trim(),
    activeDotColor: item.activeDotColor || "",
  };
}

function normalizeMarketTickerItem(item) {
  if (!item?.title || !item?.price || !item?.avg) return null;
  return {
    ...item,
    title: item.title.trim(),
    price: item.price.trim(),
    avg: item.avg.trim(),
  };
}

function normalizeCapabilityItem(item) {
  if (!item?.title || !item?.description || !item?.href || !item?.video) return null;
  return {
    ...item,
    title: item.title.trim(),
    description: item.description.trim(),
    href: item.href.trim(),
    video: item.video.trim(),
    rotate: item.rotate?.trim() || "rotate(0deg)",
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

function normalizeCardsGridItem(item) {
  if (!item?.cardId || !item?.href || !item?.title) {
    return null;
  }

  const cardId = item.cardId.trim();
  const theme = CARDS_GRID_THEME_BY_ID[cardId];
  const bgClass = theme?.bgClass || item.bgClass?.trim() || "";
  const textClass = theme?.textClass || item.textClass?.trim() || "";

  return {
    ...item,
    cardId,
    href: item.href.trim(),
    srLabel: item.srLabel?.trim() || item.title,
    bgClass,
    textClass,
    colSpan: item.colSpan?.trim() || "",
    title: item.title.trim(),
    subtitle: item.subtitle?.trim() || "",
    decorationType: item.decorationType || "none",
    topType: item.topType || "none",
    leadingIcon:
      item.leadingIcon != null && `${item.leadingIcon}`.trim() !== ""
        ? `${item.leadingIcon}`.trim()
        : undefined,
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

function normalizeFooterLink(item) {
  if (!item?.label) {
    return null;
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

  return {
    ...item,
    label,
    href: href || "#",
    srLabel: item.srLabel?.trim() || label,
  };
}

function normalizeFooterSocialLink(item) {
  if (!item?.label || !item?.href || !item?.platform) {
    return null;
  }

  return {
    ...item,
    label: item.label.trim(),
    href: item.href.trim(),
    platform: item.platform,
  };
}

function normalizeFooterLegalBlock(item) {
  if (!item?.text) {
    return null;
  }

  return {
    ...item,
    text: item.text.trim(),
  };
}

function normalizeFooterNavLinks(navLinks) {
  return navLinks
    .slice()
    .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0))
    .map((link) => normalizeFooterLink(link))
    .filter(Boolean);
}

function normalizeFooter(footer) {
  return {
    navLinks:
      footer.navLinks?.length > 0
        ? normalizeFooterNavLinks(footer.navLinks)
        : null,
    socialLinks:
      footer.socialLinks?.length > 0
        ? footer.socialLinks
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((link) => normalizeFooterSocialLink(link))
            .filter(Boolean)
        : null,
    legalBlocks:
      footer.legalBlocks?.length > 0
        ? footer.legalBlocks
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((block) => normalizeFooterLegalBlock(block))
            .filter(Boolean)
        : null,
    policyLinks:
      footer.policyLinks?.length > 0
        ? footer.policyLinks
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((link) => normalizeFooterLink(link))
            .filter(Boolean)
        : null,
  };
}

function normalizeCtaItem(item) {
  if (!item?.title || !item?.description) return null;
  const title = item.title.trim().toLowerCase();
  const href =
    title === "subscribe"
      ? "/insights/subscribe"
      : title === "apply"
        ? "/company/opportunities"
        : item.href?.trim() || "";
  if (!href) return null;
  return {
    ...item,
    title: item.title.trim(),
    description: item.description.trim(),
    href,
    srLabel: item.srLabel?.trim() || item.title,
    backgroundColor: item.backgroundColor?.trim() || "",
  };
}

function normalizeInfrastructureProfileItem(item) {
  if (
    !item?.eyebrow ||
    !item?.title ||
    !item?.description ||
    !item?.cta ||
    !item?.href
  ) {
    return null;
  }

  return {
    ...item,
    eyebrow: item.eyebrow.trim(),
    title: item.title.trim(),
    description: item.description.trim(),
    cta: item.cta.trim(),
    href: item.href.trim(),
    visualType: item.visualType || "dashboard",
    srText: item.srText?.trim() || item.title,
  };
}

function normalizeInfrastructureVisionItem(item) {
  if (!item?.title || !item?.description) {
    return null;
  }

  return {
    ...item,
    title: item.title.trim(),
    description: item.description.trim(),
    iconType: item.iconType || "uptime",
  };
}

function normalizeInfrastructureSupportItem(item) {
  if (!item?.title || !item?.description) {
    return null;
  }

  return {
    ...item,
    title: item.title.trim(),
    description: item.description.trim(),
    expandedClassName: item.expandedClassName?.trim() || "bg-green-light",
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
    return null;
  }

  const normalizedHero = normalizeHero(hero);

  return {
    hero: {
      ...normalizedHero,
      titles: normalizedHero?.titles || [],
    },
    insightNews:
      insightNews?.length > 0
        ? insightNews
            .filter((newsItem) => newsItem?.title)
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((newsItem) => normalizeInsightNewsItem(newsItem)).filter(Boolean)
        : [],
    statistics:
      statistics?.length > 0
        ? statistics
            .filter((statItem) => statItem?.label && statItem?.stat)
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((statItem) => normalizeStatisticItem(statItem)).filter(Boolean)
        : [],
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
            .map((tickerItem) => normalizeMarketTickerItem(tickerItem)).filter(Boolean)
        : [],
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
            .map((capabilityItem) => normalizeCapabilityItem(capabilityItem)).filter(Boolean)
        : [],
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
              return normalizeCardsGridItem(cardItem);
            })
        : [],
    cta:
      cta?.length > 0
        ? cta
            .filter(
              (ctaItem) =>
                ctaItem?.title && ctaItem?.description,
            )
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((ctaItem, index) =>
              normalizeCtaItem(ctaItem),
            )
        : [],
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
      groups,
  };
}

function normalizeMenuGroupsPage(entry, fallbackGroups = []) {
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

function normalizeJsonSection(section, childKey = "items") {
  if (!section?.title) {
    return null;
  }

  const children = Array.isArray(section[childKey])
    ? section[childKey].filter((item) => item?.title)
    : [];

  return {
    ...section,
    [childKey]: children,
  };
}

function normalizeBusinessProcessesPage(entry) {
  const item = unwrapEntity(entry);

  if (!item) {
    return null;
  }

  return {
    hero: normalizeHero(item.hero),
    statistics:
      item.statistics?.length > 0
        ? item.statistics
            .filter((statItem) => statItem?.label && statItem?.stat)
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((statItem) => normalizeStatisticItem(statItem)).filter(Boolean)
        : null,
    partnerBenefit: normalizeJsonSection(
      item.partnerBenefit,
      "benefits",
    ),
    processes: normalizeJsonSection(
      item.processes),
    solutions: normalizeJsonSection(
      item.solutions),
    workOverview: item.workOverview?.title
      ? {
          
          ...item.workOverview,
          metrics:
            item.workOverview.metrics?.length > 0
              ? item.workOverview.metrics
              : null,
        }
      : null,
  };
}

function normalizeOperationsPage(entry) {
  const item = unwrapEntity(entry);

  if (!item) {
    return null;
  }

  return {
    hero: normalizeHero(item.hero),
    videoInMotion: {
      videoSrc:
        item.videoInMotion?.videoSrc?.trim() ||
        "",
      posterSrc:
        item.videoInMotion?.posterSrc?.trim() ||
        "",
      posterAlt:
        item.videoInMotion?.posterAlt?.trim() ||
        "",
    },
    insightNews:
      item.insightNews?.length > 0
        ? item.insightNews
            .filter((newsItem) => newsItem?.title)
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((newsItem) => normalizeInsightNewsItem(newsItem)).filter(Boolean)
        : null,
    statistics:
      item.statistics?.length > 0
        ? item.statistics
            .filter((statItem) => statItem?.label && statItem?.stat)
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((statItem) => normalizeStatisticItem(statItem)).filter(Boolean)
        : null,
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
            .map((capabilityItem) => normalizeCapabilityItem(capabilityItem)).filter(Boolean)
        : null,
    cta:
      item.cta?.length > 0
        ? item.cta
            .filter(
              (ctaItem) =>
                ctaItem?.title && ctaItem?.description,
            )
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((ctaItem, index) =>
              normalizeCtaItem(
                ctaItem),
            )
        : null,
  };
}

function normalizeCareersStatisticItem(item) {
  const labelLines = Array.isArray(item?.labelLines)
    ? item.labelLines.filter((line) => `${line}`.trim())
    : null;

  if (!item?.stat || !labelLines?.length) return null;

  return {
    stat: `${item.stat}`.trim(),
    labelLines,
    width: item.width,
    activeDotColor: item.activeDotColor || "",
    sortOrder: item.sortOrder,
  };
}

function normalizeCareersTeamLink(item) {
  if (!item?.label) return null;

  const label = item.label.trim();
  const href =
    item.href?.trim() ||
    (label === "Open roles"
      ? "/company/opportunities"
      : label === "Explore Sidago trading" ||
          label === "Explore Sidago infrastructure" ||
          label === "Explore Sidago technology"
        ? "/infrastructure"
        : "");

  if (!href) return null;

  return {
    href,
    label,
    srText: item.srText?.trim() || label,
    sortOrder: item.sortOrder,
  };
}

function normalizeCareersTeamItem(item) {
  if (!item?.title || !item?.description || !item?.imageSrc) return null;

  return {
    title: item.title.trim(),
    description: item.description.trim(),
    hoverColor: item.hoverColor?.trim() || "",
    sortOrder: item.sortOrder,
    image: {
      src: item.imageSrc.trim(),
      width: item.imageWidth ?? 1152,
      height: item.imageHeight ?? 1182,
    },
    links:
      item.links?.length > 0
        ? item.links
            .filter((link) => link?.href && link?.label)
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((link) => normalizeCareersTeamLink(link))
            .filter(Boolean)
        : [],
  };
}

function normalizeCareersValuesItem(item) {
  const bullets = Array.isArray(item?.bullets)
    ? item.bullets.filter((line) => `${line}`.trim())
    : null;

  if (!item?.title || !bullets?.length) return null;

  return {
    title: item.title.trim(),
    iconType: item.iconType || "",
    bullets,
    sortOrder: item.sortOrder,
  };
}

function normalizeCareersTestimonialItem(item) {
  const titleParts = Array.isArray(item?.titleParts)
    ? item.titleParts.filter((part) => part?.text)
    : null;

  if (!item?.name || !item?.role || !item?.quote || !item?.imageSrc) {
    return null;
  }

  return {
    name: item.name.trim(),
    role: item.role.trim(),
    quote: item.quote.trim(),
    titleParts: titleParts?.length ? titleParts : [],
    sortOrder: item.sortOrder,
    image: {
      src: item.imageSrc.trim(),
      width: item.imageWidth ?? 1100,
      height: item.imageHeight ?? 880,
      alt: item.imageAlt?.trim() || item.name,
    },
  };
}

function normalizeCareersPage(entry) {
  const item = unwrapEntity(entry);

  if (!item) {
    return null;
  }

  const hero = normalizeHero(item.hero);

  return {
    hero: {
      ...hero,
      ctaLabel:
        item.heroCtaLabel?.trim() ||
        "",
      ctaHref:
        item.heroCtaHref?.trim() || "",
      ctaSrText:
        item.heroCtaSrText?.trim() ||
        "",
      ctaButtonClass:
        item.heroCtaButtonClass?.trim() ||
        "",
      sideLogo: null,
    },
    statistics:
      item.statistics?.length > 0
        ? item.statistics
            .filter((stat) => stat?.stat && stat?.labelLines?.length)
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((stat) => normalizeCareersStatisticItem(stat))
            .filter(Boolean)
        : null,
    quoteSection: {
      quote:
        item.quoteSection?.quote?.trim() ||
        "",
      attribution:
        item.quoteSection?.attribution?.trim() ||
        "",
    },
    valuesFlipSection: {
      title:
        item.valuesTitle?.trim() || "",
      headingId:
        item.valuesHeadingId?.trim() ||
        "",
      items:
        item.valuesItems?.length > 0
          ? item.valuesItems
              .filter((value) => value?.title && value?.bullets?.length)
              .slice()
              .sort(
                (left, right) =>
                  (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
              )
              .map((value) => normalizeCareersValuesItem(value))
              .filter(Boolean)
          : null,
    },
    teamsSection: {
      lead:
        item.teamsLead?.trim() || "",
      highlight:
        item.teamsHighlight?.trim() ||
        "",
      headingId:
        item.teamsHeadingId?.trim() ||
        "",
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
              .map((team) => normalizeCareersTeamItem(team))
              .filter(Boolean)
          : null,
    },
    teamTestimonialsSection: {
      title:
        item.testimonialsTitle?.trim() ||
        "",
      headingId:
        item.testimonialsHeadingId?.trim() ||
        "",
      className:
        item.testimonialsClassName?.trim() ||
        "",
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
              .map((testimonial) =>
                normalizeCareersTestimonialItem(testimonial),
              )
              .filter(Boolean)
          : null,
    },
    lifeSection: {
      lead: item.lifeLead?.trim() || "",
      highlight:
        item.lifeHighlight?.trim() ||
        "",
      headingId:
        item.lifeHeadingId?.trim() ||
        "",
      description:
        item.lifeDescription?.trim() ||
        "",
      stage: {
        label:
          item.lifeStageLabel?.trim() ||
          "",
        footTitle:
          item.lifeStageFootTitle?.trim() ||
          "",
        footDescription:
          item.lifeStageFootDescription?.trim() ||
          "",
        stats:
          item.lifeStageStats?.length > 0
            ? item.lifeStageStats.map((stat) => ({
                value: stat.value ?? 0,
                suffix: stat.suffix ?? "",
                label: stat.label?.trim() || "",
              }))
            : [],
      },
    },
    lifeStatsSection: {
      fontSizeMobile:
        item.lifeStatsFontSizeMobile ??
        "",
      fontSizeDesktop:
        item.lifeStatsFontSizeDesktop ??
        "",
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
                  stat),
              )
          : null,
    },
  };
}

function normalizeInfrastructurePage(entry) {
  const item = unwrapEntity(entry);

  if (!item) {
    return null;
  }

  return {
    hero: normalizeHero(item.hero),
    visionTitle:
      item.visionTitle?.trim() || "",
    visionDescription:
      item.visionDescription?.trim() ||
      "",
    vision:
      item.vision?.length > 0
        ? item.vision
            .filter((visionItem) => visionItem?.title && visionItem?.description)
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((visionItem) =>
              normalizeInfrastructureVisionItem(visionItem),
            )
            .filter(Boolean)
        : null,
    supportTitle:
      item.supportTitle?.trim() || "",
    supportHighlight:
      item.supportHighlight?.trim() ||
      "",
    supportDescription:
      item.supportDescription?.trim() ||
      "",
    supportImageSrc:
      item.supportImageSrc?.trim() ||
      "",
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
            .map((supportItem) =>
              normalizeInfrastructureSupportItem(supportItem),
            )
            .filter(Boolean)
        : null,
    profilesTitle:
      item.profilesTitle?.trim() || "",
    profilesDescription:
      item.profilesDescription?.trim() ||
      "",
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
            .map((profileItem) =>
              normalizeInfrastructureProfileItem(profileItem),
            )
            .filter(Boolean)
        : null,
  };
}

function mergePerformanceHeroTitles(titles) {
  return (titles ?? [])
    .filter((item) => item?.title)
    .slice()
    .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0))
    .map((item, index) => ({
      ...item,
      line: index + 1,
      sortOrder: index + 1,
    }));
}

function normalizePerformancePage(entry) {
  const item = unwrapEntity(entry);

  if (!item) {
    return null;
  }

  const heroData = normalizeHero(item.hero);

  return {
    hero: {
      ...heroData,
      titles: mergePerformanceHeroTitles(heroData?.titles),
    },
    stats:
      Array.isArray(item.stats) && item.stats.length > 0
        ? item.stats
        : null,
    dashboardSection: {
      
      ...(item.dashboardSection || {}),
    },
    tabsSection: {
      
      ...(item.tabsSection || {}),
    },
    imageCarouselSection: {
      
      ...(item.imageCarouselSection || {}),
    },
    capabilitiesSection: {
      
      ...(item.capabilitiesSection || {}),
    },
    methodSection: {
      
      ...(item.methodSection || {}),
    },
    cta:
      item.cta?.length > 0
        ? item.cta
            .filter(
              (ctaItem) =>
                ctaItem?.title && ctaItem?.description,
            )
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((ctaItem, index) =>
              normalizeCtaItem(
                ctaItem),
            )
        : null,
  };
}

function normalizeInsightsSection(section) {
  if (!section?.title) {
    return null;
  }

  const items = Array.isArray(section.items)
    ? section.items.filter((item) => item?.title)
    : [];

  return {
    ...section,
    items,
  };
}

function mergeInsightsHeroTitles(titles) {
  const pieces = (titles ?? [])
    .filter((item) => item?.title)
    .slice()
    .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0));

  if (!pieces.length) {
    return [];
  }

  const findPiece = (pattern) =>
    pieces.find((item) => pattern.test(`${item.title}`.trim()));

  const lineOne = findPiece(/^turning data into$/i) || pieces[0];
  const actionable =
    findPiece(/^actionable$/i) || findPiece(/actionable/i) || pieces[1] || pieces[0];
  const business =
    findPiece(/business insights/i) ||
    pieces[pieces.length - 1] ||
    pieces[0];

  return [
    {
      ...lineOne,
      title: "Turning data into",
      color: lineOne.color || "",
      line: 1,
      sortOrder: 1,
    },
    {
      ...actionable,
      title: "actionable",
      color: actionable.color || "#958dec",
      line: 1,
      sortOrder: 2,
    },
    {
      ...business,
      title: "business insights",
      color: business.color || "#958dec",
      line: 2,
      sortOrder: 3,
    },
  ];
}

function normalizeExecutionPage(entry) {
  const item = unwrapEntity(entry);

  if (!item) {
    return null;
  }

  const normalizeSection = (section, arrayKeys = []) => {
    const normalized = { ...(section || {}) };
    arrayKeys.forEach((key) => {
      normalized[key] =
        Array.isArray(section?.[key]) && section[key].length > 0
          ? section[key]
          : [];
    });
    return normalized;
  };

  const aboutSection = normalizeSection(item.aboutSection, [
    "supportChips",
    "overviewItems",
  ]);
  aboutSection.visual = { ...(item.aboutSection?.visual || {}) };

  return {
    hero: normalizeHero(item.hero),
    aboutSection,
    coreSection: normalizeSection(item.coreSection, ["cards"]),
    workflowSection: normalizeSection(item.workflowSection, ["steps"]),
    resultsSection: normalizeSection(item.resultsSection, ["metrics"]),
    cta:
      item.cta?.length > 0
        ? item.cta
            .filter(
              (ctaItem) =>
                ctaItem?.title && ctaItem?.description,
            )
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((ctaItem) => normalizeCtaItem(ctaItem))
            .filter(Boolean)
        : null,
  };
}

function normalizeInsightsPage(entry) {
  const item = unwrapEntity(entry);

  if (!item) {
    return null;
  }

  const hero = normalizeHero(item.hero);

  return {
    hero: {
      ...hero,
      titles: mergeInsightsHeroTitles(hero.titles),
    },
    statistics:
      item.statistics?.length > 0
        ? item.statistics
            .filter((statItem) => statItem?.label && statItem?.stat)
            .slice()
            .sort(
              (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
            )
            .map((statItem) => normalizeStatisticItem(statItem)).filter(Boolean)
        : null,
    benefits: normalizeInsightsSection(
      item.benefits),
    featuredInsights: normalizeInsightsSection(
      item.featuredInsights),
    coverageMatrix: normalizeInsightsSection(
      item.coverageMatrix),
    timeline: normalizeInsightsSection(
      item.timeline),
    discover: normalizeInsightsSection(
      item.discover),
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

function normalizeContactTopic(item, index) {
  if (!item?.slug || !item?.label) return null;
  return {
    slug: item.slug.trim(),
    label: item.label.trim(),
    srLabel: item.srLabel?.trim() || item.label.trim(),
    cardClassName: item.cardClassName?.trim() || "bg-gray-defi-graphite text-gray-off-white",
    spanClassName: item.spanClassName?.trim() || "col-span-4 xl:col-span-3",
    showServicesField: item.showServicesField ?? false,
    description: item.description?.trim() || `Contact Sidago about ${item.label.trim()}.`,
    sortOrder: item.sortOrder ?? index + 1,
  };
}

function normalizeContactPage(entry) {
  const item = unwrapEntity(entry);
  if (!item) return null;

  const inquiryServices = Array.isArray(item.inquiryServices)
    ? item.inquiryServices
        .filter((service) => service?.title)
        .slice()
        .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0))
        .map((service) => ({
          title: service.title.trim(),
          description: service.description?.trim() || "",
        }))
    : [];

  return {
    eyebrow: item.eyebrow?.trim() || "",
    heading: item.heading?.trim() || "",
    subheading: item.subheading?.trim() || "",
    sidebarImageSrc: item.sidebarImageSrc?.trim() || "",
    inquiryServices,
    topics:
      item.topics?.length > 0
        ? item.topics
            .slice()
            .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0))
            .map((topic, index) => normalizeContactTopic(topic, index))
            .filter(Boolean)
        : [],
    cta:
      item.cta?.length > 0
        ? item.cta
            .slice()
            .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0))
            .map((ctaItem) => normalizeCtaItem(ctaItem))
            .filter(Boolean)
        : [],
  };
}

function normalizeBrandPage(entry) {
  return normalizeBrandPageFromStrapi(unwrapEntity(entry));
}

function normalizeEventsPage(entry) {
  const item = unwrapEntity(entry);
  if (!item) return null;

  const normalized = normalizeEventsPageFromStrapi(item);
  if (!normalized) return null;

  const hero = normalizeHero(item.hero);

  return {
    ...normalized,
    hero: {
      ...hero,
      backgroundClassName: item.backgroundClassName?.trim() || "",
      videoClass: "events-hero-video",
    },
    heroProps: {
      ...hero,
      backgroundClassName: item.backgroundClassName?.trim() || "",
      videoClass: "events-hero-video",
      titles: hero?.titles,
    },
  };
}

function normalizeLegalPolicy(entry) {
  const item = unwrapEntity(entry);
  if (!item) return null;
  const blocks = normalizeLegalBlocksFromStrapi(item.blocks || []);
  return {
    title: item.title?.trim() || "",
    lastUpdated: item.lastUpdated?.trim() || "",
    activePolicy: item.activePolicy?.trim() || "",
    blocks,
  };
}

function normalizeLegalHub(entry) {
  const item = unwrapEntity(entry);

  if (!item) {
    return null;
  }

  const documents = normalizeLegalDocumentsFromStrapi(item.documents);

  return {
    hubTitle: item.hubTitle?.trim() || "",
    hubDescription:
      item.hubDescription?.trim() || "",
    lastUpdated: item.lastUpdated?.trim() || "",
    documents: documents,
  };
}

export const getContactPage = cache(async () => {
  const data = await fetchAPI(
    "contact-page?populate[topics]=*&populate[cta]=*",
    { revalidate: 180 },
  );
  return normalizeContactPage(data?.data);
});

export const getBrandPage = cache(async () => {
  const data = await fetchAPI(
    "brand-page?populate[logoSlides]=*&populate[harnessingImages]=*&populate[mediaHeadshots]=*&populate[mediaBackdrops]=*",
    { revalidate: 180 },
  );
  return normalizeBrandPage(data?.data);
});

const EVENTS_POPULATE =
  "events-page?populate[hero][populate][titles]=*&populate[upcomingEvents]=*&populate[endpointStats]=*&populate[endpointShowcasePanels]=*&populate[pastSpeakers]=*&populate[pastConversationsItems]=*&populate[cta]=*";

export const getEventsPage = cache(async () => {
  const data = await fetchAPI(EVENTS_POPULATE, { revalidate: 180 });
  return normalizeEventsPage(data?.data);
});

const LEGAL_BLOCKS_POPULATE =
  "populate[blocks][on][shared.legal-bullet-list][populate][items]=*&populate[blocks][on][shared.legal-contact-box][populate][lines]=*&populate[blocks][populate]=*";

export const getPrivacyPolicy = cache(async () => {
  const data = await fetchAPI(`privacy-policy?${LEGAL_BLOCKS_POPULATE}`, {
    revalidate: 900,
  });
  return normalizeLegalPolicy(data?.data);
});

export const getCookiesPolicy = cache(async () => {
  const data = await fetchAPI(`cookies-policy?${LEGAL_BLOCKS_POPULATE}`, {
    revalidate: 900,
  });
  return normalizeLegalPolicy(data?.data);
});

export const getModernSlaveryPolicy = cache(async () => {
  const data = await fetchAPI(`modern-slavery-policy?${LEGAL_BLOCKS_POPULATE}`, {
    revalidate: 900,
  });
  return normalizeLegalPolicy(data?.data);
});

export const getLegalHub = cache(async () => {
  const data = await fetchAPI("legal-hub?populate[documents]=*", {
    revalidate: 900,
  });
  return normalizeLegalHub(data?.data);
});

const SERVICE_LANDING_POPULATE = [
  "populate[hero][populate][breadcrumbs]=*",
  "populate[hero][populate][descriptionParts]=*",
  "populate[atAGlance][populate][tags]=*",
  "populate[atAGlance][populate][bullets]=*",
  "populate[reportContents][populate][tableOfContents]=*",
  "populate[reportContents][populate][mainSectionParagraphs][populate][parts]=*",
  "populate[reportContents][populate][mainSectionBlocks][on][shared.service-landing-report-paragraph][populate][parts]=*",
  "populate[reportContents][populate][mainSectionBlocks][on][shared.service-landing-report-image][populate]=*",
  "populate[reportContents][populate][mainSectionImage]=*",
  "populate[reportContents][populate][disclaimers]=*",
  "populate[pressRelease][populate][blocks][on][shared.service-landing-report-paragraph][populate][parts]=*",
  "populate[pressRelease][populate][blocks][on][shared.service-landing-report-image][populate]=*",
  "populate[subscribe][populate][newsletterOptions]=*",
  "populate[similarInsights][populate][cards]=*",
].join("&");

export const getServiceLandingPage = cache(async (slug) => {
  const data = await fetchAPI(
    `service-landing-pages?filters[slug][$eq]=${encodeURIComponent(slug)}&${SERVICE_LANDING_POPULATE}`,
    { revalidate: 180 },
  );
  const item = Array.isArray(data?.data) ? data.data[0] : data?.data;

  return normalizeServiceLandingPageFromStrapi(unwrapEntity(item));
});

function normalizeMainNavigationUtilityLinks(entry) {
  const item = unwrapEntity(entry);
  if (!item?.utilityLinks?.length) return [];

  return item.utilityLinks
    .slice()
    .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0))
    .map((link, index) => ({
      label: link.label?.trim() || "",
      href: link.href?.trim() || "",
      srLabel: link.srLabel?.trim() || link.label?.trim() || "",
      sortOrder: link.sortOrder ?? index + 1,
    }));
}

export const getMainNavigation = cache(async () => {
  const [servicesPage, industriesPage, strategyPage, mainNavigation] =
    await Promise.all([
      getServicesPage(),
      getIndustriesPage(),
      getStrategyPage(),
      fetchAPI("main-navigation?populate[utilityLinks]=*", {
        revalidate: 180,
      }),
    ]);

  const utilityLinks = normalizeMainNavigationUtilityLinks(
    mainNavigation?.data,
  );

  return buildMainNavigation({
    serviceGroups: servicesPage?.serviceGroups,
    industryGroups: industriesPage?.menuGroups,
    strategyGroups: strategyPage?.menuGroups,
    utilityLinks,
  });
});

export const getSitePage = cache(async (slug) => {
  const data = await fetchAPI(
    `site-pages?filters[slug][$eq]=${encodeURIComponent(slug)}`,
    { revalidate: 180 },
  );
  const item = Array.isArray(data?.data) ? data.data[0] : data?.data;

  const entry = unwrapEntity(item);
  if (!entry?.content) return null;
  return entry.content;
});
