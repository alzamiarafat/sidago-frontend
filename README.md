# Sidago Frontend + Strapi Backend

This repository now contains:

- a Next.js frontend in the project root
- a Strapi backend in `strapi/`

## Environment

1. Copy `.env.example` to `.env`.
2. Copy `strapi/.env.example` to `strapi/.env`.

Frontend:

```bash
NEXT_PUBLIC_STRAPI_URL=http://localhost:9012
STRAPI_API_TOKEN=
```

## Local development

Frontend:

```bash
npm install
npm run dev
```

Backend:

```bash
cd strapi
npm install
npm run develop
```

PostgreSQL with Docker:

```bash
docker compose up --build sidago-postgres sidago-strapi
```

Strapi connects to the Docker database service `sidago-postgres` on port `5432`.
If you connect to PostgreSQL directly from your host machine, use port `5343`.

The frontend reads:

- `GET /api/global`
- `GET /api/homepage`

## Seed initial CMS data

Generate CMS seed data from the current frontend defaults in
`src/data/cms/defaults.mjs`:

```bash
npm run strapi:seed
```

That creates `strapi/scripts/seed-data.json`.

To insert the current frontend hero text and homepage insight news directly into
Strapi, set `STRAPI_SEED_TOKEN` in `strapi/.env` and run:

```bash
npm run strapi:seed:push
```

The push command updates both single types and publishes them, so the frontend
can read the seeded content immediately from:

- `GET /api/global`
- `GET /api/homepage`

If you do not want to expose these endpoints publicly in Strapi, keep using a
server-side token in the frontend via `STRAPI_API_TOKEN` in the root `.env`.

## Docker

Run both services with Docker Compose after creating the two env files:

```bash
docker compose up --build
```

Published ports:

- Frontend: `http://localhost:9010`
- Strapi: `http://localhost:9012`
- PostgreSQL: `localhost:5343`
