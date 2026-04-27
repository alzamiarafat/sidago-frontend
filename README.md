This is a Next.js frontend with a local Strapi CMS backend. Frontend content can be managed in Strapi and stored in PostgreSQL.

## Getting Started

Frontend:

```bash
npm run dev
```

Backend:

```bash
cd strapi-backend
npm run develop
```

Frontend runs on `http://localhost:3000` in dev unless you change the port. Strapi runs on `http://localhost:1337`.

## Environment

Frontend:

```bash
cp .env.example .env
```

Backend:

```bash
cp strapi-backend/.env.example strapi-backend/.env
```

Set this in frontend `.env`:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

## PostgreSQL

`strapi-backend` is configured to use PostgreSQL. You can run PostgreSQL locally yourself, or use Docker Compose:

```bash
docker compose up --build
```

That starts:

- `postgres`
- `strapi-backend`
- `sidago-frontend`

## Current migration status

Some frontend sections already read from Strapi. If Strapi content is missing, the UI falls back to existing hardcoded data. To make all frontend data live in PostgreSQL, the remaining `src/data/*` content also needs to be migrated into Strapi.

See [STRAPI_SETUP.md](/home/cs-04/sidago-frontend/STRAPI_SETUP.md) for the content-model and migration notes.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
