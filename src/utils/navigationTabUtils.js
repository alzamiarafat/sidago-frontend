import { mainMenu } from "@/src/data/navigation";

const getIndustryHref = (slug) => `/industries/${slug}`;

const industryMenuGroups = [
  {
    title: "B2B Commercial",
    href: getIndustryHref("b2b-commercial"),
    children: [
      { title: "Commercial GTM", href: getIndustryHref("commercial-gtm") },
      { title: "Sales Operations", href: getIndustryHref("sales-operations") },
      {
        title: "Channel Partnerships",
        href: getIndustryHref("channel-partnerships"),
      },
    ],
  },
  {
    title: "Financial",
    href: getIndustryHref("accounting-firms"),
    children: [
      { title: "Accounting Firms", href: getIndustryHref("accounting-firms") },
      {
        title: "Financial Analytics",
        href: getIndustryHref("financial-analytics"),
      },
      {
        title: "Payments Modernization",
        href: getIndustryHref("payments-modernization"),
      },
    ],
  },
  {
    title: "Technology",
    href: getIndustryHref("ad-networks"),
    children: [
      { title: "Software Platforms", href: getIndustryHref("software-platforms") },
    ],
  },
  {
    title: "Health Care",
    href: getIndustryHref("healthcare"),
    children: [],
  },
  {
    title: "Aerospace/Defense",
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

function getServicesMenuGroups() {
  return (
    mainMenu.find((item) => item.id === "services")?.megaColumns?.map(
      (column) => ({
        ...column,
        title: column.label,
        children: mapMenuChildren(column.children ?? []),
      }),
    ) ?? []
  );
}

function getIndustriesMenuGroups() {
  return industryMenuGroups.map((item) => ({
    ...item,
    children: mapMenuChildren(item.children ?? []),
  }));
}

function getMenuContext(pathname, groups) {
  const currentPath = normalizePath(pathname);

  for (const group of groups) {
    if (normalizePath(group.href) === currentPath) {
      return {
        group,
        currentItem: group,
        tabs: getVisibleTabs(group.children ?? []),
      };
    }

    for (const child of group.children ?? []) {
      if (normalizePath(child.href) === currentPath) {
        return {
          group,
          currentItem: child,
          tabs: getVisibleTabs(group.children ?? []),
        };
      }
    }
  }

  return null;
}

export function getServiceMenuContext(slug) {
  return getMenuContext(`/services/${slug}`, getServicesMenuGroups());
}

export function getIndustryMenuContext(slug) {
  return getMenuContext(`/industries/${slug}`, getIndustriesMenuGroups());
}

export function getIndustryMenuGroups() {
  return getIndustriesMenuGroups();
}
