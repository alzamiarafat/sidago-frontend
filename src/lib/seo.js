import { mainMenu } from "@/src/data/navigation";
import {
  getStrategyChildMenuItems,
  strategyMenuItems,
} from "@/src/data/strategy-menu";
import { getIndustryMenuGroups } from "@/src/utils/navigationTabUtils";

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
  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;
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
    path: "/marketing-growth",
  }),
  support: buildPageMetadata({
    title: "Support",
    description:
      "Explore Sidago Forwards services, governance support, and strategic solutions for decentralized and digital-first organizations.",
    path: "/support",
  }),
  governance: buildPageMetadata({
    title: "Governance",
    description:
      "Governance-focused support and strategic guidance from Sidago for structured decision-making and organizational execution.",
    path: "/support-compliance",
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
    path: "/business-processes",
  }),
  insights: buildPageMetadata({
    title: "Insights",
    description:
      "Explore Sidago options research, market insights, and strategic content for modern digital finance and business operations.",
    path: "/insights",
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
    path: "/operations",
  }),
  strategy: buildPageMetadata({
    title: "Strategy",
    description:
      "Explore Sidago strategy capabilities, benefits, employee advantage, and structured process support for business growth.",
    path: "/strategy",
  }),
  compliance: buildPageMetadata({
    title: "Compliance",
    description:
      "Custom, industry-focused product and service solutions from Sidago designed around operational and strategic needs.",
    path: "/compliance",
  }),
  execution: buildPageMetadata({
    title: "Execution",
    description:
      "Sidago execution, strategic implementation, and decentralized finance support for innovation-focused organizations.",
    path: "/execution",
  }),
  marketingGrowth: buildPageMetadata({
    title: "Marketing Growth",
    description:
      "Sidago marketing growth: digital strategy, brand visibility, performance marketing, lead generation, conversion optimization, and data-driven insights for modern teams.",
    path: "/marketing-growth",
    keywords: [
      "Sidago marketing",
      "digital growth strategy",
      "lead generation",
      "conversion optimization",
      "performance marketing",
      "brand visibility",
    ],
  }),
  supportCompliance: buildPageMetadata({
    title: "Support & Compliance",
    description:
      "Sidago support and compliance: customer support, security and privacy, risk management, data protection, regulatory alignment, documentation, and enterprise-grade workflows.",
    path: "/support-compliance",
    keywords: [
      "Sidago support",
      "compliance services",
      "data protection",
      "risk management",
      "security and privacy",
      "regulatory guidelines",
    ],
  }),
  digitalSupportServices: buildPageMetadata({
    title: "Digital Support Services",
    description:
      "Sidago digital support services: help desk, technical assistance, customer success operations, knowledge management, and scalable coverage for modern teams.",
    path: "/services/digital-support",
    keywords: [
      "Sidago digital support",
      "help desk outsourcing",
      "technical support services",
      "customer success operations",
      "24/7 support coverage",
    ],
  }),
  globalWorkforceSolutions: buildPageMetadata({
    title: "Global Workforce Solutions",
    description:
      "Sidago global workforce solutions: remote hiring, team management, scalable operations, benefit efficiency, and structured supervision for distributed teams.",
    path: "/global-workforce-solutions",
    keywords: [
      "Sidago workforce",
      "remote team management",
      "global staffing support",
      "outsourced operations",
      "distributed workforce",
    ],
  }),
  scalableOperationsManagement: buildPageMetadata({
    title: "Scalable Operations Management",
    description:
      "Sidago scalable operations management: workflow design, back-office delivery, flexible team scaling, and reporting for growing businesses.",
    path: "/scalable-operations-management",
    keywords: [
      "Sidago operations",
      "scalable operations",
      "operations management",
      "back-office support",
      "workflow scaling",
    ],
  }),
  careers: buildPageMetadata({
    title: "Careers",
    description:
      "Join Sidago: remote-first roles in operations, digital support, process improvement, marketing growth, and client delivery. View open positions and our hiring process.",
    path: "/company/careers",
    keywords: [
      "Sidago careers",
      "Sidago jobs",
      "remote operations jobs",
      "digital support careers",
      "BPO careers",
    ],
  }),
  legalPolicies: buildPageMetadata({
    title: "Legal & Compliance Policies",
    description:
      "Sidago legal hub: privacy policy, cookies policy, and modern slavery statement for sidago.com.",
    path: "/legal",
    keywords: [
      "Sidago privacy",
      "cookies policy",
      "modern slavery statement",
      "legal policies",
    ],
  }),
  legalPrivacy: buildPageMetadata({
    title: "Privacy Policy",
    description:
      "Sidago privacy policy: how we collect, use, disclose, and safeguard personal information on sidago.com.",
    path: "/privacy",
  }),
  legalCookies: buildPageMetadata({
    title: "Cookies Policy",
    description:
      "Sidago cookies policy: how we use cookies and similar technologies on sidago.com.",
    path: "/cookies",
  }),
  legalModernSlavery: buildPageMetadata({
    title: "Modern Slavery Statement",
    description:
      "Sidago modern slavery statement: ethical standards, supply chain expectations, and due diligence.",
    path: "/modern-slavery",
  }),
  processImprovement: buildPageMetadata({
    title: "Process Improvement",
    description:
      "Sidago process improvement: AI-informed workflow design, operational analytics, automation guardrails, and enterprise-grade transformation programs built for measurable outcomes.",
    path: "/process-improvement",
    keywords: [
      "Sidago process improvement",
      "workflow optimization",
      "operational analytics",
      "AI automation",
      "enterprise transformation",
    ],
  }),
};

