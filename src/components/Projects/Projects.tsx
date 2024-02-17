import React from 'react';
import type { ProjectsProps } from './Projects.types';
import Container from '_components/common/Container';

const Projects = ({}: ProjectsProps) => {
  return (
    <Container className="Projects" title="Mes projets" id="projets">
      <div className="relative">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center">
          <div className="bg-grey-light rounded-b-none rounded-t-lg lg:rounded-lg h-[250px] sm:h-[350px] sm:w-[450px] lg:h-[500px] lg:w-[500px]" />
          <div className="flex flex-col justify-center gap-4 py-4 px-6 sm:py-8 sm:px-10 sm:h-[350px] sm:w-[450px] lg:h-[500px] lg:py-0">
            <div className="flex items-center justify-between">
              <span className="text-800 italic">01.</span>
              <div className="flex items-center gap-4 font-bold italic">
                <span className="border-white border-[1px] rounded-2xl text-400 px-4">
                  Web
                </span>
                <span className="border-white border-[1px] rounded-2xl text-400 px-4">
                  Design
                </span>
              </div>
            </div>
            <h3 className="text-900 sm:text-950 font-extrabold text-secondary">
              Title Project
            </h3>
            <p className="text-600 xs:text-600 md:text-700 font-medium">
              Techno
            </p>
            <p className="font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              dolorem officia beatae accusamus optio quos exercitationem
              doloremque deserunt sint ad sit amet consequuntur ratione laborum
              aut, iure deleniti repudiandae odio?
            </p>
          </div>
        </div>
        <div className="h-4/5 w-full bg-primary rounded-lg absolute -z-10 bottom-0 sm:h-[400px] md:h-[500px] lg:-bottom-12 lg:h-[600px] lg:w-3/4 lg:left-0" />
      </div>
    </Container>
  );
};

export default Projects;
