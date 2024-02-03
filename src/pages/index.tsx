import type { ReactElement } from 'react';
import Layout from '_components/layout';
import type { NextPageWithLayout } from './_app';
import Landing from '_components/Landing';

const Page: NextPageWithLayout = () => {
  return <Landing />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
