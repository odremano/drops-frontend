# Fase 1: Construcción
FROM node:lts-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Fase 2: Producción
FROM node:lts-slim AS runtime
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Variables de entorno por defecto
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

# Comando para iniciar el servidor de Astro
CMD ["node", "./dist/server/entry.mjs"]