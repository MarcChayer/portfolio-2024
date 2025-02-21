import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const StickyCursor = () => {
  const [isClicking, setIsClicking] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cursorSize = 30;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const clickableElements = document.querySelectorAll('button, a, Link');

    const handleMouseEnter = () => setIsHoveringClickable(true);
    const handleMouseLeave = () => setIsHoveringClickable(false);

    clickableElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x.set(e.clientX - cursorSize / 2);
      mouse.y.set(e.clientY - cursorSize / 2);
      setIsVisible(true);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeaveWindow);

    return () => {
      clickableElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });

      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeaveWindow);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return isVisible ? (
    <motion.div
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        backgroundColor: '#89AFC5',
      }}
      animate={{
        width: cursorSize,
        height: cursorSize,
        scale: isClicking ? 0.9 : isHoveringClickable ? 3.5 : 1,
        opacity: isHoveringClickable ? 0.25 : 1,
      }}
      transition={{
        type: 'spring',
        damping: 12,
        stiffness: 200,
      }}
      className="fixed rounded-full pointer-events-none z-50"
    />
  ) : null;
};

export default StickyCursor;
