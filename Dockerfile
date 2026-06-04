FROM node:20.19.0-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./

# Use deterministic install (fixes "next not found" + consistency)
RUN npm ci

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build


# -------------------------
# Production runtime
# -------------------------
FROM node:20.19.0-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=9010
ENV HOSTNAME=0.0.0.0

RUN groupadd --system nodejs \
  && useradd --system --gid nodejs nextjs

# Copy standalone output (BEST PRACTICE for Next.js)
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 9010

CMD ["node", "server.js"]