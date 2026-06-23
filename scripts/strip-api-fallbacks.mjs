/**
 * Strips hardcoded CMS fallbacks from src/lib/api.js so data comes from Strapi only.
 */
import fs from "node:fs";
import path from "node:path";

const apiPath = path.resolve("src/lib/api.js");
let source = fs.readFileSync(apiPath, "utf8");

const newImports = `import { cache } from "react";
import {
  normalizeBrandPageFromStrapi,
  normalizeEventsPageFromStrapi,
  normalizeLegalBlocksFromStrapi,
  normalizeLegalDocumentsFromStrapi,
  normalizeServiceLandingPageFromStrapi,
} from "@/src/lib/cms-transforms.mjs";
import { buildMainNavigation } from "@/src/lib/navigation-build.js";
`;

source = source.replace(/^import \{ cache \} from "react";[\s\S]*?from "@\/src\/data\/cms\/site-pages\.mjs";\n\n/, newImports);

source = source.replace(/return default[A-Za-z]+;/g, "return null;");

source = source.replace(
  /: defaultGlobalSettings\.siteContactEmail,/g,
  ": null,",
);
source = source.replace(
  /: defaultGlobalSettings\.socialLinks,/g,
  ": [],",
);
source = source.replace(
  /footer: footer \? normalizeFooter\(footer\) : defaultGlobalSettings\.footer,/g,
  "footer: footer ? normalizeFooter(footer) : null,",
);
source = source.replace(
  /: defaultGlobalSettings\.footer\.(navLinks|socialLinks|legalBlocks|policyLinks),/g,
  ": [],",
);

source = source.replace(
  /: defaultHomepage\.(insightNews|statistics|marketTicker|capabilities|cardsGrid|cta),/g,
  ": [],",
);

source = source.replace(
  /groups\.length > 0 \? groups : defaultServicesPage\.serviceGroups,/g,
  "groups,",
);

source = source.replace(
  /: defaultBusinessProcessesPage\.statistics,/g,
  ": [],",
);
source = source.replace(
  /: defaultBusinessProcessesPage\.workOverview\.metrics,/g,
  ": [],",
);
source = source.replace(
  /: defaultBusinessProcessesPage\.workOverview,/g,
  ": null,",
);

source = source.replace(
  /: defaultOperationsPage\.(insightNews|statistics|capabilities|cta),/g,
  ": [],",
);

source = source.replace(
  /sideLogo: defaultCareersPage\.hero\.sideLogo,/g,
  "sideLogo: item.hero?.sideLogo || null,",
);
source = source.replace(
  /: defaultCareersPage\.(statistics|valuesFlipSection\.items|teamsSection\.items|teamTestimonialsSection\.items|lifeSection\.stage\.stats|lifeStatsSection\.items),/g,
  ": [],",
);

source = source.replace(
  /: defaultInfrastructurePage\.(vision|support|profiles),/g,
  ": [],",
);

source = source.replace(
  /: defaultPerformancePage\.(stats|cta),/g,
  ": [],",
);

source = source.replace(
  /: defaultExecutionPage\.cta,/g,
  ": [],",
);

source = source.replace(
  /: defaultInsightsPage\.statistics,/g,
  ": [],",
);

source = source.replace(
  /: defaultContactPage\.(topics|cta),/g,
  ": [],",
);

source = source.replace(
  /videoClass: defaultEventsPage\.videoClass,/g,
  'videoClass: "events-hero-video",',
);

source = source.replace(
  /documents\.length > 0 \? documents : defaultLegalHub\.documents,/g,
  "documents,",
);

source = source.replace(
  /export \{ defaultMainNavigation \};\n\n/,
  "",
);

source = source.replace(
  /export const getServiceLandingPage = cache\(async \(slug\) => \{\n  const fallback = getDefaultServiceLandingPage\(slug\);\n  const data = await fetchAPI\(/,
  `export const getServiceLandingPage = cache(async (slug) => {
  const data = await fetchAPI(`,
);

source = source.replace(
  /return normalizeServiceLandingPageFromStrapi\(unwrapEntity\(item\), fallback\);/,
  "return normalizeServiceLandingPageFromStrapi(unwrapEntity(item));",
);

source = source.replace(
  /export const getSitePage = cache\(async \(slug\) => \{\n  const fallback = getDefaultSitePage\(slug\);\n  const data = await fetchAPI\(/,
  `export const getSitePage = cache(async (slug) => {
  const data = await fetchAPI(`,
);

source = source.replace(
  /return normalizeSitePageFromStrapi\(unwrapEntity\(item\), fallback\);/,
  `const entry = unwrapEntity(item);
  if (!entry?.content) return null;
  return { slug: entry.slug, title: entry.title, content: entry.content };`,
);

source = source.replace(
  /function normalizeMainNavigationUtilityLinks\(entry\) \{\n  const item = unwrapEntity\(entry\);\n\n  if \(!item\?\.utilityLinks\?\.length\) \{\n    return defaultUtilityLinks;\n  \}\n\n  return item\.utilityLinks[\s\S]*?\}\);/,
  `function normalizeMainNavigationUtilityLinks(entry) {
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
}`,
);

source = source.replace(
  /import \{ defaultBrandPage, normalizeBrandPageFromStrapi \}/,
  "// brand normalize moved to cms-transforms",
);

fs.writeFileSync(apiPath, source);
console.log("Patched api.js");
