import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import logoMC from '_svgs/logo-MC.svg';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  type Variants,
} from 'framer-motion';
import { useRouter } from 'next/router';

const navItemVariants = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: 'easeInOut',
    },
  }),
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const NavLinks = ({
  onItemClick,
  className = '',
  itemClassName = '',
  animate = false,
}: {
  onItemClick: (selector: string) => void;
  className?: string;
  itemClassName?: string;
  animate?: boolean;
}) => {
  const menuItems = [
    { label: 'À propos', selector: '#a-propos' },
    { label: 'Stack technique', selector: '#stack' },
    { label: 'Projets', selector: '#projets' },
  ];

  return (
    <ul className={className}>
      {menuItems.map((item, i) => (
        <motion.li
          key={item.selector}
          variants={navItemVariants}
          custom={i}
          initial={animate ? 'hidden' : undefined}
          animate={animate ? 'visible' : undefined}
          exit={animate ? 'exit' : undefined}
        >
          <button
            className={`p-4 whitespace-nowrap ${itemClassName}`}
            onClick={() => onItemClick(item.selector)}
          >
            {item.label}
          </button>
        </motion.li>
      ))}
    </ul>
  );
};

const DesktopNav = ({ scrollTo }: { scrollTo: (selector: string) => void }) => {
  const router = useRouter();
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  const handleNavigation = (selector: string) => {
    const url = router.pathname.includes('projet/');
    if (scrollTo && !url) {
      scrollTo(selector);
    } else {
      router.push(`/${selector}`);
    }
  };

  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 100) {
      setHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  const navVariants: Variants = {
    visible: { y: '0%' },
    hidden: { y: '-90%' },
  };

  return (
    <motion.nav
      className="hidden sm:flex items-center justify-between p-6 bg-primary-dark backdrop-blur-md bg-opacity-20"
      onHoverStart={() => setHidden(false)}
      animate={hidden ? 'hidden' : 'visible'}
      initial="visible"
      variants={navVariants}
      transition={{ duration: 0.3 }}
    >
      <a href="/">
        <Image src={logoMC} alt="Logo du site" priority height={40} />
      </a>
      <NavLinks
        onItemClick={handleNavigation}
        className="flex flex-row gap-10"
        animate={true}
      />
    </motion.nav>
  );
};

const MobileNav = ({ scrollTo }: { scrollTo: (selector: string) => void }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleNavigation = (selector: string) => {
    const url = router.pathname.includes('projet/');
    if (scrollTo && !url) {
      scrollTo(selector);
    } else {
      router.push(`/${selector}`);
    }
    setMenuOpen(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > 50) {
      setMenuOpen(distance < 0);
    }
  };

  return (
    <motion.nav
      className="sm:hidden flex flex-col bg-primary-dark backdrop-blur-md bg-opacity-20"
      initial={false}
      animate={{ height: menuOpen ? '100vh' : 'auto' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex items-center justify-between p-6">
        <a href="/">
          <Image src={logoMC} alt="Logo du site" priority height={40} />
        </a>
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          animate={{ rotate: menuOpen ? 360 : 0 }}
          className="p-4"
        >
          {menuOpen ? 'Fermer' : 'Menu'}
        </motion.button>
      </div>

      {menuOpen && (
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <NavLinks
            onItemClick={handleNavigation}
            className="flex flex-col items-center justify-center h-full gap-6"
            itemClassName="text-800 font-bold"
            animate={true}
          />
        </motion.div>
      )}
    </motion.nav>
  );
};

const NavBar = ({ scrollTo }: { scrollTo: (selector: string) => void }) => {
  return (
    <header className={`fixed top-0 z-20 w-full`}>
      <AnimatePresence>
        <DesktopNav scrollTo={scrollTo} />
        <MobileNav scrollTo={scrollTo} />
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
