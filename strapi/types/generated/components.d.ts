import type { Schema, Struct } from '@strapi/strapi';

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    description: 'Homepage hero section configuration';
    displayName: 'Hero';
  };
  attributes: {
    fontWeight: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<400>;
    imageSrc: Schema.Attribute.String;
    lighterBgColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'bg-[#f0f1f1]'>;
    lighterTheme: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    loop: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    titles: Schema.Attribute.Component<'shared.hero-title', true>;
    useVideo: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    videoClass: Schema.Attribute.String;
    videoSectionClass: Schema.Attribute.String;
    videoSrc: Schema.Attribute.String;
  };
}

export interface SharedHeroTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_titles';
  info: {
    description: 'A styled title fragment for the homepage hero';
    displayName: 'Hero Title';
  };
  attributes: {
    className: Schema.Attribute.String;
    color: Schema.Attribute.String;
    sortOrder: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSiteVersion extends Struct.ComponentSchema {
  collectionName: 'components_shared_site_versions';
  info: {
    description: 'Frontend layout version selector';
    displayName: 'Site Version';
  };
  attributes: {
    label: Schema.Attribute.Enumeration<['v1', 'v2']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'v2'>;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    description: 'Global social link settings';
    displayName: 'Social Link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.hero': SharedHero;
      'shared.hero-title': SharedHeroTitle;
      'shared.site-version': SharedSiteVersion;
      'shared.social-link': SharedSocialLink;
    }
  }
}
