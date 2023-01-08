FROM node:18.13.0-alpine AS base

FROM base AS builder
ADD . /app
WORKDIR /app
RUN npm ci
RUN npm run build

FROM base AS runner
WORKDIR /app
COPY --from=builder /app .
#COPY --from=builder /app/next.config.js ./
#COPY --from=builder /app/public ./public
#COPY --from=builder /app/package.json ./package.json
#COPY --from=builder /app/.next/static ./.next/static
RUN npm install --omit=dev && npm cache clean --force

CMD ["./node_modules/next/dist/bin/next", "start"]