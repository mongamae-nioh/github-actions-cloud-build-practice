FROM node:18.13.0-alpine AS base

FROM base AS builder
WORKDIR /app/serverside
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app/serverside
COPY package*.json ./
RUN npm install --omit=dev && npm cache clean --force

COPY --from=builder /app/serverside/dist ./dist

EXPOSE 8080
CMD npm run start