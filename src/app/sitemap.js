import { SITE_URL } from "@/src/lib/seo";
import { getContentPageNavigation } from "@/src/lib/cms";

function flattenNavigationUrls(groups = []) {
  return groups.flatMap((group) => [
    group.href,
    ...((group.children ?? []).map((child) => child.href)),
  ]);
}

export default async function sitemap() {
  const staticRoutes = [
    "/",
    "/contact",
    "/events",
    "/forwards",
    "/governance",
    "/industries",
    "/marketplace",
    "/node",
    "/options",
    "/research",
    "/sales",
    "/services",
    "/spots",
    "/strategy",
    "/tailored-products",
    "/ventures",
  ];

  const [serviceGroups, industryGroups, strategyGroups] = await Promise.all([
    getContentPageNavigation("service"),
    getContentPageNavigation("industry"),
    getContentPageNavigation("strategy"),
  ]);

  const dynamicRoutes = [
    ...flattenNavigationUrls(serviceGroups),
    ...flattenNavigationUrls(industryGroups),
    ...flattenNavigationUrls(strategyGroups),
  ];

  return [...new Set([...staticRoutes, ...dynamicRoutes])].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
