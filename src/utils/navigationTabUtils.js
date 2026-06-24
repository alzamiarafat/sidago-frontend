import { mainMenu } from "@/src/data/navigation";

const getIndustryHref = (slug) => `/industries/${slug}`;

const industryMenuGroups = [
  {
    title: "B2B / Commercial",
    href: getIndustryHref("b2b-commercial"),
    children: [
      {
        title: "Law Firms",
        href: getIndustryHref("law-firms"),
      },
      {
        title: "Manufacturing Industrial Products",
        href: getIndustryHref("manufacturing-industrial-products"),
      },
    ],
  },
  {
    title: "Financial",
    href: getIndustryHref("accounting-firms"),
    children: [
      { title: "Accounting Firms", href: getIndustryHref("accounting-firms") },
      {
        title: "Banking",
        href: getIndustryHref("banking"),
      },
    ],
  },
  {
    title: "Technology",
    href: getIndustryHref("ad-networks"),
    children: [
      { title: "Ad Networks", href: getIndustryHref("ad-networks") },
      {
        title: "Affiliate Networks",
        href: getIndustryHref("affiliate-networks"),
      },
      { title: "Affiliates", href: getIndustryHref("affiliates") },
    ],
  },
  {
    title: "Health Care",
    href: getIndustryHref("healthcare"),
    children: [
      {
        title: "Practices and Doctors",
        href: getIndustryHref("practices-and-doctors"),
      },
    ],
  },
  {
    title: "Aerospace / Defense",
    href: getIndustryHref("aerospace-defense"),
    children: [],
  },
  {
    title: "Automotive",
    href: getIndustryHref("automotive"),
    children: [],
  },
  {
    title: "Consumer Product and Retail",
    href: getIndustryHref("consumer-product-and-retail"),
    children: [],
  },
  {
    title: "Distribution and Transportation",
    href: getIndustryHref("distribution-and-transportation"),
    children: [],
  },
  {
    title: "Insurance",
    href: getIndustryHref("insurance"),
    children: [],
  },
  {
    title: "Restaurants",
    href: getIndustryHref("restaurants"),
    children: [],
  },
  {
    title: "Construction",
    href: getIndustryHref("construction"),
    children: [],
  },
];

export function normalizePath(pathname = "") {
  if (!pathname) {
    return "";
  }

  return pathname.endsWith("/") && pathname !== "/"
    ? pathname.slice(0, -1)
    : pathname;
}

function mapMenuChildren(children = []) {
  return children.map((child) => ({
    ...child,
    title: child.title ?? child.label,
    children: mapMenuChildren(child.children ?? []),
  }));
}

function getVisibleTabs(items = []) {
  return items.filter((item) => !item.isMore);
}

function getDefaultNestedItem(item) {
  if (!item) {
    return null;
  }

  const visibleChildren = getVisibleTabs(item.children ?? []);

  if (!visibleChildren.length) {
    return item;
  }

  return getDefaultNestedItem(visibleChildren[0]) ?? visibleChildren[0];
}

export function getServicesMenuGroups() {
  return (
    mainMenu.find((item) => item.id === "services")?.megaColumns?.map(
      (column) => ({
        ...column,
        title: column.label,
        groupId: column.groupId || column.id || "",
        children: mapMenuChildren(column.children ?? []),
      }),
    ) ?? []
  );
}

export function normalizeMenuGroups(groups = []) {
  return groups.map((group) => ({
    ...group,
    title: group.title ?? group.label,
    children: mapMenuChildren(group.children ?? []),
  }));
}

function getIndustriesMenuGroups() {
  return industryMenuGroups.map((item) => ({
    ...item,
    children: mapMenuChildren(item.children ?? []),
  }));
}

function findServiceLeafMatch(children, currentPath) {
  for (const child of children ?? []) {
    if (normalizePath(child.href) === currentPath) {
      return getDefaultNestedItem(child) ?? child;
    }

    const nested = findServiceLeafMatch(child.children, currentPath);

    if (nested) {
      return nested;
    }
  }

  return null;
}

function getMenuContext(pathname, groups) {
  const currentPath = normalizePath(pathname);

  for (const group of groups) {
    const groupSlugPath =
      group.groupId && currentPath.startsWith("/services/")
        ? normalizePath(`/services/${group.groupId}`)
        : "";

    if (
      normalizePath(group.href) === currentPath ||
      (groupSlugPath && groupSlugPath === currentPath)
    ) {
      const visibleTabs = getVisibleTabs(group.children ?? []);
      const defaultItem =
        visibleTabs.length > 0
          ? getDefaultNestedItem(visibleTabs[0]) ?? visibleTabs[0]
          : group;

      return {
        group,
        currentItem: defaultItem,
        tabs: visibleTabs,
      };
    }

    const leaf = findServiceLeafMatch(group.children, currentPath);

    if (leaf) {
      return {
        group,
        currentItem: leaf,
        tabs: getVisibleTabs(group.children ?? []),
      };
    }
  }

  return null;
}

export function getServiceMenuContext(slug) {
  return getMenuContext(`/services/${slug}`, getServicesMenuGroups());
}

export function getServiceMenuContextFromGroups(slug, groups = []) {
  return getMenuContext(`/services/${slug}`, normalizeMenuGroups(groups));
}

export function getMenuContextFromGroups(pathname, groups = []) {
  return getMenuContext(pathname, normalizeMenuGroups(groups));
}

export function getIndustryMenuContext(slug) {
  return getMenuContext(`/industries/${slug}`, getIndustriesMenuGroups());
}

export function getIndustryMenuContextFromGroups(slug, groups = []) {
  return getMenuContext(`/industries/${slug}`, normalizeMenuGroups(groups));
}

export function getIndustryMenuGroups() {
  return getIndustriesMenuGroups();
}
