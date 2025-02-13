# 仕様技術
![Node.js](https://img.shields.io/badge/-Node.js-339933.svg?logo=Node.js&style=flat&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC.svg?logo=tailwind-css&style=flat&logoColor=white)
![React](https://img.shields.io/badge/-React-61DAFB.svg?logo=react&style=flat&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6.svg?logo=typescript&style=flat&logoColor=white)
![Prisma](https://img.shields.io/badge/-Prisma-2D3748.svg?logo=prisma&style=flat&logoColor=white)
![MySQL](https://img.shields.io/badge/-MySQL-4479A1.svg?logo=mysql&style=flat&logoColor=white)
![Docker](https://img.shields.io/badge/-Docker-2496ED.svg?logo=docker&style=flat&logoColor=white)

# 初回起動方法
### 1. Dockerコンテナを立ち上げる
docker desk top を開いた後以下を実行します。
```bash
docker-compose up
```

dockerのコンテナログをターミナルに非表示にするには以下を実行します。
```bash
docker-compose up -d
```

### 2. 必要なパッケージをインストールする

依存パッケージをインストールします。別のターミナルを開いて以下を実行してください。

```bash
npm install
```

## docker commands
docker-composeを使うことでidを指定せずターミナルの開いている場所の`docker-compose.yml`ファイルのdockerを操れる。
### 状態を確認
```
docker-compose ps
```

### 再起動
```bash
docker-compose restart
```
### 開始

```bash
docker-compose start
```

### 停止

```bash
docker-compose stop
```

### コンテナを削除
```bash
docker-compose down
```

# dockerを使わないなら

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.

## Prismaの変更を反映させる手順

schema.prismaを変更した後、以下を実行してください。

### dockerコンテナに反映させる場合

マイグレーションを作成し、データベースに反映させてください。

```bash
docker-compose exec app npx prisma migrate dev 
```

### dockerを使わない場合
```bash
npx prisma migrate dev 
```

### ※もし、shadow_databaseを作るのに権限がありませんみたいなことを言われた場合。
shareing_rejume-db-1に接続してください。
```bash
docker exec -it shareing_rejume-db-1 bash
```

shareing_rejume-db-1コンテナに入った後、mysqlに接続してください。
```bash
mysql -u root -p
```

その後、以下を実行してください。
```bash
GRANT ALL PRIVILEGES ON . TO 'rejume_user'@'%';
FLUSH PRIVILEGES;

exit
```
権限を確認したい場合、`FLUSH PRIVILEGES;`と`exit`の間に以下を実行してください。
```bash
SHOW GRANTS FOR 'rejume_user'@'%';
```