import type { ReactNode } from 'react';
import reactLogo from '_svgs/react.svg';
import NextJs from '_svgs/next.svg';
import typeScript from '_svgs/typescript.svg';
import tailwindCss from '_svgs/tailwindCss.svg';
import postgreSql from '_svgs/postgreSql.svg';
import github from '_svgs/github.svg';

type SkillType = {
  id: number;
  title: string;
  logo: string;
  type: 'Front-end' | 'Back-end' | 'Design' | 'Outils';
};

type CategoryType = {
  id: number;
  name: string;
  skills: SkillType[];
};

export const skills: CategoryType[] = [
  {
    id: 1,
    name: 'Front-end',
    skills: [
      {
        id: 1,
        title: 'ReactJs',
        type: 'Front-end',
        logo: reactLogo,
      },
      {
        id: 2,
        title: 'NextJs',
        type: 'Front-end',
        logo: NextJs,
      },
      {
        id: 3,
        title: 'TypeScript',
        type: 'Front-end',
        logo: typeScript,
      },
      {
        id: 4,
        title: 'TailwindCss',
        type: 'Front-end',
        logo: tailwindCss,
      },
    ],
  },
  {
    id: 2,
    name: 'Back-end (notions)',
    skills: [
      {
        id: 1,
        title: 'NodeJs',
        type: 'Back-end',
        logo: reactLogo,
      },
      {
        id: 2,
        title: 'ExpressJs',
        type: 'Back-end',
        logo: reactLogo,
      },
      {
        id: 3,
        title: 'PostgreSQL',
        type: 'Back-end',
        logo: postgreSql,
      },
    ],
  },
  {
    id: 3,
    name: 'Design',
    skills: [
      {
        id: 1,
        title: 'Figma',
        type: 'Design',
        logo: reactLogo,
      },
      {
        id: 2,
        title: 'Illustrator',
        type: 'Design',
        logo: reactLogo,
      },
      {
        id: 3,
        title: 'Photoshop',
        type: 'Design',
        logo: reactLogo,
      },
      {
        id: 4,
        title: 'InDesign',
        type: 'Design',
        logo: reactLogo,
      },
    ],
  },
  {
    id: 4,
    name: 'Outils',
    skills: [
      {
        id: 1,
        title: 'gitlab & github',
        type: 'Outils',
        logo: github,
      },
      {
        id: 2,
        title: 'StoryBook',
        type: 'Outils',
        logo: reactLogo,
      },
      {
        id: 3,
        title: 'React Query',
        type: 'Outils',
        logo: reactLogo,
      },
      {
        id: 4,
        title: 'Jest',
        type: 'Outils',
        logo: reactLogo,
      },
      {
        id: 5,
        title: 'React Testing Library',
        type: 'Outils',
        logo: reactLogo,
      },
    ],
  },
];
