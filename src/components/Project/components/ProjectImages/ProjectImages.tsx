import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ProjectImagesProps } from './ProjectImages.types';

// Variants pour l'animation
const imageVariants = (delay: number) => ({
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay,
    },
  },
});

const ProjectImages = ({ images }: ProjectImagesProps) => {
  return (
    <div className="mt-32 space-y-8 w-full">
      {!images.fourth ? (
        <>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // L'animation commence lorsque l'élément est à 30% visible
            variants={imageVariants(0)}
          >
            <Image
              src={images.second}
              alt="Project image 1"
              className="w-full object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariants(0.2)}
            >
              <Image
                src={images.third}
                alt="Project image 2"
                width={400}
                height={300}
                className="w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariants(0.4)}
            >
              <Image
                src={images.logo}
                alt="Project image 3"
                height={330}
                className="object-cover"
              />
            </motion.div>
          </div>
        </>
      ) : (
        <div className="grid grid-rows-2 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariants(0)}
            >
              <Image
                src={images.logo}
                alt="Project image 1"
                width={400}
                height={300}
                className="w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariants(0.2)}
            >
              <Image
                src={images.second}
                alt="Project image 2"
                width={400}
                height={300}
                className="w-full object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="relative w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariants(0.4)}
            >
              <Image
                src={images.third}
                alt="Project image 3"
                className="object-cover w-full"
              />
            </motion.div>

            {images.fourth && (
              <motion.div
                className="relative w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={imageVariants(0.6)}
              >
                <Image
                  src={images.fourth}
                  alt="Project image 4"
                  className="object-cover w-full"
                />
              </motion.div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectImages;
