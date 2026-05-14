function slugFromSegmentHref(href, segment) {
  if (typeof href !== "string") {
    return null;
  }

  const marker = `/${segment}/`;
  const index = href.indexOf(marker);

  if (index === -1) {
    return null;
  }

  const tail = href.slice(index + marker.length).replace(/\/$/, "");
  const first = tail.split("/")[0];

  return first || null;
}

export function collectSlugsFromMenuGroups(groups, segment) {
  const slugs = new Set();

  function walk(items) {
    for (const item of items ?? []) {
      const slug = slugFromSegmentHref(item.href, segment);

      if (slug) {
        slugs.add(slug);
      }

      walk(item.children);
    }
  }

  walk(groups);
  return slugs;
}
