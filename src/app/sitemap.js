import { mainMenu } from "@/src/data/navigation";
import { getStrategySlugs } from "@/src/data/strategy-menu";
import { SITE_URL } from "@/src/lib/seo";
import { getIndustryMenuGroups } from "@/src/utils/navigationTabUtils";

function flatServiceUrls() {
  const servicesItem = mainMenu.find((item) => item.id === "services");
  const groups = servicesItem?.megaColumns ?? [];

  return groups.flatMap((group) => [
    group.href,
    ...(group.children ?? []).map((child) => child.href),
  ]);
}

function flatIndustryUrls() {
  return getIndustryMenuGroups().flatMap((group) => [
    group.href,
    ...(group.children ?? []).map((child) => child.href),
  ]);
}

export default function sitemap() {
  const staticRoutes = [
    "/",
    "/contact",
    "/marketing-growth",
    "/support",
    "/support-compliance",
    "/industries",
    "/marketplace",
    "/business-processes",
    "/insights",
    "/research",
    "/sales",
    "/services",
    "/operations",
    "/strategy",
    "/compliance",
    "/execution",
  ];

  const dynamicRoutes = [
    ...flatServiceUrls(),
    ...flatIndustryUrls(),
    ...getStrategySlugs().map((slug) => `/strategy/${slug}`),
  ];

  return [...new Set([...staticRoutes, ...dynamicRoutes])].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
