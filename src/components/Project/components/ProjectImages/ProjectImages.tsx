import React from 'react';
import Image from 'next/image';
import type { ProjectImagesProps } from './ProjectImages.types';

const ProjectImages = ({ images }: ProjectImagesProps) => {
  return (
    <div className="mt-32 space-y-8 w-full">
      {!images.fourth ? (
        <>
          <Image
            src={images.second}
            alt="Project image 1"
            className="w-full object-cover"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
            <Image
              src={images.third}
              alt="Project image 2"
              width={400}
              height={300}
              className="w-full object-cover"
            />
            <Image
              src={images.logo}
              alt="Project image 3"
              height={330}
              className="object-cover"
            />
          </div>
        </>
      ) : (
        <div className="grid grid-rows-2 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Image
              src={images.logo}
              alt="Project image 1"
              width={400}
              height={300}
              className="w-full object-cover"
            />
            <Image
              src={images.second}
              alt="Project image 2"
              width={400}
              height={300}
              className="w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full">
              <Image
                src={images.third}
                alt="Project image 3"
                className="object-cover w-full"
              />
            </div>
            {images.fourth && (
              <div className="relative w-full">
                <Image
                  src={images.fourth}
                  alt="Project image 4"
                  className="object-cover w-full"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectImages;
