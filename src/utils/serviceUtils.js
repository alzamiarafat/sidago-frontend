import { getServiceMenuContext } from "@/src/utils/navigationTabUtils";

const governanceServiceSlugs = new Set([
  "advertising",
  "amazon-aws-administration",
  "application-interface-design",
  "e-commerce",
]);

export function getServiceSlugFromHref(href) {
  if (!href) {
    return "";
  }

  return href.replace(/\/$/, "").split("/").pop();
}

export function getServiceTemplateVariant(slug) {
  return governanceServiceSlugs.has(slug) ? "governance" : "otc";
}

export { getServiceMenuContext };
