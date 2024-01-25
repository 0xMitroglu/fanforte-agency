import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/images/logo_website-icon.png"></link>
        <link rel="icon" href="/images/logo_website-icon.png"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
