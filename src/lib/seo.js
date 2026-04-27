import {
  getContentPageBySlug,
  getContentPageNavigation,
  getPageMetadataFromContent,
} from "@/src/lib/cms";
import { mainMenu } from "@/src/data/navigation";
import {
  getStrategyChildMenuItems,
  strategyMenuItems,
} from "@/src/data/strategy-menu";

export const SITE_URL = "https://www.sidago.com";
export const SITE_NAME = "Sidago";
export const DEFAULT_OG_IMAGE = "/favicon.ico";

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, SITE_URL).toString();
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const url = absoluteUrl(path);

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: absoluteUrl(DEFAULT_OG_IMAGE),
          width: 512,
          height: 512,
          alt: `${SITE_NAME} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(DEFAULT_OG_IMAGE)],
    },
  };
}

export const routeMetadata = {
  home: buildPageMetadata({
    title: "Digital Services, Strategy, and Business Solutions",
    description:
      "Sidago provides digital services, business strategy, operational support, and industry-focused solutions for modern organizations.",
    path: "/",
    keywords: [
      "Sidago",
      "digital services",
      "business solutions",
      "strategy consulting",
      "operational support",
    ],
  }),
  contact: buildPageMetadata({
    title: "Contact Sidago",
    description:
      "Get in touch with Sidago to discuss digital services, business strategy, operations, and project delivery support.",
    path: "/contact",
  }),
  events: buildPageMetadata({
    title: "Sidago Events",
    description:
      "Explore Sidago events, meetups, speakers, and industry conversations shaping business strategy and digital transformation.",
    path: "/events",
  }),
  forwards: buildPageMetadata({
    title: "Forwards",
    description:
      "Explore Sidago Forwards services, governance support, and strategic solutions for decentralized and digital-first organizations.",
    path: "/forwards",
  }),
  governance: buildPageMetadata({
    title: "Governance",
    description:
      "Governance-focused support and strategic guidance from Sidago for structured decision-making and organizational execution.",
    path: "/governance",
  }),
  industries: buildPageMetadata({
    title: "Industries",
    description:
      "Industry-specific business support from Sidago across commercial, financial, technology, healthcare, retail, and more.",
    path: "/industries",
  }),
  marketplace: buildPageMetadata({
    title: "Marketplace",
    description:
      "Explore Sidago marketplace offerings and digital business services tailored for modern operational needs.",
    path: "/marketplace",
  }),
  node: buildPageMetadata({
    title: "NODE",
    description:
      "Discover Sidago NODE insights, research, and decentralized finance perspectives designed for modern digital markets.",
    path: "/node",
  }),
  options: buildPageMetadata({
    title: "Options",
    description:
      "Explore Sidago options research, market insights, and strategic content for modern digital finance and business operations.",
    path: "/options",
  }),
  research: buildPageMetadata({
    title: "Research",
    description:
      "Read Sidago research, market analysis, and strategic insights across business operations, services, and industries.",
    path: "/research",
  }),
  sales: buildPageMetadata({
    title: "Sales",
    description:
      "Sales insights, reports, and market-focused business intelligence from Sidago for teams building scalable growth.",
    path: "/sales",
  }),
  services: buildPageMetadata({
    title: "Services",
    description:
      "Explore Sidago services across development, marketing, design, administrative support, and business operations.",
    path: "/services",
  }),
  spots: buildPageMetadata({
    title: "Spots",
    description:
      "Discover Sidago Spots offerings, capabilities, and strategic service support for digital-first business environments.",
    path: "/spots",
  }),
  strategy: buildPageMetadata({
    title: "Strategy",
    description:
      "Explore Sidago strategy capabilities, benefits, employee advantage, and structured process support for business growth.",
    path: "/strategy",
  }),
  tailoredProducts: buildPageMetadata({
    title: "Tailored Products",
    description:
      "Custom, industry-focused product and service solutions from Sidago designed around operational and strategic needs.",
    path: "/tailored-products",
  }),
  ventures: buildPageMetadata({
    title: "Ventures",
    description:
      "Sidago ventures, strategic collaboration, and decentralized finance support for innovation-focused organizations.",
    path: "/ventures",
  }),
};

function flattenServices() {
  const servicesItem = mainMenu.find((item) => item.id === "services");
  const groups = servicesItem?.megaColumns ?? [];

  return groups.flatMap((group) => [
    {
      title: group.label,
      href: group.href,
      description: `Explore ${group.label} services from Sidago.`,
    },
    ...(group.children ?? []).map((child) => ({
      title: child.label,
      href: child.href,
      description: `Learn about ${child.label} services from Sidago.`,
    })),
  ]);
}

function flattenNavigationGroups(groups = [], groupDescription, childDescription) {
  return groups.flatMap((group) => [
    {
      title: group.title,
      href: group.href,
      description: group.subtitle || groupDescription(group),
    },
    ...(group.children ?? []).map((child) => ({
      title: child.title,
      href: child.href,
      description: childDescription(group, child),
    })),
  ]);
}

export async function getServiceMetadata(slug) {
  const serviceGroups = await getContentPageNavigation("service");
  const allServices = serviceGroups.length
    ? flattenNavigationGroups(
        serviceGroups,
        (group) => group.subtitle || `Explore ${group.title} services from Sidago.`,
        (_group, child) =>
          child.subtitle || `Learn about ${child.title} services from Sidago.`,
      )
    : flattenServices();
  const match = allServices.find((item) => item.href.includes(`/${slug}`));
  const cmsPage = await getContentPageBySlug("service", slug);

  if (!match) {
    return buildPageMetadata({
      ...getPageMetadataFromContent(cmsPage, {
        title: "Service Detail",
        description:
          "Explore specialized services from Sidago for digital delivery, operations, and business support.",
        path: `/services/${slug}`,
      }),
    });
  }

  return buildPageMetadata({
    ...getPageMetadataFromContent(cmsPage, {
      title: match.title,
      description: match.description,
      path: match.href,
    }),
  });
}

export async function getIndustryMetadata(slug) {
  const industryGroups = await getContentPageNavigation("industry");
  const allIndustries = flattenNavigationGroups(
    industryGroups,
    (group) => `Explore Sidago solutions for the ${group.title} industry.`,
    (group, child) =>
      `Learn how Sidago supports ${child.title} within ${group.title}.`,
  );

  const match = allIndustries.find((item) => item.href.endsWith(`/${slug}`));
  const cmsPage = await getContentPageBySlug("industry", slug);

  if (!match) {
    return buildPageMetadata({
      ...getPageMetadataFromContent(cmsPage, {
        title: "Industry Detail",
        description:
          "Explore Sidago industry-focused support and business solutions tailored to operational needs.",
        path: `/industries/${slug}`,
      }),
    });
  }

  return buildPageMetadata({
    ...getPageMetadataFromContent(cmsPage, {
      title: match.title,
      description: match.description,
      path: match.href,
    }),
  });
}

export async function getStrategyMetadata(slug) {
  const strategyGroups = await getContentPageNavigation("strategy");
  const strategyItems = strategyGroups.length
    ? flattenNavigationGroups(
        strategyGroups,
        (group) =>
          group.subtitle ||
          `Explore Sidago strategy resources for ${group.title}.`,
        (_group, child) =>
          child.subtitle ||
          `Explore Sidago strategy content for ${child.title}.`,
      )
    : [
        ...strategyMenuItems.map((item) => ({
          title: item.title,
          href: item.href,
          description: item.description,
        })),
        ...getStrategyChildMenuItems().map((item) => ({
          title: item.title,
          href: item.href,
          description: item.description,
        })),
      ];

  const match = strategyItems.find((item) => item.href.endsWith(`/${slug}`));
  const cmsPage = await getContentPageBySlug("strategy", slug);

  if (!match) {
    return buildPageMetadata({
      ...getPageMetadataFromContent(cmsPage, {
        title: "Strategy Detail",
        description:
          "Explore Sidago strategy pages covering capabilities, benefits, processes, and business execution models.",
        path: `/strategy/${slug}`,
      }),
    });
  }

  return buildPageMetadata({
    ...getPageMetadataFromContent(cmsPage, {
      title: match.title,
      description: match.description,
      path: match.href,
    }),
  });
}
