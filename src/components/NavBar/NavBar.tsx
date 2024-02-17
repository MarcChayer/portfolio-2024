import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoMC from '_svgs/logo-MC.svg';
import burger from '_svgs/burger.svg';

import { AnimatePresence, motion } from 'framer-motion';

const NavBar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };
  return (
    <header className="py-8 px-10 flex items-center justify-between h-[104px] sm:py-10 sm:px-16">
      <Link href="/">
        <Image className="top-8 fixed z-10" src={logoMC} alt="Logo du site" />
      </Link>
      <nav className="self-end">
        <ul className="hidden sm:flex sm:gap-10">
          <li>
            <Link href="#competences">Compétences</Link>
          </li>
          <li>
            <Link href="#projets">Projets</Link>
          </li>
          <li>
            <Link href="#a-propos">A propos</Link>
          </li>
        </ul>
      </nav>
      <div className="sm:hidden">
        <button
          className="transitionAll duration-300 border-primary text-primary hover:border-white hover:text-white border-[2px] rounded-lg p-4"
          type="button"
          onClick={toggleNav}
        >
          burger
        </button>
        <AnimatePresence>
          {isNavOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '90%',
                background: 'rgba(26, 35, 51, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '10px',
              }}
            >
              <ul className="flex flex-col gap-10">
                <li>
                  <Link href="#competences">Compétences</Link>
                </li>
                <li>
                  <Link href="#projets">Projets</Link>
                </li>
                <li>
                  <Link href="#a-propos">A propos</Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default NavBar;
