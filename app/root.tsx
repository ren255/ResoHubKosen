import { Links, Meta, Scripts } from "@remix-run/react";
import "./tailwind.css";

export default function App() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        <main className="p-6">
        </main>
        <Scripts />
      </body>
    </html>
  )
}