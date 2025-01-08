import { type ReactElement } from 'react';
import Layout from '_components/layout';
import Landing from '_components/Landing';
import Projects from '_components/Projects';
import About from '_components/About';
import Skills from '_components/Skills';

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <Landing />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
