import type { ReactElement } from 'react';
import Layout from '_components/layout';
import type { NextPageWithLayout } from './_app';
import Landing from '_components/Landing';
import Skills from '_components/Skills';
import Projects from '_components/Projects';
import About from '_components/About';

const Page: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center gap-96">
      <Landing />
      <Skills />
      <Projects />
      <About />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
