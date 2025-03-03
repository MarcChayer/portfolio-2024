import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import type { SlideProps } from './Slide.types';
import Phrase from '../Phrase';

const Slide = ({ direction, left, text }: SlideProps) => {
  const slideRef = useRef<HTMLDivElement>(null);

  const directionF = direction === 'left' ? -1 : 1;

  const { scrollYProgress } = useScroll();

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [-100, 600 * directionF * -1],
  );

  const smoothX = useSpring(x, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  return (
    <div ref={slideRef} className="w-full overflow-hidden">
      <motion.div
        style={{
          x: smoothX,
          left,
        }}
        className="relative flex whitespace-nowrap"
      >
        {[...Array(6)].map((_, i) => (
          <Phrase key={i} text={text} />
        ))}
      </motion.div>
    </div>
  );
};

export default Slide;
