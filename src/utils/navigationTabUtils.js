import { mainMenu } from "@/src/data/navigation";

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
  return (
    mainMenu
      .find((item) => item.id === "industries")
      ?.children?.map((item) => {
        const mappedChildren = mapMenuChildren(item.children ?? []);

        return {
          ...item,
          title: item.title ?? item.label,
          children:
            mappedChildren.length > 0
              ? mappedChildren
              : [
                  {
                    title: item.title ?? item.label,
                    href: item.href,
                  },
                ],
        };
      }) ?? []
  );
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
