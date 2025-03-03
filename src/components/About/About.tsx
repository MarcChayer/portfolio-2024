import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-32 w-4/5 lg:w-3/4 gap-20 xl:flex-row"
      id="a-propos"
    >
      <div className="max-w-xl">
        <p className="mt-8 text-900 leading-9">
          Développeur web front-end avec un background de graphiste.
        </p>
        <p className="mt-4 text-900 leading-9">
          Mon objectif : Allier design et technique pour créer des expériences
          web uniques.
        </p>
      </div>
    </div>
  );
};

export default About;
