import React, { useMemo, useRef, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import Container from '_components/common/Container';
import { AnimatePresence, motion, useInView } from 'framer-motion';

import react from '_svgs/react.svg';
import nextjs from '_svgs/nextjs.svg';
import typescript from '_svgs/typescript.svg';
import tailwind from '_svgs/tailwind.svg';
import strapi from '_svgs/strapi.svg';
import storybook from '_svgs/storybook.svg';
import gitlab from '_svgs/gitlab.svg';
import docker from '_svgs/docker.svg';
import vscode from '_svgs/vscode.svg';
import notion from '_svgs/notion.svg';
import figma from '_svgs/figma.svg';
import illustrator from '_svgs/illustrator.svg';
import photoshop from '_svgs/photoshop.svg';
import tanstack from '_svgs/tanstack.png';
import testingLibrary from '_svgs/testingLibrary.svg';
import jest from '_svgs/jest.svg';

const skills: { name: string; src: StaticImageData }[] = [
  { name: 'React', src: react },
  { name: 'Next.js', src: nextjs },
  { name: 'TypeScript', src: typescript },
  { name: 'Tailwind', src: tailwind },
  { name: 'Strapi', src: strapi },
  { name: 'Storybook', src: storybook },
  { name: 'Tanstack', src: tanstack },
  { name: 'Jest', src: jest },
  { name: 'React Testing Library', src: testingLibrary },
  { name: 'Docker', src: docker },
  { name: 'GitLab', src: gitlab },
  { name: 'VSCode', src: vscode },
  { name: 'Notion', src: notion },
  { name: 'Figma', src: figma },
  { name: 'Illustrator', src: illustrator },
  { name: 'Photoshop', src: photoshop },
];

const Skills = () => {
  const refs = useRef<React.RefObject<HTMLDivElement>[]>(
    skills.map(() => React.createRef()),
  );
  const delays = useMemo(() => skills.map(() => Math.random() * 0.7), []);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <Container className="gap-20 xl:flex-row" id="stack">
      <div className="grid grid-cols-4 gap-3 xs:translate-x-6">
        {skills.map((skill, index) => {
          const isInView = useInView(refs.current[index], { once: true });
          const isActive = activeSkill === skill.name;

          return (
            <div
              key={index}
              className={`relative ${
                Math.floor(index / 4) % 2 === 1 ? 'xs:-translate-x-12' : ''
              }`}
            >
              <motion.div
                ref={refs.current[index]}
                className="w-16 h-16 2xs:w-12 2xs:h-12 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center shadow-2xl cursor-pointer relative z-0"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: delays[index],
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                }}
                whileHover={{
                  scale: 1.1,
                  // x: [0, -3, 3, -2, 2, 0],
                  transition: {
                    duration: 0.2,
                  },
                }}
                onClick={() => setActiveSkill(isActive ? null : skill.name)}
                onHoverStart={() =>
                  setActiveSkill(isActive ? null : skill.name)
                }
                onHoverEnd={() => setActiveSkill(null)}
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.button
                      type="button"
                      key="modal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="xs:whitespace-nowrap absolute top-[-40px] px-3 py-1 rounded-md backdrop-blur-sm bg-white/30 shadow-md font-medium text-center z-10"
                    >
                      {skill.name}
                    </motion.button>
                  )}
                </AnimatePresence>
                <motion.div className="flex items-center justify-center">
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    className="h-12 w-auto 2xs:h-8 md:h-14"
                  />
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </div>

      <div className="max-w-lg 2xs:max-w-md">
        <h2 className="2xs:text-800 text-950 font-bold">
          Ma stack <span className="text-secondary">technique</span>
        </h2>
        <p className="mt-8 text-700 leading-7">
          je conçois et développe des applications web dynamiques et
          performantes avec React.js et Next.js, en exploitant TypeScript pour
          assurer un code robuste et maintenable.
        </p>
        <ul className="mt-4 pl-5 list-disc text-700 leading-7">
          <li>Création de design systems avec Storybook</li>
          <li>Stylisation moderne avec Tailwind CSS</li>
          <li>Consommation d’API REST</li>
          <li>
            Tests unitaires et fonctionnels avec Jest & React Testing Library
          </li>
          <li>Utilisation de Docker et collaboration via GitLab</li>
        </ul>
      </div>
    </Container>
  );
};

export default Skills;
