import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="py-8 px-10 flex flex-col gap-8 mt-96 sm:py-10 sm:px-16">
      <p className="flex flex-col">
        <span>Portfolio de</span>
        <span>Marc</span>
        <span>Chayer ©</span>
      </p>
      <div className="flex flex-col text-right pt-8 gap-8 border-secondary border-t-2 xs:flex-row xs:justify-end">
        <Link
          className=""
          href="https://www.linkedin.com/in/chayer-marc/"
          target="_blank"
          rel="noopener"
        >
          Linkedin
        </Link>
        <Link
          className=""
          href="https://github.com/MarcChayer?tab=repositories"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </Link>
        <Link
          className=""
          href={''}
          download="cv marc chayer"
          target="_blank"
          rel="noopener"
        >
          CV
        </Link>
      </div>
    </div>
  );
};

export default Footer;
