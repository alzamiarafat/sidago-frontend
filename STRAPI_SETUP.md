# Strapi Setup

This repo now contains a local Strapi backend in `strapi-backend/`.

Goal: frontend content will be managed in Strapi and stored in PostgreSQL.

## Run locally

Frontend:

```bash
npm run dev
```

Backend:

```bash
cd strapi-backend
npm run develop
```

The frontend is configured to read Strapi from:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

## PostgreSQL setup

`strapi-backend/config/database.js` is already configured for PostgreSQL. The default example env is:

```env
DATABASE_CLIENT=postgres
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5442
DATABASE_NAME=strapi
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
DATABASE_SCHEMA=public
DATABASE_URL=
```

Copy the frontend env if needed:

```bash
cp .env.example .env
```

Copy the backend env if needed:

```bash
cp strapi-backend/.env.example strapi-backend/.env
```

## Run with Docker

This repo's `docker-compose.yml` now includes:

- `postgres` on port `5442`
- `strapi-backend` on port `1337`
- `sidago-frontend` on port `9005`

Start everything:

```bash
docker compose up --build
```

After startup:

- PostgreSQL stores Strapi data
- Strapi exposes content at `http://localhost:1337`
- Frontend reads that content and renders it at `http://localhost:9005`

## Content types

Created in Strapi:

- `site-config` single type
- `content-page` collection type

Shared components:

- `shared.seo`
- `shared.link`
- `shared.social-link`
- `shared.hero-title`
- `shared.hero`
- `shared.stat`
- `shared.insight-item`
- `shared.accordion-item`
- `shared.content-section`
- `shared.cta-card`
- `navigation.menu-link`
- `navigation.menu-group`
- `shared.footer-link-group`

## Recommended content entries

Create these `content-page` entries first:

- `home` with `pageType=home`
- `options` with `pageType=options`
- `marketplace` with `pageType=marketplace`
- `node` with `pageType=node`
- `ventures` with `pageType=ventures`
- service pages with `pageType=service`
- industry pages with `pageType=industry`
- strategy pages with `pageType=strategy`

Important fields for navigation-driven pages:

- `title`
- `slug`
- `pageType`
- `navLabel`
- `menuGroup`
- `parentSlug`
- `menuOrder`
- `showInNavigation`
- `introTitle`
- `introDescription`
- `summary`
- `paragraphs`
- `detailSections`
- `closing`
- `seo`

Important fields for the homepage:

- `hero`
- `stats`
- `insightItems`
- `accordionItems`

Important fields for content-heavy landing pages:

- `hero`
- `stats`
- `customData`

Recommended `customData` shape for `options`:

```json
{
  "latestAbout": {
    "title": "Latest Sidago Tx hash",
    "hashes": ["0x...", "0x...", "0x..."]
  },
  "buildChallenge": {
    "title": "Building solutions for core challenges in DeFi",
    "description": "Section intro",
    "tabs": [
      {
        "key": "liquidity",
        "label": "Liquidity",
        "panelClassName": "bg-blue-light",
        "imageSrc": "/images/Defi-Tabs-Liquidity.svg",
        "imageAlt": "Liquidity",
        "content": "Tab copy"
      }
    ]
  },
  "chainActivity": {
    "title": "Sidago chain activity index",
    "description": "Table intro",
    "columns": [
      "Name",
      "Dominant stablecoin",
      "Sector dominance",
      "Gas cost for staking",
      "Gas cost for swapping",
      "Price impact $10k trade",
      "Price impact $100k trade",
      "Price impact $1M trade",
      "Price impact $10M trade"
    ],
    "rows": [
      {
        "name": "Ethereum",
        "stablecoin": "Tether",
        "sectors": [
          { "label": "Lending", "value": 20, "colorClass": "bg-orange-light" }
        ],
        "staking": "0.0182 USD",
        "swapping": "0.0607 USD",
        "impact10k": "9.09 bps",
        "impact100k": "9.53 bps",
        "impact1m": "11.70 bps",
        "impact10m": "NaN bps"
      }
    ]
  },
  "tradingMarket": {
    "title": "Strengthening DeFi trading markets",
    "description": "Section intro",
    "cards": [
      {
        "title": "Automated market makers (AMMs)",
        "description": "Card copy",
        "label": "Including on:",
        "className": "bg-blue-mid text-gray-night-green",
        "logos": [
          { "src": "https://...", "alt": "Uniswap" }
        ]
      }
    ]
  },
  "latestResearch": {
    "title": "Latest DeFi research",
    "items": [
      {
        "href": "#",
        "srLabel": "Research card",
        "imageAlt": "Research image",
        "imageSrc": "/images/digest-1.webp",
        "category": "Case Studies",
        "title": "Research title",
        "date": "9 Oct 2025"
      }
    ]
  },
  "discover": {
    "title": "Discover more",
    "cards": [
      {
        "title": "Governance",
        "description": "Card copy",
        "href": "/governance",
        "className": "bg-orange-mid text-gray-night-green"
      }
    ]
  }
}
```

Recommended `customData` shape for `ventures`, `node`, and `marketplace`:

```json
{
  "partnerBenefits": {
    "title": "Partner with Sidago Ventures",
    "items": ["Value-add first approach", "Founded by operators"]
  },
  "investments": {
    "title": "Venture investments",
    "categories": [
      {
        "title": "DeFi Applications",
        "href": "#",
        "accentClass": "text-blue-mid",
        "span": "lg:col-span-2",
        "logos": [{ "src": "/images/logo.svg", "alt": "Logo" }]
      }
    ]
  },
  "incubations": {
    "title": "Building through incubation",
    "description": "Section intro",
    "items": [
      {
        "title": "Bebop",
        "description": "Card copy",
        "href": "https://bebop.xyz/",
        "imageSrc": "/images/Venture-Incubation-Bebop-BG.svg",
        "logoSrc": "/images/Ventures-Incubation-Bebop-logo.svg"
      }
    ]
  },
  "workOverview": {
    "title": "How we work",
    "description": "Section intro",
    "cards": [
      {
        "title": "Founders-first support",
        "description": "Card copy"
      }
    ]
  }
}
```

## Current frontend integration

The frontend now reads Strapi data for:

- global site settings from `site-config`
- homepage content from `content-page(home)`
- options, marketplace, node, and ventures page content from `content-page.customData`
- SEO metadata for service, industry, and strategy detail routes
- service, industry, and strategy content-tab page collections
- navigation, footer links, social links, and global layout settings from `site-config`

## Performance notes

- `content-page` now supports a `customData` JSON field so page-specific content can be delivered in a compact API payload
- direct `pageType + slug` fetching is used in the frontend instead of pulling whole collections for detail pages
- PostgreSQL indexes are created automatically on `content_pages(page_type, slug)` and `content_pages(page_type, menu_order)` during Strapi bootstrap

If a Strapi entry does not exist yet, the frontend falls back to the current hardcoded data so the design stays intact during migration.

## Important note

At this moment, the frontend is only partially migrated. That means:

- content already wired through `src/lib/cms.js` will come from Strapi/PostgreSQL
- content still living in `src/data/*` remains static until we move those sections into Strapi too

So if you want literally all frontend data in PostgreSQL, the remaining `src/data/*` sections need to be migrated into Strapi content types/components as the next step.
