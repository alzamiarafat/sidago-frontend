/**
 * API-only CMS transforms — no hardcoded page content.
 */

function sortByOrder(items = []) {
  return items.slice().sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

// --- Legal (from legal-pages.mjs, no defaults) ---
export function normalizeLegalBlocksFromStrapi(blocks = []) {
  return blocks
    .slice()
    .sort((left, right) => (left.sortOrder ?? 0) - (right.sortOrder ?? 0))
    .map((block) => {
      switch (block.__component) {
        case "shared.legal-heading-h2":
          return { type: "h2", id: block.anchorId || undefined, text: block.text };
        case "shared.legal-heading-h3":
          return { type: "h3", text: block.text };
        case "shared.legal-paragraph":
          return { type: "p", text: block.text };
        case "shared.legal-bullet-list":
          return {
            type: "ul",
            items: sortByOrder(block.items || [])
              .map((item) => item.text)
              .filter(Boolean),
          };
        case "shared.legal-link-paragraph":
          return {
            type: "plink",
            before: block.before || "",
            linkText: block.linkText,
            href: block.href,
            after: block.after || "",
          };
        case "shared.legal-contact-box":
          return {
            type: "contact",
            intro: block.intro || undefined,
            lines: sortByOrder(block.lines || []).map((line) => ({
              label: line.label,
              href: line.href,
              display: line.display,
            })),
          };
        case "shared.legal-divider":
          return { type: "hr" };
        default:
          return null;
      }
    })
    .filter(Boolean);
}

export function normalizeLegalDocumentsFromStrapi(documents = []) {
  return sortByOrder(documents).map((doc) => ({
    href: doc.href,
    title: doc.title,
    blurb: doc.blurb,
  }));
}

// --- Service landing ---
function mapBreadcrumbs(items = []) {
  return sortByOrder(items).map((item, index) => ({
    label: item.label,
    href: item.href,
    srText: item.srText || item.label,
    sortOrder: index + 1,
  }));
}

function mapInlineParts(parts = []) {
  return (parts || []).map((part, index) => ({
    partType: part.type || "text",
    value: part.value || "",
    href: part.href || "",
    strong: Boolean(part.strong),
    sortOrder: index + 1,
  }));
}

function mapParagraphToComponent(paragraph, index) {
  return {
    text: paragraph.text || "",
    strong: paragraph.strong || "",
    variant: paragraph.variant || "",
    parts: mapInlineParts(paragraph.parts),
    sortOrder: index + 1,
  };
}

function mapBlockToComponent(block, index) {
  if (block.type === "image") {
    return {
      __component: "shared.service-landing-report-image",
      src: block.src,
      alt: block.alt || "",
      previewSrc: block.previewSrc || "",
      previewTitle: block.previewTitle || "",
      previewWeek: block.previewWeek || "",
      previewSource: block.previewSource || "",
      previewTableOnly: Boolean(block.previewTableOnly),
      width: block.width,
      height: block.height,
      sortOrder: index + 1,
    };
  }
  return {
    __component: "shared.service-landing-report-paragraph",
    ...mapParagraphToComponent(block, index),
  };
}

function normalizeInlineParts(parts = []) {
  return sortByOrder(parts)
    .map((part) => ({
      type: part.partType || "text",
      value: part.value,
      href: part.href || undefined,
      ...(part.partType === "link" && part.strong ? { strong: true } : {}),
    }))
    .filter((part) => part.value);
}

function normalizeParagraph(paragraph) {
  const parts = normalizeInlineParts(paragraph.parts);
  return {
    ...(paragraph.variant ? { variant: paragraph.variant } : {}),
    ...(paragraph.strong ? { strong: paragraph.strong } : {}),
    ...(paragraph.text ? { text: paragraph.text } : {}),
    ...(parts.length ? { parts } : {}),
  };
}

function normalizeBlock(component) {
  if (component.__component === "shared.service-landing-report-image") {
    return {
      type: "image",
      src: component.src,
      alt: component.alt,
      previewSrc: component.previewSrc || undefined,
      previewTitle: component.previewTitle || undefined,
      previewWeek: component.previewWeek || undefined,
      previewSource: component.previewSource || undefined,
      previewTableOnly: component.previewTableOnly || undefined,
      width: component.width || undefined,
      height: component.height || undefined,
    };
  }
  return { type: "paragraph", ...normalizeParagraph(component) };
}

function normalizeReportContents(content) {
  if (!content) return null;
  const blocks = (content.mainSectionBlocks || []).map(normalizeBlock);
  const paragraphs = sortByOrder(content.mainSectionParagraphs || []).map(
    normalizeParagraph,
  );
  return {
    tableOfContents: sortByOrder(content.tableOfContents || []).map((item) => ({
      id: item.anchorId,
      label: item.label,
      srText: item.srText || item.label,
    })),
    mainSection: {
      id: content.mainSectionId || "",
      title: content.mainSectionTitle || "",
      ...(blocks.length ? { blocks } : {}),
      ...(!blocks.length && paragraphs.length ? { paragraphs } : {}),
      ...(!blocks.length && content.mainSectionImage?.src
        ? {
            image: {
              src: content.mainSectionImage.src,
              alt: content.mainSectionImage.alt,
              previewSrc: content.mainSectionImage.previewSrc || undefined,
              previewTitle: content.mainSectionImage.previewTitle || undefined,
              previewWeek: content.mainSectionImage.previewWeek || undefined,
              previewSource: content.mainSectionImage.previewSource || undefined,
              previewTableOnly: content.mainSectionImage.previewTableOnly || undefined,
              width: content.mainSectionImage.width || undefined,
              height: content.mainSectionImage.height || undefined,
            },
          }
        : {}),
    },
    ...(content.ctaSectionTitle
      ? {
          ctaSection: {
            id: content.ctaSectionId,
            title: content.ctaSectionTitle,
            label: content.ctaSectionLabel,
            href: content.ctaSectionHref,
            srText: content.ctaSectionSrText,
          },
        }
      : {}),
    disclaimers: sortByOrder(content.disclaimers || []).map((item) => ({
      text: item.text || undefined,
      href: item.href || undefined,
      linkLabel: item.linkLabel || undefined,
      textAfter: item.textAfter || undefined,
    })),
  };
}

function normalizeHero(content) {
  if (!content) return null;
  return {
    imageSrc: content.imageSrc || "",
    imageAlt: content.imageAlt || "",
    title: content.title,
    description: content.description || "",
    date: content.date || "",
    category: content.category || "",
    className: content.className || "",
    metaTone: content.metaTone || "",
    descriptionParts: normalizeInlineParts(content.descriptionParts),
    breadcrumbs: sortByOrder(content.breadcrumbs || []).map((item) => ({
      label: item.label,
      href: item.href,
      srText: item.srText || item.label,
    })),
  };
}

function normalizeAtAGlance(content) {
  if (!content) return null;
  return {
    authorName: content.authorName,
    authorImageSrc: content.authorImageSrc,
    authorImageAlt: content.authorImageAlt,
    authorImageClassName: content.authorImageClassName,
    authorImageWrapperClassName: content.authorImageWrapperClassName,
    authorImageUnoptimized: Boolean(content.authorImageUnoptimized),
    heading: content.heading,
    headingId: content.headingId,
    body: content.body,
    sectionClassName: content.sectionClassName,
    tags: sortByOrder(content.tags || []).map((tag) => ({
      label: tag.label,
      href: tag.href,
      srText: tag.srText || tag.label,
    })),
    bullets: sortByOrder(content.bullets || []).map((bullet) => ({
      before: bullet.before,
      emphasis: bullet.emphasis,
      after: bullet.after,
    })),
  };
}

function normalizeSubscribe(content) {
  if (!content) return null;
  return {
    heading: content.heading,
    headingId: content.headingId,
    emailLabel: content.emailLabel,
    newslettersLabel: content.newslettersLabel,
    disclaimer: content.disclaimer,
    privacyPolicyHref: content.privacyPolicyHref,
    privacyPolicyLabel: content.privacyPolicyLabel,
    disclaimerSuffix: content.disclaimerSuffix,
    submitLabel: content.submitLabel,
    submitSrText: content.submitSrText,
    newsletterOptions: sortByOrder(content.newsletterOptions || []).map(
      (item) => ({
        id: item.optionId || item.id,
        label: item.label,
      }),
    ),
  };
}

function normalizeSimilarInsights(content) {
  if (!content) return null;
  return {
    heading: content.heading,
    headingId: content.headingId,
    desktopColumns: content.desktopColumns ?? 4,
    sectionBgColor: content.sectionBgColor || "",
    cards: sortByOrder(content.cards || []).map((card) => ({
      href: card.href,
      srText: card.srText,
      imageSrc: card.imageSrc,
      imageAlt: card.imageAlt,
      category: card.category,
      title: card.title,
      description: card.description,
      date: card.date,
    })),
  };
}

function normalizePressRelease(content) {
  if (!content) return null;
  return {
    author: { useBrandLogo: Boolean(content.authorUseBrandLogo) },
    blocks: (content.blocks || []).map(normalizeBlock),
  };
}

export function normalizeServiceLandingPageFromStrapi(item) {
  if (!item) return null;
  return {
    slug: item.slug,
    title: item.title,
    hero: normalizeHero(item.hero),
    atAGlance: normalizeAtAGlance(item.atAGlance),
    reportContents: normalizeReportContents(item.reportContents),
    pressRelease: normalizePressRelease(item.pressRelease),
    subscribe: normalizeSubscribe(item.subscribe),
    similarInsights: normalizeSimilarInsights(item.similarInsights),
    includePerformanceCarousel: Boolean(item.includePerformanceCarousel),
  };
}

// --- Brand ---
function mapImages(images = []) {
  return sortByOrder(images).map((image) => ({
    src: image.src || "",
    alt: image.alt || "",
  }));
}

export function normalizeBrandPageFromStrapi(item) {
  if (!item) return null;
  return {
    pageContent: {
      intro: {
        titleBefore: item.introTitleBefore || "",
        titleHighlight: item.introTitleHighlight || "",
        description: item.introDescription || "",
        imageSrc: item.introImageSrc || "",
        imageAlt: item.introImageAlt || "",
      },
      harnessing: {
        titleHighlight: item.harnessingTitleHighlight || "",
        titleAfter: item.harnessingTitleAfter || "",
        body: item.harnessingBody || "",
        images: mapImages(item.harnessingImages),
        download: {
          href: item.harnessingDownloadHref || "",
          srLabel: item.harnessingDownloadSrLabel || "",
          label: item.harnessingDownloadLabel || "",
        },
      },
      logo: {
        eyebrow: item.logoEyebrow || "",
        description: item.logoDescription || "",
        slides: sortByOrder(item.logoSlides || []).map((slide) => ({
          id: slide.slideId || "",
          label: slide.label || "",
          caption: slide.caption || "",
        })),
        download: {
          href: item.logoDownloadHref || "",
          srLabel: item.logoDownloadSrLabel || "",
          label: item.logoDownloadLabel || "",
        },
      },
      colorIntro: { title: item.colorIntroTitle || "" },
      media: {
        eyebrow: item.mediaEyebrow || "",
        description: item.mediaDescription || "",
        headshots: mapImages(item.mediaHeadshots),
        backdrops: mapImages(item.mediaBackdrops),
        headshotsDownload: {
          href: item.mediaHeadshotsDownloadHref || "",
          srLabel: item.mediaHeadshotsDownloadSrLabel || "",
          label: item.mediaHeadshotsDownloadLabel || "",
        },
        backdropsDownload: {
          href: item.mediaBackdropsDownloadHref || "",
          srLabel: item.mediaBackdropsDownloadSrLabel || "",
          label: item.mediaBackdropsDownloadLabel || "",
        },
      },
      subBrands: { eyebrow: item.subBrandsEyebrow || "" },
    },
  };
}

// --- Events ---
export function normalizeEventsPageFromStrapi(item) {
  if (!item) return null;

  const pageContent = {
    upcomingEventsSection: {
      headingId: item.upcomingHeadingId || "",
      heading: item.upcomingHeading || "",
      headingClassName: item.upcomingHeadingClassName || "",
      dividerClassName: item.upcomingDividerClassName || "",
      desktopColumns: item.upcomingDesktopColumns ?? 3,
      mobileInitialCount: item.upcomingMobileInitialCount ?? 1,
    },
    upcomingEvents: sortByOrder(item.upcomingEvents || []).map((event) => ({
      id: event.externalId || "",
      href: event.href || "",
      srText: event.srText || "",
      imageSrc: event.imageSrc || "",
      imageAlt: event.imageAlt || "",
      role: event.role || "",
      location: event.location || "",
      title: event.title || "",
      dateStart: event.dateStart || "",
      dateEnd: event.dateEnd,
      theme: event.theme || "mid",
    })),
    endpointSection: {
      intro: {
        headingId: item.endpointIntroHeadingId || "",
        titleBefore: item.endpointIntroTitleBefore || "",
        titleHighlight: item.endpointIntroTitleHighlight || "",
        description: item.endpointIntroDescription || "",
        logoSrc: item.endpointIntroLogoSrc || "",
        logoAlt: item.endpointIntroLogoAlt || "",
      },
      stats: sortByOrder(item.endpointStats || []).map((stat) => ({
        id: stat.externalId || "",
        label: stat.label || "",
        value: stat.value || "",
        width: stat.width,
        activeDotColor: stat.activeDotColor,
      })),
      showcase: {
        headingId: item.endpointShowcaseHeadingId || "",
        titleBefore: item.endpointShowcaseTitleBefore || "",
        titleHighlight: item.endpointShowcaseTitleHighlight || "",
        eyebrow: item.endpointShowcaseEyebrow || "",
        subtitle: item.endpointShowcaseSubtitle || "",
        panels: sortByOrder(item.endpointShowcasePanels || []).map((panel) => ({
          id: panel.externalId || "",
          title: panel.title || "",
          headline: panel.headline || "",
          description: panel.description || "",
          accent: panel.accent || "",
          highlight: {
            value: panel.highlightValue || "",
            label: panel.highlightLabel || "",
          },
        })),
      },
      coHost: {
        title: item.endpointCoHostTitle || "",
        description: item.endpointCoHostDescription || "",
        ctaLabel: item.endpointCoHostCtaLabel || "",
        ctaHref: item.endpointCoHostCtaHref || "",
      },
    },
    pastSpeakers: sortByOrder(item.pastSpeakers || []).map((speaker) => ({
      id: speaker.externalId || "",
      name: speaker.name || "",
      company: speaker.company || "",
      imageAlt: speaker.imageAlt || "",
      imageSrc: speaker.imageSrc || "",
    })),
    pastConversationsSection: {
      headingId: item.pastConversationsHeadingId || "",
      titleHighlight: item.pastConversationsTitleHighlight || "",
      titleAfter: item.pastConversationsTitleAfter || "",
      description: item.pastConversationsDescription || "",
      mobileInitialCount: item.pastConversationsMobileInitialCount ?? 1,
      items: sortByOrder(item.pastConversationsItems || []).map((media) => ({
        id: media.externalId || "",
        href: media.href || "",
        imageAlt: media.imageAlt || "",
        imageSrc: media.imageSrc || "",
        category: media.category || "",
        title: media.title || "",
        date: media.date || "",
      })),
    },
    bootcampSection: {
      headingId: item.bootcampHeadingId || "",
      heading: item.bootcampHeading || "",
      title: item.bootcampTitle || "",
      description: item.bootcampDescription || "",
      ctaLabel: item.bootcampCtaLabel || "",
      ctaHref: item.bootcampCtaHref || "",
      imageSrc: item.bootcampImageSrc || "",
      imageAlt: item.bootcampImageAlt || "",
    },
    cta: sortByOrder(item.cta || []).map((ctaItem) => ({
      title: ctaItem.title,
      description: ctaItem.description,
      href: ctaItem.href,
      srLabel: ctaItem.srLabel,
      backgroundColor: ctaItem.backgroundColor,
    })),
  };

  return {
    accentColor: item.accentColor || "",
    backgroundClassName: item.backgroundClassName || "",
    videoClass: item.videoClass || "events-hero-video",
    pageContent,
  };
}
