/**
 * Converts src/lib/api.js to API-only (no hardcoded CMS fallbacks).
 */
import fs from "node:fs";

const apiPath = "src/lib/api.js";
let s = fs.readFileSync(apiPath, "utf8");

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

s = s.replace(/^import \{ cache \} from "react";[\s\S]*?from "@\/src\/data\/cms\/site-pages\.mjs";\n\n/, newImports);

s = s.replace(/return default[A-Za-z]+;/g, "return null;");

s = s.replace(
  /groups\.length > 0 \? groups : defaultServicesPage\.serviceGroups,/g,
  "groups,",
);
s = s.replace(
  /menuGroups: groups\.length > 0 \? groups : fallbackGroups,/g,
  "menuGroups: groups,",
);
s = s.replace(
  /documents\.length > 0 \? documents : defaultLegalHub\.documents,/g,
  "documents,",
);

s = s.replace(
  /export const getIndustriesPage = cache\(async \(\) => \{\n  const data = await fetchAPI\([\s\S]*?\n  return normalizeMenuGroupsPage\(data\?\.data, defaultIndustryMenuGroups\);\n\}\);/,
  `export const getIndustriesPage = cache(async () => {
  const data = await fetchAPI(
    "industries-page?populate[menuGroups][populate][paragraphs]=*&populate[menuGroups][populate][children][populate][paragraphs]=*&populate[menuGroups][populate][children][populate][children][populate]=*",
    { revalidate: 180 },
  );
  return normalizeMenuGroupsPage(data?.data);
});`,
);

s = s.replace(
  /export const getStrategyPage = cache\(async \(\) => \{\n  const data = await fetchAPI\([\s\S]*?\n  return normalizeMenuGroupsPage\(\n    data\?\.data,\n    strategyMenuItemsToGroups\(\),\n  \);\n\}\);/,
  `export const getStrategyPage = cache(async () => {
  const data = await fetchAPI(
    "strategy-page?populate[menuGroups][populate][paragraphs]=*&populate[menuGroups][populate][children][populate][paragraphs]=*&populate[menuGroups][populate][children][populate][children][populate]=*",
    { revalidate: 180 },
  );
  return normalizeMenuGroupsPage(data?.data);
});`,
);

s = s.replace(
  /export const getServiceLandingPage = cache\(async \(slug\) => \{\n  const fallback = getDefaultServiceLandingPage\(slug\);\n  const data = await fetchAPI\(/,
  `export const getServiceLandingPage = cache(async (slug) => {
  const data = await fetchAPI(`,
);
s = s.replace(
  /return normalizeServiceLandingPageFromStrapi\(unwrapEntity\(item\), fallback\);/,
  "return normalizeServiceLandingPageFromStrapi(unwrapEntity(item));",
);

s = s.replace(
  /export const getSitePage = cache\(async \(slug\) => \{\n  const fallback = getDefaultSitePage\(slug\);\n  const data = await fetchAPI\(/,
  `export const getSitePage = cache(async (slug) => {
  const data = await fetchAPI(`,
);
s = s.replace(
  /return normalizeSitePageFromStrapi\(unwrapEntity\(item\), fallback\);/,
  `const entry = unwrapEntity(item);
  if (!entry?.content) return null;
  return { slug: entry.slug, title: entry.title, content: entry.content };`,
);

s = s.replace(/export \{ defaultMainNavigation \};\n\n/, "");

s = s.replace(
  /function normalizeEventsPage\(entry\) \{[\s\S]*?^}/m,
  `function normalizeEventsPage(entry) {
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
}`,
);

s = s.replace(
  /function normalizeMainNavigationUtilityLinks\(entry\) \{[\s\S]*?sortOrder: link\.sortOrder \?\? index \+ 1,\n    \}\)\);\n\}/,
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

// Strip fallback args from normalizeHero signature
s = s.replace(
  /function normalizeHero\(hero, fallbackHero = defaultHomepage\.hero\) \{/,
  "function normalizeHero(hero) {",
);
s = s.replace(
  /function normalizeHero\(hero\) \{\n  if \(!hero\) \{\n    return fallbackHero;\n  \}/,
  `function normalizeHero(hero) {
  if (!hero) {
    return null;
  }`,
);
s = s.replace(
  /fallbackHero\.titles;/,
  "[];",
);
s = s.replace(
  /\.\.\.fallbackHero,\n    \.\.\.hero,/,
  "...hero,",
);

// Remove fallback second args from .map normalize calls - simplified pass
s = s.replace(
  /,\n\s*defaultHomepage\.[a-zA-Z[\].0-9 ?]+,\n\s*\)/g,
  ")",
);
s = s.replace(
  /,\n\s*default[A-Za-z]+\.[a-zA-Z[\].0-9 ?]+,\n\s*\)/g,
  ")",
);
s = s.replace(
  /,\n\s*default[A-Za-z]+\.[a-zA-Z[\].0-9 ?]+\|\|\n\s*default[A-Za-z]+\.[a-zA-Z[\].0-9 ?]+,\n\s*\)/g,
  ")",
);

// Ternary fallbacks to empty arrays
s = s.replace(/: defaultHomepage\.[a-zA-Z]+,/g, ": [],");
s = s.replace(/: defaultGlobalSettings\.[a-zA-Z.]+,/g, ": null,");
s = s.replace(/: defaultBusinessProcessesPage\.[a-zA-Z.]+,/g, ": null,");
s = s.replace(/: defaultOperationsPage\.[a-zA-Z.]+,/g, ": null,");
s = s.replace(/: defaultCareersPage\.[a-zA-Z.]+,/g, ": null,");
s = s.replace(/: defaultInfrastructurePage\.[a-zA-Z.]+,/g, ": null,");
s = s.replace(/: defaultPerformancePage\.[a-zA-Z.]+,/g, ": null,");
s = s.replace(/: defaultExecutionPage\.[a-zA-Z.]+,/g, ": null,");
s = s.replace(/: defaultInsightsPage\.[a-zA-Z.]+,/g, ": null,");
s = s.replace(/: defaultContactPage\.[a-zA-Z.]+,/g, ':"",');

s = s.replace(
  /footer: footer \? normalizeFooter\(footer\) : defaultGlobalSettings\.footer,/,
  "footer: footer ? normalizeFooter(footer) : null,",
);

s = s.replace(
  /siteName: item\.siteName \|\| defaultGlobalSettings\.siteName,/,
  "siteName: item.siteName || \"\",",
);
s = s.replace(
  /: defaultGlobalSettings\.siteContactEmail,/,
  ': `mailto:${(item.siteContactEmail || "").replace(/^mailto:/, "")}`,',
);
s = s.replace(
  /siteLogo: resolveMedia\(item\.siteLogo\) \|\| defaultGlobalSettings\.siteLogo,/,
  "siteLogo: resolveMedia(item.siteLogo),",
);
s = s.replace(
  /version: item\.version \|\| defaultGlobalSettings\.version,/,
  "version: item.version,",
);
s = s.replace(
  /: defaultGlobalSettings\.socialLinks,/,
  ": [],",
);

fs.writeFileSync(apiPath, s);
console.log("api.js converted to API-only");
