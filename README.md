# 初回起動方法
### 1. Dockerコンテナを立ち上げる
docker desk top を開いた後以下を実行します。
```bash
docker-compose up
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
