import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import logoMC from '_svgs/logo-MC.svg';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  type Variants,
} from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useSmoothScroll from 'src/hooks/useSmoothScroll';

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
  handleNavigation,
  className = '',
  itemClassName = '',
  animate = false,
  variant,
}: {
  handleNavigation: (selector: string) => void;
  className?: string;
  itemClassName?: string;
  animate?: boolean;
  variant: 'desktop' | 'mobile';
}) => {
  const menuItems = [
    { label: 'Accueil', selector: '#home' },
    { label: 'Stack technique', selector: '#stack' },
    { label: 'Projets', selector: '#projets' },
  ];

  return (
    <ul className={className}>
      {menuItems.map((item, i) => (
        <motion.li
          key={`${variant}-${item.selector}-${i}`}
          variants={navItemVariants}
          custom={i}
          initial={animate ? 'hidden' : undefined}
          animate={animate ? 'visible' : undefined}
          exit={animate ? 'exit' : undefined}
        >
          <button
            className={`relative p-4 whitespace-nowrap ${itemClassName}`}
            onClick={() => handleNavigation(item.selector)}
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
  const navRef = useRef(null);

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
      ref={navRef}
      className="fixed hidden sm:flex items-center justify-between p-6 bg-opacity-0 backdrop-blur-md top-0 w-full"
      onHoverStart={() => setHidden(false)}
      animate={hidden ? 'hidden' : 'visible'}
      initial="visible"
      variants={navVariants}
      transition={{ duration: 0.3 }}
    >
      <Link href="/">
        <Image src={logoMC} alt="Logo du site" priority height={40} />
      </Link>
      <NavLinks
        handleNavigation={handleNavigation}
        className="flex flex-row gap-10"
        animate={true}
        variant="desktop"
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
      className="fixed sm:hidden flex flex-col bg-opacity-0 backdrop-blur-md top-0 w-full"
      initial={false}
      animate={{ height: menuOpen ? '100vh' : 'auto' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex items-center justify-between p-6">
        <Link href="/">
          <Image src={logoMC} alt="Logo du site" priority height={40} />
        </Link>
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
            handleNavigation={handleNavigation}
            className="flex flex-col items-center justify-center h-full gap-6"
            itemClassName="text-800 font-bold"
            animate={true}
            variant="mobile"
          />
        </motion.div>
      )}
    </motion.nav>
  );
};

const NavBar = () => {
  const { scrollTo } = useSmoothScroll();

  return (
    <header className="fixed top-0 z-20 w-full">
      <DesktopNav scrollTo={scrollTo} />
      <MobileNav scrollTo={scrollTo} />
    </header>
  );
};

export default NavBar;
