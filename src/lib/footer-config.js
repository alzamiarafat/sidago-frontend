import { defaultGlobalSettings } from "@/src/data/cms/defaults.js";

export const DEFAULT_FOOTER = defaultGlobalSettings.footer;

export const FOOTER_ALIGN_OPTIONS = ["start", "center", "end"];

const LEGACY_DISCLAIMER_MARKERS = [
  "Sidago Trading Ltd.",
  "Sidago Entity",
  "cryptoasset activities",
  "Money Laundering, Terrorist Financing",
];

export function isLegacyDisclaimerBlock(text = "") {
  return LEGACY_DISCLAIMER_MARKERS.some((marker) => text.includes(marker));
}

export function isLegacyDisclaimerFooter(legalBlocks = []) {
  if (!Array.isArray(legalBlocks) || legalBlocks.length === 0) {
    return false;
  }

  return legalBlocks.some((block) => isLegacyDisclaimerBlock(block?.text));
}

function pickFooterSection(sourceSection, defaultSection) {
  return sourceSection?.length ? sourceSection : defaultSection;
}

export function normalizeFooterAlign(value, fallback) {
  const normalized = `${value ?? ""}`.trim().toLowerCase();

  if (FOOTER_ALIGN_OPTIONS.includes(normalized)) {
    return normalized;
  }

  return fallback;
}

export function getFooterTextAlignClass(align) {
  if (align === "center") {
    return "text-center";
  }

  if (align === "end") {
    return "text-right";
  }

  return "text-left";
}

export function getFooterPolicyLinksClass(align) {
  if (align === "center") {
    return "justify-center";
  }

  if (align === "end") {
    return "justify-start lg:justify-end";
  }

  return "justify-start";
}

export function resolveFooter(footer) {
  const defaults = DEFAULT_FOOTER;
  const source = footer ?? {};

  let legalBlocks = pickFooterSection(source.legalBlocks, defaults.legalBlocks);

  if (isLegacyDisclaimerFooter(legalBlocks)) {
    legalBlocks = defaults.legalBlocks;
  }

  return {
    navLinks: pickFooterSection(source.navLinks, defaults.navLinks),
    socialLinks: pickFooterSection(source.socialLinks, defaults.socialLinks),
    legalBlocks,
    policyLinks: pickFooterSection(source.policyLinks, defaults.policyLinks),
    contactAlign: normalizeFooterAlign(
      source.contactAlign,
      defaults.contactAlign ?? "center",
    ),
    copyrightAlign: normalizeFooterAlign(
      source.copyrightAlign,
      defaults.copyrightAlign ?? "center",
    ),
    policyLinksAlign: normalizeFooterAlign(
      source.policyLinksAlign,
      defaults.policyLinksAlign ?? "end",
    ),
  };
}

export function resolveGlobalSettings(settings) {
  if (!settings) {
    return {
      siteName: defaultGlobalSettings.siteName,
      siteContactEmail: defaultGlobalSettings.siteContactEmail,
      siteLogo: defaultGlobalSettings.siteLogo,
      version: defaultGlobalSettings.version,
      socialLinks: defaultGlobalSettings.socialLinks,
      footer: resolveFooter(defaultGlobalSettings.footer),
    };
  }

  return {
    ...settings,
    footer: resolveFooter(settings.footer),
  };
}
