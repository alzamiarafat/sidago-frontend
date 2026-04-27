import type { Schema, Struct } from '@strapi/strapi';

export interface NavigationMenuGroup extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_groups';
  info: {
    displayName: 'Menu Group';
  };
  attributes: {
    href: Schema.Attribute.String;
    links: Schema.Attribute.Component<'navigation.menu-link', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationMenuLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_links';
  info: {
    displayName: 'Menu Link';
  };
  attributes: {
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    iconKey: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_accordion_items';
  info: {
    displayName: 'Accordion Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    rotate: Schema.Attribute.String;
    sr: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video: Schema.Attribute.String;
  };
}

export interface SharedContentSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_content_sections';
  info: {
    displayName: 'Content Section';
  };
  attributes: {
    body: Schema.Attribute.Text;
    bullets: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface SharedCtaCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_cards';
  info: {
    displayName: 'CTA Card';
  };
  attributes: {
    bg: Schema.Attribute.String;
    dividerColor: Schema.Attribute.String;
    hoverBg: Schema.Attribute.String;
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
    textColor: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFooterLinkGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_link_groups';
  info: {
    displayName: 'Footer Link Group';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    fontWeight: Schema.Attribute.String;
    imageSrc: Schema.Attribute.String;
    lighterBgColor: Schema.Attribute.String;
    lighterTheme: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    loop: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.Text;
    titles: Schema.Attribute.Component<'shared.hero-title', true>;
    useVideo: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    videoClass: Schema.Attribute.String;
    videoSectionClass: Schema.Attribute.String;
    videoSrc: Schema.Attribute.String;
  };
}

export interface SharedHeroTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_titles';
  info: {
    displayName: 'Hero Title';
  };
  attributes: {
    className: Schema.Attribute.String;
    color: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedInsightItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_insight_items';
  info: {
    displayName: 'Insight Item';
  };
  attributes: {
    href: Schema.Attribute.String;
    srText: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    canonicalPath: Schema.Attribute.String;
    keywords: Schema.Attribute.JSON;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    ogImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    iconKey: Schema.Attribute.String;
    platform: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStat extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats';
  info: {
    displayName: 'Stat';
  };
  attributes: {
    activeDotColor: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    stat: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'navigation.menu-group': NavigationMenuGroup;
      'navigation.menu-link': NavigationMenuLink;
      'shared.accordion-item': SharedAccordionItem;
      'shared.content-section': SharedContentSection;
      'shared.cta-card': SharedCtaCard;
      'shared.footer-link-group': SharedFooterLinkGroup;
      'shared.hero': SharedHero;
      'shared.hero-title': SharedHeroTitle;
      'shared.insight-item': SharedInsightItem;
      'shared.link': SharedLink;
      'shared.seo': SharedSeo;
      'shared.social-link': SharedSocialLink;
      'shared.stat': SharedStat;
    }
  }
}
