import fs from "node:fs";

let s = fs.readFileSync("src/lib/api.js", "utf8");

// Fix broken ternary from pass 1
s = s.replace(/:\s*""\s*,(\s*cta:)/g, ": [],$1");
s = s.replace(/:\s*""\s*,(\s*\};)/g, ": [],$1");

// Remove second arg from normalizeHero calls
s = s.replace(/normalizeHero\(([^,)]+),\s*default[A-Za-z]+\.[a-zA-Z.]+\)/g, "normalizeHero($1)");

// Cards grid / cta homepage fallbacks
s = s.replace(
  /const cardFallback =[\s\S]*?return normalizeCardsGridItem\(cardItem, cardFallback\);/,
  "return normalizeCardsGridItem(cardItem);",
);
s = s.replace(
  /normalizeCtaItem\(\s*ctaItem,\s*defaultHomepage\.cta\[index\] \|\| defaultHomepage\.cta\[0\],\s*\)/g,
  "normalizeCtaItem(ctaItem)",
);

// Footer brand fallback
s = s.replace(
  /function normalizeFooterNavLinks\(navLinks\) \{[\s\S]*?return mapped;\n\}/,
  `function normalizeFooterNavLinks(navLinks) {
  return navLinks
    .slice()
    .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0))
    .map((link) => normalizeFooterLink(link))
    .filter(Boolean);
}`,
);

// Item normalizers — API only
s = s.replace(
  /function normalizeInsightNewsItem\(item, fallbackItem\) \{[\s\S]*?\n\}/,
  `function normalizeInsightNewsItem(item) {
  if (!item?.title) return null;
  return {
    ...item,
    href: resolveInsightNewsHref(item.href),
    srText: item.srText?.trim() || item.title,
  };
}`,
);

s = s.replace(
  /function normalizeStatisticItem\(item, fallbackItem\) \{[\s\S]*?\n\}/,
  `function normalizeStatisticItem(item) {
  if (!item?.label || !item?.stat) return null;
  return {
    ...item,
    stat: \`\${item.stat}\`.trim(),
    label: item.label.trim(),
    activeDotColor: item.activeDotColor || "",
  };
}`,
);

s = s.replace(
  /function normalizeMarketTickerItem\(item, fallbackItem\) \{[\s\S]*?\n\}/,
  `function normalizeMarketTickerItem(item) {
  if (!item?.title || !item?.price || !item?.avg) return null;
  return {
    ...item,
    title: item.title.trim(),
    price: item.price.trim(),
    avg: item.avg.trim(),
  };
}`,
);

s = s.replace(
  /function normalizeCapabilityItem\(item, fallbackItem\) \{[\s\S]*?\n\}/,
  `function normalizeCapabilityItem(item) {
  if (!item?.title || !item?.description || !item?.href || !item?.video) return null;
  return {
    ...item,
    title: item.title.trim(),
    description: item.description.trim(),
    href: item.href.trim(),
    video: item.video.trim(),
    rotate: item.rotate?.trim() || "rotate(0deg)",
  };
}`,
);

s = s.replace(
  /function resolveInsightNewsHref\(itemHref, fallbackHref\) \{[\s\S]*?\n\}/,
  `function resolveInsightNewsHref(itemHref) {
  const trimmed = itemHref?.trim();
  return trimmed && trimmed !== "#" ? trimmed : "#";
}`,
);

s = s.replace(
  /function normalizeCtaItem\(item, fallbackItem\) \{[\s\S]*?\n\}/,
  `function normalizeCtaItem(item) {
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
}`,
);

s = s.replace(
  /function normalizeContactTopic\(item, fallbackItem, index\) \{[\s\S]*?\n\}/,
  `function normalizeContactTopic(item, index) {
  if (!item?.slug || !item?.label) return null;
  return {
    slug: item.slug.trim(),
    label: item.label.trim(),
    srLabel: item.srLabel?.trim() || item.label.trim(),
    cardClassName: item.cardClassName?.trim() || "bg-gray-defi-graphite text-gray-off-white",
    spanClassName: item.spanClassName?.trim() || "col-span-4 xl:col-span-3",
    showServicesField: item.showServicesField ?? false,
    description: item.description?.trim() || \`Contact Sidago about \${item.label.trim()}.\`,
    sortOrder: item.sortOrder ?? index + 1,
  };
}`,
);

