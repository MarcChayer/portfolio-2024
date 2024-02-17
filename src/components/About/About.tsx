import Container from '_components/common/Container';
import React from 'react';
import Project from './components/BlockParagraph';
import Image from 'next/image';

const About = () => {
  return (
    <Container className="About" title="à propos" id="a-propos">
      <div className="grid grid-cols-1 grid-rows-none gap-24 w-full 2xl:w-3/4 md:grid-rows-5 md:grid-cols-2">
        <Project step="1." title="Mes débuts" className="row-span-2">
          Dessinant depuis petit, je me suis naturellement orienté vers des
          études de graphisme mêlant design et communication visuelle, ce qui
          m'a permis d'accéder à un poste de graphiste dans lequel j'ai exercé
          pendant plus de 9 ans.
        </Project>
        <Project step="2." title="Un nouveau défi" className="row-span-3">
          Ayant toujours eu un attrait pour le design d'interface et la création
          d'expériences utilisateurs fluide et percutante, je me suis lancé un
          défi, celui de réaliser une reconversion, me formant au développement
          web, afin de pouvoir allier design et développement.
        </Project>
        <Project className="row-span-3 md:row-start-4">
          <Image
            className="absolute -bottom-12 right-0 w-10/12 2xs:w-full xs:w-7/12 sm:xs:w-6/12 md:w-full lg:w-9/12"
            src="/images/marcProfileV2.png"
            alt="Logo"
            width={400}
            height={500}
          />
        </Project>
        <Project
          step="3."
          title="La résultante"
          className="row-span-2 row-start-6 md:row-start-5 "
        >
          Fort d'une première expérience réussi en tant que développeur front,
        </Project>
      </div>
    </Container>
  );
};

export default About;
