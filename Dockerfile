FROM node:20.18.0 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# .env is gitignored; use example defaults for build-time static generation
RUN cp .env.example .env

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

FROM node:20.18.0 AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 9010

CMD ["npm", "run", "start"]
