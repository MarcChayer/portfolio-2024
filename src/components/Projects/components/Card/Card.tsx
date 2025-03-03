import React from 'react';
import Image from 'next/image';
import type { CardProps } from './Card.types';
import Link from 'next/link';

const Card = ({ project }: CardProps) => (
  <Link href={`/projet/${project.id}`} passHref>
    <div className="mb-24 flex flex-col items-start md:mb-12">
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={project.images.first}
          alt={project.fullName}
          fill
          style={{ objectFit: 'cover' }}
          sizes="auto"
        />
      </div>

      <div className="pt-4 flex flex-col items-start w-full">
        <h2 className="text-900 uppercase font-bold pb-4 text-white border-b-2 border-solid border-secondary w-full">
          {project.fullName}
        </h2>

        <p className="text-600 italic pt-4 pb-4">{project.technos}</p>

        <p className="text-700 leading-7">{project.description}</p>
      </div>
    </div>
  </Link>
);

export default Card;
