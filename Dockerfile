# ビルドステージ
FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
RUN rm -rf node_modules/.cache
COPY . .
RUN npm install @prisma/client bcryptjs @types/bcryptjs ws @remix-run/dev
RUN npm run build

# 実行ステージ
FROM node:20-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/build ./build
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./
# Vite のキャッシュを削除（もし存在する場合）
RUN rm -rf node_modules/.vite
RUN npm install pm2 -g
EXPOSE 3000
CMD ["pm2-runtime", "start", "ecosystem.config.cjs"]
