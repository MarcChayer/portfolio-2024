import React from 'react';
import Container from '_components/common/Container';
import { motion } from 'framer-motion';
import LogoNeon from '_svgs/LogoNeon';
import AnimatedText from '_components/common/AnimatedText';

const Landing = () => {
  return (
    <Container className="md:relative">
      <motion.div
        initial={{ x: '20%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="w-full md:w-auto"
      >
        <LogoNeon className="z-10 w-full md:translate-x-[20%] md:h-[min(50vh,750px)]" />
      </motion.div>

      <div className="z-10 text-center md:absolute md:translate-x-[-20%] md:translate-y-[40%] md:text-left">
        <motion.div
          initial={{ x: '-20%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.25 }}
        >
          <AnimatedText
            el="h1"
            text="Marc Chayer"
            className="font-bold leading-none text-[min(10vw,60px)] sm:text-[min(10vw,65px)] md:text-[min(10vw,70px)] lg:text-[min(10vw,80px)] xl:text-[min(10vw,90px)] whitespace-nowrap"
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
            className="font-light text-[min(4vw,20px)] md:text-[min(4vw,22px)] lg:text-[min(4vw,25px)] xl:text-[min(4vw,28px)] md:max-w-[800px] md:ml-1.5"
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
