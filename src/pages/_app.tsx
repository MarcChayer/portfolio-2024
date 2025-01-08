import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import '_styles/globals.css';
import '_components/Projects/components/Modal/Modal.css';
import '_components/Projects/components/Lign/Lign.css';
import '_components/common/Button/Button.css';
import Layout from '_components/layout';

import { montserrat } from 'src/fonts';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList.add(montserrat.variable);
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
