import { Html, Head, Main, NextScript } from 'next/document';
import { montserrat } from 'src/fonts';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta
          name="description"
          content="Développeur front-end : React.js - Next.js"
        />
        <meta charSet="UTF-8" />
      </Head>
      <body className={montserrat.variable}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
