# Sidago Next.js Frontend

Next.js frontend for the Sidago website. Content is managed by the separate
**Sidago Strapi** backend repository.

## Environment

1. Copy `.env.example` to `.env`.

```bash
NEXT_PUBLIC_STRAPI_URL=http://localhost:9012
STRAPI_API_TOKEN=
```

Point `NEXT_PUBLIC_STRAPI_URL` at your Strapi instance (local or production).

## Local development

```bash
npm install
npm run dev
```

Frontend: `http://localhost:3000`

## Strapi backend

Strapi lives in the standalone repo:

```bash
../sidago-strapi
```

Setup, Docker, and seed commands are documented in that repository's `README.md`.

Typical local stack:

1. Start Strapi + Postgres from `sidago-strapi`
2. Set `NEXT_PUBLIC_STRAPI_URL=http://localhost:9012` in this repo's `.env`
3. Run `npm run dev` here

## Docker

Build and run with a fixed image name and tag:

```bash
# default tag: 1  →  sidago-nextjs-frontend:1
npm run docker:up

# custom tag
IMAGE_TAG=2 docker compose up --build -d
```

Manual build:

```bash
docker compose build
# creates: sidago-nextjs-frontend:1
```

Published port: `http://localhost:9010`

Ensure `NEXT_PUBLIC_STRAPI_URL` in `.env` points to a reachable Strapi instance
when using Docker.
