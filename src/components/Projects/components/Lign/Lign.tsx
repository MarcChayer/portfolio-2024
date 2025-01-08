import React, { useState } from 'react';
import type { LignProps } from './Lign.types';
import { motion } from 'framer-motion';
import Link from 'next/link';

const createTextAnimation = (text: string) => {
  return text.split('').map((char, idx) => (
    <motion.span
      key={idx}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{
        delay: idx * 0.05,
        duration: 0.2,
        ease: 'easeOut',
      }}
    >
      {char}
    </motion.span>
  ));
};

const Lign = ({ id, index, title, technos, year, setModal }: LignProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/projet/${id}`}>
      <div
        onMouseEnter={() => {
          setIsHovered(true);
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setModal({ active: false, index });
        }}
        className="Lign"
      >
        <h2 className="font-bold uppercase">{title}</h2>
        <p key={isHovered ? 'technos' : 'year'}>
          {createTextAnimation(isHovered ? year : technos)}
        </p>
      </div>
    </Link>
  );
};

export default Lign;
