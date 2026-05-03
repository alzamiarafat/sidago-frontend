# Sidago Strapi Backend

This backend manages the homepage hero and global website settings for the Next.js frontend.

## Content model

- `Global` single type
- `Homepage` single type
- `Hero` component
- `Insight News Item` repeatable component
- `Hero Title` repeatable component
- `Social Link` repeatable component
- `Site Version` component

## Setup

1. Copy `strapi/.env.example` to `strapi/.env`.
2. Install backend dependencies with `npm install` inside `strapi/`.
3. Start the backend with `npm run develop` inside `strapi/`.
4. Open `http://localhost:9001/admin` and create the first admin user.

## PostgreSQL with Docker

The Docker setup uses a PostgreSQL service named `sidago-postgres`.

Run:

```bash
docker compose up --build sidago-postgres sidago-strapi
```

Required database env values:

- `DATABASE_CLIENT=postgres`
- `DATABASE_HOST=sidago-postgres`
- `DATABASE_PORT=5432`
- `DATABASE_NAME=sidago_strapi`
- `DATABASE_USERNAME=sidago`
- `DATABASE_PASSWORD=sidago`

## Seed from frontend defaults

Run:

```bash
npm run seed
```

This writes `strapi/scripts/seed-data.json` using the current frontend hero and global fallback content.

To insert that frontend hero data directly into Strapi:

1. Set `STRAPI_SEED_TOKEN` in `strapi/.env` to a long secret value.
2. Run:

```bash
npm run seed:push
```

The seed script calls the project-owned `/api/seed` endpoint. The token is only used as a shared secret for that endpoint, so it does not need to be created in the Strapi admin panel.

That updates:

- `Global`
- `Homepage.hero`
