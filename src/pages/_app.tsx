import { useEffect, type ReactElement, type ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import '_styles/globals.css';
import '_components/common/Container/Container.css';
import '_components/Skills/Skills.css';
import '_components/Projects/Projects.css';
import '_components/Landing/Landing.css';
import '_components/Skills/components/Accordion/Accordion.css';

import { montserrat } from 'src/fonts';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  useEffect(() => {
    document.body.classList.add(montserrat.variable);
  }, []);

  return getLayout(<Component {...pageProps} />);
}
