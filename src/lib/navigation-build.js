const STRATEGY_ICON_KEYS = {
  capabilities: "capabilities",
  "employee-advantage": "employeeAdvantage",
  "our-benefits": "benefits",
  "our-process": "process",
};

function mapServiceItems(items = []) {
  return items.map((item) => ({
    title: item.title,
    href: item.href,
    ...(item.children?.length
      ? { children: mapServiceItems(item.children) }
      : {}),
  }));
}

export function mapServiceGroupsToProductSections(groups = []) {
  return groups.map((group) => ({
    title: group.title,
    groupId: group.groupId || group.key || "",
    href: group.href || "",
    items: mapServiceItems(group.children ?? []),
  }));
}

export function mapMenuGroupsToIndustryItems(groups = []) {
  return groups.map((group) => ({
    title: group.title,
    href: group.href,
    description: group.description || "",
    children: (group.children ?? []).map((child) => ({
      title: child.title,
      href: child.href,
    })),
  }));
}

export function mapMenuGroupsToStrategyItems(groups = []) {
  return groups.map((group) => ({
    key: group.groupId || group.key || group.title,
    title: group.title,
    href: group.href,
    description: group.description || "",
    iconKey:
      STRATEGY_ICON_KEYS[group.groupId] ||
      STRATEGY_ICON_KEYS[group.key] ||
      group.groupId ||
      group.key,
    children: (group.children ?? []).map((child) => ({
      key: child.href?.split("/").filter(Boolean).at(-1) || child.title,
      title: child.title,
      href: child.href,
      description: child.description || "",
    })),
  }));
}

function normalizeUtilityLinks(links = []) {
  return links
    .slice()
    .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0))
    .map((link) => ({
      title: link.label || "",
      href: link.href || "",
      srLabel: link.srLabel || link.label || "",
    }));
}

export function buildMainNavigation({
  serviceGroups = [],
  industryGroups = [],
  strategyGroups = [],
  utilityLinks = [],
} = {}) {
  return {
    services: mapServiceGroupsToProductSections(serviceGroups),
    industries: mapMenuGroupsToIndustryItems(industryGroups),
    strategy: mapMenuGroupsToStrategyItems(strategyGroups),
    utilityLinks: normalizeUtilityLinks(utilityLinks),
  };
}
