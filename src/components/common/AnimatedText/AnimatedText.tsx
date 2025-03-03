import React, { useEffect, useRef, useCallback } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';
import type { AnimatedTextProps } from './AnimatedText.types';

const defaultAnimations = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const AnimatedText = ({
  text,
  el: Wrapper = 'p',
  className,
  once = false,
  animation = defaultAnimations,
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const show = useCallback(() => {
    controls.start('visible');
  }, [controls]);

  useEffect(() => {
    if (isInView) {
      show();
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, show, once]);

  return (
    <Wrapper className={className}>
      <span className="sr-only">{textArray.join(' ')}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={lineIndex}>
            {line.split(' ').map((word, wordIndex) => (
              <span className="inline-block" key={wordIndex}>
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
