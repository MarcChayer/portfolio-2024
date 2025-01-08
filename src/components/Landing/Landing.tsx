import React from 'react';
import Container from '_components/common/Container';
import { motion } from 'framer-motion';
import LogoNeon from '_svgs/LogoNeon';
import AnimatedText from '_components/common/AnimatedText';

const Landing = () => {
  return (
    <Container className="relative lg:!w-2/3 lg:translate-x-[7%]">
      <motion.div
        initial={{ x: '20%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="relative w-full lg:w-auto lg:h-[640px]"
      >
        <LogoNeon />
      </motion.div>

      <div className="lg:absolute w-full lg:translate-x-[7%] lg:translate-y-[40%] text-center lg:text-left">
        <motion.div
          initial={{ x: '-20%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.25 }}
        >
          <AnimatedText
            el="h1"
            text="Marc Chayer"
            className="font-bold leading-none text-[min(10vw,100px)] w-full whitespace-nowrap"
            once
          />
        </motion.div>

        <motion.div
          initial={{ x: '-25%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.15 }}
        >
          <AnimatedText
            el="p"
            text={['Développeur React.js - Next.js']}
            className="font-light text-[min(auto)] w-full xs:text-[min(4vw,32px)] md:max-w-[800px] md:ml-1.5"
            once
            animation={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.05,
                },
              },
            }}
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default Landing;
