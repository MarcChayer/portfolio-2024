import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { projects } from 'src/__fixtures__/projects';
import ArrowDown from '_svgs/ArrowDown';
import { motion } from 'framer-motion';
import ButtonsAction from './components/ButtonsAction';
import Container from '_components/common/Container';
import ProjectImages from './components/ProjectImages';
import useSmoothScroll from 'src/hooks/useSmoothScroll';
import type { ProjectProps } from './Project.types';

const Project = ({ project }: ProjectProps) => {
  const router = useRouter();
  const projectIndex = projects.findIndex((p) => p.id === project.id);

  const { scrollTo } = useSmoothScroll();

  const handleScroll = () => {
    const target = document.getElementById('projectContent');
    if (target && scrollTo) {
      scrollTo('#projectContent');
    }
  };

  return (
    <div className="Project">
      <div className="relative flex flex-col items-center">
        <Image
          className="h-96 md:h-screen w-full object-cover"
          src={project.images.first}
          alt={`Image du projet ${project.fullName}`}
        />
        <motion.div
          className="absolute bottom-8 opacity-30 cursor-pointer"
          animate={{
            y: ['0px', '10px', '0px'],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          onClick={handleScroll}
        >
          <ArrowDown />
        </motion.div>
      </div>

      <Container className="mx-auto" id="projectContent">
        <div className="grid grid-cols-1 md:grid-cols-[2fr,4fr] gap-8 md:gap-36 w-full">
          <div>
            <p className="tracking-wide text-700 text-secondary mb-4 md:mb-10">
              Projet
            </p>
            <h3 className="text-900 md:text-950 font-bold uppercase">
              {project.fullName}
            </h3>
          </div>

          <div>
            <p className="tracking-wide text-700 text-secondary mb-4 md:mb-10">
              Présentation
            </p>
            <p className="text-700 font-medium leading-normal">
              {project.description}
            </p>
          </div>
          <div className="order-1 md:order-none">
            <p className="tracking-wide text-700 text-secondary mb-4 md:mb-10">
              Technos
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technos.split(',').map((tech, index) => (
                <span
                  key={index}
                  className="bg-purple-600 rounded-md text-700 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="order-2 md:order-none">
            <p className="tracking-wide text-700 text-secondary mb-4 md:mb-10">
              Date
            </p>
            <p className="text-gray-400 text-700 font-medium">{project.year}</p>
          </div>
        </div>

        <ProjectImages images={project.images} />

        <div className="flex flex-col gap-4 md:justify-between md:flex-row pt-40 w-full">
          <ButtonsAction projectIndex={projectIndex} router={router} />
        </div>
      </Container>
    </div>
  );
};

export default Project;
