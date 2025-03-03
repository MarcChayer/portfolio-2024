import React, { useRef } from 'react';
import type { SectionWrapperProps } from './SectionWrapper.types';
import { motion, useInView, type Variants } from 'framer-motion';
import Slide from './Components/Slide';

const animations: Record<string, Variants> = {
  fadeScale: {
    hidden: {
      scale: 0.9,
      y: 50,
      transition: { duration: 0.375, ease: 'easeOut' },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.375, ease: 'easeOut' },
    },
  },
};

const SectionWrapper = ({
  children,
  text,
  id,
  direction,
  left,
  className = '',
}: SectionWrapperProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef);

  return (
    <section className="flex flex-col min-h-screen" id={id}>
      {text && direction && left && (
        <div className="relative">
          <Slide direction={direction} left={left} text={text} />
        </div>
      )}

      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={animations.fadeScale}
        className={`section ${className} flex flex-col items-center justify-center m-auto w-4/5 lg:w-3/4`}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
