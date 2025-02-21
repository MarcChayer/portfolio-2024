import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-8 px-10 flex flex-col gap-8 mt-52 sm:py-10 sm:px-16">
      <p className="flex flex-col">
        <span>Portfolio de</span>
        <span>Marc</span>
        <span>Chayer ©</span>
      </p>
      <div className="flex justify-end text-right pt-8 gap-8 border-secondary border-t-2 xs:flex-row xs:justify-end">
        <Link
          href="https://www.linkedin.com/in/chayer-marc/"
          target="_blank"
          rel="noopener"
        >
          Linkedin
        </Link>

        <Link
          href="https://github.com/MarcChayer"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </Link>
        <Link
          href={'/CV-MarcChayer.pdf'}
          download="CV Marc Chayer"
          target="_blank"
          rel="noopener"
        >
          CV
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
