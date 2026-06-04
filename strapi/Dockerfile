FROM node:20.19.0-slim AS build

WORKDIR /app

ENV NPM_CONFIG_FETCH_RETRIES=5
ENV NPM_CONFIG_FETCH_RETRY_MINTIMEOUT=20000
ENV NPM_CONFIG_FETCH_RETRY_MAXTIMEOUT=120000

RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 make g++ \
  && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then \
      npm ci --no-audit --no-fund --legacy-peer-deps; \
    else \
      npm install --no-audit --no-fund --legacy-peer-deps; \
    fi

COPY . .

ENV NODE_ENV=production

RUN npm run build \
  && npm prune --omit=dev \
  && npm cache clean --force

FROM node:20.19.0-slim AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=build /app ./

RUN mkdir -p /app/public/uploads

EXPOSE 9012

CMD ["sh", "-c", "mkdir -p /app/public/uploads && npm run start"]
