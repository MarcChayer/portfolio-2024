import Container from '_components/common/Container';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <Container className="gap-20 xl:flex-row" id="a-propos">
      <div className="max-w-lg 2xs:max-w-md">
        <h2 className="2xs:text-800 text-950 font-bold">
          Un petit tour sur <span className="text-secondary">mon parcours</span>
        </h2>
        <p className="mt-8 text-700 leading-7">
          Développeur front-end avec 10 ans d'expérience en design graphique.
          Diplômé en communication visuelle, cela fait maintenant quatre ans que
          j'ai évolué vers le développement web.
        </p>
        <p className="mt-4 text-700 leading-7">
          Mon parcours de designer me permet d'apporter une sensibilité
          particulière à l'UX et aux détails visuels dans chaque projet.
        </p>
        <p className="mt-4 text-700 leading-7">
          Mon objectif : créer des expériences web uniques, réactives et
          sécurisés.
        </p>
      </div>
      <Image
        src="/images/marcProfileV2.png"
        alt="Marc Chayer"
        width={400}
        height={0}
      />
    </Container>
  );
};

export default About;
