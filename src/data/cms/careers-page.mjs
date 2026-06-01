import {
  heroBanner,
  lifeSection,
  lifeStatsSection,
  quoteSection,
  statistics,
  teamTestimonialsSection,
  teamsSection,
  valuesFlipSection,
} from "../../components/sections/v2/careers/data.js";

export const defaultCareersPage = {
  hero: heroBanner,
  statistics,
  quoteSection,
  valuesFlipSection,
  teamsSection,
  teamTestimonialsSection,
  lifeSection,
  lifeStatsSection,
};

function sortByOrder(items) {
  return [...(items ?? [])].sort(
    (left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0),
  );
}

export function careersPageToStrapiSeed(page = defaultCareersPage) {
  const hero = page.hero ?? heroBanner;

  return {
    hero: {
      useVideo: hero.useVideo ?? false,
      imageSrc: hero.imageSrc ?? "",
      subtitle: hero.subtitle ?? "",
      videoSectionClass: hero.videoSectionClass ?? "",
      videoClass: hero.videoClass ?? "",
      fontWeight: hero.fontWeight ?? 400,
      lighterTheme: hero.lighterTheme ?? false,
      loop: hero.loop ?? false,
      lighterBgColor: hero.lighterBgColor ?? "bg-[#f0f1f1]",
      titles: sortByOrder(hero.titles),
    },
    heroCtaLabel: hero.ctaLabel ?? "",
    heroCtaHref: hero.ctaHref ?? "",
    heroCtaSrText: hero.ctaSrText ?? "",
    heroCtaButtonClass: hero.ctaButtonClass ?? "",
    statistics: sortByOrder(page.statistics).map((item) => ({
      stat: item.stat,
      labelLines: item.labelLines ?? [],
      width: item.width,
      activeDotColor: item.activeDotColor,
      sortOrder: item.sortOrder ?? 0,
    })),
    quoteSection: {
      quote: page.quoteSection?.quote ?? "",
      attribution: page.quoteSection?.attribution ?? "",
    },
    valuesTitle: page.valuesFlipSection?.title ?? "",
    valuesHeadingId: page.valuesFlipSection?.headingId ?? "",
    valuesItems: sortByOrder(page.valuesFlipSection?.items).map((item) => ({
      title: item.title,
      iconType: item.iconType,
      bullets: item.bullets ?? [],
      sortOrder: item.sortOrder ?? 0,
    })),
    teamsLead: page.teamsSection?.lead ?? "",
    teamsHighlight: page.teamsSection?.highlight ?? "",
    teamsHeadingId: page.teamsSection?.headingId ?? "",
    teamsItems: sortByOrder(page.teamsSection?.items).map((item) => ({
      title: item.title,
      description: item.description,
      hoverColor: item.hoverColor ?? "",
      imageSrc: item.image?.src ?? "",
      imageWidth: item.image?.width ?? 1152,
      imageHeight: item.image?.height ?? 1182,
      links: sortByOrder(item.links).map((link, index) => ({
        href: link.href,
        label: link.label,
        srText: link.srText ?? link.label,
        sortOrder: link.sortOrder ?? index + 1,
      })),
      sortOrder: item.sortOrder ?? 0,
    })),
    testimonialsTitle: page.teamTestimonialsSection?.title ?? "",
    testimonialsHeadingId: page.teamTestimonialsSection?.headingId ?? "",
    testimonialsClassName: page.teamTestimonialsSection?.className ?? "",
    testimonialsItems: sortByOrder(page.teamTestimonialsSection?.items).map(
      (item) => ({
        name: item.name,
        role: item.role,
        quote: item.quote,
        titleParts: item.titleParts ?? [],
        imageSrc: item.image?.src ?? "",
        imageWidth: item.image?.width ?? 1100,
        imageHeight: item.image?.height ?? 880,
        imageAlt: item.image?.alt ?? "",
        sortOrder: item.sortOrder ?? 0,
      }),
    ),
    lifeLead: page.lifeSection?.lead ?? "",
    lifeHighlight: page.lifeSection?.highlight ?? "",
    lifeHeadingId: page.lifeSection?.headingId ?? "",
    lifeDescription: page.lifeSection?.description ?? "",
    lifeDecorImageSrc: page.lifeSection?.decorImage?.src ?? "",
    lifeDecorImageAlt: page.lifeSection?.decorImage?.alt ?? "",
    lifeDecorImageWidth: page.lifeSection?.decorImage?.width ?? 1152,
    lifeDecorImageHeight: page.lifeSection?.decorImage?.height ?? 1152,
    lifeVideoSrc: page.lifeSection?.video?.src ?? "",
    lifeVideoPreload: page.lifeSection?.video?.preload ?? "metadata",
    lifeStatsFontSizeMobile: page.lifeStatsSection?.fontSizeMobile ?? 36,
    lifeStatsFontSizeDesktop: page.lifeStatsSection?.fontSizeDesktop ?? 48,
    lifeStatsItems: sortByOrder(page.lifeStatsSection?.items).map((item) => ({
      stat: item.stat,
      label: item.label,
      width: item.width,
      activeDotColor: item.activeDotColor,
      sortOrder: item.sortOrder ?? 0,
    })),
  };
}
