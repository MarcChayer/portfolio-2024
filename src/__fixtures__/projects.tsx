import trackfit1 from '_images/trackfit-first.jpg';
import trackfitLogo from '_images/trackfit-logo.svg';
import trackfit2 from '_images/trackfit-ordi.jpg';
import trackfit3 from '_images/trackfit-ipad.jpg';
import trackfit4 from '_images/trackfit-phone.jpg';
import mimado1 from '_images/mimado-first.jpg';
import mimadoLogo from '_images/mimado-logo.svg';
import mimado2 from '_images/mimado-phone.jpg';
import mimado3 from '_images/mimado-ipad.jpg';
import mimado4 from '_images/mimado-ordi.jpg';
import ltdm1 from '_images/LTDM-first.jpg';
import ltdmLogo from '_images/LTDM-logo.svg';
import ltdm2 from '_images/LTDM-carte.jpg';
import ltdm3 from '_images/LTDM-photo.jpg';
import asav1 from '_images/asav-first.jpg';
import asavLogo from '_images/asav-logo.svg';
import asav2 from '_images/asav-carte.jpg';
import asav3 from '_images/asav-magasin.jpg';
import asav4 from '_images/asav-camion.jpg';
import grayunit1 from '_images/grayunit-first.svg';
import grayunitLogo from '_images/grayunit-logo.svg';
import grayunit2 from '_images/grayunit-carte.jpg';
import grayunit3 from '_images/grayunit-devis.jpg';
import lpc1 from '_images/LPC-first.svg';
import lpcLogo from '_images/LPC-logo.svg';
import lpc2 from '_images/LPC-camion.jpg';
import lpc3 from '_images/LPC-carte.jpg';
import scm1 from '_images/SCM-first.svg';
import scmLogo from '_images/SCM-logo.svg';
import scm2 from '_images/SCM-carte.jpg';
import scm3 from '_images/SCM-soudeur.jpg';

import type { StaticImageData } from 'next/image';

export type ProjectsType = {
  id: string;
  fullName: string;
  technos: string;
  year: string;
  description: string;
  tag: string[];
  website?: string;
  github?: string;
  images: {
    first: StaticImageData;
    logo: StaticImageData;
    second: StaticImageData;
    third: StaticImageData;
    fourth?: StaticImageData;
  };
};

export const projects: ProjectsType[] = [
  {
    year: '2021',
    id: '2',
    fullName: 'Hotel Mimado',
    technos: 'React.js - Adobe Illustrator',
    description:
      "Conception et développement d'un site vitrine moderne pour un établissement hôtelier au Cameroun. Interface responsive développée, avec une attention particulière portée sur l'expérience utilisateur et le design.",
    github: 'https://github.com/MarcChayer/hotel-Mimado',
    tag: ['web', 'design'],
    website: 'https://mimado-hotel.netlify.app/',
    images: {
      first: mimado1,
      logo: mimadoLogo,
      second: mimado2,
      third: mimado3,
      fourth: mimado4,
    },
  },
  {
    year: '2020',
    id: '5',
    fullName: 'TrackFit',
    technos: 'React - Node.js - PostgreSQL - Figma',
    description:
      "Application de suivi nutritionnel et sportif développée en équipe dans le cadre de notre projet de fin de formation. Architecture construite avec React pour le front-end, Node.js pour l'API, et PostgreSQL pour la gestion des données. Mise en œuvre de fonctionnalités de tracking personnalisé.",
    tag: ['web', 'design'],
    github:
      'https://github.com/MarcChayer/TrackFit-Journal-alimentaire-et-sportif',
    images: {
      first: trackfit1,
      logo: trackfitLogo,
      second: trackfit2,
      third: trackfit3,
      fourth: trackfit4,
    },
  },
  {
    year: '2023',
    id: '1',
    fullName: 'ASAV',
    technos: 'Adobe Illustrator - Adobe Photoshop',
    description:
      "Développement complet de l'identité visuelle pour une entreprise spécialisée en installations thermiques et climatisation. Création d'un logo distinctif sous Illustrator, reflétant le professionnalisme et l'expertise technique de l'entreprise. Le design s'articule autour d'une approche moderne tout en conservant une lisibilité optimale sur tous les supports de communication.",
    tag: ['design'],
    images: {
      first: asav1,
      logo: asavLogo,
      second: asav2,
      third: asav3,
      fourth: asav4,
    },
  },
  {
    year: '2021',
    id: '4',
    fullName: 'GrayUnit',
    technos: 'Adobe Illustrator - Adobe Photoshop',
    description:
      "Élaboration complète de la charte graphique pour une entreprise tech spécialisée en conception logicielle et formation. Création d'une identité visuelle cohérente déclinée sur l'ensemble des supports corporate (logo, cartes de visite, documents commerciaux). Design moderne et épuré traduisant l'expertise de l'entreprise.",
    tag: ['design'],
    images: {
      first: grayunit1,
      logo: grayunitLogo,
      second: grayunit2,
      third: grayunit3,
    },
  },
  {
    year: '2020',
    id: '7',
    fullName: 'LP génie climatique',
    technos: 'Adobe Illustrator',
    description:
      "Conception de l'identité visuelle pour un spécialiste en équipements thermiques et climatisation, incluant la création du logo et des cartes de visite.",
    tag: ['design'],
    images: {
      first: lpc1,
      logo: lpcLogo,
      second: lpc3,
      third: lpc2,
    },
  },
  {
    year: '2020',
    id: '8',
    fullName: 'Le toit de Mauzac',
    technos: 'Adobe Illustrator - Adobe Photoshop',
    description:
      "Création d'une identité visuelle distinctive pour une entreprise de charpente traditionnelle, industrielle, centrée sur un logo symbolisant expertise et artisanat. Design alliant modernité et tradition pour refléter le savoir-faire de l'entreprise dans le domaine de la charpente.",
    tag: ['design'],
    images: {
      first: ltdm1,
      logo: ltdmLogo,
      second: ltdm2,
      third: ltdm3,
    },
  },
  {
    year: '2022',
    id: '9',
    fullName: 'SCM SERVICE',
    technos: 'Adobe Illustrator',
    description:
      "Développement de l'identité visuelle pour une entreprise de soudure et chaudronnerie. Design illustré, adapté au secteur de la métallerie, avec une attention particulière portée à la lisibilité et à l'impact visuel.",
    tag: ['design'],
    images: {
      first: scm1,
      logo: scmLogo,
      second: scm2,
      third: scm3,
    },
  },
];
