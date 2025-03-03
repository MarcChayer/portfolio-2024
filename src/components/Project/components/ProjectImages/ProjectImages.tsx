import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ProjectImagesProps } from './ProjectImages.types';

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
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants(0)}
            className="aspect-[4/3] relative"
          >
            <Image
              src={images.second}
              alt="Project image 1"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              loading="lazy"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariants(0.2)}
              className="aspect-[4/3] relative"
            >
              <Image
                src={images.third}
                alt="Project image 2"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariants(0.3)}
              className="flex items-center justify-center relative w-full h-48"
            >
              <Image
                src={images.logo}
                alt="Project image 3"
                className="object-contain"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                loading="lazy"
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
              className="flex items-center justify-center relative w-full h-48"
            >
              <Image
                src={images.logo}
                alt="Project image 1"
                className="object-contain"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariants(0.2)}
              className="aspect-[4/3] relative"
            >
              <Image
                src={images.second}
                alt="Project image 2"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariants(0.3)}
              className="aspect-[4/3] relative"
            >
              <Image
                src={images.third}
                alt="Project image 3"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </motion.div>

            {images.fourth && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={imageVariants(0.4)}
                className="aspect-[4/3] relative"
              >
                <Image
                  src={images.fourth}
                  alt="Project image 4"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
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
