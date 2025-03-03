import React from 'react';
import type { PhraseProps } from './Phrase.types';
import LogoNeon from '_svgs/LogoNeon';

const Phrase = ({ text }: PhraseProps) => (
  <div className="relative px-5 flex gap-12 items-center">
    <p className="text-[6.5vh] md:text-[6.5vw] font-bold uppercase leading-tight text-white text-opacity-90">
      {text}
    </p>
    <span className="relative h-[6vh] md:h-[6vw] aspect-square">
      <LogoNeon />
    </span>
  </div>
);

export default Phrase;