s = s.replace(
  /function normalizeContactPage\(entry\) \{[\s\S]*?\n\}/,
  `function normalizeContactPage(entry) {
  const item = unwrapEntity(entry);
  if (!item) return null;
  return {
    eyebrow: item.eyebrow?.trim() || "",
    heading: item.heading?.trim() || "",
    subheading: item.subheading?.trim() || "",
    sidebarImageSrc: item.sidebarImageSrc?.trim() || "",
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
}`,
);

// Filter nulls in homepage maps
s = s.replace(
  /\.map\(\(newsItem, index\) =>\s*normalizeInsightNewsItem\(\s*newsItem\),\s*\)/g,
  ".map((newsItem) => normalizeInsightNewsItem(newsItem)).filter(Boolean)",
);
s = s.replace(
  /\.map\(\(statItem, index\) =>\s*normalizeStatisticItem\(\s*statItem\),\s*\)/g,
  ".map((statItem) => normalizeStatisticItem(statItem)).filter(Boolean)",
);
s = s.replace(
  /\.map\(\(tickerItem, index\) =>\s*normalizeMarketTickerItem\(\s*tickerItem\),\s*\)/g,
  ".map((tickerItem) => normalizeMarketTickerItem(tickerItem)).filter(Boolean)",
);
s = s.replace(
  /\.map\(\(capabilityItem, index\) =>\s*normalizeCapabilityItem\(\s*capabilityItem\),\s*\)/g,
  ".map((capabilityItem) => normalizeCapabilityItem(capabilityItem)).filter(Boolean)",
);

s = s.replace(
  /const normalizedHero = normalizeHero\(hero, defaultHomepage\.hero\);/,
  "const normalizedHero = normalizeHero(hero);",
);
s = s.replace(
  /titles: mergeHomepageHeroTitles\(\s*normalizedHero\.titles\),/,
  "titles: normalizedHero?.titles || [],",
);

// Remove mergePageContent usage - getSitePage already fixed
s = s.replace(/function mergePageContent[\s\S]*?\n\}\n\n/, "");

// Legal policy without fallback
s = s.replace(
  /function normalizeLegalPolicy\(entry, fallbackPolicy\) \{[\s\S]*?\n\}/,
  `function normalizeLegalPolicy(entry) {
  const item = unwrapEntity(entry);
  if (!item) return null;
  const blocks = normalizeLegalBlocksFromStrapi(item.blocks || []);
  return {
    title: item.title?.trim() || "",
    lastUpdated: item.lastUpdated?.trim() || "",
    activePolicy: item.activePolicy?.trim() || "",
    blocks,
  };
}`,
);

s = s.replace(
  /return normalizeLegalPolicy\(data\?\.data, defaultPrivacyPolicy\);/,
  "return normalizeLegalPolicy(data?.data);",
);
s = s.replace(
  /return normalizeLegalPolicy\(data\?\.data, defaultCookiesPolicy\);/,
  "return normalizeLegalPolicy(data?.data);",
);
s = s.replace(
  /return normalizeLegalPolicy\(data\?\.data, defaultModernSlaveryPolicy\);/,
  "return normalizeLegalPolicy(data?.data);",
);

// Strip remaining defaultXxx.property references
s = s.replace(/\|\| default[A-Za-z]+\.[a-zA-Z.[\]0-9 ?]+/g, '|| ""');
s = s.replace(/\?\? default[A-Za-z]+\.[a-zA-Z.[\]0-9 ?]+/g, "?? null");
s = s.replace(/\.\.\.default[A-Za-z]+\.[a-zA-Z.]+,/g, "");
s = s.replace(/default[A-Za-z]+\.[a-zA-Z.[\]0-9 ?|]+ \|\|/g, '"" ||');
s = s.replace(/,\s*default[A-Za-z]+\.[a-zA-Z.[\]0-9 ?]+/g, "");

fs.writeFileSync("src/lib/api.js", s);
console.log("pass 2 done");
