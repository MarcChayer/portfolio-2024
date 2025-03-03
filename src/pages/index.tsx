import Landing from '_components/Landing';
import Projects from '_components/Projects';
import Skills from '_components/Skills';
import SectionWrapper from '_components/common/SectionWrapper';

const Page = () => {
  return (
    <div className="flex flex-col item-center justify-center overflow-hidden">
      <SectionWrapper id="home">
        <Landing />
      </SectionWrapper>
      <SectionWrapper
        id="stack"
        text="Stack technique"
        direction="left"
        left="-75%"
        className="gap-20 xl:flex-row"
      >
        <Skills />
      </SectionWrapper>
      <SectionWrapper
        id="projets"
        className="!justify-start mt-32"
        text="Projets"
        direction="right"
        left="-85%"
      >
        <Projects />
      </SectionWrapper>
    </div>
  );
};

export default Page;
