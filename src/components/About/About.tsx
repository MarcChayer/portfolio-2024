import Container from '_components/common/Container';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <Container id="a-propos">
      <div className="flex items-center justify-center gap-8" id="a-propos">
        <div className="flex flex-col gap-4 w-1/3">
          <p>King of the north</p>
          <p>Hell Yeah</p>
          {/* <p>
            Dessinant depuis petit, je me suis naturellement orienté vers des
            études de graphisme mêlant design et communication visuelle.
          </p>
          <p>
            Après plusieurs années en tant que graphiste, je me suis lancé le
            défi de devenir développeur, afin de pouvoir lier ces deux
            disciplines.
          </p>
          <p>
            J’ai une affinitée particulière pour les animations et le fait
            d’offrir la meilleure expérience utilisateur possible.
          </p> */}
        </div>
        <Image
          src="/images/marcProfileV2.png"
          alt="Marc Chayer"
          width={400}
          height={0}
        />
      </div>
    </Container>
  );
};

export default About;
