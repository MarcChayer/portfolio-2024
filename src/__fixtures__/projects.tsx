import trackfit from '_images/trackfit.jpg';
import mimadohotel from '_images/mimadoHotel.jpg';
import portfolio from '_images/portfolio.jpg';
import laBoite from '_images/images/laBoite.jpg';
import lpgc from '_images/images/lpGenieClimatique.jpg';
import ltdm from '_images/images/leToitDeMauzac.jpg';
import mof from '_images/images/MOF.jpg';
import d3d from '_images/images/doudoune.png';
import type { ReactNode } from 'react';
import type { StaticImageData } from 'next/image';

type ProjectsType = {
  id: number;
  fullName: string;
  technos: string;
  description: string;
  tag: string[];
  website?: string;
  github?: string;
  image: StaticImageData;
}[];

export const projects: ProjectsType = [
  {
    id: 1,
    fullName: 'TrackFit - Journal alimentaire',
    technos: 'Html - Scss - React - Redux - Node.js - PostgreSQL',
    description:
      "Journal alimentaire et sportif réalisé lors du projet de fin de formation chez O'clock.",
    tag: ['web', 'design'],
    github:
      'https://github.com/MarcChayer/TrackFit-Journal-alimentaire-et-sportif',
    image: trackfit,
  },
  {
    id: 2,
    fullName: "Hotel Mimado - Les pieds dans l'eau",
    technos: 'Html - Scss - React',
    description: 'Site vitrine pour un hôtel se trouvant au Cameroun.',
    github: 'https://github.com/MarcChayer/hotel-Mimado/tree/mobileFirst',
    tag: ['web', 'design'],
    website: 'https://transcendent-dolphin-b02a8d.netlify.app/',
    image: mimadohotel,
  },
  {
    id: 3,
    fullName: 'Premier portfolio',
    technos: 'Html - Scss - React - Redux',
    description:
      'Réalisation de mon premier portfolio en sortant de formation. ne seras plus visible',
    github: 'https://github.com/MarcChayer/portfolio',
    tag: ['web', 'design'],
    website: 'https://marc-chayer.netlify.app/',
    image: portfolio,
  },
  {
    id: 4,
    fullName: 'La boite',
    technos: 'Adobe Illustrator',
    description: "Création du logo d'une boite d'événementiel",
    image: laBoite,
    tag: ['design'],
  },
  {
    id: 5,
    fullName: 'LP génie climatique',
    technos: 'Adobe Illustrator',
    description:
      "Création du logo et de la carte de visite d'une société spécialisée dans le secteur d'activité des travaux d'installation d'équipements thermiques et de climatisation.",
    tag: ['design'],
    image: lpgc,
  },
  {
    id: 6,
    fullName: 'Le toit de Mauzac',
    technos: 'Adobe Illustrator',
    description:
      "Création du logo d'une boite spécialisée dans le secteur d'activité des travaux de charpente.",
    tag: ['design'],
    image: ltdm,
  },
  {
    id: 7,
    fullName: 'Men On Fire',
    technos: 'Adobe Illustrator',
    description:
      "Création du logo d'une marque de sport spécialisée dans le crossfit.",
    tag: ['design'],
    image: mof,
  },
];
