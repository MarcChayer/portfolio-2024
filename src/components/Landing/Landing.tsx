import React from 'react';
import Image from 'next/image';
import Container from '_components/common/Container';
import logoMCNeon from '_svgs/logo-MC-neon.svg';

const Landing = () => (
  <Container className="Landing">
    <Image className="Landing-imageContainer" src={logoMCNeon} alt="Logo" />
    <div className="Landing-titleContent">
      <h1 className="Landing-title">Marc Chayer</h1>
      <p className="Landing-subtitle">Développeur Front-end & Designer UI</p>
    </div>
  </Container>
);

export default Landing;