function flattenServiceChildren(children = []) {
  return (children ?? []).flatMap((child) => [
    {
      title: child.label ?? child.title,
      href: child.href,
      description: `Learn about ${child.label ?? child.title} services from Sidago.`,
    },
    ...flattenServiceChildren(child.children),
  ]);
}

function flattenServices() {
  const servicesItem = mainMenu.find((item) => item.id === "services");
  const groups = servicesItem?.megaColumns ?? [];

  return groups.flatMap((group) => [
    {
      title: group.label,
      href: group.href,
      description: `Explore ${group.label} services from Sidago.`,
    },
    ...flattenServiceChildren(group.children),
  ]);
}

export function getServiceMetadata(slug) {
  const allServices = flattenServices();
  const match = allServices.find((item) => item.href.includes(`/${slug}`));

  if (!match) {
    return buildPageMetadata({
      title: "Service Detail",
      description:
        "Explore specialized services from Sidago for digital delivery, operations, and business support.",
      path: `/services/${slug}`,
    });
  }

  return buildPageMetadata({
    title: match.title,
    description: match.description,
    path: match.href,
  });
}

export function getIndustryMetadata(slug) {
  const allIndustries = getIndustryMenuGroups().flatMap((group) => [
    {
      title: group.title,
      href: group.href,
      description: `Explore Sidago solutions for the ${group.title} industry.`,
    },
    ...(group.children ?? []).map((child) => ({
      title: child.title,
      href: child.href,
      description: `Learn how Sidago supports ${child.title} within ${group.title}.`,
    })),
  ]);

  const match = allIndustries.find((item) => item.href.endsWith(`/${slug}`));

  if (!match) {
    return buildPageMetadata({
      title: "Industry Detail",
      description:
        "Explore Sidago industry-focused support and business solutions tailored to operational needs.",
      path: `/industries/${slug}`,
    });
  }

  return buildPageMetadata({
    title: match.title,
    description: match.description,
    path: match.href,
  });
}

export function getStrategyMetadata(slug) {
  const strategyItems = [
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

  if (!match) {
    return buildPageMetadata({
      title: "Strategy Detail",
      description:
        "Explore Sidago strategy pages covering capabilities, benefits, processes, and business execution models.",
      path: `/strategy/${slug}`,
    });
  }

  return buildPageMetadata({
    title: match.title,
    description: match.description,
    path: match.href,
  });
}
