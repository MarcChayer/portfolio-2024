import type { AppProps } from 'next/app';
import '_styles/globals.css';
import '_components/Projects/components/Modal/Modal.css';
import '_components/Projects/components/Lign/Lign.css';
import '_components/common/Button/Button.css';
import Layout from '_components/layout';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Marc Chayer - Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
